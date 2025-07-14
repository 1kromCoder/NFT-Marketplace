import React, { FC, ReactNode } from "react";

const CreatorLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      Single creator logo, content
      {children}
    </>
  );
};

export default CreatorLayout;
