import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

// Modern UI icons
import { User, Mail, Phone, MessageSquare, Send, Building } from 'lucide-react';

const leadSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email format'),
    countryCode: z.string().optional(),
    phoneNumber: z.string().regex(/^\d{10,15}$/, 'Phone number must be between 10 to 15 digits'),
    type: z.enum(['b2c', 'b2c', 'b2b', 'b2i', 'general']),
    subcategory: z.enum(['', 'jobs', 'skills']).default('skills').optional(),
    query: z.string().min(10, 'Query must be at least 10 characters long'),
  })
  .superRefine((data, ctx) => {
    if (data.type === 'b2i' && !data.subcategory) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Subcategory is required when category is 'institutional'",
        path: ['subcategory'],
      });
    }
    if (data.type !== 'b2i' && data.subcategory) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Subcategory should only be provided when category is 'institutional'",
        path: ['subcategory'],
      });
    }
  });

const countryCodes = [
  { value: '+91', label: 'India (+91)' },
  { value: '+1', label: 'USA (+1)' },
  { value: '+44', label: 'UK (+44)' },
  { value: '+61', label: 'Australia (+61)' },
  { value: '+49', label: 'Germany (+49)' },
];

type LeadFormData = z.infer<typeof leadSchema>;

const ConsultationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
      countryCode: '+91',
      phoneNumber: '',
      type: 'b2i',
      subcategory: '',
      query: '',
    },
  });

  const selectedCategory = watch('type');
  const showSubcategory = selectedCategory === 'b2i';

  const onSubmit = useMutation({
    mutationFn: async (data: LeadFormData) => {
      await axios.post('/api/leads', data);
    },
  });

  return (
    <div className="max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit(
          e => onSubmit.mutate(e),
          err => console.error(err)
        )}
        className="space-y-5 p-6 rounded-xl bg-white shadow-lg border border-gray-100"
      >
        {/* Form Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600 flex items-center justify-center gap-2">
            <Send className="text-blue-600" /> Get in Touch
          </h2>
        </div>

        {/* Name Field */}
        <div className="space-y-1">
          <div className="relative">
            <User className="w-5 h-5 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              id="name"
              placeholder="Full Name"
              {...register('name')}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pl-10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <div className="relative">
            <Mail className="w-5 h-5 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              {...register('email')}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pl-10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>

        {/* Phone Number Field */}
        <div className="space-y-1">
          <div className="flex gap-2">
            <div className="w-1/4 relative">
              <Select defaultValue="+91" onValueChange={value => setValue('countryCode', value)}>
                <SelectTrigger className="border border-gray-200 rounded-lg h-10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200">
                  {countryCodes.map(code => (
                    <SelectItem key={code.value} value={code.value}>
                      {code.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-3/4 relative">
              <Phone className="w-5 h-5 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                id="phoneNumber"
                placeholder="Phone Number"
                {...register('phoneNumber')}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pl-10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>
          {errors.phoneNumber && (
            <p className="text-xs text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Subcategory (If applicable) */}
        {showSubcategory && (
          <div className="space-y-1">
            <div className="relative">
              <Building className="w-5 h-5 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2 z-10" />
              <Select
                defaultValue=""
                onValueChange={value => setValue('subcategory', value as 'jobs' | 'skills')}
              >
                <SelectTrigger className="w-full border border-gray-200 rounded-lg pl-10 h-10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Select Subcategory" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200">
                  <SelectItem value="jobs">Jobs Assistance</SelectItem>
                  <SelectItem value="skills">Skills Assistance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {errors.subcategory && (
              <p className="text-xs text-red-500">{errors.subcategory.message}</p>
            )}
          </div>
        )}

        {/* Query Field */}
        <div className="space-y-1">
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-blue-500 absolute left-3 top-3" />
            <textarea
              id="query"
              placeholder="Your Query"
              {...register('query')}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pl-10 min-h-24 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            />
          </div>
          {errors.query && <p className="text-xs text-red-500">{errors.query.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-2.5 font-medium transition"
        >
          <Send className="w-4 h-4" /> Submit
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
