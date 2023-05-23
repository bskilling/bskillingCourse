import moment from "moment";
import useChat from "../zustand";
import { useEffect, useRef } from "react";

const LeadChatBox = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const { messages, socket, leadInfo, isInitiateButtonVisible, initiateChat } = useChat();

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.scrollTop = list.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div
        ref={listRef}
        className="flex-1 p-[10px] space-y-[10px] overflow-auto styled-scroll scroll-smooth relative"
      >
        {
          messages.map((message) => (
            <div
              className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
              key={message.id}
            >
              <div
                className="flex flex-col border border-buttonBlue p-[10px] space-y-2 rounded-md max-w-[80%]"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center bg-buttonBlue text-white w-[32px] h-[32px] rounded-full">
                    {message.createdBy[0].toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs">{message.createdBy}</p>
                    <p className="text-xs">{moment(message.createdAt).format("DD/MM/YYYY h:mma")}</p>
                  </div>
                </div>
                <p className="text-xs break-words">{message.text}</p>
              </div>
            </div>
          ))
        }
      </div>

      {
        isInitiateButtonVisible && (
          <button
            className="bg-buttonBlue text-white text-sm absolute left-[50%] bottom-[60px] translate-x-[-50%] px-4 py-2"
            onClick={initiateChat}
          >
            Initiate Chat
          </button>
        )
      }
    </>
  );
}

export default LeadChatBox;
