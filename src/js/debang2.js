require('../less/debang2.less');
var index = 0;
var flag = true;
var obj = {
    init:function(){
        var $oli = $('.feel2 .move');
        $oli.eq(0).css({'left':'0px','height':'250px','top':'50%','margin-top':'-125px','z-index':1,'opacity':0.7});
        $oli.eq(1).css({'left':'50px','height':'300px','top':'50%','margin-top':'-150px','z-index':2,'opacity':0.8});
        $oli.eq(2).css({'left':'100px','height':'350px','top':'50%','margin-top':'-175px','z-index':3,'opacity':0.9});
        $oli.eq(3).css({'left':'175px','height':'400px','top':'50%','margin-top':'-200px','z-index':4,'opacity':1});
        $oli.eq(4).css({'left':'250px','height':'350px','top':'50%','margin-top':'-175px','z-index':3,'opacity':0.9});
        $oli.eq(5).css({'left':'300px','height':'300px','top':'50%','margin-top':'-150px','z-index':2,'opacity':0.8});
        $oli.eq(6).css({'left':'350px','height':'250px','top':'50%','margin-top':'-125px','z-index':1,'opacity':0.7})
    },
    event:function(){
        var self = this;
        $('.btnleft').on('click',function () {
            self.leftmove();
            console.log('---------');
        });
        $('.btnright').on('click',function () {
            self.rightmove();
        })
    },
    leftmove:function(){
        // var index = 0;
        // var flag = true;
        var $oli = $('.feel2 .move');
        if(flag) {
            flag = false;
            $oli.eq(index % 7).animate({'left':'350px','height':'250px','top':'50%','margin-top':'-125px','z-index':1,'opacity':0.7});
            $oli.eq((index + 1) % 7).animate({'left':'0px','height':'250px','top':'50%','margin-top':'-125px','z-index':1,'opacity':0.7});
            $oli.eq((index + 2) % 7).animate({'left':'50px','height':'300px','top':'50%','margin-top':'-150px','z-index':2,'opacity':0.8});
            $oli.eq((index + 3) % 7).animate({'left':'100px','height':'350px','top':'50%','margin-top':'-175px','z-index':3,'opacity':0.9});
            $oli.eq((index + 4) % 7).animate({'left':'175px','height':'400px','top':'50%','margin-top':'-200px','z-index':4,'opacity':1});
            $oli.eq((index + 5) % 7).animate({'left':'250px','height':'350px','top':'50%','margin-top':'-175px','z-index':3,'opacity':0.9});
            $oli.eq((index + 6) % 7).animate({'left':'300px','height':'300px','top':'50%','margin-top':'-150px','z-index':2,'opacity':0.8},function(){
                index ++;
                flag = true;
            });  
        } 
        console.log('++++++');
    },
    rightmove:function(){
        // var index = 0;
        // var flag = true;
        var $oli = $('.feel2 .move');
        if(flag) {
            flag = false;
            $oli.eq(index % 7).animate({'left':'50px','height':'300px','top':'50%','margin-top':'-150px','z-index':2,'opacity':0.8});
            $oli.eq((index + 1) % 7).animate({'left':'100px','height':'350px','top':'50%','margin-top':'-175px','z-index':3,'opacity':0.9});
            $oli.eq((index + 2) % 7).animate({'left':'175px','height':'400px','top':'50%','margin-top':'-200px','z-index':4,'opacity':1});
            $oli.eq((index + 3) % 7).animate({'left':'250px','height':'350px','top':'50%','margin-top':'-175px','z-index':3,'opacity':0.9});
            $oli.eq((index + 4) % 7).animate({'left':'300px','height':'300px','top':'50%','margin-top':'-150px','z-index':2,'opacity':0.8});
            $oli.eq((index + 5) % 7).animate({'left':'350px','height':'250px','top':'50%','margin-top':'-125px','z-index':1,'opacity':0.7});
            $oli.eq((index + 6) % 7).animate({'left':'0px','height':'250px','top':'50%','margin-top':'-125px','z-index':1,'opacity':0.7},function(){
                index --;
                flag = true;
            });  
       } 
    }
}
module.exports = obj;