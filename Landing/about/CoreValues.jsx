import { FiShield, FiZap, FiUsers } from "react-icons/fi";

export default function CoreValues() {
  return (
    <>
      {/* Font Load */}
      <style>
        {`
        @font-face {
          font-family: "URWGeometric";
          src: url("/fonts/URWGeometricRegular.otf") format("opentype");
          font-weight: 400;
        }
      `}
      </style>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "90px auto",
          textAlign: "center",
          fontFamily: "URWGeometric, sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            background: "#E8EEFF",
            padding: "10px 22px",
            borderRadius: "50px",
            width: "fit-content",
            margin: "0 auto",
            fontSize: "14px",
            color: "#44557A",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ fontSize: "16px" }}>⭐</span> WHAT DRIVES US
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "42px",
            marginTop: "20px",
            color: "#1A1A1A",
            fontWeight: 400,
          }}
        >
          Our Core Values
        </h1>

        {/* --- Cards Grid --- */}
        <div
          style={{
            marginTop: "55px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
          }}
        >
          {/* Card 1 */}
          <CoreValueCard
            icon={<FiShield size={24} color="#ffffff" />}
            bgIcon="#112B63"
            title="Trust & Security"
            text="Building trust through complete transparency and enterprise-grade security in every transaction."
            circleColor="rgba(200,209,230,0.25)"
          />

          {/* Card 2 */}
          <CoreValueCard
            icon={<FiZap size={24} color="#000" />}
            bgIcon="#FFCD00"
            title="Innovation First"
            text="Continuously pushing boundaries with cutting-edge blockchain technology and smart solutions."
            circleColor="rgba(255,231,181,0.35)"
          />

          {/* Card 3 */}
          <CoreValueCard
            icon={<FiUsers size={24} color="#ffffff" />}
            bgIcon="#1A37D5"
            title="Community Focused"
            text="Our community of entrepreneurs and investors is at the heart of everything we do."
            circleColor="rgba(210,220,245,0.45)"
          />
        </div>
      </div>
    </>
  );
}

/* ---- Reusable Card Component ---- */
function CoreValueCard({ icon, bgIcon, title, text, circleColor }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "22px",
        padding: "40px",
        textAlign: "left",
        border: "1px solid #E9E9E9",
        position: "relative",
        overflow: "hidden",
        minHeight: "210px",
      }}
    >
      {/* Soft Overlay Circle */}
      <div
        style={{
          position: "absolute",
          right: "-30px",
          top: "-20px",
          width: "130px",
          height: "130px",
          background: circleColor,
          borderRadius: "50%",
        }}
      ></div>

      {/* Icon Box */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "12px",
          background: bgIcon,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <h3 style={{ fontSize: "20px", margin: 0, fontWeight: 400 }}>{title}</h3>
      <p
        style={{
          marginTop: "10px",
          fontSize: "16px",
          opacity: 0.75,
          lineHeight: "1.6",
          maxWidth: "90%",
        }}
      >
        {text}
      </p>
    </div>
  );
}
