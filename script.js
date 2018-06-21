
window.onload = function() {



function scrollNavItem() {

    $(".item1").on("click", function () {
        $(".item1").addClass("active");
        $(".opacity1").addClass("none");
        $(".item1").siblings().removeClass("active");
        $(".opacity1").siblings().removeClass("none");
      
	})
    $(".item2").on("click", function () {
        $(".item2").addClass("active");
        $(".opacity2").addClass("none");
        $(".item2").siblings().removeClass("active");
        $(".opacity2").siblings().removeClass("none");

    })
    $(".item3").on("click", function () {
        $(".item3").addClass("active");
        $(".opacity3").addClass("none");
        $(".item3").siblings().removeClass("active");
        $(".opacity3").siblings().removeClass("none");

    })
    $(".item4").on("click", function () {
        $(".item4").addClass("active");
        $(".opacity4").addClass("none");
        $(".item4").siblings().removeClass("active");
        $(".opacity4").siblings().removeClass("none");

    })
}
scrollNavItem();
}