# Generated by Django 4.0.1 on 2022-01-13 00:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_rename_is_active_user_active_user_admin_user_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default='admin', max_length=20),
            preserve_default=False,
        ),
    ]
