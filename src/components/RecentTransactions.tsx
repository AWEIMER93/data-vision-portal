
import { DollarSign, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";

const transactions = [
  {
    id: 1,
    name: "Netflix Subscription",
    date: "Mar 25, 2024",
    amount: -12.99,
    status: "completed",
    type: "expense",
    category: "Entertainment"
  },
  {
    id: 2,
    name: "Salary Deposit",
    date: "Mar 24, 2024",
    amount: 4500.00,
    status: "completed",
    type: "income",
    category: "Salary"
  },
  {
    id: 3,
    name: "Uber Ride",
    date: "Mar 24, 2024",
    amount: -24.50,
    status: "completed",
    type: "expense",
    category: "Transport"
  },
  {
    id: 4,
    name: "Freelance Payment",
    date: "Mar 23, 2024",
    amount: 850.00,
    status: "pending",
    type: "income",
    category: "Freelance"
  },
  {
    id: 5,
    name: "Amazon Purchase",
    date: "Mar 23, 2024",
    amount: -156.80,
    status: "completed",
    type: "expense",
    category: "Shopping"
  }
];

export function RecentTransactions() {
  return (
    <div className="p-6 animate-fade-in">
      <div className="glass p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
            <p className="text-sm text-gray-500">You have 12 transactions this week</p>
          </div>
          <button className="text-sm text-primary hover:text-primary-dark transition-colors">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        transaction.type === 'income' 
                          ? 'bg-success-light text-success' 
                          : 'bg-accent-light text-accent'
                      }`}>
                        {transaction.type === 'income' 
                          ? <ArrowDownLeft className="w-5 h-5" /> 
                          : <ArrowUpRight className="w-5 h-5" />
                        }
                      </div>
                      <div>
                        <p className="text-gray-800">{transaction.name}</p>
                        <p className="text-sm text-gray-500">{transaction.category}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600">{transaction.category}</TableCell>
                  <TableCell className="text-gray-600">{transaction.date}</TableCell>
                  <TableCell className={`font-medium ${
                    transaction.amount > 0 ? 'text-success' : 'text-accent'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      transaction.status === 'completed' 
                        ? 'bg-success-light text-success' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {transaction.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
