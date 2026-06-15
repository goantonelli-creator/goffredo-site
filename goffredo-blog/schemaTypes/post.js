export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Estratto',
      type: 'text',
      rows: 3,
      description: 'Breve descrizione mostrata nell\'anteprima'
    },
    {
      name: 'mainImage',
      title: 'Immagine principale',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'publishedAt',
      title: 'Data pubblicazione',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Tempo di lettura (minuti)',
      type: 'number'
    },
    {
      name: 'body',
      title: 'Contenuto',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normale', value: 'normal' },
            { title: 'Titolo H2', value: 'h2' },
            { title: 'Titolo H3', value: 'h3' },
            { title: 'Citazione', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Grassetto', value: 'strong' },
              { title: 'Corsivo', value: 'em' },
              { title: 'Evidenziato', value: 'underline' }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tag',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Aggiungi tag per categorizzare il post'
    },
    {
      name: 'seoTitle',
      title: 'Titolo SEO',
      type: 'string',
      description: 'Lascia vuoto per usare il titolo principale'
    },
    {
      name: 'seoDescription',
      title: 'Descrizione SEO',
      type: 'text',
      rows: 2
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      date: 'publishedAt'
    },
    prepare({ title, media, date }) {
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString('it-IT') : 'Bozza'
      }
    }
  }
}
