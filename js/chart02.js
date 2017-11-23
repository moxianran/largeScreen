var a2 = [];//西店镇
var b2 = [];//一市镇
var c2 = [];//前童镇
var d2 = [];//跃龙街道
var e2 = [];//桃源街道
var f2 = [];//力洋镇

var time_data2 = [
    '0','2','4','6','8','10','12','14','16','18','20','22','24'
]

var time_data_array2 = [
    '00:15','02:00','04:00','06:00','08:00','10:00',
    '12:00','14:00','16:00','18:00','20:00','22:00','00:00'
]

$(function () {
    // 基于准备好的dom，初始化echarts实例

    $.ajax({
        url: "b.php",
        type: "post",
        dataType: 'json',
        success: function (data) {

            for(var i = 0; i < data.length; i++){
                if(data[i]['name'] == '西店镇') {
                    if($.inArray(data[i]['time'].substring(11,16), time_data_array) >= 0) {
                        //console.log(data[i]['time'].substring(11,16));
                        a2.push(data[i]['cdz']);
                    }
                } else if(data[i]['name'] == '一市镇') {
                    if($.inArray(data[i]['time'].substring(11,16), time_data_array) >= 0) {
                        //console.log(data[i]['time'].substring(11,16));
                        b2.push(data[i]['cdz']);
                    }
                } else if(data[i]['name'] == '前童镇') {
                    if($.inArray(data[i]['time'].substring(11,16), time_data_array) >= 0) {
                        //console.log(data[i]['time'].substring(11,16));
                        c2.push(data[i]['cdz']);
                    }
                } else if(data[i]['name'] == '跃龙街道') {
                    if($.inArray(data[i]['time'].substring(11,16), time_data_array) >= 0) {
                        //console.log(data[i]['time'].substring(11,16));
                        d2.push(data[i]['cdz']);
                    }
                } else if(data[i]['name'] == '桃源街道') {
                    if($.inArray(data[i]['time'].substring(11,16), time_data_array) >= 0) {
                        //console.log(data[i]['time'].substring(11,16));
                        e2.push(data[i]['cdz']);
                    }
                } else if(data[i]['name'] == '力洋镇') {
                    if($.inArray(data[i]['time'].substring(11,16), time_data_array) >= 0) {
                        //console.log(data[i]['time'].substring(11,16));
                        f2.push(data[i]['cdz']);
                    }
                }
            }

            var myChart = echarts.init(document.getElementById('main2'));
            option = {
                title: {
                    text: '',//名字
                    textStyle:{
                        color:"#FFF",
                        fontWeight:"normal",
                        fontSize:"16"
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['西店镇', '一市镇', '前童镇', '跃龙街道', '桃源街道', '力洋镇'],
                    textStyle:{
                        color:"#fff"
                    }
                },
                xAxis:  {
                    type: 'category',
                    axisLabel:{
                        textStyle:{
                            color:"#fff"
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:"#1F479A"
                        }
                    },
                    axisTick:{
                        lineStyle:{color:"#1F479A"}
                    },
                    splitLine:{
                        lineStyle:{color:"#1F479A"}
                    },
                    boundaryGap: false,
                    data: time_data2
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        textStyle:{
                            color:"#fff"
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:"#1F479A"
                        }
                    },
                    axisTick:{
                        lineStyle:{color:"#1F479A"}
                    },
                    splitLine:{
                        lineStyle:{color:"#1F479A"}
                    },
                    data:[25000, 325000, 25704, 40000, 35420, 25421, 50000],
                },
                series: [
                    {
                        name:'西店镇',
                        type:'line',
                        data:a2,
                        lineStyle:{
                            normal:{color:'#DA8568'}
                        },
                        itemStyle:{
                            normal:{color:"#DA8568"}
                        }
                    },
                    {
                        name:'一市镇',
                        type:'line',
                        data:b2,
                        lineStyle:{
                            normal:{color:'#2CBCBD'}
                        },
                        itemStyle:{
                            normal:{color:"#2CBCBD"}
                        }
                    },
                    {
                        name:'前童镇',
                        type:'line',
                        data:c2,
                        lineStyle:{
                            normal:{color:'#FDF002'}
                        },
                        itemStyle:{
                            normal:{color:"#FDF002"}
                        }
                    },
                    {
                        name:'跃龙街道',
                        type:'line',
                        data:d2,
                        lineStyle:{
                            normal:{color:'#DA8568'}
                        },
                        itemStyle:{
                            normal:{color:"#DA8568"}
                        }
                    },
                    {
                        name:'桃源街道',
                        type:'line',
                        data:e2,
                        lineStyle:{
                            normal:{color:'#2CBCBD'}
                        },
                        itemStyle:{
                            normal:{color:"#2CBCBD"}
                        }
                    },
                    {
                        name:'力洋镇',
                        type:'line',
                        data:f2,
                        lineStyle:{
                            normal:{color:'#FDF002'}
                        },
                        itemStyle:{
                            normal:{color:"#FDF002"}
                        }
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    })
})
