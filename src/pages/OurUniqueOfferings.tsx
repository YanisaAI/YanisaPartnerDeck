
import React from 'react';
import PageHeader from '@/components/PageHeader';
import InfoCard from '@/components/InfoCard';

const OurUniqueOfferings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Offers you won't be able to resist" 
        subtitle="Transforming Bathroom Inside and Out" 
      />
      
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Product Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Odor-Free Bathrooms</h3>
            <p className="font-semibold text-sm mb-1">Products: Lunos Air Flushing System, TECE Drain Point System.</p>
            <p className="font-semibold text-sm mb-4">Benefit: Ensure fresh, odor-free spaces by tackling WC, body, and reverse odors.</p>
            <img 
              src="/public/lovable-uploads/226e132d-6d06-4b9b-968a-54a1d2a4676a.png" 
              alt="Odor-Free Bathroom" 
              className="w-full h-auto rounded" 
            />
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Leak-Proof Bathrooms</h3>
            <p className="font-semibold text-sm mb-1">Products: Giacomini PEX systems, TECE modular systems, FARO strain-ers.</p>
            <p className="font-semibold text-sm mb-4">Benefit: Durable plumbing solutions that eliminate leaks and protect structures.</p>
            <img 
              src="/public/lovable-uploads/226e132d-6d06-4b9b-968a-54a1d2a4676a.png" 
              alt="Leak-Proof Systems" 
              className="w-full h-auto rounded" 
            />
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Quick Installation Solutions</h3>
            <p className="font-semibold text-sm mb-1">Products: TECE Profil Modular Drywall.</p>
            <p className="font-semibold text-sm mb-4">Benefit: Fast, foolproof installation for seamless bathroom setups.</p>
            <img 
              src="/public/lovable-uploads/226e132d-6d06-4b9b-968a-54a1d2a4676a.png" 
              alt="Quick Installation" 
              className="w-full h-auto rounded" 
            />
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Water-Saving Bathrooms</h3>
            <p className="font-semibold text-sm mb-1">Products: Nikles Eco Showers, TECE adjustable cisterns, Giacomini water meters.</p>
            <p className="font-semibold text-sm mb-4">Benefit: Reduce water consumption without compromising comfort.</p>
            <img 
              src="/public/lovable-uploads/226e132d-6d06-4b9b-968a-54a1d2a4676a.png" 
              alt="Water-Saving Solutions" 
              className="w-full h-auto rounded" 
            />
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Aesthetically Beautiful Bathrooms</h3>
            <p className="font-semibold text-sm mb-1">Products: Flush plates, faucets, ceramics, shower channels from TECE, Clou, Bongio, and Inda.</p>
            <p className="font-semibold text-sm mb-4">Benefit: Elevate bathroom design with premium and luxurious fittings.</p>
            <img 
              src="/public/lovable-uploads/226e132d-6d06-4b9b-968a-54a1d2a4676a.png" 
              alt="Beautiful Bathroom" 
              className="w-full h-auto rounded" 
            />
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Modern Home Solutions</h3>
            <p className="font-semibold text-sm mb-1">Product: InSinkErator food waste disposers, KlimaCore, Filtcon Storm Water Drainage, Lunos FACT</p>
            <p className="font-semibold text-sm mb-4">Benefit: Advanced interior and exterior technology</p>
            <img 
              src="/public/lovable-uploads/226e132d-6d06-4b9b-968a-54a1d2a4676a.png" 
              alt="Modern Home Solutions" 
              className="w-full h-auto rounded" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurUniqueOfferings;
