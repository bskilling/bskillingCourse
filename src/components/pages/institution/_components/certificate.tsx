import React from 'react';
import { Award, Shield, ArrowRight, Check, BarChart } from 'lucide-react';

interface CertificationProps {
  certification?: {
    title: string;
  };
}

const CertificationSection: React.FC<CertificationProps> = ({
  certification,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-gray-800">
          Industry-Recognized Certification
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Left Side - Certificate Image */}
          <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 flex items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <img
                  src="/assets/certificate.png"
                  className="w-full rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105"
                  alt="Certification"
                />
                {/* Certificate Seal */}
                <div className="absolute -right-4 -bottom-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-1.5 shadow-lg">
                  <div className="bg-white rounded-full p-2">
                    <Award className="h-8 w-8 text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Certificate Info */}
          <div className="md:w-1/2 p-8">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">
                {certification?.title || 'Professional Certificate'}
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              Earn a prestigious industry-recognized certification upon
              completion. This credential validates your expertise and can be
              shared directly on LinkedIn and other professional platforms.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-700 font-medium">
                    Globally Recognized
                  </p>
                  <p className="text-sm text-gray-500">
                    Accepted by leading employers worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-700 font-medium">
                    Digital Verification
                  </p>
                  <p className="text-sm text-gray-500">
                    Includes QR code and secure verification link
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-700 font-medium">
                    Career Advancement
                  </p>
                  <p className="text-sm text-gray-500">
                    Proven to increase job opportunities and salary potential
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <div className="flex items-center">
                <BarChart className="h-5 w-5 text-indigo-600 mr-2" />
                <p className="text-sm font-medium text-indigo-800">
                  93% of our certified students reported career advancement
                  within 6 months
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                View sample certificate
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
