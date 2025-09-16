# Artificiell Intelligens 1 - Lektioner

## Lektion 1. Intro + AI definition
* Kursintro
	* Lagar och regler kring AI
	* Etik kring AI
	* Hur man kan använda AI för att lösa problem
	* Vilka olika AI-modeller som finns
	* Utvärdera hur bra olika AI-modeller är
	* Skapa AI-modeller
	* `Min AI-rapport`-dokumentet
* Quiz: AI eller ej?
	* Robotgräsklippare
	* Robotdammsugare
	* Självkörande bilar
	* ChatGPT
	* Lampor med av/påknapp
	* Lampor som styrs av tiden
	* Lampor som styrs av soluppgång/solnedgång
	* Lampor med rörelsesensorer
	* Lampor med av/påknapp, men som också går på/av när den tror användaren vill det baserat på när den varit på-/avslagen tidigare dagar
* Diskussion kring intelligenta bottar i spel
* Alan Turing, Turing-testet

::: exercise 1.1

På hemsidorna [humanornot.so](https://humanornot.so) och [turingtest.live](https://turingtest.live/) kan du en-till-en-chatta med en annan, men du vet inte i förväg ifall den andra är en människa eller en AI!

Din uppgift är att testa att chatta några gånger, och sedan gissa om du chattade med en människa eller en AI. ~~Dokumentera dina chattar, gissningar, och vad det rätta svaret var i din `Min AI-rapport`. Dokumentera:~~

* ~~Frågeställning ("vad vi försöker testa"/"frågan vi försöker besvara")~~
* ~~Metod (hur vi går tillväga för att samla in data vi kan använda för att besvara frågan)~~
* ~~Empiri (insamlad data)~~
* ~~Resultat (besvara frågeställningen utifrån den insamlade data)~~
* ~~Diskussion (dela med dig av dina egna åsikter och tankar kring hela arbetet)~~

Vi skippar dokumentering av det första experimentet.

:::




## Lektion 2. Turing-testet
::: exercise 2.1

På Google Drive, skapa ett nytt Google Dokument, som kommer bli din `Min AI-rapport`. Skapa ett nytt kapitel i den med rubiken `Turing-testet`.

Den här övningen går ut på att se ifall människor alltid kan avgöra vad som skrivs av en chatmodell, och vad som skrivs av en människa. Så lämplig frågeställning att skriva i din AI-rapport är något i stil med:

> Kan människor se skillnad på chattmeddelanden från en modern chatmodell och en människa?

Metoden vi kommer använda är något i stil med:

1. Du väljer vilken chatmodell du vill använda (t.ex. ChatGPT, Google Gemini, Claude, etc.)
2. Försök komma på instruktioner du kan ge till chatmodellen innan du börjar chatta med den som gör den lite mer mänsklig. Det kan t.ex. vara:

> Du kommer vara med i ett experiment där du chattar med en människa, och vi vill att du ska bete dig så mänskligt som möjligt. Du ska låtsas vara en riktig människa. Svara gärna med färre än 50 ord, och det är OK om du gör stavfel ibland då och då, och dylikt. Du behöver inte alltid ställa frågor tillbaka.

3. Testa gärna att chatta med några olika instruktioner som du gett modellen, så du lyckas få den att svara med så mänskliga meddelanden som möjligt.
4. Välj ut 10 meddelanden i sträck från en av dina chattkonversationer (5 meddelanden från dig, och 5 meddelanden från chattmodellen) som vi ska testa och se vilka som är skrivna av en människa, och vilka som är skrivna av chattmodellen.
5. Visa de 10 meddelandena för övriga klassen och låt dem säga vilken dem tror är du.

I din metod, visa även vilka 10 meddelanden du använder, och vem som skrev vilka meddelanden.

Som empiri redovisar du:

* Hur många av dina klasskamrater som gissade rätt
* Hur många av dina klasskamrater som gissade fel

Som resultat besvarar du frågeställningen med hjälp av din empiri.

I diskussion får du reflektera över ditt arbete. Var metoden ett bra sätt att besvara frågeställningen på? Lärde du dig något i slutet som gjorde att du skulle göra något annorlunda om du skulle göra samma arbete igen? Var det något i meddelandena som visade sig göra det uppenbart om de var skrivna av dig eller chattmodellen?

:::



## Lektion 3. Bildgenerering
Se klassuppgiften Bildgenerering på Google Classroom.




## Lektion 4. Bildgenerering 2
Se klassuppgiften Bildgenerering 2 på Google Classroom.

::: tip
De som vill kan testa att ladda ner och köra en AI-modell på sin egna dator. Ett “enkelt” alternativ är att använda [Fooocus](https://github.com/lllyasviel/Fooocus?tab=readme-ov-file#download):

1. Klicka på nedladdningslänken där.
2. Packa upp den nedladdade 7z-filen.
3. I den uppackade mappen, dubbelklicka på `run.bat`-filen.
4. När programmet har startat klart så borde en sida öppnas i webbläsaren där du kan skriva in vad för bilder du vill att den ska skapa åt dig.
:::




## Lektion 5. Google Teachable Machine
Den här lektionen kommer vi testa på maskininlärning på ett väldigt enkelt sätt med [Google Teachable Machine](https://teachablemachine.withgoogle.com/).

* Demo av hur man använder programmet.
* Övningar.
* Diskussion.

::: exercise 5.1
Skapa ett nytt [Google Teachable Machine](https://teachablemachine.withgoogle.com/train) Image Project och försök träna modellen på att känna igen åtminstone 2 olika klasser (kom själv på vad).

Att redovisa vid diskussion i slutet av lektionen:

* Vilka klasser använde du?
* Hur lätt var det för modellen att lära sig känna igen dem?
* Hur påverkade sample-storleken hur bra modellen var? Hur stor sample-storlek (hur många bilder) behövdes för att den skulle vara "tillräckligt bra"?
* Hur generaliserbar är modellen? Om du försöker använda något som liknar det som du tränade modellen på, fungerar det? Om du t.ex. försöker få den att känna igen en människa och du tränar på dig själv, har den även lärt sig att känna igen andra människor, eller känner den bara igen dig?
:::

::: exercise 5.2
Vill man träna modellen på att känna igen en röd fyrkant respektive en grön fyrkant så blir modellen väldigt bra på att känna igen dem. Men om man visar den en blå fyrkant, så predikterar modellen fortfarande antingen en grön eller röd fyrkant!

Det går att få modellen att prediktera "inte en röd/grön" fyrkant. Kan du komma på hur? Försök i så fall att lära modellen det. Be annars om hjälp.

Att diskutera vid lektionens slut:

* Hur lär man modellen att känna igen "allt annat" (som inte är det man vill träna den på att känna igen)?
* Hur mycket träning behövs för att lära modellen det här på ett bra sätt?
:::

::: exercise 5.3
En intressant fråga att ställa sig är vad modellen tittar på i bilden när den bestämmer sig för vilken klass den tillhör. När vi t.ex. tränar den på att känna igen en grön fyrkant, är det verkligen den gröna fyrkanten den har lärt sig känna igen, eller är det något annat den har lärt sig att känna igen av en slump, som t.ex. en arm som håller upp ett grönt fyrkantigt papper?

Kan du komma på ett test man kan göra för att för att testa vilket område på en bild modellen använder sig mycket av för att göra sin klassificering?
:::

::: exercise 5.4
Skapa ett nytt [Google Teachable Machine](https://teachablemachine.withgoogle.com/train) Pose Project och försök träna modellen på att känna igen åtminstone 2 olika klasser (kom själv på vad).

Att diskutera vid lektionens slut:

* Vilka klasser använde du?
* Hur bra blev modellen på att känna igen dem?
:::

::: exercise 5.5
Om du vill, testa att skapa ett nytt [Google Teachable Machine](https://teachablemachine.withgoogle.com/train) Audio Project, och utforska dess potential.
:::

::: exercise 5.6
Att träna modeller att känna igen bilder/poser är lite kul, men finns det någon praktiskt användning för detta? Försök att komma på praktiska användningsområden man skulle kunna använda de här verktygen till. Kan vi utveckla helt nya typer av appar som vi inte kunde utveckla innan vi hade de här verktygen? Kan du komma på nästa "million dollar idea"? 😀
:::





## Lektion 6. Maskinginlärning (K-nearest neighbours)
* Classification VS Regression
* Problem för AI respektive människor
* Visualisera data (scatter-plot)
* [K-Nearest Neighbours Interactive Demo](http://vision.stanford.edu/teaching/cs231n-demos/knn/)

<ShowDataset
	datasetName="ages"
/>

<br>
<br>

<ShowDataset
	datasetName="iris"
/>

::: exercise 6.1
Den här övningen går ut på att rita en scatter-plot du sedan kan använda för att klassificera okända instancer. Din scatter-plot kommer alltå fungera som din maskinlärda modell.

Ladda in datasetet iris ovan. Det är ett dataset där man ska använda den tillgängliga datan för att försöka förutsäga ifall en ny instans med känd `sepalWidth`, `sepalLength`, `petalLength` och `petalWidth` är en `setosa`, `versicolor`, eller `virginica` (alltså ett klassificeringsproblem).

Slumpa ordningen på instanserna genom att klicka på `Random` i tabellhuvudet några gånger. Rita sedan en scatter-plot med två av de numreriska attributen/kolumnerna instanserna har (bestäm själv vilka du vill använda). En scatter-plot är en tvådimensionell graf där instansernas ena attribut visas på en axel, och det andra attributet visas på den andra axeln. Rita ut åtminstone 10 av vardera klass (i bästa fall skulle man rita ut alla instancer, men det är för mycket arbete). Om du har pennor med olika färger, ge då gärna varje blomtyp en egen färg, t.ex.:

* `setosa`: röd
* `versicolor`: blå
* `virginica`: grön

Har du inte pennor med olika färger så kan du använda symboler istället, t.ex.:

* `setosa`: x
* `versicolor`: y
* `virginica`: z
:::

::: exercise 6.2
Välj sedan ut 10 instanser ur datasetet som inte är med på din scatter-plot. Klassificera dessa enligt 1-Nearest Neigbour-algoritmen. Dokumentera ditt resultat.
:::

::: exercise 6.3
Välj sedan ut 10 instanser ur datasetet som inte är med på din scatter-plot. Klassificera dessa enligt 2-Nearest Neigbours-algoritmen. Dokumentera ditt resultat.
:::

::: exercise 6.4
Välj sedan ut 10 instanser ur datasetet som inte är med på din scatter-plot. Klassificera dessa enligt 3-Nearest Neigbours-algoritmen. Dokumentera ditt resultat.
:::

::: exercise 6.5
Välj sedan ut 10 instanser ur datasetet som inte är med på din scatter-plot. Klassificera dessa enligt 4-Nearest Neigbours-algoritmen. Dokumentera ditt resultat.
:::

::: exercise 6.6
Reflektera över ditt resultat, bland annat:

* Vilken K-version av K-Nearest Neighbours fungerade bäst?
* Var någon klass lättare att identifiera än de andra?
:::

::: exercise 6.7
Om du tittar på datasetet, kan du identifiera vilken kolumn/attribut som bäst verkar kunna skilja instanserna åt? Då är det ett bra attribut att ha i din scatter-plot. Kan du även se vilket det näst bästa attributet kan vara?
:::



<!--


## Kommande


* Eget Turing-test
	* Använd en chattmodell för att generera något, t.ex. en dikt om en myra på 5-6 rader. Skriv sedan en egen dikt. Låt andra gissa vilken som är din och vilken som datorn skapat.

* Chattmodellers svagheter
	* Vi spenderar merdelen av en lektion till att ställa olika frågor till en chattmodell och ser om vi kan få den att skriva fel svar till oss. Vi reflekterar sedan över vilka frågor vi får fel svar på, och om de har något gemensamt.

# Lektion X. Vibe Coding
Måste man kunna programmering för att skapa hemsidor/appar? Nej, inte om man har en chattmodell till sin hjälp! Vibe Coding kallas den utveckling av hemsidor/appar där personer som inte kan programmera ber en chattmodell att skriva koden åt dem. Utvecklaren skriver alltså ingen kod själv, utan utvecklaren ber bara chattmodellen att skriva koden som gör att hemsidan/appen fungerar på ett visst sätt.

## Övning 1




# Lektion X. Projekt
Under ~6 lektioner, använd en chattmodell för att skapa något program/hemsida. Använda bara kod som du får från chattmodellen (gör inga ändringar i den). Du får ställa vilka frågor du vill till chattmodellen.




* Skapa grafer över hur chatmodeller har utvecklats över åren:
	1. Hitta chatmodeller som kan vara med i grafen.
	2. För varje chatmodell, hitta dess information så som:
		* Namn
		* Skapelseår
		* Antal parametrar/vikter
		* Antal bokstäver/ord/tokens in (kontextfönster)
		* Antal bokstäver/ord/tokens out
	3. Rita med papper och penna eller skapa grafer i valfritt program som visar hur utvecklingen framåt kan tänkas se ut.
	
-->