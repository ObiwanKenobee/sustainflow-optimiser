
import { Truck, Clock, MapPin, Shell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";

const Logistics = () => {
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
              <h1 className="text-4xl font-bold tracking-tight">Logistics Operations</h1>
              <p className="text-muted-foreground">
                Track and optimize your logistics network
              </p>
            </header>

            <div className="metrics-grid">
              <MetricCard
                title="Active Shipments"
                value="342"
                change="+28 since yesterday"
                icon={<Truck className="h-8 w-8 text-primary" />}
              />
              <MetricCard
                title="Average Delivery Time"
                value="2.3 days"
                change="-0.5 days from last month"
                icon={<Clock className="h-8 w-8 text-success" />}
              />
              <MetricCard
                title="Routes Optimized"
                value="89%"
                change="+4.2% from last month"
                icon={<MapPin className="h-8 w-8 text-primary" />}
              />
              <MetricCard
                title="Fuel Efficiency"
                value="+12%"
                change="+2.1% from last month"
                icon={<Shell className="h-8 w-8 text-success" />}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Logistics;
