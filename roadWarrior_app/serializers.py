from rest_framework import serializers 
from .models import RV

class RVSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = RV
        fields = ('username', 'password', 'ingredients')
