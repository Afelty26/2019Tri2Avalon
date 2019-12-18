$(".color").click(
    function(){
        var color = $(this).css("background-color");
        $(".circle").css("background-color",color);
    }
);
