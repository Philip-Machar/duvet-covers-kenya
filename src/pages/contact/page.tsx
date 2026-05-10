import { useState } from 'react';
import TopBar from '@/components/feature/TopBar';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'message') setCharCount(value.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (charCount > 500) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setCharCount(0);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="px-4 md:px-6 lg:px-10 py-10 md:py-16 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Have questions about our bedding products? We are here to help you sleep better.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-6 lg:px-10 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 mb-3">
                <i className="ri-phone-line text-primary text-lg"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-sm text-gray-500 mt-1">+254 712 345 678</p>
              <p className="text-sm text-gray-500">Mon - Sat: 8am - 6pm EAT</p>
            </div>

            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 mb-3">
                <i className="ri-mail-line text-primary text-lg"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-sm text-gray-500 mt-1">info@duvetcoverskenya.co.ke</p>
              <p className="text-sm text-gray-500">support@duvetcoverskenya.co.ke</p>
            </div>

            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 mb-3">
                <i className="ri-map-pin-line text-primary text-lg"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Showroom</h3>
              <p className="text-sm text-gray-500 mt-1">Westgate Shopping Mall, 2nd Floor</p>
              <p className="text-sm text-gray-500">Mwanzi Road, Westlands</p>
              <p className="text-sm text-gray-500">Nairobi, Kenya</p>
            </div>

            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 mb-3">
                <i className="ri-whatsapp-line text-primary text-lg"></i>
              </div>
              <h3 className="font-semibold text-gray-900">WhatsApp</h3>
              <p className="text-sm text-gray-500 mt-1">+254 712 345 678</p>
              <p className="text-sm text-gray-500">Quick replies during business hours</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-lg p-4 md:p-6 lg:p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Send us a message</h2>
              <p className="text-sm text-gray-500 mb-6">Fill out the form below and we will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-50 mb-4">
                    <i className="ri-check-line text-green-600 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Message Sent!</h3>
                  <p className="text-sm text-gray-500 mt-1">We will get back to you soon.</p>
                </div>
              ) : (
                <form id="contact-form" data-readdy-form action="https://readdy.ai/api/form/d7virfvev6haf7a4lclg" method="POST" onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="order-status">Order Status</option>
                        <option value="returns">Returns & Refunds</option>
                        <option value="wholesale">Wholesale / Bulk Orders</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary resize-none"
                      placeholder="How can we help you?"
                    />
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-400">Max 500 characters</p>
                      <p className={`text-xs ${charCount > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                        {charCount}/500
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={charCount > 500}
                    className="w-full py-3 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <i className="ri-send-plane-line"></i>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="px-4 md:px-6 lg:px-10 max-w-7xl mx-auto pb-10">
        <div className="rounded-lg overflow-hidden border border-gray-100 aspect-[21/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8523!2d36.8023!3d-1.2610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9c7b%3A0x5e1c6b5b5b5b5b5b!2sWestgate%20Shopping%20Mall!5e0!3m2!1sen!2ske!4v1600000000000!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Duvet Covers Kenya Showroom Location"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}