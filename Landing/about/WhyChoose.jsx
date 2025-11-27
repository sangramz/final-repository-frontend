import { FiAward, FiShield, FiGlobe, FiTrendingUp, FiUsers, FiTarget } from "react-icons/fi";

export default function WhyChoose() {
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
          maxWidth: "1200px",
          margin: "100px auto",
          fontFamily: "URWGeometric, sans-serif",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1 style={{ fontSize: "44px", fontWeight: 400, color: "#1A1A1A", marginBottom: "60px" }}>
          Why Choose Emireq
        </h1>

        {/* 6-Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {features.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

/* ---- Feature List ---- */
const features = [
  {
    icon: <FiAward size={22} color="#10224A" />,
    title: "Regulatory Compliance",
    desc: "Built with regulatory frameworks in mind to ensure secure and compliant transactions.",
  },
  {
    icon: <FiShield size={22} color="#10224A" />,
    title: "Secure Infrastructure",
    desc: "Enterprise-grade security protocols protect your investments and sensitive data.",
  },
  {
    icon: <FiGlobe size={22} color="#10224A" />,
    title: "Global Reach",
    desc: "Connect with investors and opportunities from around the world, breaking geographical barriers.",
  },
  {
    icon: <FiTrendingUp size={22} color="#10224A" />,
    title: "Smart Analytics",
    desc: "Make informed decisions with real-time analytics and market insights powered by AI.",
  },
  {
    icon: <FiUsers size={22} color="#10224A" />,
    title: "Dedicated Support",
    desc: "Our expert team is here to guide you through every step of your tokenization journey.",
  },
  {
    icon: <FiTarget size={22} color="#10224A" />,
    title: "Flexible Solutions",
    desc: "Tokenize equity, revenue shares, or project-based funding to match your unique needs.",
  },
];

/* ---- Card Component ---- */
function Card({ icon, title, desc }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "36px",
        borderRadius: "22px",
        border: "1px solid #ECECEC",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minHeight: "170px",
      }}
    >
      {/* Icon Box */}
      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "12px",
          background: "#ECF0FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>

      <h3 style={{ fontSize: "18px", margin: 0, fontWeight: 500, color: "#1A1A1A" }}>
        {title}
      </h3>

      <p style={{ fontSize: "14px", opacity: 0.7, lineHeight: "1.6" }}>{desc}</p>
    </div>
  );
}
