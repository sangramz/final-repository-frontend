import { FiUser, FiTrendingUp } from "react-icons/fi";

export default function InvestFundingSection() {
  return (
    <>
      {/* Font */}
      <style>
        {`
          @font-face {
            font-family: 'URWGeometric';
            src: url('/fonts/URWGeometricRegular.otf') format('opentype');
            font-weight: 400;
          }
        `}
      </style>

      <div
        style={{
          width: "100%",
          maxWidth: "1250px",
          margin: "60px auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderRadius: "26px",
          overflow: "hidden",
          fontFamily: "URWGeometric, sans-serif",
        }}
      >
        {/* LEFT CARD */}
        <div
          style={{
            background: "linear-gradient(110deg,#DCE9FF,#A6C8FF)",
            padding: "60px 50px",
            position: "relative",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              padding: "8px 14px",
              background: "white",
              borderRadius: "50px",
              width: "fit-content",
              fontSize: "14px",
              color: "#1A2C48",
              marginBottom: "22px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <FiUser size={16} /> For Investors
          </div>

          <h1 style={{ fontSize: "46px", margin: 0, color: "#1E2A48", fontWeight: 400 }}>
            Invest Your Money Now
          </h1>

          <p
            style={{
              marginTop: "18px",
              maxWidth: "450px",
              fontSize: "18px",
              opacity: 0.8,
              lineHeight: "1.6",
            }}
          >
            Join 500+ investors who are earning returns by funding ethical businesses
            worldwide.
          </p>

          {/* CTA Button */}
          <button
            style={{
              marginTop: "28px",
              background: "#12264A",
              color: "#fff",
              padding: "15px 28px",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
            }}
          >
            Start Investing →
          </button>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "80px",
              marginTop: "50px",
              fontWeight: 400,
            }}
          >
            <div>
              <div style={{ fontSize: "26px" }}>8.5%</div>
              <div style={{ opacity: 0.6, fontSize: "14px" }}>Avg. Returns</div>
            </div>

            <div>
              <div style={{ fontSize: "26px" }}>500+</div>
              <div style={{ opacity: 0.6, fontSize: "14px" }}>Active Investors</div>
            </div>
          </div>

          {/* Hollow Circle */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "40px",
              width: "180px",
              height: "180px",
              borderRadius: "100%",
              border: "22px solid rgba(255,255,255,0.35)",
              opacity: 0.5,
            }}
          ></div>
        </div>

        {/* RIGHT CARD */}
        <div
          style={{
            background: "linear-gradient(110deg,#0A1B47,#132B72)",
            padding: "60px 50px",
            color: "#fff",
            position: "relative",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              padding: "8px 14px",
              background: "#041229",
              borderRadius: "50px",
              width: "fit-content",
              fontSize: "14px",
              marginBottom: "22px",
            }}
          >
            <FiTrendingUp size={16} /> For Businesses
          </div>

          <h1 style={{ fontSize: "46px", margin: 0, fontWeight: 400 }}>
            Fund Your Business Now
          </h1>

          <p
            style={{
              marginTop: "18px",
              maxWidth: "450px",
              fontSize: "18px",
              opacity: 0.9,
              lineHeight: "1.6",
            }}
          >
            Get fast access to capital through tokenization. Flexible terms up to £500k
            to grow your business.
          </p>

          {/* CTA Button */}
          <button
            style={{
              marginTop: "28px",
              background: "#FFCE33",
              color: "#1A1A1A",
              padding: "15px 28px",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 10px 22px rgba(255,205,50,0.4)",
              fontWeight: 400,
            }}
          >
            Get Funding →
          </button>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "80px",
              marginTop: "50px",
            }}
          >
            <div>
              <div style={{ fontSize: "26px" }}>£500k</div>
              <div style={{ opacity: 0.7, fontSize: "14px" }}>Max Funding</div>
            </div>

            <div>
              <div style={{ fontSize: "26px" }}>150+</div>
              <div style={{ opacity: 0.7, fontSize: "14px" }}>Funded Startups</div>
            </div>
          </div>

          {/* Hollow Circle */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "40px",
              width: "180px",
              height: "180px",
              borderRadius: "100%",
              border: "22px solid rgba(255,255,255,0.15)",
              opacity: 0.45,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
