from rest_framework import viewsets
from .models import ConsumerProfile
from .serializers import ConsumerSerializer

class ConsumerViewSet(viewsets.ModelViewSet):

    queryset = ConsumerProfile.objects.all()

    serializer_class = ConsumerSerializer