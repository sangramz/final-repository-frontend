import React from "react";
import { motion } from "framer-motion";
import "./header.css";
import logo from "./assets/logo.png";

const Header = ({ setActiveScreen }) => {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
    >
      <div className="header-inner">

        {/* LOGO */}
        <motion.div 
          className="col logo-col"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          <img src={logo} alt="emireq logo" className="logo" />
        </motion.div>

        {/* NAVIGATION LINKS */}
        <motion.nav 
          className="col nav-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22, duration: 0.4 }}
        >
          {["Marketplace", "Tokenize", "Investors", "Events", "About"].map((label) => (
            <motion.a
              key={label}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveScreen(label.toLowerCase());
              }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 240 }}
            >
              {label}
            </motion.a>
          ))}
        </motion.nav>

        {/* BUTTONS */}
        <motion.div 
          className="col btn-col"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.35 }}
        >
          <motion.button 
            className="btn-startups"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
          >
            Startups
          </motion.button>

          <motion.button 
            className="btn-investors"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
          >
            Investors
          </motion.button>
        </motion.div>

      </div>
    </motion.header>
  );
};

export default Header;
