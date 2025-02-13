
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
              <span className="font-mono">****</span>
              <span className="font-bold">2719</span>
            </div>
          </div>
          <img src="/visa.png" alt="Visa" className="h-6" />
        </div>
        <div className="flex gap-4">
          <Button className="bg-black text-white hover:bg-gray-800">
            Receive
          </Button>
          <Button variant="outline">Send</Button>
        </div>
      </div>

      <div className="glass p-6 card-hover">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm text-gray-500">Total Income</h3>
          <Button variant="ghost" size="sm">
            Weekly
          </Button>
        </div>
        <p className="text-2xl font-bold mb-4">$23,194.80</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Total paid</p>
          <p className="font-medium">$8,145.20</p>
        </div>
      </div>

      <div className="glass p-6 card-hover">
        <div className="flex justify-between items-start">
          <div>
            <Lock className="w-5 h-5 mb-2" />
            <h3 className="font-medium">System Lock</h3>
          </div>
          <div className="text-right">
            <Clock className="w-5 h-5 mb-2 ml-auto" />
            <p className="font-medium">13 Days</p>
            <p className="text-sm text-gray-500">109 hours, 23 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
