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
      className="pt-24 pb-20 bg-gradient-to-br from-indigo-900 via-gray-800 to-purple-900 dark:from-indigo-100 dark:via-gray-200 dark:to-purple-200 text-white dark:text-gray-900"
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
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light"
        >
          IT Innovator | Full-Stack Developer | Cybersecurity & AI Specialist
        </motion.p>
        <div className="flex justify-center space-x-4 mb-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 dark:bg-indigo-500 text-white dark:text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.span
                className="text-3xl md:text-4xl font-bold text-indigo-400 dark:text-indigo-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                {stat.value}+
              </motion.span>
              <p className="text-gray-300 dark:text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}