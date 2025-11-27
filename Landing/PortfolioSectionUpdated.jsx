import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./PortfolioSectionUpdated.css";
import { FiArrowUpRight } from "react-icons/fi";

function PortfolioSectionUpdated() {
  const cards = [
    { tag: "Growth", title: "Scaled SaaS", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=600&q=70" },
    { tag: "Scaling", title: "Tripled Revenue", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&w=600&q=70" },
    { tag: "Pre-Seed", title: "Build MVP", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=600&q=70" },
    { tag: "Acquisition", title: "B2B Exit", img: "https://images.unsplash.com/photo-1581091011903-39f3df9669b2?auto=format&w=600&q=70" }
  ];

  const scrollRef = useRef(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const visibleWidth = scrollRef.current.offsetWidth;
      setDragWidth(scrollWidth - visibleWidth);
    }
  }, []);

  return (
    <section className="portfolio-wrapper">

      {/* TOP ROW */}
      <div className="top-row">
        <div className="top-left">
          <span className="tag">PORTFOLIO</span>
          <h1 className="title">
            We Invest in <span className="blue">Founders</span>
            <br /> Building the Future
          </h1>
        </div>

        <div className="top-right">
          <p className="subtitle">
            Join successful startups that have raised funding through our platform.
            From pre-seed to Series A, we support founders at every stage.
          </p>

          <button className="learn-btn">
            Learn More <FiArrowUpRight />
          </button>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="bottom-row">

        {/* Yellow Highlight Card */}
        <div className="yellow-card fade-item">
          <div>
            <div className="investors">
              <img src="https://randomuser.me/api/portraits/men/41.jpg" loading="lazy" alt="" />
              <img src="https://randomuser.me/api/portraits/women/21.jpg" loading="lazy" alt="" />
              <img src="https://randomuser.me/api/portraits/men/11.jpg" loading="lazy" alt="" />
              <span>+750 Active Investors</span>
            </div>

            <h2>750+ Members Invest On This Project</h2>
            <p>Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam.</p>
          </div>
        </div>

        {/* Horizontal Scroll Cards */}
        <motion.div ref={scrollRef} className="scroll-container">
          <motion.div
            className="scroll-inner"
            drag="x"
            dragConstraints={{ left: -dragWidth, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {cards.map((card, i) => (
              <motion.div key={i} className="p-card scroll-card" whileHover={{ scale: 1.05 }}>
                <div className="p-card-tag">{card.tag}</div>
                <img src={card.img} alt={card.title} loading="lazy" />
                <div className="p-card-title">{card.title}</div>
                <FiArrowUpRight className="card-arrow" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}

export default React.memo(PortfolioSectionUpdated);
