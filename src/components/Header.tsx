
import { Menu, Search, Plus, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 animate-fade-in glass mx-6 mt-6">
      <div className="flex items-center gap-6">
        <Button variant="ghost" size="icon" className="hover:bg-primary/10">
          <Menu className="w-6 h-6 text-primary-dark" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-primary to-accent text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-lg">
            N2
          </div>
          <div>
            <h1 className="font-semibold text-xl bg-gradient-to-r from-primary-dark to-accent bg-clip-text text-transparent">
              Financial
            </h1>
            <p className="text-gray-500 text-sm">Dashboard</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/60 w-4 h-4" />
          <input
            type="text"
            placeholder="Start searching here..."
            className="pl-10 pr-4 py-2.5 rounded-xl border border-primary/20 w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white/50 backdrop-blur-sm"
          />
        </div>
        <Button size="icon" variant="ghost" className="rounded-xl hover:bg-primary/10">
          <Plus className="w-4 h-4 text-primary-dark" />
        </Button>
        <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-2 rounded-xl">
          <img
            src="/lovable-uploads/a36bf756-fb4d-41a2-829c-9e95623a24a8.png"
            alt="Profile"
            className="w-10 h-10 rounded-xl object-cover ring-2 ring-primary/20"
          />
          <div>
            <p className="font-medium text-primary-dark">Dwayne Tatum</p>
            <p className="text-sm text-gray-500">CEO Assistant</p>
          </div>
        </div>
      </div>
    </header>
  );
}
