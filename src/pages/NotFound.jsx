import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import '../App.css'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Pagina non trovata — Goffredo Antonelli'
  }, [])

  return (
    <>
      <nav className="nav nav--scrolled" style={{ position: 'sticky' }}>
        <div className="container nav__inner">
          <Link to="/">
            <img src="/logo-goffredo.png" alt="Goffredo Antonelli" style={{ height: '96px', width: 'auto' }} />
          </Link>
          <div className="nav__links">
            <Link to="/blog">Blog</Link>
            <Link to="/#contatti" className="btn btn--red nav__cta" style={{ color: '#fff' }}>Scrivimi</Link>
          </div>
        </div>
      </nav>

      <div style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        textAlign: 'center',
        padding: '60px 24px'
      }}>
        <span style={{ fontSize: '80px', fontWeight: '800', color: 'var(--red)', lineHeight: 1 }}>404</span>
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
          Questa pagina non esiste più
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '480px', lineHeight: '1.6' }}>
          Il link che hai seguito potrebbe essere vecchio o non più valido.
          Ecco dove puoi continuare a leggere o tornare alla home.
        </p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/blog" className="btn btn--red">Vai al blog →</Link>
          <Link to="/" className="btn btn--outline-dark">Torna alla home</Link>
        </div>
      </div>

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
