
import React from 'react';
import PageHeader from '@/components/PageHeader';

const BeautyMeetsFunctionality = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Where Beauty Meets Functionality" subtitle="Transforming Bathrooms Inside and Out" />
      
      <div className="p-6 bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto py-8 px-5">
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="font-bold mb-4 text-xl text-[#101010] text-center">
                Yanisa Execution is an AI Accelerator that invests in and partners with startups, SMEs, MSMEs, and listed/private companies.
              </h2>
              
              <p className="mb-5 my-[4px] py-[5px] text-[#060606] text-base font-medium text-left">
                We step into your business as growth partners, with two core offerings:
                Growth as a Service (GaaS) – We scale your topline revenue using an AI-first approach. 
                Yanisa Studios – We build your founder's personal brand using content, distribution, and intelligent automation.
              </p>
              
              <p className="mb-6 text-black text-lg font-semibold text-left">
                With Growth as a Service, Yanisa Execution acts as your AI-powered CXO layer. We don't just advise—we execute. 
                We build your internal team, set up modern digital & sales systems, and deploy AI agents that generate leads, 
                book calls, and automate your sales pipeline. We also develop web apps, websites, or internal tools, with the 
                cost of tools, tech, and team borne by the brand. Our role is to drive business outcomes—measured in revenue, 
                systems, and scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyMeetsFunctionality;
