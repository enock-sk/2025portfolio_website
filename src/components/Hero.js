import { motion } from 'framer-motion';

export default function Hero() {
  const stats = [
    { label: "Projects Completed", value: 5 },
    { label: "Years Experience", value: 3 },
    { label: "Clients Served", value: 10 },
  ];

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-24 pb-20 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
        >
          Enock Kiplangat
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-gray-300 dark:text-gray-700"
        >
          IT Innovator | Full-Stack Developer | Cybersecurity & AI Specialist
        </motion.p>
        <div className="flex justify-center space-x-4 mb-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
          >
            Hire Me
          </motion.a>
          <motion.a
            href="/Enock_Kiplangat_CV.pdf"
            download="Enock_Kiplangat_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-indigo-400 dark:border-indigo-500 text-indigo-400 dark:text-indigo-500 px-8 py-3 rounded-full font-semibold hover:bg-indigo-400/10 dark:hover:bg-indigo-500/10 transition-colors"
          >
            Download CV
          </motion.a>
        </div>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800 dark:bg-gray-200 rounded-xl py-6 px-4 sm:px-8 max-w-4xl mx-auto shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.span
                  className="text-4xl md:text-5xl font-extrabold text-indigo-400 dark:text-indigo-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 + 0.6 }}
                >
                  {stat.value}+
                </motion.span>
                <p className="text-gray-300 dark:text-gray-600 text-sm md:text-base mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}