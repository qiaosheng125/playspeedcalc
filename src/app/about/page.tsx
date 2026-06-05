export const metadata = {
  title: "About",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <main className="content-section split">
      <div>
        <p className="eyebrow">About</p>
        <h1>About PlaySpeedCalc</h1>
      </div>
      <div>
        <p>
          PlaySpeedCalc is a small playback speed calculator for videos,
          podcasts, lectures, and audiobooks. It helps you convert an original
          duration into the real listening or watching time at speeds like 1.25x,
          1.5x, 2x, or 3x.
        </p>
        <p>
          The calculator runs in your browser. Duration, speed, and finish-time
          values are not uploaded to a server.
        </p>
        <p>
          The playful result messages are only a lightweight finish-state detail.
          They never change the calculation result.
        </p>
      </div>
    </main>
  );
}
