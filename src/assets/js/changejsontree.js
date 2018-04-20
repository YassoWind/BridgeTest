export  function changejsontree(json) {
    var arr = {};
    for (var i = 0; i < json.length; i++) {
        if (arr[json[i].CategoryName]) {
            arr[json[i].CategoryName].push(json[i]);
        } else {
            arr[json[i].CategoryName] = [];
            arr[json[i].CategoryName].push(json[i]);
        }
    }
    var json2 = [];
    for (var j in arr) {
        var obj = {}
        obj.PointName = j;
        obj.children = arr[j];
        json2.push(obj);
    }
    return json2;
}