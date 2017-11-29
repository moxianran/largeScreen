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
<body>
    <div class="controller">

        <div class="block w30 fl">
            <!--小屏1开始-->
            <div class="block_1">

                <div class="date_box fl">

                    <p class="date_p">
                        <em id="year"></em>年<em id="month"></em>月<em id="day"></em>日 星期<em id="week"></em>
                    </p>
                    <p class="time_p">
                        <em id="hour"></em>时<em id="minute"></em>分<em id="second"></em>秒
                    </p>
                    <p class="safe_day">
                        安全天数<span id="safeTime"></span>天
                    </p>

                    <div class="electricity_num">
                        <p>昨日全县用电量</p>
                        <span><em>123123</em>万KWh</span>
                    </div>
                    <div class="load_rate">
                        <p>昨日全县负荷率</p>
                        <span><em>非数字</em>%</span>
                    </div>
                </div>

                <div class="load_status_box fl">
                    <div class="load_status_title">负荷情况</div>

                    <div class="load_status_info">
                        <div class="load_status_info_box">
                            <p>
                                <span>当前宁波总负荷</span>
                                <em>132123.3</em>
                                <b>MW</b>
                            </p>
                            <p>
                                <span>当前宁波总负荷</span>
                                <em>132123.3</em>
                                <b>MW</b>
                            </p>
                            <p>
                                <span>当前宁波总负荷</span>
                                <em>132123.3</em>
                                <b>MW</b>
                            </p>
                            <p>
                                <span>当前宁波总负荷</span>
                                <em>132123.3</em>
                                <b>MW</b>
                            </p>
                            <p>
                                <span>当前宁波总负荷</span>
                                <em>132123.3</em>
                                <b>MW</b>
                            </p>
                            <p>
                                <span>当前宁波总负荷</span>
                                <em>132123.3</em>
                                <b>MW</b>
                            </p>
                            <p>
                                <span>当前宁波总负荷</span>
                                <em>132123.3</em>
                                <b>MW</b>
                            </p>
                            <p>
                                <span>当前宁波总负荷</span>
                                <em>132123.3</em>
                                <b>MW</b>
                            </p>
                            <p>
                                <span>当前宁波总负荷</span>
                                <em>132123.3</em>
                                <b>MW</b>
                            </p>
                            <p>
                                <span>当前宁波总负荷</span>
                                <em>132123.3</em>
                                <b>MW</b>
                            </p>


                        </div>
                    </div>
                </div>
            </div>
            <!--小屏1结束-->

            <!--小屏2开始-->
            <div class="block_2">
                <div class="curve_box">
                    <div class="curve_box_title">宁海全县负荷曲线</div>
                    <div class="curve_box_info" id="main1"></div>
                </div>
            </div>
            <!--小屏2结束-->

            <!--小屏3开始-->
            <div class="block_3">
                <div class="curve_box">
                    <div class="curve_box_title">各乡镇负荷曲线</div>
                    <div class="curve_box_info" id="main2"></div>
                </div>
            </div>
            <!--小屏3结束-->

        </div>

        <div class="block w40 fl">

            <!--小屏4开始-->
            <div class="block_4">
                <div class="block_4_box">
                    <div class="w40 fl">
                        <div class="logo fl">
                            <img src="img/img1.png" />
                        </div>
                        <div class="tit_box fl">
                            <span>国家电网</span>
                            <em>STATE GRID</em>
                        </div>
                        <div class="tit_box2 fl">
                            <span>国网宁海县电力公司</span>
                            <em>hda hjaduf hdjasddf jkf</em>
                        </div>

                    </div>
                    <div class="w30 fl site_title">电子信息大屏展示系统</div>
                    <div class="w30 fl change_box">

                        <div class="change_dv">
                            <select>
                                <option>负载模式1</option>
                                <option>负载模式2</option>
                                <option>负载模式3</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            <!--小屏4结束-->

            <div class="block_5">
                <div class="main_box">
                    <div class="main_box_title">宁海电网主网接线图</div>
                    <div class="main_box_info">

                        <div class="item" id="item">

                        </div>
                    </div>
                </div>
            </div>
            <div class="block_6">
                <div class="scale fl">
                    <div class="scale_bg"></div>
                    <div class="scale_info">
                        <h1>电网规模</h1>
                        <p>
                            <span>同掉电路</span>
                            <em><b>座</b><i>42</i></em>
                        </p>
                        <p>
                            <span>同掉电路</span>
                            <em><b>座</b><i>42</i></em>
                        </p>
                        <p>
                            <span>同掉电路</span>
                            <em><b>座</b><i>342</i></em>
                        </p>
                        <p>
                            <span>同掉电路</span>
                            <em><b>座</b><i>242</i></em>
                        </p>
                        <p>
                            <span>同掉电路</span>
                            <em><b>座</b><i>42</i></em>
                        </p>
                        <p>
                            <span>同掉电路</span>
                            <em><b>座</b><i>42</i></em>
                        </p>
                    </div>
                </div>

                <div class="icon_box_1">
                    <p>
                        <em><img src="img/4.png" /></em>
                        <span>220KW变点站</span>
                    </p>
                    <p>
                        <em><img src="img/4.png" /></em>
                        <span>220KW变点站</span>
                    </p>
                    <p>
                        <em><img src="img/4.png" /></em>
                        <span>220KW变点站</span>
                    </p>
                </div>

                <div class="icon_box_1">
                    <p>
                        <em><img src="img/4.png" /></em>
                        <span>220KW变点站</span>
                    </p>
                    <p>
                        <em><img src="img/4.png" /></em>
                        <span>220KW变点站</span>
                    </p>
                    <p>
                        <em><img src="img/4.png" /></em>
                        <span>220KW变点站</span>
                    </p>
                    <p>
                        <em><img src="img/4.png" /></em>
                        <span>220KW变点站</span>
                    </p>
                </div>
            </div>

        </div>

        <div class="block w30 fl">
            <div class="block_7">

                <div class="block_9 fl">
                    <div class="list_box fl">
                        <div class="list_title">负荷情况</div>
                        <div class="list_info">
                            <ul>
                                <li class="list_info_head">
                                    <p>变点所</p>
                                    <p>变点所</p>
                                    <p>变点所</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="block_10 fl">
                    <div class="list2_box fl">
                        <div class="list2_title">负荷情况</div>
                        <div class="list2_info">
                            <ul>
                                <li class="list_info_head">
                                    <p>变点所</p>
                                    <p>变点所</p>
                                    <p>变点所</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block_8">
                <div class="block_11 fl">
                    <div class="block_13">
                        <div class="list2_box fl">
                            <div class="list2_title">负荷情况</div>
                            <div class="list2_info">
                                <ul>
                                    <li class="list_info_head">
                                        <p>变点所</p>
                                        <p>变点所</p>
                                        <p>变点所</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="block_14">
                        <div class="list2_box fl">
                            <div class="list2_title">负荷情况</div>
                            <div class="list2_info">
                                <ul>
                                    <li class="list_info_head">
                                        <p>变点所</p>
                                        <p>变点所</p>
                                        <p>变点所</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                    <li class="list_info_body">
                                        <p>宁海变电所</p>
                                        <p>变压器</p>
                                        <p>80%</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="block_12 fl">
                    <div class="list2_box fl" style="height: 93%;">
                        <div class="list2_title">负荷情况</div>
                        <div class="list2_info">
                            <ul>
                                <li class="list_info_head">
                                    <p>变点所</p>
                                    <p>变点所</p>
                                    <p>变点所</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                                <li class="list_info_body">
                                    <p>宁海变电所</p>
                                    <p>变压器</p>
                                    <p>80%</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script>
        var height = document.body.scrollHeight;
        var width = document.body.offsetWidth;

        $(".block_1").css('height',height*0.355);
        $(".date_box").css('margin-top',height*0.033);
        $(".load_status_box").css('margin-top',height*0.033);


        $(".block_2").css('height',height*0.32);
        $(".curve_box_title").css('height',height*0.0388);

        $(".block_3").css('height',height*0.325);

        $("#main1").css('height',height*0.272);
        $("#main2").css('height',height*0.272);

        $(".block_4").css('height',height*0.07);
        $(".main_box_title").css('height',height*0.0388);

        $(".block_5").css('height',height*0.605);


        $(".block_6").css('height',height*0.31);
        $(".scale").css('height',height*0.244);


        $(".block_7").css('height',height*0.353);

        $(".block_9").css('height',height*0.313);
        $(".list_box").css('height',height*0.313);


        $(".list2_title").css('height',height*0.04);

        $(".block_10").css('height',height*0.313);
        $(".block_9").css('margin-top',height*0.033);
        $(".block_10").css('margin-top',height*0.033);

        $(".block_11").css('height',height*0.638);
        $(".block_12").css('height',height*0.638);

    </script>

    <script type="text/javascript" src="js/chart01.js"></script>
    <script type="text/javascript" src="js/chart02.js"></script>
    <script type="text/javascript" src="js/map.js"></script>

</body>
</html>