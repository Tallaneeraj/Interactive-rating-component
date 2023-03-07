

$(".value").click(function () {
    var rating = $(this).attr("id");
    for (var i=1; i<=rating;i++){
        $("#"+i).css("background-color","#FC7614");
    }
    change_rating(rating);
})


function change_rating(rating) {
    $("#rating_num").html(" " + rating + " ");
}

$(".btn").click(function () {
    $("#form").addClass("hidden");
    $("#status").removeClass("hidden");
});

