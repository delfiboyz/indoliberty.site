import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Misi & Visi',
  description: 'Visi dan misi Indonesian Liberty Society dalam mempromosikan kebebasan individu, kerja sama sukarela, dan pemerintahan terbatas di Indonesia.',
}

const misi = [
  {
    nomor: '01',
    judul: 'Mempromosikan Prinsip Libertarian',
    deskripsi:
      'Menyebarluaskan nilai-nilai kebebasan individu, pasar bebas, dan pemerintahan terbatas melalui edukasi, diskusi, dan konten digital yang menjangkau seluruh lapisan masyarakat Indonesia.',
  },
  {
    nomor: '02',
    judul: 'Menyatukan Komunitas',
    deskripsi:
      'Membangun jaringan pemikir, aktivis, dan warga yang berkomitmen terhadap kebebasan di seluruh penjuru Indonesia, dari Sabang sampai Merauke.',
  },
  {
    nomor: '03',
    judul: 'Menginspirasi Keterlibatan Sipil',
    deskripsi:
      'Mendorong partisipasi aktif dalam wacana publik dan kebijakan yang berpihak pada kebebasan individu, hak-hak sipil, dan supremasi hukum.',
  },
  {
    nomor: '04',
    judul: 'Mendukung Solusi Sukarela',
    deskripsi:
      'Mengadvokasi pendekatan berbasis pasar dan inisiatif masyarakat sipil sebagai alternatif yang lebih efektif dan manusiawi atas intervensi negara.',
  },
  {
    nomor: '05',
    judul: 'Memperluas Gerakan',
    deskripsi:
      'Menjangkau generasi muda Indonesia dan membangun ekosistem gagasan libertarian yang kuat, relevan, dan berkelanjutan untuk masa depan bangsa.',
  },
]

export default function MisiVisi() {
  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh', paddingTop: '120px' }}>

      {/* Header */}
      <section className="subpage-header">
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
          Tentang Kami
        </div>
        <h1
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(48px, 6vw, 88px)',
            fontWeight: 300,
            color: 'var(--white)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
            maxWidth: '700px',
          }}
        >
          Misi &amp; <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Visi</em>
        </h1>
      </section>

      {/* Visi */}
      <section className="misi-visi-section">
        <div className="visi-grid">
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
              Visi
            </div>
            <div style={{ width: '52px', height: '2px', background: 'var(--gold)' }} />
          </div>
          <div>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(26px, 3vw, 40px)',
                fontWeight: 300,
                color: 'var(--white)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
              }}
            >
              Menyatukan dan memberdayakan kaum Libertarian di seluruh Indonesia dengan mempromosikan{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>kebebasan individu</em>,
              kerja sama sukarela, dan intervensi pemerintah yang minimal.
            </p>
          </div>
        </div>
      </section>

      {/* Misi */}
      <section className="misi-section">
        <div style={{ marginBottom: '64px' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            Misi
          </div>
          <div style={{ width: '52px', height: '2px', background: 'var(--gold)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(250,250,247,0.07)' }}>
          {misi.map((item) => (
            <div
              key={item.nomor}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '48px',
                padding: '48px 40px',
                background: 'var(--black)',
                alignItems: 'start',
              }}
            >
              <span
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--gold)',
                  paddingTop: '6px',
                }}
              >
                {item.nomor}
              </span>
              <div>
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '16px',
                    lineHeight: 1.2,
                  }}
                >
                  {item.judul}
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.8,
                    color: 'rgba(250,250,247,0.5)',
                    maxWidth: '600px',
                  }}
                >
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
