from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from users.models import User


class AuthenticateSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)

        data["user"] = self.user.username
        data["access"] = str(refresh.access_token)
        data["refresh"] = str(refresh)

        return data


class UserRegistrationSerializer(serializers.ModelSerializer):
    """serialize a User Object"""

    email = serializers.CharField(required=True, style={"placeholder": "Email"})
    username = serializers.CharField(required=True, style={"placeholder": "Username"})
    country = serializers.CharField(required=True, style={"placeholder": "Country"})
    gender = serializers.CharField(source="get_gender_display")

    class Meta:
        model = User
        fields = ["email", "username", "country", "gender", "password"]

    def create(self, validated_data):
        user = User(
            email=validated_data["email"],
            username=validated_data["username"],
            country=validated_data["country"],
            gender=validated_data["get_gender_display"],
            password=validated_data["password"],
        )
        user.save()
        return user
