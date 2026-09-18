
export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="hero-bg-grid"></div>
      <div className="hero-radial"></div>
      <div className="hero-left">
        <div className="eyebrow">Indonesian Liberty Society</div>
        <h1 className="hero-h1">
          Kebebasan<br />
          bukan <em>hadiah</em>.<br />
          <strong>Itu hak kamu.</strong>
        </h1>
        <p className="hero-lead">
          Komunitas pemikir, pelajar, dan profesional Indonesia yang
          memperjuangkan kebebasan individu, pasar bebas, dan pemerintahan yang
          terbatas, sejak 2024.
        </p>
        <div className="hero-actions">
          <a href="#join" className="btn-gold">Gabung Komunitas <span>→</span></a>
          <a href="#tentang" className="btn-outline">Eksplorasi Ide</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="torch-glow"></div>
        <svg
          className="torch-svg"
          width="200"
          height="380"
          viewBox="0 0 200 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="fg1" cx="50%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#FFF9B0" />
              <stop offset="60%" stopColor="#E6B445" />
              <stop offset="100%" stopColor="#C4911C" stopOpacity=".4" />
            </radialGradient>
            <radialGradient id="fg2" cx="50%" cy="30%" r="55%">
              <stop offset="0%" stopColor="#FFF4A0" />
              <stop offset="70%" stopColor="#C4911C" />
              <stop offset="100%" stopColor="#8B5A0A" stopOpacity=".5" />
            </radialGradient>
            <radialGradient id="fg3" cx="50%" cy="10%" r="50%">
              <stop offset="0%" stopColor="#FFFDE0" />
              <stop offset="100%" stopColor="#E6B445" stopOpacity=".6" />
            </radialGradient>
          </defs>
          {/* Flame outer */}
          <path
            d="M100 15 C100 15 42 72 42 140 C42 188 64 228 100 252 C136 228 158 188 158 140 C158 72 100 15 100 15Z"
            fill="url(#fg1)"
            opacity=".85"
          />
          {/* Flame mid */}
          <path
            d="M100 40 C100 40 60 90 60 140 C60 176 76 208 100 228 C124 208 140 176 140 140 C140 90 100 40 100 40Z"
            fill="url(#fg2)"
          />
          {/* Flame core */}
          <path
            d="M100 75 C100 75 78 105 78 138 C78 158 86 174 100 188 C114 174 122 158 122 138 C122 105 100 75 100 75Z"
            fill="url(#fg3)"
          />
          {/* Staff */}
          <rect x="91" y="250" width="18" height="90" rx="3" fill="#5C3907" />
          {/* Grip bands */}
          <rect x="88" y="260" width="24" height="8" rx="4" fill="#8B5A14" />
          <rect x="88" y="282" width="24" height="8" rx="4" fill="#7A4F12" />
          <rect x="88" y="304" width="24" height="8" rx="4" fill="#8B5A14" />
          <rect x="88" y="326" width="24" height="8" rx="4" fill="#7A4F12" />
        </svg>
        {/* Vertical scrolling words */}
        <div className="vert-text">
          <div className="vert-track">
            <span>Kebebasan</span><span>Liberty</span><span>Pasar Bebas</span>
            <span>Merdeka</span><span>Rights</span><span>Libertas</span>
            <span>Hayek</span><span>Friedman</span><span>Individu</span>
            <span>Kebebasan</span><span>Liberty</span><span>Pasar Bebas</span>
            <span>Merdeka</span><span>Rights</span><span>Libertas</span>
            <span>Hayek</span><span>Friedman</span><span>Individu</span>
          </div>
        </div>
      </div>
    </section>
  )
}
