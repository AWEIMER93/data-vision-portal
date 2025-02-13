
import { Header } from "@/components/Header";
import { DateSection } from "@/components/DateSection";
import { FinancialStats } from "@/components/FinancialStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DateSection />
      <FinancialStats />
    </div>
  );
};

export default Index;
