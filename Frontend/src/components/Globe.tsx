import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Notification {
  id: number;
  country: string;
  city: string;
  flag: string;
}

export function Globe() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Simulated notifications
  const possibleNotifications: Notification[] = [
    { id: 1, country: 'USA', city: 'New York', flag: '🇺🇸' },
    { id: 2, country: 'UK', city: 'London', flag: '🇬🇧' },
    { id: 3, country: 'Japan', city: 'Tokyo', flag: '🇯🇵' },
    { id: 4, country: 'France', city: 'Paris', flag: '🇫🇷' },
    { id: 5, country: 'Germany', city: 'Berlin', flag: '🇩🇪' },
    { id: 6, country: 'Canada', city: 'Toronto', flag: '🇨🇦' },
    { id: 7, country: 'Australia', city: 'Sydney', flag: '🇦🇺' },
    { id: 8, country: 'Brazil', city: 'São Paulo', flag: '🇧🇷' },
  ];

  useEffect(() => {
    const addNotification = () => {
      const notification = possibleNotifications[Math.floor(Math.random() * possibleNotifications.length)];
      setNotifications(prev => [...prev.slice(-2), { ...notification, id: Date.now() }]);
    };

    // Add initial notifications
    addNotification();
    timeoutRef.current = setInterval(addNotification, 3000);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      {/* Globe Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white rounded-full animate-pulse" />
      
      {/* Animated Dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-600/20"
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Notification Popups */}
      <AnimatePresence>
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20, x: index === 0 ? -50 : 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute ${
              index === 0 ? 'bottom-20 left-0' : 'top-20 right-0'
            } bg-white rounded-lg shadow-lg p-3 flex items-center gap-3 z-10`}
          >
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
              {notification.flag}
            </div>
            <div className="text-sm">
              <div className="font-medium">New click from</div>
              <div className="text-gray-500">
                {notification.city}, {notification.country}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Gradient Rings */}
      <div className="absolute inset-8 rounded-full border-2 border-indigo-100 animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-16 rounded-full border-2 border-indigo-100 animate-[spin_40s_linear_infinite_reverse]" />
      <div className="absolute inset-24 rounded-full border-2 border-indigo-100 animate-[spin_30s_linear_infinite]" />
    </div>
  );
} 