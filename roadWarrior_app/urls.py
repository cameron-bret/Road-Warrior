# -*- coding: utf-8 -*-
from django.urls import path, include 
from . import views 
from rest_framework import routers

router = routers.DefaultRouter()
router.register('rvs', views.RVsView)

urlpatterns = [
    path('', include(router.urls))
]