import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        Otonom Atış Sistemi
      </div>

      <div className="container">
        <div className="video-section">
          <p>Canlı Video</p>
          <hr style={{ color: 'black' }} />
          <iframe
            src="https://www.youtube.com/embed/mdPfWXuGUBs?si=5V4D2HMvfAkus3CT"
            allowFullScreen
            title="Canlı Video"
          />
        </div>

        <div className="status-section">
          <p>Anlık Durum Bilgileri</p>
          <hr style={{ color: 'black' }} />
          <div className="status-container">
            <div className="status-item">Mod: Otonom</div>
            <div className="status-item">Bağlantı: Var</div>
            <div className="status-item">Takip Edilen Balon: 3</div>
            <div className="status-item">Mermi Değişim Süresi: 10sn</div>
            <div className="status-item">Şarj Durumu: %89</div>
            <div className="status-item">Tur İçin Geri Kalan Süre: 2dk</div>

            <div className="ozeldurum">
              Tespit Edilen Hedef:
              <p style={{ fontSize: '20px', marginBottom: '5px' }}>Dost</p>
              <div className="hedefler">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
              </div>
              <p style={{ fontSize: '20px', marginBottom: '5px' }}>Düşman</p>
              <div className="hedefler">
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
