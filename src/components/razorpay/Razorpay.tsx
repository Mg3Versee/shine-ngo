"use client";

import { useEffect } from "react";

const Razorpay = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_PYfTM4b41WtCVH");
    script.async = true;

    const container = document.getElementById("razorpay-button-container");
    container?.appendChild(script);

    return () => {
      container?.removeChild(script);
    };
  }, []);

  return <form className="mt-8" id="razorpay-button-container"></form>;
};

export default Razorpay;
