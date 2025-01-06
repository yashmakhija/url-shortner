import { motion } from 'framer-motion';
import { FiLink2, FiBarChart2, FiShield, FiGlobe, FiSmartphone, FiTrendingUp } from 'react-icons/fi';

const features = [
  {
    name: 'Smart Link Shortening',
    description: 'Advanced algorithm creates memorable, branded short links that drive more clicks.',
    icon: FiLink2,
  },
  {
    name: 'Real-time Analytics',
    description: 'Get detailed insights about your audience, traffic sources, and link performance.',
    icon: FiBarChart2,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-level security with custom SSL certificates and password protection.',
    icon: FiShield,
  },
  {
    name: 'Global CDN',
    description: 'Lightning-fast redirects with our globally distributed network.',
    icon: FiGlobe,
  },
  {
    name: 'Mobile Optimized',
    description: 'Perfect experience across all devices with smart mobile detection.',
    icon: FiSmartphone,
  },
  {
    name: 'Campaign Tracking',
    description: 'UTM builder and automatic campaign tracking for marketing teams.',
    icon: FiTrendingUp,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900"
          >
            Everything you need in a{' '}
            <span className="text-indigo-600">modern URL shortener</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600"
          >
            Powerful features to help you grow and track your online presence
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur" />
              <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.name}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 