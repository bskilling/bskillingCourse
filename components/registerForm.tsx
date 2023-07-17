import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import bcrypt from "bcrypt";
import { encrypt } from "util/ccavenue.utils";

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

  function submit() {
    const workingKey = process.env.NEXT_PUBLIC_ANALYTICS_ID_WORKING_KEY;
    const data = new URLSearchParams({
      merchant_id: process.env.NEXT_PUBLIC_ANALYTICS_ID_MERCHANT_ID ?? "",
      order_id: "145155",
      currency: "INR",
      access_code: process.env.NEXT_PUBLIC_ANALYTICS_ID_ACCESS_CODE ?? "",
      amount: "10",
      language: "EN",
      redirect_url:
        "https://h3yr3i2abo46tzkj7zvcydu67y0hmvss.lambda-url.ap-south-1.on.aws/",
      cancel_url: "https://www.bskilling.com/",
    });

    const encRequst = document.createElement("input");
    encRequst.type = "hidden";
    encRequst.name = "encRequest";
    encRequst.id = "encRequest";
    encRequst.value = encrypt(data.toString(), workingKey ?? ""); //body key
    const form = document.createElement("form");
    form.action =
      "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";
    form.method = "post";

    const accessKey = document.createElement("input");
    accessKey.type = "hidden";
    accessKey.name = "access_code";
    accessKey.id = "access_code";
    accessKey.value = data.get("access_code") ?? "";

    form.appendChild(encRequst);
    form.appendChild(accessKey);
    document.body.appendChild(form);
    form.submit();
  }
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
        <span className="">Your Phone</span>
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
            className={`text-white  transition duration-500 hover:scale-105 ease-out  placeholder:text-sm bg-buttonBlue hover:bg-buttonBlue py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4   `}
          >
            Register
          </button>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
