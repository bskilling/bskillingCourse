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

const STORAGE_KEY = 'nasscom_enrollment_form_data';

// NASSCOM Config - Same as backend but for NASSCOM
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

const NASSCOMEnrollmentForm: React.FC<NASSCOMEnrollmentFormProps> = ({
  courseId,
  buttonText = 'Enroll Now',
  buttonClassName = 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-lg font-medium text-base',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Step 1: Check if user exists
  const checkUserExists = async (email: string, providerId: string) => {
    try {
      const response = await axios.get(`${NASSCOM_CONFIG.USER_SERVICE_URL}/check-user`, {
        params: {
          email: email,
          providerId: providerId,
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
  const createUser = async (providerId: string) => {
    const signupPayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.contactNumber,
      authProvider: NASSCOM_CONFIG.AUTH_PROVIDER,
      providerId: providerId,
      role: 'LEARNER',
      sourceType: NASSCOM_CONFIG.SOURCE_TYPE,
      sourceSubType: NASSCOM_CONFIG.SOURCE_SUB_TYPE,
      bio: 'User created via NASSCOM integration',
      metadata: JSON.stringify({
        nasscomIntegration: true,
        courseId: courseId,
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
      providerId: providerId,
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

    if (!formData.name || !formData.email || !formData.contactNumber) {
      toast.error('Please fill out all required fields.');
      return;
    }

    try {
      setIsLoading(true);

      // Generate unique provider ID
      const providerId = `NASSCOM_${Date.now()}_${formData.email.split('@')[0]}`;

      console.log('🎯 [NASSCOM] Starting enrollment flow');

      // Step 1: Check if user exists
      console.log('🔍 [NASSCOM] Checking if user exists');
      const existingUser = await checkUserExists(formData.email, providerId);

      let userResult;
      let isNewUser = false;

      if (existingUser) {
        // Step 2a: User exists, sign them in
        console.log('🔐 [NASSCOM] User exists - signing in');
        userResult = await signinUser(providerId);
      } else {
        // Step 2b: User doesn't exist, create them
        console.log('👤 [NASSCOM] User does not exist - creating new user');
        userResult = await createUser(providerId);
        isNewUser = true;
      }

      // Step 3: Enroll user in course
      console.log('📚 [NASSCOM] Enrolling user in course');
      const enrollment = await enrollUserInCourse(userResult.accessToken);

      console.log('✅ [NASSCOM] Integration completed successfully');

      // Step 4: Construct redirect URL
      const redirectUrl = `${NASSCOM_CONFIG.BASE_URL}/new-sso?refreshToken=${userResult.refreshToken}&courseId=${enrollment.id}`;

      toast.success(
        isNewUser ? 'You have been successfully enrolled!' : 'Welcome back! Enrollment successful.'
      );

      // Open in new tab
      window.open(redirectUrl, '_blank');
      setIsOpen(false);
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
        {formData?.name.length > 0 ? 'Continue' : buttonText}
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
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
                  required
                />
              </div>

              <div>
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter your phone number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
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
