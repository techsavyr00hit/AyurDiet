import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function HabitsForm() {
  const { toast } = useToast();
  const [calories, setCalories] = useState("");
  const [glucose, setGlucose] = useState("");
  const [spo2, setSpo2] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Habits submitted (prototype - not stored):", { calories, glucose, spo2, steps });
    toast({
      title: "Habits Logged",
      description: "Your daily health metrics have been recorded.",
    });
    setCalories("");
    setGlucose("");
    setSpo2("");
    setSteps("");
  };

  return (
    <Card data-testid="card-habits-form">
      <CardHeader>
        <CardTitle>Log Today's Habits</CardTitle>
        <CardDescription>Track your daily health metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="calories">Calories (kcal)</Label>
              <Input
                id="calories"
                type="text"
                placeholder="1800"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                data-testid="input-calories"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="glucose">Glucose (mg/dL)</Label>
              <Input
                id="glucose"
                type="text"
                placeholder="95"
                value={glucose}
                onChange={(e) => setGlucose(e.target.value)}
                data-testid="input-glucose"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="spo2">SpO2 (%)</Label>
              <Input
                id="spo2"
                type="text"
                placeholder="98"
                value={spo2}
                onChange={(e) => setSpo2(e.target.value)}
                data-testid="input-spo2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="steps">Step Count</Label>
              <Input
                id="steps"
                type="text"
                placeholder="8000"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                data-testid="input-steps"
              />
            </div>
          </div>
          <Button type="submit" className="w-full" data-testid="button-submit-habits">
            Log Habits
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
