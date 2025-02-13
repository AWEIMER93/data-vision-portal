
import { Header } from "@/components/Header";
import { DateSection } from "@/components/DateSection";
import { FinancialStats } from "@/components/FinancialStats";
import { RecentTransactions } from "@/components/RecentTransactions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-white to-[#F0FDF4] pb-6">
      <Header />
      <DateSection />
      <FinancialStats />
      <RecentTransactions />
    </div>
  );
};

export default Index;
