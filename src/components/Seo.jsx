import { Helmet } from 'react-helmet-async'
import { SITE } from '../lib/site'

export default function Seo({ title, description, path = '', image }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | Kingdom Before Company`
  const desc = description || SITE.description
  const url = `${SITE.url}${path}`
  const img = `${SITE.url}${image || SITE.ogImage}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  )
}
