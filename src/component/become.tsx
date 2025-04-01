import { AiOutlineRight } from "react-icons/ai";

const Become = () => {
  return (
    <>
      <section className="relative z-[1000] -mt-8">
        <div className="flex gap-8 justify-center">
          <div className="flex px-8 bg-white py-8 rounded-sm shadow-xl gap-4">
            <p>Become a devop</p>
            <div className="flex gap-1 justify-center">
              <p className="text-buttonBlue cursor-pointer">Know More</p>
              <div className="mt-[7px]">
                <AiOutlineRight color="blue" />
              </div>
            </div>
          </div>
          <div className="flex px-8 py-8  bg-white rounded-sm shadow-xl gap-4">
            <p>Become a devop</p>
            <div className="flex gap-1 justify-center">
              <p className="text-buttonBlue cursor-pointer">Know More</p>
              <div className="mt-[7px]">
                <AiOutlineRight color="blue" />
              </div>
            </div>
          </div>
          <div className="flex px-8 py-8 bg-white rounded-sm shadow-xl gap-4">
            <p>Become a devop</p>
            <div className="flex gap-1 justify-center">
              <p className="text-buttonBlue cursor-pointer">Know More</p>
              <div className="mt-[7px]">
                <AiOutlineRight color="blue" />
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </>
  );
};

export default Become;
