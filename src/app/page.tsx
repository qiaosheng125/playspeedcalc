"use client";

import { useEffect, useMemo, useState } from "react";

const presetSpeeds = [1.25, 1.5, 1.75, 2, 2.5, 3];
const quickExamples = [
  { label: "Podcast", hours: 0, minutes: 48, seconds: 0 },
  { label: "Course", hours: 2, minutes: 30, seconds: 0 },
  { label: "Audiobook", hours: 10, minutes: 0, seconds: 0 }
];

function toNumber(value: string): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function formatDuration(totalSeconds: number): string {
  const rounded = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(rounded / 3600);
  const minutes = Math.floor((rounded % 3600) / 60);
  const seconds = rounded % 60;

  if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

function formatResultDuration(totalSeconds: number): string {
  const rounded = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(rounded / 3600);
  const minutes = Math.floor((rounded % 3600) / 60);
  const seconds = rounded % 60;

  if (hours > 0 && minutes === 0 && seconds === 0) return `${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0 && seconds === 0) return `${minutes}m`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

function hasSecondsInResult(totalSeconds: number): boolean {
  const rounded = Math.max(0, Math.round(totalSeconds));
  return rounded % 60 !== 0;
}

function formatFinishTime(timestamp: number | null, durationSeconds: number): string {
  if (!timestamp || durationSeconds <= 0) return "--";

  const finishTime = new Date(timestamp + durationSeconds * 1000);
  return finishTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

function clampSpeed(value: number): number {
  if (!Number.isFinite(value)) return 1;
  return Math.max(0.25, Math.round(value * 10) / 10);
}

function getEasterEggOptions(speed: number): string[] {
  if (speed < 0.4) {
    return [
      "Tiny snails are taking careful notes.",
      "The episode is wearing soft slippers.",
      "The narrator found the slow lane and brought snacks."
    ];
  }

  if (speed < 0.6) {
    return [
      "Tiny snails are taking careful notes.",
      "The episode is wearing soft slippers.",
      "Every word gets a tiny spotlight."
    ];
  }

  if (speed < 0.8) {
    return [
      "Tiny snails are taking careful notes.",
      "The episode is wearing soft slippers.",
      "This chapter is taking the scenic route."
    ];
  }

  if (speed >= 2.5 && speed < 3) {
    return [
      "Your watch just raised one eyebrow.",
      "The progress bar just learned parkour.",
      "Minutes are packing themselves into smaller boxes."
    ];
  }

  if (speed >= 4 && speed < 5) {
    return [
      "The progress bar just learned parkour.",
      "The chapter has become a tiny lightning bolt.",
      "The narrator is now speedrunning the syllabus."
    ];
  }

  if (speed >= 5) {
    return [
      "This is no longer listening, this is teleporting.",
      "The chapter has become a tiny lightning bolt.",
      "Please keep your bookmarks inside the vehicle."
    ];
  }

  return [];
}

function pickEasterEgg(options: string[]): string {
  if (options.length === 0) return "";
  return options[Math.floor(Math.random() * options.length)];
}

function getEasterEggKey(speed: number): string {
  if (speed < 0.4) return "slowest";
  if (speed < 0.6) return "very-slow";
  if (speed < 0.8) return "slow";
  if (speed >= 2.5 && speed < 3) return "quick";
  if (speed >= 4 && speed < 5) return "very-fast";
  if (speed >= 5) return "fastest";
  return "";
}

export default function Home() {
  const [hours, setHours] = useState("2");
  const [minutes, setMinutes] = useState("30");
  const [seconds, setSeconds] = useState("0");
  const [speed, setSpeed] = useState(1.5);
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [easterEgg, setEasterEgg] = useState("");
  const easterEggKey = getEasterEggKey(speed);

  useEffect(() => {
    setCurrentTime(Date.now());
    const timer = window.setInterval(() => setCurrentTime(Date.now()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setEasterEgg(pickEasterEgg(getEasterEggOptions(speed)));
  }, [easterEggKey, speed]);

  const originalSeconds = useMemo(
    () => toNumber(hours) * 3600 + toNumber(minutes) * 60 + toNumber(seconds),
    [hours, minutes, seconds]
  );

  const newDuration = originalSeconds > 0 && speed > 0 ? originalSeconds / speed : 0;
  const isSlower = speed < 1;
  const isSameSpeed = speed === 1;
  const timeDifference = originalSeconds > 0 ? Math.abs(originalSeconds - newDuration) : 0;
  const savedPercent = originalSeconds > 0 ? (timeDifference / originalSeconds) * 100 : 0;
  const finishTime = formatFinishTime(currentTime, newDuration);
  const summary = isSameSpeed
    ? `At ${speed}x speed, ${formatDuration(originalSeconds)} stays ${formatDuration(newDuration)}.`
    : isSlower
      ? `At ${speed}x speed, ${formatDuration(originalSeconds)} becomes ${formatDuration(
          newDuration
        )}. You spend ${formatDuration(timeDifference)} extra (${savedPercent.toFixed(1)}% longer).`
      : `At ${speed}x speed, ${formatDuration(originalSeconds)} becomes ${formatDuration(
          newDuration
        )}. You save ${formatDuration(timeDifference)} (${savedPercent.toFixed(1)}%).`;

  const rows = presetSpeeds.map((preset) => ({
    speed: preset,
    duration: originalSeconds > 0 ? originalSeconds / preset : 0,
    saved: originalSeconds > 0 ? Math.max(0, originalSeconds - originalSeconds / preset) : 0
  }));

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/">
          PlaySpeedCalc
        </a>
        <nav aria-label="Primary navigation">
          <a href="#calculator">Calculator</a>
          <a href="#guide">Guide</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero compact-hero">
        <div className="hero-copy compact-copy">
          <p className="eyebrow">Playback speed calculator</p>
          <h1>Playback Speed Calculator</h1>
          <p className="lead">
            Calculate playback time instantly for audiobooks, podcasts, online courses, and videos.
            Enter the original length, choose a speed, and see the new duration, time saved, and
            finish time.
          </p>
        </div>

        <section className="calculator-panel primary-tool" id="calculator" aria-label="Playback speed calculator">
          <div className="tool-heading">
            <h2>Calculate playback time</h2>
            <p>Live result. No signup. No upload.</p>
          </div>

          <div className="duration-grid" aria-label="Original duration">
            <label>
              Hours
              <input
                inputMode="numeric"
                min="0"
                step="1"
                type="number"
                value={hours}
                onChange={(event) => setHours(event.target.value)}
              />
            </label>
            <label>
              Minutes
              <input
                inputMode="numeric"
                min="0"
                step="5"
                type="number"
                value={minutes}
                onChange={(event) => setMinutes(event.target.value)}
              />
            </label>
            <label>
              Seconds
              <input
                inputMode="numeric"
                min="0"
                step="30"
                type="number"
                value={seconds}
                onChange={(event) => setSeconds(event.target.value)}
              />
            </label>
          </div>

          <div className="speed-row">
            <div>
              <span className="field-title">Playback speed</span>
              <div className="speed-buttons" aria-label="Preset playback speeds">
                {presetSpeeds.map((preset) => (
                  <button
                    className={preset === speed ? "active" : ""}
                    key={preset}
                    type="button"
                    onClick={() => setSpeed(preset)}
                  >
                    {preset}x
                  </button>
                ))}
              </div>
            </div>

            <label className="custom-speed">
              Custom speed
              <div className="speed-input">
                <button
                  aria-label="Decrease custom speed"
                  type="button"
                  onClick={() => setSpeed((current) => clampSpeed(current - 0.1))}
                >
                  -
                </button>
                <input
                  inputMode="decimal"
                  min="0.25"
                  step="0.1"
                  type="number"
                  value={speed}
                  onChange={(event) => setSpeed(clampSpeed(Number(event.target.value)))}
                />
                <button
                  aria-label="Increase custom speed"
                  type="button"
                  onClick={() => setSpeed((current) => clampSpeed(current + 0.1))}
                >
                  +
                </button>
              </div>
            </label>
          </div>

          <div className="result-grid compact-results" aria-live="polite">
            <article>
              <span>New duration</span>
              <strong className={hasSecondsInResult(newDuration) ? "with-seconds" : ""}>
                {formatResultDuration(newDuration)}
              </strong>
            </article>
            <article>
              <span>{isSameSpeed ? "Time difference" : isSlower ? "Extra time" : "Time saved"}</span>
              <strong className={hasSecondsInResult(timeDifference) ? "with-seconds" : ""}>
                {formatResultDuration(timeDifference)}
              </strong>
            </article>
            <article>
              <span>{isSameSpeed ? "Change percent" : isSlower ? "Longer percent" : "Saved percent"}</span>
              <strong>{savedPercent.toFixed(1)}%</strong>
            </article>
            <article>
              <span>Finish time</span>
              <strong>{finishTime}</strong>
            </article>
          </div>

          <p className="result-sentence">{summary}</p>
          {easterEgg ? (
            <p className="easter-egg" aria-live="polite">
              {easterEgg}
            </p>
          ) : null}

          <button
            className="copy-button"
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(`${summary} Finish time: ${finishTime}.`);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1600);
              } catch {
                setCopied(false);
              }
            }}
          >
            {copied ? "Copied" : "Copy result"}
          </button>

          <div className="quick-examples" aria-label="Quick examples">
            {quickExamples.map((example) => (
              <button
                key={example.label}
                type="button"
                onClick={() => {
                  setHours(String(example.hours));
                  setMinutes(String(example.minutes));
                  setSeconds(String(example.seconds));
                }}
              >
                {example.label}
              </button>
            ))}
          </div>
        </section>
      </section>

      <section className="content-section" id="guide">
        <div>
          <p className="eyebrow">Common speeds</p>
          <h2>Mainstream playback speeds</h2>
          <p>
            Most people compare 1.25x, 1.5x, 1.75x, 2x, 2.5x, and 3x for faster listening. The
            table also includes 0.75x and 1x, which are useful when you need a baseline or slower
            playback.
          </p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Speed</th>
                <th>Duration</th>
                <th>Time saved</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.speed}>
                  <td>{row.speed}x</td>
                  <td>{formatDuration(row.duration)}</td>
                  <td>{formatDuration(row.saved)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section split">
        <div>
          <h2>What is a playback speed calculator?</h2>
          <p>
            It converts the original length of an audiobook, podcast, online course, or video into
            the actual time it takes at a faster or slower playback speed. The result updates in the
            browser, so you do not need to upload a file or press a calculate button.
          </p>
        </div>
        <div>
          <h2>How the formula works</h2>
          <p>
            New duration equals original duration divided by playback speed. A 60 minute podcast at
            1.5x takes 40 minutes, saving 20 minutes. Time saved equals original duration minus the
            new duration.
          </p>
        </div>
      </section>

      <section className="faq" id="faq">
        <p className="eyebrow">FAQ</p>
        <h2>Common questions</h2>
        <details>
          <summary>How long is 1 hour at 1.5x speed?</summary>
          <p>One hour at 1.5x speed takes 40 minutes, saving 20 minutes.</p>
        </details>
        <details>
          <summary>How long is a 2-hour video at 2x speed?</summary>
          <p>A 2-hour video at 2x speed takes exactly 1 hour, saving a full hour.</p>
        </details>
        <details>
          <summary>Does this work for podcasts and audiobooks?</summary>
          <p>Yes. The same formula works for videos, courses, podcasts, and audiobooks.</p>
        </details>
        <details>
          <summary>How long does a 10-hour audiobook take at 1.25x?</summary>
          <p>A 10-hour audiobook at 1.25x speed takes 8 hours. You save 2 hours.</p>
        </details>
        <details>
          <summary>Does this calculator work for YouTube videos?</summary>
          <p>
            Yes. Enter the YouTube video length, then choose the playback speed you plan to use.
          </p>
        </details>
      </section>

      <footer>
        <span>© 2026 PlaySpeedCalc</span>
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}
