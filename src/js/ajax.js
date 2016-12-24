require('../less/ajax.less');
var block = false;
function creatPage(json,ajaxjson){
  var nownum = json.nownum || 1;
  var allnum = json.allnum || 5;

  if(nownum > 1){
    var $A = $('<a href="#' + (nownum - 1) + '" class="prv">上一页</a>');
    $('.turnpage').append($A);
    }

  for(var i = 1; i <= allnum; i++){
    var $A = $('<a href="#' + i + '"></a>');
    if(i === nownum){
      $A.text(i); 
    }else{
      $A.text('[' + i + ']');
    }
    $('.turnpage').append($A);
  }

  if(nownum < allnum){
    var $A = $('<a href="#'+ (nownum + 1) +'" class="next">下一页</a>');
    $('.turnpage').append($A);
  }
 
 $('.turnpage').find('a').on('click',function(){
   if(!block) {
     block = true;
     var nownum = parseInt($(this).prop('href').slice(-1));
     console.log(nownum);
     $('.turnpage').html('');
     json.nownum = nownum;
     creatPage(json,ajaxjson);
   }
 })
 json.callback(nownum,allnum,ajaxjson);
}

var json = {
      class:'main',
      nownum:1,
      allnum:5,
      callback: function(now,all,ajaxjson){
        var pageNum = (now * 10 < ajaxjson.length) ? 10 : ajaxjson.length % 10;
        if($('.job ul').length == 0){
          for (var i = 0; i < pageNum; i++) {
                    var ul = $('<ul><li class="spl">' + ajaxjson[(now - 1) * 10 + i].name + '<li class="spl1">' + ajaxjson[(now - 1) * 10 + i].address + '<li class="splm">' + ajaxjson[(now - 1) * 10 + i].salary + '<li class="splw">' + ajaxjson[(now - 1) * 10 + i].experience + '<li class="spls">' + ajaxjson[(now - 1) * 10 + i].degree + '<li class="date">' + ajaxjson[(now - 1) * 10 + i].time + '</ul>');
                    $('.job').append(ul);
                }
        } else {
          for (var i = 0; i < pageNum; i++) {
                   $('.job ul').eq(i).html('<li class="spl">' + ajaxjson[(now - 1) * 10 + i].name + '<li class="spl1">' + ajaxjson[(now - 1) * 10 + i].address + '<li class="splm">' + ajaxjson[(now - 1) * 10 + i].salary + '<li class="splw">' + ajaxjson[(now - 1) * 10 + i].experience + '<li class="spls">' + ajaxjson[(now - 1) * 10 + i].degree + '<li class="date">' + ajaxjson[(now - 1) * 10 + i].time);
                }  
        }
        block = false;  
     }
}

$.ajax({
  type:'get',
  url:'../src/data/debang1.txt',
  dataType:'json',
  success:function(ajaxjson){
    creatPage(json,ajaxjson);
  },
  error:function(){
    alert('错了');
  }
})