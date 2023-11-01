import React from "react";
import WidthManager from "../WidthManager";
import Image from "next/image";

const RealizationsSection = () => {
  return (
    <section className="bg-lightGray w-full">
      <WidthManager>
        <section className="flex flex-col gap-16 lg:gap-24 px-2 py-8">
          <div className="flex-col flex lg:flex-row lg:gap-12 gap-8">
            <div className="flex-1 flex justify-center flex-col gap-4 lg:max-w-[500px]">
              <h2 className="bold text-3xl lg:text-4xl">Domy prywatne</h2>
              <p className="lg:text-lg">
                Oczyścić i odświeżyć swój dom z naszymi usługami sprzątania
                domów prywatnych. Nasza doświadczona ekipa zadba o każdy kąt,
                pozostawiając wnętrza nieskazitelnie czyste. Oferujemy pełen
                zakres usług, w tym odkurzanie, mycie podłóg, mycie okien,
                czyszczenie łazienek i kuchni. Dzięki elastycznym terminom i
                konkurencyjnej cenie, nasza firma sprzątająca dostosowuje się do
                Twoich potrzeb i harmonogramu. Pozwól nam zająć się sprzątaniem,
                a Ty ciesz się czystością i świeżością swojego domu.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center lg:p-10">
              <div className=" grow shrink lg:basis-1 relative h-[500px] rounded-lg">
                <Image
                  alt="posprzatany dom"
                  src="/home-clean.jpg"
                  fill
                  sizes="604px"
                  className="absolute rounded-lg z-0 object-cover	object-center"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 ">
            <div className="flex-1 flex justify-center flex-col gap-4  lg:order-2">
              <h2 className="bold text-3xl lg:text-4xl t">
                Przestrzeń biurowa
              </h2>
              <p className="lg:text-lg ">
                Usługa sprzątania biur polega na kompleksowym utrzymaniu
                czystości w miejscu pracy. Obejmuje odkurzanie, mycie podłóg,
                dezynfekcję powierzchni, czyszczenie sanitariatów, opróżnianie
                koszy na śmieci. Sprzątanie biur pomaga stworzyć higieniczne i
                przyjazne środowisko pracy, co zwiększa komfort i efektywność
                pracowników.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center lg:p-10 lg:pl-0 lg:order-1">
              <div className="grow shrink lg:basis-1 relative h-[500px] rounded-lg">
                <Image
                  alt="posprzatany dom"
                  src="/home-clean.jpg"
                  fill
                  sizes="604px"
                  className="absolute rounded-lg z-0 object-cover	object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex-col flex lg:flex-row lg:gap-12 gap-8">
            <div className="flex-1 flex justify-center flex-col gap-4 lg:max-w-[500px]">
              <h2 className="bold text-3xl lg:text-4xl">
                Budowa w stanie deweloperskim
              </h2>
              <p className="lg:text-lg">
                Usługa sprzątania budowy w stanie developerskim polega na
                usuwaniu pozostałości po budowie, oczyszczaniu powierzchni,
                usuwaniu etykiet, czyszczeniu sanitariatów, usuwaniu
                niebezpiecznych materiałów i porządkowaniu terenu wokół budynku.
                Obejmuje to usuwanie gruzu, kamieni i innych elementów, aby
                przywrócić nowo zbudowany obiekt do stanu czystości i
                bezpieczeństwa przed przekazaniem klientowi.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center lg:p-10">
              <div className=" grow shrink lg:basis-1 relative h-[500px] rounded-lg">
                <Image
                  alt="posprzatany dom"
                  src="/home-clean.jpg"
                  fill
                  sizes="604px"
                  className="absolute rounded-lg z-0 object-cover	object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </WidthManager>
    </section>
  );
};

export default RealizationsSection;
