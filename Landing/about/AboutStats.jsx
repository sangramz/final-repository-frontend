export default function AboutStats() {
  const stats = ["500+", "$2M+", "150+", "40+"];

  return (
    <>
      {/* Load Font */}
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
          maxWidth: "1050px",
          margin: "70px auto",
          background: "#F7F7F7",
          borderRadius: "30px",
          padding: "28px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "URWGeometric, sans-serif",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 500,
              color: "#000",
              position: "relative",
            }}
          >
            {item}

            {/* Vertical Divider (except last) */}
            {index !== stats.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "40px",
                  width: "1px",
                  background: "#D9D9D9",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
