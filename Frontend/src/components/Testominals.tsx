import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          quote:
            "The analytics and insights have been game-changing for our marketing strategy.",
          author: "Sarah Johnson",
          role: "Marketing Director",
          company: "TechCorp",
          avatar: "SJ",
        },
        {
          quote:
            "Best URL shortener we've used. The QR code feature is a fantastic bonus.",
          author: "Michael Chen",
          role: "Product Manager",
          company: "StartupX",
          avatar: "MC",
        },
        {
          quote:
            "Enterprise-grade features with a simple, intuitive interface.",
          author: "Alex Rivera",
          role: "CTO",
          company: "GrowthCo",
          avatar: "AR",
        },
      ].map((testimonial, index) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-1 opacity-5" />
          <div className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 font-medium">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
