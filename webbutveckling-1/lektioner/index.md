# Webbutveckling 1 - Lektioner



## Snabblänkar
* [W3Schools HTML Tutorials](https://www.w3schools.com/html/)
* [W3Schools HTML Elements Reference](https://www.w3schools.com/tags/)
* [W3Schools CSS Tutorials](https://www.w3schools.com/css/)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php)



## Lektion 1. Intro + HTML-grunder
* Introduktion till kursen
* Introduktion till Internet & Webben
* VS Code
* Grunderna i HTML
* Övning

::: exercise 1.1
Ladda ner och installera [Visual Studio Code](https://code.visualstudio.com/) (VS Code). Det är en texteditor som är designad för att skriva kod i.

**TIPS**\
Under installationsprocessen, bocka för följande två alternativ:

* `Add "Open with Code" action to Windows Explorer file context menu`
* `Add "Open with Code" action to Windows Explorer directory context menu`

Genom att göra detta så kan du högerklicka på filer och mappar och sedan välja att öppna dem i Visual Studio Code.

:::

::: exercise 1.2
Skapa en ny `.html`-fil i Visual Studio Code och skriv HTML-kod i den som visar en sida som ser ut som följande (använd ett `<h1>`-element för rubriken, och ett `<p>`-element för respektive paragraf):

```html result no-code
<h1>En vacker hemsida</h1>
<p>Det här är min vackra hemsida! Är den inte fin?</p>
<p>Och detta är bara början. Den kommer bli mycket bättre snart.</p>
```

När du har skrivit din HTML-kod i filen så behöver du öppna den i en webbläsare för att se resultatet.
:::

::: exercise 1.3
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
	<li>Hermione Granger</li>
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

Om du är osäker på vilka HTML-element du bör använda så rekommenderas du att läsa på om:

* [&lt;h1&gt; - &lt;h6&gt;](https://www.w3schools.com/tags/tag_hn.asp)
* [&lt;p&gt;](https://www.w3schools.com/tags/tag_p.asp)
* [&lt;ul&gt;](https://www.w3schools.com/tags/tag_ul.asp)
* [&lt;ol&gt;](https://www.w3schools.com/tags/tag_ol.asp)
* [&lt;dl&gt;](https://www.w3schools.com/tags/tag_dl.asp)

:::

::: exercise 1.4

Klicka runt bland de olika HTML-elementen som nämns på W3Schools sida [HTML Element Reference](https://www.w3schools.com/tags/) och utforska vad som finns. Du kan bland annat kolla upp följande HTML-element: `<strong>`, `<em>`, `<kbd>`, `<del>`, `<sup>`, `<sub>`, `<q>`, `<cite>`.

:::



## Lektion 2. HTML-grunder
Peter är sjuk. Dagens lektion innehåller följande:

* Nästlade element
* Block-element VS inline-element
* Tabeller
* Teckenkoder

Om ni finner något för svårt att förstå så tar vi och går igenom det nästa lektion. Lycka till!

---

Läs på om [Numrerade och onumrerade listor](https://www.kiltedviking.net/se/www/html/del4.html#listor). Gör sedan övningen nedan.

::: exercise 2.1
Skapa en ny `.html`-fil med olika nästlade list-relaterade element så att de visar en sida som den nedan

```html result no-code
<h1>Att göra</h1>
<ul>
	<li>Träna</li>
	<li>
		Städa:
		<ul>
			<li>Badrummet</li>
			<li>Hallen</li>
			<li>Köket</li>
		</ul>
	</li>
	<li>Yoga</li>
	<li>
		Baka kaka
		<ol>
			<li>Hitta recept</li>
			<li>
				Köp ingridienser
				<ol>
					<li>Skriv ner ingridienserna på en lapp</li>
					<li>Åk till affären</li>
					<li>Samla ihop ingridienserna</li>
					<li>Betala för ingridienserna</li>
					<li>Åk tillbaka hem (med ingridienserna)</li>
				</ol>
			</li>
			<li>Vispa ihop ingridienserna till en smet</li>
			<li>Häll smeten i en form</li>
			<li>Ät smeten (godare så!)</li>
		</ol>
	</li>
</ul>
```
:::

Läs på om skillnaden mellan [HTML Block and Inline Elements](https://www.w3schools.com/html/html_blocks.asp). Gör sedan övningen nedan.

::: exercise 2.2
För var och ett av följande element, ange ifall de är block-element eller inline-element:

* `<h1>`
* `<h2>`
* `<p>`
* `<strong>`
* `<q>`
* `<blockquote>`

**TIPS**\
Om du sätter två element av samma typ intill varandra (t.ex. `<p>abc</p><p>def</p>`) så kommer texten visas på samma rad om elementen är inline, och på två olika rader om elementen är block element.
:::

::: exercise 2.3
Skapa en ny `.html`-fil i Visual Studio Code och skriv HTML-kod i den som visar en sida som ser ut som följande:

```html result no-code
<h1>Några olika element</h1>
<p><strong>Viktig information</strong>: Alla måste använda paraply när det regnar.</p>
<p>Jag tycker att du presterade <em>väldigt</em> mycket bättre idag än igår.</p>
<p>Bamse sa en gång att <q cite="https://www.skaparportalen.se/post/60-bamse-citat">Ingen är så stark att han inte behöver någon vän</q>, och jag håller med.</p>
```

Använd bland annat följande element på din sida: `<em>`, `<strong>` och `<q>`.
:::

Läs på om [HTML-tabeller](https://www.w3schools.com/html/html_tables.asp). Gör sedan övningarna nedan.

::: tip
Under utveckling kan du använda `<table border="1">` för att din tabell ska få kanter och bli lättare se. Kanter bör man egentligen lägga till med hjälp av CSS, men under utveckling så är det ok att använda det där `border`-attributet.
:::

::: exercise 2.4
Skapa en ny `.html`-fil som visar en tabell som den nedan.

```html result no-code
<h1>Karaktärer</h1>

<table border="1">
	<tr>
		<td>Förnamn</td>
		<td>Efternamn</td>
		<td>Kön</td>
	</tr>
	<tr>
		<td>Mario</td>
		<td>Mario</td>
		<td>Man</td>
	</tr>
	<tr>
		<td>Peach</td>
		<td>Toadstool</td>
		<td>Kvinna</td>
	</tr>
	<tr>
		<td>Luigi</td>
		<td>Mario</td>
		<td>Man</td>
	</tr>
</table>
```
:::

::: exercise 2.5
Skapa en ny `.html`-fil som visar en tabell som den nedan.

```html result no-code
<h1>Bilar</h1>

<table border="1">
	<tr>
		<th><abbr title="Registreringsnummer">Reg.nr</abbr></th>
		<th>Färg</th>
		<th>Ägare</th>
	</tr>
	<tr>
		<td>313</td>
		<td>Röd</td>
		<td>Kalle Anka</td>
	</tr>
	<tr>
		<td>SLW 287R</td>
		<td>Lime</td>
		<td>Mr. Bean</td>
	</tr>
</table>
```
:::

Läs på om `colspan`- och `rowspan`-attributen som `<td>`-elementet kan ha. Gör sedan övningarna nedan.

::: exercise 2.6
Skapa en ny `.html`-fil som visar en tabell som den nedan.

```html result no-code
<table border="1">
	
	<tr>
		<td>a</td>
		<td>b</td>
		<td>c</td>
	</tr>
	
	<tr>
		<td colspan="2">x</td>
		
		<td>c</td>
	</tr>
	
	<tr>
		<td>a</td>
		<td colspan="2">y</td>
		
	</tr>
	
</table>
```
:::

::: exercise 2.7
Skapa en ny `.html`-fil som visar en tabell som den nedan.

```html result no-code
<table border="1">
	
	<tr>
		<td>a</td>
		<td>b</td>
	</tr>
	
	<tr>
		<td rowspan="2">x</td>
		<td>b</td>
	</tr>
	
	<tr>
		
		<td>b</td>
	</tr>
	
</table>
```
:::

::: exercise 2.8
Skapa en ny `.html`-fil som visar en tabell som den nedan.

```html result no-code
<table border="1">
	
	<tr>
		<td>a</td>
		<td>b</td>
		<td>c</td>
		<td rowspan="3">d</td>
	</tr>
	
	<tr>
		<td>a</td>
		<td colspan="2" rowspan="2">b</td>
		
		
	</tr>
	
	<tr>
		<td>a</td>
		
		
		
	</tr>
	
	<tr>
		<td colspan="2">a</td>
		
		<td colspan="2">c</td>
		
	</tr>
	
</table>
```
:::

Läs på om [Character Sets](https://www.w3schools.com/html/html_charset.asp), och gör sedan övningen nedan.

::: exercise 2.9
Nu får du träna på att göra fel! 😃

Skapa en ny `.html`-fil i Visual Studio Code och skriv HTML-kod i den som visar tecknen `å`, `ä` och `ö` fel. Du ska alltså i din text editor (t.ex. Visual Studio Code) spara filen i ett teckenformat (du kan ändra teckenformat längst ner långt åt höger i Visual Studio Code där det står `UTF-8`), och i HTML-koden ska du skriva att den har sparats i ett annat teckenformat (med hjälp av `<meta charset="...">`). Spara t.ex. filen med teckenformatet `UTF-8` i VS Code, och skriv i HTML-koden att den har blivit sparad med teckenformatet `ISO-8859-1`.

Verfiera att din webbläsare visar tecknen `å`, `ä` och `ö` fel. Ändra sedan så att du använder `UTF-8` på båda ställena, så att `å`, `ä` och `ö` visas som dem ska.
:::




## Lektion 3. HTML-grunder
Dagens lektion innehåller:

* Repetition (speciellt block-element VS inline-element och teckenkoder)
* Meta-information
	* `lang="en"` och `lang="sv"`
	* `<meta charset="UTF-8">`
	* `<meta name="description" content="En beskrivning av sidans innehåll...">`
	* `<meta name="keywords" content="HTML, tutorial, exercises">`
	* `<meta name="author" content="Your Real Name">`
	* `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
* Semantisk HTML
	* `<header>`, `<main>`, `<nav>`, `<footer>`
	* `<thead>`, `<tbody>`, `<tfoot>`
* Favicon
	* `<link rel="icon" type="image/png" href="favicon.png">`
	* Favicon generators
* Länkar och bilder (`<a>` och `<img>`)

::: exercise 3.1
Skapa en ny HTML-sida och lägg till lite meta information i din HTML-fil.
:::

::: exercise 3.2
Lägg till lite innehåll på din HTML-sida och använd semantiska element för att tydliggöra vad som är vad i den utsträckning du kan.
:::

::: exercise 3.3
Lägg till till en favicon på din HTML-sida.
:::

::: exercise 3.4
Lägg till en bild på din hemsida.
:::

::: exercise 3.5
Skapa flera olika HTML-sidor och länka till dem från varandra. Försök att skapa:

* En startsida (namnges oftast `index.html`)
* En kontaktsida
* En omsida

Och vad mer du nu vill ha. Du kan t.ex. skapa en sida som heter `tabeller.html` där du tränar på att skapa tabeller i HTML.
:::





## Lektion 4. CSS-grunder
Dagens lektion innehåller följande:

* Applicera CSS på element:
	* `style="CSS"`
	* `<style>CSS</style>`
	* `<link rel="stylesheet" href="the-css-file.css">`
* Styla text:
	* `color`
	* `font-size`
	* `font-weight`
	* `font-style`
	* `font-family`
	* `text-align`
	* `text-decoration`
* CSS Selectors:
	* `*`
	* `tagName`
	* `#theId` (`id="theId"`, måste vara unikt)
	* `.theClass` (`class="theClass"`, olika element kan ha samma)
	* Kombinera selectors:
		* `selectorselector` (element som matchar båda)
		* `parentSelector selector` (alla barn, barnbarn, etc. som matchar)
* Box-modellen:
	* (margin (border (padding (content))))
	* `background-color`
	* `padding`
	* `border`
	* `border-radius`
	* `margin`


::: exercise 4.1
Styla följande HTML-kod (använd `style=""`-attributet):

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
	<li>Hermione Granger</li>
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
<h1 style="color: green;">Harry Potter-världen</h1>
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
<ul>
	<li style="text-decoration: underline;">Harry Potter</li>
	<li>Ron Weasley</li>
	<li>Hermione Granger</li>
	<li>Lord Voldemort</li>
	<li>Albus Dumbledore</li>
</ul>

<h2 style="text-decoration: underline;">Ordförklaringar</h2>
<dl>
	
	<dt style="font-weight: bold;">Mugglare</dt>
	<dd style="font-family: 'Courier New';">En person utan magiska krafter.</dd>
	
	<dt style="font-weight: bold;">Dödsätare</dt>
	<dd style="font-family: 'Courier New';">En anhängare till Lord Voldemort.</dd>
	
</dl>
```
:::




::: exercise 4.2
Nu ska vi träna på att använda CSS selektorer :)

Skriv CSS-kod i HTML-filen som stylar texten i elementen enligt den text som står i elementen.

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Övning 4.2</title>
	<style>
		
		/* Skriv din CSS-kod här. */
		
		/* (i CSS så är allt mellan slash-star
		    och start-slash en kommentar.) */
		
	</style>
</head>
<body>
	
	<h1>Alla h1-element ska ha röd text</h1>
	
	<p>Alla paragrafer ska ha blå text.</p>
	
	<ul id="books">
		<li>There and back again (alla dessa ska vara fetstilta)</li>
		<li>Ett tusen löften</li>
		<li>En gång är ingen gång</li>
	</ul>
	
	<ul id="movies">
		<li>A big mistake (alla dessa ska vara kursiva)</li>
		<li>Never again</li>
		<li>Semesterresan</li>
	</ul>
	
	<h2>Jag ska ha vanlig text</h2>
	
	<h2 class="positive">Jag ska ha grön text</h2>
	
	<p class="positive">
		Här är lite text, och <span>denna texten ska vara röd</span>,
		men denna ska vara blå.
	</p>
	
	<p>
		Här är lite text, och <span>denna texten ska vara röd och
		<span>denna text ska vara grön</span></span>, men denna
		ska vara blå.
	</p>
	
</body>
</html>
```
:::

::: exercise 4.3

Skapa en ny HTML-fil med HTML- och CSS-kod som visar en sida så som den nedan. Försök även använda semantisk HTML så korrekt som möjligt.

```html no-code result
<!DOCTYPE html>
<html lang="sv">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Min hemsida</title>
	<style>
		
		header{
			font-size: 3em;
			text-align: center;
			border-bottom: 3px solid black;
		}
		
		nav{
			border-bottom: 3px dotted black;
		}
		
		ul{
			padding: 0;
			text-align: center;
		}
		
		li{
			display: inline; 
		}
		
		main{
			background-color: white;
			padding: 1em;
			border-radius: 1em;
			margin: 1em;
		}
		
		footer{
			text-align: center;
			border-top: 3px dotted black;
			padding-top: 1em;
		}
		
	</style>
</head>
<body>
	
	<header>
		Min hemsida
	</header>
	
	<nav>
		<ul>
			<li><a href="index.html">Start</a></li>
			<li><a href="about.html">Om</a></li>
			<li><a href="contact.html">Kontakt</a></li>
		</ul>
	</nav>
	
	<main>
		<h1>Välkommen!</h1>
		<p>Välkommen till min hemsida! Jag hoppas du ska trivas här :)</p>
	</main>
	
	<footer>
		Copyright Mitt Namn 2025
	</footer>
	
</body>
</html>
```

När du fått detta att fungera, försök då att lägga till fler HTML-sidor med samma layout-kod men annat huvudinnehåll. Du borde kunna återanvända CSS-koden för layouten på alla olika HTML-sidor (använd en extern CSS-fil).

:::

::: exercise 4.4
Läs på om olika CSS-egenskaper på [W3Schools](https://www.w3schools.com/css/).
:::




## Lektion 5. Repetition
* Lösning på Övning 4.3
* Öva på att använda HTML och CSS




## Lektion 6. CSS Grid
* Repetitionsövning
* CSS Grid Intro
* Övningar

::: exercise 6.1
Repetitionsövning.

Försök skriva HTML- och CSS-kod som visar en sida som ser ut så här:

```html result no-code
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ett brev</title>
	<style>
		
		section p{
			background-color: white;
			margin: 5px 2em;
			padding: 1em;
			color: black;
		}
		
		.first{
			border-top-left-radius: 1.5em;
			border-top-right-radius: 1.5em;
		}
		
		.last{
			border-bottom-left-radius: 1.5em;
			border-bottom-right-radius: 1.5em;
		}
		
	</style>
</head>
<body>
	
	<p>Här är ett brev jag har skrivit:</p>
	
	<section>
		
		<p class="first">Kära Alice,</p>
		
		<p>Hoppas allt är bra med dig! Jag tänkte skriva och berätta om min senaste resa till Göteborg. Staden var fantastisk, och jag hann besöka både museer och mysiga kaféer.</p>
		
		<p>Jag ser fram emot att träffas snart och berätta mer. Hör av dig när du har tid!</p>
		
		<p class="last">Hälsningar Kurt</p>
		
	</section>
	
	<p>Fint, va?</p>
	
</body>
</html>
```
:::

::: exercise 6.2
Läs på lite om grunderna i CSS Grid. Det finns flera olika sidor som lär ut det på olika sätt:

* [grid.malven.co](https://grid.malven.co/)
* [Grid Garden](https://cssgridgarden.com)
* [Learn CSS Grid](https://learncssgrid.com/)

Använd den/de sidor som du föredrar.
:::

::: exercise 6.3
Försök att återskapa följande layout i CSS Grid:

```html result no-code
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Grid Layout</title>
	<style>
		
		body{
			height: 200px;
		}
		
		.grid{
			display: grid;
			border: 1px solid black;
			resize: both;
			overflow: scroll;
		}
		
		.grid > div:nth-child(1){
			background-color: yellow;
		}
		
		.grid > div:nth-child(2){
			background-color: lime;
		}
		
		.grid > div:nth-child(3){
			background-color: pink;
		}
		
		.grid > div:nth-child(4){
			background-color: teal;
		}
		
		.grid > div:nth-child(5){
			background-color: aqua;
		}
		
		.grid > div:nth-child(6){
			background-color: orange;
		}
		
		.grid > div:nth-child(7){
			background-color: brown;
		}
		
	</style>
</head>
<body>
	
	<div class="grid" style="grid-template-columns: 1fr 1fr 2fr;">
		
		<div>
			Jag är en fjärdedel av bredden.
		</div>
		
		<div>
			Jag är en fjärdedel av bredden.
		</div>
		
		<div>
			Jag är halva bredden.
		</div>
		
	</div>
	
</body>
</html>
```
:::

::: exercise 6.4
Försök att återskapa följande layout i CSS Grid:

```html result no-code
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Grid Layout</title>
	<style>
		
		body{
			height: 200px;
		}
		
		.grid{
			display: grid;
			border: 1px solid black;
			resize: both;
			overflow: scroll;
		}
		
		.grid > div:nth-child(1){
			background-color: yellow;
		}
		
		.grid > div:nth-child(2){
			background-color: lime;
		}
		
		.grid > div:nth-child(3){
			background-color: pink;
		}
		
		.grid > div:nth-child(4){
			background-color: teal;
		}
		
		.grid > div:nth-child(5){
			background-color: aqua;
		}
		
		.grid > div:nth-child(6){
			background-color: orange;
		}
		
		.grid > div:nth-child(7){
			background-color: brown;
		}
		
	</style>
</head>
<body>
	
	<div class="grid" style="grid-template-columns: 150px 1fr; grid-template-rows: auto auto auto;">
		
		<div style="grid-column: 1 / span 2;">
			Jag är headern.
		</div>
		
		<div>
			Jag är nav (150px bred).
		</div>
		
		<div>
			Jag är main.
		</div>
		
		<div style="grid-column: 1 / span 2;">
			Jag är footer.
		</div>
		
	</div>
	
</body>
</html>
```
:::

::: exercise 6.5
Försök att återskapa följande layout i CSS Grid:

```html result no-code
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Grid Layout</title>
	<style>
		
		body{
			height: 300px;
		}
		
		.grid{
			display: grid;
			resize: both;
			overflow: scroll;
		}
		
		.grid > div:nth-child(1){
			background-color: yellow;
		}
		
		.grid div{
			padding: 10px;
			border-radius: 14px;
		}
		
		.grid > div:nth-child(2){
			background-color: lime;
		}
		
		.grid > div:nth-child(3){
			background-color: pink;
		}
		
		.grid > div:nth-child(4){
			background-color: teal;
		}
		
		.grid > div:nth-child(5){
			background-color: aqua;
		}
		
		.grid > div:nth-child(6){
			background-color: orange;
		}
		
		.grid > div:nth-child(7){
			background-color: brown;
		}
		
	</style>
</head>
<body>
	
	<div class="grid" style="grid-template-columns: 150px 1fr 150px; grid-template-rows: auto auto auto; gap: 10px; padding: 5px;">
		
		<div style="grid-row: 1; grid-column: 1 / span 3;">
			Jag är headern.
		</div>
		
		<div style="grid-row: 2;">
			Jag är nav (150px bred).
		</div>
		
		<div style="grid-row: 2;">
			Jag är main.
		</div>
		
		<div style="grid-row: 2 / span 2;">
			Jag är en sidebar
		</div>
		
		<div style="grid-column: 1 / span 2;">
			Jag är footer.
		</div>
		
	</div>
	
</body>
</html>
```
:::

::: exercise 6.6
Försök att återskapa följande månadsvy i HTML och CSS Grid:

```html result no-code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calendar</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      padding: 20px;
      background-color: #f5f5f5;
    }

    .calendar {
      display: grid;
      grid-template-columns: repeat(7, 60px);
      grid-auto-rows: 60px;
      gap: 5px;
      background-color: #fff;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .calendar .day-name {
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #007bff;
      color: #fff;
      border-radius: 5px;
    }

    .calendar .day {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e9ecef;
      border-radius: 5px;
    }

    .calendar .empty {
      background-color: transparent;
    }
  </style>
</head>
<body>

  <div class="calendar">
    <!-- Day names -->
    <div class="day-name">Mån</div>
    <div class="day-name">Tis</div>
    <div class="day-name">Ons</div>
    <div class="day-name">Tor</div>
    <div class="day-name">Fre</div>
    <div class="day-name">Lör</div>
    <div class="day-name">Sön</div>

    <!-- Empty days before the start of the month -->
    <div class="empty"></div>
    <div class="empty"></div>
    <div class="empty"></div>
    <div class="empty"></div>

    <!-- Days of the month (1-30 for example) -->
    <div class="day">1</div>
    <div class="day">2</div>
    <div class="day">3</div>
    <div class="day">4</div>
    <div class="day">5</div>
    <div class="day">6</div>
    <div class="day">7</div>
    <div class="day">8</div>
    <div class="day">9</div>
    <div class="day">10</div>
    <div class="day">11</div>
    <div class="day">12</div>
    <div class="day">13</div>
    <div class="day">14</div>
    <div class="day">15</div>
    <div class="day">16</div>
    <div class="day">17</div>
    <div class="day">18</div>
    <div class="day">19</div>
    <div class="day">20</div>
    <div class="day">21</div>
    <div class="day">22</div>
    <div class="day">23</div>
    <div class="day">24</div>
    <div class="day">25</div>
    <div class="day">26</div>
    <div class="day">27</div>
    <div class="day">28</div>
    <div class="day">29</div>
    <div class="day">30</div>
  </div>

</body>
</html>
```
:::

::: exercise 6.7
Skapa en egen sida med en layout (välj själv vilken) som du implementerar med CSS Grid. Försök att använda HTML semantiskt korrekt, och gör sidan så fin du bara kan.
:::




## Lektion 7. CSS Grid
* Repetitionsövning
* CSS Grid-repetition
* `px` VS `em` VS `rem` VS `%` VS `fr`
* Övningar

::: exercise 7.1
Repetitionsövning.

Försök skriva HTML- och CSS-kod som visar en sida som ser ut som den nedan. Du behöver inte använda CSS-grid.

```html result no-code
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>En chatt</title>
	<style>
		
		.messages{
			border-radius: 1em;
			background-color: pink;
			padding: 1em;
		}
		
		.message{
			margin: 1em 0;
			border-radius: 1em;
			padding: 1em;
		}
		
		.received{
			background-color: gray;
			margin-right: 10em;
		}
		
		.sent{
			background-color: aqua;
			margin-left: 10em;
			text-align: right;
		}
		
		.name{
			font-weight: bold;
			text-decoration: underline;
		}
		
		.text{
			margin: 0.5em 0;
		}
		
		.time{
			font-style: italic;
		}
		
		.received .time{
			text-align: right;
		}
		
		.sent .time{
			text-align: left;
		}
		
	</style>
</head>
<body>
	
	<div class="messages">
		
		<div class="message received">
			<div class="name">Alice</div>
			<div class="text">Hej, hur mår du?</div>
			<div class="time">Mottaget 13:24</div>
		</div>
		
		<div class="message sent">
			<div class="name">Bob</div>
			<div class="text">Hallå! Jo, tack, jag mår bra.</div>
			<div class="time">Skickat 13:24</div>
		</div>
		
		<div class="message sent">
			<div class="name">Bob</div>
			<div class="text">Hur mår du?</div>
			<div class="time">Skickat 13:25</div>
		</div>
		
		<div class="message received">
			<div class="name">Alice</div>
			<div class="text">Jo, jag mår också bra. Vill du hänga med och spela krocket sen? Vi är ett gäng som ska göra det, men vi behöver en till.</div>
			<div class="time">Mottaget 13:25</div>
		</div>
		
		<div class="message sent">
			<div class="name">Bob</div>
			<div class="text">När?</div>
			<div class="time">Skickat 13:25</div>
		</div>
		
		<div class="message received">
			<div class="name">Alice</div>
			<div class="text">Typ klockan 3.</div>
			<div class="time">Mottaget 13:26</div>
		</div>
		
		<div class="message sent">
			<div class="name">Bob</div>
			<div class="text">Gärna, vi ses då! Jag tar med mig korv och korvbröd, så kan vi grilla lite också.</div>
			<div class="time">Skickat 13:26</div>
		</div>
		
	</div>
	
</body>
</html>
```
:::

::: exercise 7.2
Om du tycker det är roligt så får du gärna träna på att använda CSS Grid genom spelet [Grid Attack](https://codingfantasy.com/games/css-grid-attack).
:::

::: exercise 7.3
Försök att skapa en webbsida som har en layout i stil med bilden nedan.

![En bild på en layout.](https://miro.medium.com/0*og90_m1gsg9iOY7i.png)
:::

::: exercise 7.4
Försök att skapa en webbsida som har en layout i stil med bilden nedan.

![En bild på en layout.](https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8d374c1e-228a-47e8-be5b-10fa1f4d40c8/mrh-css-grid-fig-01-large-opt.png)
:::


::: exercise 7.5
Försök att skriva HTML och CSS som återskapar sidan [vuepress.vuejs.org](https://vuepress.vuejs.org/) (ni behöver inte bry er om skrollningseffekter och element som visas/döljs/ändras när man för musen över dem).
:::