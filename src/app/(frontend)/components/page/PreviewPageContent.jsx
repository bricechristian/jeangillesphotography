"use client";

import { usePreview } from "../../../../../lib/sanity.preview";
import PageContentBody from "./PageContentBody";

const PreviewPageContent = ({query, queryParams}) => {
    const data = usePreview(null, query, queryParams);
    return ( 
        <PageContentBody data={data} />
     );
}
 
export default PreviewPageContent;