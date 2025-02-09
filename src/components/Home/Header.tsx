"use client";
import React from "react";
import Image from "next/image";

import Profile from "@/../public/portfolio.jpeg";
import HandIcon from "@/../public/hand-icon.png";
import RightArrow from "@/../public/right-arrow.png";
import DownloadIcon from "@/../public/download-icon.png";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="dark:bg-darkTheme">
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image src={Profile} alt="profile" className="rounded-full w-32" />
        </motion.div>
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-end gap-2 text-lg md:text-2xl mb-4 font-Ovo"
        >
          Rittika Dev
          <Image src={HandIcon} alt="hand-icon" className="w-6 mb-1" />
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl sm:text-3xl lg-text-[66px] font-Ovo"
        >
          Full-Stack Developer
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-2xl sm:text-3xl mx-auto font-Ovo"
          >
            I have more than 3 years of experience focusing on
            <span className="underline"> React</span>,{" "}
            <span className="underline">Next</span> &{" "}
            <span className="underline">Angular</span>.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="#contact"
              className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 text-xl"
            >
              Contact Me{" "}
              <Image src={RightArrow} alt="right-arrow" className="w-4" />
            </motion.a>
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href="/RITTIKA_DEV.pdf"
              download
              className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 text-xl"
            >
              Download Resume{" "}
              <Image src={DownloadIcon} alt="right-arrow" className="w-4" />
            </motion.a>
          </div>
        </motion.h1>
      </div>
    </div>
  );
};

export default Header;
