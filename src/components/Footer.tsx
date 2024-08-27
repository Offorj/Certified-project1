'use client'
import React, { useState } from 'react';
// import Image from 'next/image';
import { FaInstagram,FaFacebook,FaTwitter, FaShoppingBag } from 'react-icons/fa';


interface FooterProps {
    styles: string;
  }

export const Footer = ({ styles }: FooterProps) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    };
    return (
        <div className='font-sans'>
            <div className={`px-[47px] py-[58px] ${styles}`}>
                <div className='max-w-[1049px] sm:flex items-center justify-between m-auto border-b-[1px] border-[#E6E6E6] pb-[40px]'>
                    <div className='mb-[24px]'>
                        <a href="/"><p  className='max-w-[70px] md:max-w-full font-bold'>Bandage</p></a>
                    </div>
                    <ul className='flex items-center gap-3 sm:gap-5 lg:gap-[15.5px]'>
                        <li className='text-[#23A6F0]'>
                            <a href="#"><FaInstagram size={17} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' /></a>
                        </li>
                        <li className='text-[#23A6F0]'>
                            <a href="#"><FaFacebook size={17} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' /></a>
                        </li>
                        <li className='text-[#23A6F0]'>
                            <a href="#"><FaTwitter size={17} className='w-2 h-2 sm:w-4 sm:h-4 lg:w-6 lg:h-6' /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-[1050px] m-auto py-[50px] px-[32px]'>
                <ul className='mb-[30px]'>
                    <h5 className='text-[#252B42] text-[16px] font-bold leading-6 mb-[20px]'>Company Info</h5>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <a href="/about">About Us</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <a href="/contact">Carrier</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <a href="/contact">We are hiring</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <a href="/contact">Blog</a>
                    </li>
                </ul>
                <ul className='mb-[30px]'>
                    <h5 className='text-[#252B42] text-[16px] font-bold leading-6 mb-[20px]'>Legal</h5>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <a href="/about">About Us</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <a href="/contact">Carrier</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <a href="/contact">We are hiring</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <a href="/contact">Blog</a>
                    </li>
                </ul>
                <ul className='mb-[30px]'>
                    <h5 className='text-[#252B42] text-[16px] font-bold leading-6 mb-[20px]'>Features</h5>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <a href="/about">Business Marketing</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <a href="/contact">User Analytic</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <a href="/contact">Live Chat</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <a href="/contact">Unlimited Support</a>
                    </li>
                </ul>
                <ul className='mb-[30px]'>
                    <h5 className='text-[#252B42] text-[16px] font-bold leading-6 mb-[20px]'>Resources</h5>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <a href="/about">IOS & Android</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <a href="/contact">Watch a Demo</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6 my-[10px]'>
                        <a href="/contact">Customers</a>
                    </li>
                    <li className='text-[#737373] text-[14px] font-bold leading-6'>
                        <a href="/contact">API</a>
                    </li>
                </ul>
                <ul className='mb-[30px]'>
                    <h5 className='text-[#252B42] text-[16px] font-bold leading-6 mb-[20px]'>Get In Touch</h5>
                    <form onSubmit={handleSubmit} className='flex items-center max-w-[321px]'>
                        <input type="email"placeholder="Your Email"value={email}onChange={(e) => setEmail(e.target.value)}className="w-full px-3 py-2 border-none text-gray-500 focus:outline-none  focus:ring-none bg-[#E7E6E6] text-[13px] rounded-l-md"required />
                        <button type="submit" className="px-4 py-2 bg-[#0c9aec] text-white text-[13px] hover:bg-[#15e9e9] transition duration-300 rounded-r-md">
                            Subscribe
                        </button>
                    </form>
                    <p className='text-[#5c5b5b] text-[13px] font-normal'>
                        Lorem ipsum dolor sit amet.
                    </p>
                </ul>

            </nav>
          

        </div>
    )
}
