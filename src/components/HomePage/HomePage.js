import React, { useState } from "react";
import ServiceCards from "./Tabs/Tabs";

import logo from "../../assets/images/o2-logo.png";

import logo1 from "../../assets/images/WBENC.png";
import logo2 from "../../assets/images/NMSDC.png";
import logo3 from "../../assets/images/SDVOSB.png";
import logo5 from "../../assets/images/DOB.png";
import logo6 from "../../assets/images/SBA.jpeg";
import logo7 from "../../assets/images/HUBZone.png";

import { FaFlask, FaUserTie, FaHandsHelping, FaCheck } from "react-icons/fa"; // Import icons from react-icons
import Slider from "react-slick";

const HomePage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const outlookCalendarLink =
    "https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent"; // Replace with actual pre-filled Outlook link

  const handleScheduleCall = () => {
    window.open(outlookCalendarLink, "_blank");
  };

  const logos = [
    { src: logo1, link: "https://www.wbenc.org/" }, // Replace with actual paths and links
    { src: logo2, link: "https://nmsdc.org/" },
    {
      src: logo3,
      link: "https://business.defense.gov/Socioeconomic-Programs/SDVOSB/",
    },
    {
      src: logo5,
      link: "https://disabilityin.org/what-we-do/supplier-diversity/get-certified/",
    },
    {
      src: logo6,
      link: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program",
    },
    {
      src: logo7,
      link: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/hubzone-program",
    },
  ];

  const sliderSettings = {
    infinite: true,
    arrows: false,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="bg-background-base min-h-screen font-sans bg-spots-1 bg-repeat text-white">
      {/* Navigation */}
      <nav className="py-4 px-8 flex justify-between items-center">
        <img src={logo} alt="O2 Technologies Logo" className="h-12" />
        <div className="space-x-4 text-[1.1rem]">
          <span className="hover:text-gray-300">Services</span>
          <span className="hover:text-gray-300">Industries</span>
          <span className="hover:text-gray-300">Insights</span>
          <span className="hover:text-gray-300">Careers</span>
          <span className="hover:text-gray-300">Contact Us</span>
        </div>
        <div>
          <button
            className="bg-transparent border border-custom-orange px-4 py-2 rounded-full text-custom-orange text-[1.1rem]"
            onClick={handleScheduleCall}
          >
            Schedule a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-8 py-16">
        <div className="text-center mb-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Scale Your Business with Expert Consulting and Top Talent
            </h1>
            <p className="text-xl mb-12">
              Discover how our innovative solutions, including Generative AI,
              have saved millions for corporate clients. Click below to view
              case studies tailored to your industry.
            </p>
          </div>
          <div className="inline-flex flex-wrap justify-center space-x-4 mt-6">
            {[
              "Banking, Financial Services, and Insurance (BFSI)",
              "Manufacturing and Consumer Services",
              "Healthcare and Life Sciences",
              "Technology, Media, and Telecom (TMT)",
            ].map((buttonText, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full transition-colors duration-300 border text-[1.1rem] mt-2
                  ${
                    activeButton === index
                      ? "bg-white text-black border-white cursor-default"
                      : "bg-custom-purple text-white border-transparent hover:bg-transparent hover:border-white"
                  }
                `}
                onClick={() => setActiveButton(index)}
              >
                {buttonText}
              </button>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="relative mt-16 flex justify-center">
          {/* Background Gradient Card */}
          <div className="absolute w-[35rem] h-[20rem] rounded-5xl bg-custom-gradient z-0 -right-[-11rem] -top-[3rem]"></div>

          {/* Main Card */}
          <div className="relative w-full max-w-5xl h-auto rounded-xl z-10 shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Technology Services */}
              <div className="w-full md:w-1/2 bg-white rounded-t-5xl md:rounded-l-5xl md:rounded-tr-none p-8">
                <h3 className="text-2xl font-medium italic mb-4 text-custom-orange">
                  O2 Technologies: The Oxygen for Your Tech Challenges
                </h3>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Do You Require Technology Services
                </h2>
                <ul className="list-disc pl-5 text-gray-800 space-y-2">
                  <li>Increased Efficiency and Productivity</li>
                  <li>Enhanced Data Security and Compliance</li>
                  <li>Improved Customer Experience</li>
                  <li>Data-Driven Decision Making</li>
                </ul>
                <button className="mt-6 bg-custom-purple px-4 py-2 rounded-full text-white">
                  Explore Solutions
                </button>
              </div>

              {/* Staff Augmentation Services */}
              <div className="w-full md:w-1/2 bg-white bg-opacity-50 rounded-b-5xl md:rounded-r-5xl md:rounded-bl-none p-8 backdrop-blur">
                <h3 className="text-2xl font-medium italic mb-4 text-custom-purple">
                  O2 Staffing: The Oxygen for Your Workforce Needs
                </h3>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Do You Require IT Staff Augmentation Services
                </h2>
                <ul className="list-disc pl-5 text-gray-800 space-y-2">
                  <li>Access to Specialized Skills</li>
                  <li>Increased Flexibility and Scalability</li>
                  <li>Reduced Costs and Time to Hire</li>
                  <li>Focus on Core Business Objectives</li>
                </ul>
                <button className="mt-6 bg-white px-4 py-2 rounded-full text-black">
                  Find Talent
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Section */}
        <div className="mt-24 mb-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">
              Innovative Solutions for the Future
            </h1>
            <p className="text-lg text-gray-400 mt-4 max-w-4xl mx-auto">
              Explore our cutting-edge initiatives that drive technology
              advancements, enhance recruitment strategies, and uphold our
              commitment to sustainability and inclusion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "O2 Research & Development Lab Focus",
                items: [
                  "Generative AI (GenAI)",
                  "Cloud Computing",
                  "Quantum Computing",
                  "Blockchain",
                  "Edge Computing",
                ],
                icon: <FaFlask className="h-16 w-16 mb-4" />,
                backgroundImage: require("../../assets/images/RnD.jpg"),
              },
              {
                title: "O2 GEN AI Hiring Tool",
                items: [
                  "Hiring from the Same Industry",
                  "Hiring from Competitors",
                  "Hiring Passive Candidates",
                  "Tailored Hiring Solutions",
                  "Data-Driven Decision Making",
                ],
                icon: <FaUserTie className="h-16 w-16 mb-4" />,
                backgroundImage: require("../../assets/images/GenAI.jpg"),
              },
              {
                title: "O2 Commitment",
                items: [
                  "Environmental, Social, and Governance (ESG)",
                  "Diversity, Inclusion, and Equity (DIE)",
                  "Cost Efficiency & Value Proposition",
                  "Risk Management & Disaster Recovery",
                  "Compliance Standards",
                ],
                icon: <FaHandsHelping className="h-16 w-16 mb-4" />,
                backgroundImage: require("../../assets/images/Commitment.jpg"),
              },
            ].map((card, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 opacity-100 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.backgroundImage})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 hover:opacity-0"></div>

                {/* Content */}
                <div className="relative p-8 flex flex-col items-center text-white">
                  {/* Icon */}
                  <div className="text-custom-orange">{card.icon}</div>
                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                  {/* List */}
                  <ul className="space-y-2 text-left w-full">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <FaCheck className="w-6 h-6 text-custom-orange mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Top Approved Diversity Suppliers
        </h2>
        <Slider {...sliderSettings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  className="h-32 mx-auto"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <ServiceCards />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} O2 Technologies All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
