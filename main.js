function getRandomInt(max) {
  	return Math.floor(Math.random() * Math.floor(max));
	}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const chien = new Animal("chien", "Rintintin", "noir", getRandomInt(99)+1, getRandomInt(100));

const chat = new Animal("chat", "Minou", "rayé", getRandomInt(99)+1, getRandomInt(100));

const tortue = new Animal("tortue", "Scarole", "verte", getRandomInt(99)+1, getRandomInt(100));

const hamster = new Animal("hamster", "Choupette", "marron", getRandomInt(99)+1, getRandomInt(100));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

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
 	});

 	$("[alt]").click(function(){
        var $img = $(this).toggleClass('clicked');
        $("div:has(> .clicked)").css("border-radius","15px").css("box-shadow","0px 0px 4px black");
 
        var count = document.getElementsByClassName('clicked').length; //récupère le nbr de sélectionnés

        if(count < 3){         //pour que seuls 2 combattants soient sélectionnés
	        if($img.hasClass('clicked')){
	            $("#display").append($img.clone().removeClass('clicked').css("zoom","0.5").css("margin-left","600px"));
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
		
		$("#historique").empty(); //vidange de la div
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
						$("#historique").prepend(annonceDebile(getRandomInt(10)));
						$(".annonce").after("<p>"+chat.fight(hamster)+"</p>");
						break;
					case("tortue"):
						$("#historique").prepend(annonceDebile(getRandomInt(10)));
						$(".annonce").after("<p>"+chat.fight(tortue)+"</p>");
						break;
					case("chien"):
						$("#historique").prepend("<p class='annonce'>Les pires ennemis en face à face !</p>");
						$(".annonce").after("<p>"+chat.fight(chien)+"</p>");
						break;
				}
			}
			else if(selected1 == "hamster"){
				switch(selected2){
					case("chat"):
						$("#historique").prepend(annonceDebile(getRandomInt(10)));
						$(".annonce").after("<p>"+hamster.fight(chat)+"</p>");
						break;
					case("tortue"):
						$("#historique").prepend(annonceDebile(getRandomInt(10)));
						$(".annonce").after("<p>"+hamster.fight(tortue)+"</p>");
						break;
					case("chien"):
						$("#historique").prepend(annonceDebile(getRandomInt(10)));
						$(".annonce").after("<p>"+hamster.fight(chien)+"</p>");
						break;
				}
			}
			else if(selected1 == "tortue"){
				switch(selected2){
					case("hamster"):
						$("#historique").prepend(annonceDebile(getRandomInt(10)));
						$(".annonce").after("<p>"+tortue.fight(hamster)+"</p>");
						break;
					case("chat"):
						$("#historique").prepend(annonceDebile(getRandomInt(10)));
						$(".annonce").after("<p>"+tortue.fight(chat)+"</p>");
						break;
					case("chien"):
						$("#historique").prepend(annonceDebile(getRandomInt(10)));
						$(".annonce").after("<p>"+tortue.fight(chien)+"</p>");
						break;
				}
			}
			else if(selected1 == "chien"){
				switch(selected2){
					case("hamster"):
						$("#historique").prepend(annonceDebile(getRandomInt(10)));
						$(".annonce").after("<p>"+chien.fight(hamster)+"</p>");
						break;
					case("tortue"):
						$("#historique").prepend(annonceDebile(getRandomInt(10)));
						$(".annonce").after("<p>"+chien.fight(tortue)+"</p>");
						break;
					case("chat"):
						$("#historique").prepend("<p class='annonce'>Les pires ennemis en face à face !</p>");
						$(".annonce").after("<p>"+chien.fight(chat)+"</p>");
						break;
				}
			}
//_______________L'icone du winner sautille_________________
		} else { alert("Veuillez sélectionner 2 combattants différents.");}	
	});

function annonceDebile(a){
	switch (a) {
		case 1:
			return "<p class='annonce'>Ca va faire mal !</p>";
			break;
		case 2:
			return "<p class='annonce'>On peut s'attendre au pire...</p>";
			break;
		case 3:
			return "<p class='annonce'>Ouille !</p>";
			break;
		case 4:
			return "<p class='annonce'>Il va y avoir du sport !</p>";
			break;
		case 5:
			return "<p class='annonce'>T'es pas un peu cruel des fois ?</p>";
			break;
		case 6:
			return "<p class='annonce'>Suspens...</p>";
			break;
		case 7:
			return "<p class='annonce'>Ca va faire mal !</p>";
			break;
		case 8:
			return "<p class='annonce'>Que le combat commence !</p>";
			break;
		case 9:
			return "<p class='annonce'>Il va y avoir du sport !</p>";
			break;
		case 10:
			return "<p class='annonce'>Que le combat commence !</p>";
			break;
	}
}

//######################## FOOTER ########################
	$("footer").css("height","10%");
	$("footer:first").css("align-content", "center");

});
