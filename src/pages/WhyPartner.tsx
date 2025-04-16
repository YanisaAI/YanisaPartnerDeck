
import React from 'react';
import PageHeader from '@/components/PageHeader';

const WhyPartner = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="What's in the Partnership Package ?" 
        subtitle="Everything you get with a partnership with us." 
        bgImage="bg-partner-shelf"
      />
      
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Exclusive Advantages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Access to Premium Products</h3>
            <p className="text-sm mb-4">
              Access: high-performing solutions like odor-free systems, leak-proof plumbing, and InSinkErator.
            </p>
            <p className="text-sm">
              Exclusive partnerships with globally renowned brands.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Localized Lead Generation</h3>
            <p className="text-sm mb-4">
              Advertising campaigns run in collaboration with your Instagram pages to send customers your way.
            </p>
            <p className="text-sm">
              Proven results with an additional business generation of 4-6 per month using Meta Ads in major cities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Streamlined Logistics</h3>
            <p className="text-sm mb-4">
              Efficient order fulfillment with a 48-hour delivery commitment through our state-of-the-art warehouses.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Tailored Offerings</h3>
            <p className="text-sm mb-4">
              Customizable solutions to match the needs of contractors, showroom owners, architects, and developers.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Lucrative Margins</h3>
            <p className="text-sm mb-4">
              High profitability with competitive margins across all product categories.
            </p>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-6 mt-10">Prtnr+ Sales Team Incentive Program</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Upskilling Through Expert Training</h3>
            <p className="text-sm mb-4">
              Sales and technical training led by Yash Sangha, a renowned sales coach who helps upgrade sales team and works with top partners.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Additional Sales Incentives</h3>
            <p className="text-sm mb-4">
              Direct company-paid incentives for converter sales and plumber referrals via an app.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">AI-Powered CRM</h3>
            <p className="text-sm mb-4">
              Generate customer quotations instantly and send them via WhatsApp for faster conversations.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Comprehensive Sales Materials</h3>
            <p className="text-sm mb-4">
              Access to newly designed concept brochures to simplify and enhance your sales efforts.
            </p>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-6 mt-10">Additional Support</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Customized Design Assistance</h3>
            <p className="text-sm mb-4">
              Full bathroom design support from AARC, backed by the Head Office for tailored customer solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold text-lg mb-3">Specialized Project Pricing</h3>
            <p className="text-sm mb-4">
              Exclusive pricing for project sales upon presenting valid purchase orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPartner;
