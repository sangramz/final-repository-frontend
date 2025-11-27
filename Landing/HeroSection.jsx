import "./hero.css";
import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiResults, setApiResults] = useState([]);

  const resultsRef = useRef(null);

  /* CLOSE MODAL WHEN CLICK OUTSIDE */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resultsRef.current && !resultsRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const normalizeResults = (data) => {
    const result = [];
    if (Array.isArray(data.startups)) result.push(...data.startups);
    if (Array.isArray(data.investors)) result.push(...data.investors);
    return result;
  };

  /* LIVE SEARCH */
  useEffect(() => {
    const delay = setTimeout(() => {
      if (!search.trim()) {
        setApiResults([]);
        setShowResults(false);
        return;
      }
      fetchQueryResults(search);
    }, 500);
    return () => clearTimeout(delay);
  }, [search]);

  const fetchQueryResults = async (query) => {
    setLoading(true);
    setSelectedOption("All");
    setShowResults(true);

    try {
      const response = await fetch(`/search/?q=${query}`);
      const data = await response.json();
      setApiResults(normalizeResults(data));
    } catch (err) {
      console.log("❌ Error Fetching Query:", err);
    }

    setLoading(false);
  };

  const fetchCategoryResults = async (category) => {
    setSearch("");
    setLoading(true);
    setShowResults(true);

    try {
      const response = await fetch(`/search/?type=${category.toLowerCase()}`);
      const data = await response.json();
      setApiResults(normalizeResults(data));
    } catch (err) {
      console.log("❌ Error Fetching Category:", err);
    }
    setLoading(false);
  };

  const handleResultClick = (item) => {
    setSearch(item.name);
    setShowResults(false);
    setSelectedOption("All");
  };

  return (
    <section className="hero">

      <h1 className="hero-title">
        Tokenize real-world <br /> opportunities
      </h1>

      <p className="hero-subtitle">
        Emireq empowers entrepreneurs to tokenize equity, revenue, and project
        shares — connecting them with <br /> investors across the globe.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Explore Marketplace</button>
      </div>

      {/* SEARCH MODULE */}
      <div className="hero-search-container">
        <div className="hero-search search-group"> {/* NEW WRAPPER */}

          <input
            type="text"
            placeholder="Search startups, tokens, or investors..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowResults(true);
            }}
          />

          {/* MATCH WIDTH DROPDOWN */}
          <div className="custom-select full-width">
            <div
              className="custom-select-trigger"
              onClick={() => setOpen(!open)}
            >
              {selectedOption} <span className="arrow">▾</span>
            </div>

            {open && (
              <div className="custom-options">
                {["All", "Startups", "Investors"].map((option) => (
                  <div
                    key={option}
                    className="custom-option"
                    onClick={() => {
                      setSelectedOption(option);
                      setOpen(false);
                      if (option !== "All") fetchCategoryResults(option);
                      else setApiResults([]);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="btn-search" disabled>Search</button>
        </div>

        {/* RESULTS PANEL */}
        {showResults && (
          <div className="search-results" ref={resultsRef}>

            {/* ⭐ AI DISCOVERY CARD (RESTORED) */}
            <div className="ai-discovery-card">
              <div className="ai-icon">
                <svg width="26" height="26" stroke="#4c6fff" fill="none" strokeWidth="2">
                  <path d="M12 3v2" />
                  <path d="M12 19v2" />
                  <path d="M5 5l1.5 1.5" />
                  <path d="M17.5 17.5L19 19" />
                  <path d="M3 12h2" />
                  <path d="M19 12h2" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <div>
                <h3 className="ai-title">AI-Powered Discovery</h3>
                <p className="ai-description">
                  Smart matching investors & startups with trends and scoring.
                </p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="search-results-title">
              {selectedOption === "All" ? "Search Results" : selectedOption}
            </div>

            {loading && (
              <div className="skeleton-wrapper">
                {[1,2,3,4].map(i => <div className="skeleton-line" key={i}></div>)}
              </div>
            )}

            {!loading && apiResults.length === 0 && (
              <div className="no-results">No results found.</div>
            )}

            {!loading &&
              apiResults.map((item) => (
                <div
                  className="trending-item"
                  key={item.id}
                  onClick={() => handleResultClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  <span>{item.name}</span>
                  <span className="trend-positive">{item.score ?? ""}</span>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
