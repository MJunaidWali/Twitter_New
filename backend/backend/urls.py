
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt import views as jwt_views



admin.site.site_header = 'JUNAID SITE'
admin.site.site_title = 'Junaid_admin'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('backend_app.urls')),
         path('token/', jwt_views.TokenObtainPairView.as_view(), name ='token_obtain_pair'),
     path('token/refresh/',jwt_views.TokenRefreshView.as_view(), name ='token_refresh')

]

