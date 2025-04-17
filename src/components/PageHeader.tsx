
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
    <div className="w-full bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 text-center">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
