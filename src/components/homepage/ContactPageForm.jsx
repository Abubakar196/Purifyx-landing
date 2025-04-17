"use client"

import { useState } from "react"
import { MapPin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "US",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Handle form submission
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  return (
    <div className="mx-8 lg:mx-auto max-w-[1080px] py-[200px] ">
      <div className="grid gap-16 md:grid-cols-2 md:mx-8">
        {/* Left Column - Contact Information */}
        <div className="space-y-10 flex flex-col justify-center">
          <div className="space-y-6">
            <h3 className="B1 text-[#303030]">Call us</h3>
            <p className="mt-2 B4 text-[#646464]">Call our team Mon-Fri from 8am to 5pm.</p>
            <a href="tel:+11111000000" className="mt-2 flex items-center B4 text-primary-500 hover:text-primary-600">
            <span className="p-2 rounded-full bg-[#E7F0FE] text-center mr-2">
              <Phone className=" h-5 w-5" />
              </span>
              +1 (111) 000-0000
            </a>
          </div>

          <div className="space-y-6">
            <h3 className="B1 text-[#303030]">Chat with us</h3>
            <button
              onClick={() => (window.location.href = "mailto:contact@example.com")}
              className="mt-2 w-full inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-2 focus:border-primary-500 cursor-pointer"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Us Email
            </button>
          </div>

          <div className="space-y-6">
            <h3 className="B1 text-[#303030]">Visit us</h3>
            <p className="mt-2 B4 text-[#646464]">Chat to us in person at our HQ.</p>
            <p className="mt-2 flex items-center text-sm text-[#303030] B4">
              <span className="p-2 rounded-full bg-[#E7F0FE] text-center mr-2">
              <MapPin className=" h-5 w-5" />
              </span>
              Our Address Will Be Here
            </p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm relative">
          {/* <div className="absolute -top-40 -left-40 -z-10">
            <Image src="/Overlay2.png" alt="formoverlay" width={330} height={330}/>
          </div> */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 ">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.firstName ? "border-red-300" : "border-gray-300"
                  } px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
                  placeholder="First name"
                />
                {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.lastName ? "border-red-300" : "border-gray-300"
                  } px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
                  placeholder="Last name"
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  errors.email ? "border-red-300" : "border-gray-300"
                } px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
                placeholder="you@company.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
              <div>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="mt-1 block w-[100px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                >
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="CA">CA</option>
                </select>
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.phone ? "border-red-300" : "border-gray-300"
                  } px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`mt-1 block w-full rounded-md border ${
                  errors.message ? "border-red-300" : "border-gray-300"
                } px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500`}
                placeholder="Leave us a message..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

