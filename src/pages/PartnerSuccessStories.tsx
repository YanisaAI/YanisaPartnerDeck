
import React from 'react';
import PageHeader from '@/components/PageHeader';

const PartnerSuccessStories = () => {
  const caseStudies = [
    {
      emoji: '🚀',
      heading: 'CXO Partner Pro (Mumbai)',
      quote: "Yanisa took over our digital operations, and in 90 days, we scaled from ₹2.5 Cr to ₹4.2 Cr in monthly revenue.",
      name: 'Sahil Patel',
      location: 'Mumbai',
      businessType: 'D2C Skincare',
      service: 'Growth as a Service',
      investment: '₹3,00,000/month (excluding internal team tools & budget)',
      revenueGenerated: '₹12,60,000 uplift in 3 months',
      outcome: 'Fully AI-powered sales funnel + lean team',
      profitBoost: '(↑) ₹6,00,000'
    },
    {
      emoji: '🎙️',
      heading: 'Creator+ Founder (Delhi)',
      quote: "With just 3 days of my time, I got 30+ high-quality posts, AI avatars, and a full podcast series that built authority fast.",
      name: 'Neha Bansal',
      location: 'Delhi',
      businessType: 'Coaching & Consulting',
      service: 'Yanisa Studios',
      investment: '₹2,50,000',
      revenueGenerated: '4 inbound leads per day from content',
      outcome: 'Signed 3 new clients at ₹1.5L each',
      profitBoost: '(↑)(↑) ₹4,50,000 in 45 days'
    },
    {
      emoji: '🧠',
      heading: 'AI Revamp Partner (Bangalore)',
      quote: "Yanisa built custom internal AI agents that reduced support workload by 60% and improved client onboarding speed by 3x.",
      name: 'Vikram Raj',
      location: 'Bangalore',
      businessType: 'SaaS Product (HR Tech)',
      service: 'Growth as a Service',
      investment: '₹5,00,000',
      revenueGenerated: 'Saved ₹1.8L/month in manpower + faster scale',
      outcome: 'Business unit became profitable in 5 months',
      profitBoost: '(↑) ₹9,00,000/year efficiency'
    },
    {
      emoji: '🏢',
      heading: 'Enterprise CXO Partner (Hyderabad)',
      quote: "We were stuck at ₹3 Cr monthly revenue for a year. Yanisa brought in systems, team structure, and tech—we hit ₹6.5 Cr in 6 months.",
      name: 'Devika Reddy',
      location: 'Hyderabad',
      businessType: 'FMCG Manufacturer',
      service: 'Growth as a Service',
      investment: '₹7,00,000/month (tools + Yanisa retainer)',
      revenueGenerated: '₹3.5 Cr/month',
      outcome: 'Fully functional internal tech, team of 12 hired, profits doubled',
      profitBoost: '(↑)(↑) ₹21 Cr+ ARR impact'
    },
    {
      emoji: '🌍',
      heading: 'Global Founder (Dubai)',
      quote: "With Yanisa Studios, I became an international content brand. My AI-generated content & podcast series got me a TEDx invite!",
      name: 'Ankit Shah',
      location: 'Dubai',
      businessType: 'EdTech',
      service: 'Yanisa Studios',
      investment: '₹3,00,000',
      revenueGenerated: '10,000+ new followers, international leads',
      outcome: 'Monetized personal brand with ₹5L/month coaching model',
      profitBoost: '(↑)(↑) Global brand built in 90 days'
    },
    {
      emoji: '🚀',
      heading: 'Growth Partner (Mumbai) – Pharma Industry',
      quote: "With Yanisa, we built AI sales systems that helped us double monthly revenue in less than 6 months.",
      name: 'MedCore Labs',
      location: 'Mumbai',
      businessType: 'Pharma',
      service: 'Growth as a Service',
      investment: '₹40 Lakhs',
      revenueGenerated: 'Monthly Turnover (Before): ₹1 Cr → (After 6 Months): ₹2 Cr',
      outcome: 'Doubled topline revenue through AI agent-led sales ops, lean sales team, and automated CRM',
      profitBoost: '100% Revenue Increase'
    },
    {
      emoji: '🏗️',
      heading: 'Growth Partner (Pune) – Real Estate',
      quote: "Yanisa's CXO team and AI-driven lead gen helped us fill our pipeline with quality leads and faster closures.",
      name: 'Brickwise Developers',
      location: 'Pune',
      businessType: 'Real Estate',
      service: 'Growth as a Service',
      investment: '₹45 Lakhs',
      revenueGenerated: 'Monthly Turnover (Before): ₹1.2 Cr → (After 6 Months): ₹2.4 Cr',
      outcome: 'Automated lead capture, AI-driven bookings, and full website + WhatsApp funnel built from scratch',
      profitBoost: '100% Revenue Increase'
    },
    {
      emoji: '🤖',
      heading: 'Growth Partner (Bangalore) – Robotics/Deeptech',
      quote: "We had product-market fit but zero marketing or sales engine—Yanisa built both from scratch.",
      name: 'RoboNXT',
      location: 'Bangalore',
      businessType: 'Robotics/Deeptech',
      service: 'Growth as a Service',
      investment: '₹50 Lakhs',
      revenueGenerated: 'Monthly Turnover (Before): ₹85 Lakhs → (After 6 Months): ₹1.7 Cr',
      outcome: 'Doubled revenue by deploying outbound AI agents, B2B deal automation, and inbound GTM',
      profitBoost: '100% Revenue Increase'
    },
    {
      emoji: '🧪',
      heading: 'Growth Partner (Ahmedabad) – Manufacturing',
      quote: "We were stuck at ₹1 Cr/mo for a year. Yanisa helped us scale by rebuilding sales and tech from the ground up.",
      name: 'SteelForm Industries',
      location: 'Ahmedabad',
      businessType: 'Manufacturing',
      service: 'Growth as a Service',
      investment: '₹42 Lakhs',
      revenueGenerated: 'Monthly Turnover (Before): ₹1 Cr → (After 6 Months): ₹2.1 Cr',
      outcome: 'Digitized dealer onboarding, built AI agents for reorders, and created a custom sales dashboard',
      profitBoost: '110% Revenue Increase'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Partner Success Stories" 
        subtitle="Real-world success from our valued partners" 
      />
      
      <div className="p-6 bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto my-8 px-5">
          <h2 className="text-[36px] font-bold text-[#2c3e50] text-center mb-10 font-poppins">Partner Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[20px]">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-[0px_5px_10px_rgba(0,0,0,0.2)] p-6 
                          transition-all duration-300 hover:shadow-[0px_10px_15px_rgba(0,0,0,0.3)]
                          hover:translate-z-[10px] cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <h3 className="font-bold text-[24px] flex items-center mb-4 font-poppins">
                  <span className="mr-2">{study.emoji}</span> {study.heading}
                </h3>
                <p className="text-[18px] italic font-semibold mb-4 text-[#2c3e50]">"{study.quote}"</p>
                
                <div className="mt-4 space-y-2 text-[16px] text-[#2c3e50]">
                  <p><span className="font-bold">Name:</span> {study.name}</p>
                  <p><span className="font-bold">Location:</span> {study.location}</p>
                  <p><span className="font-bold">Business:</span> {study.businessType}</p>
                  <p><span className="font-bold">Service:</span> {study.service}</p>
                  <p><span className="font-bold">Investment:</span> {study.investment}</p>
                  <p><span className="font-bold">Revenue Impact:</span> {study.revenueGenerated}</p>
                  <p><span className="font-bold">Outcome:</span> {study.outcome}</p>
                  <p><span className="font-bold">Result:</span> {study.profitBoost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSuccessStories;
