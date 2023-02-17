from django.shortcuts import render
from rest_framework.response import Response
from .models import Listing
from .serializers import ListingSerializer
# Create your views here.
def Listings(request):
    if request.method=='GET':
        queryset = Listing.objects.all()
        data = ListingSerializer(queryset, many=True)
        return Response ({"data": data.data})