import { KeyboardEventHandler } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa';
import useChat from '../zustand';

interface IChatFormValue {
  text: string;
}

const ChatForm = () => {
  const { socket, leadInfo, pushMessages, sendMessage } = useChat();
  const { control, handleSubmit, setValue } = useForm<IChatFormValue>({
    defaultValues: {
      text: '',
    },
  });

  const submitHandler = handleSubmit(data => {
    const text = data.text.trim();
    if (socket && text && leadInfo) {
      sendMessage({
        text,
        createdAt: new Date(),
      });
      setValue('text', '');
    }
  });

  const onEnterClick: KeyboardEventHandler = event => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      submitHandler();
    }
  };

  return (
    <div className="flex space-x-2 px-4 py-4">
      <Controller
        control={control}
        name="text"
        render={({ field }) => (
          <input
            type="text"
            className="flex-1 text-sm"
            placeholder="Type here..."
            onChange={field.onChange}
            value={field.value || ''}
            onKeyDown={onEnterClick}
          />
        )}
      />
      <button
        className="flex items-center justify-center text-buttonBlue  rounded-full"
        onClick={submitHandler}
      >
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default ChatForm;
