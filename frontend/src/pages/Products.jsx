import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import API from '../services/api';
import { useLanguage } from '../context/LanguageContext';
import { getDisplayProductName } from '../utils/productImages';

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    API.get('products/')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    getDisplayProductName(product.name)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div
        className="container"
        style={{ padding: '60px 0', minHeight: '70vh' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <h2 style={{ fontSize: '2.5rem', margin: 0 }}>
              {t('marketplace')}
            </h2>

            <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>
              {t('explore_farms')}
            </p>
          </div>

          <div style={{ width: '100%', maxWidth: '400px' }}>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '15px', top: '12px' }}>
                🔍
              </span>

              <input
                type="text"
                placeholder={t('search_placeholder')}
                style={{ paddingLeft: '45px' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {loading ? (
          <p>{t('loading_marketplace')}</p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '30px',
            }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div
                style={{
                  gridColumn: '1 / -1',
                  textAlign: 'center',
                  padding: '40px',
                }}
              >
                <p>
                  {t('no_products_found')} "{search}"
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Products;
