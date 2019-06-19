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
			var looser;
			var winner;
			var malus;

		do{
			var dead = false;

			if (this.sante <= 0){
				looser = this.nom;
				winner = cible.nom;
				dead = true;
			}
			else if (cible.sante <= 0){
				looser = cible.nom;
				winner = this.nom;
				dead = true;
			} else {
					if(this.force > cible.force){
						malus = getRandomInt(1)*(this.force - cible.force +1);
						cible.sante -= malus;
						return `${this.nom} inflige une terrible morsure à ${cible.nom}, qui perd ${malus} PV.<br/>
								Il ne reste plus que ${cible.sante} PV au pauvre ${cible.espece}.<br/><br/>`;
					}
					else {
						malus = getRandomInt(1)*(cible.force - this.force +1);
						return `${this.nom} ne parvient pas à toucher ${cible.nom} qui contre-attaque!<br/>
								${this.nom} perd ${malus} PV.<br/><br/>`;
					}
				}
		}while (dead == false);

	document.write(looser + " a lamentablement perdu...<br/>");
	}
}

