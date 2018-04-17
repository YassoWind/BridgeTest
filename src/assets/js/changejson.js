export function changejson(json) {
    var jsonlist = {};
    var arr2 = [];
    for(var i = 0 ;i<json.length;i++){
        var list2 = {};
        list2.name = json[i].name;
        var arr = [];
        for (var j = 0; j < json[i].features.length; j++) {
            var list = {};
            list.name = json[i].features[j].properties.name;
            list.url = json[i].features[j].properties.url;
            list.geometry = json[i].features[j].geometry;
            // console.log(list);
            arr.push(list);
        }
        list2.children = arr;
        arr2.push(list2);
    }
    jsonlist = arr2;
    return jsonlist;
}