from rest_framework import serializers
from .models import ConsumerProfile

class ConsumerSerializer(serializers.ModelSerializer):

    class Meta:
        model = ConsumerProfile
        fields = "__all__"