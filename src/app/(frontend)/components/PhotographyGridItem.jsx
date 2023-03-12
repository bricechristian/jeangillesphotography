"use client";

import { useEffect, useState } from "react";
import { Reveal, Tween } from "react-gsap";
import { client } from "lib/sanity.client";
import { useNextSanityImage } from "next-sanity-image";
import Link from "next/link";
import Image from "next/image";

const PhotographyGridItem = ({ item, itemWidth }) => {

    const imageProps = useNextSanityImage(
        client,
        item.photography.featuredImage
    );

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setLoaded(true);
      }, 1350);
    }, []);

	return (
		<Link
			key={item._key}
			href={`/photography/${item.photography.slug.current}`}
			className={`${itemWidth} relative overflow-hidden`}>
			<Reveal threshold={0.25}>
				<h2 class="absolute z-10 top-1/2 -translate-y-1/2 inset-x-0 text-center opacity-0">
					{item.photography.title}
				</h2>
				<Tween to={{ y: "-100%" }} duration={1.05} ease="easeOutQuart">
					<div className="absolute w-full h-full z-20 inset-0 translate-y-0 bg-black"></div>
				</Tween>
				<Tween to={{ scale: 1 }} duration={1.35} ease="easeOutQuart">
					<Image
						{...imageProps}
						className={`w-full h-full object-cover scale-[1.25]${loaded ? " transition duration-500 supports-hover:hover:!scale-[1.025]" : ""}`}
					/>
				</Tween>
			</Reveal>
		</Link>
	);
};

export default PhotographyGridItem;
