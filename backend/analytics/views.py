from rest_framework.views import APIView
from rest_framework.response import Response

from accounts.models import User
from products.models import Product
from orders.models import Order


class AnalyticsDashboardView(APIView):

    def get(self, request):

        total_users = User.objects.count()

        total_farmers = User.objects.filter(
            role="farmer"
        ).count()

        total_consumers = User.objects.filter(
            role="consumer"
        ).count()

        total_products = Product.objects.count()

        total_orders = Order.objects.count()

        delivered_orders = Order.objects.filter(
            status="delivered"
        ).count()

        pending_orders = Order.objects.filter(
            status="pending"
        ).count()

        revenue = sum(
            order.total_amount
            for order in Order.objects.filter(
                status="delivered"
            )
        )

        return Response({
            "total_users": total_users,
            "total_farmers": total_farmers,
            "total_consumers": total_consumers,
            "total_products": total_products,
            "total_orders": total_orders,
            "delivered_orders": delivered_orders,
            "pending_orders": pending_orders,
            "total_revenue": revenue
        })