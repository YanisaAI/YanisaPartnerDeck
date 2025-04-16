
import React from 'react';
import PageHeader from '@/components/PageHeader';

const Appointments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Appointments" 
        subtitle="Schedule and manage your meetings" 
      />
      
      <div className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Manage Your Appointments</h2>
          <p className="text-gray-600">This is where you can schedule and track meetings with partners.</p>
          
          {/* Placeholder for appointment scheduling component */}
          <div className="border rounded-lg p-6 mt-4 text-center text-gray-400">
            No appointments scheduled. Click "New Appointment" to create one.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
