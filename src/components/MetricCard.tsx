
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({ title, value, change, icon, className }: MetricCardProps) {
  return (
    <Card className={cn("stat-card", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {change && (
            <p className={cn(
              "text-sm font-medium",
              change.startsWith("+") ? "text-success" : "text-danger"
            )}>
              {change}
            </p>
          )}
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
    </Card>
  );
}
