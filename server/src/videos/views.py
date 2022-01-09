from rest_framework import viewsets, permissions
from .models import Video
from .serializers import VideoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class VideoViewset(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class VideoAnalyticsAPIView(APIView):
    def post(self, *args, **kwargs):
        video = Video.objects.get(pk=self.kwargs["id"])
        video.views.add(self.request.user)
        return Response({"views": video.get_views_count()}, status=200)
