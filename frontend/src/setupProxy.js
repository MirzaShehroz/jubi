const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports=app=>(
    app.use(
        createProxyMiddleware('/affiliate/v1/doctor/profile',{
            target:"http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090",
            changeOrigin:true
        })
    )
)