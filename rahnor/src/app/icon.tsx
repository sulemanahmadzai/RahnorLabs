import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A1A",
          borderRadius: 10,
        }}
      >
        <svg
          viewBox="225 320 225 305"
          width="38"
          height="38"
        >
          <defs>
            <linearGradient id="g1" x1="386.72" y1="378.41" x2="417.91" y2="454.28" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#fff" />
              <stop offset=".63" stopColor="#231f20" />
            </linearGradient>
            <linearGradient id="g2" x1="405.54" y1="545.77" x2="336.34" y2="495.18" gradientUnits="userSpaceOnUse">
              <stop offset=".02" stopColor="#fff" />
              <stop offset="1" stopColor="#231f20" />
            </linearGradient>
            <linearGradient id="g3" x1="250.4" y1="578.07" x2="295.84" y2="387.94" gradientUnits="userSpaceOnUse">
              <stop offset=".36" stopColor="#fff" />
              <stop offset="1" stopColor="#231f20" />
            </linearGradient>
          </defs>
          <path fill="#fff" d="M235.72,415.57v132.76l56-18.27,3.44-115.29,4.64-3.34c17.18-12.39,27.35-32.28,27.35-53.46v-27.79l-59.21,31.65c-19.83,10.6-32.21,31.26-32.21,53.74Z" />
          <path fill="url(#g1)" d="M440.05,398.3l-32.2,51.94-43.76-37.43c-15.97-13.66-25.02-33.72-24.69-54.72l.43-27.92,100.22,68.14Z" />
          <path fill="url(#g2)" d="M441.95,582.96v14.92l-103.06-67.49,24.61-48.32,42.59,30.77c22.52,16.27,35.86,42.35,35.86,70.13Z" />
          <path fill="#fff" d="M338.89,530.39l.4-25.78c.34-22.19,11.25-42.89,29.36-55.72l71.41-50.59,1.04,34.4c.54,17.81-8.12,34.64-22.92,44.55l-79.28,53.13Z" />
          <path fill="url(#g3)" d="M274.27,573.93l-38.56,41.18v-114.95c0-30.06,15.55-57.98,41.1-73.81l19.91-12.33v116.38c-.46,15.76-11.68,32.03-22.46,43.54Z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
