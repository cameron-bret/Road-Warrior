# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets
from .models import RV
from .serializers import RVSerializer

class RVView(viewsets.ModelViewSet):
    queryset = RV.objects.all()
    serializer_class = RVSerializer