(function () {
    document.addEventListener("DOMContentLoaded", function () {

        var produits = document.querySelector("#produits");
        var dropZone = document.querySelector("#panier");

        var listeProduits = [
            { ref: "AA140", img: "images/23087-bubka-ConverseAllStarDirtyYellow.png", description: "Une basket jaune de bonne qualité.", prix: 100},
            { ref: "AB800", img: "images/23089-bubka-ConverseAllStarCleanBlue.png", description: "Une basket bleu de bonne qualité.", prix: 84 },
            { ref: "AC220", img: "images/23090-bubka-ConverseAllStarCleanGreen.png", description: "Une basket verte de bonne qualité.", prix: 300 },
            { ref: "AD752", img: "images/23091-bubka-ConverseAllStarCleanGrey.png", description: "Une basket grise de bonne qualité.", prix: 420 }
        ];

        initProduit();
        dropZone.addEventListener("drop", onDrop);
        dropZone.addEventListener("dragover", onDragOver);
        //dropZone.addEventListener("dragleave", onDragLeaver);

        function initProduit() {
            for (var i = 0; i < listeProduits.length; i++) {
                    unProduit(listeProduits[i]);
            }
        }

        function unProduit (prod){
            
            var templateProduit = document.querySelector("#templateProduit").cloneNode(true);

            templateProduit.id = prod.ref;
            produits.appendChild(templateProduit);

            templateProduit.style.display = "";
            document.querySelector("#" + prod.ref + " img").src = prod.img;
            document.querySelector("#" + prod.ref + " label.Ref").innerHTML = prod.ref;
            document.querySelector("#" + prod.ref + " label.Description").innerHTML = prod.description;
            document.querySelector("#" + prod.ref + " label.Prix").innerHTML = prod.prix;
            document.querySelector("#" + prod.ref + " img").dataset.prix = prod.prix;

            document.querySelector("#" + prod.ref + " img").addEventListener("dragstart", onDragStart);

        }

        function onDragStart(evt) {
            evt.dataTransfer.effectAllowed = "move";
            evt.dataTransfer.setData("imageSrc", evt.target.src);
            evt.dataTransfer.setData("imagePrix", evt.target.dataset.prix);
        }

        function onDragOver(evt) {
            evt.preventDefault();
            evt.dataTransfer.effectAllowed = "move";
            return false;
        }

        function onDrop(evt) {
            evt.preventDefault();

            var src = evt.dataTransfer.getData("imageSrc");
            var prix = evt.dataTransfer.getData("imagePrix");

            if (!searchItem(src)) {
                var div = document.createElement("div");
                var image = document.createElement("img");
                var label = document.createElement("label");
                image.src = src;
                image.dataset.prix = prix;
                image.dataset.nb = 1;

                div.className = "DivContainImg";

                label.className = "NbProduit";
                label.innerHTML = "1";
                label.style.bottom = "0px";
                label.style.right = "20px";

                evt.currentTarget.appendChild(div);
                div.appendChild(image);
                div.appendChild(label);
                
            }
            else {
                quantite(src);
                
            }

            total();
          
        }

        function total() {
            var totalHT = document.querySelector(".HT");
            var totalTTC = document.querySelector(".TTC");
            var objImg = document.querySelectorAll("#panier div.DivContainImg img");
            var total = 0;

            for (var i = 0; i < objImg.length; i++) {

                    total += objImg[i].dataset.nb * objImg[i].dataset.prix;
                
            }

            totalHT.innerHTML = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(total);
            totalTTC.innerHTML = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(total* 1.2);
        }

        function quantite(src) {
           
            var obj = document.querySelectorAll("#panier div.DivContainImg label");
            var objImg = document.querySelectorAll("#panier div.DivContainImg img");

            for (var i = 0; i < obj.length; i++) {

                if (objImg[i].src == src) {
                    obj[i].innerHTML = parseInt(obj[i].innerHTML) + 1;
                    objImg[i].dataset.nb = parseInt(objImg[i].dataset.nb) + 1;
                }
            }

        }

        function searchItem(src){
            var etat = false;

            var obj = document.querySelectorAll("#panier img");
           
            for (var i = 0; i < obj.length; i++) {

                if (obj[i].src == src) {
                    etat = true;
                }
            }

            return etat;
        }
    });
})()