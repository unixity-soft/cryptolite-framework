export const  CryptoLiteErrorLogger=(req:any,res:any,err)=>{
    res.writeHead(500,{"Content-Type":"text/html"})
    res.write(err)
    res.end()
}