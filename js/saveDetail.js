$(function(){
    var id=getQueryString('productId');
    var page=getQueryString('page');
    var href='http://localhost:9090/';
    $.ajax({
        url: href + "api/getmoneyctrlproduct",
        data: {productid:id},
        success: function(data){
            var html=template('discountProductTpl',data);
            $('.detail-show').html(html);
        }
    });

    $('#header .back').on('tap',function(){
        location="moneyctrl.html?pagePrevent="+page;
    })
})
//使用正则写的获取url地址栏参数的方法
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}