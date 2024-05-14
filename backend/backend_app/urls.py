from django.urls import path
from . import views


urlpatterns = [
    # User URLs
    path('user/', views.UserListCreateAPIView.as_view(), name='user-list-create'),
    path('user/<int:pk>/', views.UserRetrieveUpdateDestroyAPIView.as_view(), name='user-detail'),

    # Tweet URLs
    path('tweets/', views.TweetListCreateAPIView.as_view(), name='tweet-list-create'),
    path('tweets/<int:pk>/', views.TweetRetrieveUpdateDestroyAPIView.as_view(), name='tweet-detail'),

    # Reply URLs
    path('replies/', views.ReplyListCreateAPIView.as_view(), name='reply-list-create'),
    path('replies/<int:pk>/', views.ReplyRetrieveUpdateDestroyAPIView.as_view(), name='reply-detail'),
    path('logout/',views.logout, name='logout'),

]
