
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Users, Package, HelpCircle, Layers, Award, BarChart3, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const sidebarItems = [
  {
    icon: Sparkles,
    label: 'About Us',
    path: '/about-yanisa'
  },
  {
    icon: Package,
    label: 'Our Unique Offerings',
    path: '/our-unique-offerings'
  },
  {
    icon: HelpCircle,
    label: 'Why Partner?',
    path: '/why-partner'
  },
  {
    icon: Layers,
    label: 'Partnership Levels',
    path: '/partnership-levels'
  },
  {
    icon: Award,
    label: 'Partner Success Stories',
    path: '/partner-success-stories'
  },
  {
    icon: BarChart3,
    label: 'Revenue Opportunities',
    path: '/revenue-opportunities'
  },
  {
    icon: Clock,
    label: 'How to Get Started?',
    path: '/how-to-get-started'
  }
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div 
      className={cn(
        "fixed left-0 top-0 bottom-0 bg-[#1a1a1a] flex flex-col border-r border-sidebar-border transition-all duration-300 z-20 h-screen",
        isCollapsed ? "w-[60px]" : "w-[200px]"
      )}
    >
      <div className="p-4 flex flex-col items-center border-b border-sidebar-border">
        {/* Logo placeholder */}
        <div className="w-full flex justify-center mb-2">
          <div className="h-[50px] w-[50px] bg-white flex items-center justify-center rounded-full text-black text-2xl font-bold">
            Y
          </div>
        </div>
        
        {/* Tagline */}
        {!isCollapsed && (
          <p className="text-white text-sm font-semibold mt-2 text-center">Yanisa Partner Deck</p>
        )}
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8 p-0 text-white hover:bg-gray-700 mt-4"
        >
          <ChevronLeft className={cn("h-5 w-5 transition-transform", isCollapsed && "rotate-180")} />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2">
        <nav className="space-y-1 px-2">
          {sidebarItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={index} 
                to={item.path} 
                className={cn(
                  "flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition-colors",
                  isActive && "bg-gray-700"
                )}
              >
                <item.icon className="h-5 w-5 text-white" />
                {!isCollapsed && <span className="text-white">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Footer with Sign In button */}
      <div className="p-4 border-t border-sidebar-border">
        <Button 
          variant="outline" 
          className={cn(
            "w-full bg-white text-black hover:bg-gray-100",
            isCollapsed && "p-0 flex justify-center"
          )}
        >
          {isCollapsed ? "SI" : "Sign In"}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
