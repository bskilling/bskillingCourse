import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "context/PageContext";
import { BsCheckLg } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const PaymentStatus = () => {
  const { formData, setFormData } = useContext(MyContext);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [amount, setAmount] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const [bankRefNo, setBankRefNo] = useState<string | null>(null);
  const [transDate, setTransDate] = useState<string | null>(null);
  const [paymentMode, setPaymentMode] = useState<string | null>(null);
  const [cardName, setCardName] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("payment_status");
    const amount = urlParams.get("amount");
    const orderId = urlParams.get("order_id");
    const card = urlParams.get("card_name");
    const trackingid = urlParams.get("tracking_id");
    const bankrefno = urlParams.get("bank_ref_no");
    const TransDate = urlParams.get("trans_date");
    const PaymentMode = urlParams.get("payment_mode");
    const Currency = urlParams.get("currency");
    const userEmail = urlParams.get("billing_email");
    const userName = urlParams.get("billing_name");
    const BatchDet = urlParams.get("merchant_param1");
    const phonno = urlParams.get("billing_tel");
    setPaymentStatus(status);
    setAmount(amount);
    setOrderId(orderId);
    setCardName(card);
    setTrackingId(trackingid);
    setBankRefNo(bankrefno);
    setTransDate(TransDate);
    setPaymentMode(PaymentMode);
    setCurrency(Currency);
  }, []);

  return (
    <div className="w-full md:py-0 py-8 flex items-center justify-center  md:h-screen p-2 md:p-0 font-SourceSans">
      <div className="flex sm:w-[100%] md:w-[80%] lg:w-[50%] py-8 rounded-lg shadow-2xl md:shadow-xl justify-center items-center flex-col">
        <div className="flex justify-center">
          <img src="/logo.png" className="w-[30%] h-auto" alt="" />
        </div>
        <div className="flex justify-center mt-8 md:px-0 _px-5 flex-col items-center">
          <div className="flex  md:flex-row flex-col-reverse justify-center items-center w-full mb-4 g ">
            <div className="md:w-[10%]  ">
              {paymentStatus === "error" ? (
                <IoCloseSharp size={50} color={"#FF0000"} />
              ) : (
                <BsCheckLg size={50} color={"green"} />
              )}
            </div>
            <div className="flex justify-center items-center">
              <p
                className={`font-semibold text-green-600 text-center text-xl ${
                  paymentStatus === "error" ? " text-red-500" : "text-green-600"
                }`}
              >
                {paymentStatus === "error"
                  ? "Your payment has failed!"
                  : "Your payment is successful. Happy learning !"}
              </p>
            </div>
          </div>
          <div className="mb-4 px-6 text-sm text-center">
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
                An automated payment receipt has been sent to you registered
                email address. <br /> Please keep this transaction ID for
                reference. For further assistance, please reach out to
                support@bskilling.com.{" "}
              </p>
            )}
          </div>
          <div className="w-full px-8 h-1">
            {" "}
            <div className="w-full h-[1px] px- bg-slate-400"></div>
          </div>
          <div className="flex md:flex-row px-4 md:px-0 flex-col justify-center w-full md:gap-8 text-sm items-center  py-7">
            <div className="flex w-full flex-col">
              <div className="flex  md:gap-3">
                <div className="font-semibold  min-w-[200px] text-start ">
                  AMOUNT{" "}
                </div>{" "}
                <p className="font-semibold">{amount}</p>
              </div>

              <div className="flex gap-3 text-sm">
                <p className=" font-semibold text-sm min-w-[200px]">
                  Order Id{" "}
                </p>{" "}
                <p className="">{orderId}</p>
              </div>
              <div className="flex gap-3">
                <p className="font-semibold min-w-[200px]">Bank Ref No</p>{" "}
                <p className="">{bankRefNo}</p>
              </div>

              <div className="flex gap-3">
                <p className="font-semibold min-w-[200px] ">Payment Type </p>{" "}
                <p className="">{paymentMode}</p>
              </div>
            </div>

            <div className="w-full ">
              <div className="flex gap-3">
                <p className="font-semibold min-w-[200px]">Currency</p>{" "}
                <p className="">{currency}</p>
              </div>

              <div className="flex gap-3">
                <p className="font-semibold min-w-[200px]">Tracking Id</p>{" "}
                <p className="">{trackingId}</p>
              </div>
              <div className="flex gap-3">
                <p className="font-semibold min-w-[200px]">Card Name</p>{" "}
                <p className="">{cardName}</p>
              </div>

              <div className="flex gap-3">
                <p className=" font-semibold min-w-[200px]">Transaction Time</p>{" "}
                <p className="">{transDate}</p>
              </div>
            </div>
          </div>

          <div>
            <Link style={{ textDecoration: "none" }} href="/">
              <button className="flex gap-1 text-white mt-2 border hover:text-white border-buttonBlue transition duration-500 hover:scale-105 ease-out  bg-buttonBlue hover:bg-buttonBlue py-[8px] focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4 ">
                Explore More Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentStatus;
