
import { Card } from "@/components/ui/card";
import { Brain, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";

const insights = [
  {
    type: "opportunity",
    title: "Sustainable Supplier Match",
    description: "AI identified 3 new suppliers with 25% lower carbon footprint",
    icon: Brain,
  },
  {
    type: "risk",
    title: "Supply Chain Risk Alert",
    description: "Potential geopolitical disruption in Southeast Asia region",
    icon: AlertTriangle,
  },
  {
    type: "success",
    title: "Smart Contract Verified",
    description: "Ethical labor compliance confirmed for 12 key suppliers",
    icon: CheckCircle2,
  },
  {
    type: "trend",
    title: "Cost Optimization",
    description: "AI negotiations achieved 15% cost reduction with top suppliers",
    icon: TrendingUp,
  },
];

export function SupplierAIInsights() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">AI-Driven Insights</h3>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              insight.type === "risk"
                ? "bg-warning/10 text-warning"
                : insight.type === "success"
                ? "bg-success/10 text-success"
                : insight.type === "opportunity"
                ? "bg-primary/10 text-primary"
                : "bg-secondary/50 text-foreground"
            }`}
          >
            <div className="flex items-start gap-3">
              <insight.icon className="h-5 w-5 mt-0.5" />
              <div>
                <h4 className="font-medium">{insight.title}</h4>
                <p className="text-sm opacity-90">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
