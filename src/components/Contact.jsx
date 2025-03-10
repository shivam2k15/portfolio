import React from "react";

const Contact = () => {
  const contact = {
    address: "Dharnidharpur, Post-Sadar, Jaunpur, Uttar Pradesh, India, 222001",
    email: "shivamkumar2k16k@gmail.com",
    phone: "+918318942503",
  };
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{contact.address}</p>
        <p className="my-4">{contact.phone}</p>
        <a href="#" className="border-b">
          {contact.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
