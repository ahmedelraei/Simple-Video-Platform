from django.contrib import admin
from django.urls import path
from .views import Authenticate

app_name = "users"

urlpatterns = [path("authenticate/", Authenticate.as_view(), name="authenticate")]
