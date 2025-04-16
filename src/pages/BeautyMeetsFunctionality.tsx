
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Play, Volume2 } from 'lucide-react';

const BeautyMeetsFunctionality = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Where Beauty Meets Functionality" 
        subtitle="Transforming Bathrooms Inside and Out" 
      />
      
      <div className="p-6">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Empowering Partners to Bring Innovation and Elegance to Every Customer</h2>
            
            <p className="text-gray-700 mb-4">
              Modernizing Trends is your ultimate partner in transforming bathrooms, blending innovation, elegance, and cutting-edge technology.
            </p>
            
            <p className="text-gray-700 mb-6">
              With us, you don't just offer beautiful designs—you deliver integrated solutions that combine advanced behind-the-wall technologies with visually stunning aesthetics, creating bathrooms that stand the test of time.
            </p>
            
            <h3 className="text-xl font-bold mb-2">Let's redefine what it means to build a bathroom—inside and out.</h3>
            
            <p className="text-gray-700 mb-4">Are you ready to join the revolution?</p>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-blue-50 rounded-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="/public/lovable-uploads/18e1f936-c52e-4b0d-bcae-46a45f92ab4b.png" 
                  alt="Director" 
                  className="w-full h-auto" 
                />
                
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
        
        <div className="bg-gray-200 p-4 rounded-md text-center mt-8">
          <p className="text-gray-700">Modernizing Bathrooms Together: Partner with Us to Lead the Change.</p>
        </div>
      </div>
    </div>
  );
};

export default BeautyMeetsFunctionality;
