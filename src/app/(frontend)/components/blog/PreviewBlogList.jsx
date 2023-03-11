"use client";

import { usePreview } from "../../../../../lib/sanity.preview";;

const PreviewBlogList = ({query, children}) => {
    const posts = usePreview(null, query);
    // console.log(posts)
    return ( 
        <section>
            Blog List
        </section>
     );
}
 
export default PreviewBlogList;