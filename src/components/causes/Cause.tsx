import React from "react";

const Cause: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-[11px] font-semibold tracking-[0.3em] text-[#b49a4a]">
          WHAT WE DO
        </p>

        <h2 className="mb-4 text-2xl font-bold text-[#222] md:text-3xl">
          Shine NGO <span className="text-[#c79b2e]">CAUSES</span>
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-sm leading-relaxed text-[#666] md:text-[15px]">
         Shinengo old age home organizes several seminars &amp; events
          to arouse individuals to come forward and be a part of this large
          public welfare in supporting the change that's for good and inspire
          even others to join.
        </p>

        {/* stats row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {/* item 1 */}
          <div className="max-w-xs px-2">
            <div className="mb-2 text-4xl font-bold text-[#444] md:text-[42px]">
              650+
            </div>
            <p className="text-sm leading-relaxed text-[#555]">
              We provide daily food for mentally disabled orphans
            </p>
          </div>

          {/* vertical divider (hidden on small screens) */}
          <div className="hidden h-16 w-px bg-[#e0e0e0] md:block" />

          {/* item 2 */}
          <div className="max-w-xs px-2">
            <div className="mb-2 text-4xl font-bold text-[#444] md:text-[42px]">
              15k+
            </div>
            <p className="text-sm leading-relaxed text-[#555]">
              Supporting our cause with generosity since 2010
            </p>
          </div>

          {/* example extra card – remove if not needed */}
          {/*
          <div className="hidden h-16 w-px bg-[#e0e0e0] md:block" />
          <div className="max-w-xs px-2">
            <div className="mb-2 text-4xl font-bold text-[#444] md:text-[42px]">
              120+
            </div>
            <p className="text-sm leading-relaxed text-[#555]">
              Dedicated volunteers contributing every month
            </p>
          </div>
          */}
        </div>
      </div>

      {/* bottom gradient bar shape */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-3 w-[110%] -translate-x-1/2 rounded-t-2xl bg-gradient-to-r from-[#c79b2e] to-[#f0b849]" />
    </section>
  );
};

export default Cause;
