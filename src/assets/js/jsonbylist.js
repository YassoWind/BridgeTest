export function jsonbylist(json) {
    var arr = [];
    for (var i = 0; i < json[0].children.length; i++) {
        var json2 = {};
        $.ajax({
            url: "http://bhm.bsri.com.cn:200/RoutineIns/ashx/DiseaseDetailHandler.ashx?action=bindDefect&type=0&bhid=" + json[0].children[i].name,
            type: 'post',
            async: false,
            dataType: 'json',
            success: function (e) {
                if (e) {
                    var data = e[0];
                    // console.log(data)
                    if(data){
                        json2.url = json[0].children[i].url;
                        json2.title = data.bridge_name + '/' + data.option_name + '/' + data.item_name;
                        json2.date = data.record_time;
                        json2.imgSrc = "http://bhm.bsri.com.cn:200/uploadFiles/nanchang2"+data.picUrl;
                        arr.push(json2)
                    }
                    
                }
            }
        })
    }

    return arr;
}