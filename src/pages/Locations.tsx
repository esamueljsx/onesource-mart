import { MapPin, Clock, Phone, Mail, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Locations = () => {
  const branches = [
    {
      name: "Store 1",
      address: "123 ABC Road, Lagos",
      phone: "+234 801 234 5678",
      email: "store1@onesourcemart.com",
      hours: "8am - 9pm Daily",
      coordinates: "6.5244,3.3792",
      manager: {
        name: "Sarah Johnson",
        position: "Store Manager",
        phone: "+234 801 234 5679",
        email: "sarah.johnson@onesourcemart.com",
        experience: "5 years",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format",
      },
    },
    {
      name: "Store 2",
      address: "456 DEF Street, Lagos",
      phone: "+234 802 345 6789",
      email: "store2@onesourcemart.com",
      hours: "9am - 10pm Daily",
      coordinates: "6.4281,3.4219",
      manager: {
        name: "Michael Adebayo",
        position: "Store Manager",
        phone: "+234 802 345 6790",
        email: "michael.adebayo@onesourcemart.com",
        experience: "7 years",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      },
    },
    {
      name: "Store 3",
      address: "789 GHI Avenue, Lagos",
      phone: "+234 803 456 7890",
      email: "store3@onesourcemart.com",
      hours: "8am - 9pm Daily",
      coordinates: "6.4654,3.4734",
      manager: {
        name: "Grace Okafor",
        position: "Store Manager",
        phone: "+234 803 456 7891",
        email: "grace.okafor@onesourcemart.com",
        experience: "4 years",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      },
    },
  ];

  return (
    <div className="w-full px-3 lg:px-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Our Store Locations
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Find the OneSource Mart store nearest to you. We're conveniently
            located across Lagos to serve you better.
          </p>
        </div>
      </div>

      <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container p-5">
        {branches.map((branch) => (
          <div
            key={branch.name}
            className="bg-gray-50/10 border-style p-6 hover:border-red-200 transition-colors duration-200"
          >
            {/* Store Header */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-linear-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {branch.name}
                </h3>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-600">{branch.hours}</p>
                </div>
              </div>
            </div>

            {/* Store Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <p className="text-sm text-gray-600">{branch.address}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <a
                  href={`tel:${branch.phone}`}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  {branch.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a
                  href={`mailto:${branch.email}`}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  {branch.email}
                </a>
              </div>
            </div>

            {/* Manager Section */}
            <div className="bg-white border border-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <img
                    src={branch.manager.image}
                    alt={branch.manager.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-linear-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="h-2 w-2 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {branch.manager.name}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {branch.manager.position}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Experience</span>
                  <span className="text-xs font-medium text-gray-700">
                    {branch.manager.experience}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium text-gray-700">
                      {branch.manager.rating}
                    </span>
                  </div>
                </div>

                <div className="flex text-xs font-medium items-center space-x-2 pt-2 *:text-[#555] *:hover:text-brand-red">
                  <a href={`tel:${branch.manager.phone}`}>
                    {branch.manager.phone}
                  </a>
                  <hr className="bg-[#555] w-6 h-0.5" />
                  <a href={`mailto:${branch.manager.email}`}>Email</a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              variant="outline"
              className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 rounded-xl"
            >
              Get Directions
            </Button>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="mt-15 container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63430.366847154626!2d3.2347074216796843!3d6.471173599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b892564b8a0d1%3A0x83a507daa6d5ca63!2sOne%20Source%20Mart!5e0!3m2!1sen!2sng!4v1761314314079!5m2!1sen!2sng"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          title="OneSource Mart Store Locations"
        ></iframe>
      </div>
    </div>
  );
};

export default Locations;
