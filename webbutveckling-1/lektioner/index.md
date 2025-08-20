# Webbutveckling 1 - Lektioner



## Snabblänkar
* [W3Schools HTML Tutorials](https://www.w3schools.com/html/)
* [W3Schools HTML Elements Reference](https://www.w3schools.com/tags/)
* [W3Schools CSS Tutorials](https://www.w3schools.com/css/)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php)



## Lektion 1
::: exercise 1.1
För respektive fråga nedan, besvara dem med information från åtminstone en pålitlig källa på webben. Använd inte någon AI/chattmodell/Wikipedia, och var noga med att ange sidkällan (URL).

1. Vad är det för skillnad på webben och Internet?
2. Namnge tre olika protokoll man kan använda på Internet, och förklara vad dem används till.
3. Hur ser IP4- respektive IP6-adresser ut?
4. Vad är de tre språken HTML, CSS och JS förkortningar på? Och vad används respektive språk till i webbläsaren?
:::

::: exercise 1.2
Skapa en ny `.html`-fil i Visual Studio Code och skriv HTML-kod i den som visar en sida som ser ut som följande:

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

::: exercise 1.4
Nu får du träna på att göra fel! 😃

Skapa en ny `.html`-fil i Visual Studio Code och skriv HTML-kod i den som visar tecknen `å`, `ä` och `ö` fel. Du ska alltså i din text editor (t.ex. Visual Studio Code) spara filen i ett teckenformat, och i HTML-koden ska du skriva att den har sparats i ett annat teckenformat. Använd t.ex. teckenformaten `UTF-8` och `ISO-8859-1`.
:::

::: exercise 1.5
Validera HTML-koden som du skapade i Övning 1.2 och 1.3 med hjälp av [Markup Validation Service](https://validator.w3.org/). Om några fel finns, rätta till dem.

Testa även att avsiktligt skriva några fel i din kod (du kan t.ex. nästla taggar fel, ta bort en start eller en sluttagg, etc.) och verifiera att validatorn klagar på din kod.
:::

## Kommande

* Webben
	* Internet
	* Webben/HTTP (server, klient, http, html)
		* Webpage VS Website VS Web Application
		* Olika klienter (webbläsare, spindlar, etc.)
		* [Vem uppfann egentligen Internet?](https://internetstiftelsen.se/podd/dumma-fragor-om-internet/vem-uppfann-egentligen-internet/)
	*	Exempel på protokoll utöver HTTP:
		* [File Protocol](https://kinsta.com/se/kunskapsbas/vad-ar-ftp/)
		* [DNS](https://internetstiftelsen.se/domaner/domannamn-vad-ar-det/om-domannamnssystemet-dns/)
	* Webbspråk/Klientspråk
		* HTML (skapa GUI-element)
		* CSS (styla GUI-element)
		* JS (beräkningar, agera vid händelser (så som knapptryckningar), ändra GUI-element)
* [VS Code](https://code.visualstudio.com/)
* [HTML5 Specifikation](https://html.spec.whatwg.org/multipage/)
	* [W3Schools HTML Elements Reference](https://www.w3schools.com/tags/)
	* [Mozilla HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
* [W3Schools' HTML Tutorials](https://www.w3schools.com/html/)
* HTML
	* Grundläggande element (doctype, `<html>`, `<head>`, `<body>`, `<h1>`, `<p>`)
	* Indentering
	* Kommentarer
	* Attribut
	* `<time>`, `<strong>`, `<em>`, `<abbr>`, `<h2>`, `<h3>`, `<kbd>`, `<del>`, `<sup>`, `<sub>`, `<q>`, `<cite>`
	* Block-element VS Inline-element
	* Nästlade element
	* `<time>`, `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`
	* Teckenkodning, `<meta>`
	* Validering av HTML-kod
	* Tabeller (`<table>`, `border` attribut, `<tr>`, `<td>`, `<th>`, `<thead>`, `<tbody>`, `<tfoot>`, `<caption>`, `colspan` attribut, `rowspan` attribut)
	* Semantic layout (`<main>`, `<header>`, `<footer>`, `<aside>`)
	* `<a>`
	* `<img>`
	* Favicon
* Mappstruktur, relativa sökvägar
* CSS
* Etc.