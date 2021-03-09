from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from base.serializers import ProductSerialiser

from django.contrib.auth.models import User
from base.models import Product
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerialiser(products, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerialiser(product, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)
