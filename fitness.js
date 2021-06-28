$("#cartbox span").hide();
$(".product-section button").on("click",function(){
    var pressed = $(this);
    pressed.css("background-color","green");
    pressed.text("Added To cart");
    var parent=$(this).parent();
    $(parent.html()).appendTo("#cartbox div");
    $("#cartbox h2").hide();
    $("#cartbox button").hide();
    $("<br><br><br>").appendTo("#cartbox div");
    $("#cartbox span").show();
});