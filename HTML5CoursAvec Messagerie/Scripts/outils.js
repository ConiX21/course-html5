var ctx = cvs.getContextCanvas();

/***************interface detente Events******************/
$("#svgOutilsGomme").click(function () {
    if (confirm("Voulez-vous supprimer votre dessin ?")) {
        ctx.clearRect(0, 0, cvs.getWidth(), cvs.getHeight());
    }
});
$("#svgOutilsRect").click(function () {


    //$("#confOutilsRect").fadeIn("slow");
    $("#confOutilsRect").show("slow");
    //$("#confOutilsRect").slideDown("slow", function () {
    //    $("#confOutilsRect").slideUp("slow", function () {
    //        $("#confOutilsRect").show("slow");
    //    });
    //});

});
$("#svgBtnClose").click(function () {
    //$("#confOutilsRect").hide("slow");
    //$("#confOutilsRect").hide("slow");
    $("#confOutilsRect").slideUp("slow");
});
$("#svgOutilsSave").click(function () {
    if (confirm("Voulez-vous sauver les paramètres ?")) {
        paramObj = {
            posX: $("#numberX").val(),
            posY: $("#numberY").val(),
            width: $("#numberLargeur").val(),
            height: $("#numberHauteur").val(),
            color: $("input[type='color']").val(),
            colorStroke: ctx.strokeStyle,
            posXFenetre: $("#confOutilsRect").css("left"),
            posYFenetre: $("#confOutilsRect").css("top")
        }

        localStorage.setItem("param", JSON.stringify(paramObj));
        //localStorage.param = JSON.stringify(paramObj);

    }
});
$("input[value$='er']").click(function () {
    objRect = {
        posX: $("#numberX").val(),
        posY: $("#numberY").val(),
        width: $("#numberLargeur").val(),
        height: $("#numberHauteur").val(),
        color: $("input[type='color']").val()
    };

    ctx.fillStyle = objRect.color;
    ctx.fillRect(objRect.posX, objRect.posY, objRect.width, objRect.height);
});

/****************UI Functions*********************/
$("#confOutilsRect").draggable();

function setParameters(objParam) {
    $("#numberX").val(objParam.posX);
    $("#numberY").val(objParam.posY);
    $("#numberLargeur").val(objParam.width);
    $("#numberHauteur").val(objParam.height);
    $("input[type='color']").val(objParam.color);
    ctx.strokeStyle = objParam.colorStroke;
    $("#confOutilsRect").css("left", objParam.posXFenetre);
    $("#confOutilsRect").css("top" , objParam.posYFenetre);
}

/********************* functions générales outils ******************/
function localStorageNotEmpty() {
    return (localStorage.length != 0) ? true : false;
}

function parseParamObj(localStorageKey) {
    objReturn = "undefined";

    for (var item in localStorage) {
        if (item == localStorageKey) {
            objReturn = JSON.parse(localStorage.getItem(item));
            break;
        }
    }
    return objReturn;
}

/************************** Appels ********************************/
if (localStorageNotEmpty()) {
    obj = parseParamObj("param");

    if (obj != "undefined") {
        setParameters(obj);
    }
}


/******************** INFOS *************************/
//vider un localStorage : 
localStorage.clear();
//vider un element du localStorage
localStorage.removeItem("param");

