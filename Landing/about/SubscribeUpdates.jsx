import { FiMail } from "react-icons/fi";

export default function SubscribeUpdates() {
  return (
    <>
      {/* Font face */}
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
          margin: "80px auto",
          padding: "65px 70px",
          background: "linear-gradient(90deg, #FAFAFA, #F8F9FB)",
          borderRadius: "36px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          overflow: "hidden",
          boxShadow: "0px 15px 45px rgba(0,0,0,0.09)",
          fontFamily: "URWGeometric, sans-serif",
        }}
      >
        {/* Faint right image overlay */}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            width: "55%",
            height: "100%",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1603415527301-8d8a5f0e4f03?q=80&w=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        ></div>

        {/* Badge */}
        <div
          style={{
            background: "#EAF0FF",
            padding: "10px 20px",
            borderRadius: "50px",
            width: "fit-content",
            fontSize: "15px",
            color: "#1A2A48",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 2,
          }}
        >
          <FiMail size={18} /> Stay Updated
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "42px",
            margin: 0,
            marginTop: "10px",
            zIndex: 2,
            fontWeight: 400,
            color: "#1A1A1A",
          }}
        >
          Get Emireq Updates
        </h2>

        {/* Description */}
        <p
          style={{
            maxWidth: "550px",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#4A4A4A",
            opacity: 0.9,
            zIndex: 2,
            marginTop: "-5px",
          }}
        >
          Sign up to get notified when our latest offers go live, relevant news
          and more from the world of ethical tokenization.
        </p>

        {/* Email + Subscribe Row */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "20px",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <input
            type="email"
            placeholder="Enter your email address..."
            style={{
              flex: 1,
              padding: "18px 22px",
              borderRadius: "14px",
              border: "1px solid #D8DFEC",
              fontSize: "16px",
              outline: "none",
              fontFamily: "URWGeometric",
            }}
          />

          <button
            style={{
              padding: "18px 35px",
              background: "#0C2454",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: 400,
              boxShadow: "0 8px 22px rgba(0,0,0,0.2)",
              transition: "0.2s",
            }}
          >
            Subscribe
          </button>
        </div>

        {/* Consent Text */}
        <p
          style={{
            fontSize: "14px",
            opacity: 0.7,
            marginTop: "4px",
            zIndex: 2,
          }}
        >
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </>
  );
}
