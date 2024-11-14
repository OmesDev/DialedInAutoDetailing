"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Slide = {
  type: 'video';
  src: string;
  thumbnail: string;
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: Slide[] = [
    {
      type: 'video',
      src: '/videos/detail1.mp4',
      thumbnail: '/thumbnails/detail1.jpg'
    },
    {
      type: 'video',
      src: '/videos/detail2.mp4',
      thumbnail: '/thumbnails/detail2.jpg'
    },
    {
      type: 'video',
      src: '/videos/detail3.mp4',
      thumbnail: '/thumbnails/detail3.jpg'
    },
    {
      type: 'video',
      src: '/videos/detail4.mp4',
      thumbnail: '/thumbnails/detail4.jpg'
    },
    {
      type: 'video',
      src: '/videos/detail5.mp4',
      thumbnail: '/thumbnails/detail5.jpg'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-[#fafafa] font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-md z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button - Moved to left */}
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden">
              <svg 
                className="w-5 h-5 text-black"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>

            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dialed In
                </div>
                <div className="text-sm text-gray-600 -mt-1">
                  Automotive Detailing
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6 text-sm font-medium">
                <a href="#home" className="hover:text-blue-600 transition-colors relative group py-2">
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
                <a href="#packages" className="hover:text-blue-600 transition-colors relative group py-2">
                  Packages
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
                <a href="#gallery" className="hover:text-blue-600 transition-colors relative group py-2">
                  Gallery
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
                <a href="#contact" className="hover:text-blue-600 transition-colors relative group py-2">
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="tel:+16094259512" 
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  (609) 425-9512
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>

            {/* Mobile Action Buttons - Removed menu button */}
            <div className="flex items-center gap-3 md:hidden">
              <a 
                href="tel:+16094259512" 
                className="p-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all border border-blue-500/20"
                aria-label="Call us"
              >
                <svg 
                  className="w-4 h-4 text-blue-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
              </a>
              <a 
                href="#book-now"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:shadow-lg transition-all flex items-center justify-center"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        <div className="hidden md:hidden px-6 py-4 bg-white border-t">
          <div className="flex flex-col gap-4">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#packages" className="text-gray-600 hover:text-blue-600 transition-colors">
              Packages
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-blue-900 pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-blue-500/20 rounded-full blur-[100px]" />
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[100px]" />
              <div className="absolute left-1/2 top-1/2 w-40 h-40 bg-blue-400/10 rounded-full blur-[100px]" />
              
              {/* Subtitle with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 mt-4 sm:mt-0"
              >
                <span className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm text-blue-400 font-semibold tracking-wider text-sm uppercase py-2 px-4 rounded-full border border-blue-400/20 inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  Professional Auto Detailing Services
                </span>
              </motion.div>

              {/* Main Title with enhanced styling */}
              <h1 className="text-6xl sm:text-7xl font-bold mb-8 text-white leading-[1.1]">
                Transform Your{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    Vehicle
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 transform origin-left"
                  />
                </span>{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    Into Art
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -z-10 bottom-0 left-0 h-[0.5em] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm"
                  />
                </span>
              </h1>

              {/* Description with enhanced styling */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 leading-relaxed max-w-xl font-light"
              >
                Experience automotive perfection through our meticulous detailing process. 
                We don&apos;t just clean cars – we restore their beauty and protect their finish 
                with unmatched attention to detail.
              </motion.p>

              {/* CTA Buttons with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-16"
              >
                <button className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 border border-blue-500/20 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative flex items-center gap-2">
                    Book Your Detail
                    <svg 
                      className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </span>
                </button>
                <button className="group relative bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative flex items-center gap-2">
                    View Services
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </button>
              </motion.div>

              {/* Stats with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
              >
                {[
                  { value: "500+", label: "Cars Detailed" },
                  { value: "5⭐", label: "Rating" },
                  { value: "100%", label: "Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg blur-xl group-hover:bg-blue-500/10 transition-all duration-300" />
                    <div className="relative">
                      <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Video Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full pb-12 sm:pb-16 px-0 flex justify-center"
            >
              <div className="relative aspect-[9/16] w-full lg:w-[calc(800px*9/16)] rounded-2xl overflow-hidden shadow-2xl">
                {/* Videos */}
                {slides.map((slide, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      scale: currentSlide === index ? 1 : 1.1,
                      x: `${(index - currentSlide) * 100}%`
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 w-full"
                  >
                    <video
                      src={slide.src}
                      poster={slide.thumbnail}
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    {/* Subtle gradient overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                ))}

                {/* Navigation Arrows - Hidden on smaller screens */}
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all hidden sm:block"
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 19l-7-7 7-7" 
                    />
                  </svg>
                </button>
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all hidden sm:block"
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
                
                {/* Enhanced Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        currentSlide === index 
                          ? 'w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                          : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm text-blue-500 font-semibold tracking-wider text-sm uppercase py-2 px-4 rounded-full border border-blue-500/20 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Elevating Auto Care to an{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Art Form
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experience unparalleled attention to detail and premium service that sets us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "✨",
                title: "Expert Craftsmanship",
                description: "Our certified detailers bring years of experience and passion to every vehicle they touch.",
                delay: 0.1
              },
              {
                icon: "🛡️",
                title: "Premium Products",
                description: "We use only the highest-grade detailing products and cutting-edge technology.",
                delay: 0.2
              },
              {
                icon: "🔍",
                title: "Meticulous Process",
                description: "Every detail is carefully considered, ensuring exceptional results every time.",
                delay: 0.3
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-500 h-full">
                  <div className="flex flex-col items-center text-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-center">
                    {feature.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <a
              href="#book-now"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all hover:scale-105 group"
            >
              Experience the Difference
              <svg
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-32 bg-gradient-to-b from-[#fafafa] to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Detailing Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package to restore and protect your vehicle's beauty
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 hover:scale-[1.02]"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 text-xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Essential Detail</h3>
              <p className="text-gray-600 mb-6">Perfect for regular maintenance</p>
              <p className="text-3xl font-bold mb-6 text-gray-900">$149</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  Exterior Hand Wash
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  Interior Vacuum & Wipe Down
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  Wheel & Tire Detail
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg">
                Select Package
              </button>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 hover:scale-[1.02] border-2 border-blue-600"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Premium Detail</h3>
              <p className="text-gray-600 mb-6">Most Popular Choice</p>
              <p className="text-3xl font-bold mb-6 text-gray-900">$299</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  Everything in Essential
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  Paint Decontamination
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  One-Step Paint Correction
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  Sealant Protection
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg">
                Select Package
              </button>
            </motion.div>

            {/* Ultimate Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 hover:scale-[1.02]"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">👑</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Ultimate Detail</h3>
              <p className="text-gray-600 mb-6">Complete Transformation</p>
              <p className="text-3xl font-bold mb-6 text-gray-900">$599</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  Everything in Premium
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  Full Paint Correction
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  Ceramic Coating
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-50 p-1 rounded-full text-blue-600 mr-3">✓</span>
                  Interior Deep Clean
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg">
                Select Package
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
