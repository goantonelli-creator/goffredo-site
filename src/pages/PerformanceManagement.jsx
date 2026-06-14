import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../App.css'

export default function PerformanceManagement() {
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
          <span className="tag tag--red" style={{ marginBottom: '24px', display: 'inline-flex' }}>Performance Management</span>
          <h1 className="page-hero__title">Le persone crescono<br/>quando sanno dove andare.</h1>
          <p className="page-hero__sub">Un sistema di performance management efficace non inizia dalla valutazione — inizia dalla chiarezza. Chiarezza sui ruoli, sulle responsabilità, sulle competenze e sugli obiettivi. Solo da lì si può misurare, sviluppare e far crescere.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-problem">
            <h2>Il problema che affronto.</h2>
            <p>In molte aziende si valutano le persone senza aver mai definito chiaramente cosa ci si aspetta da loro. Il risultato? Valutazioni soggettive, conflitti, demotivazione e turnover. Le persone non sanno come crescere perché nessuno ha mai spiegato loro cosa significa farlo bene nel loro ruolo specifico. Quando entro in un'organizzazione, parto sempre da lì.</p>
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
              <p>Costruisco una descrizione chiara per ogni ruolo: finalità, responsabilità, attività e obiettivi. Non un documento burocratico — uno strumento operativo che la persona usa ogni giorno.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">02</span>
              <h3>Mappa le competenze</h3>
              <p>Definisco le competenze trasversali applicabili a tutti i ruoli e quelle specifiche per ciascuno. Per ogni competenza creo indicatori comportamentali osservabili — non giudizi, ma comportamenti concreti e misurabili.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">03</span>
              <h3>Stabilisco criteri di valutazione</h3>
              <p>Definisco target chiari, metodi di valutazione oggettivi e gap da colmare. Il sistema è trasparente: ogni persona sa su cosa viene valutata e perché.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">04</span>
              <h3>Costruisco il piano di sviluppo</h3>
              <p>Per ogni gap identificato definisco i contenuti formativi e gli strumenti di sviluppo più adatti. La valutazione non è un giudizio finale — è il punto di partenza per la crescita.</p>
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
                'PMI che vogliono strutturare la gestione delle persone in modo professionale',
                'Aziende che faticano a valutare le persone in modo oggettivo e condiviso',
                'Imprenditori che vogliono ridurre il turnover e aumentare la motivazione',
                'Manager che devono dare feedback strutturati ma non sanno da dove partire',
                'Organizzazioni in crescita che devono definire ruoli e responsabilità chiari',
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
            <h3>Il software che supporta il metodo.</h3>
            <p>Matesis People digitalizza l'intero processo: dalla definizione delle competenze ai cicli di valutazione, dai piani di sviluppo ai feedback. Il sistema rimane in azienda — accessibile, aggiornabile, autonomo.</p>
            <a href="https://www.matesis.it/#moduli" target="_blank" rel="noopener" className="btn btn--red" style={{ marginTop: '20px' }}>Scopri Matesis People →</a>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Costruiamo insieme il tuo sistema di performance management.</h2>
          <p>Una call esplorativa per capire la situazione attuale e valutare il percorso più adatto alla tua organizzazione.</p>
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
