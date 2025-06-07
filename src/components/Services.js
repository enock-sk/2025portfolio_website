import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

export default function Services() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const services = [
    {
      title: "Android & Cross-Platform Development",
      price: "Starting at $1,500",
      amount: 1500,
      description: "Build high-performance mobile apps using Kotlin and Flutter, integrated with Generative AI for smart features.",
      icon: "📱",
    },
    {
      title: "Cloud Architecture & Migration",
      price: "Starting at $2,000",
      amount: 2000,
      description: "Design and deploy scalable, secure cloud solutions on AWS/GCP, optimized for enterprise needs.",
      icon: "☁️",
    },
    {
      title: "Cybersecurity & Penetration Testing",
      price: "Starting at $1,800",
      amount: 1800,
      description: "Implement Zero Trust security and quantum-resistant encryption with thorough penetration testing.",
      icon: "🔒",
    },
    {
      title: "Full-Stack Web Development",
      price: "Starting at $2,200",
      amount: 2200,
      description: "Develop cutting-edge web applications with Next.js, Node.js, and real-time features for seamless user experiences.",
      icon: "🌐",
    },
    {
      title: "Motion Graphics & UI/UX Design",
      price: "Starting at $1,200",
      amount: 1200,
      description: "Create stunning 2D/3D animations and user-centric designs with Figma and Blender for impactful branding.",
      icon: "🎨",
    },
  ];

  const handlePayment = async (service) => {
    if (!phoneNumber || !phoneNumber.match(/^2547\d{8}$/)) {
      setError('Please enter a valid Kenyan phone number (e.g., 2547XXXXXXXX)');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/', {
        phoneNumber,
        amount: service.amount,
        serviceTitle: service.title,
      });

      if (response.data.ResponseCode === '0') {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setPhoneNumber('');
          setSelectedService(null);
        }, 5000);
      } else {
        setError('Payment initiation failed. Please try again.');
        setTimeout(() => setError(''), 3000);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setTimeout(() => setError(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-900 dark:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-indigo-300 dark:text-indigo-600 mb-12"
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
                  onClick={() => setSelectedService(service)}
                  className="flex-1 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                  disabled={loading}
                >
                  {loading && selectedService?.title === service.title ? 'Processing...' : 'Get Started'}
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

        {/* Payment Modal */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 dark:bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-800 dark:bg-white p-6 rounded-xl max-w-sm w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-indigo-400 dark:text-indigo-600 mb-4">
                Pay for {selectedService.title}
              </h3>
              <p className="text-gray-300 dark:text-gray-600 mb-4">
                Enter your phone number to pay KES {selectedService.amount} for {selectedService.title}:
              </p>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g., 2547XXXXXXXX"
                className="w-full p-3 rounded-md bg-gray-700 dark:bg-gray-200 border border-indigo-500 dark:border-indigo-300 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
              />
              {error && <p className="text-red-400 dark:text-red-500 mb-4">{error}</p>}
              {success && (
                <p className="text-green-400 dark:text-green-500 mb-4">
                  Payment request sent! Check your phone to complete payment for {selectedService.title}.
                </p>
              )}
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePayment(selectedService)}
                  className="flex-1 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Pay Now'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedService(null)}
                  className="flex-1 text-indigo-400 dark:text-indigo-500 px-4 py-2 rounded-md border border-indigo-400 dark:border-indigo-500 hover:bg-indigo-400/10 dark:hover:bg-indigo-500/10 transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}