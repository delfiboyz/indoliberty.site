import type { Metadata } from 'next'
import PetaBacaMap from './PetaBacaMap'

export const metadata: Metadata = {
  title: 'Peta Baca',
  description: 'Jalan interaktif menuju kebebasan — panduan bacaan Indonesian Liberty Society dari konsep dasar hingga harta karun pemikiran bebas.',
}

export default function PetaBaca() {
  return (
    <main style={{ background: '#2A2015', minHeight: '100vh', paddingTop: '56px' }}>
      <PetaBacaMap />
    </main>
  )
}
