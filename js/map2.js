/**
 * Created by Administrator on 2017/6/22.
 */
$(function() {
    test();

    function test() {
        //自定义图标路径
        var iconPath = 'image://../largeScreen/light_icon.png';
        require.config({
            paths: {
                echarts: '../static/echarts/src'
            }
        });
        require(
            [
                'echarts',
                'echarts/chart/map'
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('container'));
                // 自定义扩展图表类型：mapType = body
                require('echarts/util/mapData/params').params.ninghaimap = {
                    getGeoJson: function(callback) {
                        $.ajax({
                            type: "get",
                            url: "../static/echarts/svg/ninghaimap.svg",
                            dataType: 'xml',
                            success: function(xml) {
                                callback(xml)
                            }
                        });
                    }
                }
                option = {
                    title: {
                        text: '',
                        x: 'center',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        formatter: '{b}'
                    },
                    color: ['#D35D72', '#D66A40', '#CBAC11', '#19AB94'],
                    series: []
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                    myChart.setSeries([{
                        name: "县内电厂",
                        type: 'map',
                        mapType: 'ninghaimap',
                        roam: true,
                        itemStyle: {
                            normal: {
                                label: { show: true },

                            },
                            emphasis: {
                                label: { show: true },
                            }
                        },
                        data: [],
                        geoCoord: {
                            '国华电厂': [230, 26],
                            '茶山风电': [325, 150],
                            '西溪水电站': [90, 155],
                            '白溪水电站': [65, 250],
                            '一市风电': [180, 275]
                        }
                    }]);

                    // setTimeout(() => {
                    //     myChart.addMarkPoint('0', {
                    //         symbol: 'emptyCircle',
                    //         symbolSize: function(v) {
                    //             return 10 + v / 10
                    //         },
                    //         effect: {
                    //             //坐标点效果是否闪烁
                    //             show: true,
                    //             color: 'yellow'
                    //         },

                    //         data: [
                    //             { name: '国华电厂' },
                    //             { name: '茶山风电' },
                    //             { name: '西溪水电站' },
                    //             { name: '白溪水电站' },
                    //             { name: '一市风电' }
                    //         ]
                    //     });

                    //     myChart.addMarkLine(0, {
                    //         smooth: true,
                    //         smoothness: 0.2,
                    //         effect: {
                    //             show: true,
                    //             type: 'bounce',
                    //             symbolSize: 10,
                    //             period: 20,
                    //             bounceDistance: 10,
                    //             shadowBlur: 4
                    //         },
                    //         //连线的箭头默认样式及大小
                    //         symbol: ['circle', 'circle'],
                    //         symbolSize: 1,
                    //         smoothness: 0,
                    //         itemStyle: {
                    //             normal: {
                    //                 borderWidth: 2,
                    //                 lineStyle: {
                    //                     type: 'solid'
                    //                 }
                    //             }
                    //         },
                    //         data: [
                    //             [
                    //                 { name: '国华电厂' },
                    //                 { name: '茶山风电' }
                    //             ],
                    //         ]
                    //     });

                    //     setTimeout(() => {
                    //         //   myChart.delMarkLine(0, '国华电厂 > 茶山风电')
                    //     }, 2000);
                    // }, 1000);
                }
            }
        );
    }
})