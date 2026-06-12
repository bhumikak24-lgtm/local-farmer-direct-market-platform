from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from accounts.models import User
from products.models import Product
from orders.models import Order

class DashboardView(APIView):

    permission_classes = [IsAdminUser]

    def get(self, request):

        total_users = User.objects.count()
        total_products = Product.objects.count()
        total_orders = Order.objects.count()

        return Response({
            "total_users": total_users,
            "total_products": total_products,
            "total_orders": total_orders
        })