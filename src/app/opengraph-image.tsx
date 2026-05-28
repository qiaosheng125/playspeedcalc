import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PlaySpeedCalc playback speed calculator preview";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #eef4ff 0%, #f7fbff 45%, #e8fff7 100%)",
          color: "#162033",
          display: "flex",
          fontFamily: "Inter, Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "2px solid #dce6f3",
            borderRadius: "28px",
            boxShadow: "0 36px 90px rgba(22, 32, 51, 0.18)",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            height: "100%",
            justifyContent: "space-between",
            padding: "58px",
            width: "100%"
          }}
        >
          <div style={{ alignItems: "center", display: "flex", gap: "18px" }}>
            <div
              style={{
                background: "#275efe",
                borderRadius: "12px",
                height: "42px",
                width: "42px"
              }}
            />
            <div style={{ color: "#162033", fontSize: "32px", fontWeight: 800 }}>
              PlaySpeedCalc
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div
              style={{
                color: "#0f8b8d",
                fontSize: "24px",
                fontWeight: 800,
                textTransform: "uppercase"
              }}
            >
              Playback Speed Calculator
            </div>
            <div
              style={{
                fontSize: "78px",
                fontWeight: 900,
                letterSpacing: "-2px",
                lineHeight: 0.95,
                maxWidth: "820px"
              }}
            >
              Calculate playback time instantly
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            {["1.25x", "1.5x", "2x", "2.5x", "3x"].map((speed) => (
              <div
                key={speed}
                style={{
                  background: speed === "1.5x" ? "#275efe" : "#f2f6fc",
                  border: "2px solid #dce6f3",
                  borderRadius: "16px",
                  color: speed === "1.5x" ? "#ffffff" : "#162033",
                  fontSize: "34px",
                  fontWeight: 800,
                  padding: "18px 28px"
                }}
              >
                {speed}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
