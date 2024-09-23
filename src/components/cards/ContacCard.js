import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { XSmallTitle } from "../titles";
import ContactCardPTag from "../paragraphs/ContactCardPTag";

function ContactCard({ phone, fax, email }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      <div className="w-full max-w-xs p-4 bg-white shadow-lg rounded-lg text-center relative">
        <div className="absolute inset-x-0 top-0 h-2 bg-red-500"></div>
        <div className="pt-0 pb-3">
          <XSmallTitle>Contact Information</XSmallTitle>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <PhoneIcon className="w-5 h-5 text-gray-500" />
          <ContactCardPTag>{phone}</ContactCardPTag>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <DocumentTextIcon className="w-5 h-5 text-gray-500" />{" "}
          <ContactCardPTag>{fax}</ContactCardPTag>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <EnvelopeIcon className="w-5 h-5 text-gray-500" />
          <ContactCardPTag>{email}</ContactCardPTag>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
