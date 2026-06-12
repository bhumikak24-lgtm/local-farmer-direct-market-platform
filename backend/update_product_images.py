import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from products.models import Product

# Mapping of product names to corrected high-quality Unsplash image URLs
corrections = {
    'Red Lentils (Masoor)': 'https://images.unsplash.com/photo-1626200928466-1abe7dec8787?auto=format&fit=crop&w=800&q=80',
    'Turmeric Powder': 'https://images.unsplash.com/photo-1615485245452-11933999900a?auto=format&fit=crop&w=800&q=80',
    'Natural Forest Honey': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
    'Green Grapes': 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=800&q=80',
    'Pure Desi Ghee': 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80',
    'Pure Cow Milk': 'https://images.unsplash.com/photo-1564149504298-00c351fd7f16?auto=format&fit=crop&w=800&q=80',
    'Pure Buffalo Ghee': 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80',
    'Whole Cow Milk': 'https://images.unsplash.com/photo-1564149504298-00c351fd7f16?auto=format&fit=crop&w=800&q=80',
    'Green Chillies': 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    'Organic Tomatoes': 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=800&q=80'
}

for name, url in corrections.items():
    try:
        product = Product.objects.get(name=name)
        product.image_url = url
        product.save()
        print(f"Updated '{name}' with URL: {url}")
    except Product.DoesNotExist:
        print(f"Product '{name}' not found.")
