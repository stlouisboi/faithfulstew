// FAQ content. `tags` let pages show a relevant subset (e.g. book, workbook).
export const FAQS = [
  {
    id: 'beginners',
    q: 'Is this for beginners?',
    a: 'Yes. Whether you are exploring an idea, just starting, or already operating a business, the framework meets you where you are. You do not need a business degree, a certain revenue, or years of experience. You only need a willingness to build under God\u2019s authority. Seasoned owners tend to find it clarifying too.',
    tags: ['book', 'workbook', 'general'],
  },
  {
    id: 'promise-success',
    q: 'Does it promise business success?',
    a: 'No, and that is intentional. This is not prosperity teaching. Nothing here guarantees wealth, growth, contracts, or any outcome. Prayer and integrity are not strategies for guaranteed profit, and success is not a measure of God\u2019s approval. The promise is a better way to build and steward: faithfully, with open hands, whatever the results.',
    tags: ['book', 'workbook', 'general'],
  },
  {
    id: 'need-the-book',
    q: 'Do I need the book to use the workbook?',
    a: 'The workbook is designed as a companion and is aligned chapter-by-chapter with Kingdom Before Company, so reading the book gets you the most out of it. That said, each tool is written to stand on its own, so you can begin the workbook first and read alongside it.',
    tags: ['book', 'workbook'],
  },
  {
    id: 'digital-format',
    q: 'What format is the workbook?',
    a: 'It is a printable PDF you can use on paper, with a fillable version coming for those who prefer to type. Your purchase includes a personal-use license: use and print it for yourself, but please don\u2019t resell or redistribute it.',
    tags: ['workbook'],
  },
  {
    id: 'refunds',
    q: 'Can I get a refund on the workbook?',
    a: 'Because the workbook is delivered instantly as a digital download, all sales are final once delivered, except where required by law. If you hit a delivery problem, email us and we will make it right.',
    tags: ['workbook'],
  },
  {
    id: 'where-to-buy',
    q: 'Where can I buy the book?',
    a: 'Kingdom Before Company is available on Amazon in paperback and Kindle. Buy links go live here at launch. Join the list and you\u2019ll be the first to know.',
    tags: ['book'],
  },
]

export function faqsByTag(tag) {
  return FAQS.filter((f) => f.tags.includes(tag))
}
