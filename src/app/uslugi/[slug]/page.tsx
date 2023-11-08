"use client";
import React, { FC } from "react";
import { IService, services } from "@/data/services";
import WidthManager from "@/components/WidthManager";
import { BiCheck } from "react-icons/bi";

interface ISericePage {
  params: any;
}

const ServicePage: FC<ISericePage> = ({ params }) => {
  const service = services.find((item) => item.slug === params.slug);

  return (
    <main className="text-black bg-azure py-16">
      <WidthManager>
        <div>
          <h1 className="text-4xl pb-16">{service?.title}</h1>
          {service?.services.map((item, idx) => {
            return (
              <div key={idx} className="flex gap-4 items-center">
                <BiCheck />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </WidthManager>
    </main>
  );
};

export default ServicePage;
