
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload } from 'lucide-react';

const DuWhoWeAre = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    
    setUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      setFile(null);
      // Here you would typically handle the actual file upload to a server
      alert('File uploaded successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="DU Who We Are" subtitle="Document Upload for Company Information" />
      
      <div className="p-6 bg-[#f9f9f9]">
        <div className="max-w-[800px] mx-auto py-8 px-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Upload Your Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-6">
                <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                     onClick={() => document.getElementById('fileInput')?.click()}>
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">Click to browse or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOCX, PPTX or images (max 10MB)</p>
                  {file && (
                    <p className="mt-2 text-sm font-medium text-blue-600">{file.name}</p>
                  )}
                </div>

                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf,.docx,.pptx,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileChange}
                />

                <Button 
                  onClick={handleUpload} 
                  disabled={!file || uploading}
                  className="w-full"
                >
                  {uploading ? 'Uploading...' : 'Upload Document'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DuWhoWeAre;
