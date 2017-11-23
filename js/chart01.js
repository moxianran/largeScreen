var a = [];//全县总有功
var b = [];//网供总有功
var c = [];//昨日全县总有功
var time_data = [
    '00:00','04:00','08:00','12:00','16:00','20:00','24:00',
];
var time_data_array = [
    '00:05','04:00','08:00','12:00','16:00','20:00','00:00',
];

$(function () {
    // 基于准备好的dom，初始化echarts实例

    $.ajax({
        url: "a.php",
        type: "post",
        dataType: 'json',
        success: function (data) {
            for(var i = 0; i < data.length; i++){
                if(data[i]['name'] == '全县总有功') {
                    if($.inArray(data[i]['time'].substring(11,16), time_data) >= 0) {
                        //console.log(data[i]['time'].substring(11,16));
                        a.push(data[i]['cdz']);
                    }
                } else if(data[i]['name'] == '网供总有功') {
                    if($.inArray(data[i]['time'].substring(11,16), time_data) >= 0) {
                        //console.log(data[i]['time'].substring(11,16));
                        b.push(data[i]['cdz']);
                    }
                } else if(data[i]['name'] == '昨日全县总有功') {
                    if($.inArray(data[i]['time'].substring(11,16), time_data) >= 0) {
                        //console.log(data[i]['time'].substring(11,16));
                        c.push(data[i]['cdz']);
                    }
                }
            }

            var myChart = echarts.init(document.getElementById('main1'));
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
                    data:['全县总有功','圈供总有功','昨日全县总有功'],
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
                    data: time_data
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
                        name:'全县总有功',
                        type:'line',
                        data:a,
                        lineStyle:{
                            normal:{color:'#DA8568'}
                        },
                        itemStyle:{
                            normal:{color:"#DA8568"}
                        }
                    },
                    {
                        name:'圈供总有功',
                        type:'line',
                        data:b,
                        lineStyle:{
                            normal:{color:'#2CBCBD'}
                        },
                        itemStyle:{
                            normal:{color:"#2CBCBD"}
                        }
                    },
                    {
                        name:'昨日全县总有功',
                        type:'line',
                        data:c,
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
