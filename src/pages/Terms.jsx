import Seo from '../components/Seo'
import { PageHeader, Prose } from '../components/Page'
import { SITE } from '../lib/site'

export default function Terms() {
  return (
    <>
      <Seo title="Terms & Personal-Use License" path="/terms" />
      <section className="bg-cream px-6 pt-36 md:pt-44 pb-16">
        <PageHeader eyebrow="Legal" title="Terms &amp; License" />
      </section>
      <section className="bg-cream px-6 pb-24 md:pb-32">
        <Prose>
          <p className="text-sm text-ink-tertiary">Last updated: {new Date().getFullYear()}</p>
          <p>
            By using this website and purchasing our digital products, you agree
            to the following terms.
          </p>

          <h2>Use of the site</h2>
          <p>
            Content on this site is provided for general educational purposes. You
            agree to use the site lawfully and not to disrupt or misuse it.
          </p>

          <h2>Personal-use license (digital products)</h2>
          <p>
            When you purchase a digital product such as the workbook, you receive a
            <strong> personal-use license</strong>. You may download, print, and use it for your
            own personal and business purposes. You may <strong>not</strong> resell, redistribute,
            share, sublicense, or publicly post the files. All content remains the
            intellectual property of The Faithful Steward and Vince Lawrence.
          </p>

          <h2>Payments and delivery</h2>
          <p>
            Payments for digital products are processed securely by Stripe.
            Delivery is automatic and immediate by email after successful payment.
          </p>

          <h2>Refunds</h2>
          <p>
            Because digital products are delivered instantly and cannot be
            returned, all sales are final and non-refundable once the download has
            been delivered, except where required by law. If you experience a
            delivery problem, contact us and we will make it right.
          </p>

          <h2>No guarantee of results</h2>
          <p>
            Our products are educational. They do not promise or guarantee business
            success, revenue, growth, or any specific outcome. See our{' '}
            <a href="/disclaimer">Disclaimer</a> for details.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>
        </Prose>
      </section>
    </>
  )
}
