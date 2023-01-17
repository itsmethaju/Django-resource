
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from accounts import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('reg',views.reg,name="reg"),
    path('login',views.login,name="login"),
    path('home',views.home,name="home"),
    path('logout',views.logouts,name="logout"),
    path('forgetpassword' , views.forgetpassword, name="forgetpassword"),
    path('change-password/<token>/' , views.ChangePassword , name="change_password"),
    path('updateuser',views.update_user,name="updateuser"),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)