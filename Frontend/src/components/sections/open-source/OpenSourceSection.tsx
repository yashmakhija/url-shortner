import { motion } from "framer-motion";
import { GradientText } from "../../ui/GradientText";
import { Card } from "../../ui/Card";
import { Icon } from "../../ui/Icon";
import { FiGithub } from "react-icons/fi";
import React from "react";

export function OpenSourceSection() {
  return (
    <div className="text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl font-bold mb-6">
          Proudly <GradientText>open-source</GradientText>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join our community of developers. Contribute, explore, and help us
          make URL shortening better for everyone.
        </p>

        {/* GitHub Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <Card hover className="flex items-center gap-2 px-6 py-3">
            <span className="text-amber-500">⭐</span>
            <span className="font-bold text-gray-900">1 Stars</span>
          </Card>

          <Card hover className="flex items-center gap-2 px-6 py-3">
            <span className="text-indigo-500">👥</span>
            <a
              href="https://github.com/yashmakhija/url-shortner/graphs/contributors"
              target="_blank"
              className="font-bold text-gray-900"
            >
              1 Contributors
            </a>
          </Card>
        </div>

        {/* GitHub Button */}
        <motion.a
          href="https://github.com/yashmakhija/url-shortner"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-[#24292F] text-white rounded-xl hover:bg-[#1a1f24] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon icon={FiGithub} size="lg" className="mr-3" />
          Star on GitHub
        </motion.a>
      </motion.div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Built by developers, for developers
          </h3>
          <p className="text-gray-600">
            Our source code is available on GitHub - feel free to read,
            review, or contribute to it however you want!
          </p>
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 font-medium border border-indigo-50"
            >
              YM
            </motion.div>
            <div>
              <div className="font-medium text-gray-900">Yash Makhija</div>
              <div className="text-sm text-gray-500">Creator & Maintainer</div>
            </div>
          </div>
        </motion.div>

        {/* Code Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card gradient className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="text-sm text-gray-800 font-mono overflow-x-auto">
              <code>{`# Clone the repository
git clone https://github.com/yashmakhija/url-shortner.git

# Install dependencies
npm install

# Start development server
npm run dev

# Join our community! 🚀`}</code>
            </pre>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 