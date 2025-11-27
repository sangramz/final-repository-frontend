import { FiTrendingUp, FiShield, FiZap, FiMapPin, FiCheckCircle } from "react-icons/fi";

export default function FeatureGrid() {
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "22px",
          maxWidth: "1150px",
          margin: "70px auto",
          fontFamily: "URWGeometric, sans-serif",
          fontWeight: 400
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            background: "linear-gradient(135deg,#0B1D46,#132B72)",
            color: "#fff",
            padding: "32px",
            borderRadius: "22px",
            height: "325px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "#FFE27A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "22px",
            }}
          >
            <FiTrendingUp size={28} color="#1A1A1A" />
          </div>

          <h3 style={{ fontSize: "2rem", margin: 0, fontWeight: 400 }}>
            Fast & Affordable Financing
          </h3>

          <p style={{ opacity: 0.8, marginTop: "16px", fontSize: "1rem", lineHeight: "1.6" }}>
            We offer secured and unsecured business financing with ticket sizes up to £500K and flexible repayment options.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", marginTop: "18px", gap: "10px" }}>
            {["Up to £500K", "36 month terms", "Fast approval"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "8px 12px",
                  borderRadius: "30px",
                  fontSize: "1.2rem",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            background: "#FFFFFF",
            color: "#1A1A1A",
            padding: "32px",
            borderRadius: "22px",
            border: "1px solid #EDEDED",
            height: "325px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "#E7F0FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "22px",
            }}
          >
            <FiShield size={28} color="#133B74" />
          </div>

          <h3 style={{ fontSize: "2rem", margin: 0 }}>Ethical & Sharia Compliant</h3>

          <p style={{ opacity: 0.8, marginTop: "16px", fontSize: "0.9rem", lineHeight: "1.6" }}>
            Every business undergoes strict compliance screening to ensure ethical financial alignment.
          </p>

          <ul style={{ fontSize: "1.5rem", marginTop: "12px", lineHeight: "1.4", listStyle: "none", padding: 0 }}>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FiCheckCircle size={18} color="#22C55E" /> 100% compliance screening
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FiCheckCircle size={18} color="#22C55E" /> Certified structure
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div
          style={{
            background:
              "url('https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1400') center/cover",
            padding: "32px",
            borderRadius: "22px",
            color: "white",
            height: "325px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "#FFE27A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "22px",
            }}
          >
            <FiZap size={28} color="#1A1A1A" />
          </div>

          <h3 style={{ fontSize: "2rem", margin: 0 }}>Built Differently</h3>

          <p style={{ opacity: 0.9, marginTop: "16px", fontSize: "0.9rem", lineHeight: "1.6" }}>
            Our platform is engineered for speed, transparency, and scalable innovation.
          </p>
        </div>

        {/* Card 4 */}
        <div
          style={{
            background: "#FFCC33",
            padding: "32px",
            borderRadius: "22px",
            color: "#1A1A1A",
            height: "325px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "#0B1D46",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "22px",
            }}
          >
            <FiMapPin size={28} color="#fff" />
          </div>

          <h3 style={{ fontSize: "2rem", margin: 0 }}>Growing in Kensington</h3>

          <p style={{ opacity: 0.8, marginTop: "16px", fontSize: "0.9rem", lineHeight: "1.6" }}>
            Our headquarters are based near High Street Kensington — and we’re expanding.
          </p>

          <div
            style={{
              marginTop: "18px",
              padding: "12px 16px",
              background: "#FFF1B1",
              borderRadius: "12px",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "fit-content",
            }}
          >
            <FiMapPin size={18} /> London, UK
          </div>
        </div>
      </div>
    </>
  );
}
