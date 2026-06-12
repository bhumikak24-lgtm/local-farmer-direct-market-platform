import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "consumer",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("accounts/register/", formData);
      setMessage(t('registration_success_msg') || "Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Registration error:", error.response?.data);
      setMessage(
        t('registration_error_msg') || "Error: " + JSON.stringify(error.response?.data || "Server error")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--light-green)",
          padding: "40px 20px",
        }}
      >
        <div className="card" style={{ width: "100%", maxWidth: "450px", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>{t('create_account')}</h2>

          <p style={{ color: "var(--text-light)", marginBottom: "30px" }}>
            {t('join_community')}
          </p>

          {message && (
            <div
              style={{
                background: message.startsWith("Error") ? "#ffebee" : "#e8f5e9",
                color: message.startsWith("Error") ? "#c62828" : "#2e7d32",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>{t('username')}</label>

              <input
                name="username"
                placeholder={t('username')}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>{t('email')}</label>

              <input
                name="email"
                type="email"
                placeholder={t('email')}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>{t('password')}</label>

              <input
                name="password"
                type="password"
                placeholder={t('password')}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginBottom: "30px", textAlign: "left" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>{t('i_am_a')}</label>

              <select
                name="role"
                onChange={handleChange}
                value={formData.role}
                style={{ width: "100%", padding: "12px", borderRadius: "8px" }}
              >
                <option value="consumer">{t('role_consumer')}</option>
                <option value="farmer">{t('role_farmer')}</option>
              </select>
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
              {loading ? t('creating_account') : t('register_now')}
            </button>
          </form>

          <p style={{ marginTop: "25px", color: "var(--text-light)" }}>
            {t('already_have_account')}{" "}
            <Link to="/login" style={{ color: "var(--primary-green)", fontWeight: "bold", textDecoration: "none" }}>
              {t('login_here')}
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;