"use client";
import Link from "next/link";
import { FC, useState } from "react";

const links = [
  { name: "Usługi", href: "/uslugi" },
  { name: "Realizacje", href: "/realizacje" },
  { name: "O nas", href: "/o-nas" },
  { name: "Kontakt", href: "/kontakt" },
];

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-end items-center w-auto relative lg:justify-center lg:order-2">
      <div
        className={`w-full justify-start pt-[20%] flex backdrop-blur-[8px] bg-azure transition-opacity duration-500 fixed  ${
          isOpen ? "top-0 opacity-100 z-50" : "top-[-100vh] opacity-0"
        } right-0 left-0 h-screen flex-col lg:opacity-100 lg:space-x-16 items-center space-y-14 lg:flex lg:flex-row lg:h-full lg:relative lg:top-auto lg:left-auto lg:right-auto lg:space-y-0 lg:py-0 lg:bg-inherit lg:justify-center lg:backdrop-filter-none lg:backdrop-blur-none`}
      >
        {links.map(({ name, href }, idx) => (
          <Link href={href} legacyBehavior key={idx} scroll={true}>
            <a
              className={`text-gray-400 transition-all hover:text-teal whitespace-nowrap ${
                isOpen ? "text-black" : "text-white"
              }`}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {name}
            </a>
          </Link>
        ))}
      </div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`lg:hidden hover:cursor-pointer  ${
          isOpen ? "z-50 fixed top-12 right-4" : "space-y-2 absolute"
        } right-2 w-6 h-6`}
      >
        <span
          className={`block w-8 h-0.5  ${isOpen ? "bg-black" : "bg-white"} ${
            isOpen && "-rotate-45"
          }`}
        />
        <span
          className={`block w-8 h-0.5 ${
            isOpen && "-translate-y-0.5 rotate-45"
          } ${isOpen ? "bg-black" : "bg-white"}`}
        />
        <span
          className={`${
            isOpen ? "hidden bg-black" : "block bg-white"
          } w-8 h-0.5 `}
        />
      </div>
    </nav>
  );
};

export default Nav;
