
import React from 'react';
import PageHeader from '@/components/PageHeader';

const DuWhoWeAre = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="DU Who We Are" 
        subtitle="Document Upload for Company Information" 
      />
      
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">DU Who We Are</h2>
          <p className="text-gray-600 mb-4">This page contains the DU (Document Upload) version of the Who We Are content.</p>
          <p className="text-gray-600">Upload and manage company profile documents, team information, and other relevant materials.</p>
        </div>
      </div>
    </div>
  );
};

export default DuWhoWeAre;
