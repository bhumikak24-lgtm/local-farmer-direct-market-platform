from django.db import models
from accounts.models import User

class ConsumerProfile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='consumer_profile'
    )

    city = models.CharField(max_length=100)

    state = models.CharField(max_length=100)

    address = models.TextField()

    pincode = models.CharField(max_length=10)

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.user.username