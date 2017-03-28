//check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});


//Removes To-Dos from the To-Do List - Deletes them after FadeOut
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//Adds items to To-Do List with input box pressing enter
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-minus'></i></span> " + todoText + "</li>")
    }
});

$(".fa-arrow-circle-down").click(function () {
    $("#toggle-input-box-div").slideToggle();
    $(this).toggleClass("fa-plus");
    $(this).toggleClass("fa-arrow-circle-down");
});
