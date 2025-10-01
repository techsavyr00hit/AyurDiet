import MetricCard from "../MetricCard";
import { Activity, Droplets, Footprints, Flame } from "lucide-react";

export default function MetricCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <MetricCard title="Calories" value="1,847" unit="kcal" icon={Flame} trend="up" trendValue="+12% from yesterday" />
      <MetricCard title="Glucose" value="95" unit="mg/dL" icon={Droplets} trend="neutral" trendValue="Normal range" />
      <MetricCard title="SpO2" value="98" unit="%" icon={Activity} trend="up" trendValue="Excellent" />
      <MetricCard title="Steps" value="8,432" icon={Footprints} trend="up" trendValue="+2,150 from yesterday" />
    </div>
  );
}
