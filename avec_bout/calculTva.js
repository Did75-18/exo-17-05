var tva = document.getElementById("tva");
var montant = document.getElementById("montant");
var param = document.getElementById("param");
var resultat = document.getElementById("resultat");
var calculez = document.getElementById("calculez");


function calculTtc (){
	
	if (montant.value == "") {
		resultat.innerHTML ="Indiquez un montant";
	}else if(tva.value == ""){
		resultat.innerHTML ="Indiquez un taux de TVA";
	}else{
		var montantTtc = Number(montant.value) + (Number(montant.value) * tva.value)/100;
		resultat.innerHTML ="Résultat TTC :" + " " + montantTtc.toFixed(2);
		
	}
}


function calculHt (){
	if (montant.value == "") {
		resultat.innerHTML ="Indiquez un montant";
	}else if(tva.value == ""){
		resultat.innerHTML ="Indiquez un taux de TVA";
	}else{
		var montantHt = Number(montant.value)/(1+(tva.value/100));
		resultat.innerHTML ="Résultat HT :" + " " + montantHt.toFixed(2);
	}
	
}

function taux(){
		if(param.value === "ht"){
			calculHt();
		}
		else if(param.value === "ttc"){

			calculTtc();
		}

}

calculez.onclick = taux;