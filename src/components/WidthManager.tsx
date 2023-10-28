import React, { FC } from "react";

interface IWidthManager {
  children: JSX.Element;
}

const WidthManager: FC<IWidthManager> = ({ children }) => {
  return (
    <div className="px-2 max-w-7xl lg:px-4 mx-auto h-full w-full">
      {children}
    </div>
  );
};

export default WidthManager;
