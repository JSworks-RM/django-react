from django.urls import path
from . import views

# We need to include this urls in the main urls app
urlpatterns = [
    path('', views.index)
]