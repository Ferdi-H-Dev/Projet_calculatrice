//RECUPERE CLASS CENTRER DU FICHIER HTML ET [...] PERMET DE CREER UN TABLEAU A PARTIR DU QUERYSELECTORALL QUI IMPORTE TOUS LES ELEMENTS DE LA CLASS CENTER DANS LES DIVS
const touches = [...document.querySelectorAll(".Centrer")];
console.log(touches);
//POUR RECUPERER UNE LISTE D'ADRESSE PRECISE DE LA VALEUR DE DATA-KEY CONSOLE HTML
const tablistedatasetkey = touches.map(touches => touches.dataset.key);
console.log(tablistedatasetkey);

//RECUPERE CLASS ECRANCALCULATRICE FICHIER HTML
const calculatriceecran = document.querySelector(".Ecrancalculatrice");

//POUR RECUPERER UNE LISTE D'ADRESSE PRECISE DE LA VALEUR DE KEY (VALEUR NUMEPAD) CONSOLE HTML
const tablistekey = touches.map(touches => touches.outerText);
//console.log(tablistekey[10], typeof tablistekey[10]);


//POUR AFFICHER L'EVENEMENT QUAND ON APPUI SUR UN TOUCHE
document.addEventListener("keydown", (e) => console.log(e));

//CREATION D'UNE FONCTION POUR AFFICHER SEULEMENT LA VALEURKEYCODE
document.addEventListener("keydown", (e) => {
    const valeurkey = e.key;
    console.log(valeurkey, typeof valeurkey);
    //APPEL DE LA FONCTION POUR CALCULER
    calculervaleursaisiekeydown(valeurkey);
    console.log(tablistekey);
    
});

//CREATION D'UNE FONCTION POUR AFFICHER SEULEMENT LA VALEURKEYCODE
document.addEventListener("click", (e) => {
    //console.log(e);
    //POUR RECUPERER L'ADRESSE PRECISE DE LA VALEUR DE DATA-KEY
    const valeurdatasetkey = e.target.dataset.key;
    console.log(valeurdatasetkey, typeof valeurdatasetkey);
    //APPEL DE LA FONCTION POUR CALCULER
    calculervaleursaisieclick(valeurdatasetkey);
});

//CREATION D'UNE FONCTION POUR CALCULER POUR LA SAISIE KEYDOWN
const calculervaleursaisiekeydown = (valeurkey) => {
    tablistekey[10] = "Backspace";
    tablistekey[13] = ".";
    tablistekey[16] = "*";
    tablistekey[18] = "Enter";
    tablistekey[17] = "/"
    if(tablistekey.includes(valeurkey)) {
        //console.log(tablistekey);
        //PERMET DE PREVOIR LES CAS BOUTON "C" ET "=" AVEC LA METHODE (SWITCH CASE)
        switch(valeurkey) {
            //BOUTON "C"
            case "Backspace":
                //DEFINI LES REGLES D'UTILISATION DU BOUTON "C" ET TEXTCONTENT SIGNIFIE CONTENU DE L'ECRAN DE LA CALCULATRICE
                calculatriceecran.textContent = "";
                break;
            //BOUTON "="
            case "Enter":
                //DEFINI LES REGLES D'UTILISATION DU BOUTON "=" ET EVAL PERMET DE RECUPERER LE CONTENU DE L'ECRAN DE LA CALCULATRICE ET DE L'UTILISER POUR CALCULER AINSI RENVOYER LE RESULTAT
                const calculer = eval(calculatriceecran.textContent);
                //PERMET D'AFFICHER LE RESULTAT DANS L'ECRAN DE LA CALCULATRICE
                calculatriceecran.textContent = calculer;
                break;
            //TOUS LES AUTRES BOUTONS
            default:
                //POUR RECUPERER LA POSITION DANS DANS LE TABLEAU TABLISTEKEY EXEMPLE : [O]
                const indexkey = tablistekey.indexOf(valeurkey);
                //console.log(indexkey);
                //RECUPERER LE TABLEAU TOUCHES DANS NTOUCHES
                const ntouches = touches[indexkey];
                //AFFICHER LA SAISIE DES NTOUCHES (TOUCHES) DANS L'ECRAN DE LA CALCULATRICE
                calculatriceecran.textContent += ntouches.innerHTML;
        }
    }
}

//CREATION D'UNE FONCTION POUR CALCULER POUR LA SAISIE CLICK
const calculervaleursaisieclick = (valeurdatasetkey) => {
    if(tablistedatasetkey.includes(valeurdatasetkey)) {
        //console.log(tablistedatasetkey);
        switch(valeurdatasetkey) {
            //BOUTON "C"
            case "8":
                //DEFINI LES REGLES D'UTILISATION DU BOUTON "C" ET TEXTCONTENT SIGNIFIE CONTENU DE L'ECRAN DE LA CALCULATRICE
                calculatriceecran.textContent = "";
                break;
            //BOUTON "="
            case "13":
                //DEFINI LES REGLES D'UTILISATION DU BOUTON "=" ET EVAL PERMET DE RECUPERER LE CONTENU DE L'ECRAN DE LA CALCULATRICE ET DE L'UTILISER POUR CALCULER AINSI RENVOYER LE RESULTAT
                const calculer = eval(calculatriceecran.textContent);
                //PERMET D'AFFICHER LE RESULTAT DANS L'ECRAN DE LA CALCULATRICE
                calculatriceecran.textContent = calculer;
                break;
            //TOUS LES AUTRES BOUTONS
            default:
                //POUR RECUPERER LA POSITION DANS DANS LE TABLEAU TABLISTEKEY EXEMPLE : [O]
                const indexkey = tablistedatasetkey.indexOf(valeurdatasetkey);
                //console.log(indexkey);
                //RECUPERER LE TABLEAU TOUCHES DANS NTOUCHES
                const ntouches = touches[indexkey];
                //AFFICHER LA SAISIE DES NTOUCHES (TOUCHES) DANS L'ECRAN DE LA CALCULATRICE
                calculatriceecran.textContent += ntouches.innerHTML;
        }
    }
}
//CREATION DU MESSAGE EN CAS D'ERREUR (E.MESSAGE EST LA PRICISION DE L'ERREUR)
window.addEventListener("error", (e) => {
    alert("Une erreur est survenue: " + e.message);
});