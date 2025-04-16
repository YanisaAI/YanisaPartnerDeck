
import React from 'react';
import PageHeader from '@/components/PageHeader';
import InfoCard from '@/components/InfoCard';

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Meet Us - The bathroom Experts" 
        subtitle="Transforming Bathrooms Inside and Out" 
      />
      
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">You aren't Partnering with just a company</h2>
          <p className="text-gray-600 mb-6">Modernizing Processes Is</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              title="A Legacy of Innovation"
              subtitle="35+ Years"
              content={
                <p>Of redefining bathroom solutions, driven by three generations of expertise and vision.</p>
              }
            />
            
            <InfoCard
              title="Nationwide Presence"
              subtitle="20+ Branches"
              content={
                <p>A strong partner network, and an unwavering commitment to empowering growth.</p>
              }
            />
            
            <InfoCard
              title="Pioneers in Bathroom Innovation"
              subtitle="35+ Years"
              content={
                <p>Bringing industry-first technologies to India, disrupting the way bathrooms are designed and experienced.</p>
              }
            />
            
            <InfoCard
              title="In-House Technology Expertise"
              subtitle="10+ Tech experts"
              content={
                <p>Supported by our sister concern, Modernizing Processes, we design cutting-edge tools and systems to streamline your business.</p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
