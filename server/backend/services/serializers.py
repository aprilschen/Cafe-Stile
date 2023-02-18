from rest_framework import serializers
from .models import Listing, ImageHolder

class ListingSerializer(serializers.ModelSerializer):
    locationImageList = serializers.StringRelatedField(many=True)
    class Meta:
        model = Listing
        fields = '__all__'

class ImageHolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageHolder
        fields = '__all__'
