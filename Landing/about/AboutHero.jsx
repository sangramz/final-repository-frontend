export default function AboutHero() {
  return (
    <>
      {/* Font Load */}
      <style>
        {`
          @font-face {
            font-family: 'URWGeometric';
             src: url("/fonts/URWGeometricRegular.otf") format("opentype");
            font-weight: 400;
            font-style: normal;
          }
        `}
      </style>

      <div
        style={{
          width: "100%",
          padding: "80px 20px",
          textAlign: "center",
          fontFamily: "URWGeometric, sans-serif",
          background: "linear-gradient(to bottom, #ffffff, #fafbff)",
        }}
      >
        {/* ===== Badge (TOP) ===== */}
        <div
          style={{
            padding: "10px 22px",
            width: "fit-content",
            margin: "0 auto",
            borderRadius: "14px",
            background: "linear-gradient(90deg, #C8DFFF, #F9EEC3)",
            color: "#142A53",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "30px",
          }}
        >
          ABOUT EMIREQ
        </div>

        {/* ===== Title larger by +20px ===== */}
        <h1
          style={{
            fontSize: "86px", // original was 46 → +20
            fontWeight: 400,
            marginBottom: "14px",
            color: "#1A1A1A",
          }}
        >
          About Emireq
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "30px",
            maxWidth: "680px",
            margin: "0 auto",
            lineHeight: "1.6",
            opacity: 0.65,
            marginBottom: "40px",
          }}
        >
          Emireq is the first ethical sharia-compliant business tokenization
          platform, making capital accessible to entrepreneurs worldwide.
        </p>

        {/* CTA */}
        <button
          style={{
            background: "#142A53",
            border: "none",
            padding: "15px 38px",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "17px",
            cursor: "pointer",
            marginBottom: "60px",
          }}
        >
          Start Tokenizing →
        </button>

        {/* ===== IMAGE STRUCTURE ===== */}
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          {/* Main large banner */}
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1400"
            style={{
              width: "100%",
              height: "260px",
              borderRadius: "18px",
              objectFit: "cover",
              filter: "grayscale(100%)",
              marginBottom: "14px",
            }}
          />

          {/* Two row images */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
              position: "relative",
            }}
          >
         <img
    src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1200"
    style={{
      width: "100%",
      height: "200px",
      borderRadius: "18px",
      objectFit: "cover",
    }}
  />

  <img
   src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1200"
    style={{
      width: "100%",
      height: "200px",
      borderRadius: "18px",
      objectFit: "cover",
    }}
  />
            {/* Floating Badge on Images */}
            <div
              style={{
                position: "absolute",
                left: "-20px",
                bottom: "-30px",
                background: "#fff",
                padding: "12px 18px",
                borderRadius: "14px",
                boxShadow: "0px 8px 30px rgba(0,0,0,0.07)",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {/* Icon Badge color */}
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "#1E3EFF",
                }}
              ></div>

              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "12px", opacity: 0.55 }}>
                  Total Funded
                </div>
                <div style={{ fontSize: "18px", fontWeight: 600 }}>
                  150+ Startups
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
