$(function() {
    // 基于准备好的dom，初始化echarts实例
    $.ajax({
        url: "/db/nh_gx_fz.json",
        dataType: 'json',
        success: function(data) {
            var legends = [];
            var xAxis = [];
            var yAxis = [];
            var list = [];

            for (var i in data) {
                if ($.inArray(data[i].name, legends) < 0) {
                    legends.push(data[i].name);
                }

                data[i].time = data[i].time.split(".")[0];
                // list.push(data[i].cdz);

                var ie = false;
                for (var j in list) {
                    if (list[j].name == data[i].name) {
                        list[j].data.push(data[i]);
                        ie = true;
                    }
                }

                if (!ie) {
                    list.push({ name: data[i].name, data: [data[i]] });
                }
                if ($.inArray(data[i].time, xAxis) < 0) {
                    xAxis.push(data[i].time);
                }
            }

            var nlist = [];

            var colorlist =  [
                "#ff6340",
                "#00b2ff",
                "#09c981",
                "#fc00b7",
                "#00e0ff",
                "#fffae8",
                "#ffff87",
                "#2809e6",
                "#2bffc2",
                "#ff8cfd"
            ];
            for (var i in list) {
                var ds = [];
                for (var j in xAxis) {
                    ds.push("");
                }
                for (var j in list[i].data) {
                    var inx = $.inArray(list[i].data[j].time, xAxis);
                    ds[inx] = list[i].data[j].cdz;
                }

                nlist[i] = {
                    name: list[i].name,
                    type: 'line',
                    // data: list,
                    lineStyle: {
                        normal: { color: colorlist[i] }
                    },
                    itemStyle: {
                        normal: { color: colorlist[i] }
                    },
                    data: ds
                }
            }

            var myChart = echarts.init(document.getElementById('main2'));
            option = {
                title: {
                    text: '', //名字
                    textStyle: {
                        color: "#FFF",
                        fontWeight: "normal",
                        fontSize: "16"
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: legends,
                    textStyle: {
                        color: "#fff"
                    }
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: "#fff"
                        },
                        formatter: function(v, i) {
                            var d = new Date(v);
                            var h = d.getHours();
                            var m = d.getMinutes();
                            h = parseInt(h / 10) == 0 ? "0" + h : h;
                            m = parseInt(m / 10) == 0 ? "0" + m : m;
                            return h + ":" + m;
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#1F479A"
                        }
                    },
                    axisTick: {
                        lineStyle: { color: "#1F479A" }
                    },
                    splitLine: {
                        lineStyle: { color: "#1F479A" }
                    },
                    boundaryGap: false,
                    data: xAxis,
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#1F479A"
                        }
                    },
                    axisTick: {
                        lineStyle: { color: "#1F479A" }
                    },
                    splitLine: {
                        lineStyle: { color: "#1F479A" }
                    }
                },
                series: nlist
            };


            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);



        }
    })

})