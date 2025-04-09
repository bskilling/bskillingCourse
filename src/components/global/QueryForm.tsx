'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { toast } from 'sonner';
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Headphones,
  Send,
} from 'lucide-react';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

export default function QueryForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91', // Default to India
    phoneNumber: '',
    query: '',
    type: 'general', // Default to general
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    query: '',
  });

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      phoneNumber: '',
      query: '',
    };

    // Name validation
    if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    // Phone number validation
    if (formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
      valid = false;
    }

    // Query validation
    if (formData.query.length < 10) {
      newErrors.query = 'Message must be at least 10 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${backendUrl}/api/lead`, formData);
      setIsSuccess(true);
      toast.success('Your query has been submitted successfully. Our team will contact you soon.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phoneNumber: '',
        query: '',
        type: 'general',
      });

      // Close form after successful submission after 2 seconds
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting query:', error);
      toast.error('There was a problem submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle form visibility
  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (isOpen && e.target.id === 'overlay') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Button to open form - fixed at bottom right */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-16 right-4 md:bottom-24 md:right-2 z-40"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            {/* Attention-grabbing pulsing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 opacity-70 blur-sm animate-pulse"></div>

            <Button
              onClick={toggleForm}
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-6 rounded-full shadow-xl flex items-center gap-2 font-medium border-2 border-white"
            >
              <Headphones size={20} className="animate-bounce" />
              <span className="text-base font-bold">Chat with Us</span>
            </Button>

            {/* Floating notification dot */}
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
        </motion.div>
      )}

      {/* Form overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="overlay"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center md:items-end md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-md mx-4 my-4 md:mr-8 md:mb-8"
              initial={{ y: '100%', x: 0 }}
              animate={{ y: 0, x: 0 }}
              exit={{ y: '100%', x: 0 }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
                mass: 0.8,
              }}
            >
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
                <div className="flex justify-center border-b p-2 bg-gradient-to-r from-blue-600 to-purple-600">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleForm}
                    className="text-white hover:text-white/80 hover:bg-white/10"
                  >
                    <ChevronDown />
                  </Button>
                </div>

                {/* Logo and brand area - smaller padding */}
                <div className="flex justify-center pt-4 pb-1">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-1 shadow-lg">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-600">bSkilling</span>
                  </div>
                </div>

                <CardHeader className="pb-1 pt-1 text-center">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Let&apos;s Connect
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    We&apos;re here to help with any questions you may have.
                  </CardDescription>
                </CardHeader>

                <CardContent className="py-3">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600">
                        <User size={16} />
                      </div>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all h-9"
                        disabled={isSubmitting}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>}
                    </div>

                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600">
                        <Mail size={16} />
                      </div>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all h-9"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <div className="w-1/3 relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600">
                          <Phone size={16} />
                        </div>
                        <Input
                          type="text"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          placeholder="+91"
                          className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all h-9"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="flex-1 relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600">
                          <Phone size={16} />
                        </div>
                        <Input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all h-9"
                          disabled={isSubmitting}
                        />
                        {errors.phoneNumber && (
                          <p className="text-red-500 text-xs mt-0.5">{errors.phoneNumber}</p>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute left-3 top-3 text-blue-600">
                        <MessageSquare size={16} />
                      </div>
                      <Textarea
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        placeholder="How can we help you today?"
                        className="pl-10 border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all resize-none h-20"
                        disabled={isSubmitting}
                      />
                      {errors.query && (
                        <p className="text-red-500 text-xs mt-0.5">{errors.query}</p>
                      )}
                    </div>

                    {/* Hidden field for category */}
                    <input type="hidden" name="category" value={formData.type} />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 rounded-md shadow-md transition-all hover:shadow-lg flex items-center justify-center gap-2 h-9"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-4 w-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Query</span>
                        </>
                      )}
                    </Button>
                  </form>

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg text-green-800 text-xs flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Your message has been sent successfully! We&apos;ll be in touch shortly.
                      </span>
                    </motion.div>
                  )}

                  <div className="mt-3 pt-2 border-t border-blue-100 text-center">
                    <p className="text-xs text-gray-500">
                      By submitting this form, you agree to our{' '}
                      <a href="#" className="text-blue-600 ">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-blue-600 ">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
