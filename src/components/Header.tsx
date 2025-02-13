
import { Menu, Search, Plus, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 animate-fade-in glass mx-6 mt-6">
      <div className="flex items-center gap-6">
        <Button variant="ghost" size="icon" className="hover:bg-primary/5 rounded-xl">
          <Menu className="w-6 h-6 text-gray-600" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-primary-dark text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-lg">
            N2
          </div>
          <div>
            <h1 className="font-semibold text-xl text-gray-800">
              Financial
            </h1>
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
            className="pl-10 pr-4 py-2.5 rounded-xl border border-gray-100 w-64 focus:outline-none focus:ring-2 focus:ring-primary/10 bg-white shadow-sm"
          />
        </div>
        <Button size="icon" variant="ghost" className="rounded-xl hover:bg-primary/5">
          <Plus className="w-4 h-4 text-gray-600" />
        </Button>
        <div className="flex items-center gap-4 bg-white shadow-sm p-2 rounded-xl border border-gray-100">
          <img
            src="/lovable-uploads/a36bf756-fb4d-41a2-829c-9e95623a24a8.png"
            alt="Profile"
            className="w-10 h-10 rounded-xl object-cover"
          />
          <div>
            <p className="font-medium text-gray-800">Dwayne Tatum</p>
            <p className="text-sm text-gray-500">CEO Assistant</p>
          </div>
        </div>
      </div>
    </header>
  );
}
