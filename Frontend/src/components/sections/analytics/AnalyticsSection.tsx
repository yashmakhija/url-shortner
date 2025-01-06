import { motion } from "framer-motion";
import { GradientText } from "../../ui/GradientText";
import { FiCheck } from "react-icons/fi";
import { FloatingElement } from "../../ui";
import React from "react";

export function AnalyticsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Powerful Analytics <GradientText>at Your Fingertips</GradientText>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Track your link performance with our intuitive dashboard. Get
            insights about your audience and optimize your reach.
          </p>
          <div className="space-y-4">
            {[
              "Real-time click tracking",
              "Geographic data",
              "Device analytics",
              "Referrer tracking",
              "Custom reports",
              "API access",
            ].map((feature) => (
              <motion.div
                key={feature}
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 h-6 w-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <FiCheck className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-600">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <FloatingElement delay={0.2}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-2" />
          <img
            src="https://cdn.dribbble.com/userupload/4273491/file/original-76b664a5713585e92f5ebe229ff8c54a.png?resize=1600x1200"
            alt="Dashboard Preview"
            className="relative rounded-xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
          />
        </motion.div>
      </FloatingElement>
    </div>
  );
}
