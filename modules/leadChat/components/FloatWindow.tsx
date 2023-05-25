import { useEffect, useState } from "react";
import { FaAngleUp, FaComment, FaElementor, FaTimes } from "react-icons/fa";
import useChat from "../zustand";
import ChatForm from "./ChatForm";
import DropAQueryForm from "./DropAQueryForm";
import LeadChatBox from "./LeadChatBox";

const FloatWindow = () => {
  const [chatIconVisible, setChatIconVisible] = useState(false);
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentDay = currentTime.getDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6

    if (
      currentDay >= 1 && // Monday
      currentDay <= 5 && // Friday
      currentHour >= 10 &&
      currentHour < 18
    ) {
      setChatIconVisible(true);
    } else {
      setChatIconVisible(false);
    }
  }, []);
  const {
    floatWindowMode,
    isChatFormVisible,
    setFloatWindowMode,
    setupSocket,
    instanceState,
    closeChat,
  } = useChat();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      setupSocket();
    }
  }, [isExpanded]);

  return (
    <>
      {floatWindowMode !== "none" && (
        <div
          className={`flex flex-col bg-white w-[400px]  h-[500px] fixed right-[105px] bottom-2 z-[1000] transition-transform duration-700 shadow-md`}
        >
          <div
            className="flex items-center text-white bg-buttonBlue p-3 h-[60px] cursor-pointer"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <p className="font-medium flex-1">Welcome to bSkilling!</p>
            <span
              className={`transition-transform`}
              style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            ></span>
          </div>

          {floatWindowMode === "drop-a-query" && <DropAQueryForm />}
          {floatWindowMode === "chat" && <LeadChatBox />}
          {isChatFormVisible && instanceState !== "closed" && <ChatForm />}
        </div>
      )}

      {chatIconVisible === true ? (
        floatWindowMode !== "chat" ? (
          <button
            className="flex items-center justify-center z-[6000] bg-buttonBlue shadow-md text-white text-3xl fixed bottom-[105px] right-2 w-[75px] h-[75px] rounded-full"
            onClick={() => setFloatWindowMode("chat")}
          >
            <FaComment />
          </button>
        ) : (
          <button
            className="flex items-center justify-center z-[6000] bg-buttonBlue shadow-md text-white text-3xl fixed bottom-[105px] right-2 w-[75px] h-[75px] rounded-full"
            onClick={closeChat}
          >
            <FaTimes />
          </button>
        )
      ) : (
        ""
      )}
      {floatWindowMode !== "drop-a-query" ? (
        <button
          className="flex items-center justify-center bg-buttonBlue z-[6000] shadow-md text-white text-3xl fixed bottom-[15px] right-2 w-[75px] h-[75px] rounded-full"
          onClick={() => setFloatWindowMode("drop-a-query")}
        >
          <FaElementor />
        </button>
      ) : (
        <button
          className="flex items-center justify-center bg-buttonBlue z-[6000] shadow-md text-white text-3xl fixed bottom-[15px] right-2 w-[75px] h-[75px] rounded-full"
          onClick={() => setFloatWindowMode("none")}
        >
          <FaTimes />
        </button>
      )}
    </>
  );
};

export default FloatWindow;
