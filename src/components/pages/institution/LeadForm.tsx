'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Mail, Phone, MessageSquare, Briefcase, BookOpen, Globe } from 'lucide-react';
import { handleErrors } from '@/lib/handleError';

// Backend URL
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://backendbskilling.up.railway.app';

export default function EnhancedLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const leadFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Please enter a valid email address'),
    countryCode: z.string().min(1, 'Country code is required'),
    phoneNumber: z.string().min(5, 'Phone number must be at least 5 characters'),
    query: z.string().min(10, 'Message must be at least 10 characters'),
    subCategory: z.enum(['jobs', 'skills']),
    type: z.enum(['b2i']),
    websiteUrl: z.string().optional(),
  });

  // Explicitly define TypeScript type
  type LeadFormType = z.infer<typeof leadFormSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<LeadFormType>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      countryCode: '+91',
      phoneNumber: '',
      query: '',
      type: 'b2i',
      subCategory: 'jobs', // ✅ Explicitly matches the z.enum(['jobs', 'skills'])
      websiteUrl: '',
    },
  });

  const subCategory = watch('subCategory');

  // Handle form submission
  const onSubmit = async (data: LeadFormType) => {
    setIsSubmitting(true);
    try {
      await axios.post(`${backendUrl}/api/lead`, data);
      toast.success('Your request has been submitted successfully.');
      reset(); // Reset form
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast.error(handleErrors(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <Card className="max-w-5xl w-full bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row">
            {/* Left Panel */}
            <div className="w-full md:w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 p-6 flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-lg font-bold text-white mb-2">Get Connected</h2>
                <p className="text-white text-sm">
                  Find your next opportunity or upgrade your skillset with expert assistance.
                </p>
              </motion.div>
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-1/2 p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Subcategory Selection */}
                <div>
                  <Label className="font-medium text-gray-700">I&apos;m looking for:</Label>
                  <div className="flex gap-4 mt-2">
                    <button
                      type="button"
                      className={`flex-1 p-3 border rounded-md cursor-pointer transition ${
                        watch('subCategory') === 'jobs'
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-300 hover:border-purple-400'
                      }`}
                      onClick={() => setValue('subCategory', 'jobs')}
                    >
                      <div className="flex items-center gap-2">
                        <Briefcase
                          size={16}
                          className={
                            watch('subCategory') === 'jobs' ? 'text-purple-600' : 'text-gray-500'
                          }
                        />
                        <span>Jobs</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className={`flex-1 p-3 border rounded-md cursor-pointer transition ${
                        watch('subCategory') === 'skills'
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-300 hover:border-purple-400'
                      }`}
                      onClick={() => setValue('subCategory', 'skills')}
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen
                          size={16}
                          className={
                            watch('subCategory') === 'skills' ? 'text-purple-600' : 'text-gray-500'
                          }
                        />
                        <span>Skills</span>
                      </div>
                    </button>
                  </div>
                  {errors.subCategory && (
                    <p className="text-red-500 text-xs mt-1">{errors.subCategory.message}</p>
                  )}
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <Input
                      {...register('name')}
                      placeholder="Institution Name"
                      className="border-gray-300"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      {...register('email')}
                      placeholder="Institution Email Address"
                      className="border-gray-300"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone Number */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <Input
                      {...register('countryCode')}
                      placeholder="+91"
                      className="border-gray-300"
                    />
                    {errors.countryCode && (
                      <p className="text-red-500 text-xs mt-1">{errors.countryCode.message}</p>
                    )}
                  </div>
                  <div className="col-span-2">
                    <Input
                      {...register('phoneNumber')}
                      placeholder="Institution Phone Number"
                      className="border-gray-300"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                </div>

                {/* Website URL */}
                <div>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      {...register('websiteUrl')}
                      placeholder="Institution Website URL (Optional)"
                      className="border-gray-300 pl-10"
                    />
                  </div>
                  {errors.websiteUrl && (
                    <p className="text-red-500 text-xs mt-1">{errors.websiteUrl.message}</p>
                  )}
                </div>

                {/* Query */}
                <div>
                  <Textarea
                    {...register('query')}
                    placeholder="Institution Query / Message"
                    rows={3}
                    className="border-gray-300"
                  />
                  {errors.query && (
                    <p className="text-red-500 text-xs mt-1">{errors.query.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
