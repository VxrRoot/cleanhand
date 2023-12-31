import React, { FC } from "react";

interface IHeadline {
  text: string;
  style?: string;
}

const SectionHeadline: FC<IHeadline> = ({ text, style }) => {
  return (
    <h2 className={`text-4xl font-bold ${style} lg:text-5xl text-center`}>
      {text}
    </h2>
  );
};

export default SectionHeadline;
