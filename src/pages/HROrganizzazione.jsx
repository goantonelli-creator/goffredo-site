import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../App.css'

export default function HROrganizzazione() {
  return (
    <>
      <nav className="nav nav--scrolled" style={{ position: 'sticky' }}>
        <div className="container nav__inner">
          <Link to="/"><img src="/logo-goffredo.png" alt="Goffredo Antonelli" style={{ height: '64px', width: 'auto' }} /></Link>
          <div className="nav__links">
            <Link to="/">← Torna alla home</Link>
            <a href="https://www.matesis.it" target="_blank" rel="noopener">Matesis</a>
            <Link to="/#contatti" className="btn btn--red nav__cta" style={{ color: '#fff' }}>Scrivimi</Link>
          </div>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <span className="tag tag--red" style={{ marginBottom: '24px', display: 'inline-flex' }}>HR & Organizzazione</span>
          <h1 className="page-hero__title">Le persone giuste,<br/>al posto giusto, nel modo giusto.</h1>
          <p className="page-hero__sub">Un'organizzazione funziona quando le persone sanno non solo cosa fare, ma come si connettono con gli altri nei processi aziendali. Definire i ruoli è il primo passo — far capire come si muovono insieme è il secondo.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-problem">
            <h2>Il problema che affronto.</h2>
            <p>In molte PMI i ruoli esistono solo nella testa dell'imprenditore. Le responsabilità si sovrappongono, i processi si inceppano, le persone non sanno a chi rivolgersi per cosa. Quando entro in un'organizzazione, mappo come funziona davvero — non come dovrebbe funzionare sulla carta — e costruisco una struttura che regge nel tempo.</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--light">
        <div className="container">
          <h2 className="page-section__title">Come lavoro.</h2>
          <div className="page-steps">
            <div className="page-step">
              <span className="page-step__num">01</span>
              <h3>Definisco i ruoli</h3>
              <p>Parto dalla descrizione chiara di ogni ruolo — finalità, responsabilità, attività e competenze. È la base su cui si costruisce tutto il resto.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">02</span>
              <h3>Mappo i processi</h3>
              <p>Definisco come i ruoli si muovono all'interno dei processi aziendali: chi fa cosa, in quale sequenza, con quali input e output, e con quali connessioni tra le persone.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">03</span>
              <h3>Chiarisco le connessioni</h3>
              <p>Identifico i punti di contatto e di responsabilità tra i ruoli — dove passano le informazioni, dove si prendono le decisioni, dove si creano i colli di bottiglia.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">04</span>
              <h3>Costruisco la struttura</h3>
              <p>Consegno una mappa organizzativa funzionante — non solo un organigramma estetico, ma un sistema operativo che le persone possono usare per lavorare meglio insieme.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-section__inner">
          <div>
            <h2 className="page-section__title">A chi mi rivolgo.</h2>
            <div className="page-targets">
              {[
                'PMI in crescita che devono strutturare l\'organizzazione per la prima volta',
                'Aziende con ruoli sovrapposti e responsabilità poco chiare',
                'Imprenditori che vogliono delegare ma non sanno come strutturare il team',
                'Organizzazioni che stanno attraversando una fase di cambiamento o ristrutturazione',
                'Manager che devono coordinare team complessi senza una mappa chiara',
              ].map((t, i) => (
                <div className="page-target" key={i}>
                  <span className="page-target__dot"/>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="page-matesis-box">
            <span className="tag tag--red" style={{ marginBottom: '16px', display: 'inline-flex' }}>Matesis People</span>
            <h3>L'organizzazione sempre aggiornata.</h3>
            <p>Matesis People mantiene viva la struttura organizzativa: ruoli, competenze, responsabilità e connessioni sono sempre accessibili e aggiornabili. Non un documento che invecchia in un cassetto.</p>
            <a href="https://www.matesis.it/#moduli" target="_blank" rel="noopener" className="btn btn--red" style={{ marginTop: '20px' }}>Scopri Matesis People →</a>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Costruiamo insieme la tua struttura organizzativa.</h2>
          <p>Una call esplorativa per capire come funziona oggi la tua organizzazione e cosa serve per farla funzionare meglio.</p>
          <a href="mailto:info@matesis.it" className="btn btn--red">Scrivimi →</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__bottom" style={{ paddingTop: '20px' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© {new Date().getFullYear()} Goffredo Antonelli</span>
            <span><a href="https://www.matesis.it" target="_blank" rel="noopener" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Matesis →</a></span>
          </div>
        </div>
      </footer>
    </>
  )
}
