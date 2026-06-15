import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { client, urlFor } from '../sanityClient'
import '../index.css'
import '../App.css'

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          style={{ width: '100%', borderRadius: '12px', margin: '32px 0' }}
        />
      )
    },
  },
  block: {
    h2: ({ children }) => <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '800', margin: '40px 0 16px', color: 'var(--text-primary)' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', margin: '32px 0 12px', color: 'var(--text-primary)' }}>{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: '4px solid var(--red)', paddingLeft: '24px', margin: '32px 0', fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.7' }}>{children}</blockquote>
    ),
    normal: ({ children }) => <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong style={{ color: 'var(--text-primary)', fontWeight: '700' }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <mark style={{ background: 'rgba(204,31,31,0.1)', padding: '0 4px', borderRadius: '2px' }}>{children}</mark>,
  },
}

export default function Articolo() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      body,
      seoTitle,
      seoDescription
    }`, { slug }).then(data => {
      setPost(data)
      setLoading(false)
    })
  }, [slug])

  useEffect(() => {
    if (!post) return

    const pageTitle = post.seoTitle || post.title + ' — Goffredo Antonelli'
    const pageDesc = post.seoDescription || post.excerpt || ''
    const pageImage = post.mainImage
      ? urlFor(post.mainImage).width(1200).url()
      : 'https://www.goffredoantonelli.com/logo-goffredo-og.png'
    const pageUrl = `https://www.goffredoantonelli.com/blog/${post.slug.current}`

    document.title = pageTitle

    const setMeta = (sel, val) => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute('content', val)
    }
    const setLink = (sel, val) => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute('href', val)
    }

    setMeta('meta[name="description"]', pageDesc)
    setLink('link[rel="canonical"]', pageUrl)
    setMeta('meta[property="og:title"]', pageTitle)
    setMeta('meta[property="og:description"]', pageDesc)
    setMeta('meta[property="og:image"]', pageImage)
    setMeta('meta[property="og:url"]', pageUrl)
    setMeta('meta[name="twitter:title"]', pageTitle)
    setMeta('meta[name="twitter:description"]', pageDesc)
    setMeta('meta[name="twitter:image"]', pageImage)

    const schemaId = 'schema-article'
    const existing = document.getElementById(schemaId)
    if (existing) existing.remove()

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt || '',
      image: pageImage,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      url: pageUrl,
      author: {
        '@type': 'Person',
        name: 'Goffredo Antonelli',
        url: 'https://www.goffredoantonelli.com',
        '@id': 'https://www.goffredoantonelli.com/#person'
      },
      publisher: {
        '@type': 'Person',
        name: 'Goffredo Antonelli',
        url: 'https://www.goffredoantonelli.com'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl
      }
    }

    const script = document.createElement('script')
    script.id = schemaId
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.title = 'Goffredo Antonelli — Commercialista, Manager e Consulente'
      const el = document.getElementById(schemaId)
      if (el) el.remove()
    }
  }, [post])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: 'var(--text-secondary)' }}>Caricamento...</p>
    </div>
  )

  if (!post) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
      <p style={{ color: 'var(--text-secondary)' }}>Articolo non trovato.</p>
      <Link to="/blog" className="btn btn--red">← Torna al blog</Link>
    </div>
  )

  return (
    <>
      <nav className="nav nav--scrolled" style={{ position: 'sticky' }}>
        <div className="container nav__inner">
          <Link to="/"><img src="/logo-goffredo.png" alt="Goffredo Antonelli" style={{ height: '96px', width: 'auto' }} /></Link>
          <div className="nav__links">
            <Link to="/blog">← Torna al blog</Link>
            <a href="https://www.matesis.it" target="_blank" rel="noopener">Matesis</a>
            <Link to="/#contatti" className="btn btn--red nav__cta" style={{ color: '#fff' }}>Scrivimi →</Link>
          </div>
        </div>
      </nav>

      <article className="articolo">
        <div className="container articolo__inner">
          <div className="articolo__meta">
            <Link to="/blog" style={{ color: 'var(--red)', fontSize: '14px', fontWeight: '600' }}>← Blog</Link>
            <span style={{ color: 'var(--text-light)', fontSize: '14px' }}>
              {formatDate(post.publishedAt)}
              {post.readTime && ` · ${post.readTime} min di lettura`}
            </span>
          </div>
          <h1 className="articolo__title">{post.title}</h1>
          {post.excerpt && <p className="articolo__excerpt">{post.excerpt}</p>}
          {post.mainImage && (
            <div className="articolo__cover">
              <img src={urlFor(post.mainImage).width(800).url()} alt={post.title} />
            </div>
          )}
          <div className="articolo__body">
            <PortableText value={post.body} components={components} />
          </div>
          <div className="articolo__footer">
            <Link to="/blog" className="btn btn--outline-dark">← Tutti gli articoli</Link>
            <a href="mailto:info@matesis.it" className="btn btn--red">Scrivimi →</a>
          </div>
        </div>
      </article>

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