// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/locations", label: "Locations" },
    { href: "/promotions", label: "Promotions" },
  ];

  return (
    <header className="w-full px-3 lg:px-6">
      <div
        className="py-2 lg:py-3.5 px-4 lg:px-6 container rounded-full"
        style={{ boxShadow: "#0000000d 0px 5px 20px 0px" }}
      >
        <div className="flex items-center justify-between gap-5">
          <Link to="/" className="shrink-0">
            <img
              src="/assets/logo.jpg"
              alt="OneSource Mart"
              className="w-30 lg:w-36"
              loading="eager"
            />
          </Link>

          {/* Desktop Menu */}
          <nav
            className="hidden md:flex md:space-x-7 py-3 px-6 border border-[#cccccc80] rounded-full"
            style={{ boxShadow: "#0000000d 3px 3px 10px 0px" }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm transition-all duration-200 px-3 py-1.5 rounded-full relative ${
                    isActive
                      ? "text-brand-red font-semibold bg-red-50"
                      : "text-gray-600 hover:text-brand-red hover:bg-red-50/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 size-1.5 bg-brand-red rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          <Button
            asChild
            className="lg:flex hidden bg-brand-red/80 hover:bg-brand-red text-white hover:text-white px-6 py-5"
          >
            <Link to="/contact"> Say Hi to us! </Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="size-10">
              <Menu className="size-6" />
              <span className="sr-only">Open menu</span>
            </Button>
            {/* <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="size-10">
                  <Menu className="size-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-white/95 backdrop-blur-sm"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-bold text-gray-800">
                      Menu
                    </span>
                  </div>
                  <nav className="flex flex-col space-y-6">
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.href;
                      return (
                        <Link
                          key={link.label}
                          to={link.href}
                          className={`text-lg transition-all duration-200 font-medium py-3 px-4 rounded-lg relative flex items-center ${
                            isActive
                              ? "text-brand-red font-bold bg-red-50"
                              : "text-gray-600 hover:text-brand-red hover:bg-red-50/50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {isActive && (
                            <div className="mr-2 size-2 bg-brand-red rounded-full"></div>
                          )}
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </SheetContent>
            </Sheet> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
