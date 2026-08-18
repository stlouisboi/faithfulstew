import { Mail } from 'lucide-react'
import Seo from '../components/Seo'
import { PageHeader } from '../components/Page'
import EmailCapture from '../components/EmailCapture'
import { SITE } from '../lib/site'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Get in touch with The Faithful Steward."
      />

      <section className="bg-cream px-6 pt-36 md:pt-44 pb-16 md:pb-20">
        <PageHeader
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Questions about the book, workbook, speaking, or interviews? We\u2019d love to hear from you."
        />
      </section>

      <section className="bg-cream px-6 pb-24 md:pb-32">
        <div className="max-w-2xl mx-auto">
          <div className="border border-border-light bg-cream-dark p-8 md:p-10 text-center">
            <Mail size={28} className="text-gold mx-auto" />
            <h2 className="mt-5 font-display font-bold text-2xl text-ink">Email us directly</h2>
            <p className="mt-3 text-ink-secondary">
              For inquiries, reach out any time at:
            </p>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="mt-4 inline-block font-display text-xl text-ink hover:text-gold transition-colors"
              data-testid="contact-email-link"
            >
              {SITE.contactEmail}
            </a>
          </div>

          <div className="mt-14">
            <div className="text-center">
              <h2 className="font-display font-bold tracking-[-0.02em] text-2xl md:text-3xl text-ink">
                Or join the list
              </h2>
              <p className="mt-3 text-ink-secondary">
                Stay connected and be first to hear about new resources.
              </p>
            </div>
            <div className="mt-8">
              <EmailCapture buttonLabel="Join the List" source="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
