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





## Lektion 6. Maskininlärning (K-nearest neighbours)
* Classification VS Regression
* Problem för AI respektive människor
* Visualisera data (scatter plot)
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
Den här övningen går ut på att rita en scatter plot du sedan kan använda för att klassificera okända instanser. Din scatter plot kommer alltå fungera som din maskinlärda modell.

Ladda in datasetet iris ovan. Det är ett dataset där man ska använda den tillgängliga datan för att försöka förutsäga ifall en ny instans med känd `sepalWidth`, `sepalLength`, `petalLength` och `petalWidth` är en `setosa`, `versicolor`, eller `virginica` (alltså ett klassificeringsproblem).

Slumpa ordningen på instanserna genom att klicka på `Random` i tabellhuvudet några gånger. Rita sedan en scatter plot med två av de numreriska attributen/kolumnerna instanserna har (bestäm själv vilka du vill använda). En scatter plot är en tvådimensionell graf där instansernas ena attribut visas på en axel, och det andra attributet visas på den andra axeln. Rita ut åtminstone 10 av vardera klass (i bästa fall skulle man rita ut alla instancer, men det är för mycket arbete). Om du har pennor med olika färger, ge då gärna varje blomtyp en egen färg, t.ex.:

* `setosa`: röd
* `versicolor`: blå
* `virginica`: grön

Har du inte pennor med olika färger så kan du använda symboler istället, t.ex.:

* `setosa`: x
* `versicolor`: y
* `virginica`: z
:::

::: exercise 6.2
Välj sedan ut 5 instanser ur datasetet som inte är med på din scatter plot. Klassificera dessa enligt 1-Nearest Neigbour-algoritmen. Dokumentera ditt resultat.
:::

::: exercise 6.3
Välj sedan ut 5 instanser ur datasetet som inte är med på din scatter plot. Klassificera dessa enligt 2-Nearest Neigbours-algoritmen. Dokumentera ditt resultat.
:::

::: exercise 6.4
Välj sedan ut 5 instanser ur datasetet som inte är med på din scatter plot. Klassificera dessa enligt 3-Nearest Neigbours-algoritmen. Dokumentera ditt resultat.
:::

::: exercise 6.5
Reflektera över ditt resultat, bland annat:

* Vilken K-version av K-Nearest Neighbours fungerade bäst?
* Var någon klass lättare att identifiera än de andra?
:::

::: exercise 6.6
Om du tittar på datasetet, kan du identifiera vilken kolumn/attribut som bäst verkar kunna skilja instanserna åt? Då är det ett bra attribut att ha i din scatter plot. Kan du även se vilket det näst bästa attributet kan vara?
:::




## Lektion 7. KNIME-intro
Först en liten repetition av de grundläggande termerna vi använder när det kommer till maskininlärning (regression VS classification, dataset, instans, attribut/feature, scatter plot). Vi fortsätter sedan att arbeta lite med övningarna från föregående lektion. Därefter börjar vi titta lite på KNIME, vilket är ett program vi kan använda för att visualisera dataset och skapa/träna maskininlärningsmodeller.

::: exercise 7.1
Ladda ner och installera [KNIME](https://www.knime.com/downloads). Notera att du inte behöver registrera dig för att ladda ner det. Du kan t.ex. använda versionen `Latest standard: 5.7` --> `KNIME Analytics Platform for Windows (installer)`.
:::

::: exercise 7.2
Starta KNIME och skapa ett nytt *workflow* där. Dra sedan en `CSV Reader`-nod till ditt workflow och använd den för att ladda in iris-datasetet. För detta behöver du ha iris-datasetet som en CSV-fil på din dator. Ladda ner den filen med hjälp av knappen nedan.

<ShowDataset
	datasetName="iris"
/>

När du har konfigurerat `CSV Reader`-noden korrekt och exekverat den så ska du kunna se att datasetet har laddats in korrekt när du klickar på din `CSV Reader`-nod.
:::

::: exercise 7.3
Visualisera det inladdade datasetet med `Line Plot`-noden. Studera grafen och försök upptäck ett mönster i attributen du kan använda för att klassificera instanserna. Försök sedan (med hjälp av grafen) besvara följande frågor:

1. Vilken iris-typ är enklast att klassificera?
2. Vad för attribut tittar du på för att se det?
3. Vilket gränsvärde kan du använda för att göra en "säker" klassifisering av den iris-typen?
:::

::: exercise 7.4
Använd `Statistics`-noden för att besvara följande frågor:

* Vad är min- och max-värdena för `SepalWidthCm`?
* Vad är medelvärde för `PetalWidthCm`?
:::

::: exercise 7.5
Använd `Value Counter`-noden för att besvara följande frågor:

* Hur många `Iris-setosa` innehåller datasetet?
* Hur många `Iris-versicolor` innehåller datasetet?
* Hur många `Iris-virginica` innehåller datasetet?
:::

::: exercise 7.6
Använd 3 noder för att *filtrera* instanserna (försök själv att hitta rätt nod som löser detta åt dig), så att du får:

* Ett dataset som endast innehåller `Iris-setosa`-instanser.
* Ett dataset som endast innehåller `Iris-versicolor`-instanser.
* Ett dataset som endast innehåller `Iris-virginica`-instanser.

Använd sedan en lämplig nod för att beräkna medelvärdena för attributen för respektive iris-typ. Kan du på detta vis komma på en "säker" regel för att klassificera en iris-typ?
:::

::: exercise 7.7
Att måla en scatter plot för hand är väldigt tidskrävande. Som tur är finns det en scatter plot-nod i KNIME vi kan använda som göra detta åt oss. Men för att den ska fungera bra så behöver du först använda en `Color Manager`-nod, så den vet vilken färg varje iris-typ ska visas med.

Försök att få KNIME att måla en scatter plot åt dig.
:::

::: exercise 7.8
Lek runt i KNIME och se vad som är möjligt att göra. 
:::



## Lektion 8. Catch-up
Vi fortsätter att arbeta med KNIME-övningarna från föregående lektion. De som är klara med de övningarna kan testa att ladda in ett nytt dataset och försöka bekanta sig med det. På [kaggle.com](https://www.kaggle.com/datasets) finns många olika dataset man kan ladda ner (efter att man har skapat ett konto och loggat in).

Ett förslag på ett dataset du kan undersöka är [Animal Bites](https://www.kaggle.com/datasets/rtatman/animal-bites). Det innehåller dokumenterade fall av bitattacker mot människor av olika slags djur. Frågor du kan försöka besvara är:

* Verkar det vara hanar eller honor som ligger bakom de flesta bitattackerna mot människor?
	* Stämmer det även för respektive art (så som `DOG` och `CAT`?)?
* Vilka olika arter är det som har utfört bitattacker mot människor enligt datasetet?
* Finns det någon period på året då attackerna verka vara mer vanligt förekommande än övrig tid på året? Om ja, har du själv någon vettig förklaring till varför?
* Verkar antalet bitattacker ha någon koppling till djurens färg?
* Hur många attacker finns det av respektive art?




## Lektion 9. Träna & Utvärdera modeller
Dagens lektion handlar om att träna en KNN-modell på ett klassificeringsproblem, och sedan utvärdera hur bra modellen är. Ni får lära er hur en gör detta i KNIME genom att göra övningarna nedan. Svaren på övningarna ska ni skriva ner och lämna in på Google Classroom i inlämningsuppgiften [KNN i KNIME](https://classroom.google.com/c/MjM0NTUzOTYxMTVa/a/ODA5Nzk4MDYxMjkw/details).

::: exercise 9.1
<ShowDataset
	datasetName="iris"
/>

Skapa ett nytt workflow i KNIME där du importerar Iris-datasetet.

Använd sedan noden som heter *Column Filter* för att ta bort `Id`-kolumnen.

Använd sedan noden som heter *K Nearest Neighbours*. Den har två input:

* Den första inputen är en datamängd modellen ska tränas med (*training data*).
* Den andra inputen är en datamängd modellen ska gissa på (*test data*).

I denna övning, använd hela iris-datasetet som training data, och hela iris-datasetet som test data. Se sedan till att modellen:

1. Predikterar attributet som heter `Species`.
2. Använder sig av 1 Nearest Neighbour-algoritmen.

Outputen från modellen kommer nu vara den test data du gav den, men instanserna i test datan kommer nu innehålla en extra kolumn som heter `Class [kNN]`. Det innehåller det som modellen klassificerade respektive instans som (predikteringen).

Titta på outputen och försök avgöra ifall modellen fungerar bra. Besvara sedan följande frågor:

1. Hur kan du se ifall en prediktering är korrekt?
2. Hur många predikteringar är korrekta med K=1?
3. Är ditt resultat ett förväntat resultat när du tränar en 1 Nearest Neighbour-modell och testar den med samma data? Tänkt igenom hur modellen faktiskt fungerar för att besvara den här frågan.
4. Hur påverkas resultatet när du ändrar K-värdet?
:::


::: exercise 9.2
Vanligtvis vill en inte använda samma instanser i träningsdatan och testdatan. Om en gör det så kommer ju varje instans som testas ha sig själv som närmsta granne i och med att den även är med i träningsdatan!

Så att utvärdera hur bra modellen kommer fungera på okända instanser (på instanser när man använder den på riktigt i framtiden) borde inte göras med instanser som den har tränats på. Använd därför noden med namnet `Table Partitioner` för att dela upp Iris-datasetet i två delset:

* Ett dataset som används för träning.
* Ett dataset som används för utvärdering.

Men hur många instanser borde användas för träning, och hur många instanser borde användas för utvärdering? Vi vill:

1. Använda många instanser till träning, för då blir modellen bättre. MEN, då får vi få instanser kvar till utvärdering, så vi vet inte hur bra utvärderingen reflekterar ett faktiskt resultat.
2. Använda många instanser till utvärdering, för desto fler isntanser vi utvärderar med, desto mer säkra blir vi att resultatet motsvarar modellens faktiska förmåga. MEN, då får vi får instanser kvar till träning, så modellen kommer inte att bli så bra.

Så det finns inget perfekt svar, utan det är en trade-off. Låt oss testa vad för resultat vi får med lite olika inställningar på:

* K-värdet i modellen.
* `Realtive Size`-värdet i Table Partitioner.

Fyll i tabellen som finns på Google-dokumentet. Besvara sedan följande frågor:

1. Vad kan du säga om resultatet?
:::

::: exercise 9.3
Ladda in ett eget dataset i KNIME, och försök lösa ett klassificeringsproblem av något slag. Du kan t.ex. använda datasetet [Animal Bites](https://www.kaggle.com/datasets/rtatman/animal-bites), och försöka skapa en modell som kan prediktera gender för ett bett (`FEMALE`/`MALE`), men du får använda vilket dataset du vill. På [kaggle.com](https://www.kaggle.com/datasets) hittar en många olika dataset man kan ladda ner efter att man har skapat och loggat in på ett konto.

Redovisa sedan vilket dataset du valde, vad du försökt prediktera, och hur bra det gick i Google-dokumentet. Tänk själv igenom vad du bör skriva och hur du borde presentera det för att det ska bli lättförståeligt för läsaren.
:::



## Lektion 10. Catch-up
Vi fortsätter arbeta med övningsuppgifterna från föregående lektion. De som arbetar på Övning 9.3 kan fortsätta med det, och kan försöka förbearbeta datan så att maskininlärningsmodellen lyckats göra bättre predikteringar. Man kan t.ex. testa att:

* Ta bort attribut en inte tror bidrar till en bättre lösning.
* Ta bort rader med missing values, så modellen bara tränas på instanser där vi har all data.
* Skapa nya kolumner utifrån existerande kolumner (om en kolumn t.ex. innehåller en människas längd, och en annan innehåller en människas vikt, så kan dessa användas för att skapa en [BMI](https://sv.wikipedia.org/wiki/BMI_(kroppsmasseindex))-kolumn, vilket modellen kanske finner mer användbart (beroende på vad en försöker prediktera)).
* Etc.




## Instuderingsfrågor till prov Termer + KNN
Här är instuderingsfrågor till provet på tisdag vecka 42.

1. Definiera vad följande maskininlärningstermer betyder (sök på webben, eller fråga läraren om hjälp):
	* Dataset
	* Instans
	* Attribut/Feature
	* Maskininlärd modell
	* KNN-modell
	* Träningsset
	* Testset
	* Klassificeringsproblem
	* Regressionsproblem
	* Prediktering
2. När man tränar upp en maskininlärningsmodell, förklara varför man delar upp ett dataset i ett träningsset och ett testset istället för att testa hur bra modellen fungerar på hela datasetet.
3. Givet följande scatter-plot:
	![Scatter plot](/scatter-plot.png)
	Klassificera instanserna (blå, grön eller röd) nedan enligt KNN-algoritmen med de givna inställningarna.
	
	<table>
		<thead>
			<tr><th>X</th><th>Y</th><th>K=1</th><th>K=3</th></tr>
		</thead>
		<tbody>
			<tr><td>5</td><td>3</td><td></td><td></td></tr>
			<tr><td>6</td><td>2.2</td><td></td><td></td></tr>
			<tr><td>7</td><td>3.2</td><td></td><td></td></tr>
		</tbody>
	</table>
	
	Förklara även hur du tänker.




## Lektion 11. Instuderingsfrågor
* Tisdag nästa vecka (vecka 42): Prov tisdag.
* Idag:
	* Besvara instuderingsfrågorna ovan.
	* Börja undersöka ett nytt dataset.

::: exercise 11.1
Besvara instuderingsfrågorna ovan.
:::

::: exercise 11.2
Börja undersök datasetet [London bike sharing](https://www.kaggle.com/datasets/hmavrodiev/london-bike-sharing-dataset) i KNIME. Försök besvara följande frågor genom att använda olika noder i KNIME:

1. Vilken timme på dygnet har flest cyklar hyrts ut totalt?
2. Vilken månad på året har flest cyklar hyrts ut totalt?
3. Vilken årstid har flest cyklar hyrts ut totalt?
4. Verkar flest cyklar hyras ut en helgdag eller en vardag?
5. Påverkar vädret mycket hur många cyklar som hyrs ut?
6. Påverkar temperaturen mycket hur många cyklar som hyrs ut?
7. Påverkar vindhastigheten mycket hur många cyklar som hyrs ut?

Du kan ha nytta av följande noder:

* `String to Date&Time`
* `Date&Time Part Extractor`
* `GroupBy`
* `Math Formula`

Verkar dina svar rimliga?
:::




## Lektion 12. Tävlingsinformation
De som inte är klara med Övning 11.2 fortsätter arbeta med den innan de fortsätter med dagens övning/tävling.

::: tip Tävlingsinformation

Datasetet [London bike sharing](https://www.kaggle.com/datasets/hmavrodiev/london-bike-sharing-dataset) innehåller information om hur många cyklar ett företag hyr ut varje timme i London. Det optimala vore att försöka prediktera hur många cyklar de kommer hyra ut en specific timme i framtiden (så de vet hur många de behöver ha), men K Nearest-Neighbours-noden i KNIME fungerar tyvärr bara på klassificeringsproblem. Därför går tävlingen ut på att försöka skapa en KNN-model som är så bra som möjlig på att försöka prediktera vilken årstid det är (`season`-attributet).

Vi kommer arbeta med detta på:

* Dagens lektion.
* Nästa lektion (måndag vecka 42).

På lektionen därefter (tisdag vecka 42) är provet på ena halvan av lektionen, och på den andra halvan kommer vi jämföra era modeller.

Regler:

* `season`-attributet måste omvandlas till en sträng (annars kan klassificering inte ske, använd t.ex. noden `Number to string`).
* Man får bara använda KNN-modellen i KNIME.
* Man får inte använda datumdelen av `timestamp`-attributet.
* I `Table Partitioner`-noden måste följande användas (så att alla utvärderar sin modell på samma sätt):
	*	`Relative size` vara `70`.
	* `Fixed random seed` vara `12345`.

:::

::: tip Tips
Det finns flera olika sätt du kan försöka få din modell att bli bättre:

* Ändra K-värde i KNN-noden.
* Ta bort attribut som du inte tror är relevant/så viktigt för att prediktera `season`.
* Skapa nya attribut utifrån existerande attribut som bättre kan användas för att klassificera `season`.
:::

::: tip Tips
Måla scatter-plots för att försöka hitta attribut som är bra att använda för att prediktera `season`.
:::

::: tip Tips
Har du svårt att komma igång? Försök då de här lite lättare uppgifterna först (använd noder för att beräkna svaret eller visualisera svaret):

* Om du får använda dig av datum-delen i `timestamp`-attributet, kan du skapa en KNN-modell som alltid predikterar `season` rätt?
* Vilken årstid verkar vara varmast överlag?
* Vilken årstid verkar ha timmar med de flesta uthyrningarna?
:::



## Lektion 13. Catch-up
* De som inte är klara med övningarna från lektion 11 gör dem.
* Försök att skapa en bättre modell för tävlingen (för tips, se föregående lektion).




## Lektion 14. Tävling & Prov
* 30 minuter för att förbättra ens modell.
* 10 minuter för tävlingsresultat.
* 10 minuter rast.
* 30 minuter för prov.




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
Under ~6 lektioner, använd en chattmodell för att skapa något program/hemsida. Använda bara kod som du får från chattmodellen (gör inga ändringar i den). Du får ställa vilka frågor du vill till chattmodellen. Använd även andra AI-modeller i ditt projekt, för att t.ex. generera bilder du kan använda på din hemsida, eller musik som spelas på hemsidan, etc.



# Lektion X. Chattmodellers utvecklings

* Skapa grafer över hur chatmodeller har utvecklats över åren:
	1. Hitta chatmodeller som kan vara med i grafen.
	2. För varje chatmodell, hitta dess information så som:
		* Namn
		* Skapelseår
		* Antal parametrar/vikter
		* Antal bokstäver/ord/tokens in (kontextfönster)
		* Antal bokstäver/ord/tokens out
	3. Rita med papper och penna eller skapa grafer i valfritt program som visar hur utvecklingen framåt kan tänkas se ut.
	4. Reflektera över din graf. Verkar vi ha nått toppen av AI-utvecklingen för stunden? Eller verkar våra AI-modeller bara bli större och större/bättre och bättre?

Lektion X. K-Nearest Neighbours
Gå igenom mattematiken bakom hur K-Nearest Neighbours fungerar.

-->