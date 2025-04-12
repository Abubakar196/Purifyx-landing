import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="flex flex-col max-w-[1300px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row px-4 sm:px-6 py-8 sm:py-[60px] gap-8 md:gap-0">
          {/* Left Side */}
          <div className="flex-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <Image src="/Logo.svg" alt="PurifyX" width={115} height={32} className="h-[32px]" />
            </Link>
            <p className="text-[#636777] text-base">Lead Generation Tool</p>
            <p className="text-[#636777] text-base">Find your desired Leads from biggest database</p>
            <div className="flex gap-6 mt-2">
              <Link href="#" aria-label="Twitter">
                <Twitter className="w-5 sm:w-6 h-5 sm:h-6 text-[#636777] hover:text-[#5443DA]" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="w-5 sm:w-6 h-5 sm:h-6 text-[#636777] hover:text-[#5443DA]" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="w-5 sm:w-6 h-5 sm:h-6 text-[#636777] hover:text-[#5443DA]" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="w-5 sm:w-6 h-5 sm:h-6 text-[#636777] hover:text-[#5443DA]" />
              </Link>
            </div>
          </div>

          {/* Right Side - Newsletter */}
          <div className="flex-1 flex flex-col items-start md:items-end gap-4">
            <h3 className="text-[#303030] text-lg sm:text-xl font-semibold">Newsletter</h3>
            <p className="text-[#636777] text-base">Discover the latest Updates first.</p>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="user@gmail.com"
                className="w-full sm:w-[280px] px-4 py-3 border border-[#E8E8E8] rounded-lg text-base"
              />
              <button className="w-full sm:w-auto px-8 py-3 bg-[#5443DA] text-white text-base font-medium rounded-lg hover:bg-[#4936C7] transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-[#636777] text-sm">
              By signing up you agree to our{' '}
              <Link href="/privacy-policy" className="text-[#5443DA] hover:underline">
                privacy policy
              </Link>
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-24 px-4 sm:px-6 py-8 sm:py-[60px]">
          {/* Product */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-[#303030] text-base sm:text-lg font-semibold">Product</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link href="/" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Homepage</Link>
              <Link href="/products" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Products</Link>
              <Link href="/solutions" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Solutions</Link>
              <Link href="/contact" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Contact Us</Link>
              <Link href="/pricing" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Pricing</Link>
              <Link href="/blogs" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Blogs</Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-[#303030] text-base sm:text-lg font-semibold">Solutions</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link href="/lead-generation" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Lead Generation</Link>
              <Link href="/email-verifier" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Email Verifier</Link>
              <Link href="/email-warm-up" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Email Warm-Up</Link>
              <div className="flex items-center gap-2">
                <Link href="/phone-verifier" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Phone Verifier</Link>
                <span className="px-2 py-0.5 bg-[#F6F6FD] text-[#636777] text-xs rounded">Pending</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-[#303030] text-base sm:text-lg font-semibold">Resources</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link href="/faqs" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Faqs</Link>
              <Link href="/help-center" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Help-Center</Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-[#303030] text-base sm:text-lg font-semibold">Company</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Link href="/open-roles" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Open Roles</Link>
                <span className="px-2 py-0.5 bg-[#F6F6FD] border border-[#6938ef] text-[#6938ef] text-xs rounded whitespace-nowrap">We Are Hiring</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-[#303030] text-base sm:text-lg font-semibold">Legal</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link href="/privacy-policy" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Privacy Policy</Link>
              <Link href="/terms" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Terms & Condition</Link>
              <Link href="/legal-notice" className="text-[#636777] text-sm sm:text-base hover:text-[#5443DA]">Legal Notice</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#E9EAEB] px-4 sm:px-6 lg:px-[128px] py-4 sm:py-[20px] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#636777] text-sm sm:text-base text-center sm:text-left">
            PurifyX © All rights reserved
          </p>
          <div className="flex items-center gap-2 text-[#636777] text-sm sm:text-base">
            Made with <span className="text-red-500">❤️</span> on <span>🌍</span> Earth
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;