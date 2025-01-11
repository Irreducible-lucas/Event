import React from "react";
import { footerData } from "../constant";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b1f24] text-white py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-4">
        {/* Column: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {footerData.company.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="hover:text-gray-300">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column: Features */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="space-y-2">
            {footerData.features.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="hover:text-gray-300">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column: Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2">
            {footerData.solutions.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="hover:text-gray-300">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column: Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {footerData.resources.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="hover:text-gray-300">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column: Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic text-gray-400 space-y-2">
            {footerData.contact.address.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <p>
              Tel:{" "}
              <a
                href={footerData.contact.telHref}
                className="hover:text-gray-300"
              >
                {footerData.contact.phone}
              </a>
            </p>
          </address>
          <a
            href={footerData.contact.officeLocations}
            className="text-blue-500 hover:underline"
          >
            Office Locations
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
