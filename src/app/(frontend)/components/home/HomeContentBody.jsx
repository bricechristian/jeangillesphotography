import Hero from "../../components/Hero";
import TextHeadline from "../../components/TextHeadline";
import PhotographyGrid from "../../components/PhotographyGrid";

const HomeContentBody = ({data}) => {
    return ( 
        data.content.map(section => {
            switch (section._type) {
                case "hero":    
                    return <Hero data={section} />
                case "textHeadline":   
                    return <TextHeadline data={section} />
                case "photographyGrid":   
                    return <PhotographyGrid data={section} />
            }
        })
     );
}
 
export default HomeContentBody;