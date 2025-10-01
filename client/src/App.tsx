import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import LandingPage from "@/components/LandingPage";
import AuthPage from "@/components/AuthPage";
import ProfileSetupForm from "@/components/ProfileSetupForm";
import PatientDashboard from "@/components/PatientDashboard";
import PractitionerDashboard from "@/components/PractitionerDashboard";

type AppState = "landing" | "auth" | "profile-setup" | "patient-dashboard" | "practitioner-dashboard";
type UserRole = "patient" | "practitioner" | null;

function App() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [userName, setUserName] = useState("User");
  const [isNewUser, setIsNewUser] = useState(false);

  const handleGetStarted = () => {
    setAppState("auth");
  };

  const handleLogin = (role: UserRole, isNew: boolean = false) => {
    setUserRole(role);
    setIsNewUser(isNew);
    
    // todo: remove mock functionality - Check if this is a new user who needs to complete profile
    if (isNew) {
      setAppState("profile-setup");
    } else {
      setAppState(role === "patient" ? "patient-dashboard" : "practitioner-dashboard");
      setUserName(role === "patient" ? "Arjun Sharma" : "Anjali Verma");
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
    setAppState("landing");
    setUserRole(null);
    setUserName("User");
    setIsNewUser(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          {appState === "landing" && <LandingPage onGetStarted={handleGetStarted} />}
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
