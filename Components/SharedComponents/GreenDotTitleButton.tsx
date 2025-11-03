import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface TitleButtonProps {
  text: string;
  variant?: "default" | "light";
  size?: "default" | "medium" | "large";
  className?: string; // custom class for text
}

const GreenDotTitleButton: React.FC<TitleButtonProps> = ({
  text,
  variant = "default",
  size = "default",
  className,
}) => {
  return (
    <div
    //   className={clsx(
    //     "flex items-center justify-center rounded-[31px] overflow-hidden",
    //     variant === "default" && "bg-zinc-100",
    //     variant === "light" && "bg-white",
    //     size === "default" && "h-11 w-40",
    //     size === "medium" && "h-12 w-48",
    //     size === "large" && "h-14 w-56"
    //   )}
    >
      <div
        className={clsx(
          "flex items-center justify-center rounded-full border border-[#A7CFFF] bg-white gap-2 ",
          size === "default" && "h-9 w-[calc(100%-16px)] px-4",
          size === "medium" && "h-10 w-[calc(100%-18px)] px-5",
          size === "large" && "h-11 w-[calc(100%-20px)] px-6"
        )}
      >
        <Image
          src="/greendot.png"
          alt="Impact dot"
          width={16}
          height={16}
          className={clsx(
            "flex-shrink-0",
            size === "default" && "h-4 w-4",
            size === "medium" && "h-4 w-4",
            size === "large" && "h-4 w-4"
          )}
          priority
        />

        {/* ✅ Customizable text via className */}
        <p
          className={clsx(
            "whitespace-nowrap font-medium text-black",
            size === "default" && "text-sm",
            size === "medium" && "text-base",
            size === "large" && "text-sm",
            className
          )}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default GreenDotTitleButton;
