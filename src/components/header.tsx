import React from "react";
import WidthManager from "./WidthManager";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import BookButton from "./Buttons/BookButton";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className=" h-24 bg-white flex flex-col z-50">
      <div className="flex-grow">
        <WidthManager>
          <div className="flex justify-center items-center lg:justify-end gap-6 h-full">
            <p>
              <a
                href="tel:+48123123123"
                className="text-black flex gap-2 items-center"
              >
                <BsFillTelephoneFill /> <span> +48 123 456 789</span>
              </a>
            </p>
            <p className="text-black h-full hidden lg:flex">
              <a
                href="mailto:office.cleanhand@gmail.com"
                className="flex gap-2 items-center h-full"
              >
                <HiMail /> <span>office.cleanhand@gmail.com</span>
              </a>
            </p>
          </div>
        </WidthManager>
      </div>
      <div className="bg-gray h-14">
        <WidthManager>
          <div className="grid grid-rows-1 grid-cols-3 items-center h-full">
            <div className="h-10 w-24 bg-teal justify-self-start" />
            <div className="justify-self-center lg:justify-self-end lg:order-3">
              <BookButton text="Rezerwuj sprzątanie" />
            </div>
            <Nav />
          </div>
        </WidthManager>
      </div>
    </header>
  );
};

export default Header;
