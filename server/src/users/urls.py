from django.contrib import admin
from django.urls import path
from .views import Authenticate
from rest_framework_simplejwt.views import TokenRefreshView

app_name = "users"

urlpatterns = [
    path("authenticate/", Authenticate.as_view(), name="authenticate"),
    path(
        "authenticate/refresh/", TokenRefreshView.as_view(), name="authenticate_refresh"
    ),
]
