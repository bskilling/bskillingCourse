/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import ChatForm from '@/component/modules/leadChat/components/ChatForm';
import DropAQueryForm from '@/component/modules/leadChat/components/DropAQueryForm';
import LeadChatBox from '@/component/modules/leadChat/components/LeadChatBox';
import useChat from '@/component/modules/leadChat/zustand';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaComment, FaElementor, FaTimes } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

export default function FixedFooterBar() {
  const route = useRouter();
  const {
    floatWindowMode,
    isChatFormVisible,
    setFloatWindowMode,
    setupSocket,
    instanceState,
    closeChat,
  } = useChat();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFloatWindowMode("drop-a-query");
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, [route.pathname]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDropQueryVisible, setIsDropQueryVisible] = useState(false);
  useEffect(() => {
    if (isExpanded) {
      setupSocket();
    }
  }, [isExpanded]);

  const handleDropQueryButtonClick = () => {
    setIsDropQueryVisible(prev => !prev);
    setFloatWindowMode('drop-a-query');
    setupSocket(); // If you need to set up the socket when the button is clicked
  };

  return (
    <>
      <div className="fixednav bg-lightBlue fixed inset-x-0 bottom-[env(safe-area-inset-bottom)] text-white  w-full z-[1000] h-14 py-2">
        <div className="flex h-full py-4 justify-center md:justify-between  md:px-12 items-center">
          <div className="md:flex justify-center items-center  w-[20%]  hidden">
            <div className="text-sm flex justify-center   w-full">
              <p className="text-sm"> Get The Mobile App</p>
            </div>
            <div className="flex  gap-4  items-center w-full">
              <a
                target="_blank"
                rel="noreferrer"
                className="underline-0 flex justify-center"
                href="https://play.google.com/store/apps/details?id=com.melimu.app.bskilling&hl=en_IN&gl=US"
              >
                <img src="/gpmobile.png" className="w-fit object-contain h-10" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="underline-0 flex justify-center"
                href="https://apps.apple.com/eg/app/bskilling/id6445943298"
              >
                <img src="/appleMobile.png" className="w-fit object-contain h-10" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="underline-0 flex justify-center"
                href="https://twitter.com/b_SkillingIndia"
              >
                <img src="/twitter.webp" className="w-fit object-contain h-10" alt="" />
              </a>
            </div>
          </div>
          <div className=" md:flex gap-2 hidden ">
            {' '}
            <div className="flex justify-center items-center ">
              <FiPhoneCall />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-sm">Call Us On</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-sm">+91-9845348601</p>
            </div>
          </div>
          <div className="flex  text-black justify-between gap-8">
            {isDropQueryVisible && floatWindowMode !== 'none' && (
              <div
                className={`flex flex-col bg-white w-[400px] scale-[0.9] rounded-xl h-[500px] fixed right-0 md:-right-3 bottom-16 md:bottom-9 z-[1000] transition-transform duration-700 shadow-md`}
              >
                <div
                  className="p-3 flex items-center bg-lightBlue rounded-t-xl h-[60px] cursor-pointer text-white"
                  onClick={() => setIsExpanded(prev => !prev)}
                >
                  <p className="flex-1 font-medium">
                    {floatWindowMode === 'drop-a-query' ? 'Drop Us A Query' : null}
                  </p>
                  <p>
                    {floatWindowMode === 'drop-a-query' ? (
                      <button
                        className="flex items-center justify-center bg-buttonBlue z-[6000] shadow-md text-white text-3xl w-[20px] h-[20px] rounded-full"
                        onClick={() => {
                          setIsDropQueryVisible(false);
                          setFloatWindowMode('none');
                        }}
                      >
                        <FaTimes />
                      </button>
                    ) : (
                      <button
                        className="flex items-center justify-center z-[6000] bg-buttonBlue shadow-md text-white text-3xl w-[20px] h-[20px] rounded-full"
                        onClick={() => {
                          setIsDropQueryVisible(false);
                          closeChat();
                        }}
                      >
                        <FaTimes />
                      </button>
                    )}
                  </p>
                  <span
                    className={`transition-transform`}
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  ></span>
                </div>
                {floatWindowMode === 'drop-a-query' && <DropAQueryForm />}
                {floatWindowMode === 'chat' && <LeadChatBox />}
                {isChatFormVisible && instanceState !== 'closed' && <ChatForm />}
              </div>
            )}

            {/* <button
              className=" items-center justify-center z-[6000] bg-buttonBlue gap-3 text-white text-3xl  flex h-[20px] rounded-full"
              onClick={() => setFloatWindowMode("chat")}
            >
              <FaComment size={30} /> <p className="text-sm">Chat with us</p>
            </button> */}

            <div>
              {/* <button
                className="items-center justify-center z-[6000] text-white text-3xl flex h-[20px] gap-3 rounded-full"
                onClick={handleDropQueryButtonClick}
              >
                <FaElementor size={30} />
                <p className="text-sm">Drop Us A Query</p>
              </button> */}
              {/* <div
                className="items-center justify-center z-[6000] text-white text-3xl flex h-[20px] gap-3 rounded-full"

              >
                <a
                  href="https://wa.me/919741104412" // Replace 'yourPhoneNumberHere' with your actual WhatsApp number
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 hover:text-green-700"
                  style={{
                    display: 'inline-block',
                    // backgroundColor: 'green',
                    padding: '10px',
                    borderRadius: '50%',
                    // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)', 
                    transition: 'transform 0.3s ease-in-out', // Add a transition for the transform property
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png"
                    className="w-7 h-7"
                    alt="WhatsApp Logo"
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
