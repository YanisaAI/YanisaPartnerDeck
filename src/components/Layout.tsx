import React from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import { useSidebar } from '@/hooks/use-sidebar';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const {
    state
  } = useSidebar();
  const isCollapsed = state === 'collapsed';
  return <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-[60px]' : 'ml-[200px]'}`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>;
};
export default Layout;