'use client'

const tulisan = [
  {
    judul: 'Pasar Bebas dan Kolonialisme: Dua Hal yang Sengaja Disamakan?',
    ringkasan: 'Artikel ini membantah persamaan sederhana antara kolonialisme dan kapitalisme pasar bebas melalui analisis historis dan telaah wacana kritis. Secara historis, perusahaan seperti VOC dan East India Company lahir dari hak monopoli yang diberikan negara, yang justru bertentangan dengan prinsip pasar bebas. Kualitas institusi pasca-kemerdekaan terbukti lebih menentukan trajektori pembangunan suatu negara.',
    penulis: 'Alviansyah Agung Masaputra',
    tanggal: '12 Juni 2026',
    sumber: 'https://medium.com/@alvian.ha21/pasar-bebas-dan-kolonialisme-dua-hal-yang-sengaja-disamakan-756452c8cee5',
  },
  {
    judul: 'Fire and Empire: The Cost of Lunatics Desire',
    ringkasan: 'Analisis kampanye militer AS-Israel terhadap Iran pada 2026 dari perspektif teori hubungan internasional realis. Meski AS meraih kemenangan taktis awal, Iran berhasil membalas secara asimetris dengan menutup Selat Hormuz dan mengganggu sekitar 20% pasokan energi global. Kemenangan di medan perang tidak lagi menentukan hasil akhir konflik.',
    penulis: 'Syaiful Islam',
    tanggal: '11 April 2026',
    sumber: 'https://cukupsyaifulll.medium.com/fire-and-empire-the-cost-of-lunatics-desire-a4cc0c999328',
  },
  {
    judul: 'Membaca Iklim Pasar Indonesia: Gebrakan hingga Ancaman Keambrukan',
    ringkasan: 'Analisis kondisi ekonomi Indonesia sejak pemerintahan Prabowo-Gibran menjabat, berdasarkan data pasar dan laporan internasional. Kebijakan seperti pemotongan suku bunga, pembentukan DANANTARA, dan suntikan likuiditas ke bank BUMN dinilai menimbulkan distorsi pasar dan ketidakpastian investor. Indonesia tengah mengalami "hampered market order" di mana intervensi berlebihan menghasilkan kerusakan jangka panjang yang tidak terlihat.',
    penulis: 'Syaiful Islam',
    tanggal: '14 Februari 2026',
    sumber: 'https://cukupsyaifulll.medium.com/membaca-iklim-pasar-indonesia-gebrakan-hingga-ancaman-keambrukan-0c2793dcb88a',
  },
]

export default function TulisanList() {
  return (
    <div className="tulisan-grid">
      {tulisan.map((item, i) => (
        <a
          key={i}
          href={item.sumber}
          target="_blank"
          rel="noopener noreferrer"
          className="tulisan-card"
        >
          <div className="tulisan-card-inner">
            <span className="tulisan-tanggal">{item.tanggal}</span>
            <h2 className="tulisan-judul">{item.judul}</h2>
            <p className="tulisan-ringkasan">{item.ringkasan}</p>
          </div>
          <div className="tulisan-card-footer">
            <span className="tulisan-penulis">{item.penulis}</span>
          </div>
        </a>
      ))}
    </div>
  )
}
