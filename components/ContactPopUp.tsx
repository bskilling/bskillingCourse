import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
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
  const isButtonVisble =
    watch("message") &&
    watch("email") &&
    watch("phone") &&
    watch("location") &&
    watch("name");

  const submit = handleSubmit(async (data) => {
    const { email, phone, message, location, name } = data;

    try {
      const response = await fetch(
        "https://54txkspp2molgb6p7mgzad2scu0niflz.lambda-url.ap-south-1.on.aws/",

        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            message,
            email,
            phone,
            location,
            name,
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
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setContactVisible(true);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const [message, setMessage] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [chatandQMenuVisible, setChatandQMenuVisible] = useState(false);
  const [value, setValue] = useState<any>();
  const [initialPopupVisible, setInitialPopupVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Show the popup automatically only for larger screens (e.g., laptops)
      if (window.innerWidth >= 1024) {
        setInitialPopupVisible(true);
      }
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
  const contactDetailsVisible = () => {
    setContactVisible((prev) => !prev);
  };
  const clickOnDropaQuery = () => {
    setChatandQMenuVisible(true);
  };

  return (
    <>
      <div
        className={`fixed bottom-0 right-0 transition-transform ease-in-out duration-1000 z-[1000] rounded-xl shadow-lg min-h-[300px] min-w-[300px] bg-white transform ${
          contactVisible
            ? "translate-y-0"
            : chatandQMenuVisible
            ? "translate-y-[360px] md:translate-y-[395px]"
            : "translate-y-[330px]"
        }`}
      >
        {chatandQMenuVisible === false ? (
          <div className="min-h-[50px] p-1 flex gap-12  justify-around rounded-sm bg-buttonBlue">
            <p className="text-white mt-1 font-medium">Welcome to bSkilling!</p>
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
        ) : (
          <div className="min-h-[50px] p-1 flex gap-12  justify-around rounded-sm bg-lightBlue">
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
        )}

        {chatandQMenuVisible === false ? (
          <div className="px-5 text-sm py-8 text-center mt-1">
            <p>
              Hi. How can we help you today? <br /> Please select one of the
              below options.
            </p>

            <div className="flex mb-4 mt-10 justify-center">
              {" "}
              <a
                href="http://chat.bskilling.com/chat"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-fit bg-buttonBlue text-white  px-4 py-2">
                  Chat with us
                </button>
              </a>
            </div>
            <div className="flex my-4 justify-center">
              {" "}
              <button
                onClick={clickOnDropaQuery}
                className="w-fit bg-buttonBlue text-white  px-4 py-2"
              >
                Drop a query
              </button>
            </div>
            <p className="mt-8 text-xs">
              Note: Chat support is available only between <br /> Monday and
              Friday, 10 am to 6 pm.
            </p>
          </div>
        ) : (
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
                className={`text-red-600   text-xs py-1 ${
                  errors.name ? "visible" : "invisible"
                }`}
              >
                {errors.phone?.type == "required"
                  ? "This field required"
                  : "This field required"}
              </label>
            </div>

            <div className="flex   px-5   flex-col">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="RU"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
            </div>
            <div className="flex   px-5   flex-col">
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
                className="block  w-full lg:h-[35px] placeholder:text-sm  px-2 border-buttonBlue  border border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                placeholder="Your Email*"
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
            <div className="flex px-5 flex-col">
              {/* <span className="text-black">Email</span> */}
              <input
                type="text"
                className="block  w-full lg:h-[35px] placeholder:text-sm  px-2 border-buttonBlue  border border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                placeholder="Your Location*"
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
            <div className="flex   px-5  flex-col">
              <input
                type="text"
                className="block  w-full lg:h-[80px] placeholder:text-sm  px-2 border border-buttonBlue  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                placeholder="Type Your Query Here*"
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
                  className={`text-white  transition duration-500 hover:scale-105 ease-out  placeholder:text-sm bg-buttonBlue hover:bg-buttonBlue py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4   ${
                    isButtonVisble ? "opacity-100" : "opacity-50 "
                  }`}
                >
                  Submit Query
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ContactPopUp;
