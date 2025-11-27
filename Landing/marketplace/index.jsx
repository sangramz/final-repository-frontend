import { useEffect } from "react";
import MarketplaceHero from "./MarketplaceHero";
import MarketplaceLayout from "./MarketplaceLayout";
import StartupsSection from "./StartupSection";
import TopStartups from "./TopStartups";
import TrendingCompanies from "./TrendingCompanies";

export default function Marketplace() {

  useEffect(() => {
    const preventZoom = (e) => {
      if (e.ctrlKey || e.metaKey || e.touches?.length > 1) {
        e.preventDefault();
      }
    };

    // Prevent pinch + Ctrl zoom
    window.addEventListener("wheel", preventZoom, { passive: false });
    window.addEventListener("keydown", preventZoom);
    document.addEventListener("gesturestart", preventZoom);
    document.addEventListener("gesturechange", preventZoom);

    return () => {
      window.removeEventListener("wheel", preventZoom);
      window.removeEventListener("keydown", preventZoom);
      document.removeEventListener("gesturestart", preventZoom);
      document.removeEventListener("gesturechange", preventZoom);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @font-face {
            font-family: "URWGeometric";
            src: url("../URWGeometricRegular.otf") format("opentype");
            font-weight: 400;
            font-style: normal;
          }
        `}
      </style>

      {/* Outer scroll-block container matching App.css */}
      <div className="no-horizontal-scroll">

        {/* Matching App scale-wrapper */}
        <div className="scale-wrapper">

          {/* Matching container system */}
          <div className="container marketplace-container">

            <MarketplaceHero />

            <div style={{ marginTop: "-2rem" }} />
            <MarketplaceLayout />

            <div style={{ marginTop: "-2rem" }} />
            <StartupsSection />

            <div style={{ marginTop: "10rem" }} />
            <TopStartups />

            <div style={{ marginTop: "10rem" }} />
            <TrendingCompanies />

          </div>
        </div>
      </div>
    </>
  );
}
