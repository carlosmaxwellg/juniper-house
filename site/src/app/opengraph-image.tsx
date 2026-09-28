import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const alt =
  "Juniper House — Know what fits before you decide. Fictional portfolio concept.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "64px 72px",
        background: "#F8F5EF",
        color: "#18211C",
        borderBottom: "20px solid #264739",
      }}
    >
      <div style={{ display: "flex", fontSize: 30 }}>
        Juniper House · Skin &amp; Aesthetics
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          lineHeight: 1.08,
          maxWidth: 950,
        }}
      >
        Know what fits before you decide.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#264739",
        }}
      >
        <span>Clarity before treatment.</span>
        <span>Fictional portfolio concept</span>
      </div>
    </div>,
    size,
  );
}
