import { useState } from 'react';
import { personajes } from './data/personajes.js';
import Tarjeta from './components/Tarjeta.jsx';
import './styles/App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <main className="app">
      <section className="hero">
        <span className="hero__eyebrow">Selector de aventureros</span>
        <h1 className="hero__title">Elige tu personaje</h1>
        <p className="hero__description">
          Reúne a tu grupo y descubre qué héroe liderará la próxima incursión.
        </p>
      </section>

      <section className="selector" aria-label="Lista de personajes">
        {personajes.map((personaje) => (
          <button
            className="selector__button"
            key={personaje.nombre}
            type="button"
            onClick={() => setSelectedCharacter(personaje)}
          >
            <span className="selector__emoji" aria-hidden="true">
              {personaje.emoji}
            </span>
            {personaje.nombre}
          </button>
        ))}
      </section>

      <Tarjeta personaje={selectedCharacter} />
    </main>
  );
}

export default App;
