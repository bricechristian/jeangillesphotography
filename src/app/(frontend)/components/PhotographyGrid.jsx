"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import PhotographyGridItem from "./PhotographyGridItem";

const PhotographyGrid = ({ data }) => {
	// console.log(data);

    const [mousePosition, setMousePosition] = useState({});
    const [activeGridItem, setActiveGridItem] = useState("");
    const [activeGridItemHovered, setActiveGridItemHovered] = useState(false);

	const gridItems = data.photographyGridItems;
	return (
		<motion.section 
        key={data._key} 
        className=""
        >
			<div className="container">
				<div className="grid gap-1 md_min:grid-cols-8">
					{gridItems.map((item) => {
						let itemWidth;
						switch (item.width) {
							case "1/4":
								itemWidth = "md_min:col-span-2";
								break;
							case "3/8":
								itemWidth = "md_min:col-span-3";
								break;
							case "1/2":
								itemWidth = "md_min:col-span-4";
								break;
							case "5/8":
								itemWidth = "md_min:col-span-5";
								break;
							case "3/4":
								itemWidth = "md_min:col-span-6";
								break;
							case "Full":
								itemWidth = "md_min:col-span-full";
								break;
						}
						return <PhotographyGridItem item={item} itemWidth={itemWidth} activeGridItem={activeGridItem} activeGridItemHovered={activeGridItemHovered} setActiveGridItem={setActiveGridItem} setActiveGridItemHovered={setActiveGridItemHovered} />;
					})}
				</div>
			</div>
            <motion.div 
                className={`fixed top-0 left-0 z-[999] pointer-events-none`}
            >
                {/* <h1 className={`headline`}>{activeGridItem}</h1> */}
            </motion.div>
		</motion.section>
	);
};

export default PhotographyGrid;
