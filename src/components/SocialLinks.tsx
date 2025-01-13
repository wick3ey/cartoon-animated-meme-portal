import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const SocialLinks = () => {
  const { toast } = useToast();
  const socials = [
    {
      name: "Telegram",
      url: "https://t.me/bawkmcchicken",
    },
    {
      name: "Twitter",
      url: "#",
    },
    {
      name: "Raydium",
      url: `https://raydium.io/swap/?inputCurrency=sol&outputCurrency=H8XPbZdXakPSSzAcmNvo8vHoZ1ji59F21UHwga4rpump`,
    },
    {
      name: "Magic Eden",
      url: "#",
    },
    {
      name: "Tensor",
      url: "#",
    }
  ];

  const handleSocialClick = (name: string, url: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (url === "#") {
      e.preventDefault();
      toast({
        title: "Coming Soon!",
        description: "This link will be available soon",
        className: "bg-secondary/90 border-2 border-black text-black font-pixel",
        duration: 3000,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="flex justify-center items-center gap-8 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            onClick={handleSocialClick(social.name, social.url)}
            className="pixel-button text-sm py-2 px-4"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.2 }
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {social.name}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};