from rest_framework import serializers
from .models import FarmerProfile


class FarmerSerializer(serializers.ModelSerializer):

    class Meta:
        model = FarmerProfile
        fields = "__all__"