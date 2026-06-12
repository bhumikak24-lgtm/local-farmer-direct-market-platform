from django.db import models

from orders.models import Order


class Delivery(models.Model):

    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('assigned', 'Assigned'),
        ('in_transit', 'In Transit'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    )

    order = models.OneToOneField(
        Order,
        on_delete=models.CASCADE,
        related_name='delivery'
    )

    delivery_address = models.TextField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )

    tracking_number = models.CharField(
        max_length=100,
        blank=True
    )

    estimated_delivery_date = models.DateField(
        blank=True,
        null=True
    )

    delivered_at = models.DateTimeField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return f'Delivery for order #{self.order_id}'
