import type React from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function Chart({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-full">{children}</div>
}

export function ChartContainer({
  data,
  children,
  className,
}: { data: any[]; children: React.ReactNode; className?: string }) {
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <AreaChart data={data}>
        <XAxis dataKey="date" stroke="#888888" />
        <YAxis stroke="#888888" />
        {children}
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function ChartArea({ dataKey, className }: { dataKey: string; className?: string }) {
  return <Area type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" className={className} />
}

export function ChartTooltip({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip
      contentStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "0.5rem",
        color: "white",
      }}
    >
      {children}
    </Tooltip>
  )
}

export function ChartTooltipContent({ payload, label, active }: { payload: any[]; label: string; active: boolean }) {
  if (active && payload && payload.length) {
    return (
      <div className="p-2">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`Value : ${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}
