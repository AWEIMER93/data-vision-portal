
import { ArrowRight, Lock, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinancialStats() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 animate-fade-in">
      <div className="glass p-6 card-hover">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm text-gray-500">Linked to main account</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-mono text-primary-dark">****</span>
              <span className="font-bold text-primary-dark">2719</span>
            </div>
          </div>
          <img src="/visa.png" alt="Visa" className="h-6" />
        </div>
        <div className="flex gap-4">
          <Button className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 rounded-xl shadow-lg">
            Receive
          </Button>
          <Button variant="outline" className="border-primary/20 hover:bg-primary/10 text-primary-dark rounded-xl">
            Send
          </Button>
        </div>
      </div>

      <div className="glass p-6 card-hover">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm text-gray-500">Total Income</h3>
          <Button variant="ghost" size="sm" className="hover:bg-primary/10 text-primary-dark">
            Weekly
          </Button>
        </div>
        <p className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
          $23,194.80
        </p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Total paid</p>
          <p className="font-medium text-primary-dark">$8,145.20</p>
        </div>
      </div>

      <div className="glass p-6 card-hover">
        <div className="flex justify-between items-start">
          <div>
            <Lock className="w-5 h-5 mb-2 text-primary" />
            <h3 className="font-medium text-primary-dark">System Lock</h3>
          </div>
          <div className="text-right">
            <Clock className="w-5 h-5 mb-2 ml-auto text-primary" />
            <p className="font-medium text-primary-dark">13 Days</p>
            <p className="text-sm text-gray-500">109 hours, 23 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
