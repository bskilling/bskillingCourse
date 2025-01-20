interface IMessage {
  id: string;
  text: string;
  createdById: string;
  createdBy: string;
  createdAt: Date;
  isOwn: boolean;
}

export default IMessage;
