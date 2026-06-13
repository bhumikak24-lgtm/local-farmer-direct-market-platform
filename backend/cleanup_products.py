import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from products.models import Product

# Mapping of duplicates to keep (canonical name -> list of names to delete)
# Note: I am assuming the first name is the one we keep and its image is correct.
cleanup_map = {
    'Organic Red Apples': ['Organic Apples'],
    'Fresh Alphonso Mangoes': ['Fresh Alphanso Mangoes'],
    'Pure Cow Milk': ['Whole Cow Milk'],
    'Carrot': ['Pure Buffalo Ghee']
}

for keep, to_delete in cleanup_map.items():
    try:
        # Keep the canonical product
        keep_product = Product.objects.get(name=keep)
        print(f"Keeping canonical product: '{keep}'")
        
        # Delete duplicates
        for delete_name in to_delete:
            deleted, _ = Product.objects.filter(name=delete_name).delete()
            if deleted:
                print(f"Deleted duplicate product: '{delete_name}'")
            else:
                print(f"Product not found for deletion: '{delete_name}'")
    except Product.DoesNotExist:
        print(f"Canonical product not found: '{keep}'")

print("Cleanup completed.")
