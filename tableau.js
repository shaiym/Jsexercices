
var tab = new Array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
var resultat = "";
var somme = 0;
debugger;
for (var i = 0; i <= tab.length-1; i = i + 1)
{
    if (i === tab.length-1) {
        resultat = resultat + tab[i] + "<br/>" + "___";
    } else {
        resultat = resultat + tab[i] + "<br/>" + "+";
    }
    somme = somme + tab[i];
}

document.getElementById("tableau").innerHTML = resultat + "<br>" + somme;