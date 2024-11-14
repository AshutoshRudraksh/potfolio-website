import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form action="https://formspree.io/f/mpwzrkjp" method="POST">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" name="name" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea name="message" className="w-full p-2 border rounded" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </section>
  );
}

export default Contact;
