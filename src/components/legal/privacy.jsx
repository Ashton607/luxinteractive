import styles from "./Legal.module.css";
import React from "react"; 


export default function Privacy() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: 16 October 2026</p>
          <p className={styles.intro}>
            Your privacy matters to us. This policy explains what personal
            information we collect through this website, why we collect it, and
            how you can control it.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.heading}>Who we are</h2>
          <p className={styles.text}>
            luxinteractive is a freelance web design and development business
            based in the Northern Cape, South Africa. In this policy,
            &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to
            luxinteractive, and &ldquo;you&rdquo; refers to anyone who visits
            this website or contacts us through it.
          </p>
          <p className={styles.text}>
            For the purposes of the Protection of Personal Information Act, 2013
            (POPIA), we are the responsible party for the personal information
            described below. You can reach us at{" "}
            <a href="mailto:portmanashton4@gmail.com" className={styles.link}>
              portmanashton4@gmail.com
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Information we collect</h2>
          <p className={styles.text}>
            We only collect information you choose to give us through the site:
          </p>
          <ul className={styles.list}>
            <li>
              Contact form: your name, email address, phone number (optional),
              website URL (optional), the type of enquiry, and your message.
            </li>
            <li>
              Booking form: your name, email address, the date and time you
              select, and any notes you add about the call.
            </li>
            <li>
              Technical data: basic information such as your IP address, browser
              type, and pages visited, which is collected automatically by our
              hosting provider when you load the site.
            </li>
          </ul>
          <p className={styles.text}>
            We do not ask for payment details, ID numbers, or any special
            personal information through this website.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>How we use your information</h2>
          <p className={styles.text}>We use what you send us to:</p>
          <ul className={styles.list}>
            <li>Reply to your enquiry and discuss your project.</li>
            <li>Schedule and confirm calls you book with us.</li>
            <li>Send you a confirmation email for your message or booking.</li>
            <li>Keep the website secure and working properly.</li>
          </ul>
          <p className={styles.text}>
            We do not sell your personal information, and we do not use it for
            unrelated marketing without your consent.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Who we share it with</h2>
          <p className={styles.text}>
            We use a small number of trusted service providers to run the site.
            They only receive the information needed to do their job:
          </p>
          <ul className={styles.list}>
            <li>Vercel, which hosts this website.</li>
            <li>Resend, which delivers our confirmation and notification emails.</li>
            <li>Google Calendar, which holds the details of booked calls.</li>
          </ul>
          <p className={styles.text}>
            Some of these providers process data on servers outside South
            Africa. Where that happens, we rely on providers that apply
            appropriate safeguards for the information they handle. We may also
            disclose information if the law requires us to.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>How long we keep it</h2>
          <p className={styles.text}>
            We keep enquiry and booking details only for as long as we need them
            to respond to you, deliver any work we agree to, and meet our legal
            or accounting obligations. When we no longer need your information,
            we delete it or remove anything that identifies you.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Keeping your information safe</h2>
          <p className={styles.text}>
            We take reasonable technical and organisational steps to protect your
            information, including encrypted connections (HTTPS) and restricting
            access to the accounts that hold your data. No method of
            transmission or storage is completely secure, so we cannot guarantee
            absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Cookies</h2>
          <p className={styles.text}>
            This website does not use cookies to track you for advertising. Our
            hosting provider may use essential technical logs to keep the site
            running. If we add analytics tools in future, we will update this
            policy to say so.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Your rights</h2>
          <p className={styles.text}>Under POPIA you have the right to:</p>
          <ul className={styles.list}>
            <li>
              Ask whether we hold personal information about you, and request a
              copy.
            </li>
            <li>
              Ask us to correct or delete information that is inaccurate or no
              longer needed.
            </li>
            <li>Object to us processing your information.</li>
            <li>Withdraw consent you previously gave us.</li>
            <li>
              Lodge a complaint with the Information Regulator of South Africa
              (
              <a
                href="https://inforegulator.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                inforegulator.org.za
              </a>
              ).
            </li>
          </ul>
          <p className={styles.text}>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:hello@luxinteractive.co.za" className={styles.link}>
              hello@luxinteractive.co.za
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Children</h2>
          <p className={styles.text}>
            This website is not aimed at children under 18, and we do not
            knowingly collect personal information from them.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Changes to this policy</h2>
          <p className={styles.text}>
            We may update this policy from time to time. The date at the top of
            this page shows when it was last changed. Continuing to use the site
            after an update means you accept the revised policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Contact us</h2>
          <p className={styles.text}>
            Questions about this policy or your information? Email{" "}
            <a href="mailto:hello@luxinteractive.co.za" className={styles.link}>
              hello@luxinteractive.co.za
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}