"use client";

import { useEffect, useState, useRef } from "react";
import { Reveal, Tween } from "react-gsap";
import { client } from "lib/sanity.client";
import { useNextSanityImage } from "next-sanity-image";
import Link from "next/link";
import Image from "next/image";

const PhotographyGridItem = ({ item, itemWidth, setActiveGridItem, setActiveGridItemHovered }) => {
	const imageProps = useNextSanityImage(
		client,
		item.photography.featuredImage
	);

	const [hovered, setHovered] = useState(false);

    const handleGridItemHoverIn = () => {
        setHovered(true)
        setActiveGridItem(item.photography.title)
        setActiveGridItemHovered(true)
    }

    const handleGridItemHoverOut = () => {
        setActiveGridItem("")
        setActiveGridItemHovered(false)
    }

	return (
		<Link
			key={item._key}
			href={`/photography/${item.photography.slug.current}`}
			className={`${itemWidth} relative overflow-hidden`}>
			<Reveal threshold={0.15}>
				<h2 class="absolute z-10 top-1/2 -translate-y-1/2 inset-x-0 text-center opacity-0">
					{item.photography.title}
				</h2>
				<Tween
					to={{ y: "-100%" }}
					duration={.45}
					ease="easeOutQuart">
					<div className="absolute w-full h-full z-20 inset-0 translate-y-0 bg-black"></div>
				</Tween>
				<Tween to={{ scale: 1 }} duration={0.85} ease="easeOutQuart">
					<Image
						{...imageProps}
						className={`w-full h-full object-cover scale-[1.25]${hovered ? " supports-hover:transition supports-hover:duration-700 supports-hover:hover:!scale-[1.025]" : ""}`}
                        onMouseMove={() => handleGridItemHoverIn()}
                        onMouseLeave={() => handleGridItemHoverOut()}
					/>
				</Tween>
			</Reveal>
		</Link>
	);
};

export default PhotographyGridItem;
