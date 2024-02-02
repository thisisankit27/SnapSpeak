from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('upload_image/', views.upload_image_view, name='upload_image'),
]
