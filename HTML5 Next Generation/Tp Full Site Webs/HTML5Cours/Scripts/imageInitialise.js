$(document).ready(function () {


    $("article div.container").each(function () {

        degres = 15;

        rotation = (Math.random() >= 0.5) ? Math.random() * degres : (Math.random() * degres) * -1;
        $(this).css({ "transform": "rotate(" + rotation + "deg)" });

    });

   
});