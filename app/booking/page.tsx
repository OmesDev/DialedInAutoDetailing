"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

type VehicleType = 'sedan' | 'suv' | 'truck';

interface Service {
  name: string;
  prices: {
    sedan: number;
    suv: number;
    truck: number;
  };
  features: string[];
  description: string;
  featured?: boolean;
}

interface AddOn {
  name: string;
  price: number;
  icon: string;
  description: string;
}

export default function Booking() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('sedan');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const services: Service[] = [
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
  ];

  const addOns: AddOn[] = [
    {
      name: "Heated Seat Steam",
      price: 150,
      icon: "🔥",
      description: "Deep clean & sanitize seats"
    },
    {
      name: "Pet Hair Removal",
      price: 25,
      icon: "🐕",
      description: "Thorough pet hair extraction"
    }
  ];

  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    const service = services.find(s => s.name === selectedService);
    if (!service) return 0;

    let total = service.prices[selectedVehicle];
    
    selectedAddOns.forEach(addon => {
      const addOnItem = addOns.find(a => a.name === addon);
      if (addOnItem) {
        total += addOnItem.price;
      }
    });

    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black relative pt-24 overflow-x-hidden">
      {/* Add Back Arrow */}
      <div className="absolute top-8 left-4 sm:left-8 z-20">
        <Link
          href="/"
          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6 transform transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Booking Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm text-blue-400 font-semibold tracking-wider text-sm uppercase py-2 px-4 rounded-full border border-blue-400/20 inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Book Your Detail
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Schedule Your Service
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select your vehicle type and preferred services to get started
          </p>
        </motion.div>

        {/* Vehicle Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Vehicle Type</h2>
          <div className="grid grid-cols-3 gap-4">
            {(['sedan', 'suv', 'truck'] as VehicleType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedVehicle(type)}
                className={`p-4 rounded-xl border transition-all ${
                  selectedVehicle === type
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500'
                    : 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50'
                } text-white capitalize`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Select Service</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <button
                key={service.name}
                onClick={() => setSelectedService(service.name)}
                className={`relative p-6 rounded-xl border transition-all ${
                  selectedService === service.name
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500'
                    : 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50'
                } text-left`}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-white mb-4">
                  ${service.prices[selectedVehicle]}
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Add-ons Selection */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Enhancement Services</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <button
                  key={addon.name}
                  onClick={() => {
                    setSelectedAddOns(prev => 
                      prev.includes(addon.name)
                        ? prev.filter(name => name !== addon.name)
                        : [...prev, addon.name]
                    );
                  }}
                  className={`p-6 rounded-xl border transition-all text-left ${
                    selectedAddOns.includes(addon.name)
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500'
                      : 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50'
                  }`}
                >
                  <div className="text-3xl mb-4">{addon.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{addon.name}</h4>
                  <p className="text-gray-400 text-sm mb-2">{addon.description}</p>
                  <p className="text-blue-400 font-medium">${addon.price}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Total and Checkout */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Total</h3>
              <div className="text-3xl font-bold text-white">${calculateTotal()}</div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
              Proceed to Booking
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
} 