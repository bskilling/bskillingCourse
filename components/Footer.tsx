// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className="sm:mt-10">
      <div className="bg-footerBg h-20 w-full"></div>
      <div className="container mx-auto px-6 lg:px-20 mt-10">
        <div className="flex gap-4">
          <div className="w-full md:w-1/2 lg:w-1/5 mb-6">
            <h5 className="text-lg font-semibold mb-4">CONTACT</h5>
            <p className="text-sm">
              Uma Shree Dream World, Unit 2, B-block, 4th Floor, Kudlu Gate,
              Hosur Main Road, Bangalore - 560068, Karnataka, INDIA
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 mb-6">
            <h5 className="text-lg font-semibold mb-4">COMPANY</h5>
            <ul className="text-sm space-y-2">
              <Link href="/about"><li className='text-textColor'>About Us</li></Link>
              <Link href="/blog"><li className='text-textColor'>Blog</li></Link>
              <Link href="/contact"><li className='text-textColor'>Contact</li></Link>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 mb-6">
            <h5 className="text-lg font-semibold mb-4">PROGRAMS</h5>
            <ul className="text-sm space-y-2">
              <Link href="#"><li className='text-textColor'>Gen AI</li></Link>
              <Link href="#"><li className='text-textColor'>Cloud Engineering</li></Link>
              <Link href="#"><li className='text-textColor'>Project Management</li></Link>
              <Link href="#"><li className='text-textColor'>Professional (PMP)</li></Link>
              <Link href="#"><li className='text-textColor'>Prince2</li></Link>
              <Link href="#"><li className='text-textColor'>SAP Business Technology Platform (BTP)</li></Link>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 mb-6">
            <h5 className="text-lg font-semibold mb-4">SUPPORT</h5>
            <ul className="text-sm space-y-2">
              <li>Sales Inquiries: support@bskilling.com</li>
              <li>+91-9886235801</li>
              <li>Grievances: grievanceofficer@bskilling.com</li>
              <li>+91-9720602665</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 mb-6">
            <h5 className="text-lg font-semibold mb-4">MOBILE</h5>
            <div className="flex flex-col gap-4">
              <Link href="https://apps.apple.com/eg/app/bskilling/id6445943298" target="_blank">
                <button className="bg-black text-white p-2 px-4 rounded-lg">
                  App Store
                </button>
              </Link>

              <Link href="https://play.google.com/store/apps/details?id=com.melimu.app.bskilling&hl=en_IN&gl=US" target="_blank">
                <button className="bg-black text-white p-2 px-4 rounded-lg">
                  Google Play
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-borderColor mt-6 pt-6 text-center text-sm">
        <div className='bg-white w-full'>
          <div className="flex justify-between items-center px-16 py-4 max-w-screen-xl mx-auto">
            <div className="flex items-center space-x-4">
              <div>
                <img
                  src="/logo.png"
                  className="lg:w-[100px] h-[30px]"
                  alt="bskilling"
                />
              </div>
              <div className="flex items-center space-x-4 pl-4 border-l border-borderColor">
                <Link
                  style={{ textDecoration: "none" }}
                  href="/" className='text-footerText'>Home</Link>
                <Link
                  style={{ textDecoration: "none" }}
                  className="no-underline text-footerText"
                  href={"/privacy"}
                >Privacy</Link>
                <Link
                  style={{ textDecoration: "none" }}
                  href={"/Termsofuse"} className='text-footerText no-underline'>Terms</Link>
                <Link
                  style={{ textDecoration: "none" }}
                  href="#" className='text-footerText'>Sitemap</Link>
                <Link
                  style={{ textDecoration: "none" }}
                  href="#" className='text-footerText'>Purchase</Link>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
        </div>

        <div className='bg-gray w-full mt-6'>
          <p className="text-footerText text-center mx-auto max-w-screen-xl py-6">
            Copyright Bskilling © 2024. All Rights Reserved. Designed by Stimulus Research Services
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
