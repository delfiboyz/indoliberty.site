
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav id="nav">
      <Link href="/" className="nav-logo">
        <Image
          src="/logo.png"
          alt="Indonesian Liberty Society Logo"
          width={40}
          height={40}
          className="logo-mark"
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
        <div className="nav-wordmark">
          <span className="nav-name">Indonesian Liberty Society</span>
          <span className="nav-sub">Merdeka · Bebas · Sejahtera</span>
        </div>
      </Link>

      <button
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/#tentang" onClick={() => setIsOpen(false)}>Tentang</a></li>
        <li><Link href="/isu" onClick={() => setIsOpen(false)}>Isu</Link></li>
        <li><Link href="/tulisan" onClick={() => setIsOpen(false)}>Tulisan</Link></li>
        <li><Link href="/peta-baca" onClick={() => setIsOpen(false)}>Peta Baca</Link></li>
        <li><a href="/#nilai" onClick={() => setIsOpen(false)}>Nilai</a></li>
        <li><a href="/#program" onClick={() => setIsOpen(false)}>Program</a></li>
        <li>
          <a href="/#join" className="nav-cta" onClick={() => setIsOpen(false)}>Bergabung</a>
        </li>
      </ul>
    </nav>
  )
}