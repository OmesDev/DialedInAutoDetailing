"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isBefore, addMonths, subMonths } from 'date-fns';
import { loadStripe } from '@stripe/stripe-js';

type VehicleType = 'sedan' | 'suv' | 'truck';
type LocationType = 'mobile' | 'shop';
type TimeSlot = '9:00 AM' | '11:00 AM' | '1:00 PM' | '3:00 PM';

interface Service {
  name: string;
  prices: {
    sedan: number;
    suv: number;
    truck: number;
  };
  mobilePricing?: {
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

interface CoatingTier {
  name: string;
  price: {
    sedan: number;
    suv: number;
    truck: number;
  };
  icon: string;
  description: string;
  features: string[];
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Booking() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('sedan');
  const [selectedLocation, setSelectedLocation] = useState<LocationType>('shop');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedCoating, setSelectedCoating] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const services: Service[] = [
    {
      name: "Full Dial",
      prices: {
        sedan: 225,
        suv: 250,
        truck: 275
      },
      mobilePricing: {
        sedan: 275,
        suv: 300,
        truck: 325
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
      mobilePricing: {
        sedan: 170,
        suv: 190,
        truck: 210
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
      mobilePricing: {
        sedan: 170,
        suv: 190,
        truck: 210
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

  const coatingTiers: CoatingTier[] = [
    {
      name: "System X Crystal SS",
      price: {
        sedan: 750,
        suv: 900,
        truck: 1000
      },
      icon: "✨",
      description: "Entry-level ceramic coating with excellent protection",
      features: [
        "2-3 years protection",
        "Enhanced gloss",
        "Paint correction included",
        "Hydrophobic properties"
      ]
    },
    {
      name: "System X Diamond SS",
      price: {
        sedan: 1200,
        suv: 1400,
        truck: 1550
      },
      icon: "💎",
      description: "Premium ceramic coating with superior durability",
      features: [
        "4-5 years protection",
        "Superior hardness",
        "Enhanced paint correction",
        "Advanced chemical resistance"
      ]
    },
    {
      name: "System X Max",
      price: {
        sedan: 1750,
        suv: 1900,
        truck: 2000
      },
      icon: "🌟",
      description: "Professional-grade ceramic coating system",
      features: [
        "6-7 years protection",
        "Maximum gloss retention",
        "Multi-stage paint correction",
        "Supreme chemical resistance"
      ]
    },
    {
      name: "System X Max G+",
      price: {
        sedan: 2200,
        suv: 2350,
        truck: 2500
      },
      icon: "👑",
      description: "Ultimate ceramic coating protection",
      features: [
        "7+ years protection",
        "Highest gloss finish",
        "Premium paint correction",
        "Ultimate scratch resistance"
      ]
    }
  ];

  const timeSlots: TimeSlot[] = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'];

  const calculateTotal = () => {
    if (!selectedService) return 0;
    
    const service = services.find(s => s.name === selectedService);
    if (!service) return 0;

    let total = selectedLocation === 'mobile' && service.mobilePricing 
      ? service.mobilePricing[selectedVehicle]
      : service.prices[selectedVehicle];
    
    selectedAddOns.forEach(addon => {
      const addOnItem = addOns.find(a => a.name === addon);
      if (addOnItem) {
        total += addOnItem.price;
      }
    });

    if (selectedCoating) {
      const coating = coatingTiers.find(c => c.name === selectedCoating);
      if (coating) {
        total += coating.price[selectedVehicle];
      }
    }

    return total;
  };

  const getDaysInMonth = (date: Date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    return eachDayOfInterval({ start, end });
  };

  const handleCheckout = async () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time for your appointment');
      return;
    }

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          services: {
            mainService: selectedService,
            addOns: selectedAddOns,
            coating: selectedCoating,
          },
          total: calculateTotal(),
          selectedDate: format(selectedDate, 'MMMM d, yyyy'),
          selectedTime,
        }),
      });

      const { sessionId } = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
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
                    ? 'bg-blue-600 border-blue-500'
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
                    ? 'bg-blue-600 border-blue-500'
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
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      ? 'bg-blue-600 border-blue-500'
                      : 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50'
                  }`}
                >
                  <div className="text-3xl mb-4">{addon.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{addon.name}</h4>
                  <p className="text-gray-400 text-sm mb-2">{addon.description}</p>
                  <p className="text-emerald-400 font-medium">${addon.price}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Add Ceramic Coating Selection */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Ceramic Coating Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coatingTiers.map((coating) => (
                <button
                  key={coating.name}
                  onClick={() => setSelectedCoating(coating.name === selectedCoating ? null : coating.name)}
                  className={`p-6 rounded-xl border transition-all text-left ${
                    selectedCoating === coating.name
                      ? 'bg-blue-600 border-blue-500'
                      : 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50'
                  }`}
                >
                  <div className="text-3xl mb-4">{coating.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{coating.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{coating.description}</p>
                  <p className="text-emerald-400 font-semibold mb-4">
                    ${coating.price[selectedVehicle]}
                  </p>
                  <ul className="space-y-2">
                    {coating.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        )}

        {/* Schedule Your Service */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Select a Date & Time</h2>
            
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-white">
                  {format(currentMonth, 'MMMM yyyy')}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentMonth(prev => subMonths(prev, 1))}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentMonth(prev => addMonths(prev, 1))}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentMonth).map((day, idx) => {
                  const isSelected = selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd');
                  const isDisabled = isBefore(day, new Date()) && !isToday(day);
                  const dayNumber = format(day, 'd');
                  
                  return (
                    <button
                      key={day.toString()}
                      onClick={() => !isDisabled && setSelectedDate(day)}
                      disabled={isDisabled}
                      className={`
                        p-3 rounded-lg text-center transition-all
                        ${isDisabled ? 'text-gray-600 cursor-not-allowed' : 'hover:bg-blue-500/20'}
                        ${isSelected ? 'bg-blue-500 text-white' : 'text-gray-300'}
                        ${!isSameMonth(day, currentMonth) ? 'text-gray-600' : ''}
                      `}
                    >
                      {dayNumber}
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div className="mt-6 border-t border-gray-800 pt-6">
                  <h4 className="text-white font-medium mb-4">Available Times</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'].map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time === selectedTime ? null : time)}
                        className={`
                          p-3 rounded-lg text-center transition-all
                          ${selectedTime === time 
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-blue-500/20'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Selected Schedule Summary */}
              {selectedDate && selectedTime && (
                <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-300">
                      <span className="font-medium text-white">Selected Schedule: </span>
                      {format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}
                    </p>
                  </div>
                </div>
              )}
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
            <button 
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Proceed to Payment
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
} 