/**
 * Created by 高媛媛 on 2017/10/19.
 */
app.directive("ser",function(){
    return{
        restrict:"EA",
        templateUrl:"./App/Views/template/_ser.html",
        link:function(scope,ele,attr){
            var myswiper=new Swiper('.swiper-container',{
                autoplay:'1000',
                loop:true,
                effect:'coverflow',
                pagination:".swiper-pagination"
            })
            var myScroll = new IScroll('.scroller', {
                scrollbars: true,
                mouseWheel: true,
                scrollX:true,
                click:true
            });
            $('footer').on('click','a',function(){
                $(this).addClass('bg').siblings().removeClass('bg');
                $(this).find('i').addClass('bg').parent().siblings().find('i').removeClass('bg');
            })
            $('header').on('click','b',function(){
                $(this).addClass('hui').siblings().removeClass('hui');
                var index= $(this).index();
                $('.section>div').eq(index).show().siblings().hide();
            })
        }
    }
})