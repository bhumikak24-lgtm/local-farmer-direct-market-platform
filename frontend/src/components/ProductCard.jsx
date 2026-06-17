import API from '../services/api';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  getDisplayProductName,
  getFallbackProductImage,
  getProductImage,
} from '../utils/productImages';

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { t } = useLanguage();

  const addToCart = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert(
        t('login_required_alert') || 'Please login to add products to cart'
      );
      return;
    }

    setLoading(true);
    try {
      await API.post('orders/', {
        product: product.id,
        quantity: 1,
      });
      setMessage(t('added_label') || '✓ Added');
      setTimeout(() => setMessage(''), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert(t('failed_add_cart_alert') || 'Failed to add to cart');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryLabel = (cat) => {
    switch (cat?.toLowerCase()) {
      case 'vegetables':
        return t('fresh_veg');
      case 'fruits':
        return t('organic_fruits');
      case 'dairy':
        return t('dairy_eggs');
      case 'grains':
        return t('grains_pulses');
      default:
        return cat || t('fresh_veg');
    }
  };

  const fallbackImage = getFallbackProductImage(product);
  const displayName = getDisplayProductName(product.name);

  return (
    <div
      className="card"
      style={{
        width: '280px',
        textAlign: 'center',
        transition: 'var(--transition)',
        overflow: 'hidden',
        padding: 0,
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={getProductImage(product)}
          alt={displayName}
          width="100%"
          height="180"
          onError={(event) => {
            event.currentTarget.src = fallbackImage;
          }}
          style={{ objectFit: 'cover' }}
        />

        <span
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'var(--primary-green)',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {getCategoryLabel(product.category)}
        </span>
      </div>

      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#222' }}>{displayName}</h3>

        <p
          style={{
            color: 'var(--text-light)',
            fontSize: '14px',
            margin: '0 0 15px 0',
          }}
        >
          {t('sold_by')}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '1.4rem',
              fontWeight: 'bold',
              color: 'var(--primary-green)',
            }}
          >
            ₹{product.price}
          </span>

          <button
            onClick={addToCart}
            disabled={loading}
            style={{
              background: message
                ? 'var(--accent-orange)'
                : 'var(--primary-green)',
              color: 'white',
              padding: '10px 15px',
              borderRadius: '8px',
              fontSize: '14px',
            }}
          >
            {loading ? '...' : message || t('add_to_cart')}
          </button>
        </div>
      </div>
    </div>
  );
}
