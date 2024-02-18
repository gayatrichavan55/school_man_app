import React from 'react'

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-2">
          {/* Left side - Contact Form */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="text" id="phone" name="phone" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Submit</button>
            </form>
          </div>

          {/* Right side - Social Media Links */}
          <div className="bg-purple-200  flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold mb-4">Connect With Me</h2>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Facebook</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Instagram</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
