// src/components/sections/Testimonials.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../common';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Image from "next/image";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Medical Director",
      organization: "City Hospital",
      image: "/api/placeholder/80/80",
      quote: "The hospital management system developed by Anant Soft Computing has revolutionized our operations. The system is intuitive, efficient, and has significantly improved our patient care workflow.",
      rating: 5
    },
    {
      id: 2,
      name: "Amit Sharma",
      role: "Managing Director",
      organization: "Global Education Consultants",
      image: "/api/placeholder/80/80",
      quote: "Their overseas education CRM has been a game-changer for our consultancy. The attention to detail and custom features have helped us manage student applications more effectively.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Founder",
      organization: "Learning Edge Academy",
      image: "/api/placeholder/80/80",
      quote: "The learning management system exceeded our expectations. It's user-friendly, feature-rich, and the support team has been exceptional throughout the implementation.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-primary-100 via-white to-secondary-100 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
            <span className="block text-primary text-lg font-normal mt-2">
              What Our Clients Say About Us
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about
            their experience working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Decorative background circles (from production HTML) */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
            <div className="w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                style={{ /* keeping the feel of the original */ }}
              >
                <div className="text-primary opacity-80 mb-6">
                  {/* production SVG replaced with icon for parity */}
                  <FaQuoteLeft size={40} />
                </div>
                
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="flex items-center gap-4">
                  {/* Use proper Image props for Next.js: width & height (not fill) */}
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-primary text-sm">
                      {testimonials[currentIndex].organization}
                    </p>
                  </div>
                </div>

                {/* Rating on the right (kept below the content for layout parity with original) */}
                <div className="flex justify-center gap-2 mt-8">
                  {/* Navigation Dots (mirrors production: center row + highlighted wide dot) */}
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`rounded-full transition-all duration-300 ${
                        currentIndex === index 
                          ? 'w-8 h-2 bg-primary' 
                          : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
