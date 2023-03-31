"use client";

import { useEffect, useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, useInView } from "framer-motion";
import { client } from "lib/sanity.client";
import { useNextSanityImage } from "next-sanity-image";
// import {isMobile} from 'react-device-detect';
import useDeviceDetect from "../hooks/useDeviceDetect";
import Link from "next/link";
import Image from "next/image";

const PhotographyGridItem = ({
    index,
	item,
	itemWidth,
	activeGridItem,
	activeGridItemHovered,
	setActiveGridItem,
	setActiveGridItemHovered,
}) => {
	const imageProps = useNextSanityImage(
		client,
		item.photography.featuredImage
	);

    const { isNavigatorMobile } = useDeviceDetect();
	const itemRef = useRef(null);
	const mouse = useMouse(itemRef, {
		enterDelay: 100,
		leaveDelay: 100,
	});
	const isInView = useInView(itemRef, {
		once: true,
		amount: 0.125,
	});
	const [hovered, setHovered] = useState(false);

	const handleGridItemHoverIn = () => {
		setHovered(true);
		setActiveGridItem(item.photography.title);
		setActiveGridItemHovered(true);
	};

	const handleGridItemHoverOut = () => {
		setActiveGridItem("");
		setActiveGridItemHovered(false);
	};

    let imageAspectRatio;
    switch (itemWidth) {
        case "md_min:col-span-2":
            imageAspectRatio = "aspect-[4/5]";
        break;
        case "md_min:col-span-3":
            imageAspectRatio = "aspect-[4/5]";
        break;
        case "md_min:col-span-4":
            imageAspectRatio = "aspect-[4/5]";
        break;
        case "md_min:col-span-5":
            imageAspectRatio = "aspect-[8/6]";
        break;
        case "md_min:col-span-6":
            imageAspectRatio = "aspect-[75/42]";
        break;
        case "md_min:col-span-full":
            imageAspectRatio = "aspect-video";
        break;
    }

	return (
		<Link
			key={item._key}
			href={`/photography/${item.photography.slug.current}`}
			className={`flex ${itemWidth} relative overflow-hidden`}
            onMouseLeave={() => handleGridItemHoverOut()}
            >
			<motion.div
				initial={{ y: "0" }}
				animate={{ y: isInView ? "-100%" : "0" }}
				transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
				className="absolute w-full h-full z-20 inset-0 translate-y-0 bg-black"></motion.div>
			<div
				ref={itemRef}
				className="flex relative overflow-hidden"
				onMouseEnter={() => handleGridItemHoverIn()}>
				<motion.div
					className={`flex will-change-transform`}
					initial={{ scale: 1.25 }}
					animate={{ scale: 1 }}
					whileHover={{
						scale: 1.05,
						transition: {
							duration: 0.3,
						},
					}}
					transition={{ duration: 1.25, ease: [0.25, 1, 0.5, 1] }}>
					<Image
						{...imageProps}
                        alt={item.photography.featuredImage.alt}
                        priority={true}
                        width={1920}
                        height={1080}
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 1400px,
                        1920px"
						className={`${imageAspectRatio} w-full h-full object-cover transition duration-500 ${
                            activeGridItemHovered &&
                            activeGridItem === item.photography.title
                                ? "opacity-60"
                                : "opacity-100"
                        }`}
					/>
				</motion.div>
				<motion.div
					className={`absolute top-0 z-50 pointer-events-none will-change-transform${isNavigatorMobile ? " !transform-none flex items-center justify-center w-full h-full" : ""}`}
					animate={{
						x: mouse.x,
						y: mouse.y,
						transition: {
							type: "spring",
							mass: 0.2,
						},
					}}>
					<span
						className={`flex items-center relative top-4 left-4 transition ${
							activeGridItemHovered &&
							activeGridItem === item.photography.title
								? "opacity-100"
								: "opacity-0"
						}${isNavigatorMobile ? " !opacity-100 !top-0 !left-0" : ""}`}>
                        <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full mr-2">
                            <div className={`w-6 h-6 bg-white rounded-full delay-300 transition duration-500 ${
							activeGridItemHovered &&
							activeGridItem === item.photography.title
								? "scale-100 animate-pulser"
								: "scale-0"
						}${isNavigatorMobile ? " animate-pulser" : ""}`}></div>
                        </div>                        
						<h2 className="headline text-20">{item.photography.title}</h2>
					</span>
				</motion.div>
			</div>
		</Link>
	);
};

export default PhotographyGridItem;
