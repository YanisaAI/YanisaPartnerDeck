import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Play, Volume2 } from 'lucide-react';
const BeautyMeetsFunctionality = () => {
  return <div className="min-h-screen bg-gray-50">
      <PageHeader title="Where Beauty Meets Functionality" subtitle="Transforming Bathrooms Inside and Out" />
      
      <div className="p-6">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-bold mb-4 text-xl text-[#101010] text-center">Yanisa Execution is an AI Accelerator that invests in and partners with startups, SMEs, MSMEs, and listed/private companies.

          </h2>
            
            <p className="mb-5 my-[4px] py-[5px] text-[#060606] text-base font-medium text-left">We step into your business as growth partners, with two core offerings:
 Growth as a Service (GaaS) – We scale your topline revenue using an AI-first approach. 
 Yanisa Studios – We build your founder’s personal brand using content, distribution, and intelligent automation.</p>
            
            <p className="mb-6 text-black text-lg font-semibold text-left">With Growth as a Service, Yanisa Execution acts as your AI-powered CXO layer. We don’t just advise—we execute. We build your internal team, set up modern digital & sales systems, and deploy AI agents that generate leads, book calls, and automate your sales pipeline. We also develop web apps, websites, or internal tools, with the cost of tools, tech, and team borne by the brand. Our role is to drive business outcomes—measured in revenue, systems, and scale.</p>
            
            
            
            
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-blue-50 rounded-lg overflow-hidden">
              <div className="relative">
                <img src="/public/lovable-uploads/18e1f936-c52e-4b0d-bcae-46a45f92ab4b.png" alt="Director" className="w-full h-auto" />
                
                <div className="absolute bottom-0 left-0 right-0 bg-blue-900/80 p-3">
                  <div className="text-white">
                    <p className="text-sm">"We are not born to do easy things"</p>
                    <p className="text-sm mt-3 font-semibold">Mr. NILESH MEHTA</p>
                    <p className="text-xs">Managing Director</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 flex items-center justify-between bg-gray-100">
                <button className="p-1">
                  <Play className="h-5 w-5" />
                </button>
                
                <div className="flex-1 mx-2">
                  <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full w-1/4 bg-blue-600"></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>0:00</span>
                    <span>1:53</span>
                  </div>
                </div>
                
                <button className="p-1">
                  <Volume2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="text-right text-xs text-gray-500 mt-1">Video by NPM</div>
          </div>
        </div>
        
        
      </div>
    </div>;
};
export default BeautyMeetsFunctionality;