import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function Payment() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const { t } = useLanguage();

  const handlePay = () => {
    setProcessing(true);
    // Mock payment delay
    setTimeout(() => {
      alert(
        t('payment_success_alert') ||
          'Payment Successful! Your fresh produce will be delivered soon.'
      );
      navigate('/');
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          padding: '60px 0',
          minHeight: '70vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className="card"
          style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}
        >
          <h2 style={{ marginBottom: '30px' }}>{t('secure_checkout')}</h2>

          <div style={{ textAlign: 'left', marginBottom: '30px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                }}
              >
                {t('card_number')}
              </label>
              <input placeholder="xxxx xxxx xxxx xxxx" />
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                  }}
                >
                  {t('expiry_date')}
                </label>
                <input placeholder="MM/YY" />
              </div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                  }}
                >
                  {t('cvv')}
                </label>
                <input placeholder="xxx" />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                }}
              >
                {t('cardholder_name')}
              </label>
              <input placeholder="Full Name" />
            </div>
          </div>

          <button
            onClick={handlePay}
            disabled={processing}
            style={{
              width: '100%',
              background: 'var(--primary-green)',
              color: 'white',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '1.1rem',
              boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)',
            }}
          >
            {processing ? t('processing') : t('pay_now')}
          </button>

          <p
            style={{
              marginTop: '20px',
              color: 'var(--text-light)',
              fontSize: '14px',
            }}
          >
            🔒 {t('payment_secured_desc')}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
