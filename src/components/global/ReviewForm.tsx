/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { FaLinkedin, FaStar } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Input } from '../ui/input';
import { useRouter } from 'next/router';
import { z } from 'zod';

interface ReviewFormData {
  linkedinProfile: string;
  rating: number;
  title: string;
  comment: string;
}

const validater = z.object({
  linkedinProfile: z.string().url(),
  rating: z.coerce.number().min(1).max(5),
  title: z.string().min(5).max(50),
  comment: z
    .string()
    .min(100, 'Comment must be at least 100 characters long')
    .max(1000, 'Comment must be at most 1000 characters long'),
  designation: z.string().min(5).max(50),
});

type ValidationError = z.infer<typeof validater>;

const ReviewForm = ({
  user,
}: {
  user: { name: string; profilePic: string };
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ValidationError>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const router = useRouter();

  const validateLinkedIn = (url: string) => {
    return /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9-]+\/?$/.test(
      url
    );
  };

  const onSubmit = async (data: ValidationError) => {
    if (!validateLinkedIn(data.linkedinProfile)) {
      setError('Invalid LinkedIn URL');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/reviews`,
        {
          linkedinProfile: data.linkedinProfile, // ✅ Required
          rating: data.rating, // ✅ Required (1-5)
          title: data.title, // ✅ Required
          comment: data.comment, // ✅ Required
          userName: user.name, // ✅ Required
          userProfilePic: user.profilePic, // ✅ Required
          designation: data.designation,
        }
      );

      if (response.status === 201) {
        // alert('Review submitted successfully!');
        router.replace('/');
      } else {
        setError('Something went wrong.');
      }
    } catch (err) {
      setError('Failed to submit review.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-[100vw] bg-gray-50">
      <div className="bg-white shadow-lg rounded-md  w-[90%] max-w-2xl">
        <div className="h-20 bg-blue-500"></div>
        <div className="-mt-8">
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-20 h-20 object-cover rounded-full m-auto"
          />
          <FaLinkedin
            size={40}
            className="text-blue-600 text-center m-auto -mt-1 bg-card"
          />
          <p className="font-bold text-xl text-center text-blue-900">
            {user.name}
          </p>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center mt-8">
          {/* Leave a Review */}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4 p-6 px-14 pt-0"
        >
          {/* LinkedIn Profile Input */}

          <div>
            {/* <label className="block text-base font-medium text-center">
              Rating *
            </label> */}
            {/* <p className="text-sm text-muted-foreground">
              how would you rate the course?
            </p> */}
            <p className="font-medium mt-5">
              <span className="text-red-500">*</span> How would you rate the
              course?
            </p>
            <div className="flex my-5 justify-between mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={50}
                  className={`cursor-pointer ${
                    star <= rating ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setRating(star);
                    setValue('rating', star);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="">
            <Input
              label="Designation"
              {...register('designation')}
              type="text"
              placeholder="Designation"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="">
            <Input
              type="url"
              className="w-full p-3 border rounded-md"
              label="LinkedIn Profile URL"
              placeholder="https://www.linkedin.com/in/username"
              {...register('linkedinProfile', {
                required: true,
                validate: validateLinkedIn,
              })}
            />
            {errors.linkedinProfile && (
              <p className="text-red-500">Invalid LinkedIn URL</p>
            )}
          </div>

          {/* Star Rating */}

          {/* Review Title */}
          <div>
            <Input
              label="Course Name"
              type="text"
              className="w-full p-3 border rounded-md"
              title="Course name"
              placeholder="Course name"
              {...register('title', { required: true })}
            />
            {errors.title && <p className="text-red-500">Title is required</p>}
          </div>

          {/* Review Comment */}
          <div>
            <label className="block text-base font-medium">Comment</label>
            <textarea
              className="w-full p-3 border rounded-md"
              rows={4}
              placeholder="Write your review here..."
              {...register('comment', { required: true })}
            ></textarea>
            {errors.comment && (
              <p className="text-red-500">Comment is required</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className=" bg-blue-600 w-fit text-white p-3 rounded-md hover:bg-blue-800 transition"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
