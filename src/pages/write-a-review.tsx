import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Privacy() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [phoneerror, setphoneError] = useState("");
  const [ratingerror, setratingError] = useState("");

  const validatePhoneNumber = (phoneNumber: any) => {
    // Regular expression to validate phone number (allows different formats)
    const phoneRegex = /^[7-9][0-9]{9}$/;

    console.log(phoneRegex);
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(validatePhoneNumber(phone));
    if (!validatePhoneNumber(phone)) {
      setphoneError("Invalid phone number");
      return true;
    } else {
      setphoneError("");
    }

    if (rating === 0) {
      setratingError("Rating is required");
    } else {
      setratingError("");
    }
    setLoading(true);
    setError(null);
    setSuccess(null);
    // Handle form submission logic here
    console.log({ name, email, phone, rating, description });
    try {
      // const response = await fetch(
      //     `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course/${id}`
      //   );
      const payload = {
        name,
        email,
        phone,
        rating,
        description,
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/submit-review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
        setName("");
        setPhone("");
        setEmail("");
        setRating(0);
        setDescription("");
        // alert("Form submitted successfully!");
        setSuccess(
          "We have received your information successfully. Our team will review your details and get in touch with you shortly."
        );

        setTimeout(() => {
          setSuccess("");
        }, 5000);
      } else {
        const data = await response.json();
        setError(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      setError("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>bSkilling Privacy Policy</title>
        <meta name="bSkilling" content=" Privacy Policy" />

        <meta
          name="p:domain_verify"
          content="7bb84546e514612864b5b9d71d1649e4"
        />
        <link rel="icon" href="/favicon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3PVZC9K8BH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3PVZC9K8BH');
            `,
          }}
        />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-lg"
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            Submit Your Review
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2"
              required
            />
            {phoneerror && <p style={{ color: "red" }}>{phoneerror}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Rating</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="flex items-center">
                  <input
                    type="radio"
                    value={star}
                    checked={rating === star}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="hidden"
                    required
                  />
                  <span
                    className={`cursor-pointer text-2xl ${
                      rating >= star ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                </label>
              ))}
            </div>
            {ratingerror && <p style={{ color: "red" }}>{ratingerror}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full border border-gray-300 rounded p-2"
              // rows="4"
              // required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit Review
          </button>
          {error && <p className="mt-4 text-red-600">{error}</p>}
          {success && <p className="mt-4 text-green-500">{success}</p>}
        </form>
      </div>
    </>
  );
}
