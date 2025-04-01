/* eslint-disable @next/next/no-img-element */
import { Coursedetailstype } from 'common/util/types';
import React, { useState } from 'react';
import RegisterForm from '@/component/registerForm';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';

interface PaymentFormProps {
  courseDetails: Coursedetailstype | null;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ courseDetails }) => {
  const [registerVisible, setRegisterVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const clickOnRegister = () => {
    setOpen(true);
    setRegisterVisible(true);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
        <p className="text-2xl font-semibold text-center">
          Price: <span className="text-red-600">₹{courseDetails?.price}</span>
        </p>
        <p className="text-cartBtn mb-4 font-bold text-center">
          (Included all taxes applicable)
        </p>
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className=" sm:items-start">
                    <div className="mt-3 text-center  sm:ml-4 sm:mt-0 sm:text-left">
                      <div className="flex justify-between">
                        <DialogTitle
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Fill this details
                        </DialogTitle>
                        <IoMdClose onClick={() => setOpen(false)} />
                      </div>
                      <div className="mt-2">
                        <RegisterForm
                          email="jkdiadihsadsaio"
                          // BatchName={[{ name: "batch 1" }]}
                          price={courseDetails?.price}
                          course={'rtest'}
                          courseName={'test'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => clickOnRegister()}
            className="bg-transparent border border-cartBtn hover:border-none text-cartBtn hover:text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
          >
            Buy Now
          </button>
        </div>
        <p className="ml-4 text-sm text-subText mt-4 mb-4">
          Emi Banking Partners
        </p>
        <div className="flex justify-center gap-4">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUEhgUFBUZFBUaGRsYGhgbGxoZGxoZGRkbGxoYGBwbIS0kHB8qHxgjJTclKi4xNjY0JDE6Pzo2PjY2NjUBCwsLEA8QHxISHTMqIio0PDM1PDMzNDM1MTM8PjM+OTo1Mzw8MzMzMzM8PjQ2MzYxMzM1MzMzMzMzMTMzMzEzNf/AABEIAH8BhQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABIEAACAgEBBAUGCwUGBgMBAAABAgADEQQFEiExBgdBUXETIjJhkbEUFjM0UlNyc4Gy0TVCkrPSFSMkdMLDJVRigqHBY9PhF//EABoBAQACAwEAAAAAAAAAAAAAAAABAwIEBgX/xAAqEQEAAgEDAwMDBAMAAAAAAAAAAQIDBBExIVFSEjNxExQyBSJhoRUjkf/aAAwDAQACEQMRAD8A7NERAREQEREBERApKTxY4UEkgAcSTwAEit/Tagaha1OU479pzujhwCjt8ffIm0RyrvkrT8p2S6JoPjfovrh7D+kr8btF9cPYf0j1R3R9anlDfRI/8cNF9cPYf0j446H64ew/pG8dz61PKEgiR/44aL64ew/pHxw0X1w9h/SPVCfq08o/638rI/8AHHRfXD2H9JsNmbWp1KlqX3wpwSAeBIzjjG8JrkradolsIkY1WmuBvNO8H8vXu5LFSoSt2XBON0tkEjvM2GwRbu2G7IdrC+6eO6rKpCKeRC53c94MlnPRuIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBSIljVapK1LOwVRzJiI34RMxEbyvTVba29TpVzY3nH0UHFm/DsHrM2XpDgcZHA+I5zlHSro3fQ7WktcjHJsPFh6n7vHlMbzMR0a+py2pTekbsXb3SS7VHDHcrzwRTw/7/pGaWJQma/LwL3ted7TvJmeSYJlIQSjGUYxJIgnkmGM8yWROmdVPyF33g/KJzImdN6qfkLvvB+UTOnLd0XuJ7KxEte0REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQKSkx9Zq66kLOwVR2n3DvMhO2ulL2ZWnKJyLfvH+kf8AmXYsF8k9OO7Wz6qmGOs9eyQ7a6R10ZVfPs+iDwB/6j/6kH1+0rL23rGz3Dko8BMQmJ62HTUxx/Pd4OfWXzW24js67p/QXwHulXQMCCAQeBB4gymn9BfAe6XJ4k8uljhzjpR0KK5t0oLLzartHrTvHq9ndINunOADnuwc+yd/mms6P1HUrqlG7YMhgOTgjGSO/wBcqtj7NDNoK2t6q9O7jXkX+g38J/SUND/Qf+E/pO++THcPYI8mO4ewSPp/yw/xseX9OAeQf6D/AMLfpPDow5qV8QR759A+TXuHskA61QAunwMcX9yxNNo3V5tFFKzbfhzmUMEykxaROm9VPyF33g/KJzEmdO6qPkLvvB+UTKnLb0Xuwn8REte0wb9q0VtuPaitw80sAePLhM6cE6yFH9t/jR+YTvcBNLo+k+iusFVWqqssYkBFcFiVBJwPUAT+E3U+durn9s6b7dv8m2B9EzX6/a+no+WuSvt85gD7JE+szpc+iqWqggai0HDc9xBzcA8C3YM+PqkH6L9X1+0F+Fai01o/FWI33sH0uJ4CB2LZ+29Nf8jfXZnluuCT4CbKcP6S9W12jrOo09ptCec2BuWKB+8u6eIHq4yV9V3S99Wp02obeurXeVzjNlfLzsc2XIBPbkE8YE31O1KK23HtRG4eazAHjy4GZoM4R1rj/jI+7o/O07np/QX7I90DG1W1aK23bLURsZwzAHB5HBldo7Sp06eUusWpMgbzEKMnkMmcN65h/wATf/L1/wCuT/rb/ZK/eVe4wJjsvatGpUvp7UuUHdLIQwDYBwSO3BEyUuVmZQwLLjeAPEZGRnuyJznqP+aaj/Mf7VclWxP2hr/HT/yjAkURI10m19u/Vo9KwS+7JNmAfJUrjfsAPAtxCj1kQNtr9saej5a6ur7bqvvM87P21pr/AJG+u37LqT7BMXZPRvTaYZSsPYfStfz7HPeztk8yeHIS5tTo/ptQP7ypd4ei6+ZYp70dcMp/GBt55Jxzkb6Pa66u59DqWNj1qHquIwbaScAvjhvqfNOOfA9s2m3dE1+ltqRijsjBGGRuvjKNw7mAgbKW7LAoLMcKASSeQA5kzX7A2j8I01dpG6xGHXtV1O66n1hgRLu3Pmt33Vn5TAzEYEAg5B4g94PbPcg/Q7VvpVo0lzFqra0fS2MePFAzaZj2svEqe1fCTiBZruViwDAlThgDxBxnB7uE86rVV1IXsda1HNmIUe0zS9HfnWv+/T+TXMOylLdsMl4DirTI9CNxXLu4ssCngW80LnsEDe7P21ptR8hfXb9hlb3GbGabauwKb91sGq1GDV3V4WxMEEgHHFTjBU5B7RNzAREQEpKykDmHSK9m1LhmLBWKqOxQDyA7JrAZm7d+dXfbb3zBnQ4YiKR8OS1EzOS2/eVcykRM5VRy6/p/QXwHulyW9P6C+A90uTnJ5djXhWIiQklJWIHkTnvWz6On+0/uWdCE571s+jp/tP7lmN+Gtq/Zs5vPJMqZ5lTxIgnT+qf5C/7wfkE5fOo9U/yF33g/IJnXlt6L3IT+IiWPZcF6x/23+NH5hO8zgfWbaE2wzniFFTHHPC8eHsky/wD7DpP+W1Psq/8AshLpc+durn9s6b7dv8m2dk6I9LqtorY1Vb1+TKg7+5x3wSMbrHunG+rn9s6b7dv8m2ENj1vEnaeHzueSrx3YJbex6523ZwUU1hfR3F3fDdGJButTopZq601FC71tQIKdrIePm95B447RIv0S6y20tQ02rqe1E81XTd31A4bjqxUHHfkGEutV7U09ltmnWxGsrUGyvOSqt9Ls5cx2ZGeYnEOrMkbZrFfFM3An/wCPcfB/iCTR7R2ii6t7tE11SPvY390ON8eehKswIOTxzn2ZnQepfZCHyurLqzj+6VAfORTgszd29gY8IGk61/2wPu6PzvO5af0F+yPdOQ9c2xbBdXrEUlCgR2H7jKSUz3A5PHvmdsvrcpWlVv09xsVQpNe4yMQMZyzqRnuwYQivXN+03/y6f65Putv9kr95V7jOc6prdt7TyiFVYopA4+TpXgSzd+CT4nE6T1wjGzMD66sfmhLB6j/mmo/zH+1XJVsX9oa/x0/8oyK9R/zTUf5j/arkp2Kf8fr/ALVH8owhI5F9Hx2zqN7s0tG54Gy3ex+IGfwkm3h3yNdJNNbXbVrtOhseoMltQ9KyhiC252b6kbw7+XDMCTxNbsrbFGpQPTYrjkRyZT2qynipHIgy5tHadOnQvdYtajvPE9wA5k+oQNPtdV/tPREenuagf9mELZ9W9uyTSK9H9PbfqX19yGtWXyWmrbg6VZyzsP3Wc8cdgAma9W0d47tumC5OAa7CQM8MnynE4gYuzG+D7Qu0x4Jcvwmru3gQtyDhgcSrY5neJm42581u+6s/KZFOkum11Yq1jvQ/wV/Kla0sR2rYFLVyXYY3GLYx+7JPtawPo7WU5VqXYH1FCRA1+m2VXqtmU1PkA01FWXgyOqKVsQ9jKRkGe+jm1LH3tNqcDV04D44CxDwS9B9FscR2HImb0b+Z6f7mv8izD6SbIewJfpyF1dPnVseAdeG/S5+i4GPUcHsgeOjvzrX/AH6fya5l7Z2HXqd1mLV215NdyHdesnGcHtBwMqcgzTdBtoDUPrbArITeoZGGGR1qQMp8COc2ug26r32aa1fI3I3mqWz5Ss+jZWcDI7COYP4QNZdtPWaEb2qA1WmHpaitd2ytfpW1j0gO1k9gkpqsV1DKQysAykHIIIyCD2giYe2toU0UPZeQKwpyD+9kY3FHaTyx65hdCtJZVs7TV25Fi1KGB5jtCn1gED8IG+iIgJSVlIHKdvfOrvtt75gZmdt751d9tvfNfmdDh/CPhyWf3LfMveZWeJUGZzwqjl2HT+gvgPdLkt6f0F8B7pcnOTy7GvCsREhJESkCgnPetr0dP9p/cs6EJzvrb9HT/as9yyLcNfVe1Lm0pESl4pOodU3yF/3o/IJy8zqvVbpnTTWM6MoZwy7wI3lCAZGezPbM68tvRR/sTuIiWPXaXaHRbRX2Gy7T12OQAWYZJA5CY3xH2b/ydX8P/wCza63adFJAuurqLZ3Q7qm9jnjeIzzl/T3pYgdGV0biGUhlI7wRwMDE2TsTTaUMNPUlQYgtujG8RyJ9s1ezeg+z9Pet9NBS1SSreUubBZSp81nK8mI5dsk0QE0e1uimh1R3r9OjuRjeGUfH20Ib/wAzeRAjWn6D7NRGRdJXhlKktvO2Dzw7ksPEGajof0B+A6qy7y7shyqIOAKHiPK/SYchjHfJ5MPW7RppAN1tdQY4BdlQE88DeIycQMiytWUqwDKRggjII7iDIzf1fbMdt46RAc5wrOi/iqMFPskj0upSxA9bq6nkyMGU+BHAy/A1+ytk6fTLuaepKlPEhFAye8nmT4zztrY1Gsq8jqE8pXvBt3eZPOXkcoQe3vmyiBqdhbA02iRk01fkkZt9hvu+WwFzl2J5KI1XR/S2u1llKs7Y3m4gnAwM4PYJtogaT4raL6hfa36zcIoAAHAAYHgJ7ll7lUqCwBY7qgkAscEkDvOATgd0DW6/o3pLmL2UrvkYLrlHI9boQ3b3zxoui+jpYOlCl19F3LWuO/DWEkcu+buICIllbVLFQwLLjeAIyM8RkdmYHqysMCrDKkEEHkQeYMs16GtahSqAVhNwJxxuYxu+GOEyogWaKVRVRRuqoAUDkABgAfhL0s1Wq2d1g2Dutgg4I5g45Hjyl2Bj0aStGd1UK1jBnI/eYKFBPrwAJY2lsqjUAC6pbMHKkjip71YcVPhNhLHlkLlN4b4AYrkbwViQGI5gEqRn1GBqdH0V0Vbh1pDOp3lZ2e0qT2obGbd/Cb2IgIiICUlZSByfb5/xV32298wAZnbfP+Ku+23vmunQ4fwj4cnn9y3zL3KieAZXMsVw7JR6K+A90uZnJhtjU/XP/EZX+2dT9c/8RnlToL94e3H6pTtLrEsai9URnb0VBY448BxM5d/bOp+uf+IzzZtW9lKta5BGCCxIIPYZEfp9t+swT+qU26Vl1PT6hbFDIQyniCJfnK9kbZs0zZXih9JDyPr9R9c6HsrateoTeQ8e1TzU+uUZ9NbHPeGxpdZTNG3E9mxnOutr0dP42e5Z0Wc662vR0/jZ7lmtbhbqfalzWZGg0Nl9grqQ2OewdnrJ5Aeszf8ARnobdq8O2aqfpkecw/6FPvPDxnVdjbFo0qblKBeWWPFmPex7TMIru0MOktbrbpCM9GOgddOLNTi2zmF5oh/1H1mTgCViZxGz1KY60jaIViIks0e2ith19Xk2VG+D28XRnGPKVcMK64PrzMfaestV7QbNxq662rVcKtjOzBuDZLDIC4zwz65JdwZzgZxjPbjulGqUkEqCRyJAJHh3R2O7TbJL2X6hnsfFdwRUyNwDyFTEcBk+c5PEzXbR2neNUyIHyr0hRvUJWyNul94O4dicsAVU8RwkrVQM4GM8T4959koalJDFQWHIkDI8DB3RJtp6hfLqrM7aWu0sMDNjsc088ZwgJ5jiRPC6+802brWIudOEdnodwz2br48m7gKRukZ48TJkEGSccTz9fjPCUIowqqBzwABx74gR3WPdTetC2O4v3fJs2CUKMTaN7HahGM9ol/b7suo0u66VnesG84LL8meGA693fNmdGDcLSzEqhVUON1d4+cwwM7xwBxJGBwA4zJtpVhh1DDuIB98CI16llDYcLv6wLbcnmpulCQUzndyVVCcniTxl2nVW2WaevyrqjNqRvKVBsWsqK2Jx6+znJR5FN3d3V3fo4GPZylQg4YA4cuHLw7oJRW++4LrLBc/91aK0XzSqoaqSzEY84jfZuJlNTtVqd9xY1lFNle82VbeSyshlyBx3WZG/HElu4OPAcefr7OPfwnkUqF3QoC92Bj2QIXVtTVqroxZrtPTZdYAB55sANSjPA7vn9o9Ed89rr7zVZh7ETe04Rmeh7AXsxYAamcBSN0jPHiZMggyTgZPM9+OWZ5ShFGFVQOeAAOPfJHjTJuru77PgnJYgnjxwcdwMhuh0nmaZA7g/DtTk73nLj4QSB9HI9+ZMdPpUQuUG6bG33PHzm3VXJz/0qB+Euipee6M5znAznv8AGQIbqNq3eZWTaVzqBvo1KuTXYETea1kXgpJIByfwMztFddZqN2x3UppabDWjLg2O9oJJGc5CAcDiSSylWGGVSM5wQCM9/jKhADkAZxjPqHIeECM9HNoXWupbfwyMz77U4D5GPJojF1A4jDAevjPW0dZd5S9UsVAr0gBmCZVlJZEYg7rE9/8A4kjWpQSwUAnmQACfE9sWVK2QyhgeeQDnHfmBqdHtENpHsJsUIHBY7rMNzILKV81uXA+2YXRraL2X3Vk2biJS6ixqncGw2BuNTsMHyYODgg57JJPJgDAAA5Yxwx3YlK6UX0VVfAAe6SNFsC9A+qBdQfhT8CwB9CvszNfsnal9luWDr514cM1G6qoWCbiK5cEYGd5RnOT2SUtpKyd4opbnndGc9+cT2KVyW3Rk8zgZPiZiIfoNo3otf949rWaGy/D7pPlENYBXAGB/eHI8Jj/DGSzU2V2tc/wXSktlCylrLQ2CcKOBJ44Ak5FajGABgYHDkO4erhKJQi5wqjPPAAz498ncRNNbe6bod61bU1orM9L2BGXLqTWzqOI4cc4MllFe6oXeZsdrHJPiZVKVUYCgDOcAADPfLsBERASkrKQOS7f+dXfbb3zX5mft8/4q77be+a+dFi/CPhyeb3J+ZVzEpEzVvQMrvTzmIQ9xKQDA9S/pNU1TB0Yqw7R7iO0eqY+ZINidGbLsM+a6+/8AebwHZ4mV5b0rX9/C3DTJe37I6pT0f28upBUjdsUZIHEEd4P/AKmbtDZFN71tagfyZJUHiuWxxI7cY7Ze2foK6V3K1Cjt7ye8ntmXPAyTWbT6Y2h0+KtvREXneQCViJitIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAlJWIEY1nQ+myxrC9gLEsQCmMnuypMtDoNR9Zb7U/okrlJbGoyRG0Wa06TFM7zWEV+I1H1lvtT+iPiNR9Zb7U/okriT9zl8j7PD4winxGo+st9qf0R8RqPrLfan9ElcR9zl8j7PD4wifxHo+st9qf0S3qOhNQRij2M+PNBKYz2Zwo4SYYiTGpy+SJ0eHxRnYXRVKcPbiyzu/dB9Q7T6zJLKxKr3ted7Sux4qY42rGysRExWEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k="
            className="w-[120px] h-[40px] object-contain"
            alt="liquiloans"
          />
          <img
            src="data:image/png;base64,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"
            className="w-[120px] h-[40px] object-contain"
            alt="shopsy"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
