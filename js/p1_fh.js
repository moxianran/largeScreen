$(function() {

    // 负载排序
    function bdsort(v1, v2) {
        return parseFloat(v1.value) < parseFloat(v2.value);
    }

    // 显示html
    function display(list, id) {
        id = "#" + id;
        $(id + " p").remove();

        for (var i in list) {
            var html = '<p>' +
                '<span>' + list[i].name + '</span>' +
                '<em>' + list[i].value + '</em>' +
                '<b>' + "MW" + '</b>' +
                '</p>';
            $(id).append(html);
        }
    }

    //负荷情况
    $.get("/db/fh.json", function(list) {
        var nlist = [];

        for (var i in list) {
            nlist[i] = list[i];
        }

        //排序
        nlist.sort(bdsort);

        //显示
        display(nlist, "fhpanel");
    });
})