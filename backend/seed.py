import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from accounts.models import User
from farmers.models import FarmerProfile
from products.models import Product

def seed():
    # Create farmer user
    user, created = User.objects.get_or_create(
        username='ramesh',
        defaults={
            'email': 'ramesh@gmail.com',
            'role': 'farmer',
            'first_name': 'Ramesh',
            'last_name': 'Kumar'
        }
    )
    user.set_password('password123')
    user.save()

    # Create farmer profile
    farmer_profile, created = FarmerProfile.objects.get_or_create(
        user=user,
        defaults={
            'farm_name': 'Ramesh Farm',
            'farm_location': 'Hyderabad'
        }
    )

    # Create products
    products = [
        {
            'farmer': farmer_profile,
            'name': 'Organic Tomatoes',
            'category': 'vegetables',
            'description': 'Fresh farm-grown red tomatoes',
            'price': 40.00,
            'quantity': 100,
            'image_url': 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Green Chillies',
            'category': 'vegetables',
            'description': 'Spicy and fresh green chillies',
            'price': 60.00,
            'quantity': 80,
            'image_url': 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Farm Fresh Carrots',
            'category': 'vegetables',
            'description': 'Sweet and crunchy organic carrots',
            'price': 50.00,
            'quantity': 120,
            'image_url': 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Organic Potatoes',
            'category': 'vegetables',
            'description': 'Earth-grown organic potatoes',
            'price': 35.00,
            'quantity': 150,
            'image_url': 'https://images.unsplash.com/photo-1518977676601-b53f02aba655?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Fresh Spinach',
            'category': 'vegetables',
            'description': 'Iron-rich fresh green spinach',
            'price': 25.00,
            'quantity': 60,
            'image_url': 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Organic Red Apples',
            'category': 'fruits',
            'description': 'Crisp and juicy Himalayan apples',
            'price': 180.00,
            'quantity': 50,
            'image_url': 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Fresh Alphonso Mangoes',
            'category': 'fruits',
            'description': 'King of fruits - sweet and aromatic',
            'price': 450.00,
            'quantity': 30,
            'image_url': 'https://images.unsplash.com/photo-1553279768-865386fa0095?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Green Grapes',
            'category': 'fruits',
            'description': 'Sweet and seedless green grapes',
            'price': 120.00,
            'quantity': 40,
            'image_url': 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Pure Cow Milk',
            'category': 'dairy',
            'description': 'Direct from farm, fresh and pure',
            'price': 65.00,
            'quantity': 40,
            'image_url': 'https://images.unsplash.com/photo-1564149504298-00c351fd7f16?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Farm Fresh Eggs',
            'category': 'dairy',
            'description': 'Nutritious farm-laid brown eggs',
            'price': 10.00,
            'quantity': 100,
            'image_url': 'https://images.unsplash.com/photo-1582722872445-44c56bb62789?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Natural Forest Honey',
            'category': 'other',
            'description': 'Pure raw honey from forest hives',
            'price': 350.00,
            'quantity': 25,
            'image_url': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Turmeric Powder',
            'category': 'other',
            'description': 'Pure organic turmeric powder',
            'price': 220.00,
            'quantity': 50,
            'image_url': 'https://images.unsplash.com/photo-1615485245452-11933999900a?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Red Lentils (Masoor)',
            'category': 'grains',
            'description': 'High protein organic red lentils',
            'price': 140.00,
            'quantity': 80,
            'image_url': 'https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&w=800&q=80'
        },
        {
            'farmer': farmer_profile,
            'name': 'Golden Wheat Grains',
            'category': 'grains',
            'description': 'Premium quality golden wheat',
            'price': 45.00,
            'quantity': 200,
            'image_url': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80'
        }
    ]

    for p_data in products:
        Product.objects.update_or_create(
            name=p_data['name'],
            farmer=farmer_profile,
            defaults={
                'category': p_data['category'],
                'description': p_data['description'],
                'price': p_data['price'],
                'quantity': p_data['quantity'],
                'image_url': p_data['image_url'],
                'is_available': True
            }
        )


    print("Seeding completed!")

if __name__ == '__main__':
    seed()
