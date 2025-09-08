# Tillämpad Programmering 1 - Lektioner

## Lektion 1. Intro & BagaWork-grunder
* Kursintro
* Diskussion om vad vi ska tillämpa programmering på (BagaWork?)
* Bagawork
	* `Text.text().backgroundColor().left().right().top().bottom()`
	* `Button.text().page()`
	* `Space`
	* `Rows.children()`




## Lektion 2. BagaWork-layout
* Repetition
* GUI består av rader och kolumner
* `Columns`
* Övningar




## Lektion 3. En bok-app
Se klassuppgiften `Bok-app` på Google Classroom.




## Lektion 4. Variabler & Klicklyssnare
* App-variabler
* Page-variabler
* App-metoder
* Page-metoder
* `Button.onClick()`

::: exercise 4.1
Skapa en sida som kommer ihåg ett namn i en Page-variabel. Namnet ska till en början vara `Alice`. Sidan ska visa namnet i en `Text`-komponent. Sidan ska även innehålla tre knappar, och när användaren klickar på en knapp så ska namnet i Page-variabeln ändras till `Bob`, `Claire` och `David` för respektive knapp.
:::

::: exercise 4.2
Skapa en ny app som kommer ihåg en färg i en App-variabel. Lägg sedan till 3 olika sidor i appen med valfritt innehåll. Färgen i app-variabeln ska användas som bakgrundfärg på alla tre sidor.
:::

::: exercise 4.3
Lägg till en Settings-sida. På den sidan ska användaren få välja vilken bakgrundsfärg appen ska använda. Användaren ska kunna välja mellan färgerna `red`, `blue`, `green` och `yellow` genom att klicka på respektive färgs knapp. När användaren klickar på en av knapparna så ska du alltså ändra värde i App-variabeln som du skapade i Övning 4.2.
:::

::: exercise 4.4
Lägg till en till App-variabel som används som textfärgen i appen. På alla sidors rot-komponenter kan du lägga till ett anrop till följande konfigurationsmetod:

```js
.font(Font.color(`red`))
```

T.ex.:

```js
class MyPage extends Page{
	
	createGui(){
		return Rows.font(Font.color(`red`)).children(
			// ...
		)
	}
	
}
```

För att göra all text på den sidan röd. Ändra `` `red` `` till din App-variabel.
:::

::: exercise 4.5
Skapa en app som fungerar som ett äventyrsspel där varje Page är ett rum i en grotta spelaren kan vara i. Genom att trycka på knappar så ska spelaren kunna gå till andra rum i grottan. I några av rummen ska det finnas kistor som spelaren kan öppna genom att trycka på en knapp. Då ska spelaren plocka upp det som ligger i kistan och bära med sig det. Använd App-variabler (tomma strängar till en början) för att hålla koll på vad spelaren har plockat på sig. Använd t.ex.:

* En App-variabel för att hålla koll på ifall spelaren har plockat upp en krona.
* En App-variabel för att hålla koll på ifall spelaren har plockat upp en guldstav.
* Etc.

När spelaren har plockat upp alla saker så ska spelaren ta sig tillbaka till startrummet, så det rummet fungerar även som slutrum. Här ska du på skärmen visa alla de saker som spelaren har plockat upp, och (vi låtsas att) spelet slutar när spelaren kommer tilllbaka hit och har plockat upp alla saker.
:::


<!--

## Lektion 5. Nummer & Matematik
* Skapa nummer
* `+`, `-`, `*`, `/`


-->