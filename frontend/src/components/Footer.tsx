import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BASE_API_URL } from "../api/api";
import SettingsContext from "./utils/settingsContext";

const Footer = () => {
  const { isLoggedIn, setJwtToken } = useContext(SettingsContext);
  let history = useHistory();
  const handleLogOut = () => {
    setJwtToken(null);
    history.replace("/");
  };

  return (
    <footer className="site-footer">
      <div className="wrapper">
        <h2 className="footer-heading">Baza wiedzy o Ziemiomorzu</h2>

        <div className="footer-col-wrapper">
          <div className="footer-col footer-col-1">
            <ul className="contact-list">
              <li>Kontakt</li>
              <li>
                <a
                  href="mailto:rafal.safin@rafsaf.pl"
                  rel="noreferrer"
                  target="_blank"
                >
                  rafal.safin@rafsaf.pl
                </a>
              </li>
              <li style={{ marginTop: 7 }}>&#169; rafsaf.pl 2021</li>
            </ul>
          </div>

          <div className="footer-col footer-col-2">
            <ul className="contact-list">
              <li>Inne</li>
              <li>
                <a
                  href="https://github.com/rafsaf/new_earthsea"
                  target="_blank"
                  rel="noreferrer"
                >
                  Projekt na Githubie
                </a>
              </li>
              <li>
                <Link to="/add">Dodawanie zawartości</Link>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href={BASE_API_URL}>
                  Link to REST API
                </a>
              </li>
              {isLoggedIn() ? (
                <li>
                  <button onClick={handleLogOut}>Wyloguj</button>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="footer-col footer-col-3">
            <p>
              Jestem Software Developerem z Wrocławia i wielkim fanem serii
              Ziemiomorze. Prawa autorskie do książek z cyklu należą do Ursuli
              Le Guin.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
