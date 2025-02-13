
import { FileText, FilePlus, FileCheck, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";

const Reports = () => {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-72">
        <DashboardSidebar />
      </div>
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-8 bg-gradient-to-br from-secondary to-background min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn">
            <header className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Reports & Analytics</h1>
              <p className="text-muted-foreground">
                Generate and analyze comprehensive supply chain reports
              </p>
            </header>

            <div className="metrics-grid">
              <MetricCard
                title="Generated Reports"
                value="1,234"
                change="+123 this month"
                icon={<FileText className="h-8 w-8 text-primary" />}
              />
              <MetricCard
                title="New Reports"
                value="45"
                change="+12 since yesterday"
                icon={<FilePlus className="h-8 w-8 text-success" />}
              />
              <MetricCard
                title="Compliance Rate"
                value="99.9%"
                change="+0.2% from last month"
                icon={<FileCheck className="h-8 w-8 text-success" />}
              />
              <MetricCard
                title="Downloads"
                value="2,345"
                change="+432 this month"
                icon={<Download className="h-8 w-8 text-primary" />}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reports;
