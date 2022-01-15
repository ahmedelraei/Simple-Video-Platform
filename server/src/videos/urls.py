from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VideoAnalyticsAPIView, VideoViewset

app_name = "videos"

router = DefaultRouter()
router.register("", VideoViewset)

urlpatterns = [
    path(
        "analytics/<int:id>",
        VideoAnalyticsAPIView.as_view(),
        name="video_view_trigger",
    ),
    path(
        "analytics/",
        VideoAnalyticsAPIView.as_view(),
        name="VideoAnalyticsAPIView",
    ),
]

urlpatterns += router.urls
