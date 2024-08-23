// components/LandingFooter.js
import Image from 'next/image';
import Link from 'next/link';



const LandingFooter = () => {
  return (
    <footer className="bg-black sm:mt-10 text-white">
      <div className='p-6'>
        <div className="container mx-auto px-6 lg:px-20">
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
                <Link href="/about"><li className='text-white mb-2'>About Us</li></Link>
                <Link href="/blog"><li className='text-white mb-2'>Blog</li></Link>
                <Link href="/contact"><li className='text-white mb-2'>Contact</li></Link>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mb-6">
              <h5 className="text-lg font-semibold mb-4">PROGRAMS</h5>
              <ul className="text-sm space-y-2">
                <Link href="#"><li className='text-white mb-2'>Gen AI</li></Link>
                <Link href="#"><li className='text-white mb-2'>Cloud Engineering</li></Link>
                <Link href="#"><li className='text-white mb-2'>Project Management</li></Link>
                <Link href="#"><li className='text-white mb-2'>Professional (PMP)</li></Link>
                <Link href="#"><li className='text-white mb-2'>Prince2</li></Link>
                <Link href="#"><li className='text-white mb-2'>SAP Business Technology Platform (BTP)</li></Link>
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
                <button className="bg-googleBtn text-white p-2 rounded-lg">
                  App Store
                </button>
                <button className="bg-googleBtn text-white p-2 rounded-lg">
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-6 pt-6 text-center text-sm">
          <div className='w-full'>
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
                  <Link href="#" className='text-white'>Home</Link>
                  <Link href="#" className='text-white'>Privacy</Link>
                  <Link href="#" className='text-white'>Terms</Link>
                  <Link href="#" className='text-white'>Sitemap</Link>
                  <Link href="#" className='text-white'>Purchase</Link>
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

          <div className='w-full mt-6'>
            <p className="text-white text-center mx-auto max-w-screen-xl py-6">
              Copyright Bskilling © 2024. All Rights Reserved. Designed by Stimulus Research Services
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default LandingFooter;
