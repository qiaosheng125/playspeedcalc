export const metadata = {
  title: "Contact",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="content-section split">
      <div>
        <p className="eyebrow">Contact</p>
        <h1>Contact</h1>
      </div>
      <div>
        <p>
          For questions, feedback, or bug reports, email{" "}
          <a href="mailto:support@playspeedcalc.net">support@playspeedcalc.net</a>.
          Include the browser, device, input values, and the result you expected.
          Do not send passwords, private files, or sensitive personal data.
        </p>
      </div>
    </main>
  );
}
