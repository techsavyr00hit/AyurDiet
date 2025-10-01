import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
};

export default function MetricCard({ title, value, unit, icon: Icon, trend, trendValue }: MetricCardProps) {
  return (
    <Card data-testid={`card-metric-${title.toLowerCase().replace(/\s/g, "-")}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-mono font-bold" data-testid={`text-metric-value-${title.toLowerCase().replace(/\s/g, "-")}`}>
          {value}
          {unit && <span className="text-lg text-muted-foreground ml-1">{unit}</span>}
        </div>
        {trend && trendValue && (
          <p className={`text-xs ${trend === "up" ? "text-chart-1" : trend === "down" ? "text-chart-2" : "text-muted-foreground"} mt-1`}>
            {trendValue}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
