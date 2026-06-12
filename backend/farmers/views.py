from rest_framework import viewsets
from .models import FarmerProfile
from .serializers import FarmerSerializer


class FarmerViewSet(viewsets.ModelViewSet):

    queryset = FarmerProfile.objects.all()
    serializer_class = FarmerSerializer