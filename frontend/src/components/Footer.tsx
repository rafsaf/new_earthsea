import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="wrapper">
        <h2 className="footer-heading">Baza wiedzy o Ziemiomorzu</h2>

        <div className="footer-col-wrapper">
          <div className="footer-col footer-col-1">
            <ul className="contact-list">
              <li>Kontakt</li>
              <li>
                <a href="mailto:rafal.safin@rafsaf.pl" target="_blank">
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
                >
                  Projekt na Githubie
                </a>
              </li>
              <li>
                <Link to="/add">Dodawanie zawartości</Link>
              </li>
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
