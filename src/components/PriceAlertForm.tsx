import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { ComicButton } from "./ComicButton";

export const PriceAlertForm = () => {
  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "🔔 Alert Set!",
      description: `We'll notify you when the price reaches $${price}`,
      duration: 3000,
    });
    setPrice("");
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="comic-panel max-w-md mx-auto p-6"
    >
      <h3 className="font-handwriting text-2xl mb-4">Set Price Alert</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-comic text-sm mb-1">Target Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border-2 border-black rounded-md font-comic"
            required
            step="0.000001"
            min="0"
          />
        </div>
        <div>
          <label className="block font-comic text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border-2 border-black rounded-md font-comic"
            required
          />
        </div>
        <ComicButton className="w-full">
          Set Alert 🔔
        </ComicButton>
      </form>
    </motion.div>
  );
};