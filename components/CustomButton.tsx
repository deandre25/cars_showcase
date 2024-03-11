'use client';

import { CustomButtomProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ title, btnType, containerStyles, handleClick, textStyles, rightIcon }: CustomButtomProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            alt="right icon"
            src={rightIcon}
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}
export default CustomButton;