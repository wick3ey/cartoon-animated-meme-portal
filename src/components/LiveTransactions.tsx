import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Transaction {
  id: string;
  amount: string;
  type: "buy" | "sell";
  timestamp: string;
  wallet: string;
}

export const LiveTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTransaction: Transaction = {
        id: Math.random().toString(36).substring(7),
        amount: (Math.random() * 10000).toFixed(2),
        type: Math.random() > 0.5 ? "buy" : "sell",
        timestamp: new Date().toLocaleTimeString(),
        wallet: `${Math.random().toString(36).substring(2, 8)}...${Math.random().toString(36).substring(2, 8)}`,
      };

      setTransactions(prev => [newTransaction, ...prev].slice(0, 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="font-handwriting text-2xl mb-4 text-center">Live Transactions</h3>
      <div className="space-y-2">
        <AnimatePresence>
          {transactions.map((tx) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className={`comic-panel flex items-center justify-between p-4 ${
                tx.type === "buy" ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <div>
                <p className="font-comic text-sm">{tx.wallet}</p>
                <p className="text-xs opacity-70">{tx.timestamp}</p>
              </div>
              <div className={`font-bold ${
                tx.type === "buy" ? "text-green-600" : "text-red-600"
              }`}>
                {tx.type === "buy" ? "+" : "-"}{tx.amount}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};