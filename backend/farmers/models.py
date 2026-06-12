from django.db import models
from accounts.models import User


class FarmerProfile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='farmer_profile'
    )

    farm_name = models.CharField(
        max_length=200
    )

    farm_location = models.CharField(
        max_length=255
    )

    farm_size = models.CharField(
        max_length=100,
        blank=True
    )

    farming_type = models.CharField(
        max_length=100,
        blank=True
    )

    description = models.TextField(
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.farm_name