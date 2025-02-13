
import { Users, UserCheck, Building, HandshakeIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";

const Suppliers = () => {
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
              <h1 className="text-4xl font-bold tracking-tight">Supplier Network</h1>
              <p className="text-muted-foreground">
                Manage and monitor your supplier relationships
              </p>
            </header>

            <div className="metrics-grid">
              <MetricCard
                title="Active Suppliers"
                value="234"
                change="+12 this quarter"
                icon={<Users className="h-8 w-8 text-primary" />}
              />
              <MetricCard
                title="Verified Partners"
                value="89%"
                change="+2.3% from last month"
                icon={<UserCheck className="h-8 w-8 text-success" />}
              />
              <MetricCard
                title="Global Presence"
                value="45 countries"
                change="+3 since last quarter"
                icon={<Building className="h-8 w-8 text-primary" />}
              />
              <MetricCard
                title="Contract Renewals"
                value="98%"
                change="+1.5% from last year"
                icon={<HandshakeIcon className="h-8 w-8 text-success" />}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Suppliers;
