"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import { useDotButton } from "./useDotButton";
import "./style.css";
import Link from "next/link";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const HomeCarousel = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2500 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index: number) => (
            <div className="embla__slide" key={index}>
              <Image
                src={slide}
                alt={`banner-${index}`}
                className="w-full h-full"
                width={376}
                height={185}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between px-6 py-2 border-b border-idle">
        <div className="flex items-center gap-1">
          {scrollSnaps.map((_, index: number) => {
            if (index === selectedIndex) {
              return (
                <div
                  className="w-[26px] h-[6px] rounded-[20px] bg-main-color"
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                ></div>
              );
            } else {
              return (
                <div
                  className="w-[6px] h-[6px] bg-tertiary-gray rounded-full"
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                ></div>
              );
            }
          })}
        </div>
        <Link
          href={"/"}
          className="text-xs text-main-color font-bold leading-4"
        >
          Lihat semua informasi
        </Link>
      </div>
    </section>
  );
};

export default HomeCarousel;
