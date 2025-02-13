
import { Menu, Search, Plus, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 animate-fade-in">
      <div className="flex items-center gap-6">
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
            N2
          </div>
          <div>
            <h1 className="font-semibold text-xl">Financial</h1>
            <p className="text-gray-500 text-sm">Dashboard</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Start searching here..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-200 w-64 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Plus className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-3">
          <img
            src="/lovable-uploads/a36bf756-fb4d-41a2-829c-9e95623a24a8.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">Dwayne Tatum</p>
            <p className="text-sm text-gray-500">CEO Assistant</p>
          </div>
        </div>
      </div>
    </header>
  );
}
