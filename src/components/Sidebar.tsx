import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Users, Package, HelpCircle, Layers, Award, BarChart3, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/use-sidebar';
const sidebarItems = [{
  icon: Sparkles,
  label: 'About Us',
  path: '/about-yanisa'
}, {
  icon: Package,
  label: 'Our Unique Offerings',
  path: '/our-unique-offerings'
}, {
  icon: HelpCircle,
  label: 'Why Partner?',
  path: '/why-partner'
}, {
  icon: Layers,
  label: 'Partnership Levels',
  path: '/partnership-levels'
}, {
  icon: Award,
  label: 'Partner Success Stories',
  path: '/partner-success-stories'
}, {
  icon: BarChart3,
  label: 'Revenue Opportunities',
  path: '/revenue-opportunities'
}, {
  icon: Clock,
  label: 'How to Get Started?',
  path: '/how-to-get-started'
}];
const Sidebar = () => {
  const location = useLocation();
  const {
    state,
    toggle
  } = useSidebar();
  const isCollapsed = state === 'collapsed';
  return <div className={cn("fixed left-0 top-0 bottom-0 bg-[#1a1a1a] flex flex-col border-r border-sidebar-border transition-all duration-300 z-20 h-screen", isCollapsed ? "w-[60px]" : "w-[200px]")}>
      <div className="p-4 flex flex-col items-center border-b border-sidebar-border relative">
        {/* Logo placeholder */}
        <div className="w-20 flex justify-center mb-1">
          <div className="h-[50px] w-[50px] bg-white flex items-center justify-center rounded-full text-black text-2xl font-bold">
            Y
          </div>
        </div>
        
        {/* Tagline */}
        {!isCollapsed && <p className="text-white text-sm font-semibold mt-1 text-center">Yanisa Partner Deck</p>}
        
        {/* Toggle button positioned at top right */}
        <Button variant="ghost" size="icon" onClick={toggle} className="absolute right-1 top-1 h-5 w-5 p-0 text-white hover:bg-gray-700">
          <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2">
        <nav className="space-y-1 px-2">
          {sidebarItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return <Link key={index} to={item.path} className={cn("flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition-colors", isActive && "bg-gray-700")}>
                <item.icon className="h-5 w-5 text-white" />
                {!isCollapsed && <span className="text-white">{item.label}</span>}
              </Link>;
        })}
        </nav>
      </div>
      
      {/* Footer with Sign In button - only shown when sidebar is expanded */}
      {!isCollapsed && <div className="p-4 border-t border-sidebar-border">
          <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100">
            Sign In
          </Button>
        </div>}
    </div>;
};
export default Sidebar;