const Playstore = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${"/qebg.png"})`,
          backgroundSize: "cover",
          objectFit: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="flex justify-center">
          <div className="w-full">
            <img src="/play.png " className="w-[50%] h-[50%]" alt="" />
          </div>
          <div>
            <img src="/apple.png" className="w-[50%] h-[50%]" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Playstore;
