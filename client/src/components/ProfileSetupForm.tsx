import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type ProfileSetupFormProps = {
  onComplete: () => void;
};

export default function ProfileSetupForm({ onComplete }: ProfileSetupFormProps) {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [rasas, setRasas] = useState<string[]>([]);
  const [temperature, setTemperature] = useState("neutral");

  const handleRasaToggle = (rasa: string) => {
    setRasas((prev) =>
      prev.includes(rasa) ? prev.filter((r) => r !== rasa) : [...prev, rasa]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile setup (prototype - not stored):", { age, weight, height, rasas, temperature });
    onComplete();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
          <CardDescription>Help us personalize your Ayurvedic experience</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="text"
                  placeholder="30"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  data-testid="input-age"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="text"
                  placeholder="70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  data-testid="input-weight"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="text"
                  placeholder="170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  data-testid="input-height"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Preferred Rasas (Tastes)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Sweet", "Sour", "Salty", "Pungent", "Bitter", "Astringent"].map((rasa) => (
                  <div key={rasa} className="flex items-center space-x-2">
                    <Checkbox
                      id={rasa.toLowerCase()}
                      checked={rasas.includes(rasa.toLowerCase())}
                      onCheckedChange={() => handleRasaToggle(rasa.toLowerCase())}
                      data-testid={`checkbox-rasa-${rasa.toLowerCase()}`}
                    />
                    <Label htmlFor={rasa.toLowerCase()} className="font-normal cursor-pointer">
                      {rasa}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Food Temperature Preference</Label>
              <RadioGroup value={temperature} onValueChange={setTemperature}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hot" id="hot" data-testid="radio-temp-hot" />
                  <Label htmlFor="hot" className="font-normal cursor-pointer">Prefer Hot Foods</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cold" id="cold" data-testid="radio-temp-cold" />
                  <Label htmlFor="cold" className="font-normal cursor-pointer">Prefer Cold Foods</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="neutral" id="neutral" data-testid="radio-temp-neutral" />
                  <Label htmlFor="neutral" className="font-normal cursor-pointer">No Preference</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full" data-testid="button-complete-profile">
              Complete Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
