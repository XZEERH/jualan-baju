import React from 'react';

// Data Produk Lebih Lengkap
const products = [
  {
    id: 1,
    nama: "Essential White Tee",
    harga: "Rp 120.000",
    diskon: "Rp 95.000",
    gambar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
    deskripsi: "Katun kombed 30s premium. Sangat nyaman untuk cuaca tropis."
  },
  {
    id: 2,
    nama: "Oversize Midnight Black",
    harga: "Rp 150.000",
    diskon: "Rp 129.000",
    gambar: "https://images.unsplash.com/photo-1583743814966-8936f5b7be7a?w=500",
    deskripsi: "Potongan longgar modern. Cocok untuk tampilan street style."
  },
  {
    id: 3,
    nama: "Classic Navy Polo",
    harga: "Rp 180.000",
    diskon: "Rp 145.000",
    gambar: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
    deskripsi: "Tampilan semi-formal dengan bahan pique yang lembut."
  },
  {
    id: 4,
    nama: "Grey Heather Hoodie",
    harga: "Rp 250.000",
    diskon: "Rp 199.000",
    gambar: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    deskripsi: "Bahan fleece tebal namun tidak panas. Pas untuk berkendara."
  }
];

export default function App() {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor asli Anda

  return (
    <div style={{ fontFamily: '"Inter", sans-serif', color: '#1a1a1a', margin: 0, padding: 0, backgroundColor: '#ffffff' }}>
      
      {/* Navigation */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '1px' }}>JUALAN BAJU</div>
        <div style={{ fontSize: '0.9rem', display: 'flex', gap: '20px' }}>
          <span>Koleksi</span>
          <span>Tentang</span>
          <span>Kontak</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#fcfcfc' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 10px', fontWeight: 900 }}>SIMPLE & ELEGANT</h1>
        <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto 30px' }}>
          Kami percaya bahwa gaya tidak harus rumit. Koleksi basic kami dirancang untuk mendukung rasa percaya diri Anda setiap hari.
        </p>
        <div style={{ background: '#000', color: '#fff', padding: '15px 30px', display: 'inline-block', borderRadius: '4px', fontWeight: 'bold' }}>
          LIHAT KOLEKSI TERBARU
        </div>
      </section>

      {/* Promo Banner */}
      <div style={{ background: '#000', color: '#fff', padding: '15px', textAlign: 'center', fontSize: '0.9rem', letterSpacing: '1px' }}>
        🔥 DISKON AKHIR BULAN: BELI 2 LEBIH HEMAT 20% 🔥
      </div>

      {/* Katalog Produk */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Produk Unggulan</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {products.map(p => (
            <div key={p.id} style={{ border: '1px solid #f0f0f0', borderRadius: '8px', overflow: 'hidden', transition: '0.3s' }}>
              <div style={{ overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                <img 
                  src={p.gambar} 
                  alt={p.nama} 
                  style={{ width: '100%', height: '350px', objectFit: 'cover', filter: 'grayscale(100%)' }} 
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: '1.1rem' }}>{p.nama}</h3>
                <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: '15px', height: '40px' }}>{p.deskripsi}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <span style={{ textDecoration: 'line-through', color: '#bbb', fontSize: '0.9rem' }}>{p.harga}</span>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#000' }}>{p.diskon}</span>
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Halo, saya ingin memesan: ${p.nama}`}
                  style={{ display: 'block', textAlign: 'center', background: '#000', color: '#fff', padding: '12px', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.9rem' }}
                >
                  PESAN VIA WHATSAPP
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Keunggulan */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h4 style={{ margin: '0 0 10px' }}>Bahan Premium</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Hanya menggunakan kain pilihan yang awet dan tidak cepat melar.</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h4 style={{ margin: '0 0 10px' }}>Pengiriman Cepat</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Pesanan Anda akan dikirim dalam waktu kurang dari 24 jam.</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <h4 style={{ margin: '0 0 10px' }}>Jahitan Rapi</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Standard distro dengan jahitan rantai yang kuat dan presisi.</p>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer style={{ borderTop: '1px solid #eee', padding: '60px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>JUALAN BAJU</h3>
            <p style={{ fontSize: '0.85rem', color: '#777' }}>Toko fashion online minimalis yang mengedepankan kualitas daripada sekadar tren sesaat.</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '20px' }}>Hubungi Kami</h4>
            <p style={{ fontSize: '0.85rem', color: '#777', margin: '5px 0' }}>📍 Jl. Angkasa Raya No. 08, Jakarta Pusat</p>
            <p style={{ fontSize: '0.85rem', color: '#777', margin: '5px 0' }}>📧 support@jualanbaju.com</p>
            <p style={{ fontSize: '0.85rem', color: '#777', margin: '5px 0' }}>💬 +{whatsappNumber}</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '20px' }}>Ikuti Kami</h4>
            <p style={{ fontSize: '0.85rem', color: '#777' }}>Instagram | TikTok | Facebook</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px', fontSize: '0.8rem', color: '#bbb' }}>
          &copy; 2026 Jualan Baju. Minimalist Project for Owner.
        </div>
      </footer>

    </div>
  );
}
