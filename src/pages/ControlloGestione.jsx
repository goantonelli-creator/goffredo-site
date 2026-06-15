import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../App.css'

export default function ControlloGestione() {
  return (
    <>
      <nav className="nav nav--scrolled" style={{ position: 'sticky' }}>
        <div className="container nav__inner">
          <Link to="/"><img src="/logo-goffredo.png" alt="Goffredo Antonelli" style={{ height: '96px', width: 'auto' }} /></Link>
          <div className="nav__links">
            <Link to="/">← Torna alla home</Link>
            <a href="https://www.matesis.it" target="_blank" rel="noopener">Matesis</a>
            <Link to="/#contatti" className="btn btn--red nav__cta" style={{ color: '#fff' }}>Scrivimi</Link>
          </div>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <span className="tag tag--red" style={{ marginBottom: '24px', display: 'inline-flex' }}>Controllo di Gestione</span>
          <h1 className="page-hero__title">Guidare l'azienda<br/>non contare i morti.</h1>
          <p className="page-hero__sub">Un sistema di controllo di gestione non serve a sapere cosa è andato storto a fine anno. Serve a capire in tempo reale dove sta andando l'azienda — e a correggere la rotta prima che sia tardi.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-problem">
            <h2>Il problema che affronto.</h2>
            <p>Molte aziende producono numeri solo per adempimenti fiscali o per "contare i morti" a fine esercizio. L'imprenditore si ritrova a guidare senza cruscotto — prende decisioni basandosi su sensazioni, non su dati. Quando entro in un'organizzazione, il mio primo obiettivo è trasformare i numeri da rendiconto passato a strumento di guida presente.</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--light">
        <div className="container">
          <h2 className="page-section__title">Come lavoro.</h2>
          <div className="page-steps">
            <div className="page-step">
              <span className="page-step__num">01</span>
              <h3>Capisco i numeri dell'azienda</h3>
              <p>Analizzo quali sono gli indicatori economici e finanziari che caratterizzano realmente l'azienda — non quelli generici, ma quelli specifici del settore, del modello di business e della struttura dei costi.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">02</span>
              <h3>Vedo come vengono prodotti</h3>
              <p>Capisco come vengono generati i dati: quali processi li producono, chi li gestisce, con quali strumenti. Solo così posso costruire un sistema che funziona davvero nella realtà operativa dell'azienda.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">03</span>
              <h3>Definisco gli indicatori giusti</h3>
              <p>Costruisco un set di KPI commerciali e gestionali calibrati sull'azienda — non un template copiato da un libro, ma indicatori che raccontano davvero cosa sta succedendo in quell'organizzazione specifica.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">04</span>
              <h3>Creo il cruscotto di guida</h3>
              <p>Definisco tempi, modalità e strumenti per produrre le informazioni in modo tempestivo. L'imprenditore deve poter leggere i numeri quando servono per decidere — non settimane dopo quando ormai è troppo tardi.</p>
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
                'Imprenditori che guidano "a sensazione" e vogliono dati concreti per decidere',
                'PMI che producono numeri solo per il commercialista e non per gestire',
                'Aziende con margini opachi che non capiscono dove guadagnano davvero',
                'Manager che devono rendicontare ma non hanno un sistema strutturato',
                'Imprese in crescita che hanno bisogno di un controllo più sofisticato',
              ].map((t, i) => (
                <div className="page-target" key={i}>
                  <span className="page-target__dot"/>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="page-matesis-box">
            <span className="tag tag--red" style={{ marginBottom: '16px', display: 'inline-flex' }}>Matesis Analytics</span>
            <h3>Il cruscotto sempre aggiornato.</h3>
            <p>Matesis Analytics digitalizza il sistema di controllo: dashboard KPI in tempo reale, forecasting, analisi degli scostamenti e reporting direzionale. I numeri che contano, sempre disponibili.</p>
            <a href="https://www.matesis.it/#moduli" target="_blank" rel="noopener" className="btn btn--red" style={{ marginTop: '20px' }}>Scopri Matesis Analytics →</a>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Costruiamo insieme il tuo cruscotto di gestione.</h2>
          <p>Una call esplorativa per capire come stai producendo i numeri oggi e cosa serve per guidare meglio domani.</p>
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
