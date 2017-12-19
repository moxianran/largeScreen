$(function() {
    $.get("db/dc_cl.json", function(data) {

        var legendData = [];
        var seriesData = [];

        var num3=0;
        var count = data.length;


        for (var i = 0; i < count; i++) {
            num3 = parseInt(num3)+parseInt(data[i]['cdz']);
        }
        console.log(num3);
        for (var i = 0; i < count; i++) {
            num = (data[i]['cdz']/num3*100).toFixed(2)
            console.log(num);

            legendData.push(data[i]['name']+"  "+data[i]['cdz']+"  "+num+"%");
            seriesData.push({
                name: data[i]['name']+"  "+data[i]['cdz']+"  "+num+"%",
                value: data[i]['cdz']
            });
        }
        console.log(legendData);
        console.log(seriesData);

        var myChart = echarts.init(document.getElementById('main3'));
        option = {
            color:  [
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
            ],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b})"
            },
            // label: {
            //     normal: {
            //         formatter: "{b}:{d}%"
            //     }
            // },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: legendData,
                textStyle: {
                    color: "#fff"
                }
            },
            series: [{
                label: {
                    normal: {
                        show:false
                    }
                },
                name: '类型',
                type: 'pie',
                radius: '55%',
                center: ['30%', '50%'],
                data: seriesData,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })

    $.get("db/gx_fh.json", function(data) {

        var legendData = [];
        var seriesData = [];

        var count = data.length;

        var num4 = 0;
        for (var i = 0; i < count; i++) {
            num4 = parseInt(num4)+parseInt(data[i]['cdz']);
        }

        for (var i = 0; i < count; i++) {

            num = (data[i]['cdz']/num4*100).toFixed(2)
            console.log(num);

            legendData.push(data[i]['name']+"  "+data[i]['cdz']+"  "+num+"%");
            seriesData.push({
                name: data[i]['name']+"  "+data[i]['cdz']+"  "+num+"%",
                value: data[i]['cdz']
            });
        }
        console.log(legendData);
        console.log(seriesData);

        var myChart = echarts.init(document.getElementById('main4'));
        option = {
            color:  [
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
            ],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}"
            },
            // label: {
            //     normal: {
            //         formatter: "{b}:{d}%"
            //     }
            // },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: legendData,
                textStyle: {
                    color: "#fff"
                }
            },
            series: [{
                label: {
                    normal: {
                        show:false
                    }
                },
                name: '乡镇',
                type: 'pie',
                radius: '55%',
                center: ['30%', '50%'],
                data: seriesData,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    });

    var aaaaa;
    $.get("db/qtz_fz.json", function(data) {
        var nb_other_name = [];
        var nb_other_val = [];
        for (var i = 0; i < data.length; i++) {
            nb_other_name.push(data[i]['name']);

            aaaaa= parseInt(data[i]['cdz']);
            console.log();
            nb_other_val.push(aaaaa.toFixed(0));
        }

        //console.log(nb_other_val);
        var myChart = echarts.init(document.getElementById('main5'));

        option = {
            color: [
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
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },

            xAxis: [{
                type: 'category',
                data: nb_other_name,
                axisTick: {
                    alignWithLabel: true
                },
                textStyle: {
                    color: "#FFF",
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: "#0bdcdd",
                        fontSize: 15,
                        fontWeight: "bold",
                    }
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: "#0bdcdd",
                        fontSize: 15,
                        fontWeight: "bold",
                    }
                },
                splitLine: {
                    show: false
                },
            }],
            series: [{
                name: '城市',
                type: 'bar',
                barWidth: '60%',
                data: nb_other_val,
                textStyle: {
                    color: "#FFF",
                },
                label: {
                    normal: {
                        show: true,
                        position: "top",
                        color: "#fff",
                        fontSize: 14,
                    }
                },
                itemStyle: {
                    normal: {
                        //width: 2,
                        color: function(params) {
                            var colorList = [
                                "#ff6340",
                                "#00b2ff",
                                "#09c981",
                                "#fc00b7",
                                "#00e0ff",
                                "#fffae8",
                                "#ffff87",
                                "#2809e6",
                                "#2bffc2",
                                "#ff8cfd",
                                "#ff6340",
                                "#00b2ff",
                                "#09c981",
                                "#fc00b7",
                                "#00e0ff",
                                "#fffae8",
                                "#ffff87",
                                "#2809e6",
                                "#2bffc2",
                                "#ff8cfd",
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
            }]
        };


        myChart.setOption(option);
    })

})