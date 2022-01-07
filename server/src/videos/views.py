from rest_framework import viewsets, permissions
from .models import Video
from .serializers import VideoSerializer


class VideoViewset(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        print(self.request.user)
        serializer.save(owner=self.request.user)
