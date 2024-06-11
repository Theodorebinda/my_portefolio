import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero").offsetHeight;
      if (window.scrollY >= heroHeight) {
        setNavbarVisible(true);
      } else if (window.scrollY >= heroHeight) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="relative">
      <div
        className={`fixed top-0 left-0 w-full z-30 ${
          navbarVisible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <div className="flex justify-between items-center p-3">
          <div className="flex justify-start items-center ">
            <span>Theodore Samba</span>
            <img
              className="w-6"
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1718022670/Portefolio/LogoSite.png"
              alt="logo du site"
            ></img>
          </div>
          <ul className="flex gap-5">
            <li>
              <Link to="#">Accueil</Link>
            </li>
            <li>
              <Link to="#service">Service</Link>
            </li>
            <li>
              {" "}
              <Link to="#Competence">Competence</Link>
            </li>
            <li>
              {" "}
              <Link to="#Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
