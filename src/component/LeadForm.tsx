import React, { useState } from 'react';

import { useRouter } from 'next/router';

const LeadForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // const response = await fetch(
      //     `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course/${id}`
      //   );
      const payload = {
        name: formData?.name,
        phonenumber: formData?.contact,
        email: formData?.email,
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/create-lead`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      // const response = await fetch("/api/sendEmail", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          contact: '',
        });
        // alert("Form submitted successfully!");
        // setSuccess(
        //   "We have received your information successfully. Our team will review your details and get in touch with you shortly."
        // );
        router.push('/thank-you');

        // setTimeout(() => {
        //   setSuccess("");
        // }, 5000);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
      setError('Failed to send email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <div
        className="fixed inset-0 bg-black opacity-50"
        // onClick={handleClosePopup}
      ></div> */}
      <div>
        <div className="relative bg-white py-6 rounded-lg max-w-md mx-4 text-black">
          {/* <h2 className="text-lg text-lightBlue font-semibold text-center mb-4 tracking-widest">
            {title}
          </h2> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Official Email-ID
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="contact">
                Contact No
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                value={formData.contact}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
            {/* <button
              type="button"
              className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              // onClick={handleClosePopup}
            >
              Close
            </button> */}
          </form>
          {error && <p className="mt-4 text-red-600">{error}</p>}
          {success && <p className="mt-4 text-green-500">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
