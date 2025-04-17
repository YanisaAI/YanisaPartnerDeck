
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle = "Potential to Reality",
  bgImage,
}) => {
  return (
    <div className={`w-full py-12 px-6 bg-black/[0.98] ${bgImage ? bgImage : ''}`}>
      <div className="max-w-[1200px] mx-auto flex items-center">
        <div className="flex items-center">
          <img
            src="/lovable-uploads/6356e53c-6eea-43a0-bc70-48f1701e9a20.png"
            alt="Yanisa Execution"
            className="h-16 mr-4"
          />
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
