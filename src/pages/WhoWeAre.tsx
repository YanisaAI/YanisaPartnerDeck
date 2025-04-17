import React from 'react';
import PageHeader from '@/components/PageHeader';
const WhoWeAre = () => {
  return <div className="min-h-screen bg-gray-50">
      <PageHeader title="Meet Us - The bathroom Experts" subtitle="Transforming Bathrooms Inside and Out" />
      
      <div className="p-6 bg-[#f9f9f9]">
        <div className="max-w-[1200px] py-8 px-[5px] mx-0 rounded-md bg-white">
          <h2 className="text-[36px] font-bold text-[#2c3e50] text-center mb-10 font-poppins">Who We Are</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[20px]">
            {/* Container 1: About Us */}
            <div className="bg-white rounded-[10px] p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.2)] py-[26px] px-[25px] mx-0">
              <h3 className="flex items-center text-black mb-4 font-poppins text-2xl font-extrabold">
                <span className="mr-2">🟩</span> About Us
              </h3>
              <h4 className="font-bold text-black mb-4 font-poppins text-lg text-center">Transforming Brands with Strategy, Story & Scale</h4>
              <ul className="space-y-3 text-[16px] text-[#2c3e50]">
                <li><strong>Founder-Led GTM Powerhouse:</strong> Built by marketers, investors, and entrepreneurs to supercharge growth from day zero.</li>
                <li><strong>Obsessed with Outcomes:</strong> Whether it's virality or velocity, everything we do moves the topline forward.</li>
                <li><strong>Built for Builders:</strong> Ideal for fast-paced brands that want execution speed without compromising quality.</li>
                <li><strong>Amplify Founders as Influencers:</strong> We create personal brands that open doors for sales, hiring, and funding.</li>
                <li><strong>VC & Operator Backing:</strong> Partnered with investors and industry leaders to scale India's most promising ventures.</li>
              </ul>
            </div>
            
            {/* Container 2: What Sets Us Apart? */}
            <div className="bg-white rounded-[10px] p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">
              <h3 className="flex items-center font-bold text-black mb-4 font-poppins text-2xl">
                <span className="mr-2">🟪</span> What Sets Us Apart?
              </h3>
              <p className="text-black mb-4 font-poppins font-extrabold text-lg text-center">Human-Led Creativity. AI-Powered Execution.</p>
              <ul className="space-y-3 text-[16px] text-[#2c3e50]">
                <li><strong>AI-Powered Sales Teams:</strong> Deploy AI agents that qualify leads, book calls, and follow up—all in your voice.</li>
                <li><strong>Web Apps, Sites & Funnels Built Fast:</strong> From code to no-code, we launch customer-facing tech in days, not weeks.</li>
                <li><strong>CXO-as-a-Service Model:</strong> Fractional CGO/CMO/CTO roles that bring strategy + execution in one plug-in model.</li>
                <li><strong>Growth + Branding = Compounding Returns:</strong> We scale not just marketing, but storytelling and systems.</li>
                <li><strong>Embedded Teams, Not Freelancers:</strong> We work with you, not for you—daily standups, live dashboards, real impact.</li>
              </ul>
            </div>
            
            {/* Container 3: What's In It For You? */}
            <div className="bg-white rounded-[10px] p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">
              <h3 className="flex items-center font-bold text-black mb-4 font-poppins text-2xl">
                <span className="mr-2">🟥</span> What's In It For You?
              </h3>
              <h4 className="font-bold text-black mb-4 font-poppins text-lg text-center">Plug, Play, Perform</h4>
              <ul className="space-y-3 text-[16px] text-[#2c3e50]">
                <li><strong>Category Leadership:</strong> We position your brand so well, it becomes the reference point in your industry.</li>
                <li><strong>Content that Converts, Not Just Looks Good:</strong> Every reel, script, and post is built to drive one thing—business outcomes.</li>
                <li><strong>Lower CAC, Higher LTV:</strong> Optimized performance marketing + AI sales = smarter ROI at scale.</li>
                <li><strong>End-to-End Execution:</strong> From creative to code to calls—everything is handled by our team.</li>
                <li><strong>Future-Proof Your Growth:</strong> While others explore AI, you'll deploy it and dominate with it.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default WhoWeAre;