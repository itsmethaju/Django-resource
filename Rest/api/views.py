# from django.shortcuts import render
# from .serializers import UserRegister
# from rest_framework.views import APIView
# from rest_framework.authtoken.models import Token
# from rest_framework.response import Response
# Create your views here.
from django.contrib import messages
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import redirect, render


def reg(request):
   
    if request.method == "POST":
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        email = request.POST["email"]

        if request.POST["password1"] == request.POST["password2"]:
            password = request.POST["password1"]
            if User.objects.filter(email=email).exists():
                messages.error(request, "Email already exists")
                return redirect("reg")
            user = User.objects.create_user(
                username=email,
                password=password,
                email=email,
                first_name=first_name,
                last_name=last_name,
            )
            user.save()
            return redirect("login")
        else:
            messages.error(request, "Passwords do not match")

    return render(request, "reg.html")


# class Register(APIView):
#     def post(self,request,format=None):
#         serializer=UserRegister(data=request.data)
#         data={}
#         if serializer.is_vaild():
#             account=serializer.save()
#             data ['response']='registerd'
#             data['username']=account.username
#             data['email']=account.email
#             token,create=Token.objects.get_or_create(user=account)
#             data['token']=token.key
#         else:
#             data=serializer.errors
#         return Response(data)