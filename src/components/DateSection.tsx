
import { Calendar, ArrowRight, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DateSection() {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <div className="flex justify-between items-center p-6 animate-fade-in">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white shadow-lg">
            {day}
          </div>
          <div>
            <p className="text-lg font-medium text-primary-dark">{month}</p>
            <p className="text-gray-500">Today</p>
          </div>
        </div>
        <Button className="bg-accent hover:bg-accent-dark text-white flex items-center gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          Show my Tasks <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <div className="glass px-6 py-3 flex items-center gap-3 animate-scale-in">
          <span className="text-xl">👋</span>
          <div>
            <h3 className="font-medium text-primary-dark">Hey, Need help?</h3>
            <p className="text-gray-500 text-sm">Just ask me anything!</p>
          </div>
        </div>
        <Button size="icon" variant="outline" className="rounded-xl hover:bg-primary/10 border-primary/20">
          <Mic className="w-4 h-4 text-primary-dark" />
        </Button>
      </div>
    </div>
  );
}
