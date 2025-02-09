"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IProps {
  images: string[]; // Array of image URLs
}

const ImageGallery = ({ images }: IProps) => {
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    // Generate random rotation values for each image
    setRotations(images.map(() => Math.random() * 20 - 10));
  }, [images]);

  return (
    <div
      className={`grid grid-cols-1 ${
        images.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
      } md:py-14 max-w-full px-4 py-10`}
    >
      {images.map((image, idx) => (
        <motion.div
          key={"images" + idx}
          style={{
            rotate: rotations[idx] || 0,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          whileTap={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          className={`
            rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-800 border border-neutral-100 overflow-hidden basis-full max-w-full`}
        >
          <Image
            src={image}
            alt={image + "image"}
            width={300}
            height={300}
            className="rounded-lg w-full"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
