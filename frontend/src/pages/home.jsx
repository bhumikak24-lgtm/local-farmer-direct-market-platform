import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import API from "../services/api";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    API.get("products/")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: "3.5rem", marginBottom: "20px", color: "white" }}>
            {t('hero_title')}
          </h1>

          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 40px auto", lineHeight: "1.6" }}>
            {t('hero_desc')}
          </p>

          <button
            onClick={() => {
              window.location.href = "/products";
            }}
            style={{
              background: "var(--accent-orange)",
              color: "white",
              padding: "15px 40px",
              borderRadius: "30px",
              fontSize: "1.1rem",
              boxShadow: "0 4px 15px rgba(255, 152, 0, 0.4)",
            }}
          >
            {t('start_shopping')}
          </button>
        </div>
      </section>

      <section className="container" style={{ padding: "80px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h2 style={{ margin: 0, fontSize: "2.2rem" }}>{t('featured_products')}</h2>

          <button 
            onClick={() => {
              window.location.href = "/products";
            }}
            style={{ background: "none", color: "var(--primary-green)", fontSize: "1rem" }}
          >
            {t('view_all')}
          </button>
        </div>

        {loading ? (
          <p>{t('loading_fresh')}</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>{t('no_products')}</p>
            )}
          </div>
        )}
      </section>

      <section style={{ background: "var(--light-green)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "40px" }}>{t('why_choose')}</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
            <div className="card">
              <h1 style={{ margin: 0 }}>🚜</h1>

              <h3>{t('direct_source')}</h3>

              <p>{t('direct_source_desc')}</p>
            </div>

            <div className="card">
              <h1 style={{ margin: 0 }}>🌱</h1>

              <h3>{t('organic_100')}</h3>

              <p>{t('organic_desc')}</p>
            </div>

            <div className="card">
              <h1 style={{ margin: 0 }}>🚚</h1>

              <h3>{t('fast_delivery')}</h3>

              <p>{t('fast_delivery_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}