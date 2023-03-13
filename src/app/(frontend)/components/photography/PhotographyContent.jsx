const PhotograhyContent = ({data}) => {
    const photography = data;
    // console.log(content)
    return ( 
        <section className="py-24 md:py-12">
            <div className="container text-center">
                <h1 className="headline">{photography.title}</h1>
            </div>
        </section>
     );
}
 
export default PhotograhyContent;