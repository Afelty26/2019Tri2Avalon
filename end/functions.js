$(".color").click(
    function(){
        var color = $(this).css("background-image");
        $(".circle").css("background-image",color);
    }
);
