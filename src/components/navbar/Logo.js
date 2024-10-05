import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logos/logo.png";

function Logo() {
  return (
    <NavLink
      to="/"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img src={logoImg} className="h-16 w-auto" alt="Flowbite Logo" />{" "}
    </NavLink>
  );
}
export default Logo;
