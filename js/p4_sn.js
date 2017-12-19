$(function() {
    var myChart = echarts.init(document.getElementById('main6'));

    $.get("db/bdz_sn.json", function(data) {
        var xAxis = [];
        var d1 = [];
        var d2 = [];

        for (var i in data) {
            if ($.inArray(data[i].years, xAxis) < 0) {
                xAxis.push(data[i].years);
            }
            if (data[i].name == "全社会电量") {
                d1.push(data[i].value);
            }
            if (data[i].name == "统调负荷") {
                d2.push(data[i].value);
            }

        }
        console.log(data);
        var option = {
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
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend: {
                textStyle: {
                    color: "#fff"
                },
                data: ['全社会电量', "统调负荷"],
            },
            xAxis: [{
                type: 'category',
                data: xAxis,
                axisPointer: {
                    type: 'shadow'
                },
                boundaryGap: true,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    },
                    formatter: function(v, i) {
                        return v + "年";
                    }
                },
            }],
            yAxis: [{
                    type: 'value',
                    name: '万千瓦',
                    nameTextStyle: {
                        color: 'white',
                        fontWeight: "bold",
                        fontSize: 15,
                    },
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: "#0bdcdd",
                            fontSize: 15,
                            fontWeight: "bold",
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
                        show: false
                    },
                    boundaryGap: false,
                },
                {
                    type: 'value',
                    name: '亿万千瓦',
                    nameTextStyle: {
                        color: 'white',
                        fontWeight: "bold",
                        fontSize: 15,
                    },
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: "#0bdcdd",
                            fontSize: 15,
                            fontWeight: "bold",
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
                        show: false
                    },
                    boundaryGap: ['20%', '20%']
                }
            ],
            series: [{
                    name: '全社会电量',
                    type: 'bar',
                    data: d1,
                    label: {
                        normal: {
                            show: true,
                            position: "top",
                            color: "#fff",
                            fontSize: 14,
                        }
                    },
                    barWidth : 45,
                    itemStyle: {
                        normal: {
                            width: 2,
                            // color: "#CF685E",
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
                                    "#ff8cfd"
                                ];
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                },
                {
                    name: "统调负荷",
                    type: 'line',
                    yAxisIndex: 1,
                    data: d2,
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
                            borderWidth: 10,
                        }
                    },
                    lineStyle: {
                        normal: {
                            // color: "#b83e45",
                            width: 5,
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);

    })
});