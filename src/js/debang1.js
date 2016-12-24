require('../less/debang1.less');
var obj = {
   init:function(){
        var $input = document.getElementsByTagName('input');
        var $divcity = document.getElementsByClassName('cityn')[0];
        $input[0].onmouseenter = function () {
            $divcity.className = 'city';
        }
        $divcity.onmouseleave = function () {
            $divcity.className = 'cityn';
        }
   },
   city:function(){
    $('.catalog_hot').on('mousemove',function(){   
            $('.city_a').css({"display":"none"})
            $('.city_d').css({"display":"none"})
            $('.city_h').css({"display":"none"})
            $('.city_k').css({"display":"none"})
            $('.city_p').css({"display":"none"})
            $('.city_w').css({"display":"none"})
     })       
    $('.catalog_a').on('mousemove',function(){
        $('.city_a').css({"display":"block"})
        $('.city_detial').css({"display":"none"})
        $('.city_d').css({"display":"none"})
        $('.city_h').css({"display":"none"})
        $('.city_k').css({"display":"none"})
        $('.city_p').css({"display":"none"})
        $('.city_w').css({"display":"none"})
    }) 
    $('.catalog_d').on('mousemove',function(){
        $('.city_d').css({"display":"block"})
        $('.city_detial').css({"display":"none"})
        $('.city_a').css({"display":"none"})
        $('.city_h').css({"display":"none"})
        $('.city_k').css({"display":"none"})
        $('.city_p').css({"display":"none"})
        $('.city_w').css({"display":"none"})
    }) 
    $('.catalog_h').on('mousemove',function(){
        $('.city_h').css({"display":"block"}) 
        $('.city_detial').css({"display":"none"})
        $('.city_d').css({"display":"none"})
        $('.city_a').css({"display":"none"})
        $('.city_k').css({"display":"none"})
        $('.city_p').css({"display":"none"})
        $('.city_w').css({"display":"none"})
    }) 
    $('.catalog_k').on('mousemove',function(){
        $('.city_k').css({"display":"block"}) 
        $('.city_detial').css({"display":"none"})
        $('.city_d').css({"display":"none"})
        $('.city_h').css({"display":"none"})
        $('.city_a').css({"display":"none"})
        $('.city_p').css({"display":"none"})
        $('.city_w').css({"display":"none"})
    }) 
    $('.catalog_p').on('mousemove',function(){
        $('.city_p').css({"display":"block"})  
        $('.city_detial').css({"display":"none"})
        $('.city_d').css({"display":"none"})
        $('.city_h').css({"display":"none"})
        $('.city_k').css({"display":"none"})
        $('.city_a').css({"display":"none"})
        $('.city_w').css({"display":"none"})
    }) 
    $('.catalog_w').on('mousemove',function(){
        $('.city_w').css({"display":"block"})
        $('.city_detial').css({"display":"none"})
        $('.city_d').css({"display":"none"})
        $('.city_h').css({"display":"none"})
        $('.city_k').css({"display":"none"})
        $('.city_p').css({"display":"none"})
        $('.city_a').css({"display":"none"})
    }) 
   } 
}
module.exports = obj;