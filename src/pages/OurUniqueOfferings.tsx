import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
const OurUniqueOfferings = () => {
  return <div className="min-h-screen bg-gray-50">
      <PageHeader title="Our Unique Offerings" subtitle="Transforming Business Growth Inside and Out" />
      
      <div className="p-6 bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto my-8 px-5">
          
          
          {/* Container 1 */}
          <div style={{
          transformStyle: 'preserve-3d'
        }} className="bg-white rounded-lg shadow-[0px_5px_10px_rgba(0,0,0,0.2)] p-6 mb-6 ">
            <h3 className="text-[32px] font-bold mb-4 font-poppins text-black">🚀 What Does Yanisa Offer?</h3>
            <p className="text-[24px] font-bold mb-6 text-black">We don't just provide services. We build business units. From visibility to profitability — Yanisa owns the outcome.</p>
            
            <div className="space-y-4">
              {/* Sub-container 1 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{
              transformStyle: 'preserve-3d'
            }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">🟣 A. Yanisa Studio: Your Personal Brand Engine powered by AI + Automation</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  ✅ End-to-End Podcast Production (Ideation → Recording → Distribution)<br />
                  ✅ AI Avatar Videos to scale your presence without your daily time<br />
                  ✅ Automated Personal Branding with daily social content<br />
                  📆 Just 3 days/month of your time = 30 days of high-quality content<br />
                  📈 We craft an online identity that builds trust, drives inbound leads, and opens serious opportunities
                </p>
              </div>
              
              {/* Sub-container 2 */}
              <div className="bg-white rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] p-4 hover:translate-z-[10px] transition-all duration-300" style={{
              transformStyle: 'preserve-3d'
            }}>
                <h4 className="text-[24px] font-bold mb-2 text-black">🟢 B. Growth as a Service (GaaS): Your Revenue Growth Engine powered by Tech + CXO Execution</h4>
                <p className="text-[16px] text-[#2c3e50]">
                  ✅ Build custom AI agents for internal ops & lead handling<br />
                  ✅ Design & deploy websites and web apps for customer acquisition or operations<br />
                  ✅ Scale your topline revenue with lean sales teams driven by AI and playbooks<br />
                  💡 We act as your CXO team — planning, budgeting, hiring, building, and executing
                </p>
              </div>
            </div>
          </div>
          
          {/* Container 2 */}
          <div style={{
          transformStyle: 'preserve-3d'
        }} className="bg-white rounded-lg shadow-[0px_5px_10px_rgba(0,0,0,0.2)] p-6 mb-6 ">
            <h3 className="text-[32px] font-bold mb-4 font-poppins text-black">💥 What You Get in 6 Months</h3>
            <div className="text-[16px] text-[#2c3e50]">
              <p>Profitable business unit with positive cash flows.</p>
              <p>AI-enabled systems to cut costs and increase velocity.</p>
              <p>A lean, trained team reporting directly to Yanisa CXOs.</p>
              <p>A clear growth plan, where ownership lies with us.</p>
              <p>📊 Example: You do ₹3 Cr/year and want to double it? We sit down, lock the budgets (excluding our retainer), align on KPIs, and run the show.</p>
            </div>
          </div>
          
          {/* Table */}
          <div className="mt-8 overflow-hidden rounded-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="text-[18px] font-bold text-black py-4 px-4 border border-gray-200">Pain Point Group</TableHead>
                  <TableHead className="text-[18px] font-bold text-black py-4 px-4 border border-gray-200">How Yanisa Solves It</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-white">
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Escape the Founder Trap: Burnout, no freedom, constant firefighting, business can't run without you</TableCell>
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">We become your CXOs. We run daily ops, build systems, hire & manage the team. You give direction, we execute. 3 days/month from you = 30 days execution from us.</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50">
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Systematize & Automate Ops: No SOPs, no delegation, over-dependence, bottlenecks</TableCell>
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">We set up SOPs, AI agents, and automation to streamline operations. Your business runs with clarity and accountability.</TableCell>
                </TableRow>
                <TableRow className="bg-white">
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Predictable, Profitable Growth: Cashflow issues, low margins, high overhead</TableCell>
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Our AI-led sales + lean team structure ensures you hit positive cashflows within 6 months. Focused on topline and bottom-line.</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50">
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Scalable Sales Engine: Poor lead generation, weak sales process, no marketing flywheel</TableCell>
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">We build AI-powered lead gen, outbound agents, and inbound funnels. Sales processes that convert, with minimal founder involvement.</TableCell>
                </TableRow>
                <TableRow className="bg-white">
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Build a Profitable Media Company Around Your Brand: No visibility, no differentiation, no brand pull</TableCell>
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Yanisa Studios builds your personal brand — podcasts, AI videos, daily content — making you a category authority.</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50">
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Productize & Simplify Delivery: Custom projects, poor scalability, inconsistent results</TableCell>
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">We redesign your offerings for scalability — repeatable, profitable, easy to deliver.</TableCell>
                </TableRow>
                <TableRow className="bg-white">
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Build & Lead High-Performance Teams: Wrong hires, burnout, no ownership, no metrics</TableCell>
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">We hire, train, and lead your team. Clear KRAs, performance tracking, weekly reviews. We take full ownership.</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50">
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Get Out of Daily Chaos & Think Big Again: No time for vision, creative block, imposter syndrome</TableCell>
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">With Yanisa as your execution layer, your mental load drops. You focus on future, innovation, and impact.</TableCell>
                </TableRow>
                <TableRow className="bg-white">
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Financially Sustainable Execution: Limited budgets, can't invest in growth</TableCell>
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">We co-plan a budget that works. You fund team, tools, and tech — we deliver growth, backed by KPI-linked retainer.</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50">
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">Complete Business Transformation with You at the Center: Misalignment, reactive model, stuck in self-employment</TableCell>
                  <TableCell className="py-4 px-4 border border-gray-200 text-[16px]">We align the company to your goals, values, and lifestyle. You finally build a business that works for you, not the other way around.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>;
};
export default OurUniqueOfferings;