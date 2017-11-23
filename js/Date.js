window.onload = function() {
    var year = $("#year");
    var month = $("#month");
    var day = $("#day");
    var week = $("#week");
    var hour = $("#hour");
    var minute = $("#minute");
    var second = $("#second");
    var safeTime = $("#safeTime");

    setInterval(function() {
        var time = new Date();
        // 程序计时的月从0开始取值后+1
        var m = time.getMonth() + 1;

        var year_str = time.getFullYear();
        var month_str = checkTime(m);
        var day_str = checkTime(time.getDate());

        var hour_str = checkTime(time.getHours());
        var minute_str = checkTime(time.getMinutes());
        var second_str = checkTime(time.getSeconds());

        year.html(year_str);
        month.html(month_str);
        day.html(day_str);
        hour.html(hour_str);
        minute.html(minute_str);
        second.html(second_str);

    }, 1000);
    var a = new Array("日", "一", "二", "三", "四", "五", "六");
    var w = new Date().getDay();
    var str = a[w];
    week.html(str);
    //判断时间格式是否小于10，始终以两位形式输出
    function checkTime(i)
    {
        if (i<10)
        {i="0" + i}
        return i
    }
    //安全日
    // 1.首先获取系统正常的初始时间,测试时间为 1498029234563ms
    //2.设置定时器，定时获取当前时间戳ms
    //3.使用当前时间-初始时间=安全运行时间（ms)
    //4.转化成单位天：ms / (1000 * 60 * 60 * 24)
    var initialTime=1497019234563;
    setInterval(function () {
        var NowTime=new Date().getTime();
        var duringTime=parseInt((NowTime-initialTime)/(1000*60*60*24));
        safeTime.html(duringTime);
    },1000);
};