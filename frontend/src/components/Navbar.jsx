import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { lang, setLang, t } = useLanguage();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
  };

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 60px',
        background: 'var(--primary-green)',
        color: 'white',
        boxShadow: 'var(--shadow)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h2 style={{ margin: 0, fontSize: '1.8rem' }}>🌾 FarmConnect</h2>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        <Link
          to="/"
          style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}
        >
          {t('home')}
        </Link>

        <Link
          to="/products"
          style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}
        >
          {t('products')}
        </Link>

        <Link
          to="/cart"
          style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}
        >
          🛒 {t('cart')}
        </Link>

        <select
          value={lang}
          onChange={handleLangChange}
          style={{
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '5px',
            padding: '5px 10px',
            cursor: 'pointer',
            outline: 'none',
            width: 'auto',
            fontSize: '14px',
          }}
        >
          <option value="en" style={{ color: 'black' }}>
            English
          </option>
          <option value="hi" style={{ color: 'black' }}>
            हिन्दी (Hindi)
          </option>
          <option value="te" style={{ color: 'black' }}>
            తెలుగు (Telugu)
          </option>
          <option value="ta" style={{ color: 'black' }}>
            தமிழ் (Tamil)
          </option>
        </select>

        {!token ? (
          <>
            <Link
              to="/login"
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '8px 20px',
                borderRadius: '20px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              {t('login')}
            </Link>

            <Link
              to="/register"
              style={{
                background: 'var(--accent-orange)',
                padding: '8px 20px',
                borderRadius: '20px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              {t('join_us')}
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              background: '#ef5350',
              padding: '8px 20px',
              borderRadius: '20px',
              color: 'white',
              fontWeight: '600',
            }}
          >
            {t('logout')}
          </button>
        )}
      </div>
    </nav>
  );
}
