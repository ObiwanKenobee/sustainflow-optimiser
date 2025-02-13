
import { BarChart2, TrendingUp, ArrowUpRight, PieChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";

const Analytics = () => {
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
              <h1 className="text-4xl font-bold tracking-tight">Advanced Analytics</h1>
              <p className="text-muted-foreground">
                Deep insights into your supply chain performance metrics
              </p>
            </header>

            <div className="metrics-grid">
              <MetricCard
                title="ROI"
                value="+32%"
                change="+5.2% from last quarter"
                icon={<TrendingUp className="h-8 w-8 text-success" />}
              />
              <MetricCard
                title="Efficiency Score"
                value="94.5"
                change="+2.1% from last month"
                icon={<BarChart2 className="h-8 w-8 text-primary" />}
              />
              <MetricCard
                title="Cost Savings"
                value="$1.2M"
                change="+15.3% from last month"
                icon={<ArrowUpRight className="h-8 w-8 text-success" />}
              />
              <MetricCard
                title="Market Share"
                value="28%"
                change="+3.2% from last quarter"
                icon={<PieChart className="h-8 w-8 text-primary" />}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
