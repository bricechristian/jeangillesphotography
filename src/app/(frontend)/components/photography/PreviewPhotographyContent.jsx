"use client";

import { usePreview } from "../../../../../lib/sanity.preview";

const PreviewPhotographyContent = ({query, queryParams}) => {
    const photography = usePreview(null, query, queryParams);
    // console.log(photography)
    return ( 
        <section>
            <h1>{photography.title}</h1>
        </section>
     );
}
 
export default PreviewPhotographyContent;