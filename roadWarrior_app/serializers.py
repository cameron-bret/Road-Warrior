from rest_framework import serializers 
from .models import RV
from .models import Post
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ("vehicleName", "postId", "commentDate", "commentText")

class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = ('comments', 'vehicleName', 'post_image', 'title', 'description', 'date')

class RVSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True, read_only=True)
    class Meta:
        model = RV
        fields = ('posts', 'username', 'password', 'vehicleName', 'make', 'model', 'year', 'rvClass', 'origin', 'image')
