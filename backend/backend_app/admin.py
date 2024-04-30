from django.contrib import admin
from .models import Tweet, Comment,MyUser




@admin.register(MyUser)
class MyUser(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'date_of_birth')
    search_fields = ('username', 'email','password')
    list_filter = ('date_of_birth',)

@admin.register(Tweet)
class TweetAdmin(admin.ModelAdmin):
    list_display = ('id', 'content', 'created_at')
    search_fields = ('content',)
    list_filter = ('created_at',)

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'tweet', 'content', 'created_at', 'likes', 'dislikes')  # Add 'likes' and 'dislikes' fields
    search_fields = ('content',)
    list_filter = ('created_at',)