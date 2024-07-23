import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        Manuel Atış Sistemi
      </div>

      <div className="container">
        <div className="video-section">
          <p>Canlı Video</p>
          <hr style={{ color: 'black' }} />
          <iframe src="https://www.youtube.com/embed/mdPfWXuGUBs?si=5V4D2HMvfAkus3CT" allowFullScreen></iframe>
        </div>

        <div className="status-section">
          <p>Anlık Durum Bilgileri</p>
          <hr style={{ color: 'black' }} />
          <div className="status-container">
            <div className="status-item">Mod: Manuel</div>
            <div className="status-item">Bağlantı: Var</div>
            <div className="status-item">Tespit Edilen Hedef: 13433</div>
            <div className="status-item">Takip Edilen Balon: 13433</div>
            <div className="status-item">Mermi Değişim Süresi: 10sn</div>
            <div className="status-item">Şarj Durumu: %89</div>
            <div className="status-item">Tur İçin Geri Kalan Süre: 2dk</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
