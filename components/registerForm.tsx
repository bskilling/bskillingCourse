import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const RegisterForm = () => {
  const [messageSent, setMessage] = useState(false);
  const [CountryCodeValue, setCountryCodeValue] = useState<any>("+91");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const isButtonVisble =
    watch("message") &&
    watch("email") &&
    watch("phone") &&
    watch("location") &&
    watch("name") &&
    CountryCodeValue;
  console.log(CountryCodeValue);
  const submit = handleSubmit(async (data) => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          type: "contact",
          message: data.message,
          email: data.email,
          phone: data.phone,
          location: data.location,
          name: data.name,
          countryCode: CountryCodeValue,
        }),
      });

      if (response.status === 200) {
        reset({
          message: "",
          phone: "",
          email: "",
          location: "",
          name: "",
        });

        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Some thing went wrong");
    }
  });

  return (
    <div className="pb-4">
      <div className="flex w-full    mt-4 flex-col">
        <span className="">Your Name</span>
        <input
          type="text"
          className=" block text-base  w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray    focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
          {...register("name", {
            required: true,
          })}
        />
        <label
          className={`text-red-600   text-xs py-1 ${
            errors.name ? "visible" : "invisible"
          }`}
        >
          {errors.phone?.type == "required"
            ? "This field required"
            : "This field required"}
        </label>
      </div>

      <div className="flex  flex-col">
        <span className="">Your Email</span>
        <input
          type="text"
          className="block  w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray   border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />

        <label
          className={`text-red-600   text-xs py-1 ${
            errors.email ? "visible" : "invisible"
          }`}
        >
          Please enter a valid email address
        </label>
      </div>
      <div className="flex  flex-col">
        <span className="">Your Location</span>
        <input
          type="text"
          className="block  w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray   border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
          {...register("location", {
            required: true,
          })}
        />

        <label
          className={`text-red-600   text-xs py-1 ${
            errors.location ? "visible" : "invisible"
          }`}
        >
          This field is required
        </label>
      </div>

      <div>
        <label className="block">
          <span className="">Batch Details</span>
          <select
            {...register("interest", {
              required: true,
            })}
            className=" block  w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray   border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
          >
            <option>June 13-18</option>
            <option>June 11-18</option>
            <option>June 12-18</option>

            <option>Others</option>
          </select>
          <label
            className={`text-red-600   text-xs py-1 ${
              errors.interest ? "visible" : "invisible"
            }`}
          >
            This field is required
          </label>
        </label>
      </div>

      <div className="w-full flex justify-center  mb-3 items-center">
        {messageSent ? (
          <p className="text-buttonBlue  text-md font-semibold mb-4 ">
            {`Your message is sent.`}
          </p>
        ) : (
          <button
            onClick={submit}
            disabled={!isButtonVisble}
            className={`text-white  transition duration-500 hover:scale-105 ease-out  placeholder:text-sm bg-buttonBlue hover:bg-buttonBlue py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4   ${
              isButtonVisble ? "opacity-100" : "opacity-50 "
            }`}
          >
            Register
          </button>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
