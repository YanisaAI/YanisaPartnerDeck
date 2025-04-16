
import React from 'react';
import PageHeader from '@/components/PageHeader';
import PricingTable from '@/components/PricingTable';

const PartnershipLevels = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Partnership Levels" 
        subtitle="Choose the partnership tier that fits your business" 
      />
      
      <div className="p-6">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Available Partnership Tiers</h2>
          <p className="text-gray-600 mb-6">Select the level of partnership that aligns with your business goals and capabilities.</p>
        </div>
        <PricingTable />
      </div>
    </div>
  );
};

export default PartnershipLevels;
