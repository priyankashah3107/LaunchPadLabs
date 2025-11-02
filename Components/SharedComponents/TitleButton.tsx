// components/SharedComponents/TitleButton.tsx
import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface TitleButtonProps {
  text: string;
  variant?: "default" | "light";
}

const TitleButton: React.FC<TitleButtonProps> = ({
  text,
  variant = "default",
}) => {
  return (
    <div
      className={clsx(
        "flex h-11 w-40 items-center justify-center rounded-[31px] overflow-hidden",
        variant === "default" && "bg-zinc-100",
        variant === "light" && "bg-white"
      )}
    >
      {/* Inner white pill – now full width, centered content */}
      <div className="flex h-9 w-[calc(100%-16px)] items-center justify-center rounded-[83px] bg-white px-4 gap-2">
        {/* Dot */}
        <Image
          src="/dot.png"
          alt="Impact dot"
          width={16}
          height={16}
          className="h-4 w-4 flex-shrink-0"
          priority
        />

        {/* Text – forced single line */}
        <p className="whitespace-nowrap text-sm font-medium text-black">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TitleButton;
