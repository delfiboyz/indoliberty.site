import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { issues } from '@/lib/isu-data'

export const metadata: Metadata = {
  title: 'Isu',
  description: 'Isu-isu kebijakan yang kami analisis dari perspektif kebebasan individu, pasar bebas, dan pemerintahan terbatas.',
}

export default function IsuPage() {
  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh', paddingTop: '120px' }}>
      <section className="subpage-header-center">
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
          Analisis Kebijakan
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
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Isu</em> Kami
        </h1>
        <p style={{ marginTop: '24px', fontSize: '16px', lineHeight: 1.8, color: 'rgba(250,250,247,0.55)', maxWidth: '580px', margin: '24px auto 0' }}>
          Isu-isu kebijakan publik yang kami analisis dari perspektif klasik liberal: kebebasan individu, pasar bebas, hak milik, dan pemerintahan terbatas.
        </p>
      </section>

      <section className="subpage-section">
        <div className="isu-grid">
          {issues.map((issue, i) => (
            <Link key={issue.slug} href={`/isu/${issue.slug}`} className="isu-card">
              {/* Image area */}
              <div className="isu-card-image">
                {issue.coverImage ? (
                  <>
                    <Image
                      src={issue.coverImage}
                      alt={issue.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      quality={70}
                    />
                    <div className="isu-image-overlay" />
                  </>
                ) : (
                  <span className="isu-bracket">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M0 20 L0 0 L20 0" stroke="rgba(250,250,247,0.35)" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </span>
                )}
              </div>

              {/* Text body */}
              <div className="isu-card-body">
                <div className="isu-category">{issue.category}</div>
                <h2 className="isu-title">{issue.title}</h2>
                <p className="isu-summary">{issue.summary}</p>
                <span className="isu-read">Baca Analisis →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
