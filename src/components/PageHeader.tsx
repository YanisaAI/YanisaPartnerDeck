
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  bgImage = 'bg-bathroom-hero'
}) => {
  return (
    <div className="w-full bg-[#59467e] py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center">
        <div className="w-12 h-12 rounded-md flex items-center justify-center text-white font-bold bg-[#4a3a6f] mr-6">
          Y
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          {subtitle && <p className="text-xl text-white/90 mt-2">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
