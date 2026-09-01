// Central site configuration. Edit values here; pages read from this file.

export const SITE = {
  name: 'The Faithful Steward',
  tagline: 'Business under God\u2019s authority.',
  url: 'https://faithfulstew.vercel.app',
  description:
    'A biblical and practical framework for Christians who want to build, lead, and steward a business without sacrificing faith, family, or integrity.',
  ogImage: '/og-share-card.jpg',
  contactEmail: 'hello@thefaithfulsteward.com',
}

export const BOOK = {
  title: 'Kingdom Before Company',
  subtitle:
    'How to Build a Business Without Sacrificing Faith, Family, or Integrity',
  author: 'Vince Lawrence',
  cover: '/book-cover.png',
  backCoverHeadline: 'A business can grow while its owner drifts.',
  paperbackPrice: '$18.99',
  kindlePrice: '$9.99',
  // Leave blank to show "Coming Soon". Paste live Amazon URLs when ready.
  paperbackUrl: '',
  kindleUrl: '',
}

export const WORKBOOK = {
  title: 'The Faithful Steward Workbook',
  subtitle: 'Thirty chapter-aligned tools for faithful business stewardship',
  price: '$29.99',
  cover: '/workbook-3d-cover.webp',
  // Set VITE_STRIPE_PAYMENT_LINK in your Vercel env to enable checkout.
  paymentLink: import.meta.env.VITE_STRIPE_PAYMENT_LINK || '',
}

// Primary navigation (top bar), kept short so it fits alongside the wordmark.
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Assessment', to: '/decision-test' },
  { label: 'The Book', to: '/book' },
  { label: 'Workbook', to: '/workbook' },
  { label: 'About', to: '/about' },
]

// Fuller navigation used in the footer.
export const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Assessment', to: '/decision-test' },
  { label: 'The Book', to: '/book' },
  { label: 'Workbook', to: '/workbook' },
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
]

export const LEGAL_LINKS = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms & License', to: '/terms' },
  { label: 'Disclaimer', to: '/disclaimer' },
]

export const EASE = [0.22, 1, 0.36, 1]
