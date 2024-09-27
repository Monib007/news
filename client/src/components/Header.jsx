import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";


const Header = () => {
  const [active, setActive] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const categories = [
    "business",
"crime",
"domestic",
"education",
"entertainment",
"environment",
"food",
"health",
"lifestyle",
"other",
"politics",
"science",
"sports",
"technology",
"top",
"tourism",
"world",
  ];

  const handleMouseEnter = () => {
    setCategoryDropdown(true);
  };

  const handleMouseLeave = () => {
    setCategoryDropdown(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    if(isDarkTheme) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <header>
      <nav className="navbar">
      <h3 className="news-title">The News</h3>


        <ul className={`nav-ul ${active ? "active" : ""}`}>
          <li>
            <Link className="" to="/" onClick={() => setActive(!active)}>
              All News
            </Link>
          </li>

          <li
            className="dropdown-list"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span onClick={() => setCategoryDropdown(!categoryDropdown)}>
              Top-Headlines
            </span>
            {categoryDropdown && (
              <ul className="category-dropdown">
                {categories.map((category, index) => {
                  return (
                    <li key={index}>
                      <Link to={`${category}`}>{category}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>

          <li>
            <Link to="#" onClick={toggleTheme}>
              <label htmlFor="checkbox" className="checkbox-label">
                <i className={isDarkTheme ? "fas fa-sun" : "fas fa-moon" }></i>
                <span className="ball"></span>
              </label>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
