/* eslint-disable @next/next/next-script-for-ga */
import React, { useState } from 'react';
import Head from 'next/head';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
    residentialAddress: '',
    degree: '',
    specialization: '',
    yearOfPassing: '',
    collegeName: '',
    category: '',
    communityCertificateNumber: '',
    communityCertificate: null,
    studyCertificate: null,
    aadharCard: null,
    currentlyEmployed: '',
    careerGoals: [],
    consent: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e: any) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        //@ts-ignore
        [name]: [...formData[name], value],
      });
    } else {
      setFormData({
        ...formData,
        //@ts-ignore
        [name]: formData[name].filter(item => item !== value),
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>bSkilling Privacy Policy</title>
        <meta name="bSkilling" content=" Privacy Policy" />

        <meta name="p:domain_verify" content="7bb84546e514612864b5b9d71d1649e4" />
        <link rel="icon" href="/favicon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3PVZC9K8BH"></script>
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
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Residential Address */}
          <div className="mb-4">
            <label htmlFor="residentialAddress" className="block text-sm font-medium text-gray-700">
              Residential Address
            </label>
            <textarea
              id="residentialAddress"
              name="residentialAddress"
              value={formData.residentialAddress}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Degree */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Degree</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="degree"
                  value="B-tech"
                  checked={formData.degree === 'B-tech'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">B-tech</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="degree"
                  value="BE"
                  checked={formData.degree === 'BE'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">BE</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="degree"
                  value="MCS"
                  checked={formData.degree === 'MCS'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">MCS</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="degree"
                  value="Others"
                  checked={formData.degree === 'Others'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Others</span>
              </label>
            </div>
          </div>

          {/* Specialization */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Specialization</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="specialization"
                  value="Mechanical"
                  checked={formData.specialization === 'Mechanical'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Mechanical</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="specialization"
                  value="Computer Science"
                  checked={formData.specialization === 'Computer Science'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Computer Science</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="specialization"
                  value="EEE"
                  checked={formData.specialization === 'EEE'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">EEE</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="specialization"
                  value="Civil"
                  checked={formData.specialization === 'Civil'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Civil</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="specialization"
                  value="Others"
                  checked={formData.specialization === 'Others'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Others</span>
              </label>
            </div>
          </div>

          {/* Year of Passing */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Year of Passing</label>
            <select
              name="yearOfPassing"
              value={formData.yearOfPassing}
              onChange={handleChange}
              className="mt-1 block w-full p-2n border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select Year</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          {/* College/University Name */}
          <div className="mb-4">
            <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">
              College/University Name
            </label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select Category</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
              <option value="General">General</option>
            </select>
          </div>

          {/* Community Certificate Number */}
          <div className="mb-4">
            <label
              htmlFor="communityCertificateNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Community Certificate Number
            </label>
            <input
              type="text"
              id="communityCertificateNumber"
              name="communityCertificateNumber"
              value={formData.communityCertificateNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Upload Certificates */}
          <div className="mb-4 space-y-2">
            <label className="block text-sm font-medium text-gray-700">Upload Documents</label>
            <input
              type="file"
              name="communityCertificate"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500"
            />
            <input
              type="file"
              name="studyCertificate"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500"
            />
            <input
              type="file"
              name="aadharCard"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500"
            />
          </div>

          {/* Employment Status */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Are you currently employed?
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="currentlyEmployed"
                  value="yes"
                  checked={formData.currentlyEmployed === 'yes'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="currentlyEmployed"
                  value="no"
                  checked={formData.currentlyEmployed === 'no'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/* Career Goals */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Career Goals / Areas of Interest
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="careerGoals"
                  value="Generative AI"
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Generative AI</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="careerGoals"
                  value="Test Engineering"
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Test Engineering</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="careerGoals"
                  value="Cyber Security"
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Cyber Security</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="careerGoals"
                  value="Data Scientist"
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Data Scientist</span>
              </label>
            </div>
          </div>

          {/* Consent */}
          <div className="mb-4">
            Consent for Participation and Job Assistance
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">
                By signing below, I confirm that the information provided is accurate. I consent to
                participate in the 3-month skill development training program and agree to utilize
                the job assistance provided upon successful completion.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
