import { motion } from "framer-motion";

const InstructionStep = ({ number, title, description, icon }: { 
  number: number;
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <motion.div 
      className="flex items-start gap-4 p-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
        <span className="font-pixel text-xl text-primary">{number}</span>
      </div>
      <div>
        <h3 className="font-pixel text-lg text-primary mb-2">{title}</h3>
        <p className="text-pixel-gray">{description}</p>
        <div className="mt-2 text-4xl">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export const BuyInstructions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="font-pixel text-3xl text-center text-primary mb-12 glow-text">
        Hur köper jag $MCCHICKEN?
      </h2>

      <div className="grid gap-6">
        <InstructionStep 
          number={1}
          title="Skaffa en Solana Wallet"
          description="Ladda ner Phantom Wallet från Chrome Store eller App Store"
          icon="👛"
        />

        <InstructionStep 
          number={2}
          title="Köp SOL"
          description="Köp SOL från en börs och skicka till din wallet"
          icon="💰"
        />

        <InstructionStep 
          number={3}
          title="Anslut till Pump.fun"
          description="Gå till pump.fun och anslut din wallet"
          icon="🔌"
        />

        <InstructionStep 
          number={4}
          title="Swappa till $MCCHICKEN"
          description="Swappa dina SOL till $MCCHICKEN tokens"
          icon="🔄"
        />

        <motion.div 
          className="pixel-panel bg-gradient-to-r from-primary/20 to-accent/20"
          whileHover={{ scale: 1.02 }}
        >
          <div className="p-6">
            <h3 className="font-pixel text-lg text-accent mb-4">Pro Tips! 🌟</h3>
            <ul className="space-y-2 text-pixel-gray">
              <li>• Se till att ha lite extra SOL för transaktionsavgifter</li>
              <li>• Dubbelkolla alltid kontraktadressen</li>
              <li>• Följ oss på Twitter för senaste uppdateringarna</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};