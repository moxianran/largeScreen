$(function() {

    // 负载排序
    function bdsort(v1, v2) {
        return parseFloat(v1.value) < parseFloat(v2.value);
    }

    // 负载颜色标记
    function fzcolor(list) {
        for (var i in list) {
            if (list[i].value >= 0 && list[i].value <= 30) {
                list[i].color = "cyan";
            }
            if (list[i].value > 30 && list[i].value <= 60) {
                list[i].color = "green";
            }
            if (list[i].value > 60 && list[i].value <= 1000) {
                list[i].color = "red";
            }
        }
        return list;
    }

    // 显示html
    function displayBDZ(list, id) {
        id = "#" + id;
        $(id + " .list_info_body").remove();

        for (var i in list) {
            var html = '<li class="list_info_body ' + list[i].color + '">' +
                '<p>' + list[i].bdzmc + '</p>' +
                '<p>' + list[i].byq + '</p>' +
                '<p>' + list[i].value + '</p>' +
                '</li>';
            $(id + " ul").append(html);
        }
    }

    function displayXL(list, id) {
        id = "#" + id;
        $(id + " .list_info_body").remove();

        for (var i in list) {
            var html = '<li class="list_info_body ' + list[i].color + '">' +
                '<p>' + list[i].bdzmc + '</p>' +
                '<p>' + list[i].xlmc + '</p>' +
                '<p>' + list[i].value + '</p>' +
                '</li>';
            $(id + " ul").append(html);
        }
    }

    //变电站负载
    $.get("/db/bdz_fz.json", function(list) {
        var bd220s = [];
        var bd110s = [];
        var bd35s = [];

        for (var i in list) {
            list[i].dydj = list[i].dydj.toLowerCase();
            if (list[i].dydj == "220kv") {
                bd220s.push(list[i]);
            }
            if (list[i].dydj == "110kv") {
                bd110s.push(list[i]);
            }
            if (list[i].dydj == "35kv") {
                bd35s.push(list[i]);
            }
        }

        //排序
        bd220s.sort(bdsort);
        bd110s.sort(bdsort);
        bd35s.sort(bdsort);

        //颜色标记
        bd220s = fzcolor(bd220s);
        bd110s = fzcolor(bd110s);
        bd35s = fzcolor(bd35s);

        //显示
        displayBDZ(bd220s, "bf220");
        displayBDZ(bd110s, "bf110");
        displayBDZ(bd35s, "bf35");
    });
    //线路负载
    $.get("/db/bdz_xl_fz.json", function(list) {
        var bx220s = [];
        var bx110s = [];
        var bx35s = [];
        var bx10s = [];

        for (var i in list) {
            list[i].dydj = list[i].dydj.toLowerCase();
            if (list[i].dydj == "220kv") {
                bx220s.push(list[i]);
            }
            if (list[i].dydj == "110kv") {
                bx110s.push(list[i]);
            }
            if (list[i].dydj == "35kv") {
                bx35s.push(list[i]);
            }
            if (list[i].dydj == "10kv") {
                bx10s.push(list[i]);
            }
        }

        //排序
        bx220s.sort(bdsort);
        bx110s.sort(bdsort);
        bx35s.sort(bdsort);
        bx10s.sort(bdsort);

        //颜色标记
        bx220s = fzcolor(bx220s);
        bx110s = fzcolor(bx110s);
        bx35s = fzcolor(bx35s);
        bx10s = fzcolor(bx10s);

        //显示
        //display(bx220s, "bx220");
        //display(bx110s, "bx110");
        displayXL(bx35s, "bx35");
        displayXL(bx10s, "bx10");

    })

});