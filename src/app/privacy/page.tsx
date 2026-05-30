export const metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPage() {
  return (
    <main className="content-section split">
      <div>
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
      </div>
      <div>
        <p>
          PlaySpeedCalc runs playback speed calculations in your browser. The duration and speed
          values you enter are not uploaded to a server.
        </p>
        <p>
          We may use privacy-friendly analytics to understand aggregate traffic and improve the
          site. We do not sell personal information.
        </p>
        <p>
          If you email <a href="mailto:support@playspeedcalc.net">support@playspeedcalc.net</a>,
          your email address and message are used only to respond to your request
          and improve the site.
        </p>
      </div>
    </main>
  );
}
