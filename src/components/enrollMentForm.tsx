import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import {
  ArrowRight,
  User,
  Mail,
  Phone,
  GraduationCap,
  Loader2,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';

// Form data interface
interface EnrollmentFormData {
  name: string;
  email: string;
  phoneNumber: string;
  school: string;
  grade: string;
  gradeNumber?: number;
}

// API function to submit form
const submitEnrollmentForm = async (data: EnrollmentFormData): Promise<any> => {
  const response = await fetch(
    (process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:3001') + '/api/forms',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        submissionSource: 'website',
        interestedCourse: 'General Enrollment',
        status: 'pending',
        additionalDetails: {
          enrollmentType: 'online',
          source: 'website_enrollment_form',
        },
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to submit form');
  }

  return response.json();
};

const EnrollmentForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<EnrollmentFormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      school: '',
      grade: '',
    },
  });

  const mutation = useMutation({
    mutationFn: submitEnrollmentForm,
    onSuccess: data => {
      setSubmitSuccess(true);
      reset();
      setTimeout(() => {
        setIsOpen(false);
        setSubmitSuccess(false);
      }, 3000);
    },
    onError: error => {
      console.error('Form submission failed:', error);
    },
  });

  const onSubmit = (data: EnrollmentFormData) => {
    // Extract grade number if grade is numeric
    const gradeValue = data.grade;
    const gradeNumber = parseInt(gradeValue);

    const submissionData = {
      ...data,
      gradeNumber:
        !isNaN(gradeNumber) && gradeNumber >= 1 && gradeNumber <= 12 ? gradeNumber : undefined,
    };

    mutation.mutate(submissionData);
  };

  const watchedGrade = watch('grade');

  // Grade options for Indian education system
  const gradeOptions = [
    { value: '6', label: 'Grade 6' },
    { value: '7', label: 'Grade 7' },
    { value: '8', label: 'Grade 8' },
    { value: '9', label: 'Grade 9' },
    { value: '10', label: 'Grade 10' },
    { value: '11', label: 'Grade 11' },
    { value: '12', label: 'Grade 12' },
    { value: 'kg', label: 'Kindergarten' },
    { value: 'nursery', label: 'Nursery' },
    { value: 'lkg', label: 'LKG' },
    { value: 'ukg', label: 'UKG' },
  ];

  const countryCodes = [
    { value: '+91', label: '+91' },
    { value: '+1', label: '+1' },
    { value: '+44', label: '+44' },
    { value: '+971', label: '+971' },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-3">
          <span>Enroll Now</span>
          <ArrowRight className="w-5 h-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-0">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-t-lg">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center space-x-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span>Start Your Learning Journey</span>
            </DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              Join thousands of students already learning with us. Fill out the form below to get
              started.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6">
          {submitSuccess ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Enrollment Successful! 🎉
              </h3>
              <p className="text-gray-600">
                Thank you for enrolling. We'll contact you soon with next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Student Name Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Student Name *</span>
                </Label>
                <Input
                  id="name"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                  })}
                  placeholder="Enter student's full name"
                  className={`transition-all duration-200 ${errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.name.message}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email *</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  placeholder="Enter email address"
                  className={`transition-all duration-200 ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>

              {/* WhatsApp Number Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="phoneNumber"
                  className="text-sm font-medium text-gray-700 flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Number *</span>
                </Label>
                <div className="flex space-x-2">
                  <Select defaultValue="+91">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map(code => (
                        <SelectItem key={code.value} value={code.value}>
                          {code.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phoneNumber"
                    {...register('phoneNumber', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number',
                      },
                    })}
                    placeholder="Enter 10-digit number"
                    className={`flex-1 transition-all duration-200 ${errors.phoneNumber ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.phoneNumber.message}</span>
                  </p>
                )}
              </div>

              {/* School Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="school"
                  className="text-sm font-medium text-gray-700 flex items-center space-x-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>School *</span>
                </Label>
                <Input
                  id="school"
                  {...register('school', {
                    required: 'School name is required',
                    minLength: { value: 2, message: 'School name must be at least 2 characters' },
                  })}
                  placeholder="Enter school name"
                  className={`transition-all duration-200 ${errors.school ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                />
                {errors.school && (
                  <p className="text-red-500 text-sm flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.school.message}</span>
                  </p>
                )}
              </div>

              {/* Grade Field */}
              <div className="space-y-2">
                <Label htmlFor="grade" className="text-sm font-medium text-gray-700">
                  Grade *
                </Label>
                <Select onValueChange={value => setValue('grade', value)} value={watchedGrade}>
                  <SelectTrigger
                    className={`transition-all duration-200 ${errors.grade ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                  >
                    <SelectValue placeholder="-- Select Grade --" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeOptions.map(grade => (
                      <SelectItem key={grade.value} value={grade.value}>
                        {grade.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input
                  type="hidden"
                  {...register('grade', { required: 'Please select a grade' })}
                />
                {errors.grade && (
                  <p className="text-red-500 text-sm flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.grade.message}</span>
                  </p>
                )}
              </div>

              {/* Error Message */}
              {mutation.isError && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    {mutation.error?.message || 'Something went wrong. Please try again.'}
                  </AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isValid || mutation.isPending}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {mutation.isPending ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Submit Enrollment</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll
                only use your information to contact you about your enrollment.
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentForm;
