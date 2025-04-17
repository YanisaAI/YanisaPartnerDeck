
import React from 'react';
import PageHeader from '@/components/PageHeader';

const DuWhyPartner = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="DU Why Partner"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">DU Why Partner</h2>
          <p className="text-gray-600 mb-4">This page contains the DU (Document Upload) version of the Why Partner content.</p>
          <p className="text-gray-600">Upload and manage partnership marketing materials, benefits documentation, and testimonials.</p>
        </div>
      </div>
    </div>
  );
};

export default DuWhyPartner;
