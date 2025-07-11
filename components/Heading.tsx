import React, { ReactNode } from "react";

const Heading = ({
  children,
  classList,
}: {
  children: ReactNode;
  classList?: string;
}) => {
  return (
    <h2 className={`text-[38px] font-semibold text-white ${classList}`}>
      {children}
    </h2>
  );
};

export default Heading;
