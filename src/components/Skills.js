import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: "Android Development (Kotlin)", level: 90 },
    { name: "Web Development (Next.js)", level: 85 },
    { name: "Cybersecurity (Zero Trust)", level: 80 },
    { name: "Cloud Computing (AWS/GCP)", level: 75 },
    { name: "Generative AI (GPT Models)", level: 70 },
    { name: "Motion Graphics (After Effects)", level: 85 },
    { name: "UI/UX Design (Figma)", level: 80 },
    { name: "DevOps (Kubernetes)", level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 dark:bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-indigo-300 dark:text-indigo-500 mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-gray-300 dark:text-gray-600">{skill.name}</span>
                <span className="text-indigo-400 dark:text-indigo-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 dark:bg-gray-300 rounded-full h-2.5">
                <motion.div
                  className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}