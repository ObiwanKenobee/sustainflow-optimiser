
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

const data = [
  { name: 'Jan', emissions: 4000, efficiency: 2400 },
  { name: 'Feb', emissions: 3000, efficiency: 2800 },
  { name: 'Mar', emissions: 2000, efficiency: 3200 },
  { name: 'Apr', emissions: 2780, efficiency: 3500 },
  { name: 'May', emissions: 1890, efficiency: 3800 },
  { name: 'Jun', emissions: 2390, efficiency: 4000 },
];

export function SupplyChainChart() {
  return (
    <Card className="chart-container">
      <h3 className="text-lg font-semibold mb-4">Supply Chain Performance</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="emissions"
            stroke="#FF7675"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="efficiency" stroke="#00B894" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
