/**
 * 加载提醒……
 */
function begin(con) {
	var myChart = echarts.init(document.getElementById(con));
	myChart.showLoading({
		text : '正在加载...'
	});
}

/**
 * 加载图表开始
 */
function load(con, option, indexWin, clickEvent) {
	var myChart = echarts.init(document.getElementById(con), theme);

	myChart.setOption(stringToJson(option));

	$('#' + con).resize(function() {
		myChart.resize();
	});

	myChart.on('click', function(param) {
		if (indexWin != null && indexWin != "null" && indexWin != ""
				&& indexWin != undefined && clickEvent != null
				&& indexWin != "null" && clickEvent != ""
				&& clickEvent != undefined) {
			var temp = "";
			for ( var i in param) {
				temp += i + ":" + eval("param." + i) + ",";
			}
			zAu.send(new zk.Event(zk.Widget.$(jq("$" + indexWin)), clickEvent, temp));
		}
	});

	myChart.hideLoading();
}


/**
 * String字符串转成Json格式字符
 */
function stringToJson(stringValue) {
	try {
		return (new Function("return" + stringValue))();
	} catch (e) {
		return "";
	}
}
 
