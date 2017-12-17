var height = document.body.scrollHeight;
var width = document.body.offsetWidth;

// 通用
$(".block_1").css('height', height * 0.355);
$(".date_box").css('margin-top', height * 0.033);
$(".load_status_box").css('margin-top', height * 0.033);


$(".block_2").css('height', height * 0.32);
$(".curve_box_title").css('height', height * 0.0388);

$(".block_3").css('height', height * 0.325);

$("#main1").css('height', height * 0.272);
$("#main2").css('height', height * 0.272);

$(".block_4").css('height', height * 0.07);
$(".main_box_title").css('height', height * 0.0388);

$(".block_5").css('height', height * 0.605);


$(".block_6").css('margin-top', "20px");
$(".block_6").css('height', height * 0.32);
$(".scale").css('height', height * 0.244);
$(".scale p").css('line-height', $(".scale p").height() + "px");

$(".block_7").css('height', height * 0.353);

$(".block_9").css('height', height * 0.313);
$(".list_box").css('height', height * 0.313);


$(".list2_title").css('height', height * 0.04);

$(".block_10").css('height', height * 0.313);
$(".block_9").css('margin-top', height * 0.033);
$(".block_10").css('margin-top', height * 0.033);

$(".block_11").css('height', height * 0.638);
$(".block_12").css('height', height * 0.638);


// 视频模式
$(".shipin_title").css('margin-top', height * 0.033);
$(".shipin_body").css('height', height * 0.910);

$(".search_box").css('height', height * 0.066);
$(".sp_text").css('height', height * 0.033);
$(".sp_text").css('margin-top', height * 0.017);
$(".sp_text").css('margin-bottom', height * 0.017);
$(".sp_btn").css('margin-top', height * 0.019);
$(".sp_btn").css('margin-bottom', height * 0.017);
$(".sp_content").css('height', height * 0.111);
$(".sp_tit").css('height', height * 0.044);

//运行模式
$(".block_table_title1").css('margin-top', height * 0.033);
// $(".block_table_title1").css('border-bottom',height*0.033);


$(".block_table_body").css('height', height * 0.275);
$(".block_table_body").css('margin-bottom', height * 0.008);

$(".block_table_title2").css('height', height * 0.04);
$(".block_table_title2").css('line-height', height * 0.04 + 'px');

//供电情况
$(".base_title").css('height', height * 0.07);

$(".shinian_div").css('margin-top', height * 0.017);
$(".shinian_div").css('height', height * 0.886);
$(".shinian_tit").css('height', height * 0.06);
$(".shinian_tit").css('line-height', height * 0.06 + 'px');

$(".shinian_body").css('height', height * 0.82);



$(".change_dv select").change(function() {
    window.location.href = $(this).val();
})

$(".change_dv select").val(window.location.pathname.replace("/", ""))