import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.post("accounts/login/", { username, password });
      localStorage.setItem("token", response.data.token);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.error("Login error:", err.response?.data);
      setError(t('invalid_credentials_err') || "Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--light-green)",
          padding: "20px",
        }}
      >
        <div className="card" style={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>{t('welcome_back')}</h2>

          <p style={{ color: "var(--text-light)", marginBottom: "30px" }}>
            {t('login_desc')}
          </p>

          {error && (
            <div
              style={{
                background: "#ffebee",
                color: "#c62828",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>{t('username')}</label>

              <input
                type="text"
                placeholder={t('username')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div style={{ marginBottom: "30px", textAlign: "left" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>{t('password')}</label>

              <input
                type="password"
                placeholder={t('password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                background: "var(--primary-green)",
                color: "white",
                padding: "14px",
                borderRadius: "8px",
                fontSize: "1rem",
              }}
            >
              {loading ? t('logging_in') : t('login')}
            </button>
          </form>

          <p style={{ marginTop: "25px", color: "var(--text-light)" }}>
            {t('dont_have_account')}{" "}
            <Link to="/register" style={{ color: "var(--primary-green)", fontWeight: "bold", textDecoration: "none" }}>
              {t('register_here')}
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;