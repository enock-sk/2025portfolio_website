import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Android & Cross-Platform Development",
      price: "Starting at $1,500",
      description: "Build high-performance mobile apps using Kotlin and Flutter, integrated with Generative AI for smart features.",
      icon: "📱",
    },
    {
      title: "Cloud Architecture & Migration",
      price: "Starting at $2,000",
      description: "Design and deploy scalable, secure cloud solutions on AWS/GCP, optimized for enterprise needs.",
      icon: "☁️",
    },
    {
      title: "Cybersecurity & Penetration Testing",
      price: "Starting at $1,800",
      description: "Implement Zero Trust security and quantum-resistant encryption with thorough penetration testing.",
      icon: "🔒",
    },
    {
      title: "Full-Stack Web Development",
      price: "Starting at $2,200",
      description: "Develop cutting-edge web applications with Next.js, Node.js, and real-time features for seamless user experiences.",
      icon: "🌐",
    },
    {
      title: "Motion Graphics & UI/UX Design",
      price: "Starting at $1,200",
      description: "Create stunning 2D/3D animations and user-centric designs with Figma and Blender for impactful branding.",
      icon: "🎨",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 dark:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-indigo-300 dark:text-indigo-500 mb-12"
        >
          Premium IT Services
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)' }}
              className="bg-gray-800 dark:bg-white p-6 rounded-xl shadow-lg border border-indigo-500/20 dark:border-indigo-300/20 transition-all"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{service.icon}</span>
                <h3 className="text-xl font-semibold text-indigo-400 dark:text-indigo-600">{service.title}</h3>
              </div>
              <p className="text-gray-400 dark:text-gray-600 mb-4 min-h-[80px]">{service.description}</p>
              <p className="text-indigo-500 dark:text-indigo-500 font-bold mb-6">{service.price}</p>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 text-indigo-400 dark:text-indigo-500 text-center px-4 py-2 rounded-md border border-indigo-400 dark:border-indigo-500 hover:bg-indigo-400/10 dark:hover:bg-indigo-500/10 transition-colors"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}