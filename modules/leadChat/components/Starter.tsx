interface IStarterProps {
  onChatClick: () => void;
  onDropAQueryClick: () => void;
}

const Starter = (props: IStarterProps) => {
  return (
    <div className="px-5 text-sm py-8 text-center mt-1">
      <p>
        Hi. How can we help you today? <br /> Please select one of the below
        options.
      </p>

      <div className="flex mb-4 mt-10 justify-center">
        <button
          className="w-fit bg-buttonBlue text-white  px-4 py-2"
          onClick={props.onChatClick}
        >
          Chat with us
        </button>
      </div>
      <div className="flex my-4 justify-center">
        <button
          onClick={props.onDropAQueryClick}
          className="w-fit bg-buttonBlue text-white  px-4 py-2"
        >
          Drop a query
        </button>
      </div>
      <p className="mt-8 text-xs">
        Note: Chat support is available only between <br /> Monday and Friday,
        10 am to 6 pm.
      </p>
    </div>
  );
};

export default Starter;
