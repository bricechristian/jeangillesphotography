"use client";

import { usePreview } from "../../../../../lib/sanity.preview";
import PhotographyContentBody from "./PhotographyContentBody";

const PreviewPhotographyContent = ({ query, queryParams }) => {
	const data = usePreview(null, query, queryParams);
	// console.log(photography)
	return (
        <PhotographyContentBody data={data} />
	);
};

export default PreviewPhotographyContent;
