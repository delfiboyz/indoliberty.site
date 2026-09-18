import type { Metadata } from 'next'
import TulisanList from '@/components/TulisanList'

export const metadata: Metadata = {
  title: 'Tulisan',
  description: 'Kumpulan tulisan, analisis, dan esai dari Indonesian Liberty Society tentang kebebasan individu, pasar bebas, dan pemerintahan terbatas.',
}

export default function Tulisan() {
  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh', paddingTop: '120px' }}>

      {/* Header */}
      <section className="subpage-header-center">
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
          Konten
        </div>
        <h1
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(48px, 6vw, 88px)',
            fontWeight: 300,
            color: 'var(--white)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Tulisan</em> Kami
        </h1>
        <p style={{ marginTop: '24px', fontSize: '16px', lineHeight: 1.8, color: 'rgba(250,250,247,0.55)', maxWidth: '520px', margin: '24px auto 0' }}>
          Esai, analisis, dan gagasan dari anggota Indonesian Liberty Society tentang kebebasan, pasar, dan peran negara.
        </p>
      </section>

      {/* List */}
      <section className="subpage-section">
        <TulisanList />
      </section>
    </main>
  )
}
