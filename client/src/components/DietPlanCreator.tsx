import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2 } from "lucide-react";

type DietPlanCreatorProps = {
  onGenerate?: (preferences: any) => void;
};

export default function DietPlanCreator({ onGenerate }: DietPlanCreatorProps) {
  const [goals, setGoals] = useState("");
  const [restrictions, setRestrictions] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);

  const handleRestrictionToggle = (restriction: string) => {
    setRestrictions((prev) =>
      prev.includes(restriction) ? prev.filter((r) => r !== restriction) : [...prev, restriction]
    );
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    console.log("Generating diet plan with:", { goals, restrictions });
    
    setTimeout(() => {
      setGeneratedPlan({
        title: "Personalized Vata Balancing Plan",
        meals: [
          { name: "Warm Oatmeal with Ghee", time: "7:00 AM", calories: 320 },
          { name: "Kitchari with Vegetables", time: "12:00 PM", calories: 450 },
          { name: "Ginger Tea & Almonds", time: "4:00 PM", calories: 180 },
          { name: "Lentil Soup with Rice", time: "7:00 PM", calories: 520 },
        ],
      });
      setIsGenerating(false);
      if (onGenerate) {
        onGenerate({ goals, restrictions });
      }
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card data-testid="card-diet-creator">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Create AI-Powered Diet Plan
          </CardTitle>
          <CardDescription>
            Tell us your health goals and we'll generate a personalized Ayurvedic diet plan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="goals">Your Health Goals</Label>
            <Textarea
              id="goals"
              placeholder="E.g., Improve digestion, boost energy, manage stress..."
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              rows={3}
              data-testid="textarea-goals"
            />
          </div>

          <div className="space-y-2">
            <Label>Dietary Restrictions</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free", "Low-Sugar"].map((restriction) => (
                <div key={restriction} className="flex items-center space-x-2">
                  <Checkbox
                    id={restriction.toLowerCase().replace(/\s/g, "-")}
                    checked={restrictions.includes(restriction)}
                    onCheckedChange={() => handleRestrictionToggle(restriction)}
                    data-testid={`checkbox-restriction-${restriction.toLowerCase().replace(/\s/g, "-")}`}
                  />
                  <Label
                    htmlFor={restriction.toLowerCase().replace(/\s/g, "-")}
                    className="font-normal cursor-pointer"
                  >
                    {restriction}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !goals.trim()}
            className="w-full gap-2"
            data-testid="button-generate-plan"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating Plan...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Generate Diet Plan
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedPlan && (
        <Card data-testid="card-generated-plan">
          <CardHeader>
            <div className="flex items-center justify-between gap-2">
              <CardTitle>{generatedPlan.title}</CardTitle>
              <Badge variant="secondary">AI Generated</Badge>
            </div>
            <CardDescription>Your personalized meal plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {generatedPlan.meals.map((meal: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border"
                  data-testid={`meal-${index}`}
                >
                  <div className="flex-1">
                    <p className="font-medium">{meal.name}</p>
                    <p className="text-sm text-muted-foreground">{meal.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-semibold">{meal.calories}</p>
                    <p className="text-xs text-muted-foreground">kcal</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <Button variant="outline" className="flex-1" data-testid="button-regenerate">
                Regenerate
              </Button>
              <Button className="flex-1" data-testid="button-save-plan">
                Save Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
