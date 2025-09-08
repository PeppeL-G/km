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



## Lektion 3. Webbapp (Node.js)
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

Testa att skicka några request till din webbapp och verifiera att den skickar tillbaka ett response. Om du gör ändringar i koden så behöver du stoppa och sedan starta din Node.js-app igen för att ändringarna ska gälla.

:::

::: exercise 3.4

Ändra koden så att du skickar tillbaka en HTML-sida som webbläsaren visar som en HTML-sida, och inte som text. Du ska alltså skicka tillbaka HTML-kod och se till att `Content-Type`-headern har rätt värde i responsen.

:::




## Lektion 4. Webbapp (Node.js)
Vi fortsätter med grunderna i hur en webbapplikation fungerar. Se till att du är klar med övningarna från Lektion 3 innan du börjar med dessa övningar.

::: exercise 4.1

Läs ut lite information från den inkommande requesten, så som `request.method` och `request.url`. Lägg sedan till några villkorssatser som skickar tillbaka HTML-kod för några olika sidor som du själv väljer att ha. Du kan t.ex. ha:

* En sida för GET request till `/` (startsidan)
* En sida för GET request till `/about`
* En sida för GET request till `/contact`
* Etc.

I HTML-koden du skickar tillbaka, se till att även inludera länkar (`<a>`-element) till de andra sidorna. På detta vis borde användaren kunna klicka på länkarna för att ladda in de andra sidorna istället för att manuellt ändra URL:en i adressfältet i webbläsaren.

:::

::: exercise 4.2

Om du tar emot en request för en sida som inte finns, skicka tillbaka statuskoden `404` tillsammans med HTML-kod som förklarar att den efterfrågade resursen inte finns.

:::

::: exercise 4.3

Istället för att skriva HTML-koden direkt i strängar i JS-filen, skriv HTML-koden i separata `.html`-filer (i samma mapp), och använd funktionen `readFileSync()` från `node:fs`-modulen för att läsa in HTML-koden som en sträng, och skicka den sedan till `response.write()`.

```js
import fs from 'node:fs'

const htmlCodeForAboutPage = fs.readFileSync(`./about.html`, `utf8`)
```

:::

::: exercise 4.4

Använd `try{ ... }catch(error){ ... }` för att hantera fel (exceptions) som kan uppstå när du anropar `readFileSync()`. Om HTML-filen som ska öppnas t.ex. inte finns (om du t.ex. råkat ta bort den av misstag) så kommer `readFileSync()` kasta ett exception. Fånga det med `try{ ... }catch(error){ ... }`, och skicka vid sådana fel tillbaka statuskoden `500` med HTML-kod för att förklara för användaren att ett oväntat fel inträffade, och att requesten inte kunde utföras.

:::

::: exercise 4.5

Skapa en `.css`-fil med lite CSS-kod som stylar dina sidor. Lägg sedan till `<link>`-elementet i din HTML-kod för att få webbläsaren att skicka en GET request för att hämta innehållet i CSS-filen. Ändra din JS-kod så att du skickar tillbaka innehållet i CSS-filen när du tar emot en sådan request. Se även till att du sätter `Content-Type`-headern till värdet `text/css`, så webbläsaren kan vara säker på att den får tillbaka CSS-kod.

:::



## Lektion 5. Catch-up
Vi fortsätter att arbeta med övningarna ifrån Lektion 3 och Lektion 4.

::: exercise 5.1
En student som är klar med övningarna ifrån Lektion 3 och Lektion 4 presenterar sin lösning för öriga klassen och förklarar hur det fungerar.
:::

::: exercise 5.2
De elever som är klara med Lektioner 3 och Lektion 4 kan få försöka börja arbeta med Express-ramverket på egen hand. Vi kommer gå igenom det tillsammans nästa lektion.

Tutorialn [Node.js Express.js](https://www.w3schools.com/nodejs/nodejs_express.asp) kan vara en bra startpunkt. Försök i första hand att läsa och förstå, så skriver vi kod nästa lektion. Men om du vill så får du förståss gärna försöka skriva kod själv redan nu.
:::


<!--


## Lektion 6 Webbapp (Express)
::: exercise 6.1

En frivillig elev presenterar sin webbapp i Node.js och förklarar hur den fungerar.

:::

Att implementera en webapp direkt i Node.js fungerar, men genom att använda ett ramverk som Express så får vi bättre stöd för att:

* Dynamiskt generera HTML-kod vi skickar tillbaka (rendering engine).
* Återanvända funktionalitet i olika HTTP-requests (middlewares).
* Enkelt lägga till funktionalitet som de flesta webbappar använder (skicka tillbaka statiska filer, hantera sessioner, använda cookies, etc.).

Så låt oss skapa en ny hemsida som använder sig av Express:

1. Skapa en ny mapp för din hemsida, t.ex. `min-hemsida`.
2. Öppna den mappen i terminalen/Windows Powershell och kör kommandot `npm install express` (`npm`-kommandot fick du på datorn när du installerade Node.js).
3. I den skapade `package.json`-filen, lägg till `"type": "module"` efter den första måsvingen (på egen rad). Detta gör så att vi kan använda den officiella `import`-syntaxen istället för `require()` för att importa funktionalitet från andra JS-filer.
4. Skapa `min-hemsida/app.js` med följande innehåll:
```js
import express from 'express'

const app = express()

app.get(`/`, function(request, response){
	response.send(`Hello, World!`)
})

app.get(`/about`, function(request, response){
	response.send(`About page!`)
})

app.listen(3000)
```
5. Kör `min-hemsida/app.js` i Node.js.
6. Öppna `http://localhost:3000` i en webbläsaren.

---

Låt oss lägga till en renderingsmotor, så vi enklare kan generera och skicka tillbaka dynamisk HTML-kod.

1. Öppna `min-hemsida` i terminalen/Windows Powershell och kör kommandot `npm install express-handlebars`.
2. Ändra `min-hemsida/app.js`:

```js
// I toppen, lägg till:
import { engine } from 'express-handlebars'

// ...

// Efter att du skapat app-variabeln, lägg till:
app.engine(`hbs`, engine({
	defaultLayout: null,
}))

// Och använd sedan response.render():
app.get(`/`, function(request, response){
	
	// Filen `min-hemsida/views/start.hbs` är en
	// fil du kommer skapa snart.
	response.render(`start.hbs`)
	
})
```
3. Skapa filen `min-hemsida/views/start.hbs`, och skriv lite HTML-kod i den:
```hbs
<h1>Startsidan!</h1>
<p>Det här är startsidan...</p>
```
4. Gör mostsvarande för about-sidan.

::: exercise 6.2

Verifiera att du har två olika sidor som fungerar:

* En GET request för `/` ska skicka tillbaka HTML-koden i `start.hbs`-filen.
* En GET request för `/about` (eller vad du nu väljer att använda) ska skicka tillbaka HTML-koden i `about.hbs`-filen (eller vad du nu väljer att döpa den till).

:::

Olika sidor på en hemsida brukar använda samma layout. Istället för att hårdkoda den i alla `.hbs`-filer så stödjer Express att man kan skriva den på ett ställe: i en extern `.hbs`-fil. Låt oss lägga till det.

1. Ändra `min-hemsida/app.js` så vi konfiguerar Handlebars enligt följande:
```js
app.engine(`hbs`, engine({
	defaultLayout: `main.hbs`, // Ändra från null till `main.hbs`.
}))
```
2. Skapa filen `min-hemsida/views/layouts/main.hbs`:
```hbs
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Min Hemsida</title>
</head>
<body>
	
	<ul>
		<li><a href="/">Start</a></li>
		<li><a href="/about">Om</a></li>
	</ul>
	
	{{{body}}}
	
</body>
</html>
```

Vi har nu konfigurerat Handlebars till att alltid använda sig av layouten i `main.hbs`. När du kör JS-koden ``response.render(`start.hbs`)`` så kommer den HTML-koden att sättas in där `{{{body}}}` står i `main.hbs`-filen, och resultatet efter det kommer sedan skickas tillbaka i responsen.

::: exercise 6.3

Skapa 3 olika sidor användaren kan gå emellan (med länkar, `<a>`-elementet):

* URL:en `/` ska mappas till startsidan (ska rendera `start.hbs`-filen).
* URL:en `/about` ska mappas till about-sidan (ska rendera `about.hbs`-filen).
* URL:en `/contact-us` ska mappas till kontaktsidan (ska rendera `contact-us.hbs`-filen).

:::

-->