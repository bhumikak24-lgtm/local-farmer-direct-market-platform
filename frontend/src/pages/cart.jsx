import { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  getFallbackProductImage,
  getProductImage,
} from '../utils/productImages';

function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await API.get('orders/');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const total = items.reduce(
    (acc, item) => acc + parseFloat(item.total_amount),
    0
  );

  return (
    <>
      <Navbar />

      <div
        className="container"
        style={{ padding: '60px 0', minHeight: '70vh' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
          {t('shopping_cart')}
        </h2>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>{t('loading_selections')}</p>
          </div>
        ) : items.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 350px',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <table
                style={{
                  width: '100%',
                  textAlign: 'left',
                  borderCollapse: 'collapse',
                }}
              >
                <thead>
                  <tr style={{ background: 'var(--light-green)' }}>
                    <th style={{ padding: '20px' }}>{t('product_header')}</th>
                    <th style={{ padding: '20px' }}>{t('qty_header')}</th>
                    <th style={{ padding: '20px' }}>{t('price_header')}</th>
                    <th style={{ padding: '20px' }}>{t('status_header')}</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item) => (
                    <tr
                      key={item.id}
                      style={{ borderBottom: '1px solid #eee' }}
                    >
                      <td style={{ padding: '20px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                          }}
                        >
                          <img
                            src={getProductImage(item.product_details)}
                            alt={item.product_details?.name || 'Product'}
                            onError={(event) => {
                              event.currentTarget.src = getFallbackProductImage(
                                item.product_details
                              );
                            }}
                            style={{
                              width: '50px',
                              height: '50px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                            }}
                          />

                          <div>
                            <div style={{ fontWeight: '600' }}>
                              {item.product_details?.name ||
                                `${t('product_header')} #${item.product}`}
                            </div>

                            <div
                              style={{
                                fontSize: '12px',
                                color: 'var(--text-light)',
                              }}
                            >
                              {t('order_id') || 'Order ID'}: {item.id}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td style={{ padding: '20px' }}>{item.quantity}</td>

                      <td style={{ padding: '20px', fontWeight: '600' }}>
                        ₹{item.total_amount}
                      </td>

                      <td style={{ padding: '20px' }}>
                        <span
                          style={{
                            background: '#e3f2fd',
                            color: '#1976d2',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            textTransform: 'capitalize',
                          }}
                        >
                          {t(item.status) || item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card" style={{ position: 'sticky', top: '100px' }}>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: '20px',
                  borderBottom: '1px solid #eee',
                  paddingBottom: '15px',
                }}
              >
                {t('order_summary')}
              </h3>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                }}
              >
                <span>{t('subtotal')}</span>

                <span>₹{total.toFixed(2)}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                }}
              >
                <span>{t('delivery_fee')}</span>

                <span
                  style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}
                >
                  {t('free')}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '20px',
                  paddingTop: '20px',
                  borderTop: '2px solid #eee',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
                <span>{t('total')}</span>

                <span style={{ color: 'var(--primary-green)' }}>
                  ₹{total.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => navigate('/payment')}
                style={{
                  width: '100%',
                  background: 'var(--accent-orange)',
                  color: 'white',
                  padding: '16px',
                  borderRadius: '8px',
                  marginTop: '30px',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 12px rgba(255, 152, 0, 0.3)',
                }}
              >
                {t('checkout')}
              </button>

              <p
                style={{
                  textAlign: 'center',
                  fontSize: '12px',
                  color: 'var(--text-light)',
                  marginTop: '15px',
                }}
              >
                {t('secure_payments')}
              </p>
            </div>
          </div>
        ) : (
          <div
            className="card"
            style={{ textAlign: 'center', padding: '80px 20px' }}
          >
            <h1 style={{ fontSize: '4rem', margin: 0 }}>🛒</h1>

            <h3>{t('cart_empty')}</h3>

            <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>
              {t('cart_empty_desc')}
            </p>

            <button
              onClick={() => navigate('/products')}
              style={{
                background: 'var(--primary-green)',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '8px',
              }}
            >
              {t('browse_products')}
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
