from rest_framework import serializers
from .models import Tweet, Reply,User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password'] 
        extra_kwargs = {
            'password': {'write_only': True}, 
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data) 
        return user
    
class TweetSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True) 
    class Meta:
        model = Tweet
        fields = ['id', 'user', 'comment', 'created_at']
        read_only_fields = ['created_at']

class ReplySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True) 
    class Meta:
        model = Reply
        fields = ['id', 'user', 'tweet', 'content', 'likes', 'dislikes', 'created_at']
        read_only_fields = ['created_at']
