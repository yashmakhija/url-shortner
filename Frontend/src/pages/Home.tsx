import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { URLShortener } from "../components/URLShortener";
import { FiArrowRight, FiZap, FiTrendingUp, FiShield } from "react-icons/fi";
import { GradientText } from "../components/ui/GradientText";
import { FloatingElement } from "../components/ui/FloatingElement";
import { DemoShortener } from "../components/DemoShortener";
import { OpenSourceSection } from "../components/sections/open-source/OpenSourceSection";
import { Testimonials } from "../components/Testominals";
import { TrustBadge } from "../components/TrustBadge";
import AnalyticPromo from "../components/AnalyticPromo";
import { AnalyticsSection } from "../components/sections/analytics/AnalyticsSection";
import { Features } from "../components/Features";


function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-50" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4,
        }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl"
      />
    </div>
  );
}

function WaveDecoration() {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440 120V0C1252.89 80 1044.23 120 720 120C395.77 120 187.109 80 0 0V120H1440Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function HeroFeatures() {
  const features = [
    { icon: FiZap, text: "Lightning Fast" },
    { icon: FiTrendingUp, text: "Real-time Analytics" },
    { icon: FiShield, text: "Enterprise Security" },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index }}
          className="flex items-center justify-center space-x-2 text-gray-600"
        >
          <feature.icon className="h-5 w-5 text-indigo-600" />
          <span>{feature.text}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <BackgroundDecoration />

        <div className="relative z-10 pt-32 pb-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <FloatingElement>
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <span className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 text-sm font-medium backdrop-blur-sm border border-indigo-500/20">
                    <FiZap className="mr-2 h-4 w-4" />
                    Trusted by 50,000+ Professionals
                    <FiArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </motion.div>
              </FloatingElement>

              <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
                <GradientText>Transform</GradientText> Your Links into
                <br />
                <span className="relative">
                  Powerful Insights
                  <motion.svg
                    viewBox="0 0 100 20"
                    className="absolute w-full -bottom-2 left-0 text-indigo-400/30"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <path
                      d="M0 10 Q50 0 100 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </motion.svg>
                </span>
              </h1>

              <HeroFeatures />

              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                More than just short links. Get real-time analytics, QR codes,
                and tools that help you leverage the power of your links.
              </p>

              {/* Trust Logos */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
                <img
                  src="https://www.cdnlogo.com/logos/f/42/forbes.svg"
                  alt="Forbes"
                  className="h-8 opacity-50 hover:opacity-75 transition-opacity"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/2560px-Trustpilot_Logo_%282022%29.svg.png"
                  alt="TrustPilot"
                  className="h-8 opacity-50 hover:opacity-75 transition-opacity"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Google_URL_Shortener_Logo.png"
                  alt="google-url-shortner"
                  className="h-8 opacity-50 hover:opacity-75 transition-opacity"
                />
              </div>
            </motion.div>

            {!isAuthenticated ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-12"
              >
                <URLShortener />
                <br />
                <DemoShortener />
              </motion.div>
            ) : (
              <div>hi</div>
            )}
          </div>
        </div>

        <WaveDecoration />
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-gradient-to-b from-white to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnalyticsSection />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Features />
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnalyticPromo />
          <Testimonials />
          <TrustBadge />
        </div>
      </section>


      {/* Open Source Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OpenSourceSection />
        </div>
      </section>
    </div>
  );
}
