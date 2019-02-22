# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

# Create your models here.
class RV(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    vehicleName = models.CharField(max_length=100)
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.CharField(max_length=12)
    rvClass = models.CharField(max_length=20)
    origin = models.CharField(max_length=100)
    image = models.TextField()

    def __str__(self):
        return self.name

class Post(models.Model):
    rv = models.ForeignKey(RV, on_delete=models.CASCADE, related_name='posts')
    post_image = models.TextField(default='IMAGE')
    title = models.CharField(max_length=100, default='TITLE')
    description = models.CharField(max_length=100, default='DESCRIPTION')

    def __str__(self):
        return self.name