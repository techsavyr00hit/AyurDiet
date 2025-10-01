import { useState } from "react";
import { Leaf, Search, Users, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MetricCard from "./MetricCard";
import { Droplets, Footprints, Flame } from "lucide-react";

type PractitionerDashboardProps = {
  userName: string;
  onLogout: () => void;
};

type Patient = {
  id: string;
  name: string;
  age: number;
  dosha: string;
  lastVisit: string;
  glucose: number;
  steps: number;
};

export default function PractitionerDashboard({ userName, onLogout }: PractitionerDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  // todo: remove mock functionality
  const mockPatients: Patient[] = [
    { id: "1", name: "Arjun Sharma", age: 45, dosha: "Vata", lastVisit: "Dec 1, 2024", glucose: 95, steps: 8432 },
    { id: "2", name: "Priya Patel", age: 32, dosha: "Pitta", lastVisit: "Nov 30, 2024", glucose: 88, steps: 10245 },
    { id: "3", name: "Raj Kumar", age: 58, dosha: "Kapha", lastVisit: "Nov 29, 2024", glucose: 102, steps: 6821 },
    { id: "4", name: "Meera Singh", age: 28, dosha: "Vata-Pitta", lastVisit: "Nov 28, 2024", glucose: 92, steps: 9156 },
  ];

  const filteredPatients = mockPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <p className="text-xs text-muted-foreground">Dr. {userName}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" onClick={onLogout} data-testid="button-logout">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold font-serif">Patient Overview</h2>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{mockPatients.length} Patients</span>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search patients by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-search-patients"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPatients.map((patient) => (
            <Card
              key={patient.id}
              className="hover-elevate cursor-pointer"
              onClick={() => setSelectedPatient(patient)}
              data-testid={`card-patient-${patient.id}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {patient.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{patient.name}</CardTitle>
                      <CardDescription>{patient.age} years</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">{patient.dosha}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Visit</span>
                  <span>{patient.lastVisit}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Glucose</span>
                  <span className="font-mono">{patient.glucose} mg/dL</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedPatient} onOpenChange={() => setSelectedPatient(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedPatient && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {selectedPatient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <DialogTitle>{selectedPatient.name}</DialogTitle>
                    <DialogDescription>
                      {selectedPatient.age} years • {selectedPatient.dosha} Dosha
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Latest Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <MetricCard title="Glucose" value={selectedPatient.glucose} unit="mg/dL" icon={Droplets} />
                    <MetricCard title="Steps" value={selectedPatient.steps.toLocaleString()} icon={Footprints} />
                    <MetricCard title="Calories" value="1,847" unit="kcal" icon={Flame} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Recent Activity</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-lg border">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Diet chart created</p>
                        <p className="text-xs text-muted-foreground">{selectedPatient.lastVisit}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Habits logged</p>
                        <p className="text-xs text-muted-foreground">Nov 30, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" data-testid="button-view-full-history">
                    View Full History
                  </Button>
                  <Button className="flex-1" data-testid="button-create-patient-plan">
                    Create Diet Plan
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
