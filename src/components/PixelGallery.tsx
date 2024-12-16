import { motion } from "framer-motion";

export const PixelGallery = () => {
  const penguins = [
    {
      src: "/lovable-uploads/cf0d077f-2871-4ef8-9433-b94ef305665a.png",
      alt: "Red Shirt Penguin",
      description: "The OG Pudgy"
    },
    {
      src: "/lovable-uploads/e109ba2f-0796-4ec3-a94b-b4d9295126ed.png",
      alt: "Classic Penguin",
      description: "The Classic"
    },
    {
      src: "/lovable-uploads/1ad0621d-b425-4967-b8dc-80b6ae05060f.png",
      alt: "Rich Penguin",
      description: "The Wealthy"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-pixel text-center mb-12 pixel-shadow text-primary">
        Meet The Squad
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {penguins.map((penguin, index) => (
          <motion.div
            key={index}
            className="pixel-panel bg-pixel-dark p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={penguin.src}
              alt={penguin.alt}
              className="w-32 h-32 mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <h3 className="font-pixel text-lg text-primary mb-2">
              {penguin.description}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};