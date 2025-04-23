import React, { useState } from 'react';
import { FaClock, FaGraduationCap } from 'react-icons/fa';
import { CheckCircle, Award, BookOpen } from 'lucide-react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

interface CourseEnrollmentProps {
  durationHours: number;
  _id: string;
  courseName: string;
}

// Registration form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

// Error handling helper function
const handleErrors = (err: any): string => {
  if (err.response?.data?.message) {
    return err.response.data.message;
  } else if (err.message) {
    return err.message;
  } else {
    return 'An unexpected error occurred. Please try again.';
  }
};

const FreeCourseEnrollment: React.FC<CourseEnrollmentProps> = ({
  durationHours,
  _id: courseId,
  courseName,
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Form setup with React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  // Handle form submission for user registration
  const handleUserRegistration = async (data: FormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      // Call the register-user endpoint
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ccavenue/register-user`,
        {
          ...data,
          courseId,
          courseName,
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message || 'Registration failed');
      }

      // Store user and token
      setUser(response.data.data.user);
      setAccessToken(response.data.data.accessToken);

      toast.success('Registration Successful: Your information has been verified.');
      setOpen(false);
      reset();
    } catch (err: any) {
      const errorMessage = handleErrors(err);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (values: FormValues) => {
    handleUserRegistration(values);
  };

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-gray-800">Enrollment Details</h2>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-4 px-6">
          <p className="text-white text-center text-sm font-medium">
            Free Course - Enroll now while it's available!
          </p>
        </div>

        <div className="lg:flex">
          {/* Left Side - Free Course Info */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center items-center">
            <div className="text-center">
              <div className="mt-1">
                <span className="text-4xl font-bold text-green-600">FREE</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Full course access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Certificate of completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaClock className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{durationHours} hours of content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Lifetime access</span>
                </div>
              </div>

              <div className="mt-8">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-lg font-medium transition-colors duration-300 text-base shadow-md">
                      Enroll For Free
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Register for Free Course</DialogTitle>
                      <DialogDescription>
                        Fill in your details to enroll in {courseName}
                      </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          id="name"
                          placeholder="Enter your full name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          {...register('name')}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          placeholder="Enter your phone number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          {...register('phone')}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500">{errors.phone.message}</p>
                        )}
                      </div>

                      <div className="pt-4">
                        <Button type="submit" disabled={isLoading} className="w-full">
                          {isLoading ? 'Enrolling...' : 'Enroll Now'}
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="outline"
                  className="w-full mt-3 border border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-6 rounded-lg font-medium transition-colors duration-300 text-base"
                >
                  Download Syllabus
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Course Benefits */}
          <div className="lg:w-1/2 p-8 bg-gray-50 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Why Join This Free Course?</h3>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <FaGraduationCap className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Expert-Led Training</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Learn from industry professionals with years of practical experience.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Practical Examples</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Real-world case studies and examples to build your portfolio.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Shareable Certificate</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Receive a certificate upon completion to showcase your skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeCourseEnrollment;
