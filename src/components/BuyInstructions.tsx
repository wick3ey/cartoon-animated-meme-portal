import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const InstructionStep = ({ number, title, description, icon }: { 
  number: number;
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <motion.div
      className="pixel-panel relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-pixel text-white">
        {number}
      </div>
      
      <div className="flex items-start gap-4 p-4">
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className="font-pixel text-lg text-primary mb-2 glow-text">
            {title}
          </h3>
          <p className="text-gray-400 text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const BuyInstructions = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const contractAddress = "H8XPbZdXakPSSzAcmNvo8vHoZ1ji59F21UHwga4rpump";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast({
        title: "Kopierad!",
        description: "Kontraktadressen har kopierats till urklipp",
        className: "bg-green-500 border-2 border-black text-white font-pixel",
        duration: 2000,
      });
      
      // Reset copy state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
      
    } catch (err) {
      console.error("Kopieringsfel:", err);
      toast({
        title: "Fel",
        description: "Kunde inte kopiera adressen",
        className: "bg-red-500 border-2 border-black text-white font-pixel",
        duration: 2000,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="font-pixel text-3xl text-center text-primary mb-12 glow-text">
        How to Buy $BAWK
      </h2>
      
      <div className="space-y-8">
        <InstructionStep
          number={1}
          title="Buy SOL on Exchange"
          description="Purchase SOL from your preferred cryptocurrency exchange (e.g., Binance, Coinbase, Kraken)."
          icon="💱"
        />
        
        <InstructionStep
          number={2}
          title="Download Phantom Wallet"
          description="Install the Phantom wallet browser extension or mobile app from phantom.app"
          icon="👻"
        />
        
        <InstructionStep
          number={3}
          title="Transfer SOL to Phantom"
          description="Withdraw your SOL from the exchange to your Phantom wallet address. Make sure to use the Solana network."
          icon="📲"
        />
        
        <InstructionStep
          number={4}
          title="Open Pump.fun"
          description="Visit pump.fun to buy $BAWK directly."
          icon="🔄"
        />

        {/* Completely rebuilt contract address section */}
        <motion.div 
          className="pixel-panel relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 space-y-4">
            <h3 className="font-pixel text-lg text-primary mb-2 glow-text">Kontraktadress</h3>
            <div className="flex items-center gap-3 bg-black/30 p-4 rounded-lg border-2 border-primary/20">
              <div className="flex-1 font-mono text-sm text-gray-300 break-all select-all">
                {contractAddress}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopy}
                className={`min-w-[40px] transition-all duration-200 ${
                  copied 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'hover:bg-primary/20 hover:text-primary'
                }`}
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="pixel-panel bg-gradient-to-r from-primary/20 to-accent/20"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-pixel text-lg text-primary mb-2">Pro Tips</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Always verify contract details</li>
            <li>• Keep some SOL for transaction fees</li>
            <li>• Join our Telegram for support</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};