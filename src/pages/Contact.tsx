import ContactForm from "./ContactForm";
import { Clock, Mail, Phone } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";

const Contact = () => {
  // const branches = [
  //   {
  //     name: "Store 1",
  //     address: "123 ABC Road, Lagos",
  //     phone: "+234 801 234 5678",
  //     email: "store1@onesourcemart.com",
  //     hours: "8am - 9pm Daily",
  //   },
  //   {
  //     name: "Store 2",
  //     address: "456 DEF Street, Lagos",
  //     phone: "+234 802 345 6789",
  //     email: "store2@onesourcemart.com",
  //     hours: "9am - 10pm Daily",
  //   },
  //   {
  //     name: "Store 3",
  //     address: "789 GHI Avenue, Lagos",
  //     phone: "+234 803 456 7890",
  //     email: "store3@onesourcemart.com",
  //     hours: "8am - 9pm Daily",
  //   },
  // ];

  return (
    <section className="w-full px-3 lg:px-6">
      <div className="grid lg:grid-cols-2 container px-4 py-7.5 lg:p-10 gap-15">
        {/* Contact Details */}
        <div className="space-y-12.5">
          <div className="space-y-4 w-full">
            <h2 className="font-semibold text-text-black text-3xl lg:text-[42px]">
              OneSource Mart Cares: Let’s Connect
            </h2>
            <p className="text-base lg:text-lg text-[#555]">
              Questions? Need help? Reach out, our team’s here for you, always.
            </p>
          </div>

          <div className="border-t border-gray-50 pt-12.5 flex flex-col lg:flex-row items-start gap-5 lg:gap-2.5">
            {/* Office Hours */}
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="shrink-0 size-12 bg-linear-to-r from-red-400 to-red-900 rounded-full flex items-center justify-center">
                <Clock className="size-6 text-white" />
              </div>

              <div className="space-y-[5px]">
                <h3 className="font-medium text-text-black text-base">
                  Opening Hours
                </h3>
                <p className="text-[#444444] text-sm">8am - 9pm Daily</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="shrink-0 size-12 bg-linear-to-r from-red-400 to-red-900 rounded-full flex items-center justify-center">
                <Mail className="size-6 text-white" />
              </div>

              <div className="space-y-[5px]">
                <h3 className="font-medium text-text-black text-base">
                  Email Us
                </h3>
                <a
                  href="mailto:contact@onesourcemart.com"
                  className="space-y-1 text-[#444444] text-sm hover:text-brand-red hover:underline"
                >
                  contact@onesourcemart.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="shrink-0 size-12 bg-linear-to-r from-red-400 to-red-900 rounded-full flex items-center justify-center">
                <Phone className="size-6 text-white" />
              </div>

              <div className="space-y-[5px]">
                <h3 className="font-medium text-text-black text-base">
                  Call Us
                </h3>
                <div className="flex flex-col space-y-1 text-[#444444] text-sm *:hover:text-brand-red *:hover:underline">
                  <a href="tel:+234 800 123 4567">+(234) 800 123 4567</a>
                  <a href="tel:+234 800 123 4568">+(234) 800 123 4568</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#f6f6f6] p-4 lg:p-7 rounded-[20px] border border-gray-50">
          <h4 className="text-2xl lg:text-3xl text-text-black mb-4 font-medium">
            Send Us Your Query
          </h4>
          <ContactForm />
        </div>
      </div>

      {/* Store Locations Section */}
      {/* <div className="mt-8 container p-6 lg:p-12.5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Store Locations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find the OneSource Mart store nearest to you
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full mt-12">
          {branches.map((branch) => (
            <AccordionItem
              value={branch.name}
              key={branch.name}
              className="border border-gray-200 rounded-lg mb-4"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-lg">
                <span className="text-lg font-semibold">{branch.name}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Address
                      </h4>
                      <p className="text-gray-600">{branch.address}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Phone
                      </h4>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-brand-red hover:underline font-medium"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Email
                      </h4>
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-brand-red hover:underline font-medium"
                      >
                        {branch.email}
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Hours
                      </h4>
                      <p className="text-gray-600">{branch.hours}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  >
                    Get Directions
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div> */}
    </section>
  );
};

export default Contact;
