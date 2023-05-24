import { create } from "zustand";
import IState from "./types/IState";
import initiateChatAction from "./actions/initiateChat.action";
import setupSocketAction from "./actions/setupSocket.action";
import sendMessagesAction from "./actions/sendMessage.action";

const useChat = create<IState>((set, get) => ({
  floatWindowMode: "none",
  socket: null,
  isInitiateButtonVisible: true,
  isChatFormVisible: false,
  leadInfo: null,
  messages: [],
  instanceState: "starter",
  initiateChat: initiateChatAction(set, get),
  setupSocket: setupSocketAction(set, get),
  setFloatWindowMode(floatWindowMode) {
    set(() => ({
      floatWindowMode,
    }));
  },
  pushMessages(messages) {
    set((state) => ({
      messages: [...state.messages, messages],
    }))
  },
  sendMessage: sendMessagesAction(set, get),
  closeChat() {
    set((state) => {
      if (state.instanceState === "closed") {
        return {
          floatWindowMode: "none",
          socket: null,
          isInitiateButtonVisible: true,
          isChatFormVisible: false,
          leadInfo: null,
          messages: [],
          instanceState: "starter",
        };
      } else {
        return {
          floatWindowMode: "none",
        };
      }
    })
  }
}));

export default useChat;
