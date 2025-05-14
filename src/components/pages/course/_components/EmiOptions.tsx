'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Check, X } from 'lucide-react';
import { toast } from 'sonner';
import { handleErrors } from '@/lib/handleError';

// Form validation schema
const emiFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  email: z.string().email('Invalid email format'),
  phone: z.string().regex(/^\d{10,15}$/, 'Phone number must be between 10 to 15 digits'),
  courseId: z.string().optional(),
  amount: z.number().optional(),
});

type EMIFormData = z.infer<typeof emiFormSchema>;

interface EMIOptionsProps {
  courseId?: string;
  amount?: number;
  courseName?: string;
}

export default function EMIOptions({ courseId, amount, courseName }: EMIOptionsProps) {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EMIFormData>({
    resolver: zodResolver(emiFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      courseId: courseId || '',
      amount: amount || 0,
    },
  });

  // Create mutation for submitting EMI form
  const mutation = useMutation({
    mutationFn: (data: EMIFormData) => {
      return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/emi-leads`, data);
    },
    onSuccess: () => {
      toast.success('Your EMI request has been submitted successfully.');
      // Reset form after 3 seconds
      setTimeout(() => {
        reset();
        setOpen(false);
      }, 3000);
    },
    onError: error => {
      toast.error(handleErrors(error) || 'Something went wrong. Please try again.');
    },
  });

  const onSubmit = (data: EMIFormData) => {
    mutation.mutate(data);
  };

  const handleClose = () => {
    setOpen(false);
    mutation.reset();
    reset();
  };

  return (
    <div className="px-5 lg:w-11/12 mx-auto">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-100 p-6 md:p-8 my-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/5">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800">
              Flexible Payment Options
            </h3>
            <div className="flex items-center mt-2 mb-4 gap-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                No Cost EMI
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                0% Interest
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Easy Approval
              </span>
            </div>

            <p className="text-gray-700 mt-4">
              We have partnered with the following financing companies to provide competitive
              finance options at as low as 0% interest rates with no hidden cost.
            </p>

            <div className="flex flex-wrap gap-8 items-center mt-6">
              <div className="p-3 rounded-lg">
                <img src="/payment-logo/shopse.png" alt="ShopSe" className="h-12" />
              </div>
              <div className="p-3 rounded-lg">
                <img src="/payment-logo/liquilogo.png" alt="Liquiloans" className="h-5" />
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 mt-8 lg:mt-0 lg:pl-8 lg:border-l lg:border-blue-100">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Get Personalized EMI Options
              </h4>
              <p className="text-gray-600 text-sm mb-6">
                Speak with our finance experts to find the best payment plan for your needs.
              </p>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-md md:max-w-3xl p-0 overflow-hidden">
                  {mutation.isSuccess ? (
                    <div className="p-6 flex flex-col items-center">
                      <div className="bg-green-100 rounded-full p-3 mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                      <p className="text-gray-600 text-center">
                        Your EMI request has been submitted successfully. Our finance team will
                        contact you soon.
                      </p>
                      <Button
                        onClick={handleClose}
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Close
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5">
                        <div className="flex justify-between items-center">
                          <DialogTitle className="text-xl font-bold text-white">
                            EMI Payment Options
                          </DialogTitle>
                          <DialogClose className="text-white hover:text-blue-200">
                            <X className="h-6 w-6" />
                          </DialogClose>
                        </div>
                        <DialogDescription className="mt-2 text-blue-100">
                          Get your course with easy monthly installments
                          {courseName && ` for ${courseName}`}
                        </DialogDescription>
                      </div>

                      <div className="p-6">
                        <div className="mb-6">
                          <div className="flex mb-4 items-center">
                            <div className="bg-blue-100 p-2 rounded-full w-10 h-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                              </svg>
                            </div>
                            <div className="ml-4 flex gap-5 items-center">
                              <p>Powered by |</p>
                              <div className="flex gap-4 mt-2 items-center">
                                <img src="/payment-logo/shopse.png" alt="ShopSe" className="h-14" />
                                <img
                                  src="/payment-logo/liquilogo.png"
                                  alt="Liquiloans"
                                  className="h-6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                          <div>
                            <Label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Full Name
                            </Label>
                            <Input
                              id="name"
                              type="text"
                              {...register('name')}
                              className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your name"
                            />
                            {errors.name && (
                              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                            )}
                          </div>

                          <div>
                            <Label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Email Address
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              {...register('email')}
                              className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="your@email.com"
                            />
                            {errors.email && (
                              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                            )}
                          </div>

                          <div>
                            <Label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              {...register('phone')}
                              className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Your phone number"
                            />
                            {errors.phone && (
                              <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                            )}
                          </div>

                          <div className="text-xs text-gray-500 mt-2">
                            By submitting this form, you agree to be contacted by our finance team
                            regarding EMI options.
                          </div>

                          <Button
                            type="submit"
                            disabled={mutation.isPending}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                          >
                            {mutation.isPending ? 'Processing...' : 'Request EMI Options'}
                          </Button>
                        </form>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
