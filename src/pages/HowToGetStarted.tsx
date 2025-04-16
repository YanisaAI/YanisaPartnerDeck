
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { CircleCheck, Circle } from 'lucide-react';

const HowToGetStarted = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="How to Get Started" 
        subtitle="Your Path to Partnership with Modernizing Trends" 
      />
      
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow">
            <CircleCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Apply for Partnership</h3>
              <p className="text-sm text-gray-600">Day 1</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow">
            <Circle className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Verification & Approval</h3>
              <p className="text-sm text-gray-600">Days 2-3</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow">
            <Circle className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Model Selection & Finalization</h3>
              <p className="text-sm text-gray-600">Days 4-5</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow">
            <Circle className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Contract Signing & Initial Training</h3>
              <p className="text-sm text-gray-600">Days 6-7</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow">
            <Circle className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Brand & Sales Asset Delivery</h3>
              <p className="text-sm text-gray-600">Days 8-10</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow">
            <Circle className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">In-Person Training</h3>
              <p className="text-sm text-gray-600">Days 11-15</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow">
            <Circle className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Revenue Generation Begins</h3>
              <p className="text-sm text-gray-600">Day 15+</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Step-by-Step Process</h2>
          
          <ol className="list-decimal pl-5 space-y-6">
            <li>
              <h3 className="font-semibold">Apply for Partnership</h3>
              <ol className="list-decimal ml-5 mt-2 space-y-2">
                <li className="text-sm">Sign up for an application with the help of our ASM.</li>
                <li className="text-sm">Why? Applications are reviewed for eligibility to ensure high-quality service.</li>
              </ol>
            </li>
            
            <li>
              <h3 className="font-semibold">Verification & Approval</h3>
              <ol className="list-decimal ml-5 mt-2 space-y-2">
                <li className="text-sm">Our team will verify your eligibility and reach out to discuss the next steps.</li>
              </ol>
            </li>
            
            <li>
              <h3 className="font-semibold">Model Selection & Finalization</h3>
              <ol className="list-decimal ml-5 mt-2 space-y-2">
                <li className="text-sm">Once approved, we will schedule a call to explain the partnership models and finalize the level you opt for.</li>
              </ol>
            </li>
            
            <li>
              <h3 className="font-semibold">Contract Signing & Initial Training</h3>
              <ol className="list-decimal ml-5 mt-2 space-y-2">
                <li className="text-sm">Sign the partnership contract.</li>
                <li className="text-sm">Attend an online training session to get familiar with our products, systems, and processes.</li>
              </ol>
            </li>
            
            <li>
              <h3 className="font-semibold">Brand & Sales Asset Delivery</h3>
              <ol className="list-decimal ml-5 mt-2 space-y-2">
                <li className="text-sm">Receive branding and sales assets (e-brochures, physical brochures, CRM access, etc.) within 7-10 days.</li>
                <li className="text-sm">Get ready to launch!</li>
              </ol>
            </li>
            
            <li>
              <h3 className="font-semibold">In-Person Training</h3>
              <ol className="list-decimal ml-5 mt-2 space-y-2">
                <li className="text-sm">From Day 10 to Day 15, our ASM and technician will conduct on-site training at your display center.</li>
              </ol>
            </li>
            
            <li>
              <h3 className="font-semibold">Revenue Generation Begins</h3>
              <ol className="list-decimal ml-5 mt-2 space-y-2">
                <li className="text-sm">Within 15 days of onboarding, we'll start generating leads and hosting plumber events to kickstart your sales.</li>
              </ol>
            </li>
          </ol>
          
          <div className="mt-10 bg-indigo-800 text-white p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">The future belongs to those who see possibilities before they become obvious.</h3>
            <p className="text-sm mb-4">- John Sculley</p>
            <p className="text-sm italic">Are you ready to shape the future of bathroom innovation with us?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToGetStarted;
