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
			var coefmalus = Math.abs(this.force - cible.force);
			var winner;
			var resultat;
			var statement1 ="";
			var statement2 ="";
			var statement3 ="";
			var statement4 ="";
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
					if(random >= 5){ //c'est this qui attaque cible
						let malus = getRandomInt(10)*coefmalus;
						if(this.force >= cible.force) { //si this est + fort, il frappe
							cible.sante -= malus;
								if (cible.sante >0){
									statement1 += (this.nom +" attaque en premier et inflige une terrible morsure à "+cible.nom+", qui perd "+malus+" PV.<br/> Il ne reste plus que "+cible.sante+" PV au pauvre "+cible.espece+".<br/><br/>");
								} else {statement1 += (this.nom +" inflige une morsure fatale à "+cible.nom+".<br/>");
								}
						} else{ //si this est - fort, il se fait avoir
						let malus = getRandomInt(10)*coefmalus;
						this.sante -= malus;
						statement2 += (this.nom +" ne parvient pas à toucher "+cible.nom+" qui contre-attaque ! "+this.nom+" perd "+malus+" PVs.<br/><br/>");
						}
				
					} else { //c'est cible qui attaque this
						if(cible.force >= this.force) { //si cible est + fort, il frappe
							let malus = getRandomInt(10)*coefmalus;
							this.sante -= malus;
								if (this.sante >0){
									statement3 += (cible.nom +" attaque en premier et inflige une terrible morsure à "+this.nom+", qui perd "+malus+" PV.<br/> Il ne reste plus que "+this.sante+" PV au pauvre "+cible.espece+".<br/><br/>");
								} else {statement3 += (cible.nom +" inflige une morsure fatale à "+this.nom+".<br/>");
								}
						} else{ //si cible est - fort, il se fait avoir
						let malus = getRandomInt(10)*coefmalus;
						cible.sante -= malus;
						statement4 += (cible.nom +" rate son coup contre "+this.nom+" qui contre-attaque ! "+cible.nom+" perd "+malus+" PVs.<br/><br/>");
						}
					}
			var statement = (statement1 + statement2 + statement3 + statement4);
			}
		} while (dead == false);
		if(!statement){
			return (resultat);	
		} else {return (statement + resultat);}

	}
}

