import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="w-full px-3 lg:px-6">
      <div className="container p-5 lg:p-12.5">
        <div className="flex flex-col items-start gap-10 h-min w-full">
          <Link to="/" className="shrink-0">
            <img
              src="/assets/logo.jpg"
              alt="OneSource Mart"
              className="w-45"
              loading="eager"
            />
          </Link>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-2.5 place-content-around w-full grid-cols-1">
            {/* Footer Links */}
            <div className="lg:col-span-3 grid lg:grid-cols-3 gap-10 lg:gap-2.5 items-start">
              <div className="block space-y-4">
                <p className="font-medium text-[22px] text-text-black">
                  Company
                </p>

                <ul className="space-y-1.5 [&_a]:text-text-black [&_a]:hover:text-brand-red [&_a]:transition-colors text-base">
                  <li>
                    <a href="#" className="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Membership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Get Support
                    </a>
                  </li>
                </ul>
              </div>

              <div className="block space-y-4">
                <p className="font-medium text-[22px] text-text-black">
                  Products
                </p>

                <ul className="space-y-1.5 [&_a]:text-text-black [&_a]:hover:text-brand-red [&_a]:transition-colors text-base">
                  <li>
                    <a href="#" className="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Membership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Get Support
                    </a>
                  </li>
                </ul>
              </div>

              <div className="block space-y-4">
                <p className="font-medium text-[22px] text-text-black">
                  Account
                </p>

                <ul className="space-y-1.5 [&_a]:text-text-black [&_a]:hover:text-brand-red [&_a]:transition-colors text-base">
                  <li>
                    <a href="#" className="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Membership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2 block space-y-4 w-full">
              <p className="font-medium text-lg lg:text-[22px] text-text-black">
                Subscribe To Our Weekly Newsletter To Get The Latest Design
                Updates
              </p>

              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Type to email"
                  className="rounded-full py-7 pl-5 pr-40" 
                />

                <Button className=" bg-brand-red/80 hover:bg-brand-red text-white hover:text-white px-6 py-5 absolute right-2 top-2 bottom-5">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>

          {/* Copyrights */}
          <div className="border-t-[1.5px] border-gray-50 pt-10 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm lg:text-base text-[#555]">
              <div className="flex items-center space-x-2.5">
                <a href="#" className="hover:text-brand-red transition-colors">
                  FAQs
                </a>
                <hr className="bg-[#555] w-6 h-0.5" />
                <a href="#" className="hover:text-brand-red transition-colors">
                  Privacy Policy
                </a>
                <hr className="bg-[#555] w-6 h-0.5" />
                <a href="#" className="hover:text-brand-red transition-colors">
                  Terms of Service
                </a>
              </div>

              <p>
                Copyright &copy; {new Date().getFullYear()} OneSource Mart - All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
