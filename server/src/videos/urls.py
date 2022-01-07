from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VideoViewset

app_name = "videos"

router = DefaultRouter()
router.register("", VideoViewset)

urlpatterns = router.urls
