"use client";
import { useRouter } from "next/navigation";
import React from "react";

export interface IMenuIconProps {
  icon: React.ReactNode;
  label: string;
  url?: string;
}

const IconMenu = (props: IMenuIconProps) => {
  const { icon, label, url } = props;
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center gap-[7px] cursor-pointer"
      onClick={() => router.push(url ?? "/")}
      {...props}
    >
      <div className="h-[85px] w-[85px] rounded-[20px] bg-main-gray flex justify-center items-center">
        {icon}
      </div>
      <p className="text-xs leading-[15px] text-center">{label}</p>
    </div>
  );
};

export default IconMenu;
