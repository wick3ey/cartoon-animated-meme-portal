import { motion } from "framer-motion";

export const PixelGallery = () => {
  const items = [
    {
      src: "/placeholder.svg",
      alt: "Item 1",
      description: "The First"
    },
    {
      src: "/placeholder.svg",
      alt: "Item 2",
      description: "The Second"
    },
    {
      src: "/placeholder.svg",
      alt: "Item 3",
      description: "The Third"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-pixel text-center mb-12 pixel-shadow text-primary">
        Meet The Squad
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
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
              src={item.src}
              alt={item.alt}
              className="w-32 h-32 mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <h3 className="font-pixel text-lg text-primary mb-2">
              {item.description}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};