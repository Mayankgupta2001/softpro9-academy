import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="relative bg-gradient-to-br from-[#e9f0fb] to-[#f7f4fa] min-h-screen py-16 flex items-center justify-center mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white">
           {/* Left: Visual & Info Panel  */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-br from-indigo-100/80 to-white">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Let's Get In Touch</h1>
            <p className="text-lg text-gray-600 mb-6">Reach out for quick support, project inquiries or partnership opportunities. We respond within 24h!</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                    {/* Phone Icon  */}
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M3 8a16 16 0 0 0 13 13l2-2a2 2 0 0 0-.6-3.2l-2.3-1a2 2 0 0 0-2.3.3l-1.7 1.4a12 12 0 0 1-6-6l1.4-1.7a2 2 0 0 0 .3-2.3l-1-2.3A2 2 0 0 0 5 3l-2 2z"/>
                  </svg>
                </span>
                <span className="font-medium text-gray-700">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                    {/* Email Icon  */}
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4V4zm16 0l-8 8-8-8"/>
                  </svg>
                </span>
                <span className="font-medium text-gray-700">hello@SoftPro9.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                   {/* Address Icon  */}
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 4.55 6.39 11.54 6.73 11.93a1 1 0 0 0 1.54 0C12.61 20.54 19 13.55 19 9c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </span>
                <span className="font-medium text-gray-700">123 Tech Street, Mumbai, IN</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-5">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-500 text-xs rounded-lg font-semibold">Mon-Sat: 9am-7pm</span>
              <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs rounded-lg font-semibold">Avg Response: 1 hr</span>
            </div>
          </div>
             {/* Right: Contact Form  */}
          <div className="lg:w-1/2 bg-white p-10 flex items-center justify-center">
            <form className="w-full max-w-md mx-auto space-y-6" autocomplete="off" id="contactForm">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Contact Form</h2>
                <p className="text-gray-500 text-sm mt-1">We'll get back ASAP!</p>
              </div>
              <div className="md:flex md:space-x-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" required class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition" />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" required class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition" />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phone" class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="4" required class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg">
                Send Message
              </button>
              <div className="text-center">
                <span id="formMsg" className="text-green-600 text-sm hidden">Thank you! We'll reply soon.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
