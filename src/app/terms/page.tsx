export const metadata = {
  title: "Terms of Use",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <main className="content-section split">
      <div>
        <p className="eyebrow">Terms</p>
        <h1>Terms of Use</h1>
      </div>
      <div>
        <p>
          PlaySpeedCalc is provided as a free utility for estimating playback duration and time
          saved. Results are for convenience and may vary depending on your media player.
        </p>
        <p>Use the site responsibly. We may update these terms as the product changes.</p>
      </div>
    </main>
  );
}
