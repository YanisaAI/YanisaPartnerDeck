
import React from 'react';
import PageHeader from '@/components/PageHeader';

const DuOurUniqueOfferings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="DU Our Unique Offerings" 
      />
      
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">DU Our Unique Offerings</h2>
          <p className="text-gray-600 mb-4">This page contains the DU (Document Upload) version of the Our Unique Offerings content.</p>
          <p className="text-gray-600">Upload and manage product catalogs, specification sheets, and other sales materials.</p>
        </div>
      </div>
    </div>
  );
};

export default DuOurUniqueOfferings;
