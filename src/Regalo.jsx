import { useState } from 'react'
import giftImg from '../imgs/pngtree-gift-box-logo-vector-icon-happy-holiday-square-vector-png-image_37479078.png'
import './Regalo.css'

const cartas = [
  {
    titulo: 'Ya sé que',
    cuerpo: '...estos días no has estado de buen humor, pero igual quería decirte lo feliz que me hace ser tu novio por un mes más.'
  },
  {
    titulo: 'Ni bien te vea',
    cuerpo: '...te voy a dar un abrazo fuertísimo y todos los besos que te merecés por aguantar tanto y ser tan fuerte.'
  },
  {
    titulo: 'Gracias',
    cuerpo: '...por todo lo que has hecho por mí, te amo mucho princesa.'
  }
]

const corazones = [
  { left: '8%', delay: '0s', duration: '12s' },
  { left: '18%', delay: '1.2s', duration: '13s' },
  { left: '28%', delay: '2.4s', duration: '11s' },
  { left: '36%', delay: '0.6s', duration: '14s' },
  { left: '46%', delay: '3s', duration: '12s' },
  { left: '56%', delay: '1.8s', duration: '13.5s' },
  { left: '64%', delay: '0.9s', duration: '12.5s' },
  { left: '74%', delay: '2.8s', duration: '11.5s' },
  { left: '84%', delay: '1.4s', duration: '13s' },
  { left: '92%', delay: '0.3s', duration: '12s' },
  { left: '4%', delay: '3.4s', duration: '14s' },
  { left: '50%', delay: '2s', duration: '10.5s' },
  { left: '70%', delay: '3.8s', duration: '13.2s' },
  { left: '32%', delay: '4.2s', duration: '12s' }
]

function Regalo() {
  const [estaAbierto, setEstaAbierto] = useState(false)
  const [indice, setIndice] = useState(0)

  const abrirRegalo = () => {
    if (!estaAbierto) setEstaAbierto(true)
  }

  const siguienteCarta = () => {
    setIndice((prev) => {
      const siguiente = prev + 1
      return siguiente >= cartas.length ? 0 : siguiente
    })
  }

  const manejarTecla = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      abrirRegalo()
    }
  }

  const cartaActual = cartas[indice]
  const esUltima = indice === cartas.length - 1

  return (
    <section className={`gift-page ${estaAbierto ? 'opened' : ''}`}>
      <div className="hearts" aria-hidden="true">
        {corazones.map((heart, idx) => (
          <span
            key={idx}
            className="heart"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <div className="gift-content">
        <header className="hero">
          <h1>Felices tres meses</h1>
          <p style={{marginTop: "15px", marginBottom: "35px"}}>Loviu mi amor</p>
        </header>

        <div className="scene">
          <div
            className={`gift-stage ${estaAbierto ? 'open' : ''}`}
            role="button"
            tabIndex={0}
            onClick={abrirRegalo}
            onKeyDown={manejarTecla}
            aria-pressed={estaAbierto}
            aria-label="Abrir regalo"
          >
            <div className="gift-visual">
              <div className="gift-glow" aria-hidden="true" />
              <img src={giftImg} alt="Regalo envuelto con moño" />
            </div>
            {!estaAbierto && <p className="hint">Click para abrir</p>}
          </div>

          <div className={`card-wrapper ${estaAbierto ? 'visible' : ''}`} aria-live="polite">
            <div className="card-stack">
              <article className="card">
                <div className="card-top">
                  <div className="badge" aria-hidden="true">♥</div>
                  <h2>{cartaActual.titulo}</h2>
                </div>
                <blockquote>{cartaActual.cuerpo}</blockquote>
                <footer className="card-footer">
                  <div className="dots" aria-hidden="true">
                    {cartas.map((_, idx) => (
                      <span key={idx} className={idx === indice ? 'dot active' : 'dot'} />
                    ))}
                  </div>
                  <button type="button" className="next" onClick={siguienteCarta}>
                    {esUltima ? 'Reiniciar' : 'Siguiente'} <span className="arrow">→</span>
                  </button>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Regalo
