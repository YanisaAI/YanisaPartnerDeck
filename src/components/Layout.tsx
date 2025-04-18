
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import PageHeader from './PageHeader';
import { useSidebar } from '@/hooks/use-sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const [pageTitle, setPageTitle] = useState('About Yanisa');
  
  // Update page title based on the current route
  useEffect(() => {
    const path = location.pathname;
    
    // Map routes to page titles
    const routeTitles: { [key: string]: string } = {
      '/': 'Yanisa Partner Deck',
      '/about-yanisa': 'About Yanisa',
      '/who-we-are': 'Who We Are',
      '/our-unique-offerings': 'Our Unique Offerings',
      '/why-partner': 'Why Partner?',
      '/partnership-levels': 'Partnership Levels',
      '/partner-success-stories': 'Partner Success Stories',
      '/revenue-opportunities': 'Revenue Opportunities',
      '/how-to-get-started': 'How to Get Started?'
    };
    
    setPageTitle(routeTitles[path] || 'Yanisa Partner Deck');
  }, [location]);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-[60px]' : 'ml-[200px]'}`}>
        <div className="flex flex-col min-h-screen">
          <PageHeader title={pageTitle} />
          <main className="flex-1 px-4 md:px-6 py-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
