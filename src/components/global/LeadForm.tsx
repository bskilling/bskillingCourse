import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';
import { useState } from 'react';

export const leadSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email format'),
    phoneNumber: z.string().regex(/^[0-9]{10,15}$/, 'Invalid phone number'),
    category: z.enum([
      'individual_course',
      'corporate_training',
      'institutional',
      'government',
    ]),
    subcategory: z.enum(['jobs', 'skills']).optional(),
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
  });

export type Lead = z.infer<typeof leadSchema>;

const LeadForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('individual_course');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Lead>({ resolver: zodResolver(leadSchema) });

  const mutation = useMutation({
    mutationFn: async (data: Lead) => axios.post('/api/leads', data),
    onSuccess: () => alert('Lead submitted successfully!'),
    onError: () => alert('Failed to submit lead'),
  });

  const onSubmit = (data: Lead) => mutation.mutate(data);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-xl p-8 space-y-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800">
        Get Started with Our Courses
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Name"
          {...register('name')}
          error={errors.name?.message}
          placeholder="Enter your name"
        />
        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="Enter your email"
        />
        <Input
          label="Phone Number"
          {...register('phoneNumber')}
          error={errors.phoneNumber?.message}
          placeholder="Enter your phone number"
        />

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            {...register('category')}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full border p-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="individual_course">Individual Course</option>
            <option value="corporate_training">Corporate Training</option>
            <option value="institutional">Institutional</option>
            <option value="government">Government</option>
          </select>
        </div>

        {selectedCategory === 'institutional' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subcategory
            </label>
            <select
              {...register('subcategory')}
              className="w-full border p-3 rounded-lg bg-gray-50"
            >
              <option value="jobs">Jobs</option>
              <option value="skills">Skills</option>
            </select>
            {errors.subcategory && (
              <p className="text-red-500 text-sm">
                {errors.subcategory.message}
              </p>
            )}
          </div>
        )}

        <Input
          label="Query"
          {...register('query')}
          error={errors.query?.message}
          placeholder="Enter your query here..."
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
