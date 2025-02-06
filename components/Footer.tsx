import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="sm:mt-10 bg-black text-white">
      <div className="bg-footerBg h-20 w-full"></div>
      <div className="container mx-auto px-6 lg:px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="w-full mb-6">
            <h5 className="text-lg font-semibold mb-4">CONTACT</h5>
            <p className="text-sm">
              B-Block 4th Floor, COMMERCIAL BUILDING, UMA SREE DREAM WORLD, Unit
              -2, Hosur Rd, Kudlu Gate, Industrial Layout, Garvebhavi Palya,
              Bengaluru, Karnataka 560068
              {/* 1, 292, Morappur, Harun main road, Obilinyakkanpatti, Morasaptti,
              Dharmapuri, Tamill Nadu, 635305 */}
            </p>
          </div>
          <div className="w-full  mb-6">
            <h5 className="text-lg font-semibold mb-4">COMPANY</h5>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/about" className="text-textColor">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-textColor">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contactpolicy" className="text-textColor">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full  mb-6">
            <h5 className="text-lg font-semibold mb-4">PROGRAMS</h5>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href={`/courses/course-details/66b1cb24f86931fdf7712eb0`}
                  className="text-textColor mb-2"
                >
                  Gen AI
                </Link>
              </li>
              <li>
                <Link
                  href={`/courses/course-details/66ab29e5637a3684c72041f9`}
                  className="text-textColor mb-2"
                >
                  Cloud Engineering
                </Link>
              </li>
              <li>
                <Link
                  href={`/courses/course-details/66ab4dbff86931fdf76f5a30`}
                  className="text-textColor mb-2"
                >
                  Project Management
                </Link>
              </li>
              <li>
                <Link
                  href={`/courses/course-details/66ab4dbff86931fdf76f5a30`}
                  className="text-textColor mb-2"
                >
                  Professional (PMP)
                </Link>
              </li>
              <li>
                <Link
                  href={`/courses/course-details/66c0369af86931fdf791aeb0`}
                  className="text-textColor mb-2"
                >
                  Prince2
                </Link>
              </li>
              <li>
                <Link
                  href={`/courses/course-details/66ab348df86931fdf76f3f80`}
                  className="text-textColor mb-2"
                >
                  SAP Business Technology Platform (BTP)
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full  mb-6">
            <h5 className="text-lg font-semibold mb-4">SUPPORT</h5>
            <ul className="text-sm space-y-2">
              <li>Sales Inquiries: support@bskilling.com</li>
              <li>+91-9845348601</li>
              <li>grievanceofficer@bskilling.com</li>
              <li>+91 89519 23627</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 mb-6">
            <h5 className="text-lg font-semibold mb-4">MOBILE</h5>
            <div className="flex flex-col gap-4">
              <Link
                href="https://apps.apple.com/eg/app/bskilling/id6445943298"
                target="_blank"
                className="bg-black text-white p-2 px-4 rounded-lg flex items-center justify-center lg:justify-start"
              >
                <span>App Store</span>
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.melimu.app.bskilling&hl=en_IN&gl=US"
                target="_blank"
                className="bg-black text-white p-2 px-4 rounded-lg flex items-center justify-center lg:justify-start"
              >
                <p>Google Play</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-6 pt-6">
        <div className="bg-white w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center px-6 lg:px-16 py-4 max-w-screen-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <img
                  src="/logo.png"
                  className="lg:w-[100px] h-[30px]"
                  alt="bskilling"
                />
              </div>
              <div className="flex items-center space-x-4 pl-0 sm:pl-4 border-t sm:border-t-0 sm:border-l border-borderColor pt-4 sm:pt-0">
                <Link href="/" className="text-footerText">
                  Home
                </Link>
                <Link href="/privacy" className="text-footerText">
                  Privacy
                </Link>
                <Link href="/Termsofuse" className="text-footerText">
                  Terms
                </Link>
                <Link href="/Refundpolicy" className="text-footerText">
                  Refund
                </Link>
              </div>
            </div>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/bskillingindia/"
              >
                <img
                  src="/icon/insta.svg"
                  className="w-[20px] h-[20px]"
                  alt="Instagram"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/bskillingindia/"
              >
                <img
                  src="/icon/facebook.svg"
                  className="w-[20px] h-[20px]"
                  alt="Facebook"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/bskillingindia/"
              >
                <img
                  src="/icon/link.svg"
                  className="w-[20px] h-[20px]"
                  alt="LinkedIn"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/b_SkillingIndia"
              >
                <img
                  src="/twitter.webp"
                  className="w-[20px] h-[20px]"
                  alt="Twitter"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.pinterest.com/bskillingdigital/"
              >
                <img
                  src="/icon/pin.svg"
                  className="w-[20px] h-[20px]"
                  alt="Pinterest"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray w-full mt-6">
          <p className="text-footerText text-center mx-auto max-w-screen-xl py-6">
            Copyright ©️ BSKILLING PRIVATE LIMITED.All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
