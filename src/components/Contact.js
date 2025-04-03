import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields.');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setIsLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response.status, response.text);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (err) => {
          console.error('EmailJS error:', err);
          setError('Failed to send message. Please try again.');
          setTimeout(() => setError(''), 3000);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900 dark:from-gray-50 dark:to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-indigo-300 dark:text-indigo-500 mb-12"
        >
          Contact Me - Enock Kiplangat
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 relative"
          >
            <p className="text-gray-300 dark:text-gray-600 text-center md:text-left text-lg max-w-md mx-auto md:mx-0">
              I’m Enock Kiplangat, an IT expert with experience at NHIF and as a freelance developer. I deliver innovative solutions in mobile apps, cloud computing, cybersecurity, and motion graphics.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg bg-gray-700 dark:bg-gray-200 border border-indigo-500 dark:border-indigo-300 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  aria-label="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg bg-gray-700 dark:bg-gray-200 border border-indigo-500 dark:border-indigo-300 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  aria-label="Your Email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-lg bg-gray-700 dark:bg-gray-200 border border-indigo-500 dark:border-indigo-300 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 h-36 resize-none"
                  aria-label="Your Message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors disabled:bg-indigo-400"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 right-0 mx-auto w-72 bg-green-600 dark:bg-green-500 text-white dark:text-white text-center py-3 rounded-lg shadow-xl z-10"
              >
                Message Sent Successfully!
              </motion.div>
            )}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-red-400 dark:text-red-500 font-medium"
              >
                {error}
              </motion.p>
            )}
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-64 md:h-full rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.057132786944!2d35.10651103343938!3d-0.6905233691014382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b0d003d0e9291%3A0xc625a969c4ac5d3f!2sSotik%20Town!5e0!3m2!1sen!2ske!4v1743667031498!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Sotik Town Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}