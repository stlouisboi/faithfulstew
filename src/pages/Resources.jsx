import { Link } from 'react-router-dom'
import { ClipboardCheck, BookOpen, FileText, Mail } from 'lucide-react'
import Seo from '../components/Seo'
import { PageHeader } from '../components/Page'
import EmailCapture from '../components/EmailCapture'

const RESOURCES = [
  {
    Icon: ClipboardCheck,
    title: 'The Decision Test',
    desc: 'A free seven-question assessment that reveals your biggest stewardship tension.',
    to: '/decision-test',
    cta: 'Take the test',
    ready: true,
  },
  {
    Icon: BookOpen,
    title: 'Kingdom Before Company',
    desc: 'The flagship book on building a business without sacrificing faith, family, or integrity.',
    to: '/book',
    cta: 'Explore the book',
    ready: true,
  },
  {
    Icon: FileText,
    title: 'The Workbook',
    desc: 'Thirty chapter-aligned tools to put the framework into practice. Fillable version in beta.',
    to: '/workbook',
    cta: 'See the workbook',
    ready: true,
  },
]

export default function Resources() {
  return (
    <>
      <Seo
        title="Resources"
        path="/resources"
        description="Book-linked tools and downloads for faithful business stewardship."
      />

      <section className="bg-cream px-6 pt-36 md:pt-44 pb-16 md:pb-20">
        <PageHeader
          eyebrow="Resources"
          title="Tools for faithful stewardship"
          subtitle="A growing destination for book-linked tools and downloads. Start with the free Decision Test."
        />
      </section>

      <section className="bg-cream px-6 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map(({ Icon, title, desc, to, cta }) => (
            <div
              key={title}
              className="flex flex-col border border-border-light bg-cream-dark p-8 hover:border-gold/50 transition-colors"
              data-testid={`resource-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Icon size={28} className="text-gold" />
              <h3 className="mt-5 font-display font-bold text-xl text-ink">{title}</h3>
              <p className="mt-3 text-ink-secondary leading-[1.7] flex-1">{desc}</p>
              <Link to={to} className="mt-6 text-sm font-medium text-ink hover:text-gold transition-colors">
                {cta} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark border-t border-border-light px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <Mail size={28} className="text-gold mx-auto" />
          <h2 className="mt-5 font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl text-ink">
            Get new resources first
          </h2>
          <p className="mt-4 text-ink-secondary leading-[1.7]">
            Join the list for future tools, downloads, and reader updates.
          </p>
          <div className="mt-10 text-left">
            <EmailCapture buttonLabel="Join the List" source="resources" />
          </div>
        </div>
      </section>
    </>
  )
}
