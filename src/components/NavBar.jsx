import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div className="bg-[url('https://res.cloudinary.com/dhdaxlymt/image/upload/v1718025904/Portefolio/cf9ufxmk7cnysia6tir8.png')]">
        <div className="flex justify-between items-center p-3">
          <div className="flex justify-start items-center ">
            <span>Theodore Samba</span>
            <img
              className="w-10"
              src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1718022670/Portefolio/LogoSite.png"
              rel="logo du site"
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
