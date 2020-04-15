from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User Serializres
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
      model = User
      fields = ('id', 'username', 'email', 'password')
      extra_kwargs = {'password': {'write_only': True}}
  def create(self, validated_data):
      user = User.objects.create_user(
          validated_data['username'],
          validated_data['email'],
          validated_data['password']
      )
      return user
      
# Login Serializer: 
# We do not deal with models serializers becouse we do not create nothing, 
# just validated a user who is auhenticate it
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")
        