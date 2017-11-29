<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="css/css.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/echarts.js"></script>
    <script type="text/javascript" src="js/Date.js"></script>
</head>
<body onload="aaaa()">

<div style="background: red;height: 955px;width:1920px;">

</div>

<script>
    f_SetFullScreen();
    //设置浏览器全屏
    function f_SetFullScreen() {
        //如果浏览器不是全屏则将其设置为全屏模式
        if (!f_IsFullScreen()) {
            var wsShell = new ActiveXObject('WScript.Shell');
            wsShell.SendKeys('{F11}');
            return false;
        }
    }

    //判断浏览器是否全屏
    function f_IsFullScreen() {
        return (document.body.scrollHeight == window.screen.height && document.body.scrollWidth == window.screen.width);
    }
    aaaa();
    function aaaa(){
        alert(document.body.scrollWidth);
        console.log(
            "屏幕分辨率为："+screen.width+"*"+screen.height
            +"<br />"+
            "屏幕可用大小："+screen.availWidth+"*"+screen.availHeight
            +"<br />"+
            "网页可见区域宽："+document.body.clientWidth
            +"<br />"+
            "网页可见区域高："+document.body.clientHeight
            +"<br />"+
            "网页可见区域宽(包括边线的宽)："+document.body.offsetWidth
            +"<br />"+
            "网页可见区域高(包括边线的宽)："+document.body.offsetHeight
            +"<br />"+
            "网页正文全文宽："+document.body.scrollWidth
            +"<br />"+
            "网页正文全文高："+document.body.scrollHeight
            +"<br />"+
            "网页被卷去的高："+document.body.scrollTop
            +"<br />"+
            "网页被卷去的左："+document.body.scrollLeft
            +"<br />"+
            "网页正文部分上："+window.screenTop
            +"<br />"+
            "网页正文部分左："+window.screenLeft
            +"<br />"+
            "屏幕分辨率的高："+window.screen.height
            +"<br />"+
            "屏幕分辨率的宽："+window.screen.width
            +"<br />"+
            "屏幕可用工作区高度："+window.screen.availHeight
            +"<br />"+
            "屏幕可用工作区宽度："+window.screen.availWidth
        );
    }
</script>
</body>
</html>