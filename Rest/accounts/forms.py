from dataclasses import fields
from django import forms
from django.contrib.auth.models import User
from . import models



class UserForm2(forms.ModelForm):

    class Meta:
        model = User
        fields = ( 'first_name', 'last_name','username','email',)


class UserProfileForm(forms.ModelForm):
    class Meta:
        model = models.UserExtraField
        fields = ('profile','address','mobile')

