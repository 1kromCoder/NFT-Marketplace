import React, { ReactNode } from "react";
import { getCookie } from "cookies-next";
const Heading = ({
  children,
  classList,
  tag,
}: {
  children: ReactNode;
  classList?: string;
  tag: "h1" | "h2" | "h3";
}) => {
  if (tag === "h1") {
    return (
      <h2
        className={`text-[38px] font-semibold text-white leading-[130%] lg:text-[67px] lg:leading-[101%] ${classList}`}
      >
        {children}
      </h2>
    );
  }
  if (tag === "h2") {
    return (
      <h2
        className={`text-[38px] font-semibold text-white leading-[101%] ${classList}`}
      >
        {children}
      </h2>
    );
  }
  if (tag === "h3") {
    return (
      <h2
        className={`text-[22px] lg:text-[28px] font-semibold text-white leading-[140%] ${classList}`}
      >
        {children}
      </h2>
    );
  }
};

export default Heading;
