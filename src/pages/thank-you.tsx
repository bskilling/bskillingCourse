/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { url } from 'inspector';

const ThankYou = () => {
  const router = useRouter();

  useEffect(() => {
    // setTimeout(function () {
    //   router.push({
    //     pathname: "/",
    //   });
    // }, 5000);
  }, []);
  return (
    <div className="text-center relative">
      <div className="absolute">
        <img src="/images/top.png" />
      </div>
      <div className="absolute right-0 bottom-0">
        <img src="/images/bottom.png" />
      </div>
      <div className="flex justify-center mt-5">
        <img
          src="/images/thankyou.jpg"
          className=" w-20 h-20 object-cover opacity-70"
          alt="thankyou"
        />
      </div>
      <p className="font-bold mt-5">Thank You for Reaching Out!</p>

      <p className="mt-4">
        Your form has been successfully submitted. <br /> We’re thrilled to have
        you on board and will get in touch soon!
      </p>
      <p className="mt-4">Check Your Inbox </p>
      <p className="mt-2">
        We’ve sent you a confirmation email. If you don’t see it in your inbox,
        check your spam/junk folder.
      </p>
      <p className="mt-4">
        Got Questions?
        <br />
        Our team is here to assist you!
      </p>

      <p className="mt-4">
        {' '}
        Email us at:{' '}
        <a href="mailto:support@bskilling.com">support@bskilling.com</a>
      </p>
      <p>
        Call us at: <a href="tel: +919845348601">+919845348601</a>
      </p>
      <div className="bg-white text-center shadow-lg m-auto p-5 w-80 mb-5 border border-slate-300 mt-5">
        <p className="font-bold mb-5">Connect with us</p>
        <div>
          <div className="flex gap-4  sm:mt-0 justify-center mt-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/bskillingindia/"
            >
              <img
                src="/icon/insta.svg"
                className="w-[20px] h-[20px]"
                alt="Instagram"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/bskillingindia/"
            >
              <img
                src="/icon/facebook.svg"
                className="w-[20px] h-[20px]"
                alt="Facebook"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/bskillingindia/"
            >
              <img
                src="/icon/link.svg"
                className="w-[20px] h-[20px]"
                alt="LinkedIn"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/b_SkillingIndia"
            >
              <img
                src="/twitter.webp"
                className="w-[20px] h-[20px]"
                alt="Twitter"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.pinterest.com/bskillingdigital/"
            >
              <img
                src="/icon/pin.svg"
                className="w-[20px] h-[20px]"
                alt="Pinterest"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
