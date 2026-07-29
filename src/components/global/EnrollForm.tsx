// File: NASSCOMEnrollmentForm.tsx
// Path: src/components/enrollment/NASSCOMEnrollmentForm.tsx

'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

interface NASSCOMEnrollmentFormProps {
  courseId: string;
  buttonText?: string;
  buttonClassName?: string;
}

type FormData = {
  name: string;
  gender: string;
  email: string;
  contactNumber: string;
  collegeName: string; // ← new
  pincode: string; // ← new
};

const EMPTY_FORM: FormData = {
  name: '',
  gender: '',
  email: '',
  contactNumber: '',
  collegeName: '',
  pincode: '',
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const STORAGE_KEY = 'nasscom_enrollment_form_data';

const NASSCOM_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_LMS_BASE_URL || 'https://learn.bskilling.com',
  USER_SERVICE_URL:
    process.env.NEXT_PUBLIC_LMS_USER_URL ||
    'https://api-gateway-173405861722.asia-south1.run.app/user/auth',
  COURSE_SERVICE_URL:
    process.env.NEXT_PUBLIC_LMS_COURSE_URL ||
    'https://api-gateway-173405861722.asia-south1.run.app/course/api/courses',
  DEFAULT_PASSWORD: 'nasscom123',
  AUTH_PROVIDER: 'NASSCOM',
  TIMEOUT: 45000,
  SOURCE_TYPE: 'B2C',
  SOURCE_SUB_TYPE: 'NASSCOM',
};

// const EMPTY_FORM: FormData = {
//   name: '',
//   gender: '',
//   email: '',
//   contactNumber: '',
// };

const NASSCOMEnrollmentForm: React.FC<NASSCOMEnrollmentFormProps> = ({
  courseId,
  buttonText = 'Enroll Now',
  buttonClassName = 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-lg font-medium text-base',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        // Merge over EMPTY_FORM so a partial/corrupt payload never leaves a field undefined
        setFormData({ ...EMPTY_FORM, ...JSON.parse(savedData) });
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear the error for this field as soon as the user edits it
    setErrors(prev => (prev[name as keyof FormData] ? { ...prev, [name]: undefined } : prev));
  };

  // Single source of truth for required-field validation (dropdown included)
  const validate = (data: FormData): FormErrors => {
    const next: FormErrors = {};

    if (!data.name.trim()) {
      next.name = 'Full name is required.';
    }

    if (!data.gender) {
      next.gender = 'Please select your gender.';
    }

    if (!data.email.trim()) {
      next.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      next.email = 'Enter a valid email address.';
    }

    const digits = data.contactNumber.replace(/\D/g, '');
    if (!digits) {
      next.contactNumber = 'Contact number is required.';
    } else if (digits.length < 10) {
      next.contactNumber = 'Enter a valid contact number.';
    }

    // ↓↓↓ add here ↓↓↓
    if (!data.collegeName.trim()) {
      next.collegeName = 'College name is required.';
    }

    const pin = data.pincode.trim();
    if (!pin) {
      next.pincode = 'College PIN code is required.';
    } else if (!/^[1-9]\d{5}$/.test(pin)) {
      next.pincode = 'Enter a valid 6-digit PIN code.';
    }
    // ↑↑↑ add here ↑↑↑

    return next;
  };

  // Step 1: Check if user exists
  const checkUserExists = async (email: string, providerId: string) => {
    try {
      const response = await axios.get(`${NASSCOM_CONFIG.USER_SERVICE_URL}/check-user`, {
        params: {
          email,
          providerId,
          authProvider: NASSCOM_CONFIG.AUTH_PROVIDER,
        },
        timeout: NASSCOM_CONFIG.TIMEOUT,
      });

      if (response.data.success && response.data.data.user) {
        return response.data.data.user;
      }
      return null;
    } catch (error: any) {
      if (error.response?.status === 404) {
        return null;
      }
      throw error;
    }
  };

  // Step 2a: Create new user
  // Step 2a: Create new user
  const createUser = async (providerId: string) => {
    const signupPayload = {
      name: formData.name,
      gender: formData.gender,
      email: formData.email,
      phone: formData.contactNumber,
      collegeName: formData.collegeName.trim(), // ← top-level now
      pincode: formData.pincode.trim(), // ← top-level now
      authProvider: NASSCOM_CONFIG.AUTH_PROVIDER,
      providerId,
      role: 'LEARNER',
      sourceType: NASSCOM_CONFIG.SOURCE_TYPE,
      sourceSubType: NASSCOM_CONFIG.SOURCE_SUB_TYPE,
      bio: 'User created via NASSCOM integration',
      metadata: JSON.stringify({
        nasscomIntegration: true,
        courseId,
      }),
      password: NASSCOM_CONFIG.DEFAULT_PASSWORD,
    };

    const response = await axios.post(
      `${NASSCOM_CONFIG.USER_SERVICE_URL}/sso-signup`,
      signupPayload,
      {
        headers: { 'Content-Type': 'application/json' },
        timeout: NASSCOM_CONFIG.TIMEOUT,
      }
    );

    if (response.data.success) {
      return response.data.data;
    }
    throw new Error('Failed to create user');
  };

  // Step 2b: Signin existing user
  const signinUser = async (providerId: string) => {
    const signinPayload = {
      authProvider: NASSCOM_CONFIG.AUTH_PROVIDER,
      providerId,
      email: formData.email,
      name: formData.name,
      password: NASSCOM_CONFIG.DEFAULT_PASSWORD,
    };

    const response = await axios.post(
      `${NASSCOM_CONFIG.USER_SERVICE_URL}/sso-signin`,
      signinPayload,
      {
        headers: { 'Content-Type': 'application/json' },
        timeout: NASSCOM_CONFIG.TIMEOUT,
      }
    );

    if (response.data.success) {
      return response.data.data;
    }
    throw new Error('Failed to signin user');
  };

  // Step 3: Enroll user in course
  const enrollUserInCourse = async (accessToken: string) => {
    const enrollmentPayload = {
      id: courseId,
      externalCourseId: courseId,
      sourceType: NASSCOM_CONFIG.SOURCE_SUB_TYPE,
      enrollmentFee: 0,
      currency: 'INR',
    };

    const response = await axios.post(
      `${NASSCOM_CONFIG.COURSE_SERVICE_URL}/enrollments/sso`,
      enrollmentPayload,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        timeout: NASSCOM_CONFIG.TIMEOUT,
      }
    );

    if (response.data.success) {
      return response.data.data.enrollment;
    }
    throw new Error('Failed to enroll user');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fill out all required fields.');
      return;
    }
    setErrors({});

    try {
      setIsLoading(true);

      const providerId = `NASSCOM_${Date.now()}_${formData.email.split('@')[0]}`;

      const existingUser = await checkUserExists(formData.email, providerId);

      let userResult;
      let isNewUser = false;

      if (existingUser) {
        userResult = await signinUser(providerId);
      } else {
        userResult = await createUser(providerId);
        isNewUser = true;
      }

      const enrollment = await enrollUserInCourse(userResult.accessToken);

      const redirectUrl = `${NASSCOM_CONFIG.BASE_URL}/new-sso?refreshToken=${userResult.refreshToken}&enrollmentId=${enrollment.id}&courseId=${enrollment.courseId}`;

      toast.success(
        isNewUser ? 'You have been successfully enrolled!' : 'Welcome back! Enrollment successful.'
      );

      setTimeout(() => {
        window.open(redirectUrl, '_blank');
        setIsOpen(false);
      }, 2000);
    } catch (error: any) {
      console.error('❌ [NASSCOM] Enrollment failed:', error);
      toast.error(
        error.response?.data?.message || error.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className={buttonClassName}>
        {formData?.name?.length > 0 ? 'Continue' : buttonText}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h2 className="text-2xl font-bold mb-4">Enroll Now</h2>
            <p className="text-gray-600 mb-6">
              Complete this form to enroll in the course. You'll receive access after submitting.
            </p>

            {/* noValidate: turn off native browser validation so our checks run instead */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  aria-invalid={!!errors.gender}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter your phone number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  aria-invalid={!!errors.contactNumber}
                />
                {errors.contactNumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.contactNumber}</p>
                )}
              </div>

              <div>
                <Label htmlFor="collegeName">College Name</Label>
                <Input
                  id="collegeName"
                  name="collegeName"
                  placeholder="Enter your college name"
                  value={formData.collegeName}
                  onChange={handleChange}
                  aria-invalid={!!errors.collegeName}
                />
                {errors.collegeName && (
                  <p className="mt-1 text-sm text-red-600">{errors.collegeName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="pincode">College PIN Code</Label>
                <Input
                  id="pincode"
                  name="pincode"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="e.g. 560001"
                  value={formData.pincode}
                  onChange={handleChange}
                  aria-invalid={!!errors.pincode}
                />
                {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Submit & Enroll'
                )}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NASSCOMEnrollmentForm;
