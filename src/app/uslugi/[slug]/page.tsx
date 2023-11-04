"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

interface ISericePage {
  params: any;
}

const ServicePage: FC<ISericePage> = ({ params }) => {
  console.log(params.slug);

  return <div className="text-white">{params.slug}</div>;
};

export default ServicePage;
