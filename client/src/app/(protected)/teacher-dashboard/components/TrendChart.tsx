import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

export function TrendChart({
  title,
  data,
  yLabel,
  valueFormatter,
}: {
  title: string;
  data: { date: string; value: number }[];
  yLabel?: string;
  valueFormatter?: (v: number) => string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-10">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} className="border-red-500 p-0 m-0">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: "0.675rem" }} />
          <YAxis
            tick={{ fontSize: "0.675rem" }}
            width={50}
            tickFormatter={valueFormatter}
            label={
              yLabel
                ? {
                    value: yLabel,
                    angle: -90,
                    position: "insideTopLeft",
                    fontSize: "0.675rem",
                  }
                : undefined
            }
          />
          <Tooltip
            formatter={
              valueFormatter
                ? (value, name) => [
                    valueFormatter(Number(value ?? 0)),
                    String(name ?? ""),
                  ]
                : undefined
            }
            labelStyle={{ fontSize: "0.675rem" }}
            contentStyle={{ fontSize: "0.675rem" }}
          />
          {/* <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} /> */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#82ca9d"
            fill="#82ca9d"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
