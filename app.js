const feld = document.getElementById("nameFeld");   //document ist die gesamte Seite
const knopf = document.getElementById("knopf");     //getElementById holt HTML-Element anhand seiner ID. Alternativ querySelector("#knopf"), das mit CSS-Selektoren arbeitet
const ausgabe = document.getElementById("ausgabe");

knopf.addEventListener("click", () => { //Rufe diese Funktion auf, wenn jemand klickt
  const name = feld.value;  //Liest Eingabe des Textfelds aus (String)
  ausgabe.textContent = `Hallo ${name}!`;
});

const zahl1 = document.getElementById("zahl1Feld");
const zahl2 = document.getElementById("zahl2Feld");
//const add = document.getElementById("AddButton");
const summe = document.querySelector("#summe");

/*add.addEventListener("click", () => {
    const sumtext1 = zahl1.value;
    const sumtext2 = zahl2.value;
    const sum1 = Number(sumtext1);
    const sum2 = Number(sumtext2);
    const sum12 = sum1 + sum2;

    summe.textContent = `Summe: ${sum12}`;
})*/
// ->
document.querySelector("#rechner").addEventListener("submit", (e) => {
  e.preventDefault(); //Verhindert das Neuladen der Seite
  summe.textContent = `Summe: ${Number(zahl1.value) + Number(zahl2.value)}`;
});
