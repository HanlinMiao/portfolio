import Image from 'next/image';
import { assets } from '@/assets/assets';
import React from 'react';
import { motion } from "motion/react";

const Header = ({isDarkMode}) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <motion.div
        initial={{y:-10, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.5}}
        >
            <Image src={assets.profile} alt="" className="rounded-full w-40"></Image>
        </motion.div>
        <motion.h3
        initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.6, delay:0.3}}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
            Hi! I'm Hanlin Miao
            <Image src={assets.hand_icon} alt="" className="rounded-full w-6">
            </Image>
        </motion.h3>

        <motion.h1
        initial={{y:-30, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.5}}
        className="text-3xl sm:text-6xl lg:text-[42px] font-Ovo">
            Software Engineer | Hoboken, NJ, USA
        </motion.h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
            initial={{y:30, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.6, delay:1}}
            href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2
            dark:bg-transparent">
                contact me <Image src={assets.right_arrow_white} alt="" className="w-4"></Image>
            </motion.a>

            <motion.a
            initial={{y:30, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.6, delay:1.2}}
            href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2
            bg-white dark:text-black">
                my resume <Image src={assets.download_icon} alt="" className="w-4"></Image>
            </motion.a>
        </div>
    </div>
  )
}

export default Header
