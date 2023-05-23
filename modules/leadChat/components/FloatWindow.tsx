import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import Starter from "./Starter";
import DropAQueryForm from "./DropAQueryForm";
import LeadChatBox from "./LeadChatBox";
import ChatForm from "./ChatForm";
import useChat from "../zustand";

const FloatWindow = () => {
  const { floatWindowMode, isChatFormVisible, setFloatWindowMode, setupSocket } = useChat();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      setupSocket();
    }
  }, [isExpanded]);

  return (
    <div
      className={`flex flex-col bg-white w-[400px] h-[500px] fixed bottom-2 left-2 z-[1000] transition-transform duration-700 shadow-md`}
      style={{
        transform: isExpanded ? `translateY(0%)` : `translateY(88%)`,
      }}
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
        >
          <FaAngleUp size={25} />
        </span>
      </div>

      {
        floatWindowMode === "starter" && (
          <Starter
            onChatClick={() => setFloatWindowMode("chat")}
            onDropAQueryClick={() => setFloatWindowMode("drop-a-query")}
          />
        )
      }
      {floatWindowMode === "drop-a-query" && <DropAQueryForm />}
      {floatWindowMode === "chat" && <LeadChatBox />}
      {isChatFormVisible && <ChatForm />}
    </div>
  );
}

export default FloatWindow;
