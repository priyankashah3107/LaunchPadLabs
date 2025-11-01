import clsx from "clsx";

interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const SharedButton = ({ label, size = "small", className }: ButtonProps) => {
  const baseStyles =
    "flex items-center justify-center bg-gradient-to-t from-sky-500 to-blue-800 text-white font-semibold rounded-[31px] shadow-[0px_2px_4px_0px_rgba(30,113,229,0.15),0px_7px_7px_0px_rgba(30,113,229,0.13),0px_17px_10px_0px_rgba(30,113,229,0.08),0px_30px_12px_0px_rgba(30,113,229,0.02),0px_46px_13px_0px_rgba(30,113,229,0)] outline outline-2 outline-offset-[-2px] outline-blue-300 overflow-hidden";

  const sizeStyles = {
    small: "w-36 h-12 text-base",
    medium: "w-44 h-14 text-lg",
    large: "w-52 h-16 text-xl",
  };

  return (
    <button className={clsx(baseStyles, sizeStyles[size], className)}>
      {label}
    </button>
  );
};

export default SharedButton;
