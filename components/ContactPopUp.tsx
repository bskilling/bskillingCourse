import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
interface SubmitData {
  phone: number;
  email: string;
  message: string;
}
const ContactPopUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });
  const isButtonVisble = watch("message") && watch("email") && watch("phone");

  const submit = handleSubmit(async (data) => {
    console.log(data);
    const { email, phone, message } = data;
    try {
      const response = await fetch(
        "",

        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            message,
            email,
            phone,
          }),
        }
      );
      if (true) {
        reset({
          message: "",
          phone: "",
          email: "",
        });

        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Some thing went wrong");
    }
  });
  const [message, setMessage] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const contactDetailsVisible = () => {
    setContactVisible((prev) => !prev);
  };

  return (
    <>
      <div
        className={`fixed bottom-0 right-0 transition-transform ease-in-out duration-1000 z-[1000] rounded-xl shadow-lg min-h-[400px] min-w-[300px] bg-white transform ${
          contactVisible ? "translate-y-0" : " translate-y-[365px]"
        }`}
      >
        <div className="min-h-[50px] p-1 flex gap-12  justify-around rounded-sm bg-buttonBlue">
          <p className="text-white mt-1 font-medium">Drop Us A Query</p>
          <div onClick={contactDetailsVisible}>
            <div className="transition-transform duration-1000 ease-in-out pt-[8px]">
              {contactVisible ? (
                <IoIosArrowDown color="white" size={25} />
              ) : (
                <IoIosArrowUp color="white" size={25} />
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-6 py-3 justify-center">
          <div>
            <img src="/icon/phone.png" alt="" />
          </div>
          <div className="">
            <p className="font-medium">+0000000000</p>
            <p className="text-xs">
              AvAilable 24x7 for <br /> your queries
            </p>
          </div>
        </div>
        <div>
          <div className="flex   px-5  mt-4 flex-col">
            <input
              type="number"
              className=" block  w-full lg:h-[35px] rounded-sm px-2 border border-green  placeholder-smaller focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
              placeholder="Mobile Number*"
              {...register("phone", {
                required: true,
                minLength: 10,
              })}
            />
            <label
              className={`text-red-600   text-xs py-1 ${
                errors.phone ? "visible" : "invisible"
              }`}
            >
              {errors.phone?.type == "required"
                ? "This field required"
                : "Please enter a valid phone number"}
            </label>
          </div>

          <div className="flex px-5 flex-col">
            {/* <span className="text-black">Email</span> */}
            <input
              type="text"
              className="block  w-full lg:h-[35px] rounded-sm px-2 border border-green placeholder-smaller focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
              placeholder="Email*"
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
              This field is required
            </label>
          </div>
          <div className="flex   px-5  flex-col">
            <input
              type="text"
              className="block  w-full lg:h-[50px] rounded-sm px-2 border border-green placeholder-smaller focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
              placeholder="Message*"
              {...register("message", {
                required: true,
              })}
            />

            <label
              className={`text-red-600   text-xs py-1 ${
                errors.message ? "visible" : "invisible"
              }`}
            >
              This field is required
            </label>
          </div>

          <div className="w-full flex justify-center  mb-3 items-center">
            {message ? (
              <p className="text-buttonBlue  text-md font-semibold mb-4 ">
                {`Your message is sent.`}
              </p>
            ) : (
              <button
                onClick={submit}
                disabled={!isButtonVisble}
                className={`text-white  transition duration-500 hover:scale-105 ease-out  bg-buttonBlue hover:bg-buttonBlue py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium rounded-lg text-sm px-4   ${
                  isButtonVisble ? "opacity-100" : "opacity-50 "
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
export default ContactPopUp;
