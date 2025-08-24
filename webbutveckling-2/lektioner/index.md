# Webbutveckling 2 - Lektioner



## Snabblänkar
* [W3Schools HTML Tutorials](https://www.w3schools.com/html/)
* [W3Schools HTML Elements Reference](https://www.w3schools.com/tags/)
* [W3Schools CSS Tutorials](https://www.w3schools.com/css/)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php)
* [W3Schools JavaScript Pages](https://www.w3schools.com/js/)



## 1. CSS-repetition
* Introduktion till vad ni kommer lära er i kursen
* CSS-repetition
* CSS-övning

::: exercise 1.1
Styla följande HTML-kod:

```html
<h1>Harry Potter-världen</h1>
<p>Harry Potter är en välkänd bokserie skriven av J. K. Rowling. Här kommer vi ta en liten snabbtitt på vad den innehåller.</p>

<h2>Böcker</h2>
<ol>
	<li>Harry Potter och de vises sten</li>
	<li>Harry Potter och hemligheternas kammare</li>
	<li>Harry Potter och fången från Azkaban</li>
	<li>Harry Potter och den flammande bägaren</li>
	<li>Harry Potter och Fenixorden</li>
	<li>Harry Potter och halvblodsprinsen</li>
	<li>Harry Potter och dödsrelikerna</li>
</ol>

<h2>Huvudpersoner</h2>
<ul>
	<li>Harry Potter</li>
	<li>Ron Weasley</li>
	<li>Hermione <del>Ganger</del> Granger</li>
	<li>Lord Voldemort</li>
	<li>Albus Dumbledore</li>
</ul>

<h2>Ordförklaringar</h2>
<dl>
	
	<dt>Mugglare</dt>
	<dd>En person utan magiska krafter.</dd>
	
	<dt>Dödsätare</dt>
	<dd>En anhängare till Lord Voldemort.</dd>
	
</dl>
```

Så att den ser ut som följande:

```html result no-code
<h1 style="background-color: blue;">Harry Potter-världen</h1>
<p style="font-style: italic;">Harry Potter är en välkänd bokserie skriven av J. K. Rowling. Här kommer vi ta en liten snabbtitt på vad den innehåller.</p>

<h2 style="color: red;">Böcker</h2>
<ol style="color: blue">
	<li>Harry Potter och de vises sten</li>
	<li>Harry Potter och hemligheternas kammare</li>
	<li style="color: red;">Harry Potter och fången från Azkaban</li>
	<li>Harry Potter och den flammande bägaren</li>
	<li>Harry Potter och Fenixorden</li>
	<li>Harry Potter och halvblodsprinsen</li>
	<li>Harry Potter och dödsrelikerna</li>
</ol>

<h2 style="font-weight: normal;">Huvudpersoner</h2>
<ul style="border: 1px solid black; padding: 1em;">
	<li>Harry Potter</li>
	<li>Ron Weasley</li>
	<li>Hermione <del>Ganger</del> Granger</li>
	<li style="padding-left: 3em;">Lord Voldemort</li>
	<li>Albus Dumbledore</li>
</ul>

<h2 style="text-decoration: underline;">Ordförklaringar</h2>
<dl>
	
	<dt style="font-weight: bold;">Mugglare</dt>
	<dd>En person utan magiska krafter.</dd>
	
	<dt style="font-weight: bold;">Dödsätare</dt>
	<dd>En anhängare till Lord Voldemort.</dd>
	
</dl>
```

Skriv CSS-koden i en extern CSS-fil som du laddar in på hemsidan. Det är OK att lägga till id- och class-attribut i HTML-koden om du vill.

:::




## 2. JS-grunder
* Grunderna i JS
* Exempel
* Övningar

```html
<!-- ... -->
<head>
	
	<script>
		
		// Skriv din JS-kod här.
		
	</script>
	
	<!-- Eller i en extern fil. -->
	<script src="./din-fil.js"></script>
	
</head>
<!-- ... -->
```

```js
// din-fil.js

// Konstanter skapas med "const".
const luckyNumber = 7
const aQuarter = 0.25

// Variabler skapas med "let".
let myName = `Alice`
let theSkyIsBlue = true

// Variabler kan tilldelas nya värden.
myName = `Bob`

// Logga värden.
console.log(`Denna sträng kommer att loggas.`)

console.log(`Alla argument`, `kommer att`, `loggas`, 123)

// Generera slumpat flyttal mellan 0 och 1.
const between0And1 = Math.random()

// Villkorssatser.
if(between0And1 < 0.33){
	console.log(`Det är lågt.`, between0And1)
}else if(between0And1 < 0.75){
	console.log(`Det är mellan.`, between0And1)
}else{
	console.log(`Det är högt.`, between0And1)
}

// Använd for-loopen för upprepad exekvering.
for(let i=0; i<3; i++){
	
	// Använd ${...} i strängar skapade med `-tecknet
	// för att sätta in värden.
	console.log(`Nu har i-variabeln värdet ${i}.`)
	
}

// ${...} fungerar inte i strängar skapade med
// "-tecknet eller '-tecknet.
const pizzaName = `Capriccosa`

console.log("Pizzan är en ${pizzaName}.")
console.log('Pizzan är en ${pizzaName}.')

// Använd while-loopen för upprepad exekvering.
let j = 5
while(j < 8){
	
	console.log(`Nu har j-variabeln värdet ${j}.`)
	
	j++
	
}

// Använd "for of"-loopen för att iterera över en sekvens av värden.
for(const letter of "Sverige"){
	console.log(letter)
}

// Använd function NAMN(){ ... } för att skapa en funktion.
function getAGoodYear(){
	
	// Använd return för att returnera ett värde från en funktion.
	return 1990
	
}

// Anropa funktionen.
console.log(`Ett bra år var år ${getAGoodYear()}.`)

// Funktioner kan ha parametrar.
function getSum(firstNumber, secondNumber){
	
	// Variabler kan skapas lokalt (finns bara i den här funktionen).
	const theSum = firstNumber + secondNumber
	
	return theSum
	
}

// Anrop till funktioner kan skicka med argument.
const total = getSum(5, 7)

console.log(`Summan av 5 och 7 är ${getSum(5, 7)}.`)


// Funktioner är värden som kan sparas ner i variabler.
// Här skapas en funktion med function(){...} uttrycket.
// Man kan ha parametrar.
const logHello = function(){
	console.log(`Hello`)
}

// Här skapas en funktion med () => {...} uttrycket.
// Man kan ha parametrar.
const logWorld = () => {
	console.log(`World`)
}

// Här skapas en funktion med () => UTTRYCK utrycket.
const logCrazy = () => console.log(`Crazy`)
```

```js
// Här är tre webbläsarfunktioner.
// De fungerar inte när man kör JS på servern.
alert(`Här kommer en ruta med info!`)

const didConfirm = confirm(`Är du säker?`)
console.log(`Du valde: `, didConfirm)

const enteredName = prompt(`Skriv in ditt namn: `, `Anonym`)
console.log(`Du angav att du heter`, enteredName)
```

::: exercise 1

Skapa ett nytt **private** repository på GitHub, ge `PeppeL-G` tillgång till det, klona det till din egen dator, och spara sedan allt ditt framtida arbete i den här kursen där. Skapa en ny commit och pusha den till GitHub vid slutet av varje lektion.

:::

::: exercise 2

Skapa en HTML-fil med ett JS-program (skriv JS-koden i en separat fil) som ber användaren mata in ett positivt heltal (använd `prompt()` och `parseInt()`). Beräkna och visa sedan summan av alla tal mellan `0` och det inmatade talet. Utgå ifrån att användaren alltid kommer mata in ett heltal större än `0`.

Om användaren t.ex. matar in talet `5` så ska ditt program beräkna `0 + 1 + 2 + 3 + 4 + 5 = 15` (använd en loop).

Utför själva summeringen av heltalen i en funktion som du skapar.

:::

::: exercise 3

Ändra din kod från Övning 2 så att du ber användaren mata in ett nytt heltal så länge det inmatade heltalet är negativt. Så snart ett positivt heltal har matats in så ska ditt program fungera på samma sätt som innan.

:::

::: exercise 4

Ändra din kod från Övning 3 och kolla så att användaren verkligen har matat in ett heltal innan du använder `parseInt()`. Du kan t.ex. iterera över tecknen i den inmatade strängen med en "for of"-loop, och kolla ifall varje tecken är ett av `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` eller `9`, men denna funktionalitet kan implementeras på många olika sätt (se dokumentatitonen för JS-strängar och vilka metoder som finns där). Och denna funktionalitet läggs så klart med fördel i en egen loop.

Ditt program ska be användaren att mata in ett nytt positivt heltal så länge som användaren matar in något som inte är ett heltal.

:::

::: exercise 5

Skapa en ny HTML-fil med ett JS-program (skriv gärna JS-koden i en separat fil) där du ber användaren mata in två heltal med hjälp av `prompt()`-funktionen (anropa den två gånger). Programmet ska sedan beräkna det första talet upphöjt till det andra talet.

Om användaren t.ex. matar in talen `5` och `3` så ska du beräkna och visa talet `5 * 5 * 5 = 125` för användaren. Använd en loop för detta.

Validera inmatningarna så att:

* Det första talet måste vara ett heltal (ej nödvändigtvis positivt)
* Det andra talet måste vara ett positivt heltal

Om användaren misslyckas med att mata in ett korrekt tal så ska användaren få mata in talet på nytt tills användaren lyckas mata in ett korrekt tal.

Du får återanvända och modifiera de funktioner du har skapat i de tidigare uppgifterna. Du bör även skapa en ny funktion som utför själva "upphöjt till"-uträkningen med en loop.

:::