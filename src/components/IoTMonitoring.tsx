
import { Card } from "@/components/ui/card";
import { Activity, Thermometer, Droplets, Zap } from "lucide-react";

const sensors = [
  { 
    icon: Thermometer,
    label: "Temperature",
    value: "23.5°C",
    change: "+0.5°C",
    status: "optimal"
  },
  {
    icon: Droplets,
    label: "Humidity",
    value: "45%",
    change: "-2%",
    status: "warning"
  },
  {
    icon: Activity,
    label: "Vibration",
    value: "0.15g",
    change: "+0.02g",
    status: "optimal"
  },
  {
    icon: Zap,
    label: "Energy Usage",
    value: "4.2kW",
    change: "-0.3kW",
    status: "optimal"
  }
];

export function IoTMonitoring() {
  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">IoT Sensor Network</h3>
      <div className="grid grid-cols-2 gap-4">
        {sensors.map((sensor, index) => {
          const Icon = sensor.icon;
          return (
            <div key={index} className="p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{sensor.label}</span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{sensor.value}</p>
                <p className={`text-sm ${
                  sensor.change.startsWith("+") ? "text-danger" : "text-success"
                }`}>
                  {sensor.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
