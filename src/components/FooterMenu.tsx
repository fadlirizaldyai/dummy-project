import React from "react";
import { AccountIcon, HomeIcon, InboxIcon } from "./icon";

const FooterMenu = () => {
  return (
    <footer className="fixed w-full left-0 bottom-0 bg-white flex justify-center">
      <div className="px-9 py-[5px] w-full md:w-[480px] flex justify-between md:justify-between xs:justify-evenly border-t border-idle">
        <div className="flex flex-col items-center max-w-[30px] cursor-pointer">
          <HomeIcon isActive={true} />
          <p className="text-[8px] leading-[15px] text-nowrap">Home</p>
        </div>
        <div className="flex flex-col items-center max-w-[30px] cursor-pointer">
          <InboxIcon />
          <p className="text-[8px] leading-[15px] text-nowrap">Inbox</p>
        </div>
        <div className="flex flex-col items-center max-w-[30px] cursor-pointer">
          <AccountIcon />
          <p className="text-[8px] leading-[15px] text-nowrap">Akun Saya</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
