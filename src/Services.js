// src/components/Services.js
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      price: "$1000",
      description: "Custom website development",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <p className="text-blue-600 font-bold mt-2">{service.price}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              >
                Buy Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}