/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import OtpInput from 'react-otp-input';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { FiUser, FiMail, FiPhone, FiAlertTriangle } from 'react-icons/fi';
import OTPVerificationDialog from './OTP';
import { toast } from 'sonner';
import { processError } from '@/lib/error';
import AlterLoader from '@/components/global/AlterLoader';
const formSchema = z.object({
  email: z.string().email('Invalid email address').optional(),
  countryCode: z.string().min(2, 'Select a country code'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number cannot exceed 15 digits'),
  rollNo: z.string().min(1, 'Roll number is required'),
});

type FormValues = z.infer<typeof formSchema>;

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const [otp, setOtp] = useState('');
  const [openOtpDialog, setOpenOtpDialog] = useState(false);
  const [openThankYouDialog, setOpenThankYouDialog] = useState(false);
  const [formData, setFormData] = useState<FormValues | null>(null);

  const sendOtpMutation = useMutation({
    mutationFn: async (e: FormValues) => {
      await axios.post(
        `https://backendbskilling-production-20ff.up.railway.app/api/form/send-otp`,
        e
      );
    },
    onSuccess: () => setOpenOtpDialog(true),
    onError: (err) => {
      // alert('Failed to send OTP');
      toast.error(processError(err));
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: async () => {
      await axios.post(
        `https://backendbskilling-production-20ff.up.railway.app/api/form/verify-otp`,
        {
          phone: formData?.phone,
          otp,
        }
      );
    },
    onSuccess: () => {
      registerUserMutation.mutate();
    },
  });

  const registerUserMutation = useMutation({
    mutationFn: async () => {
      await axios.post(
        `https://backendbskilling-production-20ff.up.railway.app/api/form/register`,
        formData
      );
    },
    onSuccess: () => {
      setOpenOtpDialog(false);
      setOpenThankYouDialog(true);
    },
  });

  // const onSubmit = (data: FormValues) => {
  //   setFormData(data);
  //   sendOtpMutation.mutate(data.phone);
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-4">
      {sendOtpMutation.isPending && <AlterLoader />}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Left Section */}
        <div className="w-full md:w-1/3 bg-card flex flex-col items-center justify-center p-6 text-white text-center">
          {/* <h2 className="text-2xl font-bold">Enter Your Details</h2> */}
          {/* <p className="text-sm mt-2">Join us for a seamless experience</p> */}
          <img
            src="/new-image/naan-logo.png"
            alt=""
            className="object-cover w-40"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 p-6">
          <form
            onSubmit={handleSubmit((e) => sendOtpMutation.mutate(e))}
            className="space-y-4"
          >
            {/* Name Field */}

            {/* Email Field */}
            <div>
              <div className="flex items-start sm:items-center gap-2 mb-1 text-yellow-600 text-xs sm:text-sm font-medium">
                {/* Icon Container */}
                <div className="flex-shrink-0 w-4 sm:w-5">
                  <FiAlertTriangle className="text-yellow-600 text-lg sm:text-xl" />
                </div>

                {/* Text */}
                <span className="leading-tight sm:leading-normal">
                  Roll Number is <b>case-sensitive</b>
                  (e.g., <span className="font-mono">C29UG149DOM020</span> ≠
                  <span className="font-mono lowercase">c29uG149DOM020</span>).
                </span>
              </div>

              <div className="relative border-b border-gray-300 focus-within:border-blue-500">
                <FiMail className="absolute left-2 top-3 text-gray-500" />
                <input
                  {...register('rollNo', { required: 'Email is required' })}
                  className="w-full pl-8 py-2 focus:outline-none bg-transparent"
                  placeholder="Roll No"
                  type="text"
                />
                {errors.rollNo && (
                  <p className="text-red-500 text-xs">
                    {errors?.rollNo?.message}
                  </p>
                )}
              </div>
            </div>
            {/* Phone Field */}
            <div className="relative border-b border-gray-300 focus-within:border-blue-500 flex items-center">
              <select
                {...register('countryCode')}
                className="bg-transparent focus:outline-none px-2 text-gray-700"
                defaultValue="+91"
              >
                <option value="+91">🇮🇳 +91</option>
              </select>
              <FiPhone className="absolute left-24 md:left-28 top-3 text-gray-500" />
              <input
                {...register('phone', { required: 'Phone number is required' })}
                className="w-full pl-10 py-2 ml-5 focus:outline-none bg-transparent"
                placeholder="Phone Number"
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}

            <div className="relative border-b border-gray-300 focus-within:border-blue-500">
              <FiMail className="absolute left-2 top-3 text-gray-500" />
              <input
                value={formData?.email}
                onChange={(e) => {
                  setValue('email', e.target.value);
                }}
                className="w-full pl-8 py-2 focus:outline-none bg-transparent"
                placeholder="Email (Optional)"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>

      <OTPVerificationDialog
        open={openOtpDialog}
        // @ts-ignore
        data={watch()}
        onClose={() => setOpenOtpDialog(false)}
      />
    </div>
  );
}

/**
 * Paste one or more documents here
 */
// {
//   "S No": 20179,
//   "University Name": "PERIYAR UNIVERSITY",
//   "College Name": "PADMAVANI ARTS and SCIENCE COLLEGE FOR WOMEN, SALEM -11.",
//   "College Code": "per143",
//   "Branch": "B.Com",
//   "District": "SALEM",
//   "Semester": 6,
//   "Student Name": "Rahul Y H",
//   "Student Email": "N/A",
//   "Student Phone": "N/A",
//   "Student RollNo": "rah143C22UG143COM020",
//   "Student NM Id": "D6A01F8A2EA097E9FEF42F5A0C10B600",
//   "Course Name": "GST Compliance & Auditing",
//   "Course ID": 2815
// }
