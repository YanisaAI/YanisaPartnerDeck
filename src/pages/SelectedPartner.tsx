
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const SelectedPartner = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Selected Partners</h1>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search" className="pl-10 w-[300px]" />
          </div>
          
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 text-sm font-medium text-gray-600">COMPANY NAME</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600">PHONE</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600">ADDRESS</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600">COURIER SENT</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600">RECEIVED</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-600">OPEN IN MAP</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty table for now, this would be populated with data in a real application */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedPartner;
