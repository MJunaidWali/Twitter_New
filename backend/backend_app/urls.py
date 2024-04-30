from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import CommentViewSet

from .views import (
    MyUserListCreateView,
    MyUserRetrieveUpdateDestroyView,
    TweetListCreateview,
    TweetRetrieveUpdateDestroyView,
)

router = DefaultRouter()
router.register(r'comments', CommentViewSet)

urlpatterns = [
    path("users/", MyUserListCreateView.as_view(), name="user-list-create"),
    path(
        "users/<int:pk>/", MyUserRetrieveUpdateDestroyView.as_view(), name="user-detail"
    ),
    path("tweets/", TweetListCreateview.as_view(), name="user-detail"),
    path(
        "tweets/<int:pk>/", TweetRetrieveUpdateDestroyView.as_view(), name="user-detail"
    ),
    path('', include(router.urls)),

]
