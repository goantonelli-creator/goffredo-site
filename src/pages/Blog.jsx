import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client, urlFor } from '../sanityClient'
import '../index.css'
import '../App.css'

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readTime
    }`).then(data => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric' })
  }

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
          <span className="tag tag--red" style={{ marginBottom: '24px', display: 'inline-flex' }}>Blog</span>
          <h1 className="page-hero__title">Idee, riflessioni<br/>e strumenti pratici.</h1>
          <p className="page-hero__sub">Scrivo di persone, organizzazioni e numeri. Un blog dove strategia e umanità si incontrano.</p>
        </div>
      </section>

      <section style={{ background: 'var(--bg-light)', padding: '80px 0' }}>
        <div className="container">
          {loading ? (
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>Caricamento articoli...</p>
          ) : posts.length === 0 ? (
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>Nessun articolo pubblicato.</p>
          ) : (
            <div className="blog-page__grid">
              {posts.map(post => (
                <Link to={`/blog/${post.slug.current}`} className="blog-page__card" key={post._id}>
                  {post.mainImage && (
                    <div className="blog-page__img">
                      <img src={urlFor(post.mainImage).width(600).url()} alt={post.title} />
                    </div>
                  )}
                  <div className="blog-page__body">
                    <div className="blog-page__meta">
                      <span>{formatDate(post.publishedAt)}</span>
                      {post.readTime && <><span>·</span><span>{post.readTime} min di lettura</span></>}
                    </div>
                    <h2>{post.title}</h2>
                    {post.excerpt && <p>{post.excerpt}</p>}
                    <span className="blog-page__cta">Leggi l'articolo →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
