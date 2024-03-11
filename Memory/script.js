//Variables et classes


var caseSelectionnee=null;
var score=0;
var tourPossible=true;
class Drapeau{

    constructor(image,pays){
        this.image=image;
        this.pays=pays;
    }

}

pays=['Tunisie','France','Palestine',"Armenie","AfriqueDuSud","Liechtenstein"];

var listeDrapeaux=[];
for(let p of pays)
{
    var nouveauDrapeau= new Drapeau('Flags/'+p+'.png',p);
    for(let i=0;i<2;i++)
    {
        listeDrapeaux.push(nouveauDrapeau);

    }
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function placerElements(liste)
{
    for(let i=0;i<liste.length;i++)
    {
        var divPlacement=document.getElementById("div"+(i+1));
        divPlacement.addEventListener("click",selectionCase);
        var image=document.createElement('img');
        image.className="flagImg";
        image.style.width="100px";
        image.style.height="100px";
        image.style.visibility="hidden";
        image.src=liste[i].image;
        image.setAttribute("data-pays",liste[i].pays);
        divPlacement.appendChild(image);

    }



}


function selectionCase(event)
{
    
    if(event.target==caseSelectionnee){

        alert("carte deja selctionnee");
        return;
    }
    else if(tourPossible && caseSelectionnee){
        var caseSelectionnee2=event.target.querySelector(".flagImg");
        caseSelectionnee2.style.visibility="visible";
        console.log(caseSelectionnee.src==caseSelectionnee2.src)
        if(caseSelectionnee2.src==caseSelectionnee.src)
        {
            
            score+=2;
            caseSelectionnee=null;
            caseSelectionnee2=null;
            finjeu();
            return;

        }
        else{
            const delay=2000;
            tourPossible=false;
            setTimeout(function () {
                caseSelectionnee.style.visibility="hidden";
                caseSelectionnee2.style.visibility="hidden";
                caseSelectionnee=null;
                caseSelectionnee2=null;
                tourPossible=true;
            }, delay);


           
        }
        
    }

    
    else if(tourPossible && !caseSelectionnee)
    {
        caseSelectionnee=event.target.querySelector(".flagImg");
        console.log(caseSelectionnee);
        caseSelectionnee.style.visibility="visible";
       
       

    }

        
    }

    


function finjeu(){

    if(score==12){
        alert("BRAVO ! ");
        setTimeout(function () {
    location.reload();
}, 10000)
    }
}


function partie()
{
    var listeJeu=[...listeDrapeaux];
    shuffle(listeJeu);
    placerElements(listeJeu);

}