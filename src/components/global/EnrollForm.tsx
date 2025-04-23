import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { User as UserIcon, Mail, Phone, Loader2 } from 'lucide-react';

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  courseId: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface SsoRegistrationFormProps {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  buttonText?: string;
  courseId: string;
}

const SsoRegistrationForm = ({
  open,
  setOpen,
  buttonText = 'Sign In / Register',
  courseId,
}: SsoRegistrationFormProps) => {
  const [isOpen, setIsOpen] = useState(open || false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form initialization with validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      courseId,
    },
  });

  // Update local state when prop changes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (setOpen) setOpen(open);
  };

  // Handle registration
  const handleRegistration = async (data: FormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      // Register the user
      const userResponse = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + '/api/ccavenue/register-user',
        data
      );

      if (!userResponse.data.success) {
        throw new Error(userResponse.data.message || 'Registration failed');
      }

      // Get JWT token for SSO
      const tokenResponse = await axios.post('/api/sso/generate-token', {
        user: data,
      });

      if (!tokenResponse.data.success || !tokenResponse.data.token) {
        throw new Error(tokenResponse.data.message || 'Failed to generate token');
      }

      // Get the redirect URL from URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const redirectUrl = 'https://bskilling.edmingle.com';

      if (redirectUrl) {
        // Redirect to the specified URL with JWT token
        window.location.href = `${redirectUrl}?jwt=${tokenResponse.data.token}`;
      } else {
        // No redirect URL provided, show success message
        toast.success('Registration successful!');
        handleOpenChange(false);
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Registration failed';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            Sign in / Register
          </DialogTitle>
        </DialogHeader>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg mb-4">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={form.handleSubmit(handleRegistration)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...form.register('name')}
                id="name"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            {form.formState.errors.name && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...form.register('email')}
                id="email"
                type="email"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            {form.formState.errors.email && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...form.register('phone')}
                id="phone"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your phone number"
              />
            </div>
            {form.formState.errors.phone && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              'Register & Continue'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SsoRegistrationForm;
