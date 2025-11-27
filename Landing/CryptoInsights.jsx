import React from "react";
import { motion } from "framer-motion";
import "./CryptoInsightsUpdate.css";
import { FiSearch, FiSun, FiBell, FiChevronUp, FiChevronDown, FiBarChart2 } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { SiBitcoin, SiEthereum, SiRipple } from "react-icons/si";

const REVEAL = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45, ease: "easeOut" }
  })
};

const topCoins = [
  { name: "Aurivox", code: "AVX", price: "$23,738", change: "+14.67%", color: "#F7D999", trend: "up" },
  { name: "Eminar", code: "EMN", price: "$23,738", change: "-14.67%", color: "#D1E9FF", trend: "down" },
  { name: "Xenara", code: "XNR", price: "$23,738", change: "+14.67%", color: "#DFF7E6", trend: "up" }
];

const tableData = [
  { name: "Aurivox", code: "AVX", price: "$200,000", changePct: "-1.32%", changeDollar: "$0.057", marketcap: "$213.8M", trend: "down", icon: <SiBitcoin /> },
  { name: "Eminar", code: "EMN", price: "$200,000", changePct: "+1.32%", changeDollar: "$0.146", marketcap: "$245.8M", trend: "up", icon: <SiEthereum /> },
  { name: "Xenara", code: "XNR", price: "$200,000", changePct: "+1.32%", changeDollar: "$0.450", marketcap: "$245.8M", trend: "up", icon: <SiRipple /> }
];

export default function CryptoInsights() {
  return (
    <motion.section
      className="ci-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="ci-inner">
        
        <motion.span className="ci-pill" {...SPILL}>
          Crypto Insights
        </motion.span>

        <motion.h1 className="ci-title" {...SPILL}>
          Insights into the Crypto Landscape
        </motion.h1>

        <motion.p className="ci-sub" {...SPILL}>
          Stay updated with real-time market data, trends, and analysis across the cryptocurrency ecosystem.
        </motion.p>

        {/* Metrics */}
        <div className="ci-metrics">
          {["41.5%", "$2.5 T", "$300 B"].map((d, i) => (
            <motion.div key={i} className="metric" custom={i} variants={REVEAL} initial="hidden" animate="visible">
              <div className="metric-value">{d}</div>
              <div className="metric-label">
                {i === 0 && "Bitcoin Dominance"}
                {i === 1 && "Total Market Capitalization"}
                {i === 2 && "24-Hour Trading Volume"}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard */}
        <motion.div className="dashboard" {...SPILL}>
          {/* Header */}
          <div className="dashboard-top">
            <div className="dashboard-title">Investment Portfolio Dashboard</div>

            <div className="dashboard-actions">
              <motion.button className="icon-btn" whileTap={{ scale: 0.9 }}><FiSun /></motion.button>

              <div className="search">
                <FiSearch className="search-icon" />
                <input className="search-input" placeholder="Search coins, tickers..." />
              </div>

              <motion.button className="icon-btn" whileTap={{ scale: 0.9 }}><FiBell /></motion.button>
              <FaUserCircle className="profile" />
            </div>
          </div>

          {/* Mini Cards */}
          <div className="mini-cards">
            {topCoins.map((coin, i) => (
              <motion.article
                key={i}
                className="mini-card"
                custom={i}
                variants={REVEAL}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180 }}
                viewport={{ once: true }}
              >
                <div className="mini-header">
                  <div className="mini-left">
                    <div className="badge-icon" style={{ background: coin.color }}>{coin.code[0]}</div>
                    <div className="badge-text">
                      <div className="coin-name">{coin.name}</div>
                      <div className="coin-code">{coin.code}</div>
                    </div>
                  </div>
                  <div className={`mini-change ${coin.trend}`}>{coin.change}</div>
                </div>

                <div className="mini-price">{coin.price}</div>

                <div className="mini-graph">
                  <svg viewBox="0 0 100 40" className="spark">
                    {coin.trend === "up"
                      ? <polyline points="0,32 20,28 40,22 60,14 80,8 100,6" />
                      : <polyline points="0,10 20,14 40,20 60,26 80,32 100,34" />}
                  </svg>
                </div>

                <div className="mini-footer">
                  <span>Tue, 14 Oct 2025</span>
                  <span className="mini-link">$23,738</span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Market Overview */}
          <motion.div className="market-heading" {...SPILL}>
            <h3 className="market-heading-title"><FiBarChart2 className="mh-ico" /> Market Overview</h3>
            <p className="mh-sub">Comprehensive token statistics trading information</p>
          </motion.div>

          {/* Table */}
          <motion.div className="table-wrap" {...SPILL}>
            <table className="market-table">
              <thead>
                <tr>
                  <th>Name</th><th>Price</th><th>Change(%)</th><th>Change($)</th><th>Marketcap</th><th>Trade</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, i) => (
                  <motion.tr
                    key={i}
                    whileHover={{ backgroundColor: "#fafafa" }}
                    transition={{ duration: 0.2 }}
                  >
                    <td>
                      <div className="row-name">
                        <div className="row-icon">{row.icon}</div>
                        <div>
                          <div className="row-title">{row.name}</div>
                          <div className="row-sub">{row.code}</div>
                        </div>
                      </div>
                    </td>

                    <td>{row.price}</td>

                    <td className={`trend ${row.trend}`}>
                      {row.trend === "up" ? <FiChevronUp /> : <FiChevronDown />}
                      {row.changePct}
                    </td>

                    <td className={`trend ${row.trend}`}>{row.changeDollar}</td>

                    <td>{row.marketcap}</td>

                    <td><motion.button className="trade-btn" whileTap={{ scale: 0.9 }}>Trade</motion.button></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div className="dashboard-note" {...SPILL}>
            Market data updates in real-time. Values may vary per exchange.
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

const SPILL = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 }
};
