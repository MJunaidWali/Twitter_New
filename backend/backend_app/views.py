from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Tweet, Reply,User
from .serializers import TweetSerializer, ReplySerializer,UserSerializer

class UserListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer 
    #not used the permisiion classes due to auth issues to unknown users to acccess site
class UserRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class TweetListCreateAPIView(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = [IsAuthenticated]  # Ensures only authenticated users can access this endpoint

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Associate the tweet with the current user

class TweetRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = [IsAuthenticated]  
class ReplyListCreateAPIView(generics.ListCreateAPIView):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer
    permission_classes = [IsAuthenticated]  
    # Ensures only authenticated users can access this endpoint

    def perform_create(self, serializer):
        serializer.save(user=self.request.user) 
         # Associate the reply with the current user

class ReplyRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer
    permission_classes = [IsAuthenticated] 
    
     # Ensures only authenticated users can access this endpoint
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import BlacklistedToken

@api_view(['POST'])
def logout(request):
    refresh_token = request.data.get('refresh_token')
    if refresh_token:
        BlacklistedToken.objects.create(token=refresh_token)
        return Response({'message': 'Successfully logged out.'})
    return Response({'message': 'No refresh token provided.'}, status=400)

