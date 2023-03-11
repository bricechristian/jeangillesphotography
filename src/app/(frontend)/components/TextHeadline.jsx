const TextHeadline = ({data}) => {
    return ( 
        <section key={data._key} className="py-24 md:py-12">
            <div className="container">
                <div className="grid gap-8 md_min:grid-cols-2">
                    <div>{data.title}</div>
                    <div>Image</div>
                </div>
            </div>
        </section>
     );
}
 
export default TextHeadline;