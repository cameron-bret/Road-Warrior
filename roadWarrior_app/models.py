# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

# Create your models here.
class RV(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    vehicleName = models.CharField(primary_key=True, max_length=100)
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.CharField(max_length=12)
    rvClass = models.CharField(max_length=20)
    origin = models.CharField(max_length=100)
    image = models.TextField()

    def __str__(self):
        return self.vehicleName

class Post(models.Model):
    vehicleName = models.ForeignKey(RV, on_delete=models.CASCADE, db_column="vehicleName", related_name='posts')
    post_image = models.TextField(default='Image', null=True)
    title = models.CharField(max_length=100, default='Title')
    description = models.CharField(max_length=1000, default='Description')
    date = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    vehicleName = models.ForeignKey(RV, on_delete=models.CASCADE, db_column="vehicleName", related_name="comments")
    postId = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    commentDate = models.DateTimeField(auto_now_add=True)
    commentText = models.CharField(max_length=500)