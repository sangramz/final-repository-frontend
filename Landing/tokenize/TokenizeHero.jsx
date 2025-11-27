import React from "react";
import illus from "../assets/preview.svg";

export default function TokenizeHero() {
  return (
    <div className="tokenize-root">
      <style>{`
      
  @font-face {
    font-family: "URWGeometric";
    src: url("/fonts/URWGeometricRegular.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  :root{
    --page-width: 920px;
    --muted: #64748b;
  }

  .tokenize-root{
    font-family: "URWGeometric", system-ui;
    display:flex;
    justify-content:center;
    padding:56px 24px 72px;
    background:#ffffff;
marginTop:-3rem;
    /* Scale */
    transform: scale(0.9);
    transform-origin: top center;
    width: 111.5%;
  }

  @media (max-width:900px) {
    .tokenize-root {
      transform: scale(1);
      width: 100%;
    }
  }

  .tokenize-container{
    width:var(--page-width);
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:3rem;
    margin-top:-2rem; /* User request */
  }

  /* Badge */
  .badge {
    padding: 8px 22px;
    background: linear-gradient(90deg, #7dadff 0%, #e5e2a5 100%);
    border-radius: 30px;
    font-size: 12px;
    letter-spacing: 0.7px;
    font-weight: 600;
    text-transform: uppercase;
  }

  /* Title */
  .heading{
    font-size:6.4rem;
    line-height:1;
    color:#0f1724;
    max-width:880px;
    
    font-weight:500;
  }

  /* Subtitle */
  .sub{
    color:var(--muted);
    font-size:2.25rem;
    max-width:760px;
    line-height:1.45;
    margin:0;
  }

  /* CTA */
  .cta-row{
    display:flex;
    gap:12px;
    justify-content:center;
  }

  .btn-primary{
    background:#152B5A;
    color:white;
    padding:14px 22px;
    border-radius:10px;
    font-weight:700;
    border:none;
  }

  .btn-outline{
    background:white;
    border:1px solid #e6e9ef;
    padding:14px 22px;
    border-radius:10px;
    font-weight:700;
  }

  /* Stats */
  .card {
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    align-items:center;
  }

  .stat-value{
    font-weight:600; 
    font-size:1.4rem; 
    color:#0f1724;
  }

  .stat-label{
    font-size:0.9rem; 
    color:var(--muted);
  }

  /* Image */
  .hero-image{
    width:80%;
    max-width:640px;
    border-radius:10px;
  }

  /* Mobile fixes */
  @media (max-width:640px){
    .heading { font-size:2.4rem; }
    .sub { font-size:1rem; }
  }

      `}</style>

      <div className="tokenize-container">

        <div className="badge">TOKENIZE</div>

        <h1 className="heading">
          Tokenize assets — build global, Shariah-compliant investment markets
        </h1>

        <p className="sub">
          Emniq bridges real-world assets and ethical digital finance. Tokenize property, commodities, art, sukuk and more with transparent, asset-backed tokens.
        </p>

        <div className="cta-row">
          <button className="btn-primary">Start Tokenizing</button>
          <button className="btn-outline">Read Whitepaper</button>
        </div>

      <div
  aria-label="stats"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4rem",
    marginTop: "2rem",
    fontFamily: "inherit",
    userSelect: "none"
  }}
>
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        fontWeight: 600,
        fontSize: "2rem",
        lineHeight: "1",
        margin: 0,
        padding: 0
      }}
    >
      100M EMN
    </div>
    <div
      style={{
        fontSize: "0.9rem",
        opacity: 0.7,
        marginTop: "6px",
        lineHeight: "1.2"
      }}
    >
      Total Emn supply
    </div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div
      style={{
        fontWeight: 600,
        fontSize: "2rem",
        lineHeight: "1",
        margin: 0,
        padding: 0
      }}
    >
      3 Tokens
    </div>
    <div
      style={{
        fontSize: "0.9rem",
        opacity: 0.7,
        marginTop: "6px",
        lineHeight: "1.2"
      }}
    >
      Ecosystem tokens (EMN / XMR / AVX)
    </div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div
      style={{
        fontWeight: 600,
        fontSize: "2rem",
        lineHeight: "1",
        margin: 0,
        padding: 0
      }}
    >
      Shariah
    </div>
    <div
      style={{
        fontSize: "0.9rem",
        opacity: 0.7,
        marginTop: "6px",
        lineHeight: "1.2"
      }}
    >
      Standards & Audit Ready
    </div>
  </div>
</div>

        <img className="hero-image" src={illus} alt="Tokenize preview" />

      </div>
    </div>
  );
}
