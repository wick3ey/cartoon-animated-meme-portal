import { motion } from "framer-motion";
import { useState } from "react";

interface Post {
  id: number;
  username: string;
  content: string;
  likes: number;
  timestamp: string;
}

const initialPosts: Post[] = [
  {
    id: 1,
    username: "MemeKing",
    content: "Just aped in! 🚀 Best community ever! #MemeToken",
    likes: 42,
    timestamp: "2m ago"
  },
  {
    id: 2,
    username: "CryptoQueen",
    content: "The roadmap looks incredible! Can't wait for what's next 🔥",
    likes: 28,
    timestamp: "5m ago"
  },
  {
    id: 3,
    username: "DiamondHands",
    content: "HODL strong fam! We're just getting started 💎🙌",
    likes: 56,
    timestamp: "10m ago"
  }
];

export const SocialFeed = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="font-handwriting text-2xl mb-4 text-center">Community Vibes</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="comic-panel"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-handwriting text-lg">{post.username}</span>
              <span className="text-xs opacity-70">{post.timestamp}</span>
            </div>
            <p className="font-comic mb-3">{post.content}</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLike(post.id)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>❤️</span>
              <span className="font-comic">{post.likes}</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};