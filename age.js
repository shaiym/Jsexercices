 "use strict";
            //METTEZ TOUT LE JS DANS UN AUTRE FICHIER AFIN DE NE PAS MELANGER L'HTML ET LE JS
            //INSPIREZ-VOUS DU FICHIER ../js/regions.js
            
            function giveFeature(age){
         
            var nb1 = 1 ;  
            var nb2 = 6 ; 
            var nb3 =11 ;
            var nb4 =17 ;
            var nb5 = 36;
            var nb6 = 70;

         

        if (nb1 > 0 && nb1 < 2) 
{
    document.getElementById("resultat").innerHTML = 'Vous êtes un bébé.';
} 
        else if (nb2 >1 && nb2 < 7) 
{
   document.getElementById("resultat").innerHTML = 'Vous êtes unjeune enfant.'; 
} 
        else if (nb3 > 6 && nb3 < 12)
{
    document.getElementById("resultat").innerHTML = 'Vous êtes un enfant qui atteint ln\'age de la raison.';
} 
        else if (nb4 > 11 && nb4 < 18)
{
    document.getElementById("resultat").innerHTML = 'Vous êtes un adolescent.';
} 
        else if (nb5 > 17 && nb5 < 36) 
{
    document.getElementById("resultat").innerHTML = 'Vous êtes un jeune adulte.';
}
        else if (nb6 > nb670) 
{
    document.getElementById("resultat").innerHTML = 'Vous êtes un sénior.';
}
            }
            
       function changeGenre()
       {
           var radiobuttons = 
                   document.getElementByName("sexe")
           for (var i = 0; i< radiobuttons.length; i++)
           {
               if (radiobuttons(1).checked) 
               {
                   sexe = radiobuttons(1).value ;
                   break ; 
               }
           }
           alert(sexe);
       }

   /* Indiquez par le biais d'alert ou d'un champ HTML la description qui correspond à l'âge saisi
             * 0 à 1 compris : Vous êtes un bébé.
             * 1 à 6 ans compris : Vous êtes un jeune enfant.
             * 7 à 11 ans compris : Vous êtes un enfant qui a atteint l'âge de raison.
             * 12 à 17 ans compris : Vous êtes un adolescent.
             * 17 à ???: Vous êtes un jeune adulte.
             * Supérieur à ??? : Vous êtes un sénior.
             */
                /* SUITE DE L'EXERCICE :
             * Vous pouvez aussi ajouter un radio button grâce auquel vous déterminerez le sexe de l’utilisateur. 
             * A l’aide de ternaires, vous pourrez ainsi accorder les phrases en fonction de l’utilisateur.
             */