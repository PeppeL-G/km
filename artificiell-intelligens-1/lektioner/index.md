# Artificiell Intelligens 1 - Lektioner

## Lektion 1
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




## Lektion 2, Turing-testet
::: exercise 2.1

På Google Drive, skapa ett nytt Google Dokument, som kommer bli din `Min AI-rapport`. Skapa ett nytt kapitel i den med rubiken `Turing-testet`.

Den här övningen går ut på att se ifall människor alltid kan avgöra vad som skrivs av en chatmodell, och vad som skrivs av en människa. Så lämplig frågeställning att skriva i din AI-rapport är något i stil med:

> Kan människor se skillnad på chattmeddelanden från en modern chatmodell och en människa?

Metoden vi kommer använda är något i stil med:

1. Du väljer vilken chatmodell du vill använda (t.ex. ChatGPT, Perplexity, Google Gemini, etc.)
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


<!--
## Kommande


* Eget Turing-test
	* Använd en chattmodell för att generera något, t.ex. en dikt om en myra på 5-6 rader. Skriv sedan en egen dikt. Låt andra gissa vilken som är din och vilken som datorn skapat.

* Chattmodellers svagheter
	* Vi spenderar merdelen av en lektion till att ställa olika frågor till en chattmodell och ser om vi kan få den att skriva fel svar till oss. Vi reflekterar sedan över vilka frågor vi får fel svar på, och om de har något gemensamt.


* Vibe coding
	* Under ~6 lektioner, använd en chattmodell för att skapa något program/hemsida. Använda bara kod som du får från chattmodellen (gör inga ändringar i den). Du får ställa vilka frågor du vill till chattmodellen.




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