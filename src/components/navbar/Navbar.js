import Logo from "./Logo";
import HamburgerButton from "../../components/buttons/HamburgerButton";
import NavbarItem from "./NavbarItem";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";
import classNames from "classnames";
import GetOfferButton from "../buttons/GetOfferButton";
import { useLoading } from "../../contexts/LoadingContext";
import useFetchAllNavbarItems from "../../hooks/useFetchAllNavbarItems";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { navbarItems, dropdownItems } = useFetchAllNavbarItems();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const { loading } = useLoading();

  if (loading) {
    return null;
  }

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <HamburgerButton
            onClick={toggleMenu}
            ariaControls="navbar-sticky"
            ariaExpanded={isOpen}
          ></HamburgerButton>
        </div>
        <div
          className={classNames(
            "items-center justify-between w-full md:flex md:w-auto md:order-1",
            { block: isOpen, hidden: !isOpen }
          )}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navbarItems.map((navbarItem) => (
              <NavbarItem
                key={navbarItem.id}
                text={navbarItem.title}
                route={navbarItem.route}
                dropdownItems={
                  navbarItem.title === "Kurumsal" ? dropdownItems : []
                }
              />
            ))}
            <LanguageSelector />
            <GetOfferButton />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
