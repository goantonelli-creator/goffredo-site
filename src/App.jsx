import React, { useState, useEffect } from 'react'
import { client } from './sanityClient'
import './App.css'
import PerformanceManagement from './pages/PerformanceManagement.jsx'
import ControlloGestione from './pages/ControlloGestione.jsx'
import HROrganizzazione from './pages/HROrganizzazione.jsx'
import RicercaSelezione from './pages/RicercaSelezione.jsx'
import BlogPage from './pages/Blog.jsx'
import Articolo from './pages/Articolo.jsx'
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/">
          <img src="/logo-goffredo.png" alt="Goffredo Antonelli" style={{ height: '96px', width: 'auto', filter: scrolled ? 'none' : 'brightness(0) invert(1)', transition: 'filter 0.25s ease' }} />
        </Link>
        <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span style={{ background: scrolled ? 'var(--night)' : '#fff' }}/><span style={{ background: scrolled ? 'var(--night)' : '#fff' }}/><span style={{ background: scrolled ? 'var(--night)' : '#fff' }}/>
        </button>
        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          <a href="#chi-sono" onClick={() => setMenuOpen(false)}>Chi sono</a>
          <a href="#cosa-faccio" onClick={() => setMenuOpen(false)}>Cosa faccio</a>
          <a href="#attivita" onClick={() => setMenuOpen(false)}>Esperienza</a>
          <a href="#matesis" onClick={() => setMenuOpen(false)}>Matesis</a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#contatti" className="btn btn--red nav__cta" style={{ color: '#fff' }} onClick={() => setMenuOpen(false)}>Scrivimi</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <span className="tag tag--outline-light hero__tag">Commercialista · Manager · Consulente</span>
            <h1 className="hero__title">
              Dove la <em>crescita umana</em><br/>
              incontra l'<em>efficienza aziendale.</em>
            </h1>
            <p className="hero__sub">
              Unisco la passione per le persone a una visione strategica: 
              trasformo il potenziale umano in performance, con strumenti 
              concreti e una cultura organizzativa solida.
            </p>
            <div className="hero__actions">
              <a href="#cosa-faccio" className="btn btn--red">Scopri cosa faccio</a>
              <a href="#matesis" className="btn btn--outline">Scopri Matesis →</a>
            </div>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">25+</span>
              <span className="hero__stat-label">anni di esperienza</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">50+</span>
              <span className="hero__stat-label">aziende affiancate</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">4</span>
              <span className="hero__stat-label">aree di consulenza</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">1</span>
              <span className="hero__stat-label">piattaforma software sviluppata</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__diagonal"/>
    </section>
  )
}

function ChiSono() {
  return (
    <section className="chi-sono" id="chi-sono">
      <div className="container chi-sono__inner">
        <div className="chi-sono__text">
          <div className="section-header">
            <span className="tag tag--outline" style={{ marginBottom: '20px', display: 'inline-flex' }}>Chi sono</span>
            <h2 className="section-title">Un professionista<br/>con due anime.</h2>
          </div>
          <p className="chi-sono__bio">Ho costruito la mia carriera all'intersezione tra persone e numeri. Dopo anni come HR Manager e Temporary HR Manager in aziende di settori diversi, ho sviluppato una visione unica: quella di chi sa leggere un'organizzazione sia dalla prospettiva delle persone che da quella dei risultati economici.</p>
          <p className="chi-sono__bio">La consulenza in controllo di gestione ha completato questa visione — imparare a costruire KPI, sistemi di reporting e modelli di full costing mi ha dato qualcosa che pochi professionisti HR hanno: la capacità di tradurre l'impatto delle persone in numeri concreti e in decisioni strategiche.</p>
          <p className="chi-sono__bio">Ho fondato Matesis — prima come metodo, poi come piattaforma software — per dare alle PMI italiane strumenti per misurare e sviluppare la performance organizzativa in modo strutturato e autonomo.</p>
          <p className="chi-sono__bio">Oggi affianco imprenditori e manager come consulente, board member e advisor. Il mio obiettivo è sempre lo stesso: trasformare il potenziale delle persone in risultati misurabili.</p>
          <a href="https://www.linkedin.com/in/goantonelli/" target="_blank" rel="noopener" className="btn btn--outline-dark">LinkedIn →</a>
        </div>
        <div className="chi-sono__quote">
          <blockquote>"Le aziende crescono quando crescono le persone. Il mio lavoro è fare in modo che questo accada con metodo, ascolto e risultati misurabili."</blockquote>
          <cite>— Goffredo Antonelli</cite>
        </div>
      </div>
    </section>
  )
}

function CosaFaccio() {
  const servizi = [
    { num: '01', title: 'Performance Management', desc: 'Sistemi di valutazione, obiettivi e feedback strutturati. Costruisco processi che fanno crescere le persone e i risultati aziendali.', path: '/performance-management' },
    { num: '02', title: 'Controllo di Gestione', desc: 'Modelli di reporting, KPI e full costing. Trasformo i dati aziendali in decisioni consapevoli e misurabili.', path: '/controllo-di-gestione' },
    { num: '03', title: 'HR & Organizzazione', desc: 'Job design, selezione, sviluppo e piani di carriera costruiti sulla realtà operativa del cliente.', path: '/hr-organizzazione' },
    { num: '04', title: 'Ricerca & Selezione', desc: "Processi strutturati di ricerca, valutazione e selezione del personale. Dalla job description all'onboarding.", path: '/ricerca-selezione' },
  ]
  return (
    <section className="cosa-faccio" id="cosa-faccio">
      <div className="container">
        <div className="section-header">
          <span className="tag tag--outline" style={{ marginBottom: '20px', display: 'inline-flex' }}>Cosa faccio</span>
          <h2 className="section-title">Consulenza che<br/>porta risultati reali.</h2>
          <p className="section-sub">Non porto modelli preconfezionati. Entro nell'organizzazione, capisco come funziona, e costruisco sistemi che reggono nel tempo.</p>
        </div>
        <div className="cf__grid">
          {servizi.map((s, i) => (
            <Link to={s.path} className="cf__card" key={i}>
              <span className="cf__num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="cf__arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function AttivitaSvolte() {
  const [current, setCurrent] = useState(0)
  const attivita = [
    { azienda: 'Omnia', settore: 'Formazione e consulenza', ruolo: 'Consulente organizzativo, gestione e direzionale, Mentor' },
    { azienda: 'Syeew', settore: 'Produzione software', ruolo: 'Board member' },
    { azienda: 'Mooney Go', settore: 'Produzione software', ruolo: 'Consulente gestione risorse umane, Recruiter' },
    { azienda: 'Ikonic', settore: 'Fashion retailer', ruolo: 'Responsabile risorse umane' },
    { azienda: "Dell'Oglio 1870", settore: 'Fashion retailer', ruolo: 'Responsabile risorse umane' },
    { azienda: 'Julian Fashion', settore: 'Fashion retailer', ruolo: 'Responsabile risorse umane' },
    { azienda: 'Pluservice', settore: 'Produzione software', ruolo: 'Consulente gestione risorse umane, Recruiter' },
    { azienda: 'Stardiesel 2001', settore: 'Officina meccanica', ruolo: 'Progettista sistema Mbo, Mentor, Recruiter' },
    { azienda: 'Braviisol', settore: 'Progettazione e produzione piattaforme industriali', ruolo: 'Recruiter' },
  ]
  const visible = 3
  const maxIndex = attivita.length - visible
  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1))
  return (
    <section className="attivita" id="attivita">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="tag tag--outline" style={{ marginBottom: '20px', display: 'inline-flex' }}>Esperienza</span>
          <h2 className="section-title">Attività svolte.</h2>
          <p className="section-sub">Anni di lavoro con PMI italiane in settori diversi — sempre con lo stesso obiettivo: far crescere le persone e i risultati.</p>
        </div>
        <div className="attivita__carousel">
          <button className="attivita__btn" onClick={prev} disabled={current === 0}>←</button>
          <div className="attivita__track">
            <div className="attivita__inner" style={{ transform: `translateX(-${current * (100 / visible)}%)` }}>
              {attivita.map((a, i) => (
                <div className="attivita__card" key={i}>
                  <div className="attivita__card-inner">
                    <span className="attivita__settore">{a.settore}</span>
                    <h3>{a.azienda}</h3>
                    <p>{a.ruolo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="attivita__btn" onClick={next} disabled={current === maxIndex}>→</button>
        </div>
        <p className="attivita__altri">e altre 50+ esperienze in settori immobiliare, abbigliamento, consulenza ambientale e servizi.</p>
      </div>
    </section>
  )
}

function Matesis() {
  return (
    <section className="matesis-section" id="matesis">
      <div className="container matesis-section__inner">
        <div className="matesis-section__text">
          <span className="tag tag--outline-light" style={{ marginBottom: '24px', display: 'inline-flex' }}>Il mio progetto</span>
          <h2 className="section-title section-title--light">Ho costruito<br/>Matesis.</h2>
          <p className="section-sub section-sub--light">Dopo anni di consulenza con PMI italiane, ho sviluppato Matesis — un sistema integrato di consulenza e software per la gestione della performance organizzativa. Matesis Advisory porta il metodo. Matesis Platform lo digitalizza.</p>
          <p className="section-sub section-sub--light" style={{ marginTop: '16px' }}>Nei progetti Advisory, la configurazione della piattaforma è inclusa. Non ci sono costi di sviluppo separati — solo il canone mensile della piattaforma.</p>
          <a href="https://www.matesis.it" target="_blank" rel="noopener" className="btn btn--red" style={{ marginTop: '32px' }}>Scopri Matesis →</a>
        </div>
        <div className="matesis-section__modules">
          <div className="matesis-module">
            <span className="matesis-module__tag">Matesis Advisory</span>
            <h4>La consulenza che parte dai dati.</h4>
            <p>Performance Management, Controllo di Gestione, HR & Organizzazione, Ricerca & Selezione.</p>
          </div>
          <div className="matesis-module">
            <span className="matesis-module__tag matesis-module__tag--orange">Matesis Platform</span>
            <h4>Il software nato dalla consulenza.</h4>
            <p>People, Analytics e moduli aggiuntivi configurabili sui processi specifici dell'azienda.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...4] {
      _id,
      title,
      slug,
      publishedAt,
      readTime
    }`).then(data => setPosts(data))
  }, [])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('it-IT', { day: 'numeric', month: 'short' })
  }

  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="tag tag--outline" style={{ marginBottom: '20px', display: 'inline-flex' }}>Blog</span>
          <h2 className="section-title">Idee, riflessioni<br/>e strumenti pratici.</h2>
          <p className="section-sub">Scrivo di persone, organizzazioni e numeri. Un blog dove strategia e umanità si incontrano.</p>
        </div>
        <div className="blog__grid">
          {posts.map((p, i) => (
            <Link to={`/blog/${p.slug.current}`} className="blog__card" key={i}>
              <div className="blog__card-meta">
                <span>{formatDate(p.publishedAt)}</span>
                {p.readTime && <><span>·</span><span>{p.readTime} min di lettura</span></>}
              </div>
              <h3>{p.title}</h3>
              <span className="blog__card-arrow">→</span>
            </Link>
          ))}
        </div>
        <div className="blog__cta">
          <Link to="/blog" className="btn btn--outline-dark">Tutti gli articoli →</Link>
        </div>
      </div>
    </section>
  )
}

function Contatti() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' })
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = () => {
    if (!form.nome || !form.email) return
    window.location.href = `mailto:info@matesis.it?subject=Contatto da ${form.nome}&body=${encodeURIComponent(`Nome: ${form.nome}\nEmail: ${form.email}\n\n${form.messaggio}`)}`
    setSent(true)
  }
  return (
    <section className="contatti" id="contatti">
      <div className="container contatti__inner">
        <div className="section-header">
          <span className="tag tag--outline" style={{ marginBottom: '20px', display: 'inline-flex' }}>Contatti</span>
          <h2 className="section-title">Parliamo.</h2>
          <p className="section-sub">Scrivimi direttamente — ti rispondo entro 24 ore. Se vuoi vedere Matesis in azione, puoi anche richiedere una demo.</p>
          <div className="contatti__links">
            <a href="mailto:info@matesis.it">info@matesis.it</a>
            <a href="https://www.matesis.it/#contatti" target="_blank" rel="noopener">Richiedi una demo →</a>
          </div>
        </div>
        {sent ? (
          <div className="contatti__thanks"><span>✓</span> Grazie! Si aprirà il tuo client email.</div>
        ) : (
          <div className="contatti__form">
            <div className="contatti__form-row">
              <input name="nome" placeholder="Nome e cognome *" value={form.nome} onChange={handleChange} />
              <input name="email" type="email" placeholder="Email *" value={form.email} onChange={handleChange} />
            </div>
            <textarea name="messaggio" placeholder="Di cosa hai bisogno?" rows={4} value={form.messaggio} onChange={handleChange} />
            <button className="btn btn--red contatti__submit" onClick={handleSubmit}>Invia messaggio →</button>
          </div>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo-goffredo.png" alt="Goffredo Antonelli" style={{ height: '96px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
          <p>Commercialista, manager<br/>e consulente di performance management.</p>
          <p className="footer__piva">P.IVA IT 02576080697</p>
        </div>
        <div className="footer__cols">
          <div>
            <h5>Consulenza</h5>
            <ul>
              <li><Link to="/performance-management">Performance Management</Link></li>
              <li><Link to="/controllo-di-gestione">Controllo di Gestione</Link></li>
              <li><Link to="/hr-organizzazione">HR & Organizzazione</Link></li>
              <li><Link to="/ricerca-selezione">Ricerca & Selezione</Link></li>
            </ul>
          </div>
          <div>
            <h5>Matesis</h5>
            <ul>
              <li><a href="https://www.matesis.it" target="_blank" rel="noopener">matesis.it</a></li>
              <li><a href="https://www.matesis.it/#moduli" target="_blank" rel="noopener">Matesis People</a></li>
              <li><a href="https://www.matesis.it/#moduli" target="_blank" rel="noopener">Matesis Analytics</a></li>
            </ul>
          </div>
          <div>
            <h5>Contatti</h5>
            <ul>
              <li><a href="mailto:info@matesis.it">info@matesis.it</a></li>
              <li><a href="https://www.linkedin.com/in/goantonelli/" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Goffredo Antonelli — Tutti i diritti riservati</span>
          <span><a href="https://www.matesis.it" target="_blank" rel="noopener">Matesis →</a></span>
        </div>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ChiSono />
      <CosaFaccio />
      <AttivitaSvolte />
      <Matesis />
      <Blog />
      <Contatti />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/performance-management" element={<PerformanceManagement />} />
      <Route path="/controllo-di-gestione" element={<ControlloGestione />} />
      <Route path="/hr-organizzazione" element={<HROrganizzazione />} />
      <Route path="/ricerca-selezione" element={<RicercaSelezione />} />
      <Route path="/blog" element={<BlogPage />} />
<Route path="/blog/:slug" element={<Articolo />} />
    </Routes>
  )
}