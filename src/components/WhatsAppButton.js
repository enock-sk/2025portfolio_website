import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '+254724860844'; // Update with your real number
  const message = encodeURIComponent("Hi Enock, I’d like to discuss a project!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 dark:bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-600 dark:hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 z-30"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.557 4.21 1.61 6.038L0 24l6.06-1.596A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.858 0-3.583-.51-5.042-1.387l-.354-.21-3.598.947.948-3.564-.21-.354A9.95 9.95 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.618-4.616c-.31-.155-1.84-.906-2.126-.998-.285-.092-.492-.08-.698.248-.206.328-.798.998-.975 1.204-.177.206-.353.232-.663.077-.31-.155-1.305-.486-2.497-1.548-1.022-.893-1.73-1.997-1.933-2.325-.206-.328-.022-.504.155-.663.155-.142.31-.248.465-.372.155-.124.285-.206.41-.31.124-.103.177-.186.27-.31s.046-.232-.023-.328c-.07-.093-.62-.683-.855-.917-.232-.232-.465-.186-.64-.112-.177.074-.74.232-1.41.738-.67.506-1.257 1.118-1.41 1.297-.155.186-.31.372-.155.682.155.31.353.62.558.93.206.31.41.62.663 1.022.253.403.527.806.975 1.387.447.58.893 1.022 1.41 1.34.517.31 1.022.558 1.64.682.62.124 1.204.093 1.64.03.434-.062.893-.248 1.257-.558.372-.31.698-.682.975-1.022.285-.34.558-.682.663-.93.103-.248.206-.465.155-.62-.046-.155-.177-.248-.31-.372z" />
      </svg>
    </motion.a>
  );
}