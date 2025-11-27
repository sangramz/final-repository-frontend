import { motion } from "framer-motion";

import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import CoreValues from "./CoreValues";
import FeatureGrid from "./FeatureGrid";
import Footer from "./Footer";
import InvestFundingSection from "./InvestFundingSection";
import SubscribeUpdates from "./SubscribeUpdates";
import WhyChoose from "./WhyChoose";

export default function AboutPage() {
  return (
    <>
      {/* Global Font */}
      <style>
        {`
          @font-face {
            font-family: 'URWGeometric';
            src: url('/fonts/URWGeometricRegular.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
          }

          html, body {
            font-family: 'URWGeometric', sans-serif;
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Page Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        {/* All Sections Centered */}
        <div
          style={{
            width: "100%",
            maxWidth: "1500px",
            display: "flex",
            flexDirection: "column",
            gap: "90px",
            alignItems: "center",
          }}
        >

          <AboutHero />
          <AboutStats />
          <FeatureGrid />
          <InvestFundingSection />
          <CoreValues />
          <WhyChoose />
          <SubscribeUpdates />

        </div>

        {/* Footer Full Width */}
        <div style={{ width: "100%", marginTop: "110px" }}>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}
