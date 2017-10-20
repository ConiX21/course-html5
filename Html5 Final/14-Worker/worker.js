// On débute à partir de 1
var n = 1;
// Boucle de calcul incrémental
recherche: while (true) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
        // Si le nombre n’est pas premier, on continue la recherche
        if (n % i == 0) continue recherche;
    // Sinon, un nombre premier est trouvé
    // et se voit communiqué à la page
    postMessage(n);
    }

