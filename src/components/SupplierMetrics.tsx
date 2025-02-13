
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', sustainability: 85, compliance: 90, cost: 78 },
  { month: 'Feb', sustainability: 88, compliance: 92, cost: 82 },
  { month: 'Mar', sustainability: 87, compliance: 91, cost: 85 },
  { month: 'Apr', sustainability: 92, compliance: 94, cost: 88 },
  { month: 'May', sustainability: 95, compliance: 95, cost: 90 },
  { month: 'Jun', sustainability: 94, compliance: 97, cost: 92 },
];

export function SupplierMetrics() {
  return (
    <Card className="p-6 h-[400px]">
      <h3 className="text-lg font-semibold mb-4">Supplier Performance Metrics</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sustainability" stroke="#00B894" strokeWidth={2} />
          <Line type="monotone" dataKey="compliance" stroke="#00CED1" strokeWidth={2} />
          <Line type="monotone" dataKey="cost" stroke="#FF7675" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
