$(document).ready(function() {

    $(".registerdivision").hide();
    $(".changerdivision").hide();

    $("#startSession").click(function() {

        $(".logindivision").fadeIn("slow");
        $(".registerdivision").hide();
        $(".changerdivision").hide();
        $('#startSession').addClass('active');
        $("#passwordChange").removeClass('active');
        $("#registerUser").removeClass('active');
    })
    $("#registerUser").click(function() {

        $(".registerdivision").fadeIn("slow");
        $(".logindivision").hide();
        $(".changerdivision").hide();
        $('#startSession').removeClass('active');
        $("#passwordChange").removeClass('active');
        $("#registerUser").addClass('active');
    })
    $("#passwordChange").click( function() {

        $(".registerdivision").hide();
        $(".logindivision").hide();
        $(".changerdivision").fadeIn("slow");
        $('#startSession').removeClass('active');
        $("#passwordChange").addClass('active');
        $("#registerUser").removeClass('active');
    })
})