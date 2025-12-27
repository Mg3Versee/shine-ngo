import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";


export default function CovidWidowWomen() {
  return (
    <div >
      <PageBanner title="Covid Widow Women" image="/service/servicebg.png" />

      <section className="w-full max-w-7xl mx-auto py-16 px-52 md:flex gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-700 leading-7 text-justify">
          <p>
            Women are strong, resilient, and adaptable. But over the past year...
          </p>

          <p className="mt-4">
            Despite the fact that this epidemic has served as a reminder...
          </p>

          <p className="mt-4">
            Please keep in mind that you are a fighter who is not alone...
          </p>
        </div>

        {/* RIGHT SIDEBAR */}
        <ServicesSidebar active="Covid Widow Women" />
      </section>
    </div>
  );
}
