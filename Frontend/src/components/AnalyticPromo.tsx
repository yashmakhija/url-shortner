import { motion } from "framer-motion";
import { GradientText } from "./ui/GradientText";

export default function AnalyticPromo() {
  return (
    <>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Trusted by <GradientText>50,000+</GradientText> teams worldwide
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From startups to Fortune 500 companies, see why thousands of teams
          trust us with their link management
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {[
          { number: "2B+", label: "Links Created", icon: "🔗" },
          { number: "150M+", label: "Monthly Clicks", icon: "📈" },
          { number: "190+", label: "Countries Served", icon: "🌍" },
          { number: "99.9%", label: "Uptime", icon: "⚡" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity" />
            <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
