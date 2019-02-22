# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets
from .models import RV
from .models import Post
from .models import Comment
from .serializers import RVSerializer
from .serializers import PostSerializer
from .serializers import CommentSerializer

class RVsView(viewsets.ModelViewSet):
    queryset = RV.objects.all()
    serializer_class = RVSerializer

class PostsView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentsView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer