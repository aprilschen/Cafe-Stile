from django.urls import path
from . import views

urlpatterns = [
    path('listings', views.Listings),
]