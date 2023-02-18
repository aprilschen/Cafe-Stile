from django.shortcuts import render
from rest_framework.response import Response
from .models import Listing
from .serializers import ListingSerializer
from rest_framework.decorators import api_view
# Create your views here.
@api_view(['GET', 'POST'])
def Listings(request):
    if request.method=='GET':
        queryset = Listing.objects.all()
        data = ListingSerializer(queryset, many=True)
        return Response ({"data": data.data})

    if request.method=='POST':
        listing = ListingSerializer(data = request.data)
        listing.is_valid(raise_exception=True)
        listing.save()
        return Response({"Message": "Successfully created"}, 201)