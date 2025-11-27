import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Load Font */}
      <style>
        {`
        @font-face {
          font-family: "URWGeometric";
          src: url("/fonts/URWGeometricRegular.otf") format("opentype");
          font-weight: 400;
        }
      `}
      </style>

      <footer
        style={{
          width: "100%",
          maxWidth: "1350px",
          margin: "120px auto 50px",
          fontFamily: "URWGeometric, sans-serif",
          color: "#1A1A1A",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: "40px",
            alignItems: "flex-start",
          }}
        >
          {/* Logo + About */}
          <div>
            {/* UPDATED — logo only */}
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ width: "110px", height: "auto", marginBottom: "18px" }}
            />

            <p style={{ marginTop: "6px", maxWidth: "230px", opacity: 0.7 }}>
              Commodo nec mi id ullamcorper vitae augue neque dis.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "14px", marginTop: "22px" }}>
              <SocialIcon icon={<FaTwitter size={16} />} />
              <SocialIcon icon={<FaFacebookF size={16} />} />
              <SocialIcon icon={<FaLinkedinIn size={16} />} />
              <SocialIcon icon={<FaYoutube size={16} />} />
              <SocialIcon icon={<FaInstagram size={16} />} />
            </div>
          </div>

          {/* Column: Products */}
          <FooterColumn
            title="Products"
            links={["Tokenization", "Marketplace", "How it works", "Startups"]}
          />

          {/* Column: Resources */}
          <FooterColumn
            title="Resources"
            links={["Learn & Explore", "Insights", "Investment guide", "FAQ"]}
          />

          {/* Column: Company */}
          <FooterColumn
            title="Company"
            links={["About us", "Careers", "Press & Media", "Blog", "Contact Us"]}
          />

          {/* Column: Support */}
          <FooterColumn
            title="Support"
            links={["Help Center", "Security & Trust", "Disclaimer"]}
          />
        </div>

        {/* Divider */}
        <div
          style={{
            margin: "50px 0",
            height: "1px",
            background: "#E5E7EB",
          }}
        ></div>

        {/* Newsletter Row */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: 500 }}>Stay in the loop</h3>
            <p style={{ opacity: 0.65, fontSize: "15px", marginTop: "6px" }}>
              Subscribe to our newsletter for the latest crypto insights and market updates.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flex: 1 }}>
            <input
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: "16px 20px",
                fontSize: "16px",
                borderRadius: "12px",
                border: "1px solid #E1E5EE",
                outline: "none",
                fontFamily: "URWGeometric",
              }}
            />
            <button
              style={{
                background: "#FFCC00",
                border: "none",
                padding: "0 28px",
                borderRadius: "12px",
                fontSize: "16px",
                cursor: "pointer",
                height: "52px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            opacity: 0.7,
          }}
        >
          <span>© 2025 EMIREQ. All rights reserved.</span>

          <div style={{ display: "flex", gap: "22px" }}>
            <a href="#" style={linkStyle}>
              Privacy Policy
            </a>
            <a href="#" style={linkStyle}>
              Terms of Service
            </a>
            <a href="#" style={linkStyle}>
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* Helpers */
function SocialIcon({ icon }) {
  return (
    <div
      style={{
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        background: "#F3F4F6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {icon}
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 style={{ fontSize: "15px", fontWeight: 500, marginBottom: "18px" }}>
        {title}
      </h4>
      {links.map((link) => (
        <p key={link} style={{ margin: "8px 0", opacity: 0.7, cursor: "pointer" }}>
          {link}
        </p>
      ))}
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#1A1A1A",
  opacity: 0.7,
  cursor: "pointer",
};
