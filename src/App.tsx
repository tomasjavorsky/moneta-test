import "./App.css";
import LoanCalculator from "./pages/LoanCalculator/LoanCalculator";
import "./assets/translations/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LoanCalculator />
    </QueryClientProvider>
  );
}

export default App;
