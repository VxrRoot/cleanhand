import React from "react";
import WidthManager from "../WidthManager";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/herobg.jpg')`,
      }}
      className="w-full h-full max-h-[calc(100vh-95px)] bg-cover bg-center flex items-center pt-[95px] overflow-hidden"
    >
      <div className="w-full min-h-screen h-full relative overflow-hidden flex flex-col justify-center">
        <div className="z-10">
          <WidthManager>
            <div className="mx-auto max-w-4xl text-white -mt-20 z-20">
              <p className="text-center text-base lg:text-xl ">
                My Sprzątamy, Ty odpoczywasz!
              </p>
              <h1 className="text-center text-3xl lg:text-5xl py-3">
                Dzięki naszemu doświadczeniu i zaangażowaniu, zapewnimy Ci
                czystość i świeżość, jakiej potrzebujesz.
              </h1>
              <h2 className="text-center text-base lg:text-xl ">
                Oferujemy szeroki zakres usług sprzątania, obejmujący
                czyszczenie domów, mieszkań, biur, a także usługi
                specjalistyczne, takie jak pranie dywanów i mycie okien.
                Sprawdź, co możemy zrobić dla Ciebie!
              </h2>
            </div>
          </WidthManager>
        </div>
        <div className="opacity-70 bg-black w-full absolute h-full  " />
      </div>
    </section>
  );
};

export default HeroSection;
