"use client";
import { BiCheck } from "react-icons/bi";
import React from "react";
import { services } from "@/data/services";
import WidthManager from "../WidthManager";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/sea-green";
import BookButton from "../Buttons/BookButton";

const ServicesSection = () => {
  return (
    <section className="bg-azure w-full">
      <WidthManager>
        <Splide
          options={{
            autoplay: true,
            type: "loop",
            perPage: 3, // Wyświetl 3 slajdy na desktopie
            perMove: 1,
            gap: "2rem",
            pagination: false,
            arrows: false,
            breakpoints: {
              640: {
                perPage: 1,
                gap: "8px",
              },
              1000: {
                perPage: 2,
                gap: "1rem",
              },
            },
          }}
        >
          {services.map((item) => (
            <SplideSlide className="px-2" key={item.id}>
              <div
                key={item.id}
                className="bg-[#abf2ee]/30 grow shrink lg:basis-1 h-[500px] rounded-lg border-2 hover:cursor-pointer border-teal hover:border-[#004d4d] hover:shadow-servicesHover transition-all duration-300 flex flex-col"
              >
                <div className="z-20  text-black flex flex-col  items-center p-4 h-full gap-4 ">
                  <p className="font-bold text-center text-2xl">{item.title}</p>
                  <p className="w-full text-xl">{item.price} PLN / H</p>
                  <div className=" w-full">
                    {item.services.map((item, idx) => {
                      return (
                        <div key={idx} className="flex gap-4 items-center">
                          <BiCheck />
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-center w-full py-2">
                  <button className="w-full rounded-full text-xl bg-teal text-white hover:bg-white hover:text-black border-2 hover:border-teal uppercase m-4 p-4 transition-all duration-200">
                    Rezerwuj
                  </button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </WidthManager>
    </section>
  );
};

export default ServicesSection;
