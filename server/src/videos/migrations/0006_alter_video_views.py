# Generated by Django 4.0.1 on 2022-01-13 00:04

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('videos', '0005_alter_video_views'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='views',
            field=models.ManyToManyField(blank=True, related_name='views', to=settings.AUTH_USER_MODEL),
        ),
    ]
