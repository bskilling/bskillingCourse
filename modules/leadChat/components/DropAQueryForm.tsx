import { useState } from "react";
import { useForm } from "react-hook-form";

const DropAQueryForm = () => {
  const [messageSent, setMessage] = useState(false);
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
    watch("name");

  const submit = handleSubmit(async (data) => {
  
    try {
      const response = await fetch(
        "https://54txkspp2molgb6p7mgzad2scu0niflz.lambda-url.ap-south-1.on.aws/",
        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            message: data.message,
            email: data.email,
            phone: data.phone,
            location: data.location,
            name: data.name,
          }),
        }
      );

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
    <div>
      <div className="flex   px-5  mt-4 flex-col">
        <input
          type="text"
          className=" block text-base  w-full lg:h-[35px] placeholder:text-sm  px-2 border border-buttonBlue    focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
          placeholder="Your Name*"
          {...register("name", {
            required: true,
          })}
        />
        <label
          className={`text-red-600   text-xs py-1 ${errors.name ? "visible" : "invisible"}`}
        >
          {errors.phone?.type == "required"
            ? "This field required"
            : "This field required"}
        </label>
      </div>

      <div className="flex px-5 flex-col">
        <input
          type="number"
          className=" block  w-full lg:h-[35px] placeholder:text-sm  px-2 border border-buttonBlue    focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
          placeholder="Your Mobile Number*"
          {...register("phone", {
            required: true,
            minLength: 10,
            maxLength: 10,
          })}
        />
        <label
          className={`text-red-600   text-xs py-1 ${errors.phone ? "visible" : "invisible"
            }`}
        >
          {errors.phone?.type == "required"
            ? "This field required"
            : "Please enter a valid phone number"}
        </label>
      </div>

      <div className="flex px-5 flex-col">
        <input
          type="text"
          className="block  w-full lg:h-[35px] placeholder:text-sm  px-2 border-buttonBlue  border border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
          placeholder="Your Email*"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />

        <label
          className={`text-red-600   text-xs py-1 ${errors.email ? "visible" : "invisible"}`}
        >
          Please enter a valid email address
        </label>
      </div>
      <div className="flex px-5 flex-col">
        <input
          type="text"
          className="block  w-full lg:h-[35px] placeholder:text-sm  px-2 border-buttonBlue  border border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
          placeholder="Your Location*"
          {...register("location", {
            required: true,
          })}
        />

        <label
          className={`text-red-600   text-xs py-1 ${errors.location ? "visible" : "invisible"
            }`}
        >
          This field is required
        </label>
      </div>

      <div className="flex px-5 flex-col">
        <input
          type="text"
          className="block  w-full lg:h-[50px] placeholder:text-sm  px-2 border border-buttonBlue  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
          placeholder="Type Your Query Here*"
          {...register("message", {
            required: true,
          })}
        />

        <label
          className={`text-red-600   text-xs py-1 ${errors.message ? "visible" : "invisible"
            }`}
        >
          This field is required
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
            className={`text-white  transition duration-500 hover:scale-105 ease-out  placeholder:text-sm bg-buttonBlue hover:bg-buttonBlue py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4   ${isButtonVisble ? "opacity-100" : "opacity-50 "
              }`}
          >
            Submit Query
          </button>
        )}
      </div>
    </div>
  );
}

export default DropAQueryForm;
