from django.contrib import admin
from .models import Tweet, Reply



@admin.register(Tweet)
class TweetAdmin(admin.ModelAdmin):
    list_display = ('id', 'comment', 'created_at')
    search_fields = ('comment',)
    list_filter = ('created_at',)

@admin.register(Reply)
class ReplyAdmin(admin.ModelAdmin):
    list_display = ('id', 'tweet', 'content', 'created_at', 'likes', 'dislikes')
    search_fields = ('content',)
    list_filter = ('created_at',)