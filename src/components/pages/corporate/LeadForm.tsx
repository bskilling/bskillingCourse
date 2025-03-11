import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
  GraduationCap,
  Building2,
  BookOpen,
  Landmark,
  Calendar,
  CheckCircle,
  Star,
} from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

// The schema as provided
const leadSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email format'),
    countryCode: z.string().optional(),
    phoneNumber: z
      .string()
      .regex(/^\d{10,15}$/, 'Phone number must be between 10 to 15 digits'),
    category: z.enum([
      'individual_course',
      'corporate_training',
      'institutional',
      'government',
    ]),
    subcategory: z.enum(['', 'jobs', 'skills']).optional(),
    query: z.string().min(10, 'Query must be at least 10 characters long'),
  })
  .superRefine((data, ctx) => {
    if (data.category === 'institutional' && !data.subcategory) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Subcategory is required when category is 'institutional'",
        path: ['subcategory'],
      });
    }

    if (data.category !== 'institutional' && data.subcategory) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Subcategory should only be provided when category is 'institutional'",
        path: ['subcategory'],
      });
    }
  });

type LeadFormData = z.infer<typeof leadSchema>;

const countryCodes = [
  { value: '+91', label: 'India (+91)' },
  { value: '+1', label: 'USA (+1)' },
  { value: '+44', label: 'UK (+44)' },
  { value: '+61', label: 'Australia (+61)' },
  { value: '+49', label: 'Germany (+49)' },
];

const categoryIcons = {
  individual_course: <GraduationCap size={18} />,
  corporate_training: <Briefcase size={18} />,
  institutional: <Building2 size={18} />,
  government: <Landmark size={18} />,
};

const subcategoryIcons = {
  jobs: <BookOpen size={18} />,
  skills: <Star size={18} />,
};

const ConsultationForm = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      category: 'corporate_training',
      subcategory: '',
      query: '',
    },
  });

  const selectedCategory = watch('category');
  const showSubcategory = selectedCategory === 'institutional';

  //   const onSubmit = async (data) => {
  //     setIsSubmitting(true);
  //     try {
  //       // Simulate API call
  //       await new Promise((resolve) => setTimeout(resolve, 1000));
  //       console.log('Form submitted:', data);
  //       onOpenChange(false);
  //     } catch (error) {
  //       console.error('Submission error:', error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  const onSubmit = useMutation({
    mutationFn: async (data: LeadFormData) => {
      const res = axios.post('/api/leads', data);
    },
  });

  const handleCategoryChange = (
    value:
      | 'individual_course'
      | 'corporate_training'
      | 'institutional'
      | 'government'
  ) => {
    setValue('category', value);
    if (value !== 'institutional') {
      setValue('subcategory', '');
    }
  };

  const handleSubcategoryChange = (value: '' | 'jobs' | 'skills') => {
    setValue('subcategory', value);
  };

  const handleCountryCodeChange = (value: string) => {
    setValue('countryCode', value);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden rounded-xl border-none">
        <div className="flex flex-col md:flex-row">
          {/* Left side banner/image section */}
          <div className="hidden md:flex md:w-2/5 bg-gradient-to-b from-blue-900 to-blue-600 text-white p-8 flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Let&apos;s Grow Together
              </h2>
              <p className="mb-6 opacity-90">
                Schedule a consultation with our experts and discover how we can
                help transform your educational journey.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <CheckCircle size={18} />
                  </div>
                  <span>Personalized learning paths</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <CheckCircle size={18} />
                  </div>
                  <span>Industry-recognized certifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <CheckCircle size={18} />
                  </div>
                  <span>Expert-led sessions</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center space-x-2 text-sm opacity-75">
                <Calendar size={14} />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right side form section */}
          <div className="w-full md:w-3/5 p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold text-center text-gray-800">
                Schedule Consultation
              </DialogTitle>
              <DialogDescription className="text-center text-gray-600">
                Fill out the form below and our team will get back to you within
                24 hours.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={
                // @ts-ignore
                handleSubmit(onSubmit.mutate)
              }
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center text-sm font-medium text-gray-700 mb-1"
                >
                  <User size={16} className="mr-2 text-blue-600" />
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className={`rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  {...register('name')}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center text-sm font-medium text-gray-700 mb-1"
                >
                  <Mail size={16} className="mr-2 text-blue-600" />
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className={`rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="flex items-center text-sm font-medium text-gray-700 mb-1"
                >
                  <Phone size={16} className="mr-2 text-blue-600" />
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <div className="w-1/3">
                    <Select
                      defaultValue="+1"
                      onValueChange={handleCountryCodeChange}
                    >
                      <SelectTrigger className="rounded-lg border-gray-300 bg-gray-50 h-12">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((code) => (
                          <SelectItem key={code.value} value={code.value}>
                            {code.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-2/3">
                    <Input
                      id="phoneNumber"
                      placeholder="1234567890"
                      className={`rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 ${
                        errors.phoneNumber ? 'border-red-500' : ''
                      }`}
                      {...register('phoneNumber')}
                    />
                  </div>
                </div>
                {errors.phoneNumber && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              {/* 
              <div>
                <label
                  htmlFor="category"
                  className="flex items-center text-sm font-medium text-gray-700 mb-1"
                >
                  <Briefcase size={16} className="mr-2 text-blue-600" />
                  Consultation Category
                </label>
                <Select
                  defaultValue="corporate_training"
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="rounded-lg border-gray-300 bg-gray-50">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries({
                      individual_course: 'Individual Course',
                      corporate_training: 'Corporate Training',
                      institutional: 'Institutional',
                      government: 'Government',
                    }).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        <div className="flex items-center">
                          <span className="mr-2 text-blue-600">
                            {categoryIcons[value]}
                          </span>
                          {label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div> */}

              {showSubcategory && (
                <div>
                  <label
                    htmlFor="subcategory"
                    className="flex items-center text-sm font-medium text-gray-700 mb-1"
                  >
                    <BookOpen size={16} className="mr-2 text-blue-600" />
                    Subcategory
                  </label>
                  <Select
                    defaultValue=""
                    onValueChange={handleSubcategoryChange}
                  >
                    <SelectTrigger className="rounded-lg border-gray-300 bg-gray-50">
                      <SelectValue placeholder="Select a subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries({
                        jobs: 'Jobs',
                        skills: 'Skills',
                      }).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          <div className="flex items-center">
                            <span className="mr-2 text-blue-600">
                              {
                                // @ts-ignore
                                subcategoryIcons[value]
                              }
                            </span>
                            {label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.subcategory && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.subcategory.message}
                    </p>
                  )}
                </div>
              )}

              <div>
                <label
                  htmlFor="query"
                  className="flex items-center text-sm font-medium text-gray-700 mb-1"
                >
                  <MessageSquare size={16} className="mr-2 text-blue-600" />
                  Your Query
                </label>
                <Textarea
                  id="query"
                  placeholder="Please describe what you're looking for..."
                  className={`rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 min-h-24 ${
                    errors.query ? 'border-red-500' : ''
                  }`}
                  {...register('query')}
                />
                {errors.query && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.query.message}
                  </p>
                )}
              </div>

              <DialogFooter className="pt-4 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="w-full sm:w-auto rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={18} />
                      Schedule Consultation
                    </div>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;
