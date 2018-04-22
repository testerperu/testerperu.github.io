$(document).ready(function(){
    $('.toggleClass').on('click',function(){
        var el = $(this);
        if(el.data('target')){
            var  target = $(el.data('target'));
            target.toggleClass('toggle');
        }
    });
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});
