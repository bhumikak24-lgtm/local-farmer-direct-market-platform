from rest_framework import serializers
from .models import Order
from products.serializers import ProductSerializer


class OrderSerializer(serializers.ModelSerializer):
    product_details = ProductSerializer(source='product', read_only=True)

    class Meta:
        model = Order
        fields = "__all__"
        read_only_fields = ['total_amount', 'consumer']