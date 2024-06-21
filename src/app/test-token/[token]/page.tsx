"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

const TokenPage = () => {
  const { token } = useParams();

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch("http://localhost:3000/api/auth", {
        method: "POST",
        headers: {
          Authorization: "Bearer HERE MY TOKEN", // Replace with your actual token
        },
        credentials: "include",
      });

      console.log("Response", response);
      if (response.redirected) {
        window.location.href = response.url;
      }
    };

    fetchToken();
  }, []);

  return (
    <div>
      <h1>Processing...</h1>
    </div>
  );
};

export default TokenPage;
