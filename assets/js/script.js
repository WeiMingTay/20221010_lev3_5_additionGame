// Variablen bestimmen

let zahl1 = document.getElementById("zahl1");
let zahl2 = document.getElementById("zahl2");
let ergebnis = document.getElementById("ergebnisInput");
let ergebnisAnzeige = document.getElementById("ergebnis");

let random1 = Math.floor(Math.random() * 100 + 0);
let random2 = Math.floor(Math.random() * 100 + 0);


// Zahlen ausgeben/ Funktionen bestimmen
zahl1.innerHTML = random1;
zahl2.innerHTML = random2;

// Funktionen

let addition = (a, b) => {
	return a + b;
};

function send() {
	if (addition(random1, random2) === ergebnis.value*1) {
		(ergebnisAnzeige.innerHTML = "Das stimmt!"),
        ergebnisAnzeige.style.color="lightgreen";
	} else {
		ergebnisAnzeige.innerHTML = "Das ist falsch!!!";
        ergebnisAnzeige.style.color="red";
	}
}

function neuesRaetsel() {
	location.reload();
}
