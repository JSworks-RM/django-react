from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')), # Make sure to put this url view first
    path('', include('leads.urls')),
    path('', include('accounts.urls'))
]
