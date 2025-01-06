import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  ArrowRight,
  ExternalLink,
  MoreVertical,
  Edit2,
} from "lucide-react";
import { Button } from "./ui/Button";

export function DemoShortener() {
  const [demoUrl] = useState("url.io/try");
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${demoUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-0">
      {" "}
      {/* Container with relative positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-xl shadow-sm overflow-visible border border-gray-100">
          {" "}
          {/* Changed overflow to visible */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              {/* URL Section */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">U</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{demoUrl}</span>
                    <div className="relative">
                      {" "}
                      {/* Added container for tooltip */}
                      <button
                        onClick={handleCopy}
                        className="text-gray-400 hover:text-indigo-600 transition-colors"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {copied && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute left-1/2 -translate-x-1/2 -top-10 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50"
                          >
                            Copied!
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ArrowRight className="h-3 w-3 mr-1" />
                    <span className="truncate">
                      https://example.com/very-long-url...
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4">
                <div className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  57.6K clicks
                </div>
                <div className="relative" ref={menuRef}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                  <AnimatePresence>
                    {showMenu && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
                        style={{ transform: "translateY(0)" }} // Ensure menu stays in position
                      >
                        <button
                          onClick={() => {
                            setShowMenu(false);
                            // Handle edit
                          }}
                          className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                        >
                          <Edit2 className="h-4 w-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setShowMenu(false);
                            window.open(`https://${demoUrl}`, "_blank");
                          }}
                          className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Open
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
