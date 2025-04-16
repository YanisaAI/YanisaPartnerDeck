
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PricingFeature {
  feature: string;
  starter: string;
  pro: string;
  elite: string;
}

const pricingData: PricingFeature[] = [
  {
    feature: "Service Type",
    starter: "Strategic Coaching",
    pro: "Full Growth Execution",
    elite: "CXO Execution + AI-Led Scale"
  },
  {
    feature: "Meetings per Week",
    starter: "1 Strategic Sync",
    pro: "2 Ops + 1 Growth Strategy Call",
    elite: "3-4 Weekly Calls + Slack + Dashboard Access"
  },
  {
    feature: "Execution Responsibility",
    starter: "Client (with SOPs)",
    pro: "Yanisa Team Executes",
    elite: "Yanisa Becomes CXO Team"
  },
  {
    feature: "AI Sales Agents",
    starter: "Not Included",
    pro: "AI Agent Templates",
    elite: "Custom AI Agents for Lead Gen & Call Booking"
  },
  {
    feature: "Lead Gen & Sales Ownership",
    starter: "Not Included",
    pro: "Assisted",
    elite: "Fully Owned by Yanisa via AI"
  },
  {
    feature: "Web/App/Tool Development",
    starter: "Guidance Only",
    pro: "Shared Vendor Network",
    elite: "Web App / Site / CRM Custom Build (Brand Budget)"
  },
  {
    feature: "Scope Locking",
    starter: "Fixed Monthly Deliverables",
    pro: "Semi-Flexible",
    elite: "Fully Flexible Based on KPIs"
  },
  {
    feature: "Urgent Requests Handling",
    starter: "Not Allowed",
    pro: "Limited",
    elite: "Allowed with SLA"
  },
  {
    feature: "Growth Strategy Planning",
    starter: "Quarterly",
    pro: "Monthly",
    elite: "Bi-Weekly Strategic Deep Dives"
  },
  {
    feature: "Team Building Support",
    starter: "Not Included",
    pro: "Hiring Assistance (2 Roles)",
    elite: "Full Hiring + Management (Up to 5 Roles)"
  },
  {
    feature: "Automation & AI Tools",
    starter: "SOPs Only",
    pro: "Tool Stack Implementation",
    elite: "End-to-End AI Process Automation"
  },
  {
    feature: "Revenue Engine Setup",
    starter: "Not Applicable",
    pro: "CRM + Funnel",
    elite: "Custom AI Revenue Stack"
  },
  {
    feature: "Case Study Creation",
    starter: "Not Applicable",
    pro: "1 Half-Yearly",
    elite: "1 Per Quarter"
  },
  {
    feature: "Additional Meetings",
    starter: "Paid Add-On",
    pro: "2 per Month",
    elite: "Unlimited (per project scope)"
  },
  {
    feature: "Email/Slack Support",
    starter: "48-hour response",
    pro: "24-hour response",
    elite: "6-hour SLA"
  },
  {
    feature: "Deliverable Ownership",
    starter: "Post Full Payment",
    pro: "Post Full Payment",
    elite: "Post Full Payment"
  },
  {
    feature: "Renewal Policy",
    starter: "15 Days Notice Required",
    pro: "15 Days Notice Required",
    elite: "15 Days Notice Required"
  },
  {
    feature: "Refund Policy",
    starter: "No Refunds",
    pro: "No Refunds",
    elite: "No Refunds"
  }
];

const PricingTable = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-5">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <ScrollArea className="w-full">
          <Table>
            <TableHeader className="bg-[#3498db] text-white sticky top-0">
              <TableRow className="hover:bg-[#3498db]">
                <TableHead className="font-bold text-white">Feature</TableHead>
                <TableHead className="text-white">Starter (₹50K/month)</TableHead>
                <TableHead className="text-white">Pro (₹2.5L/month)</TableHead>
                <TableHead className="text-white">Elite (₹5L/month)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((row, index) => (
                <TableRow 
                  key={row.feature}
                  className={`
                    hover:bg-[#e8f4f9] transition-colors
                    ${index % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}
                  `}
                >
                  <TableCell className="font-bold text-[#2c3e50]">{row.feature}</TableCell>
                  <TableCell>{row.starter}</TableCell>
                  <TableCell>{row.pro}</TableCell>
                  <TableCell>{row.elite}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
};

export default PricingTable;
