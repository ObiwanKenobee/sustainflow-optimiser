
import { Activity, TrendingDown, ArrowUpRight, Leaf, Brain, Link, Cpu } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { SupplyChainChart } from "@/components/SupplyChainChart";
import { PredictiveAnalytics } from "@/components/PredictiveAnalytics";
import { BlockchainTracker } from "@/components/BlockchainTracker";
import { IoTMonitoring } from "@/components/IoTMonitoring";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">AI-Powered Supply Chain Analytics</h1>
          <p className="text-muted-foreground">
            Real-time insights and autonomous optimization for sustainable supply chains
          </p>
        </header>

        <div className="metrics-grid">
          <MetricCard
            title="Carbon Footprint"
            value="- 25%"
            change="-8.1% from last month"
            icon={<Leaf className="h-8 w-8 text-success" />}
          />
          <MetricCard
            title="Supply Chain Efficiency"
            value="92%"
            change="+5.4% from last month"
            icon={<Activity className="h-8 w-8 text-primary" />}
          />
          <MetricCard
            title="Waste Reduction"
            value="1.2 tons"
            change="-12.3% from last month"
            icon={<TrendingDown className="h-8 w-8 text-warning" />}
          />
          <MetricCard
            title="Ethical Compliance"
            value="98%"
            change="+2.1% from last month"
            icon={<ArrowUpRight className="h-8 w-8 text-success" />}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <PredictiveAnalytics />
          <SupplyChainChart />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="glass-card rounded-lg p-6 space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI Insights
            </h3>
            <div className="space-y-4">
              {[
                { title: "Potential supply delay detected", severity: "warning" },
                { title: "Carbon emissions target achieved", severity: "success" },
                { title: "New supplier verification completed", severity: "info" },
              ].map((alert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-md ${
                    alert.severity === "warning"
                      ? "bg-warning/10 text-warning"
                      : alert.severity === "success"
                      ? "bg-success/10 text-success"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {alert.title}
                </div>
              ))}
            </div>
          </div>
          <BlockchainTracker />
          <IoTMonitoring />
        </div>
      </div>
    </div>
  );
};

export default Index;
