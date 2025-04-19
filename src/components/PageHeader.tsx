import React from 'react';
import { useSidebar } from '@/hooks/use-sidebar';
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle = "Potential to Reality",
  bgImage
}) => {
  const {
    state
  } = useSidebar();
  const isCollapsed = state === 'collapsed';
  return <div className={`w-full py-6 px-6 bg-black/[0.98] sticky top-0 transition-all duration-300 z-10 ${bgImage ? bgImage : ''}`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center h-20 w-25">
          <img src="/lovable-uploads/6356e53c-6eea-43a0-bc70-48f1701e9a20.png" alt="Yanisa Execution" className={`h-8 mr-2 ${isCollapsed ? 'h-6' : 'h-8'}`} />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-white">{title}</h1>
          {subtitle && <p className="text-sm md:text-base text-white/90 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>;
};
export default PageHeader;