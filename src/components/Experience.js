import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "IT Assistant",
      company: "National Hospital Insurance Fund (NHIF)",
      period: "2020 - 2022",
      description: "Optimized IT infrastructure with Zero Trust security, reducing downtime by 25% and supporting cloud migrations.",
    },
    {
      title: "Freelance Software Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      description: "Developed Android apps with Generative AI, deployed scalable web solutions on AWS, and created 2D/3D motion graphics.",
    },
    {
      title: "Cybersecurity Consultant",
      company: "TechTrend Innovations",
      period: "2024 - Present",
      description: "Led penetration testing and implemented quantum-resistant encryption, boosting client security by 30%.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800 dark:bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-indigo-300 dark:text-indigo-500 mb-12"
        >
          Professional Experience
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 dark:bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-indigo-400 dark:text-indigo-600">{exp.title}</h3>
              <p className="text-gray-300 dark:text-gray-600 text-sm mt-1">{exp.company} | {exp.period}</p>
              <p className="text-gray-400 dark:text-gray-500 mt-3">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}