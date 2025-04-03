import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI-Powered Healthcare App",
      description: "Developed an Android app using Kotlin and Generative AI to assist doctors with patient diagnostics, deployed on AWS.",
      tech: "Kotlin, AWS, TensorFlow",
      details: "Integrated real-time diagnostics with 95% accuracy, reduced patient wait time by 20%, and scaled to 10K+ users.",
      link: "https://github.com/enock-kiplangat/healthcare-app",
    },
    {
      title: "Secure E-Commerce Platform",
      description: "Built a full-stack web app with Next.js and Node.js, featuring Zero Trust security and real-time payment processing.",
      tech: "Next.js, Node.js, Firebase",
      details: "Processed 1K+ transactions daily with zero security breaches, optimized for mobile with 99.9% uptime.",
      link: "https://github.com/enock-kiplangat/ecommerce",
    },
    {
      title: "3D Product Visualization",
      description: "Created interactive 3D motion graphics for a tech startup’s product launch using Blender and After Effects.",
      tech: "Blender, After Effects",
      details: "Designed 5+ product animations, increased engagement by 40%, delivered in 4K resolution.",
      link: "https://github.com/enock-kiplangat/3d-visuals",
    },
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20 bg-gray-900 dark:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-indigo-300 dark:text-indigo-500 mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 dark:bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openModal(project)}
            >
              <h3 className="text-xl font-semibold text-indigo-400 dark:text-indigo-600">{project.title}</h3>
              <p className="text-gray-400 dark:text-gray-600 mt-2">{project.description}</p>
              <p className="text-indigo-500 dark:text-indigo-500 text-sm mt-4">Tech: {project.tech}</p>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 dark:bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-800 dark:bg-white p-6 rounded-xl max-w-lg w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold text-indigo-400 dark:text-indigo-600 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 dark:text-gray-600 mb-4">{selectedProject.details}</p>
              <p className="text-indigo-500 dark:text-indigo-500 mb-4">Tech: {selectedProject.tech}</p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 dark:text-indigo-500 hover:text-indigo-300 dark:hover:text-indigo-400 underline"
              >
                View Project
              </a>
              <button
                onClick={closeModal}
                className="mt-6 w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}