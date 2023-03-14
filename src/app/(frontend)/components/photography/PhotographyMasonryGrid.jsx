"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useNextSanityImage } from "next-sanity-image";
import Link from "next/link";
import Image from "next/image";
import { client } from "lib/sanity.client";

const PhotographyImageGrid = ({ images }) => {
	// console.log(images)
    const [index, setIndex] = useState(-1);
	const breakpoints = [2400, 991, 767];
	const photos = images.map((photo) => {
		const imageProps = useNextSanityImage(client, photo);
		const width = breakpoints[0];
		const height = (imageProps.height / imageProps.width) * width;

		return {
			src: imageProps.src,
			width,
			height,
			images: breakpoints.map((breakpoint) => {
				const height = Math.round(
					(imageProps.height / imageProps.width) * breakpoint
				);
				return {
					src: `${imageProps.src}&w=${breakpoint}&h=${height}`,
					width: breakpoint,
					height,
				};
			}),
		};
	});
	const slides = photos.map(({ src, width, height, images }) => ({
		src,
		width,
		height,
		srcSet: images.map((image) => ({
			src: image.src,
			width: image.width,
			height: image.height,
		})),
	}));
	return (
		<div className="relative z-10">
			<PhotoAlbum
				photos={photos}
				layout="masonry"
				spacing={(containerWidth) => {
					if (containerWidth < 991) return 20;
					return 48;
				}}
				targetRowHeight={150}
				onClick={({ index }) => setIndex(index)}
			/>

			<Lightbox
				slides={slides}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				// enable optional lightbox plugins
				// plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
			/>
		</div>
	);
};

export default PhotographyImageGrid;
