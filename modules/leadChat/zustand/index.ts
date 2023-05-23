import { create } from "zustand";
import IState from "./types/IState";
import initiateChatAction from "./actions/initiateChat.action";
import setupSocketAction from "./actions/setupSocket.action";
import sendMessagesAction from "./actions/sendMessage.action";

const useChat = create<IState>((set, get) => ({
  floatWindowMode: "starter",
  socket: null, 
  isInitiateButtonVisible: true,
  isChatFormVisible: false,
  leadInfo: null, 
  initiateChat: initiateChatAction(set, get),
  setupSocket: setupSocketAction(set, get),
  setFloatWindowMode(floatWindowMode) {
    set(() => ({
      floatWindowMode,
    }));
  },
  messages: [],
  pushMessages(messages) {
    set((state) => ({
      messages: [...state.messages, messages],
    }))
  },
  sendMessage: sendMessagesAction(set, get),
}));

export default useChat;
