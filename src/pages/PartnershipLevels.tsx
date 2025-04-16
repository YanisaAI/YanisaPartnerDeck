
import React from 'react';
import PageHeader from '@/components/PageHeader';

const PartnershipLevels = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Partnership Levels" 
        subtitle="Choose the partnership tier that fits your business" 
      />
      
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Available Partnership Tiers</h2>
          <p className="text-gray-600 mb-6">Select the level of partnership that aligns with your business goals and capabilities.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Basic Partner</h3>
              <ul className="list-disc pl-5 mb-4 text-sm text-gray-600 space-y-1">
                <li>Access to essential product range</li>
                <li>Standard marketing support</li>
                <li>Basic training</li>
                <li>Standard warranty support</li>
              </ul>
              <p className="font-semibold">Investment: Contact for pricing</p>
            </div>
            
            <div className="border border-blue-500 rounded-lg p-4 bg-blue-50">
              <div className="text-blue-600 font-bold text-sm mb-1">POPULAR</div>
              <h3 className="text-lg font-bold mb-2">Premium Partner</h3>
              <ul className="list-disc pl-5 mb-4 text-sm text-gray-600 space-y-1">
                <li>Access to complete product range</li>
                <li>Enhanced marketing support</li>
                <li>Dedicated account manager</li>
                <li>Priority technical support</li>
                <li>Extended warranty options</li>
              </ul>
              <p className="font-semibold">Investment: Contact for pricing</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Elite Partner</h3>
              <ul className="list-disc pl-5 mb-4 text-sm text-gray-600 space-y-1">
                <li>Exclusive product access</li>
                <li>Premium marketing support</li>
                <li>Executive account management</li>
                <li>24/7 technical support</li>
                <li>Special project pricing</li>
                <li>Co-branding opportunities</li>
              </ul>
              <p className="font-semibold">Investment: Contact for pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipLevels;
