from rest_framework import serializers 
from .models import RV
from .models import Post
from .models import Comment

class RVSerializer(serializers.ModelSerializer):
    # ingredients = IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = RV
        fields = ('username', 'password', 'vehicleName', 'make', 'model', 'year', 'rvClass', 'origin', 'image')

class PostSerializer(serializers.ModelSerializer):
    # ingredients = IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = ('rv', 'post_image', 'title', 'description', 'date')

class CommentSerializer(serializers.ModelSerializer):
    # ingredients = IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = Comment
        fields = ("rvId", "postId", "commentDate", "commentText")