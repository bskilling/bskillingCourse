import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaPaperPlane,
} from 'react-icons/fa';
const leadSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email format'),
    countryCode: z.string().optional(),
    phoneNumber: z
      .string()
      .regex(/^\d{10,15}$/, 'Phone number must be between 10 to 15 digits'),
    type: z.enum(['b2c', 'b2c', 'b2b', 'b2i', 'general']),
    subcategory: z.enum(['', 'jobs', 'skills']).optional(),
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
        message:
          "Subcategory should only be provided when category is 'institutional'",
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
      type: 'b2c',
      subcategory: '',
      query: '',
    },
  });

  const selectedCategory = watch('type');
  const showSubcategory = selectedCategory === 'b2c';

  const onSubmit = useMutation({
    mutationFn: async (data: LeadFormData) => {
      await axios.post('/api/leads', data);
    },
  });

  return (
    <form
      onSubmit={handleSubmit(
        (e) => onSubmit.mutate(e),
        (err) => console.error(err)
      )}
      className="space-y-8 max-w-xl mx-auto p-8 shadow-2xl rounded-2xl bg-white text-black relative"
    >
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/edtech-bg.svg')] bg-cover rounded-2xl" />

      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-transparent bg-clip-text flex items-center justify-center gap-3">
        <FaPaperPlane className="text-[#2563EB]" /> Get in Touch
      </h2>

      {/* Name Field */}
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="flex items-center border-b border-[#3B82F6] focus-within:border-[#3B82F6] transition">
          <FaUser className="text-[#3B82F6] mr-3" />
          <input
            id="name"
            placeholder="Enter your full name"
            {...register('name')}
            className="w-full bg-transparent placeholder:text-[#2563EB] outline-none py-2 text-base"
          />
        </div>
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="flex items-center border-b border-[#3B82F6] focus-within:border-[#3B82F6] transition">
          <FaEnvelope className="text-[#3B82F6] mr-3" />
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            className="w-full bg-transparent placeholder:text-[#2563EB] outline-none py-2 text-base"
          />
        </div>
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number Field */}
      <div className="space-y-1">
        <label
          htmlFor="phoneNumber"
          className="text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <div className="flex gap-3 items-center border-b border-[#3B82F6] focus-within:border-[#3B82F6] transition">
          <FaPhone className="text-[#3B82F6] mr-3" />
          <Select
            defaultValue="+91"
            onValueChange={(value) => setValue('countryCode', value)}
          >
            <SelectTrigger className="border-none bg-transparent text-black outline-none w-1/3 text-sm">
              <SelectValue placeholder="Code" />
            </SelectTrigger>
            <SelectContent className="bg-[#3B82F6] text-white border border-[#2563EB]">
              {countryCodes.map((code) => (
                <SelectItem
                  key={code.value}
                  value={code.value}
                  className="hover:bg-[#2563EB]"
                >
                  {code.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input
            id="phoneNumber"
            placeholder="Enter your phone number"
            {...register('phoneNumber')}
            className="w-2/3 bg-transparent placeholder:text-[#2563EB] outline-none py-2 text-base"
          />
        </div>
        {errors.phoneNumber && (
          <p className="text-xs text-red-500">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Subcategory (If applicable) */}
      {showSubcategory && (
        <div className="space-y-1">
          <label
            htmlFor="subcategory"
            className="text-sm font-medium text-gray-700"
          >
            Subcategory
          </label>
          <Select
            defaultValue=""
            onValueChange={(value) =>
              setValue('subcategory', value as 'jobs' | 'skills')
            }
          >
            <SelectTrigger className="border-b border-[#3B82F6] bg-transparent text-black outline-none focus:border-[#3B82F6] py-2 text-base">
              <SelectValue placeholder="Select a subcategory" />
            </SelectTrigger>
            <SelectContent className="bg-[#3B82F6] text-white border border-[#2563EB]">
              <SelectItem value="jobs" className="hover:bg-[#2563EB]">
                Jobs
              </SelectItem>
              <SelectItem value="skills" className="hover:bg-[#2563EB]">
                Skills
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.subcategory && (
            <p className="text-xs text-red-500">{errors.subcategory.message}</p>
          )}
        </div>
      )}

      {/* Query Field */}
      <div className="space-y-1">
        <label htmlFor="query" className="text-sm font-medium text-gray-700">
          Your Query
        </label>
        <div className="flex items-start border-b border-[#3B82F6] focus-within:border-[#3B82F6] transition">
          <FaCommentDots className="text-[#3B82F6] mr-3 mt-1" />
          <textarea
            id="query"
            placeholder="Describe what you need..."
            {...register('query')}
            className="w-full bg-transparent placeholder:text-[#2563EB] outline-none py-2 min-h-28 text-base"
          />
        </div>
        {errors.query && (
          <p className="text-xs text-red-500">{errors.query.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1E40AF] text-white py-3 font-bold transition shadow-md text-lg"
      >
        <FaPaperPlane /> Submit
      </button>
    </form>
  );
};

export default ConsultationForm;
