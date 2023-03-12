const Hero = ({data}) => {
    return ( 
        <section key={data._key} className="py-24 md:py-12">
            <div className="container">
                <h1 class="headline">{data.title}</h1>
            </div>
        </section>
     );
}
 
export default Hero;