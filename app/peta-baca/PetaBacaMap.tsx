'use client'

import { useEffect } from 'react'

interface Resource { a: string; t: string; isbn: string }
interface Location {
  id: string; type: string; x: number; y: number
  title: string; subtitle?: string; kind: string; desc: string
  difficulty: string | null; time: string | null
  learn: string[]; resources: Resource[]
  prereq: string[]; prereqAny?: boolean; unlocks: string[]
  alwaysDone?: boolean; branch?: string
  cta?: { label: string; href: string }
}

const LOCAL_COVERS: Record<string, string> = {
  '9780140432077': '/book-covers/on-liberty.jpg',
  '9780915144860': '/book-covers/second-treatise.jpg',
  '9781610161046': '/book-covers/the-law.jpg',
  '9780553585971': '/book-covers/wealth-of-nations.jpg',
  '9780517548233': '/book-covers/economics-one-lesson.jpg',
  '9780226264189': '/book-covers/capitalism-and-freedom.jpg',
  '9780226315393': '/book-covers/constitution-of-liberty.jpg',
  '9781610165242': '/book-covers/liberalism-mises.jpg',
  '9780553214643': '/book-covers/democracy-in-america.jpg',
  '9780465097203': '/book-covers/anarchy-state-utopia.jpg',
  '9781610165029': '/book-covers/for-a-new-liberty.jpg',
  '9780814775592': '/book-covers/ethics-of-liberty.jpg',
  '9780156334600': '/book-covers/free-to-choose.jpg',
  '9781610165624': '/book-covers/human-action.jpg',
  '9780226320939': '/book-covers/individualism-and-economic-order.jpg',
  '9780140447576': '/book-covers/manifesto.jpg',
  '9780674000780': '/book-covers/theory-of-justice.jpg',
  '9780521477518': '/book-covers/self-ownership-freedom-and-equality.png',
}

const GDRIVE_LINKS: Record<string, string> = {
  '9780140432077': 'https://drive.google.com/file/d/1l9PSvIHBThi8sFLajm7dPPP_AgnasHQT/view?usp=drive_link',
  '9780915144860': 'https://drive.google.com/file/d/1-vkkxafoL3qVVrqQlyuoJOzjze2zqmLr/view?usp=drive_link',
  '9781610161046': 'https://drive.google.com/file/d/1aZrtaCjF-QU9pQQ1bPiGD09ReZA2kstu/view?usp=drive_link',
  '9780553585971': 'https://drive.google.com/file/d/1MDwYUC1OtRr_lkSRtITW7ZX9jwjI8JEA/view?usp=drive_link',
  '9780517548233': 'https://drive.google.com/file/d/10FXQDOhTM8gxX0UMD5SP-V3CP_JjSXJZ/view?usp=drive_link',
  '9780226264189': 'https://drive.google.com/file/d/1S4yzIkkJNHsrVgv1obl7CBj6NZAxtOkI/view?usp=drive_link',
  '9780226315393': 'https://drive.google.com/file/d/1vL4bGJtRN70hv9YSX4XBvqmdi2jrbqIw/view?usp=drive_link',
  '9781610165242': 'https://drive.google.com/file/d/1vSLIOrMLLmcpWipNPuW9DsMnKUZbUEBs/view?usp=drive_link',
  '9780553214643': 'https://drive.google.com/file/d/1MPmct6soHbRdSI5CwGHpL_OT8_MiFwVi/view?usp=drive_link',
  '9780465097203': 'https://drive.google.com/file/d/1D0_tu_89H5bFrS-qBkIw_IwHAQnpjMPD/view?usp=drive_link',
  '9781610165029': 'https://drive.google.com/file/d/1a2LePLiTLbELZMR1CLu9FPvvi6hh2b9y/view?usp=drive_link',
  '9780814775592': 'https://drive.google.com/file/d/1g6t8U9bFxu0zzWIuw73h6hlkOruuXqpE/view?usp=drive_link',
  '9780156334600': 'https://drive.google.com/file/d/1LbLSsnNU-K8PhIHiTrEyBw1fVCBu1f_2/view?usp=drive_link',
  '9781610165624': 'https://drive.google.com/file/d/1jp8TTRQ9zUW5NsXH-ugBYndFeQB8Uhf_/view?usp=drive_link',
  '9780226320939': 'https://drive.google.com/file/d/18FLq10YzOVnJnipxCxMuiGHR3lDpxt__/view?usp=drive_link',
  '9780140447576': 'https://drive.google.com/file/d/1F6H1Spg2sWepnBrsDOi1Tc7BicrO-9yD/view?usp=drive_link',
  '9780674000780': 'https://drive.google.com/file/d/1JO2UbH4SXF7YyLYGYFR-Eb7opAnCw162/view?usp=drive_link',
  '9780521477518': 'https://drive.google.com/file/d/1r_cvFFm47mNuV3I5gT-GQ1mOO4fbzcRV/view?usp=drive_link',
}

export default function PetaBacaMap() {
  useEffect(() => {
    const LOCATIONS: Location[] = [
      { id:'start', type:'start', x:90, y:370, title:'Titik Berangkat', subtitle:'Awal perjalanan', kind:'Mulai',
        desc:'Di sinilah setiap pembaca memulai. Belum ada yang perlu kamu pelajari di titik ini, cukup melangkah ke desa pertama.',
        difficulty:null, time:null, learn:[], resources:[], prereq:[], unlocks:['n1'], alwaysDone:true },
      { id:'n1', type:'village', x:220, y:295, title:'Apa Itu Kebebasan?', subtitle:'John Stuart Mill', kind:'Konsep dasar',
        desc:'Desa pertama dalam perjalananmu: tempat pertanyaan paling dasar tentang kebebasan individu dijawab.',
        difficulty:'Pemula', time:'2–3 jam',
        learn:['Argumen dasar untuk kebebasan individu','Batas kekuasaan atas diri sendiri','Kenapa paksaan sosial juga perlu dibatasi'],
        resources:[{ a:'John Stuart Mill', t:'On Liberty', isbn:'9780140432077' }],
        prereq:['start'], unlocks:['n2'] },
      { id:'n2', type:'monument', x:350, y:218, title:'Apa Itu Hak?', subtitle:'John Locke', kind:'Pemikir',
        desc:'Sebuah tugu tua yang mengabadikan pemikir yang meletakkan dasar hak asasi modern.',
        difficulty:'Pemula', time:'3–4 jam',
        learn:['Asal-usul hak atas hidup, kebebasan, dan properti','Kenapa pemerintah dibentuk untuk melindungi hak, bukan memberikannya'],
        resources:[{ a:'John Locke', t:'Second Treatise of Government', isbn:'9780915144860' }],
        prereq:['n1'], unlocks:['n3'] },
      { id:'n3', type:'library', x:465, y:290, title:'Kenapa Negara Diperlukan?', subtitle:'Frédéric Bastiat', kind:'Buku',
        desc:'Perpustakaan kecil di tepi hutan, menyimpan salah satu esai politik paling tajam yang pernah ditulis.',
        difficulty:'Menengah', time:'2 jam',
        learn:['Batas antara hukum yang melindungi dan hukum yang merampas','Kapan negara berubah jadi alat perampasan'],
        resources:[{ a:'Frédéric Bastiat', t:'The Law', isbn:'9781610161046' }],
        prereq:['n2'], unlocks:['n4'] },
      { id:'n4', type:'village', x:555, y:400, title:'Bagaimana Pasar Bekerja?', subtitle:'Adam Smith & Henry Hazlitt', kind:'Konsep dasar',
        desc:'Pasar desa yang ramai: tempat prinsip dasar ekonomi pasar dipraktikkan setiap hari.',
        difficulty:'Pemula', time:'4–5 jam',
        learn:['Kenapa pertukaran sukarela menciptakan kemakmuran','Cara menilai efek jangka panjang, bukan cuma yang terlihat'],
        resources:[
          { a:'Adam Smith', t:'The Wealth of Nations', isbn:'9780553585971' },
          { a:'Henry Hazlitt', t:'Economics in One Lesson', isbn:'9780517548233' },
        ],
        prereq:['n3'], unlocks:['n5'] },
      { id:'n5', type:'monument', x:655, y:490, title:'Apa Itu Kebebasan Ekonomi?', subtitle:'Milton Friedman', kind:'Pemikir',
        desc:'Tugu penutup jalur Fondasi. Dari sini, pelabuhan sudah terlihat di kejauhan.',
        difficulty:'Menengah', time:'5 jam',
        learn:['Kenapa kebebasan ekonomi dan kebebasan sipil tak terpisahkan'],
        resources:[{ a:'Milton Friedman', t:'Capitalism and Freedom', isbn:'9780226264189' }],
        prereq:['n4'], unlocks:['port'] },
      { id:'port', type:'port', x:760, y:580, title:'Pelabuhan Percabangan', subtitle:'Pilih jalurmu', kind:'Percabangan',
        desc:'Fondasi selesai. Dari pelabuhan ini kapal berangkat ke tiga pulau, kamu boleh mengunjungi lebih dari satu.',
        difficulty:null, time:null, learn:['Tiga kapal, tiga tradisi pemikiran menanti di seberang laut'],
        resources:[], prereq:['n5'], unlocks:['islandA','islandB','islandC'] },
      { id:'islandA', type:'island', branch:'klasik', x:975, y:270, title:'Pulau Liberalisme Klasik', subtitle:'3 pemikir', kind:'Topik besar',
        desc:'Pulau besar dengan reruntuhan tua: tempat gagasan tentang hukum, konstitusi, dan masyarakat sipil tumbuh.',
        difficulty:'Menengah', time:'12–15 jam',
        learn:['Menjaga kebebasan individu sambil tetap punya pemerintahan yang sah','Rule of law dan pemerintahan konstitusional'],
        resources:[
          { a:'Friedrich Hayek', t:'The Constitution of Liberty', isbn:'9780226315393' },
          { a:'Ludwig von Mises', t:'Liberalism', isbn:'9781610165242' },
          { a:'Alexis de Tocqueville', t:'Democracy in America', isbn:'9780553214643' },
        ],
        prereq:['port'], unlocks:['mountain'] },
      { id:'islandB', type:'island', branch:'libertarian', x:1060, y:510, title:'Pulau Libertarianisme', subtitle:'3 pemikir', kind:'Topik besar',
        desc:'Pulau terjal dengan tiga jalur curam menuju satu pertanyaan: seberapa kecil negara boleh menjadi?',
        difficulty:'Lanjut', time:'10–12 jam',
        learn:['Seberapa jauh hak milik dan kebebasan individu bisa dibawa','Negara minimal vs. masyarakat tanpa negara'],
        resources:[
          { a:'Robert Nozick', t:'Anarchy, State, and Utopia', isbn:'9780465097203' },
          { a:'Murray Rothbard', t:'For a New Liberty', isbn:'9781610165029' },
          { a:'Murray Rothbard', t:'The Ethics of Liberty', isbn:'9780814775592' },
        ],
        prereq:['port'], unlocks:['mountain'] },
      { id:'islandC', type:'island', branch:'ekonomi', x:958, y:690, title:'Pulau Ekonomi', subtitle:'3 pemikir', kind:'Topik besar',
        desc:'Pulau dengan kilang dan pasar: untuk kamu yang ingin memahami mesin di balik gagasan.',
        difficulty:'Menengah', time:'10–12 jam',
        learn:['Argumen ekonomi di balik filsafat politiknya','Kenapa harga membawa informasi, bukan sekadar angka'],
        resources:[
          { a:'Milton Friedman', t:'Free to Choose', isbn:'9780156334600' },
          { a:'Ludwig von Mises', t:'Human Action', isbn:'9781610165624' },
          { a:'Friedrich Hayek', t:'Individualism and Economic Order', isbn:'9780226320939' },
        ],
        prereq:['port'], unlocks:['mountain'] },
      { id:'mountain', type:'mountain', x:1290, y:250, title:'Gunung Perdebatan Besar', subtitle:'Kritik & tantangan', kind:'Topik lanjutan',
        desc:'Pendakian yang menantang. Jangan berhenti sebelum sampai di sini. Setiap gagasan layak diuji oleh lawannya.',
        difficulty:'Lanjut', time:'8–10 jam',
        learn:['Kritik paling kuat terhadap hak milik pribadi','Bagaimana pihak yang kalah di pasar bebas diperlakukan','Kritik egalitarian atas kepemilikan diri'],
        resources:[
          { a:'Karl Marx', t:'The Communist Manifesto', isbn:'9780140447576' },
          { a:'John Rawls', t:'A Theory of Justice', isbn:'9780674000780' },
          { a:'G.A. Cohen', t:'Self-Ownership, Freedom, and Equality', isbn:'9780521477518' },
        ],
        prereq:['islandA','islandB','islandC'], prereqAny:true, unlocks:['castle'] },
      { id:'castle', type:'castle', x:1470, y:420, title:'Kastil Komunitas', subtitle:'Diskusi & jaringan', kind:'Tonggak',
        desc:'Benteng tempat para pengembara bertukar cerita. Setiap bulan, satu buku dari peta ini dibedah bersama.',
        difficulty:null, time:'Rutin bulanan', learn:['Ruang diskusi terbuka bersama pembaca lain'],
        resources:[], prereq:['mountain'], unlocks:['treasure'] },
      { id:'treasure', type:'treasure', x:1660, y:590, title:'Harta Karun', subtitle:'Kebebasan yang kamu temukan sendiri', kind:'Tujuan akhir',
        desc:'Bukan emas. Harta di akhir peta ini adalah caramu sendiri berpikir tentang kebebasan. Dan keberanian untuk terus mempertanyakannya.',
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
    LOCATIONS.forEach(l => { byId[l.id] = l })

    const STORAGE_KEY = 'petabaca-liberty-progress-v1'
    const completed = new Set<string>(['start'])
    let order: string[] = ['start']

    function loadProgress() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return
        const data = JSON.parse(raw)
        if (data && Array.isArray(data.order)) {
          const restored = (data.order as string[]).filter(id => !!byId[id])
          if (!restored.includes('start')) restored.unshift('start')
          order = restored
          order.forEach(id => completed.add(id))
        }
      } catch { /* storage unavailable */ }
    }
    function saveProgress() {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ order })) } catch { /* ignore */ }
    }
    loadProgress()

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

    const segEls: Record<string, SVGElement> = {}
    SEGMENTS.forEach(s => {
      const p = svgEl('path', { d: s[2], class: 'pb-route' }) as SVGElement & { dataset: DOMStringMap }
      p.dataset.from = s[0]; p.dataset.to = s[1]
      routesG.appendChild(p)
      segEls[s[0] + '>' + s[1]] = p
    })

    const nodeEls: Record<string, SVGElement> = {}
    LOCATIONS.forEach(node => {
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
      lockUse.setAttributeNS(xlinkNS, 'href', '#pb-icon-lock'); lockUse.setAttribute('href', '#pb-icon-lock')
      lockBadge.appendChild(lockUse); g.appendChild(lockBadge)

      const checkBadge = svgEl('g', { class: 'pb-badge pb-badge-check' })
      checkBadge.appendChild(svgEl('circle', { cx: 20, cy: -20, r: 10 }))
      const checkUse = svgEl('use', { x: 12, y: -28, width: 16, height: 16 })
      checkUse.setAttributeNS(xlinkNS, 'href', '#pb-icon-check'); checkUse.setAttribute('href', '#pb-icon-check')
      checkBadge.appendChild(checkUse); g.appendChild(checkBadge)

      const label = svgEl('text', { class: 'pb-loc-label', y: (size/2) + 22 })
      label.textContent = node.title.length > 26 ? node.title.slice(0, 24) + '…' : node.title
      g.appendChild(label)

      g.addEventListener('click', () => onNodeClick(node.id))
      g.addEventListener('keydown', (e: Event) => {
        const ke = e as KeyboardEvent
        if (ke.key === 'Enter' || ke.key === ' ') { ke.preventDefault(); onNodeClick(node.id) }
      })

      nodesG.appendChild(g)
      nodeEls[node.id] = g
    })

    const travelerFlag = svgEl('g', {})
    travelerFlag.innerHTML = '<circle r="5"></circle><line class="pb-flag-pole" x1="0" y1="-4" x2="0" y2="-26"></line><path class="pb-flag" d="M0,-26 L16,-20 L0,-14 Z"></path>'
    travelerG.appendChild(travelerFlag)

    const styleTag = document.createElement('style')
    styleTag.textContent = '@keyframes pb-pop-scale { 0% { transform-box:fill-box; transform-origin:center; transform:scale(1); } 40% { transform:scale(1.25); } 100% { transform:scale(1); } }'
    document.head.appendChild(styleTag)

    function renderAll() {
      LOCATIONS.forEach(node => {
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

    function getLayout() {
      const r = document.getElementById('pb-stage')!.getBoundingClientRect()
      const W = r.width, H = r.height
      const fit = Math.min(W / 1800, H / 800)
      const offX = (W - 1800 * fit) / 2
      const offY = (H - 800 * fit) / 2
      return { W, H, fit, offX, offY }
    }

    const onResize = () => { /* no-op: camera no longer follows focus */ }
    window.addEventListener('resize', onResize)

    const panel = document.getElementById('pb-panel')!
    const backdrop = document.getElementById('pb-backdrop')!
    const panelContent = document.getElementById('pb-panel-content')!

    function onNodeClick(id: string) {
      const node = byId[id]
      openPanel(node)
    }

    function openPanel(node: Location) {
      const { W, fit, offX } = getLayout()
      const screenX = node.x * fit + offX
      if (screenX > W / 2) {
        panel.classList.add('pb-left')
      } else {
        panel.classList.remove('pb-left')
      }
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
        html += '<h3>Bacaan terkait</h3><div class="pb-resource-list">'
        node.resources.forEach((r, i) => {
          const coverSrc = LOCAL_COVERS[r.isbn] || `https://covers.openlibrary.org/b/isbn/${r.isbn}-M.jpg`
          const driveUrl = GDRIVE_LINKS[r.isbn] || ''
          const driveLink = driveUrl ? `<a class="pb-r-gdrive" href="${driveUrl}" target="_blank" rel="noopener">Buka ↗</a>` : ''
          html += `<div class="pb-resource-row">
            <button class="pb-resource-cover" data-node="${node.id}" data-index="${i}" tabindex="0" aria-label="Perbesar sampul ${r.t}">
              <img src="${coverSrc}" alt="" data-isbn="${r.isbn}" data-t="${r.t}" data-a="${r.a}" onerror="window.__pbCoverError(this)">
              <div class="pb-fallback-cover"><span class="pb-fallback-who">${r.a}</span><span class="pb-fallback-title">${r.t}</span></div>
            </button>
            <div class="pb-resource-text">
              <span class="pb-r-author">${r.a}</span>
              <span class="pb-r-title">${r.t}</span>
              ${driveLink}
            </div>
          </div>`
        })
        html += '</div>'
      }

      if (node.prereq?.length && node.id !== 'start') {
        const prereqTitles = node.prereq.map(p => byId[p].title)
        html += `<h3>${node.prereqAny ? 'Butuh salah satu dari' : 'Butuh lebih dulu'}</h3><ul>${prereqTitles.map(t => `<li>${t}</li>`).join('')}</ul>`
      }

      html += '<div class="pb-panel-actions">'
      if (node.cta) {
        html += `<a class="pb-btn pb-btn-primary" href="${node.cta.href}" target="_blank" rel="noopener">${node.cta.label}</a>`
      }
      if (st === 'locked') {
        html += '<button class="pb-btn pb-btn-secondary" disabled>Terkunci</button>'
        html += '<p class="pb-lock-note">Selesaikan dulu lokasi yang jadi syarat di atas untuk membuka tempat ini.</p>'
      } else if (st === 'available') {
        html += '<button class="pb-btn pb-btn-primary" id="pb-complete-btn">Tandai Selesai ✓</button>'
      } else if (st === 'completed' && node.id !== 'start') {
        html += '<button class="pb-btn pb-btn-secondary" disabled>Sudah Dipelajari ✓</button>'
        html += '<button class="pb-undo-link" id="pb-undo-btn">Tandai belum selesai</button>'
      }
      html += '</div>'

      panelContent.innerHTML = html
      panel.classList.add('pb-open')
      backdrop.classList.add('pb-open')

      panelContent.querySelectorAll<HTMLElement>('.pb-resource-cover').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index || '0')
          const r = byId[btn.dataset.node!].resources[idx]
          openLightbox(r, btn.classList.contains('pb-no-img'))
        })
        btn.addEventListener('keydown', (e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click() }
        })
      })

      const completeBtn = document.getElementById('pb-complete-btn')
      if (completeBtn) completeBtn.addEventListener('click', () => markComplete(node.id))
      const undoBtn = document.getElementById('pb-undo-btn')
      if (undoBtn) undoBtn.addEventListener('click', () => markIncomplete(node.id))
    }

    function closePanel() {
      panel.classList.remove('pb-open')
      backdrop.classList.remove('pb-open')
    }

    // cover error handler — fallback to Google Books, then text fallback
    const coverCache: Record<string, Promise<string | null>> = {}
    function fetchGoogleCover(q: string): Promise<string | null> {
      if (!coverCache[q]) {
        coverCache[q] = fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=1&q=${encodeURIComponent(q)}`)
          .then(r => r.json())
          .then(data => {
            const links = data?.items?.[0]?.volumeInfo?.imageLinks
            const url = links?.thumbnail || links?.smallThumbnail
            return url ? url.replace('http://', 'https://').replace('zoom=1', 'zoom=2') : null
          })
          .catch(() => null)
      }
      return coverCache[q]
    }
    ;(window as Window & { __pbCoverError?: (img: HTMLImageElement) => void }).__pbCoverError = (img: HTMLImageElement) => {
      const container = img.parentElement!
      const { isbn, t, a } = img.dataset
      if (img.dataset.stage === 'google') { container.classList.add('pb-no-img'); return }
      img.dataset.stage = 'google'
      const lookup = isbn ? fetchGoogleCover(`isbn:${isbn}`) : Promise.resolve(null)
      lookup
        .then(url => url || fetchGoogleCover(`intitle:${t} inauthor:${a}`))
        .then(url => { if (url) img.src = url; else container.classList.add('pb-no-img') })
    }

    // lightbox
    const lightbox = document.getElementById('pb-lightbox')!
    const lightboxArt = document.getElementById('pb-lightbox-art')!
    const lightboxCaption = document.getElementById('pb-lightbox-caption')!
    const lightboxGdrive = document.getElementById('pb-lightbox-gdrive') as HTMLAnchorElement

    function openLightbox(r: Resource, noImg: boolean) {
      const coverSrc = LOCAL_COVERS[r.isbn] || `https://covers.openlibrary.org/b/isbn/${r.isbn}-L.jpg`
      lightboxArt.classList.remove('pb-no-img')
      lightboxArt.innerHTML = `<img src="${coverSrc}" alt="" data-isbn="${r.isbn}" data-t="${r.t}" data-a="${r.a}" onerror="window.__pbCoverError(this)">
        <div class="pb-fallback-cover"><span class="pb-fallback-who">${r.a}</span><span class="pb-fallback-title">${r.t}</span></div>`
      if (noImg) lightboxArt.classList.add('pb-no-img')
      lightboxCaption.textContent = `${r.a}: ${r.t}`
      const driveUrl = GDRIVE_LINKS[r.isbn]
      if (driveUrl) { lightboxGdrive.href = driveUrl; lightboxGdrive.hidden = false }
      else lightboxGdrive.hidden = true
      lightbox.classList.add('pb-open')
    }
    function closeLightbox() { lightbox.classList.remove('pb-open') }

    lightbox.addEventListener('click', (e) => {
      if (!(e.target as Element).closest('.pb-lightbox-inner')) closeLightbox()
    })
    document.getElementById('pb-lightbox-close')!.addEventListener('click', closeLightbox)

    function markComplete(id: string) {
      if (completed.has(id)) return
      completed.add(id); order.push(id)
      saveProgress(); renderAll()
      if (id === 'treasure') triggerTreasureEffect()
      else triggerCompleteEffect(byId[id])
      openPanel(byId[id])
    }
    function markIncomplete(id: string) {
      completed.delete(id)
      order = order.filter(o => o !== id)
      saveProgress(); renderAll()
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
          class: 'pb-sparkle', 'font-size': 14 + Math.random() * 14, fill: '#DDA53C',
        })
        star.textContent = '✦'
        sparklesG.appendChild(star)
        setTimeout(() => star.classList.add('pb-show'), 20)
        setTimeout(() => star.remove(), 1400)
      }
    }

    const mapEl = document.getElementById('pb-map')!
    const mapClickHandler = (e: Event) => {
      if ((e.target as Element).closest('.pb-loc')) return
      closePanel()
    }
    mapEl.addEventListener('click', mapClickHandler)
    document.getElementById('pb-panel-close')!.addEventListener('click', closePanel)
    backdrop.addEventListener('click', closePanel)

    renderAll()

    const nav = document.getElementById('nav')
    const navH = nav ? nav.getBoundingClientRect().height : 80
    document.documentElement.style.setProperty('--pb-nav-h', `${navH}px`)
    if (nav) nav.classList.add('scrolled')
    document.body.classList.add('pb-page')

    return () => {
      mapEl.removeEventListener('click', mapClickHandler)
      window.removeEventListener('resize', onResize)
      styleTag.remove()
      delete (window as Window & { __pbCoverError?: unknown }).__pbCoverError
      if (nav) nav.classList.remove('scrolled')
      document.body.classList.remove('pb-page')
    }
  }, [])

  return (
    <div className="peta-baca-root">
      <div className="pb-stage" id="pb-stage">
        <svg id="pb-map" viewBox="0 0 1800 800" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
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

          <rect x="-800" y="-800" width="3400" height="2400" fill="#476A73"/>

          <g id="pb-camera" style={{ transition: 'transform 0.6s cubic-bezier(.2,.7,.3,1)', transformOrigin: '0 0' }}>
            <g fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.2" strokeLinecap="round">
              <path d="M780 120 Q820 130 860 120 T940 120"/>
              <path d="M1150 680 Q1190 690 1230 680 T1310 680"/>
              <path d="M760 740 Q800 750 840 740 T920 740"/>
            </g>

            {/* west mainland */}
            <path fill="#D9C48A" d="M0,50 C100,10 250,0 360,55 C460,106 500,190 560,235 C640,285 665,370 620,445 C578,516 600,575 568,640 C535,710 465,768 320,782 C175,796 70,758 25,688 C-20,612 12,522 -8,415 C-28,308 -8,190 0,50 Z"/>
            <path fill="#00000012" d="M-8,415 C12,522 -20,612 25,688 C70,758 175,796 320,782 L320,800 L-40,800 Z"/>
            <g fill="#57713F" opacity="0.55">
              <ellipse cx="150" cy="135" rx="75" ry="48"/>
              <ellipse cx="110" cy="520" rx="62" ry="42"/>
              <ellipse cx="400" cy="130" rx="52" ry="35"/>
            </g>
            <path fill="none" stroke="#48727c" strokeWidth="6" strokeLinecap="round" opacity="0.55"
              d="M150,50 C190,150 160,255 230,335 C290,405 350,455 330,555 C315,625 350,695 330,780"/>

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

            <g id="pb-routes"></g>
            <g id="pb-nodes"></g>
            <g id="pb-traveler" style={{ transition: 'transform 0.7s cubic-bezier(.3,.8,.3,1)' }}></g>
            <g id="pb-sparkles"></g>
          </g>

          <g transform="translate(1720,80)" opacity="0.75">
            <circle r="42" fill="none" stroke="#F3E4C0" strokeWidth="1.5"/>
            <path d="M0,-38 L8,0 L0,38 L-8,0 Z" fill="#F3E4C0" opacity="0.85"/>
            <path d="M-38,0 L0,8 L38,0 L0,-8 Z" fill="#F3E4C0" opacity="0.55"/>
            <text x="0" y="-48" textAnchor="middle" fill="#F3E4C0" fontFamily="serif" fontSize="13">U</text>
          </g>
          <rect x="-60" y="-60" width="1920" height="920" fill="url(#pb-vignette)" style={{ pointerEvents:'none' }}/>
          <rect x="-60" y="-60" width="1920" height="920" filter="url(#pb-paper)" opacity="0.5" style={{ pointerEvents:'none' }}/>
          <rect x="10" y="10" width="1780" height="780" fill="none" stroke="#2A2015" strokeWidth="6" rx="4"/>
          <rect x="20" y="20" width="1760" height="760" fill="none" stroke="#F3E4C0" strokeWidth="1" rx="2" opacity="0.5"/>
        </svg>
      </div>

      <div className="pb-backdrop" id="pb-backdrop"></div>
      <aside className="pb-panel" id="pb-panel" aria-live="polite">
        <button className="pb-panel-close" id="pb-panel-close" aria-label="Tutup">✕</button>
        <div id="pb-panel-content"></div>
      </aside>

      <div className="pb-lightbox" id="pb-lightbox" role="dialog" aria-modal="true" aria-label="Sampul buku">
        <div className="pb-lightbox-inner">
          <button className="pb-lightbox-close" id="pb-lightbox-close" aria-label="Tutup">✕</button>
          <div className="pb-lightbox-art" id="pb-lightbox-art"></div>
          <p className="pb-lightbox-caption" id="pb-lightbox-caption"></p>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <a className="pb-lightbox-gdrive" id="pb-lightbox-gdrive" target="_blank" rel="noopener" hidden>Buka di Google Drive ↗</a>
        </div>
      </div>
    </div>
  )
}
