import React from "react";

const ServiceCards = () => {
  return (
    <section className="my-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          Our Expertise and Services
        </h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover how our cutting-edge technology services and tailored
          staffing solutions can drive your business success.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-7xl mx-auto p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg h-full">
        {/* Technology Services Card */}
        <div className="flex-1 bg-gray-800 shadow-md rounded-lg p-8 transition-transform hover:scale-105 hover:shadow-xl flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-custom-purple mb-6">
            Technology Services
          </h2>
          <ul className="space-y-6 flex-grow">
            <li className="group p-4 bg-gray-900 rounded transition-transform transform hover:translate-x-2 hover:bg-custom-purple-50">
              <p className="font-semibold text-gray-100 mb-1 group-hover:text-custom-purple">
                Generative AI (GenAI):
              </p>
              <p className="text-gray-400 group-hover:text-gray-300">
                Our GenAI solutions empower businesses to create unique content,
                streamline creative workflows, and deliver personalized user
                experiences through advanced machine learning models.
              </p>
            </li>
            <li className="group p-4 bg-gray-900 rounded transition-transform transform hover:translate-x-2 hover:bg-custom-purple-50">
              <p className="font-semibold text-gray-100 mb-1 group-hover:text-custom-purple">
                Cloud Computing:
              </p>
              <p className="text-gray-400 group-hover:text-gray-300">
                Our cloud services enable seamless scalability, robust data
                storage, and secure access to applications, ensuring business
                agility and reliability.
              </p>
            </li>
            <li className="group p-4 bg-gray-900 rounded transition-transform transform hover:translate-x-2 hover:bg-custom-purple-50">
              <p className="font-semibold text-gray-100 mb-1 group-hover:text-custom-purple">
                Quantum Computing:
              </p>
              <p className="text-gray-400 group-hover:text-gray-300">
                We explore quantum algorithms to solve complex problems in
                optimization, cryptography, and simulation, paving the way for
                next-gen technology breakthroughs.
              </p>
            </li>
            <li className="group p-4 bg-gray-900 rounded transition-transform transform hover:translate-x-2 hover:bg-custom-purple-50">
              <p className="font-semibold text-gray-100 mb-1 group-hover:text-custom-purple">
                Blockchain:
              </p>
              <p className="text-gray-400 group-hover:text-gray-300">
                Our blockchain services ensure secure, transparent, and
                efficient transactions, enabling businesses to leverage
                distributed ledger technology for trustless ecosystems.
              </p>
            </li>
            <li className="group p-4 bg-gray-900 rounded transition-transform transform hover:translate-x-2 hover:bg-custom-purple-50">
              <p className="font-semibold text-gray-100 mb-1 group-hover:text-custom-purple">
                Edge Computing:
              </p>
              <p className="text-gray-400 group-hover:text-gray-300">
                We deploy edge computing solutions to process data closer to its
                source, reducing latency and enabling real-time analytics for
                connected devices.
              </p>
            </li>
          </ul>
        </div>

        {/* Staffing Services Card */}
        <div className="flex-1 bg-gray-800 shadow-md rounded-lg p-8 transition-transform hover:scale-105 hover:shadow-xl flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-custom-orange mb-6">
            Staffing Services
          </h2>
          <ul className="space-y-6 flex-grow">
            <li className="group p-4 bg-gray-900 rounded transition-transform transform hover:translate-x-2 hover:bg-custom-orange-50">
              <p className="font-semibold text-gray-100 mb-1 group-hover:text-custom-orange">
                Industry Expertise:
              </p>
              <p className="text-gray-400 group-hover:text-gray-300">
                We tap into extensive industry networks to identify and engage
                candidates with specific sector experience matching the unique
                needs and culture of our clients.
              </p>
            </li>
            <li className="group p-4 bg-gray-900 rounded transition-transform transform hover:translate-x-2 hover:bg-custom-orange-50">
              <p className="font-semibold text-gray-100 mb-1 group-hover:text-custom-orange">
                Competitive Hiring:
              </p>
              <p className="text-gray-400 group-hover:text-gray-300">
                Using strategic insights and discreet headhunting techniques, we
                attract and recruit top performers from your competitors to
                bolster your team’s capabilities.
              </p>
            </li>
            <li className="group p-4 bg-gray-900 rounded transition-transform transform hover:translate-x-2 hover:bg-custom-orange-50">
              <p className="font-semibold text-gray-100 mb-1 group-hover:text-custom-orange">
                Passive Candidates:
              </p>
              <p className="text-gray-400 group-hover:text-gray-300">
                Our team excels at identifying and nurturing relationships with
                passive candidates, opening access to a broader talent pool
                beyond active job seekers.
              </p>
            </li>
            <li className="group p-4 bg-gray-900 rounded transition-transform transform hover:translate-x-2 hover:bg-custom-orange-50">
              <p className="font-semibold text-gray-100 mb-1 group-hover:text-custom-orange">
                Tailored Solutions:
              </p>
              <p className="text-gray-400 group-hover:text-gray-300">
                We customize our hiring strategies to align with your business
                objectives, culture, and operational requirements, ensuring a
                perfect fit every time.
              </p>
            </li>
            <li className="group p-4 bg-gray-900 rounded transition-transform transform hover:translate-x-2 hover:bg-custom-orange-50">
              <p className="font-semibold text-gray-100 mb-1 group-hover:text-custom-orange">
                Data-Driven:
              </p>
              <p className="text-gray-400 group-hover:text-gray-300">
                Leveraging advanced analytics and predictive modeling, we
                optimize hiring processes and boost decision-making accuracy,
                enhancing recruitment outcomes.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
