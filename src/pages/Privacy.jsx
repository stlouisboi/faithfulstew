import Seo from '../components/Seo'
import { PageHeader, Prose } from '../components/Page'
import { SITE } from '../lib/site'

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" path="/privacy" />
      <section className="bg-cream px-6 pt-36 md:pt-44 pb-16">
        <PageHeader eyebrow="Legal" title="Privacy Policy" />
      </section>
      <section className="bg-cream px-6 pb-24 md:pb-32">
        <Prose>
          <p className="text-sm text-ink-tertiary">Last updated: {new Date().getFullYear()}</p>
          <p>
            The Faithful Steward (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This
            policy explains what we collect and how we use it.
          </p>

          <h2>What we collect</h2>
          <p>
            When you take the Decision Test, join our email list, or contact us,
            we collect the information you provide&mdash;typically your first name,
            email address, and optional business stage. We may also collect basic,
            anonymous analytics about how the site is used.
          </p>

          <h2>How we use it</h2>
          <p>
            We use your information to send you the resources you request,
            occasional updates, and product news. We do not sell your personal
            information. You can unsubscribe from emails at any time using the link
            in every message.
          </p>

          <h2>Service providers</h2>
          <p>
            We use trusted third parties to operate the site, including our email
            provider (MailerLite), transactional email (Resend), payment processing
            (Stripe), and hosting (Vercel). These providers process data only to
            deliver their service.
          </p>

          <h2>Your choices</h2>
          <p>
            You may request access to, correction of, or deletion of your personal
            data at any time by emailing{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email us at{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>
        </Prose>
      </section>
    </>
  )
}
