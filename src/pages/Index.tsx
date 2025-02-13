
import { Header } from "@/components/Header";
import { DateSection } from "@/components/DateSection";
import { FinancialStats } from "@/components/FinancialStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary pb-6">
      <Header />
      <DateSection />
      <FinancialStats />
    </div>
  );
};

export default Index;
