// * import assets
import { Link } from "react-router-dom";
import logo from "../assets/image/01.png";

const NavbarProject = () => {
  return (
    <>
      <div
        className="navbar-project bg-dark-primary flex justify-between py-5"
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1500"
        id="home"
      >
        <div className="01">
          <Link to={"/"}>
            <img className="block h-8 w-auto" src={logo} alt="01" />
          </Link>
        </div>
        <div className="hire">
          <a
            href="mailto: dedukwijaya@gmail.com"
            className="hover:no-underline flex justify-between gap-1 items-center bg-primary px-4 py-2 rounded-sm hover:bg-primary-hover"
            target={"blank"}
          >
            <div className="placeholder text-white text-sm font-semibold">
              Hire Me
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarProject;
