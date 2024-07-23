import './App.css'

function App() {


  return (
    <div class="container">
        <h1>MTT-HSS MOD SEÇİM EKRANI</h1>

        <div className="button-container">
            <a href="http://localhost:5175" target="_blank">
                <button type="button" class="button">Manuel Atış Sistemi</button>
            </a>
            <a href=" http://localhost:5176"target="_blank">
                <button type="button" class="button">Yarı Otonom Atış Sistemi</button>
            </a>
            <a href="http://localhost:5177" target="_blank">
                <button type="button" class="button">Otonom Atış Sistemi</button>
            </a>
        </div>
    </div>

  )
}

export default App
