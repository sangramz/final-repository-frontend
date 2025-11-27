import "./Footer.css";
import { FiTwitter, FiFacebook, FiLinkedin, FiYoutube, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bottom-banner">
      <div className="footer-wrapper">

        {/* --- TOP ROW --- */}
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-section brand">
            <img src="/assets/logo.png" alt="EMIREQ" className="footer-logo" />
            <p className="brand-desc">
              Commodo nec mi id ullamcorper vitae augue neque dis.
            </p>

            <div className="footer-social">
              <FiTwitter />
              <FiFacebook />
              <FiLinkedin />
              <FiYoutube />
              <FiInstagram />
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}
          <div className="footer-section">
            <h4>Products</h4>
            <a>Tokenization</a>
            <a>Marketplace</a>
            <a>How it works</a>
            <a>Startups</a>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <a>Learn & Explore</a>
            <a>Insights</a>
            <a>Investment guide</a>
            <a>FAQ</a>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <a>About us</a>
            <a>Careers</a>
            <a>Press & Media</a>
            <a>Blog</a>
            <a>Contact Us</a>
          </div>

         
        </div>

        {/* --- FINAL ROW --- */}
        <div className="footer-bottom">
          <p>© 2025 EMIREQ. All rights reserved.</p>

          <div className="footer-links">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Cookie Policy</a>
          </div>
        </div>

      </div>
    </div>
  );
}
