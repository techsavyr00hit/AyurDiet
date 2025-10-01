import PractitionerDashboard from "../PractitionerDashboard";
import { ThemeProvider } from "../ThemeProvider";

export default function PractitionerDashboardExample() {
  return (
    <ThemeProvider>
      <PractitionerDashboard userName="Anjali Verma" onLogout={() => console.log("Logged out")} />
    </ThemeProvider>
  );
}
