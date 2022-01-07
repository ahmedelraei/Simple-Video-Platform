from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import AuthenticateSerializer

class Authenticate(TokenObtainPairView):
    serializer_class = AuthenticateSerializer
