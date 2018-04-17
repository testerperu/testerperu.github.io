/**
 * Created by DESARROLLO on 13/04/2018.
 */
$(document).ready(function(){
    $(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});