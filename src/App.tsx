import React from 'react';

// Data Produk
const products = [
  {
    id: 1,
    nama: "Basic White Tee",
    harga: "Rp 120.000",
    diskon: "Rp 99.000",
    gambar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
    deskripsi: "Bahan katun kombed 30s premium, adem dan menyerap keringat."
  },
  {
    id: 2,
    nama: "Oversize Black Shirt",
    harga: "Rp 150.000",
    diskon: "Rp 125.000",
    gambar: "https://images.unsplash.com/photo-1583743814966-8936f5b7be7a?w=500",
    deskripsi: "Potongan oversize modern untuk gaya harian yang santai."
  }
];

export default function App() {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WA kamu

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      
      {/* Header / Nama Bisnis */}
      <header style={{ padding: '40px 20px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '2px', fontWeight: 'bold' }}>JUALAN BAJU</h1>
        <p style={{ color: '#666' }}>Kualitas Terbaik untuk Kenyamanan Harian Anda</p>
      </header>

      {/* Tentang Kami & Promo */}
      <section style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ borderBottom: '2px solid #000', display: 'inline-block', paddingBottom: '5px' }}>Tentang Kami</h2>
        <p>Kami fokus pada pakaian basic berkualitas tinggi. Setiap jahitan dipastikan kuat untuk penggunaan jangka panjang.</p>
        
        <div style={{ background: '#000', color: '#fff', padding: '20px', marginTop: '20px', borderRadius: '4px' }}>
          <h3 style={{ margin: 0 }}>POTONGAN HARGA KHUSUS!</h3>
          <p style={{ margin: '5px 0 0' }}>Dapatkan diskon hingga 20% untuk setiap pembelian minimal 2 kaos.</p>
        </div>
      </section>

      {/* Katalog Produk */}
      <section style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #eee', padding: '15px', textAlign: 'center' }}>
            <img src={p.gambar} alt={p.nama} style={{ width: '100%', height: 'auto', grayscale: '100%' }} />
            <h3 style={{ margin: '15px 0 5px' }}>{p.nama}</h3>
            <p style={{ fontSize: '0.9rem', color: '#777' }}>{p.deskripsi}</p>
            <p style={{ textDecoration: 'line-through', color: '#999', margin: '5px 0 0' }}>{p.harga}</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 15px' }}>{p.diskon}</p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Halo, saya mau beli ${p.nama}`}
              style={{ display: 'block', background: '#000', color: '#fff', padding: '10px', textDecoration: 'none', borderRadius: '4px' }}
            >
              Beli Sekarang
            </a>
          </div>
        ))}
      </section>

      {/* Footer / Kontak */}
      <footer style={{ background: '#f9f9f9', padding: '40px 20px', marginTop: '60px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3>Hubungi Kami</h3>
          <p>📍 Alamat: Jl. Angkasa Raya No. 08, Jakarta Pusat</p>
          <p>📧 Email: support@jualanbaju.com</p>
          <p>💬 WhatsApp: +{whatsappNumber}</p>
          <hr style={{ margin: '20px 0', borderColor: '#eee' }} />
          <p style={{ fontSize: '0.8rem', color: '#999' }}>&copy; 2026 Jualan Baju. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
