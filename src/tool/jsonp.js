import jsonp from "fetch-jsonp";
export default url => {
    return new Promise((suc,err)=>{
        jsonp(url)
            .then(r=>r.json())
            .then(data=>{
                suc(data);
            })
    })
}