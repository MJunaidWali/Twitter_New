from django.db import models
from django.contrib.auth.models import User

class Tweet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.CharField(max_length=280)  
    created_at = models.DateTimeField(auto_now_add=True)

    
class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet = models.ForeignKey(Tweet, related_name='comments', on_delete=models.CASCADE)
    content = models.CharField(max_length=280)  
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Comment on Tweet: {self.tweet.content[:50]}'

class BlacklistedToken(models.Model):
    token = models.CharField(max_length=255, unique=True)
    invalidated_at = models.DateTimeField(auto_now_add=True)