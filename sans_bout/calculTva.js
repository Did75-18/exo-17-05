var tva = document.getElementById("tva");
var montant = document.getElementById("montant");
var param = document.getElementById("param");
var resultat = document.getElementById("resultat");


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
		if(param.value === "ttc"){
			calculTtc();
		}else if(param.value === "ht"){
			calculHt();
		}
}
function depart(){
	var montantHt;
	if(montant.value === "100" && tva.value === "20" && param.value === "ht"){
			var montantHt = Number(montant.value)/1.2;
			resultat.innerHTML ="Résultat HT :" + " " + montantHt.toFixed(2);
			
		}

}

