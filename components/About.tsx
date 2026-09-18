
export default function About() {
  return (
    <section className="about" id="tentang">
      <div>
        <div className="section-label">Tentang Kami</div>
        <blockquote className="pull-quote">
          "Indonesia yang merdeka dimulai dari manusia yang{' '}
          <em>bebas</em> menentukan nasibnya sendiri."
        </blockquote>
      </div>
      <div className="about-body">
        <div className="gold-bar"></div>
        <p>
          <strong>Indonesian Liberty Society (ILS)</strong> adalah komunitas
          pemikiran yang mempromosikan nilai-nilai klasik liberal dan
          libertarian dalam konteks Indonesia: kebebasan individu, pasar bebas,
          pemerintahan terbatas, dan supremasi hukum.
        </p>
        <p>
          Kami percaya kemakmuran sejati lahir ketika setiap orang diberi ruang
          untuk berkembang sesuai pilihannya sendiri, bukan dari kontrol
          birokrasi atau keputusan elit politik yang tidak akuntabel.
        </p>
        <p>
          Melalui diskusi, publikasi, pendidikan, dan konten digital, kami
          menyebarkan ide-ide kebebasan kepada generasi Indonesia yang siap
          bertanya lebih dalam tentang peran negara, pasar, dan individu.
        </p>
        <a
          href="#join"
          className="btn-gold"
          style={{ alignSelf: 'flex-start', marginTop: '8px' }}
        >
          Bergabung Bersama Kami →
        </a>
      </div>
    </section>
  )
}
