import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mr Darlingthon Getuno",
      role: "ICT Officer, NHIF",
      quote: "Enock’s work on our IT infrastructure was exceptional—reliable, innovative, and ahead of the curve.",
    },
    {
      name: "Cheruiyot Meshack",
      role: "Client, Freelance Project",
      quote: "The Android app Enock built for us exceeded expectations with its AI features and smooth performance.",
    },
    {
      name: "Nehemiah Sigei",
      role: "Tech Startup Founder",
      quote: "His 3D motion graphics brought our product launch to life—professional and creative!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800 dark:bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-indigo-300 dark:text-indigo-500 mb-12"
        >
          What People Say
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 dark:bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-gray-300 dark:text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-indigo-400 dark:text-indigo-600 font-semibold">{testimonial.name}</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}