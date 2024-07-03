import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className=" contact w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form method="post" action="https://getform.io/f/zazkkxmb" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-pink-600 text-gray-300">Contact</p>
          {/* Submit the form below or shoot me an email - parekhkhushi26@gmail.com */}
          <p className="text-gray-300 py-4">Submit the form below or shoot me an email - parekhkhushi26@gmail.com</p>
        </div>
        <input type="text" className="bg-[#ccd6f6] p-1" placeholder="Name" name="name" />
        <input type="email" className="bg-[#ccd6f6] my-4 p-2" placeholder="Email" name="email" />
        <textarea className="bg-[#ccd6f6] p-1" rows="10" placeholder="Message"></textarea>
        <button type="submit" className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
