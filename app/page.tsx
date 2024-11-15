"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

type VideoSlide = {
  type: 'video';
  cdnUrl: string;
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const slides: VideoSlide[] = [
    {
      type: 'video',
      cdnUrl: 'https://cdn.discordapp.com/attachments/809634316488540161/1306840157781233766/detail1.mp4?ex=6738213d&is=6736cfbd&hm=9039b381a84127c268a860ecaaee788b0b6e025e7b0b500eb8c2b93a400ae028&'
    },
    {
      type: 'video',
      cdnUrl: 'https://cdn.discordapp.com/attachments/809634316488540161/1306841587719864320/detail2.mp4?ex=67382292&is=6736d112&hm=48b4810d1c3a2953f3ed9a5bfeb4bab5c553fdda73cfd3446d541dac3840aa9f&'
    },
    {
      type: 'video',
      cdnUrl: 'https://cdn.discordapp.com/attachments/809634316488540161/1306841599938138122/detail3.mp4?ex=67382295&is=6736d115&hm=50c17abb15c2b65cba313a54a44662c6eaf9d5d6ab47868a6f0941881979936c&'
    },
    {
      type: 'video',
      cdnUrl: 'https://cdn.discordapp.com/attachments/809634316488540161/1306841615150612641/detail4.mp4?ex=67382298&is=6736d118&hm=72f6059d91fe758301382f029905752662cf8af2564d914a84caef79f7cf5c87&'
    },
    {
      type: 'video',
      cdnUrl: 'https://cdn.discordapp.com/attachments/809634316488540161/1306841626576158730/detail5.mp4?ex=6738229b&is=6736d11b&hm=313a7d304f11b61dfbb2a88f2be9aeb1ff2f2b393487bcaca51a5539e9cccfa7&'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#fafafa] font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-md z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button - Enhanced */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden relative z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`} />
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`} />
              </div>
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
                <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors relative group py-2">
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
                <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors relative group py-2">
                  Services
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
                <a 
                  href="https://instagram.com/dialedindetailing_" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-blue-600 transition-colors relative group py-2 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100095190717861" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-blue-600 transition-colors relative group py-2 flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                  Facebook
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
                <Link href="/booking" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Book Now
                </Link>
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
              <Link 
                href="/booking"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:shadow-lg transition-all flex items-center justify-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            display: isMobileMenuOpen ? "block" : "none"
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-t absolute top-full left-0 right-0 shadow-lg"
        >
          <div className="px-6 py-4">
            <div className="flex flex-col gap-4">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { 
                  href: "https://instagram.com/getdialeddetail", 
                  label: "Instagram",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ),
                  external: true
                },
                { 
                  href: "https://facebook.com/getdialeddetail", 
                  label: "Facebook",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  ),
                  external: true
                }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium flex items-center gap-2"
                >
                  {item.icon && item.icon}
                  {item.label}
                </a>
              ))}
              
              {/* Additional mobile menu items */}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <a 
                  href="tel:+16094259512"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-4"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (609) 425-9512
                </a>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <Link href="/booking" className="w-full block">
                    Book Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
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
                <Link href="/booking" className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 border border-blue-500/20 overflow-hidden">
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
                </Link>
                <button 
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden"
                >
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
                      src={slide.cdnUrl}
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
          {/* Enhanced Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm text-blue-400 font-semibold tracking-wider text-sm uppercase py-2 px-4 rounded-full border border-blue-400/20 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                The Dialed In Difference
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Car Enthusiasts{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We combine passion, expertise, and cutting-edge techniques to deliver results that exceed expectations
            </p>
          </motion.div>

          {/* Enhanced Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Craftsmanship",
                description: "Our master detailers average 10+ years of experience, trained in the latest techniques and certified by industry leaders. Every vehicle receives the attention it deserves.",
                image: "/images/detail1.jpg",
                stats: ["4+ Years", "Experience"],
                delay: 0.1
              },
              {
                title: "Premium Products",
                description: "We exclusively use professional-grade products from industry-leading brands. Our ceramic coatings and protection systems are backed by extensive testing and warranties.",
                image: "/images/detail2.jpg",
                stats: ["100%", "Premium Grade"],
                delay: 0.2
              },
              {
                title: "Meticulous Process",
                description: "Our systematic approach ensures no detail is overlooked. From paint correction to interior restoration, we follow proven processes that deliver consistent excellence.",
                image: "/images/detail3.jpg",
                stats: ["50+", "Point Inspection"],
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
                <div className="relative bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-500 h-full overflow-hidden">
                  {/* Enhanced Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    
                    {/* Stats Overlay - Moved to top right */}
                    <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10">
                      <div className="text-2xl font-bold text-white">{feature.stats[0]}</div>
                      <div className="text-xs text-gray-300">{feature.stats[1]}</div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Enhanced Content Container */}
                  <div className="p-6">
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <div className="mt-6 flex justify-end">
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        Learn More
                        <svg 
                          className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all hover:scale-105 group"
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
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm text-blue-400 font-semibold tracking-wider text-sm uppercase py-2 px-4 rounded-full border border-blue-400/20 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Service Menu
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Vehicle
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Choose your perfect detailing package and optional enhancements
            </p>
          </motion.div>

          {/* Main Packages */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Full Dial",
                  prices: {
                    sedan: 225,
                    suv: 250,
                    truck: 275
                  },
                  features: [
                    "Complete Interior & Exterior",
                    "Paint Decontamination",
                    "Wheel & Tire Detail",
                    "Interior Deep Clean"
                  ],
                  description: "Our signature full-service detailing package",
                  featured: true
                },
                {
                  name: "Interior Dial",
                  prices: {
                    sedan: 120,
                    suv: 140,
                    truck: 160
                  },
                  features: [
                    "Deep Vacuum & Clean",
                    "Dashboard & Console Detail",
                    "Glass Cleaning",
                    "Floor Mat Cleaning"
                  ],
                  description: "Comprehensive interior detailing service"
                },
                {
                  name: "Exterior Dial",
                  prices: {
                    sedan: 120,
                    suv: 140,
                    truck: 160
                  },
                  features: [
                    "Iron Decontamination & Bug/Tar Removal",
                    "Wheels & Tires Cleaned & Dressed",
                    "Ceramic Seal/Wax Hand Application",
                    "Complete Exterior Hand Wash"
                  ],
                  description: "Complete exterior detailing service"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`relative rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col ${
                    service.featured 
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-blue-500/50' 
                      : 'bg-gray-900/90 border-gray-800/50 hover:border-blue-500/30'
                  }`}>
                    <div className="p-8 flex flex-col flex-grow">
                      {/* Package Name and Description */}
                      <div className="text-center mb-8">
                        <h4 className="text-2xl font-bold text-white mb-2">{service.name}</h4>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </div>

                      {/* Pricing Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">${service.prices.sedan}</div>
                          <div className="text-xs text-gray-400">Sedan</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">${service.prices.suv}</div>
                          <div className="text-xs text-gray-400">SUV</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">${service.prices.truck}</div>
                          <div className="text-xs text-gray-400">Truck</div>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3 mb-6 flex-grow">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Book Button */}
                      <Link 
                        href="/booking"
                        className={`w-full py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-auto ${
                          service.featured
                            ? 'bg-white text-blue-600 hover:bg-gray-100'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                        }`}
                      >
                        Book Now
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Service Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Mobile Service Available</h3>
            <p className="text-gray-400">
              Professional detailing at your location in Cape May County, NJ
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="tel:609-231-5374"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/50 text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/20 hover:border-blue-500/40"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (609) 231-5374
              </a>
              <a
                href="mailto:getdialeddetail@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/50 text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/20 hover:border-blue-500/40"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                getdialeddetail@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
