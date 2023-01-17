from django.contrib import admin

# Register your models here.
from .models import *

class CreatorAdmin(admin.ModelAdmin):
    pass
admin.site.register(UserExtraField, CreatorAdmin)