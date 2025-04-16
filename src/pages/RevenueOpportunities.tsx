
import React from 'react';
import PageHeader from '@/components/PageHeader';

const RevenueOpportunities = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Revenue Opportunities" 
        subtitle="Maximize your earnings with our partnership" 
      />
      
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Multiple Revenue Streams</h2>
          <p className="text-gray-600 mb-6">Discover the various ways our partnership can boost your bottom line.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Product Sales</h3>
              <p className="text-sm text-gray-600 mb-4">
                Earn competitive margins on our premium bathroom products with tiered commission structures based on volume.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm">
                <span className="font-semibold">Potential monthly revenue:</span> ₹3,00,000 - ₹15,00,000
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Installation Services</h3>
              <p className="text-sm text-gray-600 mb-4">
                Leverage our trained plumber network to offer installation services and earn additional revenue.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm">
                <span className="font-semibold">Potential monthly revenue:</span> ₹1,50,000 - ₹4,00,000
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">AMC & Service Contracts</h3>
              <p className="text-sm text-gray-600 mb-4">
                Create recurring revenue streams through annual maintenance contracts and service agreements.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm">
                <span className="font-semibold">Potential monthly revenue:</span> ₹75,000 - ₹2,00,000
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Revenue Enhancement Tools</h2>
          <p className="text-gray-600 mb-6">We provide the following tools to help you maximize revenue:</p>
          
          <ul className="list-disc pl-5 space-y-3 text-gray-600">
            <li>Customized pricing strategies for different market segments</li>
            <li>Sales funnel optimization for better conversion rates</li>
            <li>CRM integration for lead tracking and follow-up</li>
            <li>Promotional materials and campaigns to drive demand</li>
            <li>Performance tracking dashboards to identify opportunities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RevenueOpportunities;
