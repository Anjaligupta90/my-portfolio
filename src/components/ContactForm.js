import React from 'react';

const ContactForm = () => {
  return (
    <div className="contectus_form_container bg-gray-200 my-16" id="contact">
      <div className="container mx-auto p-8">
        <h1 className="contactus_heading text-5xl text-red-600 font-bold">Contact Me</h1>
        <h3 className="contactus_subheading text-3xl text-gray-600 font-medium">Questions, Thoughts, or Just want to say hello?</h3>
        <div className="contact_formcontainer mt-8 flex justify-center">
          <form action="" className="form flex flex-col gap-6 w-full max-w-lg">
            <input type="text" name="name" placeholder="Enter your name..." className="formfield p-4 border rounded" />
            <input type="email" name="email" placeholder="Enter your email..." className="formfield p-4 border rounded" />
            <input type="text" name="subject" placeholder="Enter your subject..." className="formfield p-4 border rounded" />
            <textarea name="message" rows="5" placeholder="Enter your message..." className="formfield p-4 border rounded"></textarea>
            <button className="btn bg-red-500 text-white py-2 px-4 rounded">Send Message <i className="submit_icon fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;