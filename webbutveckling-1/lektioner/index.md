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



## Lektion 2, HTML-grunder
Dagen lektion innehåller följande:

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