# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import RV, Post, Comment

class RVAdmin(admin.ModelAdmin):
        list_display = ('username', 'password', 'vehicleName', 'make', 'model', 'year', 'rvClass', 'origin', 'image')

class PostAdmin(admin.ModelAdmin):
        list_display = ('rv', 'post_image', 'title', 'description')

class CommentAdmin(admin.ModelAdmin):
        list_display = ("id", "postId", "date", "commentText", "commentVoteCount")

admin.site.register(RV, RVAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
