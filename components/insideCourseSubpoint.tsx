const InsideCourse = () => {
  return (
    <>
      <p className="_pt-8 pb-3 text-xl md:text-right  text-left font-semibold">
        Resources
      </p>
      <div className="flex items-start md:justify-end flex-wrap md:flex-row flex-col gap-x-5 gap-y-6 pt-4 ">
        <div className="flex gap-3  justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/engaging.png" className="w-7 h-7" alt="" />
          </div>
          <div className="text-sm">
            Engaging <br /> Lectures
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/quiz.png" className="w-7 h-7" alt="" />
          </div>
          <div className="text-sm">
            Interactive <br /> Quizzes
          </div>
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
      </div>
    </>
  );
};
export default InsideCourse;
