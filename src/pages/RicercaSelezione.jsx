import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../App.css'

export default function RicercaSelezione() {
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
          <span className="tag tag--red" style={{ marginBottom: '24px', display: 'inline-flex' }}>Ricerca & Selezione</span>
          <h1 className="page-hero__title">Trovare la persona giusta<br/>inizia dal capire il ruolo.</h1>
          <p className="page-hero__sub">Prima di cercare una persona, bisogna capire esattamente cosa serve all'azienda. Non un titolo di lavoro — un ruolo chiaro, con responsabilità definite e competenze misurabili. Solo da lì si può fare una ricerca efficace.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="page-problem">
            <h2>Il problema che affronto.</h2>
            <p>Molte ricerche falliscono perché si cerca "qualcuno bravo" senza sapere davvero cosa deve fare e come deve farlo. Si inserisce una persona, dopo sei mesi non funziona, e nessuno capisce perché. Quando gestisco una ricerca, parto sempre dall'interno dell'azienda — per capire il sistema prima di cercare chi deve entrarci.</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--light">
        <div className="container">
          <h2 className="page-section__title">Come lavoro.</h2>
          <div className="page-steps">
            <div className="page-step">
              <span className="page-step__num">01</span>
              <h3>Capisco il ruolo nel sistema</h3>
              <p>Prima di tutto entro nell'azienda per capire qual è il contesto: come funziona l'organizzazione, quali sono i processi coinvolti, con chi interagirà la persona cercata e quali risultati deve portare.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">02</span>
              <h3>Costruisco la job description</h3>
              <p>Redigo una descrizione del ruolo che definisce finalità, responsabilità, attività e competenze richieste — sia tecniche che comportamentali. È la bussola di tutta la ricerca.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">03</span>
              <h3>Struttura il job posting e la ricerca</h3>
              <p>Creo un annuncio efficace e attivo la ricerca sui canali più adatti al profilo. Ogni candidatura viene valutata rispetto alla job description — non a impressioni soggettive.</p>
            </div>
            <div className="page-step">
              <span className="page-step__num">04</span>
              <h3>Valuto e relaziono</h3>
              <p>Per ogni candidato individuato produco una relazione dettagliata che evidenzia corrispondenze e gap rispetto alla figura ricercata. L'azienda ha tutti gli elementi per decidere con consapevolezza.</p>
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
                'PMI che devono inserire nuove risorse e vogliono farlo in modo strutturato',
                'Aziende che hanno avuto esperienze negative con inserimenti improvvisati',
                'Imprenditori che non hanno tempo per gestire la selezione internamente',
                'Organizzazioni che vogliono valutare i candidati in modo oggettivo e documentato',
                'Manager che devono ampliare il team e cercano un supporto metodologico',
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
            <h3>L'archivio candidature sempre disponibile.</h3>
            <p>Matesis People include il modulo Candidature: tutte le relazioni, i profili e le valutazioni in un unico posto — accessibile, consultabile e collegabile al profilo del dipendente una volta inserito.</p>
            <a href="https://www.matesis.it/#moduli" target="_blank" rel="noopener" className="btn btn--red" style={{ marginTop: '20px' }}>Scopri Matesis People →</a>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Cerchiamo insieme la persona giusta per il tuo team.</h2>
          <p>Una call esplorativa per capire il ruolo che stai cercando e definire insieme il processo di ricerca più adatto.</p>
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
