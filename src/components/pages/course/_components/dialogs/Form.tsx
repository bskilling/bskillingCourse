import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
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
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Building,
  BookOpen,
  Briefcase,
  GraduationCap,
  HelpCircle,
  Check,
  X,
} from 'lucide-react';
import { FaGlobe } from 'react-icons/fa';
import { toast } from 'sonner';
import { handleErrors } from '@/lib/handleError';
import { cn } from '@/lib/utils';
import DownloadAndRedirect from '../Broucher';
import { ICourse } from '@/component/types/Course.types';

const leadSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email format'),
    countryCode: z.string().optional(),
    phoneNumber: z.string().regex(/^\d{10,15}$/, 'Phone number must be between 10 to 15 digits'),
    type: z.enum(['b2c', 'b2b', 'b2i', 'general']),
    subCategory: z.enum(['', 'jobs', 'skills']).default('skills').optional(),
    query: z.string().min(10, 'Query must be at least 10 characters long').optional(),
    websiteUrl: z.string().min(3, 'Website URL must be at least 3 characters long').optional(),
    course: z.string().length(24, 'Course Id is required'),
    broucher: z.boolean().default(false),
  })
  .superRefine((data, ctx) => {
    if (data.broucher) {
      return;
    }

    if (data.type === 'b2i' && !data.subCategory) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "SubCategory is required when category is 'institutional'",
        path: ['subCategory'],
      });
    }
    if (data.type !== 'b2i' && data.subCategory) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "SubCategory should only be provided when category is 'institutional'",
        path: ['subCategory'],
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

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  formType?: 'b2c' | 'b2b' | 'b2i' | 'general' | 'b2g';
  course: string;
  broucher?: string;
}

const PopupConsultationForm: React.FC<PopupFormProps> = ({
  broucher,
  isOpen,
  onClose,
  title = 'Get in Touch',
  description = 'Fill out the form below and our team will get back to you shortly.',
  formType = 'b2i',
  course,
}) => {
  const [type, setType] = React.useState(formType);
  const [fileUrl, setFileUrl] = React.useState(null);
  const [courseData, setCourseData] = React.useState<ICourse | null>(null);
  const [isFetchingCourse, setIsFetchingCourse] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
      countryCode: '+91',
      phoneNumber: '',
      course,
      // @ts-expect-error
      type,
      // @ts-check
      subCategory: type === 'b2i' ? 'skills' : undefined,
      query: undefined,
      websiteUrl: undefined,
      broucher: !!broucher,
    },
  });

  // Fetch course details when modal opens
  React.useEffect(() => {
    if (isOpen && course && !courseData) {
      fetchCourseDetails();
    }
  }, [isOpen, course]);

  const fetchCourseDetails = async () => {
    try {
      setIsFetchingCourse(true);
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/courses/${course}`);
      setCourseData(res.data?.data.course);
    } catch (error) {
      console.error('Error fetching course details:', error);
      // Don't show error to user, just log it
    } finally {
      setIsFetchingCourse(false);
    }
  };

  async function downloadBroucher() {
    try {
      const fileRes = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_URL + `/api/files/${broucher}`
      );
      setFileUrl(fileRes.data?.data?.viewUrl);
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  }

  // CRITICAL: Cirrus API mutation - this MUST always be called
  const cirrusApiMutation = useMutation({
    mutationFn: async (data: LeadFormData) => {
      console.log('Calling Cirrus API...', data);
      console.log('Course data:', courseData);

      if (!courseData) {
        console.error('Course data not available for Cirrus API');
        return;
      }

      const currentDate = new Date().toISOString().split('T')[0];

      // Calculate dates
      const startDate = courseData.startTime
        ? new Date(courseData.startTime).toISOString().split('T')[0]
        : currentDate;

      const endDate = courseData.endTime
        ? new Date(courseData.endTime).toISOString().split('T')[0]
        : new Date(Date.now() + (courseData.durationHours || 30) * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0];

      const courseAmount = courseData.price?.amount || 0;
      const gstAmount = Math.round(courseAmount * 1.18);

      const payload = {
        trtype: 'Online',
        trmode: 'Zoom',
        name: data.name,
        mobile: data.countryCode + data.phoneNumber,
        email: data.email,
        cost: courseAmount.toString(),
        course: courseData.title,
        startdate: startDate,
        enddate: endDate,
        duration: `${courseData.durationHours || 0} hours`,
        pterm: 'Full',
        added_date: currentDate,
        addedby: 'Website',
        batch_id: courseData._id.substring(0, 8).toUpperCase(),
        course_c: courseData.slug || courseData._id,
        alt_email: data.email,
        pmode: 'Online',
        a_amount: courseAmount.toString(),
        p_amount: '0',
        b_amount: courseAmount.toString(),
        p_rec_date: currentDate,
        lead_rec_name: 'Web Team',
        lead_rec_date: currentDate,
        gst: '18%',
        tot_sale_gst: gstAmount.toString(),
        portal_details: 'Website',
        // pay_done_by: data.name,
        gst_status: 'Pending',
        bonus_amount: '0',
        learner_status: 'Lead',
        address: '',
        state: '',
        pincode: '',
      };

      console.log('Sending to Cirrus API:', payload);

      const res = await axios.post('https://cirrus1.co/caspa/insert_training_b2c_api.php', payload);

      return res.data;
    },
    onSuccess: data => {
      console.log('✅ Cirrus API Success:', data);
    },
    onError: err => {
      console.error('❌ Cirrus API Error:', err);
      // Don't show error to user, just log it
      // You'll build logging system later for this
    },
  });

  const selectedCategory = watch('type');
  const showSubCategory = selectedCategory === 'b2i';

  const submitMutation = useMutation({
    mutationFn: async (data: LeadFormData) => {
      const res = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/lead', {
        ...data,
        type,
        course,
      });
      return res.data.data;
    },
    onSuccess: (data: any) => {
      console.log('✅ Lead API Success:', data);
      downloadBroucher();

      // Call Zoho API
      zohoLead.mutate(data);

      // CRITICAL: Always call Cirrus API regardless of other API status
      cirrusApiMutation.mutate(getValues());

      setTimeout(() => {
        reset();
        onClose();
      }, 2000);
    },
    onError: err => {
      console.error('❌ Lead API Error:', err);
      toast.error(handleErrors(err as any) ?? 'Something went wrong. Please try again.');

      // CRITICAL: Even if main API fails, still call Cirrus API
      cirrusApiMutation.mutate(getValues());
    },
  });

  const zohoLead = useMutation({
    mutationFn: async (data: LeadFormData) => {
      await axios.post('/api/zoho/lead', data, {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      console.log('✅ Zoho API Success');
    },
    onError: err => {
      console.error('❌ Zoho API Error:', err);
      // Don't show error, don't block flow
    },
  });

  const onSubmit = (data: LeadFormData) => {
    submitMutation.mutate(data);
  };

  // Icons based on the form type
  const getFormIcon = () => {
    switch (type) {
      case 'b2c':
        return <GraduationCap className="h-10 w-10 text-blue-600" />;
      case 'b2b':
        return <Briefcase className="h-10 w-10 text-blue-600" />;
      case 'b2i':
        return <Building className="h-10 w-10 text-blue-600" />;
      default:
        return <HelpCircle className="h-10 w-10 text-blue-600" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent
        className={cn(
          'w-1/2 md:max-w-7xl  max-h-[80vh]  rounded-md  p-0 overflow-y-auto border-none',
          broucher && 'w-1/3'
        )}
      >
        <DownloadAndRedirect
          // @ts-expect-error
          fileUrl={fileUrl}
          fileName="Broucher.pdf"
        />
        <>
          {broucher ? (
            <div className=" p-6 bg-white">
              <h2 className="text-2xl font-bold mb-5">{title}</h2>
              <p></p>
              <form
                onSubmit={e => {
                  const path = leadSchema.safeParse(getValues()).error?.errors?.[0]?.path;
                  const err = leadSchema.safeParse(getValues()).error?.errors?.[0]?.message;
                  if (err) {
                    toast.error(path + ': ' + err);
                  }

                  handleSubmit(onSubmit, err => {
                    console.log(err);
                  })(e);
                }}
                className="space-y-5"
              >
                {/* Name and Email Fields */}
                <div className="grid grid-cols-1  gap-5">
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
                </div>

                {/* Phone Number Field */}
                <div className="space-y-1">
                  <div className="flex gap-2">
                    <div className="w-1/4 relative">
                      <Select
                        defaultValue="+91"
                        onValueChange={value => setValue('countryCode', value)}
                      >
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

                {/* Footer with Submit and Cancel Buttons */}
                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <X className="w-4 h-4" /> Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Submit
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <>
              {submitMutation.isSuccess ? (
                <div className="p-8 flex flex-col items-center justify-center">
                  <div className="bg-green-100 rounded-full p-3 mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-center">
                    Your query has been submitted successfully. Our team will contact you soon.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row">
                  {/* Left Section - Info */}
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-8  flex-col hidden md:flex">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="bg-white/20 p-3 rounded-full">{getFormIcon()}</div>
                    </div>

                    <p className="text-blue-100 mb-8">{description}</p>

                    <div className="mt-auto space-y-6">
                      <div className="flex items-start space-x-3">
                        <Mail className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white">Email Us</h3>
                          <p className="text-blue-200 text-sm">support@bskilling.com</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Phone className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white">Call Us</h3>
                          <p className="text-blue-200 text-sm">+91-98453 48601</p>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-blue-600">
                        <p className="text-sm text-blue-200">
                          Your information is secure and encrypted. We value your privacy and will
                          never share your details.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Form */}
                  <div className="md:w-2/3 p-6 bg-white">
                    <h2 className="text-2xl font-bold mb-5">{title}</h2>
                    <form
                      onSubmit={e => {
                        const path = leadSchema.safeParse(getValues()).error?.errors?.[0]?.path;
                        const err = leadSchema.safeParse(getValues()).error?.errors?.[0]?.message;
                        if (err) {
                          toast.error(path + ': ' + err);
                        }

                        handleSubmit(onSubmit, err => {
                          console.log(err);
                        })(e);
                      }}
                      className="space-y-5"
                    >
                      {/* Name and Email Fields */}
                      <div className="grid grid-cols-1  gap-5">
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
                          {errors.name && (
                            <p className="text-xs text-red-500">{errors.name.message}</p>
                          )}
                        </div>

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
                          {errors.email && (
                            <p className="text-xs text-red-500">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Phone Number Field */}
                      <div className="space-y-1">
                        <div className="flex gap-2">
                          <div className="w-1/4 relative">
                            <Select
                              defaultValue="+91"
                              onValueChange={value => setValue('countryCode', value)}
                            >
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

                      {/* SubCategory (If applicable) */}
                      {showSubCategory && (
                        <div className="space-y-1">
                          <div className="relative">
                            <BookOpen className="w-5 h-5 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2 z-10" />
                            <Select
                              defaultValue="skills"
                              onValueChange={value =>
                                setValue('subCategory', value as 'jobs' | 'skills')
                              }
                            >
                              <SelectTrigger className="w-full border border-gray-200 rounded-lg pl-10 h-10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                                <SelectValue placeholder="Select Interest" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border border-gray-200">
                                <SelectItem value="jobs">Job Assistance</SelectItem>
                                <SelectItem value="skills">Skill Development</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          {errors.subCategory && (
                            <p className="text-xs text-red-500">{errors.subCategory.message}</p>
                          )}
                        </div>
                      )}
                      {(type === 'b2c' || type === 'b2b') && (
                        <div className="flex flex-col sm:flex-row gap-4 my-6">
                          <div
                            onClick={() => setType('b2c')}
                            className={cn(
                              'flex items-center gap-3 px-6 py-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md',
                              type === 'b2c'
                                ? 'bg-blue-50 border-blue-300 shadow-blue-100'
                                : 'hover:bg-gray-50'
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
                              type === 'b2b'
                                ? 'bg-blue-50 border-blue-300 shadow-blue-100'
                                : 'hover:bg-gray-50'
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

                      {showSubCategory && (
                        <div className="space-y-1">
                          <div className="relative">
                            <FaGlobe className="w-5 h-5 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input
                              id="url"
                              type="url"
                              placeholder="Website URL"
                              value={watch('websiteUrl') ?? ''}
                              onChange={e => setValue('websiteUrl', e.target.value)}
                              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pl-10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-xs text-red-500">{errors?.websiteUrl?.message}</p>
                          )}
                        </div>
                      )}

                      {/* Query Field */}
                      <div className="space-y-1">
                        <div className="relative">
                          <MessageSquare className="w-5 h-5 text-blue-500 absolute left-3 top-3" />
                          <textarea
                            id="query"
                            placeholder="How can we help you today?"
                            {...register('query')}
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pl-10 min-h-24 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                          />
                        </div>
                        {errors.query && (
                          <p className="text-xs text-red-500">{errors.query.message}</p>
                        )}
                      </div>

                      {/* Footer with Submit and Cancel Buttons */}
                      <div className="flex justify-between items-center pt-2">
                        <button
                          type="button"
                          onClick={onClose}
                          className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition flex items-center gap-2"
                        >
                          <X className="w-4 h-4" /> Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition flex items-center gap-2"
                        >
                          {isSubmitting ? (
                            <>Processing...</>
                          ) : (
                            <>
                              <Send className="w-4 h-4" /> Submit
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      </DialogContent>
    </Dialog>
  );
};

export default PopupConsultationForm;
