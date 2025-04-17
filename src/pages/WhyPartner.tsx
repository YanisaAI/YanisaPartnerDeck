
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent 
} from "@/components/ui/hover-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";

const WhyPartner = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Why Partner with Yanisa?" 
        subtitle="Everything you get with a partnership with us." 
        bgImage="bg-partner-shelf"
      />
      
      <div className="p-6 bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto my-8 px-5">
          <h2 className="text-[36px] font-bold text-[#2c3e50] text-center mb-10 font-poppins">Why Partner with Yanisa?</h2>
          
          {/* Container 1 */}
          <div 
            style={{ transformStyle: 'preserve-3d' }} 
            className="bg-white rounded-lg shadow-[0px_5px_10px_rgba(0,0,0,0.2)] p-6 mb-6 hover:rotate-[5deg] hover:translate-z-[20px] transition-all duration-300"
          >
            <h3 className="text-[32px] font-bold mb-4 font-poppins text-black">🚀 You Aren't Partnering with Just a Marketing Company</h3>
            <p className="text-[24px] font-bold mb-6 text-black">Yanisa is Your Growth Engine</p>
            
            <div className="space-y-4">
              {/* Sub-container 1 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">Combines AI Agents + CXO Execution + Founder Branding</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  You get more than a service—you get a system. Automations powered by AI agents to reduce manual effort and increase output. On-ground CXO-level execution that goes beyond strategies and drives results. Founder-focused branding to build trust, community, and a loyal customer base. Integrated marketing + tech stack to amplify every rupee spent. Playbooks designed for replicable, scalable growth—built in-house, not outsourced.
                </p>
              </div>
              
              {/* Sub-container 2 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">Focuses on Scaling Revenue, Not Just Content or Campaigns</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  We don't chase vanity metrics. We build growth machines. Funnel-first strategies that directly tie into conversions and bottom line. Revenue-linked creatives, copy, and media buying—always built with ROI in mind. Sales-aligned content to reduce CAC and increase LTV. Retargeting flows, CRM integration, and sales team optimization. Always-on performance tracking with agile pivots based on real numbers.
                </p>
              </div>
              
              {/* Sub-container 3 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">Acts Like a Growth Partner, Not a Typical Agency</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  We take ownership, not just deliverables. Monthly OKRs and KPIs tracked with your internal team. Business-driven marketing plans co-created with founders. Real-time Slack/WhatsApp support for execution, not just strategy decks. Embedded thinking: We act like an internal team, not outsiders. Deep understanding of margins, GTM, and scale—not just "creativity."
                </p>
              </div>
              
              {/* Sub-container 4 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">Works with SME/MSME + Funded Startups + Listed Companies</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  We've seen scale. We've delivered it. Campaigns crafted for ₹10 Cr D2C brands and ₹500 Cr legacy players. Solutions adapted to suit both bootstrapped speed and boardroom-scale processes. B2B, D2C, SaaS, and distribution-first models—execution across all. Industry-agnostic frameworks built with speed, performance, and scale in mind. Growth stories from solopreneurs to corporate CXOs—testimonials that speak.
                </p>
              </div>
              
              {/* Sub-container 5 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">Retainer Model with KPI-Based Value Instead of Just Deliverables</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  You pay for outcomes, not hours. Fixed + performance-based retainers—aligned to your revenue goals. Transparent dashboards with week-on-week numbers that matter. Outcome-based tasks—no fluff, no filler. Prioritization frameworks to focus only on high-leverage actions. Strategic inputs + daily execution = predictable, compounding growth.
                </p>
              </div>
            </div>
          </div>
          
          {/* Container 2 */}
          <div 
            style={{ transformStyle: 'preserve-3d' }} 
            className="bg-white rounded-lg shadow-[0px_5px_10px_rgba(0,0,0,0.2)] p-6 hover:rotate-[5deg] hover:translate-z-[20px] transition-all duration-300"
          >
            <h3 className="text-[32px] font-bold mb-6 font-poppins text-black">🧠 You're Not Just Partnering with a Team—You're Partnering with the Future of Scalable Growth</h3>
            
            <div className="space-y-4">
              {/* Sub-container 1 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">A Legacy of Innovation</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  3+ Years. Redefining how brands scale using AI, revenue-led marketing, and CXO-driven execution. Our edge? Built by industry leaders who've walked the talk.
                </p>
              </div>
              
              {/* Sub-container 2 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">Global Presence</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  20+ Global Projects. From India to international markets, we've executed with founders, startups, and corporates—backed by a strong partner ecosystem focused on growth.
                </p>
              </div>
              
              {/* Sub-container 3 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">Pioneers in Sales & Tech Innovation</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  10+ Years Combined Experience. We're building India's most action-driven model combining sales strategy, automation, and AI—crafted specifically for SMEs, MSMEs, and high-growth teams.
                </p>
              </div>
              
              {/* Sub-container 4 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">In-House Technology Expertise</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  10+ Tech Experts. Powered by our sister concern NOCOAI, we build custom tools, automation flows, and AI systems that optimize, scale, and drive bottom-line impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPartner;
