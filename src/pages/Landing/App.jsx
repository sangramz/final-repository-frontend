// src/pages/Landing/App.jsx
import React from "react";
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import CategorySelector from "./CategorySelector.jsx";
import CryptoInsights from "./CryptoInsightsUpdate.jsx";
import Footer from "./Footer.jsx";
import hero from "./assets/hero.png";
import PortfolioSectionUpdated from "./PortfolioSectionUpdated.jsx";
import "./App.css";

const BusinessListingUpdated = React.lazy(() =>
  import("./BusinessListingUpdated.jsx")
);
const BlogListingUpdated = React.lazy(() =>
  import("./BlogListingUpdated.jsx")
);

export default function App() {
  return (
    <div className="landing-page">
      <Header />
      <main className="landing-main">
        <section className="landing-constrained">
          <HeroSection />
          <div className="landing-hero-media">
            <img src={hero} alt="Showcase" loading="eager" />
          </div>
        </section>

        <section className="landing-constrained landing-stack">
          <CategorySelector />
        </section>

        <section className="landing-constrained landing-stack">
          <CryptoInsights />
        </section>

        <section className="landing-constrained landing-stack">
          <PortfolioSectionUpdated />
        </section>

        <React.Suspense
          fallback={<div className="landing-loading">Loading…</div>}
        >
          <section className="landing-constrained landing-stack">
            <BusinessListingUpdated />
          </section>
          <section className="landing-constrained landing-stack">
            <BlogListingUpdated />
          </section>
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
}
