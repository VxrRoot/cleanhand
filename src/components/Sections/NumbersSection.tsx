import React from "react";
import WidthManager from "../WidthManager";

const numbers = [
  {
    number: "45",
    text: "Klientów w Rzeszowie",
  },
  {
    number: "12",
    text: "Pracowników",
  },
  {
    number: "3",
    text: "Lata doświadczenia",
  },
  {
    number: "5000+",
    text: "Przepracowanych godzin",
  },
];

const NumbersSection = () => {
  return (
    <section className="bg-azure p-10 lg:h-72 w-full">
      <WidthManager>
        <div className="flex flex-col  lg:flex-row w-full h-full lg:justify-between gap-16">
          {numbers.map((item: { number: string; text: string }, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center flex-col"
            >
              <p className="font-bold text-4xl">{item.number}</p>
              <p className="text-2xl">{item.text}</p>
            </div>
          ))}
        </div>
      </WidthManager>
    </section>
  );
};

export default NumbersSection;
