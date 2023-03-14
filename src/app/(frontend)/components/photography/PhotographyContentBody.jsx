import PhotographyMasonryGrid from "./PhotographyMasonryGrid";

const PhotographyContentBody = ({data}) => {
    const photography = data;
    // console.log(photography)
    const images = [...photography.images]
    images.unshift(photography.featuredImage)
    return ( 
		<section>
			<div className="container text-center">
				<h1 className="pointer-events-none bottom-12 left-6 headline-sm md:mb-5 md_min:fixed md_min:z-20 md_min:text-[16vw] md_min:block md_min:w-full md_min:text-left md_min:before:flex md_min:before:h-[120%] md_min:before:w-full md_min:before:absolute md_min:before:-z-1 md_min:before:-bottom-1/4 md_min:before:left-0 md_min:before:bg-gradient-to-t md_min:before:from-black md_min:before:to-transparent">{photography.title}.</h1>
                <PhotographyMasonryGrid images={images} />
			</div>
		</section>        
     );
}
 
export default PhotographyContentBody;