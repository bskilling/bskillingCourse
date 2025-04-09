'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { handleErrors } from '@/lib/handleError';

// Backend URL
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

export default function SkillLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91', // Default to India
    phoneNumber: '',
    query: '',
    category: 'institutional',
    type: 'b2i',
    subCategory: 'skills',
    websiteUrl: undefined, // Added websiteUrl field
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    query: '',
    websiteUrl: '',
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
      countryCode: '',
      phoneNumber: '',
      query: '',
      websiteUrl: '',
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

    // Country code validation
    if (!formData.countryCode) {
      newErrors.countryCode = 'Country code is required';
      valid = false;
    }

    // Phone number validation
    if (formData.phoneNumber.length < 5) {
      newErrors.phoneNumber = 'Phone number must be at least 5 characters';
      valid = false;
    }

    // Query validation
    if (formData.query.length < 10) {
      newErrors.query = 'Message must be at least 10 characters';
      valid = false;
    }

    // Website URL validation - optional so no validation required
    // But we could add URL format validation if needed
    if (
      formData.websiteUrl &&
      // @ts-expect-error
      !formData?.websiteUrl?.includes('.')
    ) {
      newErrors.websiteUrl = 'Please enter a valid website URL';
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
      toast.success(
        'Your request has been submitted successfully. Our team will contact you soon.'
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phoneNumber: '',
        query: '',
        category: 'institutional',
        type: 'b2i',
        subCategory: 'skills',
        websiteUrl: undefined,
      });
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast.error(
        handleErrors(error) || 'There was a problem submitting your request. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-white text-2xl font-bold">
              Get Personalized Guidance
            </CardTitle>
            <CardDescription className="text-slate-300">
              Fill the form below and our team will get in touch with you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Institution Name"
                  className="bg-white/20 border-white/20 text-white placeholder:text-slate-400"
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Official Email"
                  className="bg-white/20 border-white/20 text-white placeholder:text-slate-400"
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="flex gap-2">
                <div className="w-1/4">
                  <Input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    placeholder="+91"
                    className="bg-white/20 border-white/20 text-white placeholder:text-slate-400"
                    disabled={isSubmitting}
                  />
                  {errors.countryCode && (
                    <p className="text-red-300 text-xs mt-1">{errors.countryCode}</p>
                  )}
                </div>

                <div className="flex-1">
                  <Input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="bg-white/20 border-white/20 text-white placeholder:text-slate-400"
                    disabled={isSubmitting}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-300 text-xs mt-1">{errors.phoneNumber}</p>
                  )}
                </div>
              </div>

              {/* Website URL Field */}
              <div>
                <Input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  placeholder="Institution Website URL (Optional)"
                  className="bg-white/20 border-white/20 text-white placeholder:text-slate-400"
                  disabled={isSubmitting}
                />
                {errors.websiteUrl && (
                  <p className="text-red-300 text-xs mt-1">{errors.websiteUrl}</p>
                )}
              </div>

              <div>
                <Textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="bg-white/20 border-white/20 text-white placeholder:text-slate-400"
                  rows={3}
                  disabled={isSubmitting}
                />
                {errors.query && <p className="text-red-300 text-xs mt-1">{errors.query}</p>}
              </div>

              {/* Hidden fields for category, type, and subCategory */}
              <input type="hidden" name="category" value={formData.category} />
              <input type="hidden" name="type" value={formData.type} />
              <input type="hidden" name="subCategory" value={formData.subCategory} />

              <Button
                type="submit"
                className="w-full bg-white hover:bg-slate-100 text-indigo-900 font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 border-t-2 border-indigo-900 rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  'Submit Request'
                )}
              </Button>
            </form>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded text-green-100 text-sm"
              >
                Your request has been submitted successfully! Our team will contact you soon.
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
