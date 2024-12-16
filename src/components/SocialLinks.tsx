import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const SocialLinks = () => {
  const { toast } = useToast();
  const socials = [
    {
      name: "Telegram",
      icon: "/lovable-uploads/dd40cea4-7497-4bab-9505-b8511f9346ef.png",
      url: "https://t.me/pudgypixel",
    },
    {
      name: "Twitter",
      icon: "/lovable-uploads/0c3f2d8f-fd5e-4e08-801d-1fb2d437f825.png",
      url: "https://x.com/pixelpudgy",
    },
    {
      name: "Raydium",
      icon: "/lovable-uploads/0b8e0bf3-48b5-447a-8d4b-5793f84c4b75.png",
      url: "https://raydium.io/",
    },
    {
      name: "Magic Eden",
      icon: "/lovable-uploads/60b1a9e2-4255-42fd-a828-37480f61017a.png",
      url: "https://magiceden.io/",
    },
    {
      name: "Tensor",
      icon: "/lovable-uploads/ec61c586-869c-4f94-bb1c-aee747d3e303.png",
      url: "https://tensor.trade/",
    }
  ];

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.includes('raydium.io') || url.includes('magiceden.io') || url.includes('tensor.trade')) {
      e.preventDefault();
      toast({
        title: "Coming Soon!",
        description: "We are waiting for update stay tuned",
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
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleSocialClick(e, social.url)}
            className="transform transition-all duration-200 hover:scale-110"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.2 }
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img 
              src={social.icon} 
              alt={social.name}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};