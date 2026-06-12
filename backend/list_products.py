import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from products.models import Product

for p in Product.objects.all():
    print(f"Name: '{p.name}', Category: '{p.category}'")
