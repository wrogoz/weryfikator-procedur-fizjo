//					BUTTONS
				// tabela wizyt prywatnych
// pryw 80
var butPlPryw80=document.getElementById("pryw80Add");
var pryw80=document.getElementById("pryw80");	
var butPryw80Min=document.getElementById("pryw80Min");
var	wynikPryw80=0;
// pryw 60
var butPlPryw60=document.getElementById("pryw60Add");
var pryw60=document.getElementById("pryw60");	
var butPryw60Min=document.getElementById("pryw60Min");
var	wynikPryw60=0;
// terapia man
var manualPPlus=document.getElementById("manualPPlus");
var manualnaP=document.getElementById("manualnaP");	
var manualpMin=document.getElementById("manualpMin");
var	wynikTerMan=0;
// fala uderzeniowa
var falaPAdd=document.getElementById("falaPAdd");
var falaP=document.getElementById("falaP");	
var falaPMin=document.getElementById("falaPMin");
var	wynikFalaP=0;
// salus talent
var salusPAdd=document.getElementById("SalusPAdd");
var salusP=document.getElementById("SalusP");	
var salusPMin=document.getElementById("SalusPMin");
var	wynikSalusP=0;
// Masaż
var masazPAdd=document.getElementById("masazPAdd");
var masazP=document.getElementById("masazP");	
var masazPMin=document.getElementById("masazPMin");
var	wynikmasazP=0;
// Tens
var tensPAdd=document.getElementById("tensPAdd");
var tensP=document.getElementById("tensP");	
var tensPMin=document.getElementById("tensPMin");
var	wyniktensP=0;
// Elektrostymulacja
var esPAdd=document.getElementById("esPAdd");
var esP=document.getElementById("esP");	
var esPMin=document.getElementById("esPMin");
var	wynikesP=0;
// Prądy diadynamiczne
var ddPAdd=document.getElementById("ddPAdd");
var ddP=document.getElementById("ddP");	
var ddPMin=document.getElementById("ddPMin");
var	wynikddP=0;
// Laseroterapia
var laserPAdd=document.getElementById("laserPAdd");
var laserP=document.getElementById("laserP");	
var laserPMin=document.getElementById("laserPMin");
var	wyniklaserP=0;
// Ultradźwięki
var udPAdd=document.getElementById("udPAdd");
var udP=document.getElementById("udP");	
var udPMin=document.getElementById("udPMin");
var	wynikudP=0;
// Pole magnetyczne
var pmPAdd=document.getElementById("pmPAdd");
var pmP=document.getElementById("pmP");	
var pmPMin=document.getElementById("pmPMin");
var	wynikpmP=0;
// Krioterapia
var krioPAdd=document.getElementById("krioPAdd");
var krioP=document.getElementById("krioP");	
var krioPMin=document.getElementById("krioPMin");
var	wynikkrioP=0;



//  				ACTION


			// <tabela wizyt prywatnych>

//		-----> prywatne 80  <-------------
butPlPryw80.addEventListener("click" , function(){
	wynikPryw80++;
	pryw80.innerHTML=wynikPryw80;
});

butPryw80Min.addEventListener("click" , function(){
	wynikPryw80--;
	pryw80.innerHTML=wynikPryw80;
});
//		-----> prywatne 60  <-------------
butPlPryw60.addEventListener("click" , function(){
	wynikPryw60++;
	pryw60.innerHTML=wynikPryw60;
});

butPryw60Min.addEventListener("click" , function(){
	wynikPryw60--;
	pryw60.innerHTML=wynikPryw60;
});


//		-----> terapia manualna  pryw<-------------
manualPPlus.addEventListener("click" , function(){
	wynikTerMan++;
	manualnaP.innerHTML=wynikTerMan;
});

manualpMin.addEventListener("click" , function(){
	wynikTerMan--;
	manualnaP.innerHTML=wynikTerMan;
});

// ---------> fala uderzeniowa pryw <------------
falaPAdd.addEventListener("click" , function(){
	wynikFalaP++;
	falaP.innerHTML=wynikFalaP;
});

falaPMin.addEventListener("click" , function(){
	wynikFalaP--;
	falaP.innerHTML=wynikFalaP;
});
// ---------> Salus talent pryw <------------
salusPAdd.addEventListener("click" , function(){
	wynikSalusP++;
	salusP.innerHTML=wynikSalusP;
});

salusPMin.addEventListener("click" , function(){
	wynikSalusP--;
	salusP.innerHTML=wynikSalusP;
});
// ---------> Masaż pryw <------------
masazPAdd.addEventListener("click" , function(){
	wynikmasazP++;
	masazP.innerHTML=wynikmasazP;
});

masazPMin.addEventListener("click" , function(){
	wynikmasazP--;
	masazP.innerHTML=wynikmasazP;
});
// ---------> TENS pryw <------------
tensPAdd.addEventListener("click" , function(){
	wyniktensP++;
	tensP.innerHTML=wyniktensP;
});

tensPMin.addEventListener("click" , function(){
	wyniktensP--;
	tensP.innerHTML=wyniktensP;
});
// ---------> prądy diadynamiczne pryw <------------
ddPAdd.addEventListener("click" , function(){
	wynikddP++;
	ddP.innerHTML=wynikddP;
});

ddPMin.addEventListener("click" , function(){
	wynikddP--;
	ddP.innerHTML=wynikddP;
});
// ---------> Laseroterapia pryw <------------
laserPAdd.addEventListener("click" , function(){
	wyniklaserP++;
	laserP.innerHTML=wyniklaserP;
});

laserPMin.addEventListener("click" , function(){
	wyniklaserP--;
	laserP.innerHTML=wyniklaserP;
});
// ---------> Ultradźwięki pryw <------------
udPAdd.addEventListener("click" , function(){
	wynikudP++;
	udP.innerHTML=wynikudP;
});

udPMin.addEventListener("click" , function(){
	wynikudP--;
	udP.innerHTML=wynikudP;
});
// ---------> Pole magnetyczne pryw <------------
pmPAdd.addEventListener("click" , function(){
	wynikpmP++;
	pmP.innerHTML=wynikpmP;
});

pmPMin.addEventListener("click" , function(){
	wynikpmP--;
	pmP.innerHTML=wynikpmP;
});
// ---------> Krioterapia pryw <------------
krioPAdd.addEventListener("click" , function(){
	wynikkrioP++;
	krioP.innerHTML=wynikkrioP;
});

krioPMin.addEventListener("click" , function(){
	wynikkrioP--;
	krioP.innerHTML=wynikkrioP;
});
// ---------> Elektrostymulacja pryw <------------
esPAdd.addEventListener("click" , function(){
	wynikesP++;
	esP.innerHTML=wynikesP;
});

esPMin.addEventListener("click" , function(){
	wynikesP--;
	esP.innerHTML=wynikesP;
});


//			</DIV tabela wizyt prywatnych>

