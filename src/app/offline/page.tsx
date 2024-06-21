import Image from "next/image";
import React from "react";

const OfflinePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Image
        alt="offline-image"
        src={"/logo-astra_500x500.png"}
        width={150}
        height={150}
      />
      <h1>You&apos;re in offline mode</h1>
    </div>
  );
};

export default OfflinePage;
