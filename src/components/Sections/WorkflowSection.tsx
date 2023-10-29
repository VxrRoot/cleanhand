import React from "react";
import SectionHeadline from "../Headlines/SectionHeadline";
import Image from "next/image";
import WidthManager from "../WidthManager";

const workflow = [
  {
    number: "1",
    title: "Zamów usługę w dogodnym terminie",
    desc: "Dzięki naszej usłudze zyskasz czystą i zadbaną przez profesjonalistów przestrzeń do użytkowania",
    alt: "Alt text",
  },
  {
    number: "2",
    title: "Przyjmij naszą ekipę w wybranym miejscu",
    desc: "Dzięki naszej usłudze zyskasz czystą i zadbaną przez profesjonalistów przestrzeń do użytkowania",
    alt: "Alt text",
  },
  {
    number: "3",
    title: "Ciesz się wysprzątanym wnętrzem",
    desc: "Dzięki naszej usłudze zyskasz czystą i zadbaną przez profesjonalistów przestrzeń do użytkowania",
    alt: "Alt text",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-14 lg:py-16 bg-azure w-full">
      <SectionHeadline text="Sprawdź jak działamy" style="text-black" />
      <WidthManager>
        <div className="flex flex-col lg:flex-row my-14 lg:my-16 gap-16">
          {workflow.map((item) => {
            return (
              <div
                key={item.number}
                className="bg-black grow shrink lg:basis-1 relative h-[500px] rounded-lg"
              >
                <Image
                  alt={item.alt}
                  src="/wf-ex-blurred.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="absolute rounded-lg z-0 opacity-30"
                />
                <div className="z-20 absolute text-white flex flex-col justify-around items-center p-4 h-full shadow-workflow hover:shadow-workflowHover transition-all duration-300 ">
                  <p className="text-center text-5xl">{item.number}</p>
                  <p className="text-center text-2xl">{item.title}</p>
                  <p className="text-center text-xl">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </WidthManager>
    </section>
  );
};

export default WorkflowSection;
