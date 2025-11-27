import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./categorySelector.css";
import {
  FiCheckCircle,
  FiShoppingCart,
  FiHeart,
  FiCpu,
  FiGrid,
} from "react-icons/fi";
import { MdRealEstateAgent } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";

const categoriesData = [
  { id: 1, name: "Technology", icon: <FiCpu />, count: 634, color: "#7D6BFF" },
  { id: 2, name: "Real Estate", icon: <MdRealEstateAgent />, count: 634, color: "#4DD4AC" },
  { id: 3, name: "Healthcare", icon: <FiHeart />, count: 634, color: "#FFAFAF" },
  { id: 4, name: "AI & Machine Learning", icon: <GiByzantinTemple />, count: 634, color: "#BFA3FF" },
  { id: 5, name: "E-Commerce", icon: <FiShoppingCart />, count: 634, color: "#4EC4FF" },
  { id: 6, name: "Events & Entertainment", icon: <FiGrid />, count: 634, color: "#F5D059" },
  { id: 7, name: "Fashion & Beauty", icon: <GiByzantinTemple />, count: 634, color: "#FFB6E1" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function CategorySelector() {
  const [selected, setSelected] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleCategory = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    setTimeout(() => setShowTooltip(true), 400);
  }, []);

  return (
    <motion.div
      className="category-wrapper"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      {/* Stepper */}
      <div className="stepper">
        <div className="step done">
          <FiCheckCircle size={22} />
          <span>Setup</span>
        </div>

        <div className="line active"></div>

        <div className="step active">
          <div className="circle">2</div>
          <span>Pick Category</span>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="circle">3</div>
          <span>Explore</span>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          className="tooltip-box"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Select the topics you want — we’ll tailor your experience.
        </motion.div>
      )}

      {/* Title */}
      <h2 className="title">Choose your Categories</h2>

      {/* Category Grid */}
      <div className="categories-grid">
        {categoriesData.map((cat) => (
          <motion.div
            key={cat.id}
            className={`category-card ${selected.includes(cat.id) ? "active" : ""}`}
            onClick={() => toggleCategory(cat.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="category-left">
              <motion.div
                className="category-icon"
                style={{ background: cat.color }}
                animate={{
                  scale: selected.includes(cat.id) ? 1.12 : 1,
                  rotate: selected.includes(cat.id) ? 3 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                {cat.icon}
              </motion.div>

              <div className="category-text">
                <h4>{cat.name}</h4>
                <p>{cat.count} Opportunities</p>
              </div>
            </div>

            {/* Fixed Toggle Wrapper */}
            <div className="toggle-wrapper">
              <label className="switch" onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={selected.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </motion.div>
        ))}

        {/* Empty Card */}
        <motion.div
          className="category-card empty-card"
          whileHover={{ scale: 1.03 }}
        >
          <FiGrid size={32} opacity={0.4} />
          <p>Browse All</p>
        </motion.div>
      </div>

      {/* Continue */}
      {selected.length > 0 && (
        <motion.div
          className="continue-box"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Great! Continue to finalize your onboarding →
        </motion.div>
      )}

      {/* Footer */}
      <div className="footer-actions">
        <span className="clear" onClick={() => setSelected([])}>Clear all</span>
        <button className="btn-continue">Continue</button>
      </div>
    </motion.div>
  );
}
