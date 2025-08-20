# Webbserverprogrammering 1 - Lektioner



## Snabblänkar
* [W3Schools HTML Tutorials](https://www.w3schools.com/html/)
* [W3Schools HTML Elements Reference](https://www.w3schools.com/tags/)
* [W3Schools CSS Tutorials](https://www.w3schools.com/css/)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php)



## Lektion 1
* Introduktion till vad ni kommer lära er i kursen
* HTML taggtest
* HTML-repetition
* HTML-övning

::: exercise 1.1
Skapa en ny `.html`-fil i Visual Studio Code och skriv HTML-kod i den som visar en sida som ser ut som följande:

```html result no-code
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
:::



<!--

## Kommande...
* Webben (server, webbläsare, HTTP, HTML, URI)
* Request, Response
* Node.js & npm

```js
// Variabler skapas med "let".
// Strängar skapas med `-tecknet.
let cityName = `Jönköping`

// let-variabler kan tilldelas nya värden efter att de skapats.
cityName = `Mullsjö`

// Variabler skapade med "const" istället för "let"
// kan inte tilldelas nya värden efter att de skapats.
const year = 1990

year = 2000 // Denna rad kommer krascha programmet, eftersom "year"-variabel är en const variabel.

// Använd console.log()-funktionen för att be programmet skriva ut värden.
console.log(`Hallå, världen!`)

// Använd if-satser för alternativ exekvering.
if(year == 2025){
	console.log(`Det är detta året nu!`)
}else if(2025 < year){
	console.log(`Det är framtiden!`)
}else{
	console.log(`Det är i det förgångna!`)
}

// Använd for-loopen för upprepad exekvering.
for(let i=0; i<10; i++){
	
	// Använd ${...} i strängar skapade med `-tecknet för att sätta in värden.
	console.log(`Nu har i-variabeln värdet ${i}.`)
	
}

// Använd while-loopen för upprepad exekvering.
let i = 0
while(i < 10){
	
	console.log(`Nu har i-variabeln värdet ${i}.`)
	
	i++
	
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
```

::: exercise 1.1
Skapa en ny fil med filändelsen `.js` i Visual Studio Code med följande innehåll:

```js
console.log(`Hello, World!`)
```

Kör sedan filen med hjälp av Run-knappen i Visual Studio Code, och försök sedan köra filen med hjälp av `node`-kommandot i *Windows Terminal*.

:::

::: exercise 1.2
Skapa ett JavaScript-program som skriver ut vad summan av 123 och 789 är. När man kör programmet ska den skriva ut följande på skärmen:

```
123 + 789 är 912.
```
:::

::: exercise 1.3
Skapa ett JavaScript-program som skriver ut vad medelvärdet av 7382 och 5428 är. I ditt program måste du även skapa och använda en funktion som beräknar medelvärdet av två tal som man skickar till det, t.ex.:

```js
getAverage(5, 7) // Detta borde evalueras till 6.
```

Outputen i ditt program ska vara följande:

```
Medelvärdet av 7382 och 5428 är 6405.
```
:::

::: exercise 1.4
Skapa ett JavaScript-program som skriver ut femmans multiplikationstabell:

```
0 * 5 = 0
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
```

Skapa två olika implementationer:

* Ett program som använder en `for`-loop
* Ett program som använder en `while`-loop

:::

::: exercise 1.5
Skapa ett JavaScript-program som skriver ut ettan till treans multiplikationstabell:

```
0 * 1 = 0
1 * 1 = 1
2 * 1 = 2
3 * 1 = 3
4 * 1 = 4
5 * 1 = 5
6 * 1 = 6
7 * 1 = 7
8 * 1 = 8
9 * 1 = 9
10 * 1 = 10

0 * 2 = 0
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
4 * 2 = 8
5 * 2 = 10
6 * 2 = 12
7 * 2 = 14
8 * 2 = 16
9 * 2 = 18
10 * 2 = 20

0 * 3 = 0
1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
4 * 3 = 12
5 * 3 = 15
6 * 3 = 18
7 * 3 = 21
8 * 3 = 24
9 * 3 = 27
10 * 3 = 30
```
:::


-->
