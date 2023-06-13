const InsideCourse = () => {
  return (
    <>
      <p className="pt-8 pb-3 text-xl md:text-left  text-center font-semibold">
        Abundant Resources
      </p>
      <div className="flex justify-between md:flex-row flex-col gap-16 pt-4 ">
        <div className="flex gap-3 justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/engaging.png" className="w-7 h-7" alt="" />
          </div>
          <div>
            Engaging <br /> Lectures
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/quiz.png" className="w-7 h-7" alt="" />
          </div>
          <div>
            Interactive <br /> Quizzes
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/knowledge.png" className="w-7 h-7" alt="" />
          </div>
          <div>
            Practical <br /> Exercises{" "}
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/skill.png" className="w-7 h-7" alt="" />
          </div>
          <div>
            Industry <br /> Project
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-[#fefaf4] border border-orange-400">
            <img src="/icon/forum.png" className="w-7 h-7" alt="" />
          </div>
          <div>
            Guidance <br /> Forum
          </div>
        </div>
      </div>
    </>
  );
};
export default InsideCourse;
