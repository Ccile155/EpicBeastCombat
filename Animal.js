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
			var damage;
			var resultat;
			var statement1 ="";
			var statement2 ="";
			var statement3 ="";
			var statement4 ="";
			var dead = false;
		do{
			if (this.sante <= 0){
				winner = cible.nom;
				resultat = ("<br/>"+this.nom + " se couche devant "+winner+" ! Quel combat !<br/>");
				dead = true;
			} else if (cible.sante <= 0){
				winner = this.nom;
				resultat = "<br/>"+cible.nom + " se couche devant "+winner+" ! Quel combat !<br/>";
				dead = true;
			} else {
					let random = getRandomInt(10);
					if(random >= 5){ //c'est this qui attaque cible
						if(this.force >= cible.force) { //si this est + fort, il frappe
							damage = Math.floor(getRandomInt(10) * this.force * 0.1);
							cible.sante -= damage;
								if (cible.sante >0){
									statement1 += (this.nom +" inflige une terrible morsure à "+cible.nom+" de "+damage+" points de dégâts.<br/> Il ne reste plus que "+cible.sante+" PV au pauvre "+cible.espece+".<br/>");
								} else {statement1 += this.nom +" inflige une morsure fatale à "+cible.nom+": "+damage+" points de dégâts d'un coup !<br/>";
										dead = true;
								}
						} else{ //si this est - fort, il se fait avoir
							damage = Math.floor(getRandomInt(10) * cible.force * 0.1);
							this.sante -= damage;
							statement2 += (this.nom +" ne parvient pas à toucher "+cible.nom+" qui contre-attaque, infligeant "+damage+" points de dégâts à "+this.nom+".<br/>");
						}
				
					} else { //c'est cible qui attaque this
						if(cible.force >= this.force) { //si cible est + fort, il frappe
							damage = Math.floor(getRandomInt(10) * cible.force * 0.1);
							this.sante -= damage;
								if (this.sante >0){
									statement3 += (cible.nom +" lacère "+this.nom+", qui perd "+damage+" PV.<br/> Il ne reste plus que "+this.sante+" PV au pauvre "+cible.espece+".<br/>");
								} else {statement3 += (cible.nom +" inflige une morsure fatale à "+this.nom+": "+damage+" points de dégâts d'un coup !<br/>");
								}
						} else{ //si cible est - fort, il se fait avoir
							damage = Math.floor(getRandomInt(10) * this.force * 0.1);
							cible.sante -= damage;
							statement4 += (cible.nom +" rate son coup contre "+this.nom+" et se blesse, perdant "+damage+" PVs !<br/>");
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

