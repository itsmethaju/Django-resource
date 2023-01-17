from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render 
from .models import department,employee 
from django.core import serializers
import json
 
# Create your views here.
 
def getdata(request):
    template_name = 'dropdown.html'
    deptcontext = department.objects.all()
    empcontext = employee.objects.all()    
 
    return render(request,template_name,{'department':deptcontext,  'employee':empcontext})