
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Calendar,
  Sparkles,
  Users,
  Package,
  HelpCircle,
  BarChart3,
  Layers,
  Award,
  Clock
} from 'lucide-react';

const sidebarItems = [
  { icon: FileText, label: 'Selected Partner', path: '/selected-partner' },
  { icon: Calendar, label: 'Appointments', path: '/appointments' },
  { icon: Sparkles, label: 'Beauty Meets Functionality', path: '/beauty-meets-functionality' },
  { icon: Sparkles, label: '(DU)Beauty Meets Functionality', path: '/du-beauty-meets-functionality' },
  { icon: Users, label: 'Who we are?', path: '/who-we-are' },
  { icon: Users, label: '(DU)Who we are?', path: '/du-who-we-are' },
  { icon: Package, label: 'Our Unique Offerings', path: '/our-unique-offerings' },
  { icon: Package, label: '(DU)Our Unique Offerings', path: '/du-our-unique-offerings' },
  { icon: HelpCircle, label: 'Why Partner?', path: '/why-partner' },
  { icon: HelpCircle, label: '(DU)Why Partner?', path: '/du-why-partner' },
  { icon: Layers, label: 'Partnership Levels', path: '/partnership-levels' },
  { icon: Award, label: 'Partner Success Stories', path: '/partner-success-stories' },
  { icon: Award, label: '(DU)Partner Success Stories', path: '/du-partner-success-stories' },
  { icon: BarChart3, label: 'Revenue Opportunities', path: '/revenue-opportunities' },
  { icon: Clock, label: 'How to get started?', path: '/how-to-get-started' },
];

const Sidebar = () => {
  return (
    <div className="w-[220px] min-h-screen bg-sidebar flex flex-col border-r border-sidebar-border">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center text-white font-bold">
            M
          </div>
          <h1 className="text-sidebar-foreground font-medium">Partner Deck</h1>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2">
        <nav className="space-y-1 px-2">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="sidebar-item text-sidebar-foreground"
            >
              <item.icon className="sidebar-icon" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
        <button className="w-full text-center py-2 px-4 rounded-md bg-sidebar-border text-sidebar-foreground hover:bg-gray-700 transition-colors">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
