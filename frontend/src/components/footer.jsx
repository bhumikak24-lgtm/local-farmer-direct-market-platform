import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        padding: '60px 20px',
        background: '#1b5e20',
        color: 'rgba(255,255,255,0.8)',
        marginTop: '60px',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
        }}
      >
        <div>
          <h3 style={{ color: 'white', marginBottom: '20px' }}>FarmConnect</h3>

          <p style={{ lineHeight: '1.6' }}>{t('footer_desc')}</p>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '20px' }}>
            {t('quick_links')}
          </h4>

          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li>{t('about_us')}</li>
            <li>{t('how_it_works')}</li>
            <li>{t('farmer_stories')}</li>
            <li>{t('contact_support')}</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '20px' }}>
            {t('categories')}
          </h4>

          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li>{t('fresh_veg')}</li>
            <li>{t('organic_fruits')}</li>
            <li>{t('dairy_eggs')}</li>
            <li>{t('grains_pulses')}</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '20px' }}>
            {t('stay_updated')}
          </h4>

          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              placeholder={t('email_placeholder')}
              style={{ padding: '10px', width: '100%' }}
            />

            <button
              style={{
                background: 'var(--accent-orange)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
              }}
            >
              {t('go')}
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '60px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '20px',
        }}
      >
        <p>{t('all_rights_reserved')}</p>
      </div>
    </footer>
  );
}
