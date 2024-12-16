import { motion } from "framer-motion";

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
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="font-pixel text-3xl text-center text-primary mb-12 glow-text">
        How to Buy $PUDIX
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
          title="Open Phantom Swap"
          description="In your Phantom wallet, click on 'Swap' and search for $PUDIX or paste the contract address."
          icon="🔄"
        />
        
        <div className="pixel-panel mt-8">
          <h3 className="font-pixel text-lg text-primary mb-2">Contract Address</h3>
          <p className="font-pixel text-sm text-gray-400">Coming soon..</p>
        </div>
        
        <motion.div 
          className="pixel-panel bg-gradient-to-r from-primary/20 to-accent/20"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-pixel text-lg text-primary mb-2">Pro Tips</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Always verify the contract address</li>
            <li>• Keep some SOL for transaction fees</li>
            <li>• Join our Telegram for support</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};