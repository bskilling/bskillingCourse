'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { handleErrors } from '@/lib/handleError';

interface EnrollmentFormProps {
  courseId: string;
  buttonText?: string;
  buttonClassName?: string;
  redirectUrl?: string;
}

const STORAGE_KEY = 'enrollment_form_data';

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({
  courseId,
  buttonText = 'Enroll Now',
  buttonClassName = 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-lg font-medium text-base',
  redirectUrl,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
  });

  // Load saved form data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.contactNumber) {
      toast.error('Please fill out all required fields.');
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/edmingle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          courseId,
          redirectUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to enroll in course');
      }

      toast.success(data.message || 'You have been successfully enrolled.');

      if (data.data.isNewUser && data.data.redirectUrl) {
        // Redirect with token
        const payload = {
          email: data.data.user.email,
          name: data.data.user.name,
          course: data.data.user.course,
          phoneNumber: data?.data?.user?.contactNumber,
          category: data.data.user.category,
          type: data.data.user.type, // 'b2b', 'b2c', 'b2i'
        };
        await zohoLead.mutateAsync(payload);
      }
      if (data.data.redirectUrl) {
        const redirectUrl = data.data.redirectUrl;
        console.log('Data checking', data?.data);
        window.location.href = redirectUrl;
      }
      // window.location.href = redirectUrl;
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const zohoLead = useMutation({
    mutationFn: async (data: any) => {
      await axios.post('/api/zoho/lead', data, {
        withCredentials: true, // Important to send cookies
      });
    },
    onSuccess: () => {
      // Show success message
      // toast.success('Your query has been submitted successfully. Our team will contact you soon.');
    },
    onError: err => {
      console.error(err);
      // toast.error(handleErrors(err as any) ?? 'Something went wrong. Please try again.');
    },
  });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpenModal} className={buttonClassName}>
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
                strokeLinecap="round"
                strokeLinejoin="round"
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

export default EnrollmentForm;
