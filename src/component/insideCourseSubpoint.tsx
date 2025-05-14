interface propFormat {
  resources: string[];
}
const InsideCourse: React.FC<propFormat> = ({ resources }) => {
  return (
    <div className="flex flex-col pt-8 items-end">
      <p className="_pt-8 pb-3 text-xl md:text-right  text-left font-semibold">Resources</p>

      <div className="flex md:grid grid-cols-1 place-content-end flex-wrap justify-end items-end gap-5">
        {resources.map((item, index) => (
          <div
            key={index}
            className="border rounded-md w-fit border-buttonBlue text-center px-2 py-2 text-buttonBlue"
          >
            {item}
          </div>
        ))}
      </div>
      {/* <div className="flex items-start md:justify-end flex-wrap md:flex-row flex-col gap-x-5 gap-y-6 pt-4 ">
        <div className="flex gap-3  justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/engaging.png" className="w-7 h-7" alt="" />
          </div>
          <div className="text-sm">
            Engaging <br /> Lectures
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="w-[100px] h-[100px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            Interactive <br /> Quizzes
          </div>
          <div className="text-sm"></div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/knowledge.png" className="w-7 h-7" alt="" />
          </div>
          <div className="text-sm">
            Practical <br /> Exercises{" "}
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/skill.png" className="w-7 h-7" alt="" />
          </div>
          <div className="text-sm">
            Industry <br /> Project
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/forum.png" className="w-7 h-7" alt="" />
          </div>
          <div className="text-sm">
            Guidance <br /> Forum
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default InsideCourse;
