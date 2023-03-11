"use client";

import { usePreview } from "../../../../../lib/sanity.preview";
import HomeContentBody from "./HomeContentBody";

const PreviewHomeContent = ({query}) => {
    const data = usePreview(null, query);
    // console.log(content)
    return ( 
        <HomeContentBody data={data} />
     );
}
 
export default PreviewHomeContent;