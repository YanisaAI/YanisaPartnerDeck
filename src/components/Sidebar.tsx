
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Sparkles, Users, Package, HelpCircle, BarChart3, Layers, Award, Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sidebarItems = [{
  icon: Sparkles,
  label: 'About Yanisa',
  path: '/about-yanisa'
}, {
  icon: Users,
  label: 'Who we are?',
  path: '/who-we-are'
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
  label: 'How to get started?',
  path: '/how-to-get-started'
}];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogoClick = () => {
    navigate('/about-yanisa');
  };

  return (
    <div className={`${isCollapsed ? 'w-[60px]' : 'w-[220px]'} min-h-screen bg-sidebar flex flex-col border-r border-sidebar-border transition-all duration-300`}>
      <div className="p-4 border-b border-sidebar-border flex justify-between items-center">
        {!isCollapsed ? (
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold bg-[#59467e] cursor-pointer" 
              onClick={handleLogoClick}
            >
              Y
            </div>
            <h1 className="text-sidebar-foreground font-medium">Yanisa Partner Deck</h1>
          </div>
        ) : (
          <div 
            className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold bg-[#59467e] cursor-pointer mx-auto" 
            onClick={handleLogoClick}
          >
            Y
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar} 
          className="h-8 w-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <ChevronLeft className={`h-5 w-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2">
        <nav className="space-y-1 px-2">
          {sidebarItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className="sidebar-item text-sidebar-foreground flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent"
            >
              <item.icon className="sidebar-icon h-5 w-5" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
      
      {!isCollapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <button className="w-full text-center py-2 px-4 rounded-md bg-sidebar-border text-sidebar-foreground hover:bg-gray-700 transition-colors">
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
