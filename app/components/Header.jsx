import Image from 'next/image';
import { assets } from '@/assets/assets';
import React from 'react';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div>
            <Image src={assets.profile} alt="" className="rounded-full w-40">
            </Image>
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
            Hi! I'm Hanlin Miao
            <Image src={assets.hand_icon} alt="" className="rounded-full w-6">
            </Image>
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
            Full stack developer in NY
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo">
            I am a full stack developer based in NY Metro.
        </p>
        <p className="max-w-2xl mx-auto font-Ovo">
            I have a passion for web development and love to create websites and web applications that are both beautiful and functional.
        </p>
        <p className="max-w-2xl mx-auto font-Ovo">
            I have experience working with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
                contact me <Image src={assets.right_arrow_white} alt="" className="w-4"></Image></a>
            <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
                my resume <Image src={assets.download_icon} alt="" className="w-4"></Image>
            </a>
        </div>
    </div>
  )
}

export default Header
