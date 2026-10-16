import styles from "./Legal.module.css";
import React from "react";

export default function Terms() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Legal</span>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.updated}>Last updated: 16 October 2026</p>
          <p className={styles.intro}>
            These terms explain the rules for using this website and the basis on
            which luxinteractive provides its services. Please read them before
            you get in touch or book a project.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.heading}>Agreement to these terms</h2>
          <p className={styles.text}>
            By using this website or contacting luxinteractive, you agree to
            these terms. If you do not agree, please do not use the site. Work we
            carry out for you will also be covered by a written quote or
            proposal, which takes priority over these terms if the two conflict.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Our services</h2>
          <p className={styles.text}>
            luxinteractive provides freelance web design, web development,
            website maintenance, and SEO services, mainly for businesses in the
            Northern Cape and surrounding areas. The descriptions on this website
            are a general guide and are not a binding offer. The scope, price,
            and timeline for any project are confirmed in writing before work
            begins.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Quotes, payment, and deposits</h2>
          <ul className={styles.list}>
            <li>
              Quotes are valid for the period stated on the quote, or 14 days if
              none is stated.
            </li>
            <li>
              A non-refundable deposit may be required before work starts. The amount and
              payment schedule will be set out in your quote.
            </li>
            <li>
              Invoices are payable within the period shown on the invoice. We may
              pause work on overdue accounts.
            </li>
            <li>
              Third-party costs such as domains, hosting, premium plugins, and
              stock images are not included unless the quote says so.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>What we need from you</h2>
          <p className={styles.text}>
            Projects run on time when you give us what we need on time. You agree
            to:
          </p>
          <ul className={styles.list}>
            <li>
              Provide content, images, logos, and feedback within a reasonable
              period.
            </li>
            <li>
              Confirm that you own, or have permission to use, everything you
              supply to us.
            </li>
            <li>
              Review work promptly and tell us clearly what needs to change.
            </li>
          </ul>
          <p className={styles.text}>
            Delays in receiving material or feedback may move the delivery date.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Revisions and changes in scope</h2>
          <p className={styles.text}>
            Your quote will state the number of revision rounds included. Extra
            revisions, or requests that go beyond the agreed scope, may be quoted
            and charged separately. We will always tell you before additional
            costs are incurred.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Ownership and intellectual property</h2>
          <p className={styles.text}>
            Once your final invoice is paid in full, you own the finished website
            design and the content you supplied. Until then, ownership stays with
            us.
          </p>
          <p className={styles.text}>
            We keep the right to reuse general know-how, code libraries, and
            tools that are not specific to your business. Unless you ask us not
            to, we may show the finished website in our portfolio and case
            studies.
          </p>
          <p className={styles.text}>
            Third-party software, fonts, and images remain subject to their own
            licences.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Booking a call</h2>
          <p className={styles.text}>
            Calls booked through this website are free introductory
            consultations, usually 10 to 15 minutes long. Please give us
            reasonable notice if you need to reschedule or cancel. Booking a call
            does not create an agreement to carry out any work.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>SEO and results</h2>
          <p className={styles.text}>
            We build websites using accepted search engine optimisation
            practices. However, search engines such as Google control their own
            rankings and change their rules often, so we cannot promise a
            specific position, amount of traffic, or number of leads. Any figures
            or testimonials shown on this website reflect individual client
            experiences and are not a guarantee of future results.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Acceptable use of this website</h2>
          <p className={styles.text}>You agree not to:</p>
          <ul className={styles.list}>
            <li>Use the site in a way that is unlawful or harms others.</li>
            <li>
              Attempt to gain unauthorised access to the site, its servers, or
              its data.
            </li>
            <li>
              Send spam, malicious code, or misleading information through our
              forms.
            </li>
            <li>Copy or republish our design and content without permission.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Third-party links and services</h2>
          <p className={styles.text}>
            This website may link to other sites and relies on third-party
            services. We are not responsible for the content, availability, or
            privacy practices of those third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Limitation of liability</h2>
          <p className={styles.text}>
            We take care to do our work well, but to the fullest extent allowed by
            South African law, luxinteractive is not liable for indirect or
            consequential losses, such as lost profit or lost business, arising
            from the use of this website or our services. Where we are found
            liable, our total liability is limited to the amount you paid us for
            the specific service in question.
          </p>
          <p className={styles.text}>
            Nothing in these terms limits any rights you have under the Consumer
            Protection Act, 2008, or any other law that cannot be excluded.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Privacy</h2>
          <p className={styles.text}>
            How we handle your personal information is explained in our{" "}
            <a href="/privacy" className={styles.link}>
              Privacy Policy
            </a>
            , which forms part of these terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Changes to these terms</h2>
          <p className={styles.text}>
            We may update these terms from time to time. The date at the top of
            this page shows the latest version. Work already agreed in writing
            continues under the terms that applied when you accepted the quote.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Governing law</h2>
          <p className={styles.text}>
            These terms are governed by the laws of the Republic of South Africa,
            and any dispute will be dealt with by the South African courts.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Contact us</h2>
          <p className={styles.text}>
            Questions about these terms? Email{" "}
            <a href="mailto:portmanashton4@gmail.com" className={styles.link}>
              portmanashton4@gmail.com
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}