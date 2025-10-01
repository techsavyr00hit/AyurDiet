import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import AuthPage from "@/components/AuthPage";
import ProfileSetupForm from "@/components/ProfileSetupForm";
import PatientDashboard from "@/components/PatientDashboard";
import PractitionerDashboard from "@/components/PractitionerDashboard";

type AppState = "auth" | "profile-setup" | "patient-dashboard" | "practitioner-dashboard";
type UserRole = "patient" | "practitioner" | null;

function App() {
  const [appState, setAppState] = useState<AppState>("auth");
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [userName, setUserName] = useState("User");

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    // todo: remove mock functionality - In real app, check if profile is complete
    const hasCompletedProfile = Math.random() > 0.5;
    
    if (hasCompletedProfile) {
      setAppState(role === "patient" ? "patient-dashboard" : "practitioner-dashboard");
      setUserName(role === "patient" ? "Arjun Sharma" : "Anjali Verma");
    } else {
      setAppState("profile-setup");
    }
  };

  const handleProfileComplete = () => {
    if (userRole === "patient") {
      setAppState("patient-dashboard");
      setUserName("Arjun Sharma");
    } else if (userRole === "practitioner") {
      setAppState("practitioner-dashboard");
      setUserName("Anjali Verma");
    }
  };

  const handleLogout = () => {
    setAppState("auth");
    setUserRole(null);
    setUserName("User");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          {appState === "auth" && <AuthPage onLogin={handleLogin} />}
          {appState === "profile-setup" && <ProfileSetupForm onComplete={handleProfileComplete} />}
          {appState === "patient-dashboard" && <PatientDashboard userName={userName} onLogout={handleLogout} />}
          {appState === "practitioner-dashboard" && <PractitionerDashboard userName={userName} onLogout={handleLogout} />}
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
