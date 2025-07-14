import { ButtonType } from "@/@types/Buttontype";
import React, { FC } from "react";

const Button: FC<ButtonType> = ({
  icon,
  iconPosition,
  title,
  type,
  extraClass,
  variant,
}) => {
  return (
    <button
      type={type}
      className={`py-[18px] px-[30px] cursor-pointer ${
        variant == "outlined" ? "border-[#A259FF] border-[2px]" : "bg-[#A259FF]"
      } text-white rounded-[20px] font-semibold text-[16px], flex items-center gap-3 ${extraClass}`}
    >
      {iconPosition == "left" && icon}
      {title}
      {iconPosition == "right" && icon}
    </button>
  );
};

export default Button;
