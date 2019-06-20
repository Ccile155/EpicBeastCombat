function getRandomInt(max) {
  	return Math.floor(Math.random() * Math.floor(max));
	}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const chien = new Animal("chien", "Rintintin", "noir", getRandomInt(100), getRandomInt(100));

const chat = new Animal("chat", "Minou", "rayé", getRandomInt(100), getRandomInt(100));

const tortue = new Animal("tortue", "Scarole", "verte", getRandomInt(100), getRandomInt(100));

const hamster = new Animal("hamster", "Choupette", "marron", getRandomInt(100), getRandomInt(100));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// let winnerJQ = $(winner);
// let looserJQ = $(looser);

// var selected1 = document.getElementById("Combattant1").value;
// var selected2 = document.getElementById("Combattant2").value;
// var selected1JQ = $(selected1);
// var selected2JQ = $(selected2);


$(function(){
//######################## PRESENTATION COMBATTANTS ########################
 $(".btn-primary").on('click',function() {
    let url = $(this).prop('href');
    $("#presa").load(url);
     event.preventDefault();
 });

	$("[alt='chat']").after("<p class='capt'>"+chat.getDescription()+"</p>");
	$("[alt='hamster']").after("<p class='capt'>"+hamster.getDescription()+"</p>");
	$("[alt='tortue']").after("<p class='capt'>"+tortue.getDescription()+"</p>");
	$("[alt='chien']").after("<p class='capt'>"+chien.getDescription()+"</p>");
	$(".capt").css("text-align", "center").css("font-style", "italic").css("align-content", "center");

//Sélection des images
	$("[alt]").each(function(i, el){
        $(this).addClass('img' + i); // identify imgs by index (class="imgN")
        $(this).css("margin-righ","10px");
 	});

 	$("[alt]").click(function(){
        var $img = $(this).toggleClass('clicked');
        $("div:has(> .clicked)").css("border-radius","15px").css("box-shadow","0px 0px 4px black");
 
        var count = document.getElementsByClassName('clicked').length; //récupère le nbr de sélectionnés

        if(count < 3){         //pour que seuls 2 combattants soient sélectionnés
	        if($img.hasClass('clicked')){
	            $("#display").append($img.clone().removeClass('clicked').css("zoom","0.5"));
	        }
	        else{
	            $("#display").find('.' + $img[0].className).remove();
	            $(this).toggleClass('unclicked');
	            $("div:has(> .unclicked)").css("box-shadow","none");
	        }
    	} else {alert("Seuls les duels sont vraiment épiques !");
    	        $(this).toggleClass('unclicked');
	            $("div:has(> .unclicked)").css("box-shadow","none");
	            count-= 1;
	    }
    });



//######################## COMBATS ########################
	$(".btn-danger").click(function() {

//_____il faut vider le texte du combat précédent_____________


		// var selected1 = document.getElementById("Combattant1").value;
		// var selected2 = document.getElementById("Combattant2").value;
		// var Name1 = document.getElementById("Combattant2").text;
		// var Name2 = document.getElementById("Combattant2").text;
		var click1 = document.getElementsByClassName("clicked").item(0);
		var click2 = document.getElementsByClassName("clicked").item(1);

		if(click1 != null && click2 != null && click1 != click2){
			// console.log(Name1 +" attaque "+Name2+" !");
			// $("#combat").append(selected1 +" attaque "+selected2+" !");
		var selected1 = click1.getAttribute("alt");
		var selected2 = click2.getAttribute("alt");


//créer 2 divs cote à cote pour chaque combattant , load les stats dont la jauge de vie
//ajouter une animation quand l'un attaque l'autre

			if(selected1 == "chat"){
				switch(selected2){
					case("hamster"):
						$("#historique").prepend("<p class='annonce'>Ca va faire mal !</p>")
						$(".annonce").after("<p>"+chat.fight(hamster)+"<p>");
						break;
					case("tortue"):
						$("#historique").prepend("<p class='annonce'>On peut s'attendre au pire...</p>")
						$(".annonce").after("<p>"+chat.fight(tortue)+"<p>");
						break;
					case("chien"):
						$("#historique").prepend("<p class='annonce'>Les pires ennemis en face à face !</p>")
						$(".annonce").after("<p>"+chat.fight(chien)+"<p>");
						break;
				}
			}
			else if(selected1 == "hamster"){
				switch(selected2){
					case("chat"):
						$("#historique").prepend("<p class='annonce'>Ouille !</p>")
						$(".annonce").after(hamster.fight(chat));
						break;
					case("tortue"):
						$("#historique").prepend(hamster.fight(tortue));
						break;
					case("chien"):
						$("#historique").prepend(hamster.fight(chien));
						break;
				}
			}
			else if(selected1 == "tortue"){
				switch(selected2){
					case("hamster"):
						$("#historique").prepend(tortue.fight(hamster));
						break;
					case("chat"):
						$("#historique").prepend(tortue.fight(chat));
						break;
					case("chien"):
						$("#historique").prepend(tortue.fight(chien));
						break;
				}
			}
			else if(selected1 == "chien"){
				switch(selected2){
					case("hamster"):
						$("#historique").prepend(chien.fight(hamster));
						break;
					case("tortue"):
						$("#historique").prepend(chien.fight(tortue));
						break;
					case("chat"):
						$("#historique").prepend("<p class='annonce'>Les pires ennemis en face à face !</p>")
						$(".annonce").after(chien.fight(chat));
						break;
				}
			}

//_______________L'icone du winner sautille_________________

		} else { alert("Veuillez sélectionner 2 combattants différents.");}	
	});

	// $("#historique p").css("font-family", "initial");

//######################## FOOTER ########################
	$("footer").css("height","10%");
	$("footer:first").css("align-content", "center");

});
