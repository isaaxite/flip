/**
 * 分页
 * @param sender.cur_page 当前页
 * @param sender.total_page 总页数
 * @param sender.show_page 显示的页数 = show_page * 2 + 4
 * @param sender.url 跳转目标页
 **/
$.fn.flip = function(sender){
    var cur_page = parseInt(sender.cur_page);
    var total_page = parseInt(sender.total_page);
    var show_page = sender.show_page || 6;

    // console.log("当前页" + cur_page + " 总页数" + total_page + " url:" + url);
    var result = cur_page == 1 ? '' : '<div class="element"><a class="prev" href="'+sender['url'].replace("#page#", cur_page-1)+'"></a></div>';
    for(var i = 1; i <= total_page; i++) {
        if(i == 2 && cur_page - show_page > 1) {
            i = cur_page - show_page;
            result += '<div class="element"><a class="omit" href="javascript:;">...</a></div>';
        }else if(i == cur_page + show_page && cur_page + show_page < total_page) {
            i = total_page - 1;
            result +='<div class="element"><a class="omit" href="javascript:;">...</a></div>';
        }else{
            if(i == cur_page){
                result +='<div class="element active"><a href="javascript:;">'+i+'</a></div>'
            }else{

                result +='<div class="element"><a href="'+sender['url'].replace("#page#", i)+'">'+i+'</a></div>';
            }
        }
    }
    result += cur_page == total_page  || total_page == 0 ? '' : '<div class="element"><a class="next" href="'+sender['url'].replace("#page#", cur_page+1)+'"></a></div>';
    $(this).html(result);
};