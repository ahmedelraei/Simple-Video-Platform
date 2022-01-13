from django.db import models
from django.conf import settings
from django.utils import timezone


class Video(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=80)
    video = models.FileField()
    upload_date = models.DateTimeField(default=timezone.now)
    updated_date = models.DateTimeField(default=timezone.now)
    views = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="views", blank=True)
    likes = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="likes", blank=True)
    dislikes = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="dislikes", blank=True)

    def save(self, *args, **kwargs):
        if not kwargs.pop("skip_updated_date", False):
            self.updated_date = timezone.now()

        super(Video, self).save(*args, **kwargs)

    def get_views_count(self):
        return self.views.count()
