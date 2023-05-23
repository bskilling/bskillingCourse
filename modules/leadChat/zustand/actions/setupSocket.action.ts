import { io } from "socket.io-client";
import ICreateAction from "../types/ICreateAction";
import IMessage from "../types/IMessage";

const setupSocketAction: ICreateAction = (set, get) => () => {
  const { socket, pushMessages } = get();

  const NEXT_PUBLIC_SOCKET_HOST = process.env.NEXT_PUBLIC_SOCKET_HOST;
  if (!socket && NEXT_PUBLIC_SOCKET_HOST) {
    const newSocket = io(NEXT_PUBLIC_SOCKET_HOST);

    newSocket.on("connect", () => {
      set(() => ({
        socket: newSocket,
      }));

      newSocket.on("newMessage", (data: IMessage) => {
        pushMessages({
          id: data.id,
          text: data.text,
          createdById: data.createdById,
          createdAt: data.createdAt,
          createdBy: data.createdBy,
          isOwn: data.isOwn
        });
      });

      newSocket.on("instanceClosed", () => {
        pushMessages({
          id: "10000",
          text: "Chat instance closed",
          createdById: "1",
          createdAt: new Date(),
          createdBy: "Admin",
          isOwn: false,
        });
        set({
          isChatFormVisible: false,
        });
      });
    });
  }
}

export default setupSocketAction;
