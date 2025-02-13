
import { Shield, Package, Truck, Building2, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  { icon: Building2, label: "Raw Materials", status: "verified", hash: "0x8f2e...3d4a" },
  { icon: Truck, label: "Transportation", status: "verified", hash: "0x7b1c...9e2f" },
  { icon: Package, label: "Manufacturing", status: "verified", hash: "0x6d4a...1b8c" },
  { icon: Shield, label: "Quality Check", status: "in-progress", hash: "0x5e3b...7a9d" },
];

export function BlockchainTracker() {
  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">Blockchain Traceability</h3>
      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex items-center gap-4">
              <div className={`p-2 rounded-full ${
                step.status === "verified" ? "bg-success/10" : "bg-warning/10"
              }`}>
                <Icon className={`h-5 w-5 ${
                  step.status === "verified" ? "text-success" : "text-warning"
                }`} />
              </div>
              <div className="flex-1">
                <p className="font-medium">{step.label}</p>
                <p className="text-sm text-muted-foreground">{step.hash}</p>
              </div>
              {step.status === "verified" && (
                <Check className="h-5 w-5 text-success" />
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
