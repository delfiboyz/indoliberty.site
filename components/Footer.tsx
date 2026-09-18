
export default function Footer() {
  return (
    <footer>
      <div>
        <div className="ft-name">Indonesian Liberty Society</div>
        <div className="ft-tag">Merdeka · Bebas · Sejahtera</div>
        <p className="ft-desc">
          Komunitas pemikir Indonesia yang memperjuangkan kebebasan individu,
          pasar bebas, dan pemerintahan yang terbatas.
        </p>
      </div>
      <div className="ft-col">
        <h4>Tentang</h4>
        <ul>
          <li><a href="/misi-visi">Misi &amp; Visi</a></li>
          <li><span style={{ color: 'rgba(250,250,247,0.25)' }}>Tim Kami</span></li>
          <li><span style={{ color: 'rgba(250,250,247,0.25)' }}>Sejarah ILS</span></li>
          <li><span style={{ color: 'rgba(250,250,247,0.25)' }}>Press Kit</span></li>
        </ul>
      </div>
      <div className="ft-col">
        <h4>Konten</h4>
        <ul>
          <li><a href="/tulisan">Artikel &amp; Analisis</a></li>
          <li><span style={{ color: 'rgba(250,250,247,0.25)' }}>Podcast</span></li>
          <li><a href="/peta-baca">Rekomendasi Buku</a></li>
          <li><span style={{ color: 'rgba(250,250,247,0.25)' }}>Policy Brief</span></li>
        </ul>
      </div>
      <div className="ft-col">
        <h4>Komunitas</h4>
        <ul>
          <li><span style={{ color: 'rgba(250,250,247,0.25)' }}>Jadwal Acara</span></li>
          <li><a href="/#join">Bergabung</a></li>
          <li>
            <a href="https://instagram.com/indoliberty" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li><span style={{ color: 'rgba(250,250,247,0.25)' }}>Kontak Kami</span></li>
        </ul>
      </div>
      <div className="ft-bottom">
        <span className="ft-copy">
          © 2025 Indonesian Liberty Society. Seluruh hak dilindungi.
        </span>
        <span className="ft-motto">
          "In individuals, insanity is rare; but in groups, parties, nations
          and epochs, it is the rule." Nietzsche
        </span>
      </div>
    </footer>
  )
}
