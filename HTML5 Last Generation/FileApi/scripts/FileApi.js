(function () {

    document.querySelector("#mesFichiers")
        .addEventListener("change", function (evt)
    {
            var fichiers = evt.target.files;
            var fic;
            var pagePositionX;
            var pagePositionY;

            if (fichiers) {
                for (var i = 0; fic = fichiers[i]; i++) {
                    var reader = new FileReader();

                    reader.addEventListener("load", onLoad);

                    reader.readAsDataURL(fic);
                }

            }

            function onLoad(evt) {
                evt.preventDefault();

                var img = document.createElement("img");
                img.src = evt.target.result;
                img.dataset.info = img.src;

                img.addEventListener("dragend", onDragEnd);
                img.addEventListener("drag", onDrag);
                img.addEventListener("dragstart", onStartDrag);


                img.draggable = true;
                document.body.appendChild(img);

                initImage(img);

            }

            function onStartDrag() {

                var img = document.createElement("img");
                img.src = "../images/basket.png";
                event.dataTransfer.setDragImage(img, 0, 0);
            }

            function onDrag() {
                
                event.preventDefault();
                event.currentTarget.style.left = event.clientX - window.screenX + "px";

                event.currentTarget.style.top = event.clientY + "px";
            }


            function initImage(img)
            {
                var posX = Math.round(Math.random() * window.innerWidth / 2) + "px";
                var posY = Math.round(Math.random() * window.innerHeight / 2) + "px";

                
                var rotation = (Math.round(Math.random() * 20) ) * ((Math.round(Math.random()) * 2) -1);

                var size = Math.random() * 20;
                img.style.width = size + "%";
                img.style.top = posY;
                img.style.left = posX;
                img.style.transform = "rotate(" + rotation + "deg)";
            }

            function onDragEnd(evt) {

                evt.preventDefault();
                evt.dataTransfer = "move";

                evt.currentTarget.style.left = evt.clientX - window.screenX + "px";

                evt.currentTarget.style.top = evt.clientY + "px";
            }

    });

})()