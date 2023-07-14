import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./Header.css";
import { IonIcon } from "@ionic/react";
import { searchOutline, moon, sunny } from "ionicons/icons";

export const Header = (props) => {
  const navigate = useNavigate();

  const toggleTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <header>
      <nav className="header-nav">
        <Link className="header-logo" to="/">
          <img src={Logo} alt="Logo image" />
          <span className="header-title">Cinemate</span>
        </Link>
        <div className="links">
          <NavLink to="/" className="link" end>
            Home
          </NavLink>
          <NavLink to="/movies/popular" className="link">
            Popular
          </NavLink>
          <NavLink to="/movies/top" className="link">
            Top Rated
          </NavLink>
          <NavLink to="/movies/upcoming" className="link">
            Upcoming
          </NavLink>
        </div>

        <div className="search-box">
          <button onClick={toggleTheme} className="dark-button">
            <IonIcon icon={props.theme === "light" ? moon : sunny}></IonIcon>
          </button>
          <div className="search-bar">
            <IonIcon className="search-icon" icon={searchOutline}></IonIcon>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search..."
                id="search"
                name="search"
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
