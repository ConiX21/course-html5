    //canvas = document.querySelectorAll("canvas");
var canvasSelector = $("canvas");

var tableauCouleur = [  "#206BA4", "#54A4DE", "#BBD9EE",
                        "#BEDF5D", "#D6EB9A", "#FF9834",
                        "#FFBF80", "#F6E896", "#b07d42",                "#FF5349"];





    for (var i = 0; i < tableauCouleur.length; i++) {
        createSpanColor(tableauCouleur[i]);
    }

    $(".Palette").click(function (evt) {
        cvs.getContextCanvas().strokeStyle = evt.target.style.backgroundColor;
    });







    function createSpanColor(couleur) {
        span = document.createElement("span");
        span.style.backgroundColor = couleur;
        span.innerHTML = "&nbsp;";
        $("div.Palette").append(span);
    }






    function Canvas(canvasSel, heightCvs, widthCvs, color) {
        height = heightCvs;
        width = widthCvs;
        colorStroke = color;
        canvas = canvasSel;
        ctx = canvas[0].getContext('2d');
        enDessin = false;
       
        this.init = function () {
            canvas[0].height = height;
            canvas[0].width = width;
            ctx.strokeStyle = colorStroke;
        }

        canvas.mousedown(function (evt) {
            enDessin = true;
            ctx.moveTo(evt.offsetX, evt.offsetY);
            ctx.beginPath();
        });

        canvas.mouseup(function () {
            enDessin = false;
            ctx.closePath();
        });

        canvas.mousemove(function (evt) {
            if (enDessin) {
                //console.log(evt.offsetX + ", " + evt.offsetY);
                dessiner(evt.offsetX, evt.offsetY);
            }
        });

        dessiner = function(x, y) {
            ctx.lineTo(x, y);
            ctx.stroke();
        }

        this.getContextCanvas = function()
        {
            return ctx;
        }

        this.getHeight = function () {
            return height;
        }

        this.getWidth = function () {
            return width;
        }

    }

    cvs = new Canvas(canvasSelector, 480, 640, "#000000");
    cvs.init();

    button
    context.clearRect(x, y, largeur, hauteur)
    corfirm(".......") => true or false return