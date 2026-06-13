import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from products.models import Product

products_to_check = [
    'Pure Buffalo Ghee',
    'Whole Cow Milk'
]

for name in products_to_check:
    p = Product.objects.filter(name__iexact=name).first()
    if p:
        print(f"Found: {p.name}")
    else:
        print(f"Not found: {name}")
