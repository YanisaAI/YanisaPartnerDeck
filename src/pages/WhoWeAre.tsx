
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';

const WhoWeAre = () => {
  const [aboutItems, setAboutItems] = useState([
    "Founder-Led GTM Powerhouse: Built by marketers, investors, and entrepreneurs to supercharge growth from day zero.",
    "Obsessed with Outcomes: Whether it's virality or velocity, everything we do moves the topline forward.",
    "Built for Builders: Ideal for fast-paced brands that want execution speed without compromising quality.",
    "Amplify Founders as Influencers: We create personal brands that open doors for sales, hiring, and funding.",
    "VC & Operator Backing: Partnered with investors and industry leaders to scale India's most promising ventures."
  ]);

  const [apartItems, setApartItems] = useState([
    "AI-Powered Sales Teams: Deploy AI agents that qualify leads, book calls, and follow up—all in your voice.",
    "Web Apps, Sites & Funnels Built Fast: From code to no-code, we launch customer-facing tech in days, not weeks.",
    "CXO-as-a-Service Model: Fractional CGO/CMO/CTO roles that bring strategy + execution in one plug-in model.",
    "Growth + Branding = Compounding Returns: We scale not just marketing, but storytelling and systems.",
    "Embedded Teams, Not Freelancers: We work with you, not for you—daily standups, live dashboards, real impact."
  ]);

  const [benefitItems, setBenefitItems] = useState([
    "Category Leadership: We position your brand so well, it becomes the reference point in your industry.",
    "Content that Converts, Not Just Looks Good: Every reel, script, and post is built to drive one thing—business outcomes.",
    "Lower CAC, Higher LTV: Optimized performance marketing + AI sales = smarter ROI at scale.",
    "End-to-End Execution: From creative to code to calls—everything is handled by our team.",
    "Future-Proof Your Growth: While others explore AI, you'll deploy it and dominate with it."
  ]);

  const handleItemChange = (index: number, newValue: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => prev.map((item, i) => i === index ? newValue : item));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Who We Are" subtitle="Transforming Businesses Inside and Out" />
      
      <div className="p-6 px-0 py-0 bg-white">
        <div className="max-w-[1200px] mx-auto py-8 px-[5px] rounded-md bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Container 1: About Us */}
            <div className="bg-white rounded-[10px] p-6 shadow-[0px_5px_10px_rgba(0,0,0,0.2)]">
              <h3 className="flex items-center text-black mb-4 font-poppins text-2xl font-extrabold">
                <span className="mr-2">🟩</span> About Us
              </h3>
              <h4 className="font-bold text-black mb-4 font-poppins text-lg text-center">
                Transforming Brands with Strategy, Story & Scale
              </h4>
              <ul className="space-y-3 text-[16px] text-[#2c3e50]">
                {aboutItems.map((item, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleItemChange(index, e.target.value, setAboutItems)}
                      className="w-full p-2 border border-transparent hover:border-gray-300 rounded"
                    />
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Container 2: What Sets Us Apart? */}
            <div className="bg-white rounded-[10px] p-6 shadow-[0px_5px_10px_rgba(0,0,0,0.2)]">
              <h3 className="flex items-center font-bold text-black mb-4 font-poppins text-2xl">
                <span className="mr-2">🟪</span> What Sets Us Apart?
              </h3>
              <h4 className="text-black mb-4 font-poppins font-extrabold text-lg text-center">
                Human-Led Creativity. AI-Powered Execution.
              </h4>
              <ul className="space-y-3 text-[16px] text-[#2c3e50]">
                {apartItems.map((item, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleItemChange(index, e.target.value, setApartItems)}
                      className="w-full p-2 border border-transparent hover:border-gray-300 rounded"
                    />
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Container 3: What's In It For You? */}
            <div className="bg-white rounded-[10px] p-6 shadow-[0px_5px_10px_rgba(0,0,0,0.2)]">
              <h3 className="flex items-center font-bold text-black mb-4 font-poppins text-2xl">
                <span className="mr-2">🟥</span> What's In It For You?
              </h3>
              <h4 className="font-bold text-black mb-4 font-poppins text-lg text-center">
                Plug, Play, Perform
              </h4>
              <ul className="space-y-3 text-[16px] text-[#2c3e50]">
                {benefitItems.map((item, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleItemChange(index, e.target.value, setBenefitItems)}
                      className="w-full p-2 border border-transparent hover:border-gray-300 rounded"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
