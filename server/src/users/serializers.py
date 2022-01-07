from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class AuthenticateSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)

        data["user"] = self.user.username
        data["access"] = str(refresh.access_token)
        data["refresh"] = str(refresh)

        return data
