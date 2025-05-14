/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/compat/router';

export default function ThankYou() {
  const router = useRouter();

  const handleGoBack = () => {
    router?.back();
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center mb-50">
      <img
        src="/thankyou1.png"
        className="max-w-[80%] h-auto mb-8 md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[30%]"
        alt="Thank You Image"
      />

      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center space-x-2 bg-buttonBlue text-white px-4 py-2 transition duration-150">
          <button onClick={handleGoBack} className="text-white">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
