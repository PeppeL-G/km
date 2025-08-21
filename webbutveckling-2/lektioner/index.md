# Webbutveckling 2 - Lektioner



## Snabblänkar
* [W3Schools HTML Tutorials](https://www.w3schools.com/html/)
* [W3Schools HTML Elements Reference](https://www.w3schools.com/tags/)
* [W3Schools CSS Tutorials](https://www.w3schools.com/css/)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php)



## Lektion 1
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
