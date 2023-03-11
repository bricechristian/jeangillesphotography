export default function preview(req, res) {
    res.setPreviewData({})
    if(req.query.type == "page" && req.query.slug !== "home"){
        res.writeHead(307, {Location: `/${req.query.slug}`})
    } else if(req.query.type == "photography"){
        res.writeHead(307, {Location: `/photography/${req.query.slug}`})
    } else {
        res.writeHead(307, {Location: '/'})
    }
    res.end()
}