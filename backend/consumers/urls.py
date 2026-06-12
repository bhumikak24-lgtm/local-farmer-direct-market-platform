from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ConsumerViewSet

router = DefaultRouter()

router.register(
    r'consumers',
    ConsumerViewSet,
    basename='consumer'
)

urlpatterns = [
    path('', include(router.urls)),
]