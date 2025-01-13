import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const SocialLinks = () => {
  const { toast } = useToast();
  const socials = [
    {
      name: "Telegram",
      icon: "/placeholder.svg",
      url: "#",
    },
    {
      name: "Twitter",
      icon: "/placeholder.svg",
      url: "#",
    },
    {
      name: "Raydium",
      icon: "/placeholder.svg",
      url: "#",
    },
    {
      name: "Magic Eden",
      icon: "/placeholder.svg",
      url: "#",
    },
    {
      name: "Tensor",
      icon: "/placeholder.svg",
      url: "#",
    }
  ];

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast({
      title: "Coming Soon!",
      description: "This link will be available soon",
      className: "bg-secondary/90 border-2 border-black text-black font-pixel",
      duration: 3000,
    });
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
            onClick={handleSocialClick}
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