"use client";

import React from "react";
import { Input } from "@headlessui/react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  BusinessTripIcon,
  DisplayRequestStatusIcon,
  EmergencyContactIcon,
  InboxMenuIcon,
  MagnifyingGlassIcon,
  MyBenefitIcon,
  PayslipIcon,
  PersonalInfomartionIcon,
  SPPGIcon,
  SptTahunanIcon,
  SuratPajakIcon,
  TimeManagementIcon,
} from "@/components/icon";
import IconMenu, { IMenuIconProps } from "@/components/IconMenu";
import { useRouter } from "next/navigation";

interface IMenuList {
  label: string;
  menus: IMenuIconProps[];
}

const Menus = [
  {
    icon: <PersonalInfomartionIcon />,
    label: "Personal Information",
    url: "/",
  },
  { icon: <TimeManagementIcon />, label: "Time Management", url: "/" },
  { icon: <MyBenefitIcon />, label: "My Benefit", url: "/" },
  { icon: <BusinessTripIcon />, label: "Business Trip", url: "/" },
  { icon: <EmergencyContactIcon />, label: "Emergency Contact", url: "/" },
];

const Menus2 = [
  {
    icon: <PayslipIcon />,
    label: "Payslip",
    url: "/",
  },
  { icon: <SptTahunanIcon />, label: "SPT Tahunan 1721 - A1", url: "/" },
  { icon: <SuratPajakIcon />, label: "Surat Pernyataan Pajak", url: "/" },
  { icon: <SPPGIcon />, label: "SPPG", url: "/" },
  {
    icon: <DisplayRequestStatusIcon />,
    label: "Display Request Status",
    url: "/",
  },
  { icon: <InboxMenuIcon />, label: "Inbox", url: "/" },
];

const MasterMenu: IMenuList[] = [
  { label: "Personal Information", menus: Menus },
  { label: "My Benefit", menus: Menus },
  { label: "Time Management", menus: Menus },
  { label: "My Reporting", menus: Menus2 },
  { label: "IT Self Service", menus: Menus },
  { label: "Emergency Contact", menus: Menus },
];

const AllMenus = () => {
  const router = useRouter();
  return (
    <div className="bg-white mb-20">
      <div className="px-6 py-3 flex justify-between items-center gap-7 shadow-[0_1px_2px_0_#00000029]">
        <div className="cursor-pointer" onClick={() => router.back()}>
          <ArrowLeftIcon />
        </div>
        <div className="w-full relative">
          <Input
            type="text"
            placeholder="Search"
            className={
              "w-full h-10 rounded-[50px] border border-idle bg-main-gray ps-5 pr-10 py-2"
            }
          />
          <MagnifyingGlassIcon className="absolute right-4 top-3" />
        </div>
      </div>

      <div>
        <div className="h-[55px] px-6 flex items-center justify-between border-b border-line-gray border-opacity-20">
          <h4 className="text-[15px] leading-5 text-main-text">
            Privacy Policy
          </h4>
          <button className="py-[10px] px-5 bg-main-color font-bold text-xs leading-[15px] text-white rounded-[50px]">
            Ubah
          </button>
        </div>

        <div className="px-6 py-8 bg-secondary-color grid grid-cols-3 gap-8">
          {Menus.map((menu, idx) => (
            <IconMenu
              key={idx}
              icon={menu.icon}
              label={menu.label}
              url={menu.url}
            />
          ))}
        </div>
      </div>

      <section>
        {MasterMenu.map((menu, idx) => (
          <Disclosure as="div" defaultOpen={false} key={idx}>
            <DisclosureButton className="group flex w-full items-center justify-between h-[55px] px-6 border-b border-line-gray border-opacity-20">
              <span className="text-[15px]/5 font-medium text-main-text">
                {menu.label}
              </span>
              <ArrowDownIcon className="transition-all group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel>
              <div className="px-6 py-8 bg-secondary-color grid grid-cols-3 gap-8">
                {menu.menus.map((item, idx) => (
                  <IconMenu
                    key={idx}
                    icon={item.icon}
                    label={item.label}
                    url={item.url}
                  />
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </section>
    </div>
  );
};

export default AllMenus;
