
import React from 'react';
import PageHeader from '@/components/PageHeader';

const PartnerSuccessStories = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Partner Success Stories" 
        subtitle="Real-world success from our valued partners" 
      />
      
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Featured Success Stories</h2>
          <p className="text-gray-600 mb-6">Learn how our partners have achieved remarkable success with our innovative bathroom solutions.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Urban Elegance Interiors</h3>
              <p className="text-sm text-gray-600 mb-4">
                "After partnering with Modernizing Trends, our bathroom renovation business saw a 137% increase in high-ticket projects within just 6 months. The exclusive products and dedicated support have transformed how we approach bathroom design."
              </p>
              <p className="text-sm font-semibold">- Rajesh Kumar, Director</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Premium Living Solutions</h3>
              <p className="text-sm text-gray-600 mb-4">
                "The technology-focused bathroom solutions provided by Modernizing Trends have given us a competitive edge in the luxury home market. Our clients appreciate the innovative features and premium quality, and we've seen a 42% increase in referral business."
              </p>
              <p className="text-sm font-semibold">- Anita Sharma, CEO</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Results By The Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
              <p className="text-sm text-gray-600">Partners report increased profit margins</p>
            </div>
            
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <p className="text-sm text-gray-600">Customer satisfaction rate</p>
            </div>
            
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">64%</div>
              <p className="text-sm text-gray-600">Average increase in annual revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSuccessStories;
