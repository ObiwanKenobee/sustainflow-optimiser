
import { Box, Package, Warehouse, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";

const Inventory = () => {
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
              <h1 className="text-4xl font-bold tracking-tight">Inventory Management</h1>
              <p className="text-muted-foreground">
                Real-time tracking and optimization of inventory levels
              </p>
            </header>

            <div className="metrics-grid">
              <MetricCard
                title="Total Stock"
                value="45,892"
                change="+2.5% from last month"
                icon={<Box className="h-8 w-8 text-primary" />}
              />
              <MetricCard
                title="Low Stock Items"
                value="23"
                change="+5 since yesterday"
                icon={<AlertTriangle className="h-8 w-8 text-warning" />}
              />
              <MetricCard
                title="Warehouse Capacity"
                value="78%"
                change="-5.3% from last month"
                icon={<Warehouse className="h-8 w-8 text-success" />}
              />
              <MetricCard
                title="Pending Orders"
                value="156"
                change="+12 since yesterday"
                icon={<Package className="h-8 w-8 text-primary" />}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inventory;
