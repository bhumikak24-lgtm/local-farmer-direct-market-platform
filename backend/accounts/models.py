from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):

    ROLE_CHOICES = (
        ('farmer', 'Farmer'),
        ('consumer', 'Consumer'),
        ('admin', 'Admin'),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='consumer'
    )

    phone = models.CharField(
        max_length=15,
        blank=True
    )

    address = models.TextField(blank=True)

    def __str__(self):
        return self.username