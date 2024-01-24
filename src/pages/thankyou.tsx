import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src="/thankyou1.jpg" className="h-[60%]" alt="Thank You Image" />
      
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 mt-12">
         Your Details submitted successfully!
        </p>
        <p className="md:text-lg lg:text-xl text-gray-600 mt-8">
          We appreciate your interest. Our team will review your information and get in touch with you shortly
        </p>
        <div className="flex items-center text-white space-x-2 bg-buttonBlue  text- px-4 py-2 mt-12  transition duration-150">
          <Link style={{ textDecoration: "none" }} href={"/"}>
            <span style={{ textDecoration: "none" }} className="text-white">
              Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
