import PatientDashboard from "../PatientDashboard";
import { ThemeProvider } from "../ThemeProvider";

export default function PatientDashboardExample() {
  return (
    <ThemeProvider>
      <PatientDashboard userName="Arjun Sharma" onLogout={() => console.log("Logged out")} />
    </ThemeProvider>
  );
}
