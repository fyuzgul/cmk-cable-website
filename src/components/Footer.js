import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import { useLoading } from "../contexts/LoadingContext";

const sections = [
  {
    title: "Solutions",
    items: [
      "Marketing",
      "Analytics",
      "Commerce",
      "Data",
      "Cloud",
      "Analytics",
      "Commerce",
      "Data",
    ],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  const { loading } = useLoading();

  if (loading) {
    return null;
  }

  return (
    <footer className="w-full bg-gray-900 text-white py-10 mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-full lg:col-span-2 lg:mb-0 border-b lg:border-b-0 lg:border-r border-gray-700 pb-8 lg:pb-0">
            <a
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start mb-12"
            >
              <svg
                className="w-40 h-8"
                viewBox="0 0 164 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </a>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non urna lectus.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="denem"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-full lg:col-span-1">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
