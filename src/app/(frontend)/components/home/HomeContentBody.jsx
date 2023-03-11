import Hero from "../../components/Hero";
import TextHeadline from "../../components/TextHeadline";

const HomeContentBody = ({data}) => {
    // console.log(data)
    return ( 
        data.content.map(section => {
            switch (section._type) {
                case "hero":    
                    return <Hero data={section} />
                case "textHeadline":   
                    return <TextHeadline data={section} />
            }
        })
     );
}
 
export default HomeContentBody;