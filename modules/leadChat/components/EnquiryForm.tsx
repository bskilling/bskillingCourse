import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from 'react-icons/fa';
import { useRouter } from "next/router";;
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";


interface EnquiryFormProps {
  onClose: () => void;
  onFormSubmit?: () => void;
  onPdfDownload?: () => void;
  courseName?: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ onClose, onFormSubmit, onPdfDownload, courseName }) => {
  const [messageSent, setMessage] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const isButtonVisible =
    watch("firstName") &&
    watch("lastName") &&
    watch("email") &&
    !errors.email &&
    watch("phone");

  const submitForm = async (data: any) => {

    try {
      const requestData = {
        type: "enquiry",
        courseName: courseName,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        experience: data.experience,

      };

      const response = await fetch(
        "https://54txkspp2molgb6p7mgzad2scu0niflz.lambda-url.ap-south-1.on.aws/",
        {
          method: "POST",
          headers: {},
          body: JSON.stringify(requestData),
        }
      );

      if (response.status === 200) {
        reset({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          experience: ""
        });

        setMessage(true);

        router.push('/thankyou');

        if (onFormSubmit) {
          onFormSubmit();

        }

        if (onPdfDownload) {
          onPdfDownload();
        }
      } else {
        throw new Error("Error while sending message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (event.target.id === "enquiryFormOverlay") {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);


  return (
    <>
      <div id="enquiryFormOverlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-500">
              <FaTimes />
            </button>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Enquiry Form</h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name*"
              {...register("firstName", {
                required: true,
              })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">This field is required</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name*"
              {...register("lastName", {
                required: true,
              })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">This field is required</p>
            )}
          </div>

          <div className="mb-4">
            <div className="flex items-center space-x-4">
              <PhoneInput
                value={watch("phone") || ""}
                placeholder="Enter Mobile Number*"
                defaultCountry="IN"
                international
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                onChange={(value) => setValue("phone", value || "")}
              />
            </div>
          </div>


          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Email*"
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                Please enter a valid email address
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Year Of Experience(optional)"
              {...register("experience")}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />

          </div>

          <div className="text-center">
            {messageSent ? (
              <p className="text-green-500 text-sm mb-4">
                Your message is sent. We will get back to you soon!
              </p>
            ) : (
              <button
                onClick={() => {
                  const formData = {
                    firstName: watch("firstName"),
                    lastName: watch("lastName"),
                    email: watch("email"),
                    phone: watch("phone"),
                    experience:watch("experience")
                  };

                  submitForm(formData);
                  onClose();
                }}
                disabled={!isButtonVisible}
                className={`bg-blue-500 text-white px-4 py-2 rounded ${isButtonVisible ? "" : "opacity-50 cursor-not-allowed"
                  }`}
              >
                Submit Query
              </button>
            )}
          </div>
        </div>

      </div>

    </>
  );
};

export default EnquiryForm;
