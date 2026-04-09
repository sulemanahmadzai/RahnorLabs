import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Rahnor — Web Development, AI Development & Mobile App Development Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0A0A1A 0%, #1E1B4B 50%, #0A0A1A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.3), transparent 60%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#8B5CF6",
              letterSpacing: "0.15em",
              marginBottom: 20,
              display: "flex",
            }}
          >
            RAHNOR
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: 24,
              display: "flex",
            }}
          >
            Web, AI & Mobile Development
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#CBD5E1",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Top Rated on Upwork & Fiverr — 50+ Projects — 4.9★ Rating
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 36,
            }}
          >
            {["Web Apps", "AI Agents", "Mobile Apps", "SaaS", "MVP"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 999,
                    border: "1px solid rgba(139, 92, 246, 0.4)",
                    background: "rgba(139, 92, 246, 0.15)",
                    color: "white",
                    fontSize: 16,
                    fontWeight: 500,
                    display: "flex",
                  }}
                >
                  {tag}
                </div>
              ),
            )}
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              bottom: -80,
              color: "#64748B",
              fontSize: 16,
            }}
          >
            rahnor.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
