import { useState } from "react";
import { Activity, Droplets, Footprints, Flame, Leaf, Plus, History, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetricCard from "./MetricCard";
import DietChartCard from "./DietChartCard";
import HabitsForm from "./HabitsForm";
import DietPlanCreator from "./DietPlanCreator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PatientDashboardProps = {
  userName: string;
  onLogout: () => void;
};

export default function PatientDashboard({ userName, onLogout }: PatientDashboardProps) {
  const [showHabitsDialog, setShowHabitsDialog] = useState(false);
  const [showDietCreatorDialog, setShowDietCreatorDialog] = useState(false);

  // todo: remove mock functionality
  const mockCharts = [
    { id: "1", title: "Winter Wellness Plan", date: "Dec 1, 2024", meals: 5, dosha: "Vata" },
    { id: "2", title: "Summer Cooling Diet", date: "Nov 28, 2024", meals: 4, dosha: "Pitta" },
    { id: "3", title: "Balance & Energy", date: "Nov 25, 2024", meals: 6, dosha: "Kapha" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold font-serif">AyurDiet</h1>
              <p className="text-xs text-muted-foreground">Welcome, {userName}</p>
            </div>
          </div>
          <Button variant="outline" onClick={onLogout} data-testid="button-logout">
            Logout
          </Button>
        </div>
      </header>

      <main className="container px-4 py-8 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">Today's Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard title="Calories" value="1,847" unit="kcal" icon={Flame} trend="up" trendValue="+12% from yesterday" />
            <MetricCard title="Glucose" value="95" unit="mg/dL" icon={Droplets} trend="neutral" trendValue="Normal range" />
            <MetricCard title="SpO2" value="98" unit="%" icon={Activity} trend="up" trendValue="Excellent" />
            <MetricCard title="Steps" value="8,432" icon={Footprints} trend="up" trendValue="+2,150 from yesterday" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-serif">Your Diet Charts</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDietCreatorDialog(true)}
                className="gap-2"
                data-testid="button-new-plan"
              >
                <Plus className="h-4 w-4" />
                New Plan
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {mockCharts.map((chart) => (
                <DietChartCard
                  key={chart.id}
                  {...chart}
                  onView={(id) => console.log("Viewing chart:", id)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-serif">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Button
                variant="outline"
                className="h-auto p-6 justify-start gap-3 hover-elevate"
                onClick={() => setShowHabitsDialog(true)}
                data-testid="button-log-habits"
              >
                <Activity className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">Log Daily Habits</p>
                  <p className="text-sm text-muted-foreground">Track calories, glucose, SpO2, steps</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-6 justify-start gap-3 hover-elevate"
                onClick={() => setShowDietCreatorDialog(true)}
                data-testid="button-create-plan"
              >
                <Sparkles className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">AI Diet Plan</p>
                  <p className="text-sm text-muted-foreground">Generate personalized recommendations</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-6 justify-start gap-3 hover-elevate"
                onClick={() => console.log("View history")}
                data-testid="button-view-history"
              >
                <History className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">View History</p>
                  <p className="text-sm text-muted-foreground">Past charts and progress</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Dialog open={showHabitsDialog} onOpenChange={setShowHabitsDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Log Daily Habits</DialogTitle>
            <DialogDescription>Record your health metrics for today</DialogDescription>
          </DialogHeader>
          <HabitsForm />
        </DialogContent>
      </Dialog>

      <Dialog open={showDietCreatorDialog} onOpenChange={setShowDietCreatorDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create Diet Plan</DialogTitle>
            <DialogDescription>Generate a personalized Ayurvedic diet plan</DialogDescription>
          </DialogHeader>
          <DietPlanCreator />
        </DialogContent>
      </Dialog>
    </div>
  );
}
