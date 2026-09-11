'use client'

import { useEffect } from 'react'

interface Location {
  id: string
  type: string
  x: number
  y: number
  title: string
  subtitle?: string
  kind: string
  desc: string
  difficulty: string | null
  time: string | null
  learn: string[]
  resources: string[]
  prereq: string[]
  prereqAny?: boolean
  unlocks: string[]
  alwaysDone?: boolean
  branch?: string
  cta?: { label: string; href: string }
}

const BOOK_COVERS: Record<string, string> = {
  'John Stuart Mill — On Liberty':                          '/book-covers/on-liberty.jpg',
  'John Locke — Second Treatise of Government':             '/book-covers/second-treatise.jpg',
  'Frédéric Bastiat — The Law':                            '/book-covers/the-law.jpg',
  'Adam Smith — The Wealth of Nations':                     '/book-covers/wealth-of-nations.jpg',
  'Henry Hazlitt — Economics in One Lesson':                '/book-covers/economics-one-lesson.jpg',
  'Milton Friedman — Capitalism and Freedom':               '/book-covers/capitalism-and-freedom.jpg',
  'Friedrich Hayek — The Constitution of Liberty':          '/book-covers/constitution-of-liberty.jpg',
  'Ludwig von Mises — Liberalism':                          '/book-covers/liberalism-mises.jpg',
  'Alexis de Tocqueville — Democracy in America':           '/book-covers/democracy-in-america.jpg',
  'Robert Nozick — Anarchy, State, and Utopia':             '/book-covers/anarchy-state-utopia.jpg',
  'Murray Rothbard — For a New Liberty':                    '/book-covers/for-a-new-liberty.jpg',
  'Murray Rothbard — The Ethics of Liberty':                '/book-covers/ethics-of-liberty.jpg',
  'Milton Friedman — Free to Choose':                       '/book-covers/free-to-choose.jpg',
  'Ludwig von Mises — Human Action':                        '/book-covers/human-action.jpg',
  'Friedrich Hayek — The Use of Knowledge in Society':      '/book-covers/use-of-knowledge.jpg',
  'Karl Marx — Manifesto Komunis':                          '/book-covers/manifesto.jpg',
  'John Rawls — A Theory of Justice':                       '/book-covers/theory-of-justice.jpg',
  'G.A. Cohen — Self-Ownership, Freedom, and Equality':     '/book-covers/self-ownership.jpg',
}

export default function PetaBacaMap() {
  useEffect(() => {
    const LOCATIONS: Location[] = [
      { id:'start', type:'start', x:90, y:370, title:'Titik Berangkat', subtitle:'Awal perjalanan', kind:'Mulai',
        desc:'Di sinilah setiap pembaca memulai. Belum ada yang perlu kamu pelajari di titik ini — cukup melangkah ke desa pertama.',
        difficulty:null, time:null, learn:[], resources:[], prereq:[], unlocks:['n1'], alwaysDone:true },
      { id:'n1', type:'village', x:220, y:295, title:'Apa Itu Kebebasan?', subtitle:'John Stuart Mill', kind:'Konsep dasar',
        desc:'Desa pertama dalam perjalananmu — tempat pertanyaan paling dasar tentang kebebasan individu dijawab.',
        difficulty:'Pemula', time:'2–3 jam', learn:['Argumen dasar untuk kebebasan individu','Batas kekuasaan atas diri sendiri','Kenapa paksaan sosial juga perlu dibatasi'],
        resources:['John Stuart Mill — On Liberty'], prereq:['start'], unlocks:['n2'] },
      { id:'n2', type:'monument', x:350, y:218, title:'Apa Itu Hak?', subtitle:'John Locke', kind:'Pemikir',
        desc:'Sebuah tugu tua yang mengabadikan pemikir yang meletakkan dasar hak asasi modern.',
        difficulty:'Pemula', time:'3–4 jam', learn:['Asal-usul hak atas hidup, kebebasan, dan properti','Kenapa pemerintah dibentuk untuk melindungi hak, bukan memberikannya'],
        resources:['John Locke — Second Treatise of Government'], prereq:['n1'], unlocks:['n3'] },
      { id:'n3', type:'library', x:465, y:290, title:'Kenapa Negara Diperlukan?', subtitle:'Frédéric Bastiat', kind:'Buku',
        desc:'Perpustakaan kecil di tepi hutan, menyimpan salah satu esai politik paling tajam yang pernah ditulis.',
        difficulty:'Menengah', time:'2 jam', learn:['Batas antara hukum yang melindungi dan hukum yang merampas','Kapan negara berubah jadi alat perampasan'],
        resources:['Frédéric Bastiat — The Law'], prereq:['n2'], unlocks:['n4'] },
      { id:'n4', type:'village', x:555, y:400, title:'Bagaimana Pasar Bekerja?', subtitle:'Adam Smith & Henry Hazlitt', kind:'Konsep dasar',
        desc:'Pasar desa yang ramai — tempat prinsip dasar ekonomi pasar dipraktikkan setiap hari.',
        difficulty:'Pemula', time:'4–5 jam', learn:['Kenapa pertukaran sukarela menciptakan kemakmuran','Cara menilai efek jangka panjang, bukan cuma yang terlihat'],
        resources:['Adam Smith — The Wealth of Nations','Henry Hazlitt — Economics in One Lesson'], prereq:['n3'], unlocks:['n5'] },
      { id:'n5', type:'monument', x:655, y:490, title:'Apa Itu Kebebasan Ekonomi?', subtitle:'Milton Friedman', kind:'Pemikir',
        desc:'Tugu penutup jalur Fondasi. Dari sini, pelabuhan sudah terlihat di kejauhan.',
        difficulty:'Menengah', time:'5 jam', learn:['Kenapa kebebasan ekonomi dan kebebasan sipil tak terpisahkan'],
        resources:['Milton Friedman — Capitalism and Freedom'], prereq:['n4'], unlocks:['port'] },
      { id:'port', type:'port', x:760, y:580, title:'Pelabuhan Percabangan', subtitle:'Pilih jalurmu', kind:'Percabangan',
        desc:'Fondasi selesai. Dari pelabuhan ini kapal berangkat ke tiga pulau — kamu boleh mengunjungi lebih dari satu.',
        difficulty:null, time:null, learn:['Tiga kapal, tiga tradisi pemikiran menanti di seberang laut'],
        resources:[], prereq:['n5'], unlocks:['islandA','islandB','islandC'] },
      { id:'islandA', type:'island', branch:'klasik', x:975, y:270, title:'Pulau Liberalisme Klasik', subtitle:'4 pemikir', kind:'Topik besar',
        desc:'Pulau besar dengan reruntuhan tua — tempat gagasan tentang hukum, konstitusi, dan masyarakat sipil tumbuh.',
        difficulty:'Menengah', time:'12–15 jam', learn:['Menjaga kebebasan individu sambil tetap punya pemerintahan yang sah','Rule of law dan pemerintahan konstitusional'],
        resources:['Friedrich Hayek — The Constitution of Liberty','Ludwig von Mises — Liberalism','Adam Smith — The Wealth of Nations','Alexis de Tocqueville — Democracy in America'],
        prereq:['port'], unlocks:['mountain'] },
      { id:'islandB', type:'island', branch:'libertarian', x:1060, y:510, title:'Pulau Libertarianisme', subtitle:'3 pemikir', kind:'Topik besar',
        desc:'Pulau terjal dengan tiga jalur curam menuju satu pertanyaan: seberapa kecil negara boleh menjadi?',
        difficulty:'Lanjut', time:'10–12 jam', learn:['Seberapa jauh hak milik dan kebebasan individu bisa dibawa','Negara minimal vs. masyarakat tanpa negara'],
        resources:['Robert Nozick — Anarchy, State, and Utopia','Murray Rothbard — For a New Liberty','Murray Rothbard — The Ethics of Liberty'],
        prereq:['port'], unlocks:['mountain'] },
      { id:'islandC', type:'island', branch:'ekonomi', x:958, y:690, title:'Pulau Ekonomi', subtitle:'4 pemikir', kind:'Topik besar',
        desc:'Pulau dengan kilang dan pasar — untuk kamu yang ingin memahami mesin di balik gagasan.',
        difficulty:'Menengah', time:'10–12 jam', learn:['Argumen ekonomi di balik filsafat politiknya','Kenapa harga membawa informasi, bukan sekadar angka'],
        resources:['Henry Hazlitt — Economics in One Lesson','Milton Friedman — Free to Choose','Ludwig von Mises — Human Action','Friedrich Hayek — The Use of Knowledge in Society'],
        prereq:['port'], unlocks:['mountain'] },
      { id:'mountain', type:'mountain', x:1290, y:250, title:'Gunung Perdebatan Besar', subtitle:'Kritik & tantangan', kind:'Topik lanjutan',
        desc:'Pendakian yang menantang. Jangan berhenti sebelum sampai di sini — setiap gagasan layak diuji oleh lawannya.',
        difficulty:'Lanjut', time:'8–10 jam', learn:['Kritik paling kuat terhadap hak milik pribadi','Bagaimana pihak yang kalah di pasar bebas diperlakukan','Kritik egalitarian atas kepemilikan diri'],
        resources:['Karl Marx — Manifesto Komunis','John Rawls — A Theory of Justice','G.A. Cohen — Self-Ownership, Freedom, and Equality'],
        prereq:['islandA','islandB','islandC'], prereqAny:true, unlocks:['castle'] },
      { id:'castle', type:'castle', x:1470, y:420, title:'Kastil Komunitas', subtitle:'Diskusi & jaringan', kind:'Tonggak',
        desc:'Benteng tempat para pengembara bertukar cerita. Setiap bulan, satu buku dari peta ini dibedah bersama.',
        difficulty:null, time:'Rutin bulanan', learn:['Ruang diskusi terbuka bersama pembaca lain'],
        resources:[], prereq:['mountain'], unlocks:['treasure'] },
      { id:'treasure', type:'treasure', x:1660, y:590, title:'Harta Karun', subtitle:'Kebebasan yang kamu temukan sendiri', kind:'Tujuan akhir',
        desc:'Bukan emas. Harta di akhir peta ini adalah caramu sendiri berpikir tentang kebebasan — dan keberanian untuk terus mempertanyakannya.',
        difficulty:null, time:null, learn:['Cara berpikir yang bisa terus kamu pakai, jauh setelah peta ini selesai'],
        resources:[], prereq:['castle'], unlocks:[],
        cta:{ label:'Bergabung dengan komunitas', href:'https://indoliberty.site/#join' } },
    ]

    const SEGMENTS: [string, string, string][] = [
      ['start','n1','M90,370 Q155,420 220,295'],
      ['n1','n2','M220,295 Q285,248 350,218'],
      ['n2','n3','M350,218 Q410,218 465,290'],
      ['n3','n4','M465,290 Q515,342 555,400'],
      ['n4','n5','M555,400 Q608,448 655,490'],
      ['n5','port','M655,490 Q710,538 760,580'],
      ['port','islandA','M760,580 Q865,420 975,270'],
      ['port','islandB','M760,580 Q912,545 1060,510'],
      ['port','islandC','M760,580 Q858,640 958,690'],
      ['islandA','mountain','M975,270 Q1132,256 1290,250'],
      ['islandB','mountain','M1060,510 Q1172,374 1290,250'],
      ['islandC','mountain','M958,690 Q1132,472 1290,250'],
      ['mountain','castle','M1290,250 Q1385,328 1470,420'],
      ['castle','treasure','M1470,420 Q1568,500 1660,590'],
    ]

    const ICONBOX: Record<string, number> = { start:22, village:30, library:30, monument:30, port:30, island:34, mountain:36, castle:36, treasure:34 }

    const byId: Record<string, Location> = {}
    ;(LOCATIONS as unknown as Location[]).forEach(l => { byId[l.id] = l })

    const completed = new Set<string>(['start'])
    let order: string[] = ['start']

    function isUnlocked(node: Location) {
      if (node.id === 'start') return true
      if (node.prereqAny) return node.prereq.some(p => completed.has(p))
      return node.prereq.every(p => completed.has(p))
    }
    function stateOf(node: Location) {
      if (completed.has(node.id)) return 'completed'
      return isUnlocked(node) ? 'available' : 'locked'
    }

    const svgNS = 'http://www.w3.org/2000/svg'
    const xlinkNS = 'http://www.w3.org/1999/xlink'
    function svgEl(tag: string, attrs: Record<string, string | number>) {
      const e = document.createElementNS(svgNS, tag)
      for (const k in attrs) e.setAttribute(k, String(attrs[k]))
      return e
    }

    const routesG = document.getElementById('pb-routes')!
    const nodesG = document.getElementById('pb-nodes')!
    const travelerG = document.getElementById('pb-traveler')!
    const sparklesG = document.getElementById('pb-sparkles')!

    // build route segments
    const segEls: Record<string, SVGElement> = {}
    SEGMENTS.forEach(s => {
      const p = svgEl('path', { d: s[2], class: 'pb-route' })
      ;(p as SVGElement & { dataset: DOMStringMap }).dataset.from = s[0]
      ;(p as SVGElement & { dataset: DOMStringMap }).dataset.to = s[1]
      routesG.appendChild(p)
      segEls[s[0] + '>' + s[1]] = p as SVGElement
    })

    // build location nodes
    const nodeEls: Record<string, SVGElement> = {}
    ;(LOCATIONS as unknown as Location[]).forEach(node => {
      const g = svgEl('g', { class: 'pb-loc', 'data-id': node.id, tabindex: 0, role: 'button', 'aria-label': node.title })
      if (node.branch) g.setAttribute('data-branch', node.branch)
      g.setAttribute('transform', `translate(${node.x},${node.y})`)

      g.appendChild(svgEl('circle', { class: 'pb-loc-ring', r: 26 }))
      g.appendChild(svgEl('circle', { class: 'pb-loc-disc', r: 22 }))

      const size = ICONBOX[node.type] || 28
      const use = svgEl('use', { class: 'pb-loc-icon', x: -size/2, y: -size/2, width: size, height: size })
      use.setAttributeNS(xlinkNS, 'href', `#pb-icon-${node.type}`)
      use.setAttribute('href', `#pb-icon-${node.type}`)
      g.appendChild(use)

      const lockBadge = svgEl('g', { class: 'pb-badge pb-badge-lock' })
      lockBadge.appendChild(svgEl('circle', { cx: 20, cy: -20, r: 10 }))
      const lockUse = svgEl('use', { x: 12, y: -28, width: 16, height: 16 })
      lockUse.setAttributeNS(xlinkNS, 'href', '#pb-icon-lock')
      lockUse.setAttribute('href', '#pb-icon-lock')
      lockBadge.appendChild(lockUse)
      g.appendChild(lockBadge)

      const checkBadge = svgEl('g', { class: 'pb-badge pb-badge-check' })
      checkBadge.appendChild(svgEl('circle', { cx: 20, cy: -20, r: 10 }))
      const checkUse = svgEl('use', { x: 12, y: -28, width: 16, height: 16 })
      checkUse.setAttributeNS(xlinkNS, 'href', '#pb-icon-check')
      checkUse.setAttribute('href', '#pb-icon-check')
      checkBadge.appendChild(checkUse)
      g.appendChild(checkBadge)

      const label = svgEl('text', { class: 'pb-loc-label', y: (size/2) + 22 })
      label.textContent = node.title.length > 26 ? node.title.slice(0, 24) + '…' : node.title
      g.appendChild(label)

      g.addEventListener('click', () => onNodeClick(node.id))
      g.addEventListener('keydown', (e: Event) => {
        const ke = e as KeyboardEvent
        if (ke.key === 'Enter' || ke.key === ' ') { ke.preventDefault(); onNodeClick(node.id) }
      })

      nodesG.appendChild(g)
      nodeEls[node.id] = g as SVGElement
    })

    // traveler flag
    const travelerFlag = svgEl('g', {})
    travelerFlag.innerHTML = '<circle r="5"></circle><line class="pb-flag-pole" x1="0" y1="-4" x2="0" y2="-26"></line><path class="pb-flag" d="M0,-26 L16,-20 L0,-14 Z"></path>'
    travelerG.appendChild(travelerFlag)

    // dynamic pop-scale keyframes
    const styleTag = document.createElement('style')
    styleTag.textContent = '@keyframes pb-pop-scale { 0% { transform-box:fill-box; transform-origin:center; transform:scale(1); } 40% { transform:scale(1.25); } 100% { transform:scale(1); } }'
    document.head.appendChild(styleTag)

    function renderAll() {
      ;(LOCATIONS as unknown as Location[]).forEach(node => {
        const g = nodeEls[node.id]
        const s = stateOf(node)
        g.classList.remove('pb-locked', 'pb-available', 'pb-completed')
        g.classList.add(`pb-${s}`)
      })
      SEGMENTS.forEach(s => {
        const toNode = byId[s[1]]
        const st = stateOf(toNode)
        const p = segEls[s[0] + '>' + s[1]]
        p.classList.remove('pb-seg-done', 'pb-seg-open', 'pb-seg-locked')
        p.classList.add(st === 'completed' ? 'pb-seg-done' : st === 'available' ? 'pb-seg-open' : 'pb-seg-locked')
      })
      const lastNode = byId[order[order.length - 1]]
      travelerG.setAttribute('transform', `translate(${lastNode.x},${lastNode.y - 34})`)

    }

    let currentFocus: Location | null = null

    function getLayout() {
      const r = document.getElementById('pb-stage')!.getBoundingClientRect()
      const W = r.width, H = r.height
      const fit = Math.max(W / 1800, H / 800) // slice: fill container edge-to-edge
      const offX = (W - 1800 * fit) / 2       // negative when SVG wider than stage
      const offY = (H - 800 * fit) / 2         // negative when SVG taller than stage
      return { W, H, fit, offX, offY }
    }

    function focusCamera(node: Location) {
      const cam = document.getElementById('pb-camera')
      if (!cam) return
      const { W, H, fit, offX, offY } = getLayout()
      const mobile = window.innerWidth < 640
      const panelW = mobile ? 0 : 380
      const scale = mobile ? 1.15 : 1.25
      // desired screen position for the node (center of the area left of the panel)
      const cx = (W - panelW) / 2
      const cy = mobile ? H * 0.2 : H / 2
      // CSS-pixel translate so that node maps to (cx, cy) after scale
      const tx = cx - (node.x * fit + offX) * scale
      const ty = cy - (node.y * fit + offY) * scale
      cam.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`
    }
    function resetCamera() {
      const cam = document.getElementById('pb-camera')
      if (cam) cam.style.transform = 'translate(0px,0px) scale(1)'
    }
    const onResize = () => { if (currentFocus) focusCamera(currentFocus) }
    window.addEventListener('resize', onResize)

    const panel = document.getElementById('pb-panel')!
    const backdrop = document.getElementById('pb-backdrop')!
    const panelContent = document.getElementById('pb-panel-content')!

    function onNodeClick(id: string) {
      const node = byId[id]
      currentFocus = node
      focusCamera(node)
      openPanel(node)
    }

    function openPanel(node: Location) {
      const st = stateOf(node)
      let html = ''
      html += `<p class="pb-panel-kind">${node.kind}</p>`
      html += `<h2>${node.title}</h2>`
      if (node.subtitle) html += `<p class="pb-subtitle">${node.subtitle}</p>`
      html += `<p class="pb-desc">${node.desc}</p>`


      if (node.learn?.length) {
        html += '<h3>Yang akan kamu pelajari</h3><ul>' + node.learn.map(t => `<li>${t}</li>`).join('') + '</ul>'
      }
      if (node.resources?.length) {
        html += '<h3>Bacaan terkait</h3><div class="pb-book-grid">'
        node.resources.forEach((t: string) => {
          const coverPath = BOOK_COVERS[t]
          const imgTag = coverPath
            ? `<button class="pb-book-thumb" data-cover="${coverPath}" data-alt="${t}" aria-label="Zoom sampul buku"><img class="pb-book-cover" src="${coverPath}" alt="${t}" loading="lazy" onerror="this.style.display='none'"></button>`
            : ''
          html += `<div class="pb-book-card">${imgTag}<span class="pb-book-title">${t}</span></div>`
        })
        html += '</div>'
      }
      if (node.prereq?.length && node.id !== 'start') {
        const prereqTitles = node.prereq.map(p => byId[p].title)
        html += `<h3>${node.prereqAny ? 'Butuh salah satu dari' : 'Butuh lebih dulu'}</h3><ul>${prereqTitles.map((t: string) => `<li>${t}</li>`).join('')}</ul>`
      }
      if (node.unlocks?.length) {
        const nextTitles = node.unlocks.map(u => byId[u].title)
        html += '<h3>Membuka lokasi</h3><ul>' + nextTitles.map(t => `<li>${t}</li>`).join('') + '</ul>'
      }

      html += '<div class="pb-panel-actions">'
      if (node.cta) {
        html += `<a class="pb-btn pb-btn-primary" href="${node.cta.href}" target="_blank" rel="noopener">${node.cta.label}</a>`
      }
      if (st === 'locked') {
        html += '<button class="pb-btn pb-btn-secondary" disabled>Terkunci</button>'
        html += '<p class="pb-lock-note">Selesaikan dulu lokasi yang jadi syarat di atas untuk membuka tempat ini.</p>'
      } else if (st === 'available') {
        html += '<button class="pb-btn pb-btn-primary" id="pb-complete-btn">Tandai Selesai</button>'
      } else if (st === 'completed' && node.id !== 'start') {
        html += '<button class="pb-btn pb-btn-secondary" disabled>Sudah Dipelajari</button>'
        html += '<button class="pb-undo-link" id="pb-undo-btn">Tandai belum selesai</button>'
      }
      html += '</div>'

      panelContent.innerHTML = html
      panel.classList.add('pb-open')
      backdrop.classList.add('pb-open')

      // wire up book cover lightbox triggers
      panelContent.querySelectorAll<HTMLElement>('.pb-book-thumb').forEach(btn => {
        btn.addEventListener('click', () => openLightbox(btn.dataset.cover || '', btn.dataset.alt || ''))
      })

      const completeBtn = document.getElementById('pb-complete-btn')
      if (completeBtn) completeBtn.addEventListener('click', () => markComplete(node.id))
      const undoBtn = document.getElementById('pb-undo-btn')
      if (undoBtn) undoBtn.addEventListener('click', () => markIncomplete(node.id))
    }

    function closePanel() {
      panel.classList.remove('pb-open')
      backdrop.classList.remove('pb-open')
      currentFocus = null
      resetCamera()
    }

    function markComplete(id: string) {
      if (completed.has(id)) return
      completed.add(id)
      order.push(id)
      renderAll()
      if (id === 'treasure') triggerTreasureEffect()
      else triggerCompleteEffect(byId[id])
      openPanel(byId[id])
    }
    function markIncomplete(id: string) {
      completed.delete(id)
      order = order.filter(o => o !== id)
      renderAll()
      openPanel(byId[id])
    }

    function triggerCompleteEffect(node: Location) {
      const g = nodeEls[node.id]
      g.style.animation = 'none'
      requestAnimationFrame(() => { g.style.animation = 'pb-pop-scale 0.5s ease' })
    }

    function triggerTreasureEffect() {
      const node = byId['treasure']
      for (let i = 0; i < 10; i++) {
        const star = svgEl('text', {
          x: node.x + (Math.random() * 120 - 60),
          y: node.y + (Math.random() * 100 - 70),
          class: 'pb-sparkle',
          'font-size': 14 + Math.random() * 14,
          fill: '#DDA53C',
        })
        star.textContent = '✦'
        sparklesG.appendChild(star)
        setTimeout(() => { star.classList.add('pb-show') }, 20)
        setTimeout(() => { star.remove() }, 1400)
      }
    }

    // lightbox
    const lightbox = document.getElementById('pb-lightbox')!
    const lightboxImg = document.getElementById('pb-lightbox-img') as HTMLImageElement
    const lightboxCaption = document.getElementById('pb-lightbox-caption')!

    function openLightbox(src: string, alt: string) {
      lightboxImg.src = src
      lightboxImg.alt = alt
      lightboxCaption.textContent = alt
      lightbox.classList.add('pb-open')
    }
    function closeLightbox() {
      lightbox.classList.remove('pb-open')
    }

    const panelThumbHandler = (e: Event) => {
      const btn = (e.target as Element).closest('.pb-book-thumb') as HTMLElement | null
      if (!btn) return
      openLightbox(btn.dataset.cover || '', btn.dataset.alt || '')
    }
    panelContent.addEventListener('click', panelThumbHandler)
    lightbox.addEventListener('click', (e) => {
      if ((e.target as Element).closest('.pb-lightbox-img-wrap')) return
      closeLightbox()
    })
    const lightboxClose = document.getElementById('pb-lightbox-close')!
    lightboxClose.addEventListener('click', closeLightbox)

    // event listeners
    const mapEl = document.getElementById('pb-map')!
    const mapClickHandler = (e: Event) => {
      if ((e.target as Element).closest('.pb-loc')) return
      currentFocus = null
      resetCamera()
    }
    mapEl.addEventListener('click', mapClickHandler)

    const panelCloseBtn = document.getElementById('pb-panel-close')!
    panelCloseBtn.addEventListener('click', closePanel)
    backdrop.addEventListener('click', closePanel)

    renderAll()

    return () => {
      mapEl.removeEventListener('click', mapClickHandler)
      panelContent.removeEventListener('click', panelThumbHandler)
      window.removeEventListener('resize', onResize)
      styleTag.remove()
    }
  }, [])

  return (
    <div className="peta-baca-root">
      {/* map */}
      <div className="pb-stage" id="pb-stage">
        <svg id="pb-map" viewBox="0 0 1800 800" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          role="img" aria-label="Peta harta karun interaktif jalur bacaan kebebasan">
          <defs>
            <radialGradient id="pb-vignette" cx="50%" cy="45%" r="75%">
              <stop offset="60%" stopColor="#000000" stopOpacity="0"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0.35"/>
            </radialGradient>
            <filter id="pb-paper" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} result="noise"/>
              <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.28  0 0 0 0 0.2  0 0 0 0 0.11  0 0 0 0.05 0"/>
            </filter>

            <symbol id="pb-icon-start" viewBox="0 0 40 40">
              <line x1="10" y1="4" x2="10" y2="36" stroke="currentColor" strokeWidth="3"/>
              <path d="M10 6 L30 12 L10 18 Z" fill="currentColor"/>
            </symbol>
            <symbol id="pb-icon-village" viewBox="0 0 40 40">
              <path d="M20 4 L36 18 L31 18 L31 34 L9 34 L9 18 L4 18 Z" fill="currentColor"/>
              <rect x="17" y="22" width="6" height="12" fill="#F3E4C0"/>
            </symbol>
            <symbol id="pb-icon-library" viewBox="0 0 40 40">
              <path d="M4 10 L20 6 L20 32 L4 36 Z" fill="currentColor"/>
              <path d="M36 10 L20 6 L20 32 L36 36 Z" fill="currentColor" opacity="0.75"/>
            </symbol>
            <symbol id="pb-icon-monument" viewBox="0 0 40 40">
              <path d="M17 4 L23 4 L26 12 L26 34 L14 34 L14 12 Z" fill="currentColor"/>
              <rect x="9" y="34" width="22" height="4" fill="currentColor"/>
            </symbol>
            <symbol id="pb-icon-port" viewBox="0 0 40 40">
              <circle cx="20" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="3"/>
              <line x1="20" y1="12" x2="20" y2="32" stroke="currentColor" strokeWidth="3"/>
              <path d="M8 24 A12 12 0 0 0 20 34" fill="none" stroke="currentColor" strokeWidth="3"/>
              <path d="M32 24 A12 12 0 0 1 20 34" fill="none" stroke="currentColor" strokeWidth="3"/>
              <line x1="10" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="3"/>
            </symbol>
            <symbol id="pb-icon-island" viewBox="0 0 40 40">
              <ellipse cx="20" cy="32" rx="16" ry="5" fill="currentColor" opacity="0.5"/>
              <line x1="20" y1="30" x2="20" y2="12" stroke="currentColor" strokeWidth="3"/>
              <path d="M20 14 Q10 8 4 12" fill="none" stroke="currentColor" strokeWidth="3"/>
              <path d="M20 14 Q30 8 36 12" fill="none" stroke="currentColor" strokeWidth="3"/>
              <path d="M20 14 Q14 4 8 4" fill="none" stroke="currentColor" strokeWidth="3"/>
              <path d="M20 14 Q26 4 32 4" fill="none" stroke="currentColor" strokeWidth="3"/>
            </symbol>
            <symbol id="pb-icon-mountain" viewBox="0 0 40 40">
              <path d="M4 34 L16 10 L22 20 L28 8 L36 34 Z" fill="currentColor"/>
              <path d="M28 8 L31 14 L25 14 Z" fill="#F3E4C0" opacity="0.9"/>
            </symbol>
            <symbol id="pb-icon-castle" viewBox="0 0 40 40">
              <path d="M6 36 V18 H10 V14 H14 V18 H18 V10 H22 V18 H26 V14 H30 V18 H34 V36 Z" fill="currentColor"/>
              <rect x="17" y="24" width="6" height="12" fill="#F3E4C0"/>
            </symbol>
            <symbol id="pb-icon-treasure" viewBox="0 0 40 40">
              <path d="M6 18 Q20 8 34 18 V32 H6 Z" fill="currentColor"/>
              <rect x="6" y="18" width="28" height="4" fill="#00000030"/>
              <circle cx="20" cy="23" r="2.5" fill="#F3E4C0"/>
            </symbol>
            <symbol id="pb-icon-lock" viewBox="0 0 24 24">
              <rect x="5" y="11" width="14" height="10" rx="2" fill="none"/>
              <path d="M8 11 V8 a4 4 0 0 1 8 0 v3" fill="none" strokeWidth="2.2"/>
            </symbol>
            <symbol id="pb-icon-check" viewBox="0 0 24 24">
              <path d="M4 13 L10 19 L20 6" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
          </defs>

          {/* simple flat ocean fill using existing sand color */}
          <rect x="-800" y="-800" width="3400" height="2400" fill="#D9C48A"/>

          {/* camera group — everything inside zooms together */}
          <g id="pb-camera" style={{ transition: 'transform 0.6s cubic-bezier(.2,.7,.3,1)', transformOrigin: '0 0' }}>
            {/* waves */}
            <g fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.25" strokeLinecap="round">
              <path d="M780 120 Q820 130 860 120 T940 120"/>
              <path d="M1150 680 Q1190 690 1230 680 T1310 680"/>
              <path d="M760 740 Q800 750 840 740 T920 740"/>
              <path d="M800 400 Q840 410 880 400"/>
            </g>

            {/* west mainland */}
            <path fill="#D9C48A" d="M0,50 C100,10 250,0 360,55 C460,106 500,190 560,235 C640,285 665,370 620,445 C578,516 600,575 568,640 C535,710 465,768 320,782 C175,796 70,758 25,688 C-20,612 12,522 -8,415 C-28,308 -8,190 0,50 Z"/>
            <path fill="#00000012" d="M-8,415 C12,522 -20,612 25,688 C70,758 175,796 320,782 L320,800 L-40,800 Z"/>
            <g fill="#57713F" opacity="0.55">
              <ellipse cx="150" cy="135" rx="75" ry="48"/>
              <ellipse cx="110" cy="520" rx="62" ry="42"/>
              <ellipse cx="400" cy="130" rx="52" ry="35"/>
            </g>

            {/* east mainland */}
            <path fill="#D9C48A" d="M1155,110 C1255,52 1420,32 1555,74 C1678,112 1800,178 1800,258 L1800,758 C1718,796 1568,800 1448,758 C1342,720 1272,652 1212,588 C1152,522 1140,438 1185,372 C1228,308 1158,242 1170,178 C1178,140 1190,132 1155,110 Z"/>
            <path fill="#00000012" d="M1212,588 C1272,652 1342,720 1448,758 C1568,800 1718,796 1800,758 L1800,800 L1155,800 Z"/>
            <g fill="#8A7862" opacity="0.5">
              <ellipse cx="1310" cy="260" rx="95" ry="58"/>
              <ellipse cx="1440" cy="220" rx="65" ry="40"/>
            </g>
            <ellipse fill="#57713F" opacity="0.55" cx="1680" cy="210" rx="58" ry="38"/>

            {/* islands */}
            <ellipse fill="#D9C48A" cx="975" cy="280" rx="98" ry="72"/>
            <ellipse fill="#D9C48A" cx="1060" cy="518" rx="84" ry="60"/>
            <ellipse fill="#D9C48A" cx="958" cy="690" rx="90" ry="64"/>

            {/* dynamic layers */}
            <g id="pb-routes"></g>
            <g id="pb-nodes"></g>
            <g id="pb-traveler" style={{ transition: 'transform 0.7s cubic-bezier(.3,.8,.3,1)' }}></g>
            <g id="pb-sparkles"></g>
          </g>

          {/* compass rose — fixed UI overlay */}
          <g transform="translate(1690,90)" opacity="0.75">
            <circle r="42" fill="none" stroke="#F3E4C0" strokeWidth="1.5"/>
            <path d="M0,-38 L8,0 L0,38 L-8,0 Z" fill="#F3E4C0" opacity="0.85"/>
            <path d="M-38,0 L0,8 L38,0 L0,-8 Z" fill="#F3E4C0" opacity="0.55"/>
            <text x="0" y="-48" textAnchor="middle" fill="#F3E4C0" fontFamily="Cinzel, var(--font-cinzel)" fontSize="13">U</text>
          </g>

          <rect x="-60" y="-60" width="1920" height="920" fill="url(#pb-vignette)" style={{ pointerEvents: 'none' }}/>
          <rect x="-60" y="-60" width="1920" height="920" filter="url(#pb-paper)" opacity="0.5" style={{ pointerEvents: 'none' }}/>
          <rect x="10" y="10" width="1780" height="780" fill="none" stroke="#2A2015" strokeWidth="6" rx="4"/>
          <rect x="20" y="20" width="1760" height="760" fill="none" stroke="#F3E4C0" strokeWidth="1" rx="2" opacity="0.5"/>
        </svg>
      </div>

      {/* panel */}
      <div className="pb-backdrop" id="pb-backdrop"></div>
      <aside className="pb-panel" id="pb-panel" aria-live="polite">
        <button className="pb-panel-close" id="pb-panel-close" aria-label="Tutup">✕</button>
        <div id="pb-panel-content"></div>
      </aside>

      {/* lightbox */}
      <div className="pb-lightbox" id="pb-lightbox" role="dialog" aria-modal="true" aria-label="Sampul buku">
        <button className="pb-lightbox-close" id="pb-lightbox-close" aria-label="Tutup">✕</button>
        <div className="pb-lightbox-img-wrap">
          <img id="pb-lightbox-img" src={undefined} alt="" className="pb-lightbox-img" />
        </div>
        <p className="pb-lightbox-caption" id="pb-lightbox-caption"></p>
      </div>
    </div>
  )
}
