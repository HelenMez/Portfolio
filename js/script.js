$(".light").click(function(){
    $("body").css({
        background: "linear-gradient(140deg, white, 70%, #8912b5)"
    })
    $("h2, h1, .nav_btn, h3, label").css({
        color: "#362064"
    })
    $("nav").css({
        background: "linear-gradient(140deg, white, 70%, #8912b5)"
    })
    $(".h3, p").css({
        color: "#8912b5"
    })
    $(".dark p").css({
        color: "#ccc"
    })
    $(".light p").css({
        color: "#362064"
    })
    $(".cont_inf, .cont_inf2").css({
        background: "#ccc",
        color: "rgb(68, 5, 68)"
    })
})
$(".dark").click(function(){
    $("body").css({
        background: "linear-gradient(140deg, black, 70%, #8912b5)"
    })
    $("h2, h1, .nav_btn, h3").css({
        color: "white"
    })
    $("nav").css({
        background: "linear-gradient(140deg, black, 70%, #4e2b98)"
    })
    $(".h3, p, label").css({
        color: "#ccc"
    })
    $(".dark p").css({
        color: "#ccc"
    })
    $(".light p").css({
        color: "#362064"
    })
    $(".cont_inf, .cont_inf2").css({
        background: "rgb(68, 5, 68)",
        color: "#ccc"
    })
})

$(document).ready(function(){
$("nav").on("click","a", function (event) {
event.preventDefault();
var id = $(this).attr('href'),
top = $(id).offset().top;
$('body,html').animate({scrollTop: top}, 2000);
});
});
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "xiImbp4rHLOFZy88l",
    });
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var userInput = $('#userInput').val();
        if (!userInput) {
            swal("ERROR!", "You did not fill out the input field ):", "error");
        } else {
            emailjs.sendForm('service_fwdp0kn', 'template_clsb16a', this)
                .then(() => {
                    swal("Sent!", "You sent me a message!", "success");
                    $('.cont_inf').val("");
                    $('.cont_inf2').val("");
                })
                .catch((error) => {
                    swal("ERROR!", "Your message was not sent ):", "error");
                });
        }
    });
}
