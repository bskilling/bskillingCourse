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
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { handleErrors } from '@/lib/handleError';

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
      type: 'b2c',
      subcategory: '',
      query: '',
    },
  });

  const selectedCategory = watch('type');

  const [type, setType] = React.useState('b2c');
  const showSubcategory = selectedCategory === 'b2i';

  const onSubmit = useMutation({
    mutationFn: async (data: LeadFormData) => {
      await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/lead', {
        ...data,
        type,
      });
    },
    onSuccess: () => {
      toast.success('Your query has been submitted successfully. Our team will contact you soon.');
    },
    onError: err => {
      toast.error(handleErrors(err));
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

        {(type === 'b2c' || type === 'b2b') && (
          <div className="flex flex-col sm:flex-row gap-4 my-6">
            <div
              onClick={() => setType('b2c')}
              className={cn(
                'flex items-center gap-3 px-6 py-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md',
                type === 'b2c' ? 'bg-blue-50 border-blue-300 shadow-blue-100' : 'hover:bg-gray-50'
              )}
            >
              <div
                className={cn(
                  'flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-300',
                  type === 'b2c' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                )}
              >
                {type === 'b2c' && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <p
                className={cn(
                  'font-medium transition-all duration-300',
                  type === 'b2c' ? 'text-blue-700' : 'text-gray-700'
                )}
              >
                Myself
              </p>
            </div>

            <div
              onClick={() => setType('b2b')}
              className={cn(
                'flex items-center gap-3 px-6 py-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md',
                type === 'b2b' ? 'bg-blue-50 border-blue-300 shadow-blue-100' : 'hover:bg-gray-50'
              )}
            >
              <div
                className={cn(
                  'flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-300',
                  type === 'b2b' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                )}
              >
                {type === 'b2b' && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <p
                className={cn(
                  'font-medium transition-all duration-300',
                  type === 'b2b' ? 'text-blue-700' : 'text-gray-700'
                )}
              >
                My Company
              </p>
            </div>
          </div>
        )}

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
                  <SelectItem value="jobs">Jobs</SelectItem>
                  <SelectItem value="skills">Skills</SelectItem>
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
