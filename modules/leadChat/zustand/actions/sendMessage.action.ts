import ICreateActionWithParam from "../types/ICreateActionWithParam";
import ISendMessagesActionPayload from "../types/ISendMessagesActionPayload";

const sendMessagesAction: ICreateActionWithParam<ISendMessagesActionPayload> = (_, get) => (param) => {
  const { socket, leadInfo, pushMessages } = get();

  if (socket && leadInfo) {
    const message = {
      instanceId: leadInfo.instanceId,
      userId: leadInfo.userId,
      createdAt: param.createdAt,
      response: param.text,
      tenantId: "2",
      room: "bpo",
    };
    socket.emit("sendTo", message,
      (responseId: string) => {
        pushMessages({
          id: responseId,
          text: param.text,
          createdAt: message.createdAt,
          createdById: leadInfo.userId,
          createdBy: "You",
          isOwn: true,
        });
      }
    );
  }
}

export default sendMessagesAction;
