import { Socket } from 'socket.io-client';
import IFloatWindowMode from './IFloatWindowMode';
import IMessage from './IMessage';
import ILeadInfo from './ILeadInfo';
import ISendMessagesActionPayload from './ISendMessagesActionPayload';

interface IState {
  socket: Socket | null;
  isInitiateButtonVisible: boolean;
  isChatFormVisible: boolean;
  leadInfo: ILeadInfo | null;
  initiateChat: () => void;
  setupSocket: () => void;
  floatWindowMode: IFloatWindowMode;
  setFloatWindowMode: (floatWindowMode: IFloatWindowMode) => void;
  messages: IMessage[];
  pushMessages: (messages: IMessage) => void;
  sendMessage: (sendMessagesPayLoad: ISendMessagesActionPayload) => void;
  instanceState: IInstanceState;
  closeChat: () => void;
}

export default IState;
