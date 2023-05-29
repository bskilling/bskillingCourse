import Image from "next/image";

const About = () => {
  return (
    <>
      <section className=" bg-buttonBlue">
        <div
          className="md:container  py-8 md:mx-auto
            "
        >
          <div className="text-white px-5 md:px-0">
            <div>
              <p className=" text-4xl tracking-wide mb-10 text-center ">
                Who We Are
              </p>
            </div>
            <div className="my-2 text-base leading-relaxed ">
              <p>
                bSkilling is a pioneer in technology training and we focus on
                offering top-notch IT and fintech education and skill
                development programs. We work hard to help people and
                organizations with the information and skills necessary to
                prosper in the quickly changing digital landscape. We aim and
                deliver excellence in all fields. We cater to a broad spectrum
                of clientele including people, professionals, and companies from
                various industries, who are served by our all-inclusive
                training solutions. Founded in 2023, bSkilling focuses on the
                B2C market and aims to educate 50,000+ students in its first
                year of operations. The company offers over 100 courses on its
                website, taught by over 50 experienced trainers. The courses
                cover a wide range of topics, including IT, business, and social
                media. Here are some of the ways that bSkilling is revamping the
                EdTech industry.
              </p>
            </div>

            <div className="my-5 text-base">
              <p>
                <span className="font-semibold">
                  {" "}
                  Offering a wide range of courses :
                </span>{" "}
                bSkilling offers courses on a wide range of topics, including
                IT, business, social media, and many more. This allows students
                to find the courses that are right for them and develop the
                skills they need to succeed in their chosen field.
              </p>
            </div>

            <div className="my-5 text-base leading-relaxed ">
              <p>
                <span className="font-semibold">
                  {" "}
                  Providing high-quality education :
                </span>{" "}
                bSkilling&#39;s courses are taught by experienced trainers who
                are experts in their field. This ensures that students are
                learning from the best and getting the most out of their
                education.
              </p>
            </div>

            <div className="my-5 leading-relaxed text-base">
              <p>
                <span className="font-semibold">
                  {" "}
                  Making education accessible to everyone :
                </span>{" "}
                bSkilling offers its courses at an affordable price and provides
                financial aid to students who need it. This makes education
                accessible to everyone, regardless of their financial
                background.
              </p>
            </div>
            <div className="my-5 leading-relaxed text-base">
              <p>
                <span className="font-semibold">
                  {" "}
                  Offering flexible learning options :
                </span>{" "}
                bSkilling offers its courses online, which allows students to
                learn at their own pace and from anywhere in the world. This
                makes education more convenient and accessible for students.
              </p>
            </div>
            <div className="my-5 leading-relaxed text-base">
              <p>
                bSkilling is making a big impact on the EdTech industry. The
                company is committed to providing high-quality education at an
                affordable price. bSkilling is changing the way people learn and
                helping students develop the skills they need to succeed in
                today&#39;s economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="  pt-12   text-black">
        <h1 className="text-4xl tracking-wide mb-10 text-center  ">
          Core Values
        </h1>

        <div className="lg:container mb-10  mx-auto">
          <div className="flex flex-col  md:flex-row gap-5 justify-center  items-center">
            <div className="p-4 lg:w-[400px] ">
              <div className="h-full rounded-lg ">
                <div className="h-52 w-full flex justify-center relative">
                  <div className="w-[300px] h-full relative ">
                    <img
                      className="absolute inset-0 object-cover"
                      alt=""
                      src="/aboutus/passion.jpg"
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-0 text-white  flex items-center justify-center">
                    <p className=" text-3xl font-semibold text-white">
                      Passion
                    </p>
                  </div>
                </div>
                <div className=" text-center ">
                  <p className="leading-relaxed  md:px-5 mb-3">
                    A driving force behind our continuous innovation and value
                    creation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-[400px] ">
              <div className="h-full flex flex-col md:flex-col-reverse rounded-lg ">
                <div className="h-52 w-full flex justify-center relative">
                  <div className="w-[300px] h-full relative">
                    <img
                      className="absolute  inset-0 object-cover"
                      alt=""
                      src="/aboutus/expertise.jpg"
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                    <p className=" text-3xl font-semibold text-white">
                      Expertise
                    </p>
                  </div>
                </div>
                <div className="mt-5 text-center ">
                  <p className="leading-relaxed md:px-5 mb-3">
                    A blend of experiences from the past and thought leadership
                    focused on future
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-[400px] ">
              <div className="h-full rounded-lg ">
                <div className="h-44 w-full flex justify-center relative">
                  <div className="w-[300px] h-full relative">
                    <img
                      className="absolute inset-0 object-cover"
                      alt=""
                      src="/aboutus/empathy.jpg"
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-0   flex items-center justify-center">
                    <p className=" text-3xl font-semibold  text-white">
                      Empathy
                    </p>
                  </div>
                </div>
                <div className="mt-5 text-center ">
                  <p className="leading-relaxed md:px-5 mb-3">
                    A customer-first approach that enables us to understand
                    businesses and people better than most
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray py-10">
        <h2 className="text-4xl tracking-wide mb-10 text-center">Leadership</h2>
        <div className="flex md:container md:mx-auto items-center">
          {/* <div className="w-[50%]">
            <img src="/common.jpg" alt="CEO Image" className=" mr-8" />
          </div> */}
          <div className="flex-1 px-3">
            <p className="mt-1">
              Meet the visionary leader behind our company—our CEO, Mr
              Sivasarathy! With 25 years of experience in the EdTech industry,
              Siva has seen it all. From the early days of online education to
              the latest advancements in artificial intelligence, he has been at
              the forefront of it all. Before establishing SFJ Business
              Solutions in 2007, Mr Sivasarathy served as an SAP consultant for
              TCS, where he gained invaluable business and technological
              experience. This experience has played a significant role in the
              development and success of our business.
            </p>
            <p className="mt-2">
              With a deep understanding of the IT industry, Mr Sivasarthy has a
              unique perspective on the challenges and opportunities facing
              EdTech companies today. With this knowledge, he has guided SFJ
              Business Solutions to develop cutting-edge solutions that are
              transforming the way people learn. His enthusiasm for technology
              and education inspires our team to explore new directions in
              EdTech. Our business has expanded to become a market leader with a
              reputation for innovation and excellence under his leadership.
              Join us on our mission to revolutionize education and experience
              the difference that comes with having a CEO who truly understands
              the industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
