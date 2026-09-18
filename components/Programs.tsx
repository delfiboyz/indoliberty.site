
export default function Programs() {
  return (
    <section className="programs" id="program">
      <div className="prog-head">
        <div className="section-label">Program & Kegiatan</div>
        <h2 className="prog-title">Ide-ide yang<br />Kami Hidupkan</h2>
        <p className="prog-sub">
          Dari diskusi intim hingga publikasi yang tajam, kami membangun
          ekosistem pengetahuan kebebasan di Indonesia.
        </p>
      </div>
      <div className="prog-grid">
        <div className="prog-card">
          <span className="prog-tag">Edukasi</span>
          <h3>Diskusi & Kuliah Terbuka</h3>
          <p>
            Sesi diskusi rutin membahas ekonomi, filsafat politik, dan kebijakan
            publik dari perspektif kebebasan. Terbuka untuk siapa pun yang ingin
            berpikir lebih dalam.
          </p>
        </div>
        <div className="prog-card">
          <span className="prog-tag">Publikasi</span>
          <h3>Analisis Kebijakan</h3>
          <p>
            Tulisan dan analisis mendalam tentang isu ekonomi dan politik
            Indonesia, dari regulasi ojek online hingga kebijakan fiskal, dari
            sudut pandang liberal klasik.
          </p>
          <a href="/tulisan" className="prog-link">
            Baca Artikel
          </a>
        </div>
        <div className="prog-card">
          <span className="prog-tag">Media Digital</span>
          <h3>Konten & Kampanye</h3>
          <p>
            Konten yang mudah dicerna tentang ide-ide kebebasan: infografis
            tajam, analisis singkat, dan meme yang mengkritisi statisme,
            menjangkau jutaan orang Indonesia.
          </p>
          <a
            href="https://instagram.com/indoliberty"
            target="_blank"
            rel="noopener noreferrer"
            className="prog-link"
          >
            Ikuti di Instagram <span className="arrow">→</span>
          </a>
        </div>
        <div className="prog-card">
          <span className="prog-tag">Perpustakaan Ide</span>
          <h3>Rekomendasi Bacaan</h3>
          <p>
            Kurasi bacaan esensial tentang libertarianisme dan liberalisme
            klasik, dari Hayek, Friedman, Bastiat hingga pemikir lokal yang
            relevan untuk konteks Indonesia.
          </p>
          <a href="/peta-baca" className="prog-link">
            Buka Peta Baca <span className="arrow">→</span>
          </a>
        </div>
        <div className="prog-card">
          <span className="prog-tag">Jaringan</span>
          <h3>Komunitas & Networking</h3>
          <p>
            Terhubung dengan ratusan anggota yang berpikiran sama: mahasiswa,
            profesional, akademisi, dan wirausahawan yang percaya pada kekuatan
            kebebasan dan pasar bebas.
          </p>
          <a href="#join" className="prog-link">
            Bergabung Sekarang <span className="arrow">→</span>
          </a>
        </div>
        <div className="prog-card">
          <span className="prog-tag">Think Tank</span>
          <h3>Policy Brief & Riset</h3>
          <p>
            Rekomendasi kebijakan berbasis bukti untuk mendorong reformasi yang
            memperluas kebebasan ekonomi dan sipil di Indonesia, terinspirasi
            dari lembaga terbaik global.
          </p>
        </div>
      </div>
    </section>
  )
}
