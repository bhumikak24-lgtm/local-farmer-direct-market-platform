from rest_framework import viewsets, permissions
from .models import Order
from .serializers import OrderSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def get_queryset(self):
        # Users only see their own orders/cart items
        if self.request.user.is_authenticated:
            return Order.objects.filter(consumer=self.request.user)
        return Order.objects.none()

    def perform_create(self, serializer):
        serializer.save(consumer=self.request.user)