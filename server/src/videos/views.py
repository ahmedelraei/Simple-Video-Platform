from urllib import request
from rest_framework import viewsets, permissions
from .models import Video
from .serializers import VideoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend


class VideoViewset(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filterset_fields = ["owner__username"]
    # ordering_fields = ["upload_date", "id"]
    ordering = "-upload_date"

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class VideoAnalyticsAPIView(APIView):
    def get(self, *args, **kwargs):
        male_views = Video.objects.filter(owner=self.request.user, views__gender="M").count()
        female_views = Video.objects.filter(owner=self.request.user, views__gender="F").count()
        return Response(
            [
                {"gender": "Male", "views": male_views},
                {"gender": "Female", "views": female_views},
            ],
            status=200,
        )

    def post(self, *args, **kwargs):
        video = Video.objects.get(pk=self.kwargs["id"])
        video.views.add(self.request.user)
        return Response({"views": video.get_views_count()}, status=200)
