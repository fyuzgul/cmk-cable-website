import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavbarItem({ text, route, dropdownItems }) {
  const { t } = useTranslation();

  return (
    <li className="relative group py-2">
      {dropdownItems.length > 0 && route === "/corporate" ? (
        <>
          <button className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-red-700 md:hover:bg-transparent md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 flex items-center">
            {text}
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 z-10 hidden group-hover:block">
            <ul>
              {dropdownItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.route}
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-red-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-red-500"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <NavLink
          to={route}
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          aria-current="page"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {text}
        </NavLink>
      )}
    </li>
  );
}

export default NavbarItem;
