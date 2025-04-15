import ICreateAction from '../types/ICreateAction';
import IInitiateChatError from '../types/IInitiateChatError';
import ILeadInfo from '../types/ILeadInfo';

const initiateChatAction: ICreateAction = (set, get) => () => {
  const { socket, sendMessage } = get();

  if (socket) {
    socket.emit(
      'initiateChatInstance',
      null,
      (error: IInitiateChatError | null, leadInfo: ILeadInfo | null) => {
        if (error) {
          set({
            isInitiateButtonVisible: false,
            messages: [
              {
                id: '1',
                text: error.err,
                createdAt: new Date(),
                createdBy: 'bSkilling Support',
                createdById: '1',
                isOwn: false,
              },
            ],
          });
        } else if (leadInfo) {
          set({
            isInitiateButtonVisible: false,
            isChatFormVisible: true,
            leadInfo,
          });
          sendMessage({
            text: 'Hi',
            createdAt: new Date(),
          });
          setTimeout(() => {
            set(state => ({
              messages: [
                ...state.messages,
                {
                  id: '1',
                  text: "Hi there. Thanks for reaching out. We're here to help.",
                  createdAt: new Date(),
                  createdBy: 'bSkilling Support',
                  createdById: '1',
                  isOwn: false,
                },
                {
                  id: '2',
                  text: 'Kindly wait while we connect you to our support executive. Meanwhile could you share your name, mobile no and email please?',
                  createdAt: new Date(),
                  createdBy: 'bSkilling Support',
                  createdById: '1',
                  isOwn: false,
                },
              ],
            }));
          }, 1500);
        }
      }
    );
  }
};

export default initiateChatAction;
