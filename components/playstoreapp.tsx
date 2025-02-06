const Playstore = () => {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: `url(${"/qebg.png"})` }}
      >
        <div className="flex justify-end items-center">
          <img src="/play.png" className="w-[50%] h-auto" alt="" />
        </div>
        <div className="flex justify-start items-center">
          <img src="/apple.png" className="w-[50%] h-auto" alt="" />
        </div>
      </section>
    </>
  );
};
export default Playstore;
