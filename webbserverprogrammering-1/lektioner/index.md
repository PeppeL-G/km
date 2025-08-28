# Webbserverprogrammering 1 - Lektioner



## Snabblänkar
* [W3Schools HTML Tutorials](https://www.w3schools.com/html/)
* [W3Schools HTML Elements Reference](https://www.w3schools.com/tags/)
* [W3Schools CSS Tutorials](https://www.w3schools.com/css/)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php)



## Lektion 1. HTML-repetition
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




## Lektion 2. JS-grunder
* Samma JS-grunder som i [Webbuteckling 2](../../webbutveckling-2/lektioner/).



## Lektion 3. Webbapp-grunder
* [Node.js](https://nodejs.org/en/download)
* npm
* HTTP
* `node:http`-modulen

::: exercise 3.1

Skapa ett nytt **private** repository på GitHub, ge `PeppeL-G` tillgång till det, klona det till din egen dator, och spara sedan allt ditt framtida arbete i den här kursen där. Skapa en ny commit och pusha den till GitHub vid slutet av varje lektion.

:::

::: exercise 3.2

Skapa ett nytt projekt för att testa köra en Node.js app:

1. Skapa en ny mapp med namnet `hello-world`.
2. Öppna mappen i Visual Studio Code.
3. I mappen, skapa:
	* `package.json` innehållande `{"type": "module"}`
	* `main.js` innehållande:
	```js
	console.log(`Hello, world!`)
	```
4. Starta appen med Node.js ifrån Visual Studio Code-fönstret (fråga eventuellt om detta steg).

Ändra sedan koden i `main.js`-filen så att den skriver ut följande när man kör programmet (använd en loop):

```
Hello, world 1!
Hello, world 2!
Hello, world 3!
Hello, world 4!
```

Den som vill ha en mer avancerad uppgift att lösa kan lösa följande uppgift (du kan behöva ta reda på några funktionaliteter i JS du behöver använda själv):

```js
const blogposts = [{
	id: 1,
	title: `Trip to France`,
	content: `France is an amazing country, I loved being there.`,
}, {
	id: 2,
	title: `Exploring Norway`,
	content: `Norway is a very facinating country.`,
}, {
	id: 3,
	title: `Home, Sweet Home`,
	content: `Today I explored my own city, Jönköping, a little bit.`,
}]

// Skapa en funktion som utifrån arrayen ovan returnerar
// ett blogg-objekt med ett specifikt id.
const norwayBlogpost = getBlogpostById(blogposts, 2)

// Skapa en funktion som utifrån arrayen ovan returnerar en ny
// array med alla blogg-inlägg som innehåller ett viss sökord.
const norwayBlogpost = getBlogpostsContaining(blogposts, `is`) // Första och andra blogginlägget
```

:::

::: exercise 3.3

Skapa ett nytt projekt för att implementera en Node.js webbapp:

1. Skapa en ny mapp.
2. Öppna mappen i Visual Studio Code.
3. I mappen, skapa:
	* `package.json` innehållande `{"type": "module"}`
	* `main.js` innehållande:
	```js
	import http from 'node:http'
	
	const webApp = http.createServer(function(request, response){
		
		response.statusCode = 200
		
		response.setHeader(`Content-Type`, `text/plain`)
		
		response.write(`Hello!`)
		
		response.end()
		
	})
	
	webApp.listen(3000)
	```
4. Starta appen med Node.js ifrån Visual Studio Code-fönstret
5. Öppna localhost:3000 i en webbläsare.

Testa att skicka några request till din webbapp och verifiera att den skickar tillbaka ett response.

:::

::: exercise 3.4

Ändra koden så att du skickar tillbaka en HTML-sida som webbläsaren visar som en HTML-sida, och inte som text. Du ska alltså skicka tillbaka HTML-kod och se till att `Content-Type`-headern har rätt värde i responsen.

:::

::: exercise 3.5

Läs ut lite information från den inkommande requesten, så som `request.method` och `request.url`. Lägg sedan till några villkorssatser som skickar tillbaka HTML-kod för några olika sidor som du själv väljer att ha. Du kan t.ex. ha:

* En sida för GET request till `/` (startsidan)
* En sida för GET request till `/about`
* En sida för GET request till `/contact`
* Etc.

:::

::: exercise 3.6

Läs ut lite information från den inkommande requesten, så som `request.method` och `request.url`. Lägg sedan till några villkorssatser som skickar tillbaka HTML-kod för några olika sidor som du själv väljer att ha. Du kan t.ex. ha:

* En sida för GET request till `/` (startsidan)
* En sida för GET request till `/about`
* En sida för GET request till `/contact`
* Etc.

:::

::: exercise 3.7

Om du tar emot en request för en sida som inte finns, skicka tillbaka statuskoden `404` tillsammans med HTML-kod som förklarar att den efterfrågade resursen inte finns.

:::

::: exercise 3.8

Istället för att skriva HTML-koden direkt i strängar i JS-filen, skriv HTML-koden i sina egna `.html`-filer (i samma mapp), och använd funktionen `readFileSync()` från `node:fs`-modulen för att läsa in HTML-koden som en sträng, och skicka den sedan till `response.write()`.

```js
import fs from 'node:fs'

const htmlCodeForAboutPage = fs.readFileSync(`./about.html`, `utf8`)
```

:::

::: exercise 3.9

Använd `try{ ... }catch(error){ ... }` för att hantera fel (exceptions) som kan uppstå när du anropar `readFileSync()`. Om filen som ska öppnas t.ex. inte finns (om du t.ex. råkat ta bort den av misstag) så kommer `readFileSync()` kasta ett exception. Fånga det med `try{ ... }catch(error){ ... }`, och skicka vid sådana fel tillbaka statuskoden `500` med HTML-kod som förklarar för användaren att ett oväntat fel inträffade, och att requesten inte kunde utföras.

:::

::: exercise 3.10

Skapa en `.css`-fil med lite CSS-kod som stylar dina sidor. Lägg sedan till `<link>`-elementet i din HTML-kod för att få webbläsaren att skicka en GET request för att hämta innehållet i CSS-filen. Ändra din JS-kod så att du skickar tillbaka innehållet i CSS-filen när du tar emot en sådan request.

:::