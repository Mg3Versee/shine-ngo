import Image from "next/image";
import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";
          const childwidowImages = [
  { src: "/service/CovidWidowwomen/covid1.jpg" },
  { src: "/service/CovidWidowwomen/covid2.jpg" },
  { src: "/service/CovidWidowwomen/covid3.jpg" },
  { src: "/service/CovidWidowwomen/covid4.jpg" },

];
const CovidWidowWomen =()=> {
  return (
    <div >
      <PageBanner title="Covid Widow Women" image="/service/servicebg.png" />

      <section className="w-full px-20 md:flex gap-10">
        <div className="flex-1 text-gray-700 leading-7">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            COVID Widow Women Empowerment Program
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Free Skill Training & Livelihood Support for COVID Widow Women
          </p>
      <section className="my-10">
        <div className="max-w-6xl mx-auto text-gray-700 space-y-4 leading-relaxed">
          <p>
            The <strong>COVID Widow Women Empowerment Program</strong> by{" "}
            <strong>Shine NGO</strong> is a dedicated initiative aimed at
            supporting women who lost their husbands during the COVID-19
            pandemic. This program focuses on skill development,
            self-employment, and financial independence—helping women rebuild
            their lives with dignity and confidence.
          </p>

          <p>
            Shine NGO provides <strong>completely free vocational training and
            livelihood support</strong> to COVID widow women in Hyderabad and
            nearby areas.
          </p>
        </div>
      </section>

      {/* Empowerment Through Skills */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-800">
            Empowering COVID Widow Women Through Skills
          </h2>

          <p>
            The pandemic left many women emotionally shattered and financially
            vulnerable. Without a stable income or support system, COVID widow
            women face immense challenges in sustaining their families.
          </p>

          <p>
            Shine NGO believes empowerment comes through opportunity—not
            charity. Our program equips women with practical skills that lead to
            long-term income generation and self-reliance.
          </p>
        </div>
      </section>

      {/* Free Services */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Free Services Provided by Shine NGO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            {/* Tailoring */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                🧵 Free Tailoring Course
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Start home-based stitching work</li>
                <li>Take garment orders locally</li>
                <li>Earn a stable monthly income</li>
              </ul>
            </div>

            {/* Flour Mill */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                ⚙️ Free Flour Mill Machine
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Run small milling services from home</li>
                <li>Earn within their community</li>
                <li>Balance family and work responsibilities</li>
              </ul>
            </div>

            {/* Beautician */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                💄 Free Beautician Course
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Learn professional beauty skills</li>
                <li>Offer home services or salon work</li>
                <li>Become self-employed entrepreneurs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Who Can Benefit
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>COVID widow women</li>
            <li>Economically disadvantaged women</li>
            <li>Women seeking self-employment opportunities</li>
            <li>Women motivated to rebuild their lives</li>
          </ul>
        </div>
      </section>

      {/* Why Shine NGO */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Why Choose Shine NGO
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>100% free training programs</li>
            <li>Focus on sustainable livelihoods</li>
            <li>Community-based empowerment</li>
            <li>Trusted NGO serving Hyderabad</li>
          </ul>
        </div>
      </section>

      {/* Donation Appeal */}
      <section className="bg-pink-50 py-14 px-4">
        <div className="max-w-6xl mx-auto text-gray-800 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Help a COVID Widow Woman Rebuild Her Life
          </h2>

          <p className="font-medium">
            A single loss changed everything.
          </p>

          <p>
            For many women, the COVID-19 pandemic didn’t just take away a loved
            one—it took away security, income, and hope.
          </p>

          <p>
            At Shine NGO, we help COVID widow women stand back on their feet by
            providing free skill training, tools, and livelihood support. Your
            donation can turn grief into strength and hardship into
            independence.
          </p>

          <p className="font-semibold">
            Donate Today. Empower Tomorrow.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>A skill instead of charity</li>
            <li>A livelihood instead of dependency</li>
            <li>A future instead of fear</li>
          </ul>

          <p className="font-semibold text-pink-700">
            💛 Support a COVID widow woman today.
          </p>
        </div>
      </section>
 <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  my-5">
              {childwidowImages.map((img, index) => (
                <div
                  key={index}
                  className="w-full overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    alt={`Tailoring ${index + 1}`}
                    src={img.src}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <ServicesSidebar active="Covid Widow Women" />
      </section>
    </div>
  );
}
export default CovidWidowWomen;