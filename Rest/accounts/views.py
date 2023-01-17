
from django.contrib import messages
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import redirect, render
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import authenticate, login as dj_login, logout
from django.urls import reverse
from .helpers import send_forget_password_mail
import http.client
from .models import Profile,UserExtraField
from .forms import UserForm2,UserProfileForm
import uuid
from urllib import request
from django.contrib.auth.models import User
def reg(request):
   
    if request.method == "POST":
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        username=request.POST["username"]
        email = request.POST["email"]

        if request.POST["password1"] == request.POST["password2"]:
            password = request.POST["password1"]
            if User.objects.filter(email=email).exists():
                messages.error(request, "Email already exists")
                return redirect("reg")
            elif User.objects.filter(username=username).exists():
                messages.error(request, "Username already exists")
                return redirect("reg")
            user = User.objects.create_user(
             
                password=password,
                email=email,
                first_name=first_name,
                last_name=last_name,
                username=username,
            )
            data = UserExtraField(user=user)
            data.save()
            user.save()
            profile_obj = Profile.objects.create(user=user)
            profile_obj.save()
            return redirect("login")
        else:
            messages.error(request, "Passwords do not match")

    return render(request, "reg.html")
def login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('home'))

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            dj_login(request, user)
            return HttpResponseRedirect(reverse('home'))
        else:
            messages.error(
                request, f'Invalid user or password for {username}!')

    return render(request, "login.html")
    
def home(request):
   	return render(request,'home.html')
   
   
def logouts(request):
    logout(request)
    return HttpResponseRedirect(reverse('login'))
    
    


def ChangePassword(request, token):
    context = {}

    try:
        profile_obj = Profile.objects.filter(
            forget_password_token=token).first()
        context = {'user_id': profile_obj.user.id}

        if request.method == 'POST':
            new_password = request.POST.get('new_password')
            confirm_password = request.POST.get('confirm_password')
            user_id = request.POST.get('user_id')

            if user_id is None:
                messages.success(request, 'No user id found.')
                return redirect(f'/change-password/{token}/')

            if new_password != confirm_password:
                messages.success(request, 'both should  be equal.')
                return redirect(f'/change-password/{token}/')

            user_obj = User.objects.get(id=user_id)
            user_obj.set_password(new_password)
            user_obj.save()
            return redirect('login')

    except Exception as e:
        print(e)
    return render(request, 'change-password.html', context)


def forgetpassword(request):
    try:
        if request.method == 'POST':
            username = request.POST.get('username')

            if not User.objects.filter(username=username).first():
                messages.success(request, 'Not user found with this username.')
                return redirect('forgetpassword')

            user_obj = User.objects.get(username=username)
            token = str(uuid.uuid4())
            profile_obj = Profile.objects.get(user=user_obj)
            profile_obj.forget_password_token = token
            profile_obj.save()
            send_forget_password_mail(user_obj.email, token)
            messages.success(request, 'An email is sent. Check Your Email')
            return redirect('forgetpassword')

    except Exception as e:
        print(e)
    return render(request, 'forget-password.html')



@login_required
def update_user(request):
    me = UserExtraField.objects.filter(user=request.user)
    try:
        user_profile = UserExtraField.objects.get(user=request.user)
    except UserExtraField.DoesNotExist:
        return HttpResponse("invalid user_profile!")

    if request.method == "POST":
        me = UserExtraField.objects.filter(user=request.user)
        update_user_form = UserForm2(
            data=request.POST, instance=request.user)
        update_profile_form = UserProfileForm(
            data=request.POST, instance=user_profile)

        if update_user_form.is_valid() and update_profile_form.is_valid():
            user = update_user_form.save()
            profile = update_profile_form.save(commit=False)
            profile.user = user

            if 'profile' in request.FILES:
                profile.profile = request.FILES['profile']

            
            profile.save()
            user=request.user.username


            return redirect('home')

        else:
            print(update_user_form.errors, update_profile_form.errors)
    else:
        update_user_form = UserForm2(instance=request.user)
        update_profile_form = UserProfileForm(instance=user_profile)
        me = UserExtraField.objects.filter(user=request.user)
    return render(request,
                  'update_user.html',
                  {'update_user_form': update_user_form,
                      'update_profile_form': update_profile_form, 'ct': me, }
                  )

