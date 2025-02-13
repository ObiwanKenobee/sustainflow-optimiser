
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const predictiveData = [
  { time: 'Now', actual: 85, predicted: 85 },
  { time: '+1h', actual: null, predicted: 82 },
  { time: '+2h', actual: null, predicted: 88 },
  { time: '+3h', actual: null, predicted: 91 },
  { time: '+4h', actual: null, predicted: 87 },
  { time: '+5h', actual: null, predicted: 89 },
];

export function PredictiveAnalytics() {
  return (
    <Card className="chart-container">
      <h3 className="text-lg font-semibold mb-4">AI Supply Chain Predictions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={predictiveData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#00B894"
            strokeWidth={2}
            dot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#FF7675"
            strokeDasharray="5 5"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
