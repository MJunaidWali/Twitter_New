from rest_framework import serializers
from .models import MyUser,Tweet, Comment

class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id', 'username',"dateofbirth", 'email','password']
        # read_only_fields = []

          
class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ['id', 'content', 'created_at']
        read_only_fields = ['created_at']  # Ensures 'created_at' is read-only

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'tweet', 'content', 'likes', 'dislikes', 'created_at']
        read_only_fields = ['created_at']  # Ensures 'created_at' is read-only
