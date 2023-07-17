import React, { useEffect, useState } from "react";

import { BsCheckLg } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const PaymentStatus = () => {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [amount, setAmount] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("payment_status");
    const amount = urlParams.get("amount");
    const orderId = urlParams.get("order_id");
    setPaymentStatus(status);
    console.log(paymentStatus);
    setAmount(amount);
    setOrderId(orderId);
  }, []);

  return (
    <div className="w-full md:py-0 py-8 flex items-center justify-center  md:h-screen md:border-0 border-t border-b font-SourceSans">
      <div className="flex  md:w-[50%] py-8 rounded-lg shadow-xl justify-center items-center flex-col">
        <div className="flex justify-center">
          <img src="/logo.png" className="md:w-[50%] h-auto" alt="" />
        </div>
        <div className="flex justify-center mt-8 md:px-0 px-5 flex-col items-center">
          <div className="flex  md:flex-row flex-col-reverse justify-center w-full mb-4 g ">
            <div className="md:w-[10%]  w-[50%]">
              {paymentStatus === "error" ? (
                <IoCloseSharp size={50} color={"#FF0000"} />
              ) : (
                <BsCheckLg size={50} color={"green"} />
              )}
            </div>
            <div className="flex justify-center items-center">
              <p
                className={`font-semibold text-green-600 text-center text-2xl ${
                  paymentStatus === "error" ? " text-red-500" : "text-green-600"
                }`}
              >
                {paymentStatus === "error"
                  ? "Your payment has failed!"
                  : "Your payment is successful. Happy learning !"}
              </p>
            </div>
          </div>
          <div className="mb-4 px-4 text-center">
            {paymentStatus === "error" ? (
              <p>
                We could not process your transaction due to some network error.
                If the amount is debited from your bank account, it will be
                refunded back to your account within 5-7 business days. Please
                keep this transaction ID for reference.
                <br /> For further assistance, reach out to
                support@bskilling.com
              </p>
            ) : (
              <p>
                {" "}
                Happy learning ! An automated payment receipt has been sent to
                you registered email address. <br /> Please keep this
                transaction ID for reference. For further assistance, please
                reach out to support@bskilling.com.{" "}
              </p>
            )}
          </div>
          <div className="w-full px-8 h-1">
            {" "}
            <div className="w-full h-[1px] px- bg-slate-400"></div>
          </div>
          <div className="flex flex-col py-7">
            <div className="flex gap-3">
              <div className="font-semibold  min-w-[200px] text-start ">
                AMOUNT{" "}
              </div>{" "}
              <p className="font-semibold">{amount}</p>
            </div>

            <div className="flex gap-3 ">
              <p className="  min-w-[200px]">OrderId </p>{" "}
              <p className="">{orderId}</p>
            </div>

            <div className="flex gap-3">
              <p className=" min-w-[200px] ">Payment Type </p>{" "}
              <p className="">Net Banking</p>
            </div>

            <div className="flex gap-3">
              <p className="min-w-[200px]">Transaction Time</p>{" "}
              <p className="">11-28-87</p>
            </div>
          </div>

          <div>
            <button className="flex gap-1 text-white mt-2 border hover:text-white border-buttonBlue transition duration-500 hover:scale-105 ease-out  bg-buttonBlue hover:bg-buttonBlue py-[8px] focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4 ">
              Back to Home
            </button>
          </div>
        </div>
      </div>
      {/* ////////////////// */}
      {/* <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center">
          <img src="/logo.png" className="md:w-[50%] h-auto" alt="" />
        </div>
        <div className="flex justify-center md:px-0 px-5 flex-col items-center">
          <p className="font-semibold text-center mt-4 text-2xl mb-4">
            Your Payment Is Successfull
          </p>
          <p className="mb-4 text-center">
            Thank you for your payment. An automated payment receipt will be
            sent to your registered email.
          </p>
          <div>
            <button className="flex gap-1 text-white mt-2 border hover:text-white border-buttonBlue transition duration-500 hover:scale-105 ease-out  bg-buttonBlue hover:bg-buttonBlue py-[8px] focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4 ">
              Back to Home
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default PaymentStatus;
