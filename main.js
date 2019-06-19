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

	$("#presa p").css("text-align", "center").css("font-style", "italic").css("align-content", "center");
		$("[alt]").css("width", "250px");
		$("[alt='chat']").after("<p>"+chat.getDescription()+"</p>");
		$("[alt='hamster']").after("<p>"+hamster.getDescription()+"</p>");
		$("[alt='tortue']").after("<p>"+tortue.getDescription()+"</p>");
		$("[alt='chien']").after("<p>"+chien.getDescription()+"</p>");

//######################## COMBATS ########################
	// $("#combat").css("align-content", "center");

	$(".btn-danger").click(function() {
		var selected1 = document.getElementById("Combattant1").value;
		var selected2 = document.getElementById("Combattant2").value;
		console.log(selected1 + " vs "+ selected2);


		if(selected1 != null && selected2 != null && selected1 != selected2){
			$("#combat").append(selected1 +" attaque "+selected2+" !");

			switch(selected1){
				case("chat"):
				
					break;
				case("Choupette"):

					break;
				case("Scarole"):

					break;
				case("Rintintin"):

					break;
			}

			$("combat").append(selected1.fight(selected2));


		} else { alert("Veuillez sélectionner 2 combattants.");}	
	});

//######################## FOOTER ########################
	$("footer").css("text-align", "center");

});
