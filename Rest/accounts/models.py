from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    forget_password_token = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username
class UserExtraField(models.Model):

    user = models.OneToOneField(User,on_delete=models.CASCADE ,primary_key=True)
    profile= models.ImageField(upload_to='Creatorprofile',null=True,)
    address = models.TextField(max_length=40)
    mobile = models.CharField(max_length=20,null=True)
    
