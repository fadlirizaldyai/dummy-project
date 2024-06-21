import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";

import IconMenu from "@/components/IconMenu";
import {
  AllMenuIcon,
  CutiPenggantiIcon,
  EmergencyContactIcon,
  KeyboardArrowRightIcon,
  PayslipIcon,
  PeduliLindungi2Icon,
  PersonalInfomartionIcon,
  RequestLeaveIcon,
} from "@/components/icon";
import HeaderSection from "@/components/Header";
import FooterMenu from "@/components/FooterMenu";
import HomeCarousel from "@/components/Carousel/Carousel";
import { cookies } from 'next/headers'

const Menus = [
  { icon: <PersonalInfomartionIcon />, label: "Personal Information" },
  { icon: <RequestLeaveIcon />, label: "Request Leave" },
  { icon: <PayslipIcon />, label: "Payslip" },
  { icon: <CutiPenggantiIcon />, label: "Cuti Pengganti" },
  { icon: <EmergencyContactIcon />, label: "Emergency Contact" },
  { icon: <AllMenuIcon />, label: "All Menu", url: "/all-menus" },
];
const isCheckinPeduliLindungi = true;
const OPTIONS: EmblaOptionsType = {};
const slides = [
  "/img/home-banner-1.svg",
  "/img/thumbnail_image_1.png",
  "/img/thumbnail_image_2.png",
];

export default function Home() {
  const cookieStore = cookies()
  // const token = cookieStore.get('token')

  const cookies = cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ))

  return (
    <main className="w-full pb-16 relative">
      <HeaderSection />

      <div>
        <HomeCarousel options={OPTIONS} slides={slides} />
      </div>

      <h2>TOKEN:{cookies}</h2>

      <section className="py-4 px-5">
        <div className="mb-6 flex gap-2">
          {isCheckinPeduliLindungi ? (
            <>
              <button className="py-3 px-2 flex justify-between items-center border border-bg-gray bg-bg-gray bg-opacity-20 rounded-lg w-full">
                <div className="flex items-center gap-2">
                  <Image
                    alt="peduli-lindungi-icon"
                    src={"/icon/peduli-lindungi-icon.svg"}
                    width={24}
                    height={24}
                  />
                  <p className="text-tertiary-text text-xs leading-4">
                    PeduliLindungi
                  </p>
                </div>
              </button>
              <button className="py-3 px-2 flex justify-between items-center border border-bg-gray bg-bg-gray bg-opacity-20 rounded-lg w-full">
                <div className="flex items-center gap-2">
                  <PeduliLindungi2Icon />
                  <p className="text-tertiary-text text-xs leading-4">
                    Daily Health Survey
                  </p>
                </div>
              </button>
            </>
          ) : (
            <button className="py-3 px-2 flex justify-between items-center border border-bg-gray bg-bg-gray bg-opacity-20 rounded-lg w-full">
              <div className="flex items-center gap-2">
                <Image
                  alt="peduli-lindungi-icon"
                  src={"/icon/peduli-lindungi-icon.svg"}
                  width={24}
                  height={24}
                />
                <p className="text-tertiary-text text-sm leading-4">
                  Check-in PeduliLindungi
                </p>
              </div>
              <KeyboardArrowRightIcon />
            </button>
          )}
        </div>
        <div className="grid grid-cols-3 gap-x-9 gap-y-7 content-center">
          {Menus.map((menu, idx) => (
            <IconMenu
              key={idx}
              icon={menu.icon}
              label={menu.label}
              url={menu.url}
            />
          ))}
        </div>
      </section>

      <FooterMenu />
    </main>
  );
}
