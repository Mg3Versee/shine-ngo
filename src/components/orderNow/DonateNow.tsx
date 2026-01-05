import Image from "next/image";
import React from "react";
import PageBanner from "../PageBanner";
import Razorpay from "../razorpay/Razorpay";

const DonateNow = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[260px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/donate-banner.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <PageBanner
            title="Donate Now"
            image="/service/servicebg.png"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="text-center">
          <h2 className="mb-6 text-xl font-semibold">DONATE NOW</h2>

          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Account Number:</strong> 5020004532302
            </p>
            <p>
              <strong>Account Name:</strong> SHINE
            </p>
            <p>
              <strong>HDFC Bank IFSC:</strong> HDFC0009017, Adibhatla Branch
            </p>
          </div>

          <p className="my-4 font-medium">(OR)</p>

          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>BHIM / UPI ID (GPay / Paytm / PhonePe / BHIM):</strong>
            </p>
            <p>shinenngo.eo@hdfcbank</p>
            <p>
              <strong>GPay Number:</strong> 8099990221
            </p>
          </div>

          <h3 className="mt-10 mb-4 text-lg font-semibold">FCRA DETAILS</h3>

          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Account Number:</strong> 40555354897
            </p>
            <p>
              <strong>Branch code:</strong> 00691
            </p>
            <p>
              <strong>IFSC:</strong> SBIN0000691
            </p>
            <p>
              <strong>SWIFT:</strong> SBININBB104
            </p>
          </div>

          <p className="mt-6 font-medium">BY UPI</p>

          {/* QR Section */}
          <div className="mt-6 flex flex-col items-center justify-center">
            <Image
              src="/beam-upi.jpg"
              alt="UPI QR Code"
              className="mt-4  object-contain"
              width={300}
              height={300}
            />

            <p className="mt-3 text-xs font-medium text-gray-600">
              SCAN & PAY WITH ANY UPI APP
            </p>
            <Razorpay />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonateNow;
