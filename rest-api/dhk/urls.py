from django.urls import include, path
from rest_framework import routers
import dhk.views as views

app_name = 'dhk'
urlpatterns = [
    path('', views.home, name='home'),
    path('debug/', views.debug, name='debug')
]