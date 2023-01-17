from django.urls import path
from . import  views 
 
urlpatterns = [    
    path('getdata/',views.getdata,name="getdata"), 
]