class Animal{
	constructor(a, b, c, d, e){
		this.espece= a;
		this.nom = b;
		this.couleur = c;
		this.sante = d;
		this.force = e;
	}

	getDescription() {
		// return this.nom + " est un animal qui a "+ this.age + " ans";
		return `${this.nom} est un ${this.espece} qui a ${this.sante} points de vie et ${this.force} en force.`;
	}

	fight(cible){
		//boucle à revoir !
			var winner;
			var malus;
			var resultat;
			var statement1 ="";
			var statement2 ="";
			var statement3 ="";
			var dead = false;
		do{
			if (this.sante <= 0){
				winner = cible.nom;
				resultat = (this.nom + " a lamentablement perdu...<br/>");
				dead = true;
			} else if (cible.sante <= 0){
				winner = this.nom;
				resultat = (cible.nom + " a lamentablement perdu...<br/>");
				dead = true;
			} else {
					let random = getRandomInt(10);
					if(random >= 5){
					malus = getRandomInt(10)*(this.force - cible.force);
					cible.sante -= malus;
						if (cible.sante >0){
							statement2 += (this.nom +" inflige une terrible morsure à "+cible.nom+", qui perd "+malus+" PV.<br/> Il ne reste plus que "+cible.sante+" PV au pauvre "+cible.espece+".<br/><br/>");
						} else {statement2 += (this.nom +" inflige une terrible morsure à "+cible.nom+", qui perd "+malus+" PV.<br/>");
					}
										
					} else {
						malus = getRandomInt(10)*(cible.force - this.force);
						this.sante -= malus;
						statement3 += (this.nom +" ne parvient pas à toucher "+cible.nom+" qui contre-attaque!<br/> "+this.nom+" perd "+malus+ "PV.<br/><br/>");
					}
			statement1 += (statement2 + statement3);
			}
		} while (dead == false);

		if(!statement1){
			return (resultat);	
		} else {return (statement1 + resultat);}

	}
}

