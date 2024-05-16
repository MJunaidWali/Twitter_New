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
    
from rest_framework import serializers
from .models import Tweet, Reply

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'tweet', 'content', 'likes', 'dislikes', 'created_at']

class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ['id', 'comment', 'created_at']

