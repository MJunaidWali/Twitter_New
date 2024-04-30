from django.db import models
from django.contrib.auth.hashers import make_password

class MyUser(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=128) 
    date_of_birth = models.DateField(blank=True, null=True)
    id = models.AutoField(primary_key=True)

    def save(self, *args, **kwargs):
        if self.password:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.username
    
class Tweet(models.Model):
    content = models.CharField(max_length=280)  # Adjust max_length as per Twitter's tweet limit
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Tweet: {self.content[:50]}'

class Comment(models.Model):
    tweet = models.ForeignKey(Tweet, related_name='comments', on_delete=models.CASCADE)
    content = models.CharField(max_length=280)  # Adjust max_length as needed
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Comment on Tweet: {self.tweet.content[:50]}'
