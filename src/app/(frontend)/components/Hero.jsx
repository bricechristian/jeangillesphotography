const Hero = ({data}) => {
    return ( 
        <section key={data._key} className="py-24 md:py-12">
            <div className="container">
                {data.title}
            </div>
        </section>
     );
}
 
export default Hero;