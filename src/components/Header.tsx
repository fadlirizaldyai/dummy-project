import Image from "next/image";
import React from "react";

const HeaderSection = () => {
  return (
    <div className="py-3 px-4 flex items-center justify-between">
      <Image
        alt="logo-astra"
        src={"/img/logo-astra-small.svg"}
        width={69.37}
        height={21.06}
      />
      <Image
        alt="logo-hcis"
        src={"/img/logo-hcis-landscape.svg"}
        width={75}
        height={26}
      />
    </div>
  );
};

export default HeaderSection;
