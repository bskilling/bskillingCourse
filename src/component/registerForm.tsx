/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { MyContext } from '@/component/context/PageContext';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import { encrypt } from 'util/ccavenue.utils';
import { useRouter } from 'next/router';
const { v4: uuidv4 } = require('uuid');
interface FormValues {
  name: string;
  email: string;
  phone: string;
  batch: string;
}
interface UpcomingBatch {
  capacity: string;
  description: string;
  endDate: string;
  endRegistrationDate: string;
  id: string;
  isPaid: string;
  name: string;
  startDate: string;
  status: string;
}
interface RegisterFormProps {
  price: any;
  email: string;
  BatchName?: any;
  course: string;
  courseName: string;
}
const RegisterForm: React.FC<RegisterFormProps> = ({
  price,
  email,
  BatchName,
  course,
  courseName,
}) => {
  const { formData, setFormData } = useContext(MyContext);
  const [messageSent, setMessage] = useState(false);
  const [isLoader, setisLoader] = useState(false);
  const router = useRouter();
  const [CountryCodeValue, setCountryCodeValue] = useState<any>('+91');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    trigger,
    getValues,
  } = useForm({
    mode: 'onChange',
  });

  const isButtonVisble = watch('email') && watch('phone') && watch('name') && CountryCodeValue;
  function handleManualSubmit() {
    // Manually trigger validation using the trigger function
    trigger().then(isValid => {
      if (isValid) {
        // If the form is valid, call your submit function
        const formData = getValues() as FormValues; // Cast to FormValues type
        submit(formData);
      }
    });
  }
  const createOrderId = async () => {
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(price) * 100,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  async function submit(formData: FormValues) {
    const priceToString = `${price}`;
    console.log(priceToString, 'pri', formData);
    setisLoader(true);
    try {
      const orderId: string = await createOrderId();
      console.log(orderId);
      if (orderId) {
        const options = {
          key: 'rzp_live_ut3CymoeapHYqB',
          amount: parseFloat(price) * 100,
          currency: 'INR',
          name: formData.name,
          description: 'description',
          order_id: orderId,
          handler: async function (response: any) {
            console.log(response);
            const data = {
              orderCreationId: orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };

            const result = await fetch('/api/verify', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: { 'Content-Type': 'application/json' },
            });
            const res = await result.json();
            if (res.isOk) {
              router.push({
                pathname: '/payment-status',
                query: {
                  payment_status: 'success',
                  amount: parseFloat(price),
                  order_id: orderId,
                  billing_name: formData.name,
                  billing_email: formData.email,
                },
              });
              // setisLoader(false);
            } else {
              router.push({
                pathname: '/payment-status',
                query: {
                  payment_status: 'error',
                  amount: parseFloat(price),
                  order_id: orderId,
                  billing_name: formData.name,
                  billing_email: formData.email,
                },
              });
              // setisLoader(false);
            }
          },
          modal: {
            ondismiss: function () {
              setisLoader(false);
              if (confirm('Are you sure, you want to close the form?')) {
                // txt = "You pressed OK!";
                // console.log("Checkout form closed by the user");
                setisLoader(false);
              } else {
                // txt = "You pressed Cancel!";
                // console.log("Complete the Payment");
              }
            },
          },
          prefill: {
            name: formData?.name,
            email: formData.email,
          },
          theme: {
            color: '#3399cc',
          },
        };
        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.on('payment.failed', function (response: any) {
          alert(response.error.description);
        });

        paymentObject.open();
      }
    } catch (error) {
      setisLoader(false);
      console.log(error);
    }
    // if (priceToString === "Free") {
    //   try {
    //     const response = await fetch(
    //       "https://oxljorvivslpaxucdwyobaaumm0gzlvh.lambda-url.ap-south-1.on.aws/",
    //       {
    //         method: "POST",
    //         headers: {},
    //         body: JSON.stringify({
    //           type: "contact",
    //           email: formData.email,
    //           phone: formData.phone,
    //           name: formData.name,
    //           BatchName: "test",
    //           countryCode: CountryCodeValue,
    //           Course: course,
    //           courseName: courseName,
    //         }),
    //       }
    //     );

    //     if (response.status === 200) {
    //       reset({
    //         BatchName: "",
    //         phone: "",
    //         email: "",
    //         location: "",
    //         name: "",
    //       });

    //       setMessage(true);
    //     } else {
    //       throw Error("Error while sending message");
    //     }
    //   } catch (error) {
    //     alert("Some thing went wrong");
    //   }
    // } else {
    //   const workingKey = process.env.NEXT_PUBLIC_ANALYTICS_ID_WORKING_KEY;
    //   setFormData(formData);
    //   const orderId = uuidv4().split("-")[0].substr(0, 8); // Generate a UUID, split and take the first part, and then get the first 8 characters
    //   const data = new URLSearchParams({
    //     merchant_id: process.env.NEXT_PUBLIC_ANALYTICS_ID_MERCHANT_ID ?? "",
    //     order_id: orderId,
    //     currency: "INR",
    //     access_code: process.env.NEXT_PUBLIC_ANALYTICS_ID_ACCESS_CODE ?? "",
    //     amount: `${price}`,
    //     language: "EN",
    //     merchant_param1: course,
    //     merchant_param2: formData.batch,
    //     billing_email: formData.email,
    //     billing_name: formData.name,
    //     billing_tel: formData.phone,
    //     redirect_url:
    //       "https://vhvaj3urva7qpfnbbmqbswzbea0zqhrz.lambda-url.ap-south-1.on.aws/",
    //     // redirect_url:
    //     //   "https://h3yr3i2abo46tzkj7zvcydu67y0hmvss.lambda-url.ap-south-1.on.aws/",
    //     cancel_url: "https://www.bskilling.com/",
    //   });

    //   const encRequst = document.createElement("input");
    //   encRequst.type = "hidden";
    //   encRequst.name = "encRequest";
    //   encRequst.id = "encRequest";
    //   encRequst.value = encrypt(data.toString(), workingKey ?? ""); //body key
    //   const form = document.createElement("form");
    //   form.action =
    //     "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";
    //   form.method = "post";

    //   const accessKey = document.createElement("input");
    //   accessKey.type = "hidden";
    //   accessKey.name = "access_code";
    //   accessKey.id = "access_code";
    //   accessKey.value = data.get("access_code") ?? "";

    //   form.appendChild(encRequst);
    //   form.appendChild(accessKey);
    //   document.body.appendChild(form);
    //   form.submit();
    // }
  }
  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [messageSent]);
  return (
    <>
      {isLoader && (
        <div>
          <div
            style={{
              position: 'fixed',
              zIndex: '999',
              height: '100%',
              width: '100%',
              overflow: 'show',
              margin: 'auto',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
              opacity: '0.8',
              background: '#000',
            }}
          />
          <div
            style={{
              position: 'fixed',
              zIndex: '999',
              height: '20px',
              width: '60px',
              overflow: 'show',
              margin: 'auto',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
              opacity: '0.8',
            }}
          >
            <img src="/loader.gif" alt="About bSkilling" className="w-10 h-10" />
          </div>
        </div>
      )}
      <div className="pb-4">
        <div className="flex w-full    mt-4 flex-col">
          <span className="text-sm mb-1">Enter Your Name</span>
          <input
            type="text"
            className=" block text-base  w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray    focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
            {...register('name', {
              required: true,
            })}
          />
          <label className={`text-red-600   text-xs py-1 ${errors.name ? 'visible' : 'invisible'}`}>
            {errors.phone?.type == 'required' ? 'This field required' : 'This field required'}
          </label>
        </div>

        <div className="flex  flex-col">
          <span className="text-sm mb-1">Enter Your Email</span>
          <input
            type="text"
            className="block  w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray   border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
            {...register('email', {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />

          <label
            className={`text-red-600   text-xs py-1 ${errors.email ? 'visible' : 'invisible'}`}
          >
            Please enter a valid email address
          </label>
        </div>
        <div className="flex  flex-col">
          <span className="text-sm mb-1">Enter Your Phone</span>
          <input
            type="text"
            className="block  w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray   border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
            {...register('phone', {
              required: true,
            })}
          />

          <label
            className={`text-red-600   text-xs py-1 ${errors.phone ? 'visible' : 'invisible'}`}
          >
            This field is required
          </label>
        </div>
        <div>
          <input type="checkbox" />{' '}
          <span className="text-xs">
            {`I authorise bSkilling & its representatives to contact me with
            updates and notifications via Email/SMS/What'sApp/Call. This will
            override on DND/NDNC `}
            <a href="/privacy" target="_blank">
              Privacy Policy
            </a>
          </span>
        </div>

        {/* <div>
        <label className="block">
          <span className="text-sm mb-1">Select Batch</span>
          <select
            {...register("batch", {
              required: true,
            })}
            className=" block  w-full lg:h-[35px] placeholder:text-sm  px-2 border-2 border-gray   border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
          >
            {BatchName?.map((item: any, index: any) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
          <label
            className={`text-red-600   text-xs py-1 ${
              errors.batch ? "visible" : "invisible"
            }`}
          >
            This field is required
          </label>
        </label>
      </div> */}

        <div className="w-full flex justify-center  mb-3 items-center">
          {messageSent ? (
            <p className="text-buttonBlue text-center  text-md font-semibold mb-4 ">
              {`Enrolment successful. We'll get back to you shortly.`}
            </p>
          ) : (
            <button
              // disabled={!isButtonVisble}
              onClick={handleManualSubmit}
              className={`text-white  transition duration-500 hover:scale-105 ease-out  placeholder:text-sm bg-buttonBlue hover:bg-buttonBlue py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4 ${
                isButtonVisble ? 'opacity-100' : 'opacity-50 '
              }  `}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
