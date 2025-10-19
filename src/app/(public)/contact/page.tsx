import ContactForm from "@/components/modules/Contact/ContactForm";
import { Metadata } from "next";
import Link from "next/link";

import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export const metadata: Metadata = {
  title: "Contact | Get in Touch with Sultan Mahmud",
  description:
    "Have a project idea or collaboration in mind? Reach out through the contact form or email me directly. Let’s discuss how we can work together to build something impactful.",
};

const ContactPage = () => {
  return (
    <div className="pt-30">
        <div className="category_top bg-gray-100 py-4 md:py-6 mb-5">
        <div className="main-container">
          <div className="text-[#1F1C1466] text-sm font-semibold flex items-center gap-1">
            <span className="text-xl"><GoHome /></span>
            <Link href={`/`} className="hover:text-primary">Home</Link>
            <span><IoIosArrowForward /></span>
            <Link href={`/contact`} className="text-primary">Contact</Link>
          </div>
        </div>
      </div>
        <ContactForm></ContactForm>
    </div>
  );
};

export default ContactPage;
