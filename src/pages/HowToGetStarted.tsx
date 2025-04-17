import React from 'react';
import PageHeader from '@/components/PageHeader';
const HowToGetStarted = () => {
  return <div className="min-h-screen bg-gray-50">
      <PageHeader title="How to Get Started" subtitle="Your Path to Partnership with Modernizing Trends" />
      
      <div className="p-6 bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto my-8 px-5">
          <h2 className="text-[36px] font-bold text-[#2c3e50] text-center mb-10 font-poppins">How to Get Started</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[20px]">
            {/* Container 1 */}
            <div style={{
            transformStyle: 'preserve-3d'
          }} className="bg-white rounded-lg shadow-[0px_5px_10px_rgba(0,0,0,0.2)] p-6 \n                 ">
              <h3 className="font-bold mb-6 font-poppins text-black text-xl text-center">🚀 Yanisa Execution: Onboarding Timeline</h3>
              
              <ul className="space-y-4 text-[16px] text-[#2c3e50]">
                <li className="font-bold">Apply for Growth Partnership (Day 1):<span className="font-normal"> Submit your application and basic business details.</span></li>
                <li className="font-bold">Business Audit & Approval (Days 2–3):<span className="font-normal"> CXO team reviews your business model and aligns on eligibility.</span></li>
                <li className="font-bold">Strategy & Model Finalization (Days 4–5):<span className="font-normal"> Lock growth targets, budgets, and custom execution plan.</span></li>
                <li className="font-bold">Contract Signing & Initial Training (Days 6–7):<span className="font-normal"> Sign the contract and attend onboarding with Yanisa's execution team.</span></li>
                <li className="font-bold">Growth System Deployment (Days 8–10):<span className="font-normal"> Set up tech stack, CRM, funnels, and automation tools.</span></li>
                <li className="font-bold">Team Deployment & Process Setup (Days 10–15):<span className="font-normal"> Deploy team, install SOPs, and initiate daily operations.</span></li>
                <li className="font-bold">Revenue Generation Begins (Day 15+):<span className="font-normal"> Sales execution kicks in—leads, conversions, and cash flow starts.</span></li>
              </ul>
            </div>
            
            {/* Container 2 */}
            <div style={{
            transformStyle: 'preserve-3d'
          }} className="bg-white rounded-lg shadow-[0px_5px_10px_rgba(0,0,0,0.2)] p-6 \n                   ">
              <h3 className="font-bold mb-6 font-poppins text-black text-lg text-center">🚀 How to Get Started with Yanisa Execution</h3>
              
              <p className="mb-4 text-[16px] text-[#2c3e50]">We don't just consult — we partner and execute with ownership. Here's how to begin your growth journey with us:</p>
              
              <ol className="space-y-4 text-[16px] text-[#2c3e50] list-decimal pl-5">
                <li><span className="font-bold">1️⃣ Apply for Growth as a Service:</span> Submit your interest through our application form or connect directly with our Growth Partner Team. Why? We evaluate your business stage, industry, and intent to ensure we're the right fit to 2x your revenue in 6 months.</li>
                
                <li><span className="font-bold">2️⃣ Discovery & Fit Assessment Call:</span> Our CXO team will conduct a deep-dive call with you to understand your current business state, pain points, and growth goals. Outcome: Mutual budget alignment and clarity on where Yanisa will plug in.</li>
                
                <li><span className="font-bold">3️⃣ Budget Finalization & Onboarding Approval:</span> Once we agree on topline growth targets and required investment (starting from ₹40L), we'll send over a detailed execution roadmap for approval.</li>
                
                <li><span className="font-bold">4️⃣ CXO-Led Strategy Planning:</span> Post-approval, our internal team of CMOs, CTOs, and CROs will begin: ✅ Business Audit, ✅ Team Structure Design, ✅ Tech Stack Planning, ✅ Sales Channel Mapping.</li>
                
                <li><span className="font-bold">5️⃣ Contract Signing & Kickoff:</span> You sign the contract and officially onboard Yanisa Execution. Day 0 to Day 7: Handover of brand access, Setup of internal dashboards and trackers, Launch of Growth Sprint 01.</li>
                
                <li><span className="font-bold">6️⃣ Team Deployment & Build Phase:</span> Day 8 to Day 30: We build your: AI agents, Lead generation systems, Sales SOPs, Web assets (website, CRM, funnel, etc.). You only need to give 3 strategy calls per month. We'll take it from there.</li>
                
                <li><span className="font-bold">7️⃣ Execution + Reporting Starts:</span> Day 31 to Day 180: Daily reports to you, Weekly reviews with CXOs, Lead generation + conversion + delivery cycles fully owned by Yanisa, Your business unit now runs like a revenue engine.</li>
                
                <li><span className="font-bold">8️⃣ 2x Revenue Realization:</span> By month 6, your sales should reflect the topline jump: 📈 ₹1 Cr/month → ₹2 Cr/month. You now have a leaner, smarter business with full operational independence.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HowToGetStarted;