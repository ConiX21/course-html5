(function () {
    var tabCouleur = ["#206BA4", "#54A4DE", "#BBD9EE",
                      "#BEDF5D", "#D6EB9A", "#FF9834",
                      "#FFBF80", "#F6E896", "#B07D42", "#FF5349"];
    var canvas = document.querySelector("#dessin");
    var div = document.querySelector(".Palette");
    var canvasParameters = document.querySelector("#frmCanvasParameters");
    var ctx = canvas.getContext('2d');
    var enDessin = false;

    initSpan();

    function initSpan() {
        for (i = 0; i < tabCouleur.length; i++)
        {
            var span = document.createElement("span");
            span.innerHTML = "&nbsp;";
            span.style.backgroundColor = tabCouleur[i];
            div.appendChild(span);
        }
    }

    function dessiner(mouseX, mouseY) {
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }

    canvas.addEventListener("mousedown", function (evt) {
        enDessin = true;
        ctx.beginPath();
        ctx.moveTo(evt.offsetX, evt.offsetY);
    });

    canvas.addEventListener("mouseup", function () {
        enDessin = false;
        //ctx.closePath();
    });

    canvas.addEventListener("mousemove", function (evt) {
        if (enDessin) {
            dessiner(evt.offsetX, evt.offsetY);
        }
    });

    div.addEventListener("click", function (evt) {
        ctx.strokeStyle = evt.target.style.backgroundColor;
    });

    console.log(canvasParameters);

    canvasParameters.addEventListener("input", function () {
        
        var range = document.querySelector("#frmCanvasParameters input[type='range']");
        var size ;


        for (var i = 0; i < this.childNodes.length; i++) {

            if (this.childNodes[i].nodeName == "OUTPUT") {
                size = range.value;
                this.childNodes[i].value = size + 'px';
                ctx.lineWidth = size;
            }
        }
        
    });


})()