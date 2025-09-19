# Webbutveckling 2 - Lektioner



## Snabblänkar
* [W3Schools HTML Tutorials](https://www.w3schools.com/html/)
* [W3Schools HTML Elements Reference](https://www.w3schools.com/tags/)
* [W3Schools CSS Tutorials](https://www.w3schools.com/css/)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php)
* [W3Schools JavaScript Pages](https://www.w3schools.com/js/)



## Lektion 1. CSS-repetition
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




## Lektion 2. JS-grunder
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




## Lektion 3. DOM-intro
Gör så långt ni hinner.

1. Läs på om grunderna i Document Object Model (DOM):
	1. [DOM Intro](https://www.w3schools.com/js/js_htmldom.asp)\
	Jag tror att det räcker att läsa den sidan + sidorna nedan som visar förklaringar och exempel på hur man anävnder olika DOM-funktioner.
	2. [document.addEventListener()](https://www.w3schools.com/jsref/met_document_addeventlistener.asp)
	3. [document.createElement()](https://www.w3schools.com/jsref/met_document_createelement.asp)
	4. [document.querySelectorAll()](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)
	5. [document.querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp)
	6. [nodeList.length](https://www.w3schools.com/jsref/prop_nodelist_length.asp)
	7. [htmlElement.innerText](https://www.w3schools.com/jsref/prop_node_innertext.asp)
	8. [htmlElement.addEventListener()](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
	9. [htmlElement.appendChild()](https://www.w3schools.com/jsref/met_node_appendchild.asp)
2. Gör övningarna
3. Commit och Push!

Lycka till, så ses vi förhoppningsvis på måndag!

::: tip

Lägg alltid din JS-kod inne i en funktion som anropas när `DOMContentLoaded`-eventet har inträffat, så som visas i övningarna nedan. Detta säkerställer att webbläsaren har läst igenom all HTML-kod och skapat hela DOM-strukturen på sidan innan du börjar arbeta med den via din JS-kod.

:::

::: exercise 3.1
Skapa en ny HTML-fil med följande innehåll:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Övning 3.1</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			// Skriv din JS-kod här.
		})
		
	</script>
</head>
<body>
	
	<p>Det är <span id="weather">regnigt</span> idag.</p>
	
</body>
</html>
```

Skriv JS-kod som ändrar vädret från `regnigt` till `solsken` så snart sidan har laddats in. Du kommer behöva använda:

* `document.querySelector(SELECTOR)` -> `htmlElement`
* `htmlElement.innerText`
:::

::: exercise 3.2
Skapa en ny HTML-fil med följande innehåll:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Övning 3.2</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			// Skriv din JS-kod här.
		})
		
	</script>
</head>
<body>
	
	<p>Här är en lista med några frukter:</p>
	
	<ul>
		<li>Äpple</li>
		<li>Päron</li>
		<li>Apelsin</li>
		<li>Banan</li>
	</ul>
	
</body>
</html>
```

Skriv JS-kod som så snart sidan har laddats in ändrar texten `Här är en lista med några frukter:` till `Här är en lista med X frukter:`. `X` ska beräknas utifrån hur många frukter listan faktiskt innehåller, och vara `4` i exemplet ovan.

Du kommer behöva använda:

* `document.querySelector(SELECTOR)` -> `htmlElement`
* `htmlElement.innerText`
* `document.querySelectorAll(SELECTOR)` -> `nodeList`
* `nodeList.length`
:::

::: exercise 3.3
Skapa en ny HTML-fil med följande innehåll:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Övning 3.3</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			// Skriv din JS-kod här.
		})
		
	</script>
</head>
<body>
	
	<button id="addFruitButton">Lägg till frukt</button>
	
	<ul id="fruitsList">
	</ul>
	
</body>
</html>
```

Skriv JS-kod som så snart sidan har laddats in lägger till en `click`-lyssnare på knappen. När knappen klickas/i din klicklyssnare ska du:

1. Be användaren mata in namnet på en frukt med hjälp av `prompt()`-funktionen.
2. Skapa ett nytt `<li>`-element.
3. Få `<li>`-elementet innehålla det nya fruktnamnet användaren skrev in.
4. Lägga till `<li>`-elementet i slutet på fruktlistan (`<ul id="fruitsList">`)

Du kommer behöva använda:

* `document.querySelector(SELECTOR)` -> `htmlElement`
* `htmlElement.addEventListener(EVENT_NAME, EVENT_HANDLER)`
* `prompt(MESSAGE, DEFAULT_VALUE)`
* `document.createElement(TAG_NAME)` -> `htmlElement`
* `htmlElement.innerText`
* `htmlElement.appendChild(CHILD_ELEMENT)`
:::

::: exercise 3.4
Skapa en ny HTML-fil med följande innehåll:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Övning 3.4</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			// Skriv din JS-kod här.
		})
		
	</script>
</head>
<body>
	
	<div id="number">0</div>
	
	<button id="addOneButton">1</button>
	<button id="addFiveButton">5</button>
	<button id="addTenButton">10</button>
	
</body>
</html>
```

Skriv JS-kod som ser till att:

* När första knappen klickas så ska numret i `<div>`-elementet öka med 1.
* När andra knappen klickas så ska numret i `<div>`-elementet öka med 5.
* När tredje knappen klickas så ska numret i `<div>`-elementet öka med 10.

Lista själv ut vilka funktioner du behöver använda. Kom även ihåg att du kan använda `parseInt()` för att konvertera en sträng till ett heltal.
:::





## Lektion 4. DOM-intro
Gör så långt ni hinner. Vi fortsätter med DOM, och tittar på några andra HTML-element och events.

Lycka till!

::: tip

Lägg alltid din JS-kod inne i en funktion som anropas när `DOMContentLoaded`-eventet har inträffat, så som visas i övningarna nedan. Detta säkerställer att webbläsaren har läst igenom all HTML-kod och skapat hela DOM-strukturen på sidan innan du börjar arbeta med den via din JS-kod.

:::

::: exercise 4.1
Skapa en ny HTML-fil med följande innehåll:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Övning 4.1</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			// Skriv din JS-kod här.
		})
		
	</script>
</head>
<body>
	
	<p>
		Lägg till punkt på listan:
		<input type="text" id="newItemInput">
		<button>Lägg till</button>
	</p>
	
	<ul>
	</ul>
	
</body>
</html>
```

Skriv JS-kod som så snart sidan har laddats in lägger till en `click`-lyssnare på knappen. När användaren klickar på knappen så ska du läsa ut vad användaren har skrivit in i `<input>`-elementet och lägga till det i ett nytt `<li>`-element i slutet av `<ul>`-elementet.

Du kommer behöva använda:

* `document.querySelector(SELECTOR)` -> `htmlElement`
* `htmlElement.addEventListener(EVENT_NAME, EVENT_HANDLER)` (för att lyssna på klick på knappen)
* `inputElement.value` (för att läsa ut vad användaren har skrivit i `<input>`-elementet, använd `document.querySelector()` för att få en referens till `<input>`-elementet)
* `document.createElement(TAG_NAME)` -> `htmlElement` (för att skapa ett nytt HTML-element)
* `htmlElement.innerText` (för att tilldela ett HTML-element dess innehåll)
* `htmlElement.appendChild(CHILD_ELEMENT)` (för att lägga till ett HTML-elementet i ett annat)
:::

::: exercise 4.2
Skapa en ny HTML-fil med följande innehåll:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Övning 4.2</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			// Skriv din JS-kod här.
		})
		
	</script>
</head>
<body>
	
	<div>
		Välj multiplikationstabell:
		<input type="number" value="0">
	</div>
	
	<ul id="multiplications">
	</ul>
	
</body>
</html>
```

Skriv JS-kod som så snart sidan har laddats in lägger till en `input`-lyssnare på `<input>`-elementet. `input`-eventet inträffar varje gång användaren ändrar det som står skrivet i `<input>`-elementet. När detta inträffar ska du visa mutliplikationstabellen i `<ul>`-elementet.

Om användaren t.ex. ändrar `<input>`-elementet till `5`, så ska `<ul>`-elementet visa:

```html result no-code
<ul>
	<li>0 * 5 = 0</li>
	<li>1 * 5 = 5</li>
	<li>2 * 5 = 10</li>
	<li>3 * 5 = 15</li>
	<li>4 * 5 = 20</li>
	<li>5 * 5 = 25</li>
	<li>6 * 5 = 30</li>
	<li>7 * 5 = 35</li>
	<li>8 * 5 = 40</li>
	<li>9 * 5 = 45</li>
	<li>10 * 5 = 50</li>
</ul
```

Om du vill ta bort innehållet från ett HTML-element så kan du sätta `htmlElement.innerText` till en tom sträng.

:::



::: exercise 4.3
Skapa en ny HTML-fil med följande innehåll:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Övning 4.3</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			// Skriv din JS-kod här.
		})
		
	</script>
</head>
<body>
	
	<input id="firstNumber" type="number" value="0"> +
	<input id="secondNumber" type="number" value="0"> =
	<span id="result"></span>
	
</body>
</html>
```

Skriv JS-kod som visar summan av numren i de båda `<input>`-elementen i `<span>`-elementet så snart användaren ändrar numren. Använd:

1. `document.querySelector(SELECTOR)` -> `htmlElement` för att greppa referenser till HTML-elementen.
2. ``inputElement.addEventListener(`input`, function(){ ... })`` (använd returvärdet från `document.querySelector(SELECTOR)`) för att lyssna på när användaren ändrar värdet som står i ett `<input>`-element
3. `inputElement.valueAsNumber` för att läsa ut vilket nummer användaren har skrivit in i `<input>`-elementen.
4. Beräkna summan.
5. `spanElement.innerText` för att tilldela `<span>`-elementet summan den ska visa.
:::

::: exercise 4.4
Skapa en ny HTML-fil med följande innehåll:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Övning 4.4</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			// Skriv din JS-kod här.
		})
		
	</script>
</head>
<body>
	
	<input id="firstNumber" type="number" value="0">
	<select id="operation">
		<option value="+">+</option>
		<option value="-">-</option>
		<option value="*">*</option>
		<option value="/">/</option>
	</select>
	<input id="secondNumber" type="number" value="0"> =
	<span id="result"></span>
	
</body>
</html>
```

Skriv JS-kod som ser till att `<span>`-elementet visar resultatet av de valda numren och operationen. `<select>`-elementet stödjer `input`-eventet på samma sätt som `<input>`-elementet gör. Använd `selectElement.value` för att läsa ut värdet i `value`-attributet för det `<option>`-element användaren har valt.
:::





## Lektion 5. Catch-up
Vi fortsätter att arbeta med övningarna ifrån Lektion 3 och Lektion 4.




## Lektion 6. Catch-up
Vi fortsätter att arbeta med övningarna ifrån Lektion 3 och Lektion 4.




## Lektion 7. DOM
Gör så långt ni hinner. Vi fortsätter med några olika DOM-övningar.

::: exercise 7.1
Skapa en ny HTML-fil med följande innehåll:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Övning 7.1</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			// Skriv din JS-kod här.
		})
		
	</script>
</head>
<body>
	
	<h2>Bra saker</h2>
	<ul id="goodList">
		<li><button>Godis</button></li>
		<li><button>Jobb</button></li>
		<li><button>Orkaner</button></li>
	</ul>
	
	<h2>Dåliga saker</h2>
	<ul id="badList">
		<li><button>Lön</button></li>
		<li><button>Skatt</button></li>
		<li><button>Spel</button></li>
	</ul>
	
</body>
</html>
```

Skriv JS-kod som lyssnar på när användaren klickar på knapparna, och när användaren klickar på knappen så ska den (hela `<li>`-elementet) flyttas över till den andra listan.

Du kommer behöva använda:

* `document.querySelector(SELECTOR)` -> `htmlElement`
* `document.querySelectorAll(SELECTOR)` -> `NodeList`
* `htmlElement.addEventListener(EVENT_NAME, EVENT_HANDLER)` (för att lyssna på klick på en knapp)
* `htmlElement.parentNode` för att få en referens till ett elements föräldraelement (kan användas upprepade gånger)
* `htmlElement.appendChild(CHILD_ELEMENT)` (för att lägga till ett HTML-elementet i ett annat)
:::

::: exercise 7.2
Skapa en ny HTML-fil som visar knappar utlagda så dem ser ut som ett tangenbord. En knapp ska alltså ha tecknet `A` på sig, en annan ska ha tecknet `B` på sig, etc.

När användaren klickar på en av dessa knappar så ska den skriva ut det tecknet någonstans på skärmen, t.ex. i en paragraf ovanför tangenbordet.

Försök att själv lista ut vilka DOM-funkitonaliteter du kommer behöva använda. Troligtvis har vi redan gått igenom allt som ni kommer behöva använda för att lösa den här uppgiften.

När du är klar, försök även lägga till en "backspace"-knapp. När man klickar på den så ska det sista tecknet man skrivit tas bort. När du är klar med det, lägg då till en CAPSLOCK-knapp, och varje gång man klickar på den så ska texten i knapparna växla mellan små och stora bokstäver.
:::




## Lektion 8. DOM
Den här lektionen blir ett litet mini-projekt som kanske sträcker sig över flera lektioner.

::: exercise 8.1
Din uppgift är att bygga ett litet memory-spel som spelaren kan spela själv (1 player). Börja med att skapa en HTML-sida som positionerar ut 12 knappar över 3 rader och 4 kolumner, vardera visande ett `?`. Använd gärna CSS grid, och gör knapparna lite större än standard.

Skriv sedan JS-kod som slumpar ut vilken symbol varje knapp döljer. Du kan t.ex. använda `A`, `B`, `C`, etc. Om du vill göra det lite festligare så kan du använda [emojis](https://emojipedia.org/unicode-8.0). För att komma ihåg vilken symbol varje knapp döljer så kan du lägga till ett eget-skapat `data-`-attribut på knappen. Det kan du göra med t.ex. ``theButton.dataset.theSymbol = `A` ``.

---

Försök gärna att lösa resten av uppgiften på egen hand. Om du vill ha tips så kan du läsa resten av texten i övningen.

---

Sedan får du lyssna på när användaren klickar på knapparna. När användaren klickar på en knapp första gången så ska du visa vad för symbol som gömmer sig under den. Ändra då helt enkelt texten i knappen (`?`) till det som finns nedsparat i `theButton.dataset.theSymbol`. Du behöver även komma ihåg att det är denna knapp som användaren har klickat på. Det kan du göra genom att använda en `selectedButton1`-variabel. Låt den ha värdet `null` till en början, och ändra den till knappen som användaren klickar på när användaren klickar på en knapp första gången.

När användaren klickar på en av knapparna den andra gången så kan du spara ner den i en `selectedButton2`-variabel. Här ska du även visa användaren vad som döljer sig under knappen, så ändra knappen text (`?`) till det som finns i knappens `.dataset.theSymbol`. Nu behöver du ju även jämföra ifall de två `selectedButton` döljer samma symbol eller ej.

Om det är samma symbol så kan du sätta `theButton.disabled` till `true`. Då kan användaren inte klicka på knappen igen. Och sätt även `selectedButton1`-variabeln och `selectedButton2`-variabeln tillbaka till `null`, så det blir som att användaren inte har klickat på någon knapp.

Om det inte är samma symbol så måste vi dölja symbolen i knappen igen efter ett litet tag (sätta dess text tillbaka till `?`). Funktionen [setTimeout()](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout2) i JavaScript kan användas för att utföra något en liten stund senare. Använd det för att dölja symbolen i knappen efter 500 millisekunder, och sätt även `selectedButton1`-variabeln och `selectedButton2`-variabeln tillbaka till `null`, så användaren kan köra igen.

När du är klar, försök lägg till mer funktionalitet, som t.ex.:

* En räknare som räknar hur många gånger man behöver för att klara spelet.
* En "Starta om"-knapp som visas när spelet är slut.
* En highscore-lista (baserat på hur många omgånger man behövde innan man klarade spelet).
* Etc.

:::



## Instuderingsfrågor till prov
Här är instuderingsfrågor till provet fredagen 26 september. Ni kommer inte skriva någon kod på provet.

Kodexempel som kan vara bra att ha som referens när man pluggar in instuderingsfrågorna:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>JS-test</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			
			const buttonElement = document.querySelector(`button`)
			
			buttonElement.addEventListener(`click`, function(){
				
				const number = parseInt(buttonElement.innerText)
				
				buttonElement.innerText = number + 1
				
			})
			
		})
		
	</script>
</head>
<body>
	
	<button>0</button>
	
</body>
</html>
```


```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>JS-test</title>
	<script>
		
		document.addEventListener(`DOMContentLoaded`, function(){
			
			const selectElement = document.querySelector(`select`)
			const divElement = document.querySelector(`div`)
			
			selectElement.addEventListener(`input`, function(){
				
				divElement.innerText = selectElement.value
				
			})
			
		})
		
	</script>
</head>
<body>
	
	<select>
		<option value="A">Första</option>
		<option value="B">Andra</option>
		<option value="C">Tredje</option>
	</select>
	
	<div></div>
	
</body>
</html>
```

<style>
	
	dd{
		margin-bottom: 1em;
	}
	
</style>

<dl>
	<dt>När körs händelsen <code>DOMContentLoaded</code>?</dt>
	<dd>När webbläsaren har läst igenom all HTML-kod.</dd>
	<dt>Varför behöver vi ofta lyssna på händelsen <code>DOMContentLoaded</code>?</dt>
	<dd>För att <code>document.querySelector()</code> och <code>document.querySelectorAll()</code> inte kan skicka tillbaka rätt HTML-element förrän webbläsaren har läst igenom all HTML-kod och skapat HTML-elementen.</dd>
	<dt>Vad för argument skickar du till <code>document.querySelector()</code>?</dt>
	<dd>En CSS-selektor som en sträng.</dd>
	<dt>Vad för argument skickar du till <code>document.querySelectorAll()</code>?</dt>
	<dd>En CSS-selektor som en sträng.</dd>
	<dt>Vad returnerar <code>document.querySelector()</code>?</dt>
	<dd>En referens till ett HTML-element (här visas det som <code>htmlElement</code> (för ett generellt HTML-element), eller <code>inputElement</code> (för ett <code>&lt;input&gt;</code> element, etc.)).</dd>
	<dt>Vad kan vi använda <code>htmlElement.addEventListener()</code> till?</dt>
	<dd>För att lägga till en funktion som ska anropas när en viss händelse inträffar på <code>htmlElement</code>.</dd>
	<dt>Vad refererar <code>htmlElement.innerText</code> till?</dt>
	<dd>Texten som finns inuti ett HTML-element.</dd>
	<dt>När körs händelsen <code>click</code>?</dt>
	<dd>När man klickar på ett element.</dd>
	<dt>Hur läser man ut värdet som användaren har skrivit in i ett <code>&lt;input&gt;</code>-element som en sträng?</dt>
	<dd><code>inputElement.value</code></dd>
	<dt>Hur läser man ut värdet som användaren har skrivit in i ett <code>&lt;input&gt;</code>-element som ett nummer?</dt>
	<dd><code>inputElement.valueAsNumber</code></dd>
	<dt>När körs händelsen <code>input</code>?</dt>
	<dd>När användaren ändrar det värde som står i ett <code>&lt;input&gt;</code>-element eller <code>&lt;select&gt;</code>-element.</dd>
	<dt>Vilken funktion använder man för att skapa ett nytt HTML-element?</dt>
	<dd><code>document.createElement()</code></dd>
	<dt>Hur får man tag i ett elements föräldraelement?</dt>
	<dd><code>htmlElement.parentNode</code></dd>
	<dt>Hur lägger man till ett element i ett annat element?</dt>
	<dd><code>htmlElement.appendChild(childHtmlElement)</code></dd>
</dl>




## Lektion 9. Catch-up
Vi fotsätter att arbeta på övningarna från föregående lektioner. De som vill får plugga på instuderingsfrågorna.