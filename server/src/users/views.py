from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import AuthenticateSerializer
from rest_framework import generics, permissions, status
from .serializers import UserRegistrationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .utils import countries
import json


class Authenticate(TokenObtainPairView):
    serializer_class = AuthenticateSerializer


class RegistrationAPIView(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserRegistrationSerializer

    def post(self, request):
        user_serializer = self.serializer_class(data=request.data)
        user_serializer.is_valid(raise_exception=True)
        user_serializer.save()

        return Response({"data": user_serializer.data}, status=status.HTTP_201_CREATED)


class CountriesList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        json_data = json.loads(countries)
        return Response(json_data)
