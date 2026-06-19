import React from 'react'

export default function Card() {
  return (
    <div className="card-page">
      <div className="card">
        <div className="card__header">
          <img src="/logo-goffredo.png" alt="Goffredo Antonelli" className="card__logo" />
          <h1 className="card__name">Goffredo Antonelli</h1>
          <p className="card__role">Performance Management · HR · Controllo di Gestione</p>
        </div>

        <div className="card__contacts">
          <a href="mailto:info@matesis.it" className="card__contact">
            <svg className="card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6L11.2949 12.4738C11.7076 12.7963 12.2924 12.7963 12.7051 12.4738L21 6M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>info@matesis.it</span>
          </a>

          <a href="tel:+393473252156" className="card__contact">
            <svg className="card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5C3 13.8366 10.1634 21 19 21H20C20.5523 21 21 20.5523 21 20V16.4214C21 15.9412 20.6651 15.526 20.1944 15.4385L15.7649 14.6072C15.3483 14.5298 14.9279 14.7286 14.7222 15.0991L13.7274 16.9304C11.1718 15.6788 9.32118 13.8282 8.0696 11.2726L9.90087 10.2778C10.2714 10.0721 10.4702 9.65174 10.3928 9.23508L9.56151 4.80561C9.47401 4.33486 9.0588 4 8.57862 4H5C4.44772 4 4 4.44772 4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>+39 347 325 2156</span>
          </a>

          <a href="https://goffredoantonelli.com" target="_blank" rel="noopener" className="card__contact">
            <svg className="card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 12H21M12 3C14.5 6 15.5 9 15.5 12C15.5 15 14.5 18 12 21M12 3C9.5 6 8.5 9 8.5 12C8.5 15 9.5 18 12 21" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>goffredoantonelli.com</span>
          </a>

          <a href="https://matesis.it" target="_blank" rel="noopener" className="card__contact">
            <svg className="card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>matesis.it</span>
          </a>
        </div>

        <a href="/goffredo-antonelli.vcf" download className="card__save-btn">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V16M12 16L7 11M12 16L17 11M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Salva contatto
        </a>

        <div className="card__footer">
          <svg className="card__icon-small" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C12 21 19 15.5 19 10.5C19 6.35786 15.6421 3 12 3C8.35786 3 5 6.35786 5 10.5C5 15.5 12 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Jesi (AN) · Italia</span>
        </div>
      </div>
    </div>
  )
}
