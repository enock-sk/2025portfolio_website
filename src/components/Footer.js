import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem('visitorCount') || '0', 10);
    const newCount = storedCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
  }, []);

  return (
    <footer className="py-10 bg-gray-800 dark:bg-gray-100 border-t border-indigo-500/20 dark:border-indigo-300/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-gray-300 dark:text-gray-600 text-lg">
            Let’s build something amazing together!
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://linkedin.com/in/enock-kiplangat"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-indigo-400 dark:text-indigo-500 hover:text-indigo-300 dark:hover:text-indigo-400"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/enock-kiplangat"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-indigo-400 dark:text-indigo-500 hover:text-indigo-300 dark:hover:text-indigo-400"
            >
              GitHub
            </motion.a>
            <motion.a
              href="mailto:enock@example.com"
              whileHover={{ scale: 1.2 }}
              className="text-indigo-400 dark:text-indigo-500 hover:text-indigo-300 dark:hover:text-indigo-400"
            >
              Email
            </motion.a>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Visitors: {visitorCount} | © 2025 Enock Kiplangat. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}