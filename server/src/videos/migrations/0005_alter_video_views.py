# Generated by Django 4.0.1 on 2022-01-12 23:53

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('videos', '0004_video_views_alter_video_updated_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='views',
            field=models.ManyToManyField(blank=True, null=True, related_name='views', to=settings.AUTH_USER_MODEL),
        ),
    ]