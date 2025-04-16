
import React from 'react';

interface InfoCardProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  imageSrc?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle, content, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      {subtitle && <div className="text-sm text-gray-500 mb-1">{subtitle}</div>}
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="text-sm">
        {content}
      </div>
      {imageSrc && (
        <div className="mt-4">
          <img src={imageSrc} alt={title} className="w-full h-auto rounded" />
        </div>
      )}
    </div>
  );
};

export default InfoCard;
