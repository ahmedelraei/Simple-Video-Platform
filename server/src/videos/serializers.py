from rest_framework import serializers
from .models import Video
from django.conf import settings


class VideoSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField()
    views = serializers.IntegerField(source="get_views_count", read_only=True)

    class Meta:
        model = Video
        fields = "__all__"

    def get_owner(self, obj):
        return obj.owner.username
