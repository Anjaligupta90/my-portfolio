import React, { useState } from 'react';
import { FiMessageCircle } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add any action you want to perform on submit
    // For example, you can log the form data to the console
    console.log('Form submitted:', formData);

    // Show confirmation message
    setIsSubmitted(true);

    // Reset the form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide the confirmation message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contectus_form_container my-0 bg-rose-200" id="contact">
      <div className="container mx-auto p-8">
        <h1 className="contactus_heading text-5xl text-red-600 font-bold">Contact Me</h1>
        <h3 className="contactus_subheading text-3xl text-gray-600 font-medium">Questions, Thoughts, or Just want to say hello?</h3>
        <div className="contact_formcontainer mt-8 flex justify-center">
          <form onSubmit={handleSubmit} className="form flex flex-col gap-6 w-full max-w-lg">
            <input type="text" name="name" placeholder="Enter your name..." value={formData.name} onChange={handleChange} className="formfield p-4 border rounded" required />
            <input type="email" name="email" placeholder="Enter your email..." value={formData.email} onChange={handleChange} className="formfield p-4 border rounded" required />
            <input type="text" name="subject" placeholder="Enter your subject..." value={formData.subject} onChange={handleChange} className="formfield p-4 border rounded" required />
            <textarea name="message" rows="5" placeholder="Enter your message..." value={formData.message} onChange={handleChange} className="formfield p-4 border rounded" required></textarea>
            <button type="submit" className="cnbtn bg-red-500 text-white py-2 px-4 rounded relative">Send Message <i className="submit_icon absolute left-[330px] top-[13px]"><FiMessageCircle /></i></button>
          </form>
        </div>
        {isSubmitted && (
          <div className="mt-4 text-green-600 font-semibold">
            Your message has been sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
