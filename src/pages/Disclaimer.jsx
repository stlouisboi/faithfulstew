import Seo from '../components/Seo'
import { PageHeader, Prose } from '../components/Page'
import { SITE } from '../lib/site'

export default function Disclaimer() {
  return (
    <>
      <Seo title="Disclaimer" path="/disclaimer" />
      <section className="bg-cream px-6 pt-36 md:pt-44 pb-16">
        <PageHeader eyebrow="Legal" title="Disclaimer" />
      </section>
      <section className="bg-cream px-6 pb-24 md:pb-32">
        <Prose>
          <p className="text-sm text-ink-tertiary">Last updated: {new Date().getFullYear()}</p>

          <h2>Education only</h2>
          <p>
            All content, books, workbooks, assessments, and resources offered by
            The Faithful Steward are provided for <strong>educational and informational
            purposes only</strong>. They reflect the personal convictions and experience of
            the author.
          </p>

          <h2>No promise of income or success</h2>
          <p>
            Nothing on this site is a promise or guarantee of business success,
            profit, revenue, growth, or any particular result. Building a business
            involves risk. Prayer, generosity, integrity, and obedience are not
            business strategies for guaranteed outcomes, and success is not a
            measure of God&rsquo;s approval.
          </p>

          <h2>Not professional advice</h2>
          <p>
            Our content is not legal, financial, tax, accounting, or professional
            business advice. You should consult qualified professionals before
            making significant business or financial decisions.
          </p>

          <h2>Your responsibility</h2>
          <p>
            You are solely responsible for your own decisions and their outcomes.
            By using this site and its resources, you agree that The Faithful
            Steward and Vince Lawrence are not liable for any loss or damage arising
            from your use of the content.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this disclaimer? Email{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>
        </Prose>
      </section>
    </>
  )
}
