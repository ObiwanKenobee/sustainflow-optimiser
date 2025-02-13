
import { Users, UserCheck, Building, HandshakeIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";
import { SupplierMetrics } from "@/components/SupplierMetrics";
import { SupplierAIInsights } from "@/components/SupplierAIInsights";
import { BlockchainTracker } from "@/components/BlockchainTracker";

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
                AI-powered supplier management and autonomous negotiation platform
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
                title="Smart Contracts"
                value="98%"
                change="+1.5% from last year"
                icon={<HandshakeIcon className="h-8 w-8 text-success" />}
              />
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <SupplierMetrics />
              <SupplierAIInsights />
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <BlockchainTracker />
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">ESG & Sustainability Scores</h3>
                <div className="space-y-6">
                  {[
                    { label: "Carbon Footprint", value: 85, target: 90 },
                    { label: "Ethical Labor", value: 92, target: 95 },
                    { label: "Circular Economy", value: 78, target: 85 },
                    { label: "Sustainable Materials", value: 88, target: 90 },
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{metric.label}</span>
                        <span className="text-muted-foreground">Target: {metric.target}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div
                          className="h-2 bg-primary rounded-full transition-all"
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                      <div className="text-sm text-muted-foreground text-right">
                        Current: {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Suppliers;
