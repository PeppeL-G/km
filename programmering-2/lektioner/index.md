# Programmering 2 - Lektioner



## Snabblänkar
* [W3Schools C# Pages](https://www.w3schools.com/cs/index.php)



## Lektion 1. Intro + Rep.
* Introduktion till kursens innehåll
* (sätt upp en C#-utvecklingsmiljö)
* Repetition (output, input, variabler, datatypkonvertering, funktioner)
* Övningar

```cs
// Två slash för att skriva resten av raden som en kommentar.

/* Eller skriv "slash star" för starta kommentar,
   och "star slash" för att avsluta kommentar. */

// Skriv output (med radbyte i slutet).
Console.WriteLine("Denna sträng kommer visas på skärmen.");

// Skriv output (utan radbyte i slutet).
Console.Write("Denna sträng kommer visas på skärmen.");

Console.WriteLine();

// Skapa variabler med "var".
var myString = "Hej där!";

// Eller skapa variabler med explicit datatyp.
int year = 2020;

// Läs input.
Console.Write("Skriv något: ")
var enteredText = Console.ReadLine();

// Konvertera en sträng till ett heltal.
var myInt = Convert.ToInt32("123");

// Villkorlig exekvering.
if(500 < myInt){
	Console.WriteLine("500 är mindre än myInt.");
}else if(500 == myInt){
	Console.WriteLine("500 är lika med myInt.");
}else{
	Console.WriteLine("500 är större än myInt.");
}

// Upprepad exekvering.
for(var i=0; i<5; i++){
	
	// Stränginterpolering.
	Console.WriteLine($"Variabeln i har värdet {i}.");
	
}

// Upprepad exekvering.
var j = 0;

while(j < 5){
	
	Console.WriteLine($"Variabeln j har värdet {j}.");
	
	j++;
	
}

// Skapa funktion.
void writeName(){
	Console.WriteLine("James");
}

// Anropa funktion.
writeName();

// Skapa funktion med parametrar och returvärde.
int getPlus2(int theNumber){
	return theNumber + 2;
}

// Anropa funktion med parametrar och returvärde.
var five = getPlus2(3);
```

::: exercise 1.1
Om ni i Programmering 1 använde något annat än Visual Studio Code så är det OK att fortsätta med det. Här är annars instruktioner för hur man sätter upp C#-utveckling i .NET i Visual Studio Code för de som vill använda det.

---

Ladda ner och installera [.NET 9.0 SDK](https://dotnet.microsoft.com/en-us/download). Det innehåller dels:

* En kompilator som kan kompilera C#-kod vi kommer skriva till instruktioner datorn kan exekvera
* En miljö som våra program kan köras i, där de har tillgång till bland annat ett standardbibliotek, input-/output-hantering, filåtkomst, etc.

---

Ladda ner och installera [Visual Studio Code](https://code.visualstudio.com/) (VS Code). Det är en texteditor som är designad för att skriva, köra och debugga kod.

**TIPS**\
Under installationsprocessen, bocka för följande två alternativ:

* `Add "Open with Code" action to Windows Explorer file context menu`
* `Add "Open with Code" action to Windows Explorer directory context menu`

Genom att göra detta så kan du högerklicka på filer och mappar och sedan välja att öppna dem i Visual Studio Code.

---

Ladda ner och installera `C# Dev Kit`-tillägget i VS Code:

1. Starta Visual Studio Code
2. Öppna `Extensions`-panelen
3. Sök efter `C#` i `Extensions`-panelen
4. Installera det extension som heter `C# Dev Kit` (`Official C# extension from Microsoft`).

Om du får ett felmeddelande efter att du har installerat tillägget, testa att stänga/avsluta Visual Studio Code och starta det sedan igen.

---

Dags att skapa och köra ett nytt C#-program för att se att allting fungerar som det ska!

Skapa en ny mapp där du vill att alla dina C#-projekt i kursen ska ligga. Öppna sedan den mappen i `Explorer`-panelen i Visual Studio Code.

I Visual Studio Code, öppna i menyn `View` --> `Command Palette`. Välj här följande:

1. `.NET: New Project...`.
1. Som template, välj `Console App`.
2. Som namn på projektet, välj själv, men följ `DenHärNamnKonventionen`.
3. För location, välj `Default Directory` (kommer vara mappen som du för stunden har öppet i `Explorer`-panelen).
4. För solution file format, välj `.slnx`.
5. Välj `Create Project...`

Det här kommer att skapa ett nytt C#-projekt med några filer och mappar:

* Filen med filändelsen `.slnx` behöver du inte bry dig om.
* Mappen med namnet du gav projektet innehåller det som behövs för att utveckla ett C#-program:
	* Filen med filändelsen `.csproj` innehåller metainformation om ditt projekt, så som vilken version av .NET projektet använder. Den här filen behöver du inte bry dig om.
	* Mappen `obj` innehåller projektkoden i ett kompilerat format. Den här mappen behöver du inte bry dig om.
	* Mappen `bin` innehåller också projektkoden i ett kompilerat format. Den här mappen behöver du inte bry dig om.
	* Filen `Program.cs` innehåller projektets C#-kod.

För att testköra koden i Visual Studio Code, öppna `Program.cs`-filen och klicka på `▷`-knappen. Verifiera att `Hello, World!` skrivs ut i terminalen i Visual Studio Code.

:::

::: exercise 1.2
Skapa ett program/Ändra koden i `Program.cs` så att den ber användaren mata in två heltal. Skriv sedan ut vad produkten av de två talen är. Körexempel:

```
Mata in ett heltal: 7
Mata in ett till heltal: 3

Produkten av 3 och 7 är 21.
```
:::

::: exercise 1.3
Skapa ett program som skriver ut ettans multiplikationstabell, så som visas nedan. Använd en loop och skapa och använd en funktion för att beräkna produkten av två tal.

```
0 * 1 = 0
1 * 1 = 1
2 * 1 = 2
3 * 1 = 3
4 * 1 = 4
5 * 1 = 5
6 * 1 = 6
7 * 1 = 7
8 * 1 = 8
9 * 1 = 9
10 * 1 = 10
```
:::

::: exercise 1.4
Skapa ett program/Ändra koden i `Program.cs` så att den skriver en multiplikationstabell som användaren väljer. Körexempel:

```
Ange den multiplikationstabell du vill se: 3

0 * 3 = 0
1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
4 * 3 = 12
5 * 3 = 15
6 * 3 = 18
7 * 3 = 21
8 * 3 = 24
9 * 3 = 27
10 * 3 = 30
```
:::

::: exercise 1.5
Skapa ett program/Ändra koden i `Program.cs` så att den skriver en multiplikationstabell som användaren väljer. Om användaren väljer en som är lägre än 0 eller högre än 10 så ska användaren få välja igen. Körexempel:

```
Ange den multiplikationstabell mellan 0 och 10 som du vill se: -4
-4 är för lågt.
Ange den multiplikationstabell mellan 0 och 10 som du vill se: 20
20 är för högt.
Ange den multiplikationstabell mellan 0 och 10 som du vill se: -1
-1 är för lågt.
Ange den multiplikationstabell mellan 0 och 10 som du vill se: 3

0 * 3 = 0
1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
4 * 3 = 12
5 * 3 = 15
6 * 3 = 18
7 * 3 = 21
8 * 3 = 24
9 * 3 = 27
10 * 3 = 30
```
:::

::: exercise 1.6
Skapa ett nytt program som skriver ut ettans, tvåans och treans multiplikationstabell, så som visas nedan.

```
0 * 1 = 0
1 * 1 = 1
2 * 1 = 2
3 * 1 = 3
4 * 1 = 4
5 * 1 = 5
6 * 1 = 6
7 * 1 = 7
8 * 1 = 8
9 * 1 = 9
10 * 1 = 10

0 * 2 = 0
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
4 * 2 = 8
5 * 2 = 10
6 * 2 = 12
7 * 2 = 14
8 * 2 = 16
9 * 2 = 18
10 * 2 = 20

0 * 3 = 0
1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
4 * 3 = 12
5 * 3 = 15
6 * 3 = 18
7 * 3 = 21
8 * 3 = 24
9 * 3 = 27
10 * 3 = 30
```
:::

::: exercise 1.7
Ändra programmet så att användaren får skriva in det lägre respektive högre numret för de multiplikationstabeller som ska skrivas ut. Det andra numret måste vara högre än det första numret.

```
Ange den första multiplikationstabellen du vill se: 2
Ange den sista multiplikationstabellen du vill se: 0
Fel, den sista multiplikationstabellen måste vara högre än den första.
Ange den sista multiplikationstabellen du vill se: 1
Fel, den sista multiplikationstabellen måste vara högre än den första.
Ange den sista multiplikationstabellen du vill se: 4

0 * 2 = 0
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
4 * 2 = 8
5 * 2 = 10
6 * 2 = 12
7 * 2 = 14
8 * 2 = 16
9 * 2 = 18
10 * 2 = 20

0 * 3 = 0
1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
4 * 3 = 12
5 * 3 = 15
6 * 3 = 18
7 * 3 = 21
8 * 3 = 24
9 * 3 = 27
10 * 3 = 30

0 * 4 = 0
1 * 4 = 4
2 * 4 = 8
3 * 4 = 12
4 * 4 = 16
5 * 4 = 20
6 * 4 = 24
7 * 4 = 28
8 * 4 = 32
9 * 4 = 36
10 * 4 = 40
```
:::




## Lektion 2. Rep. arrayer + listor
* Array VS Listor
* Referenser VS värden
* Repetition
* Övningar

```cs
// Skapa array.
string[] names = { "Alice", "Bob", "Claire" };

// Hämta värden från array.
var firstName = names[0]; // "Alice"
var secondName = names[1]; // "Bob"

// Ändra värden i array.
names[2] = "Klara";

// Loopa igenom alla värden i en array.
foreach(var name in names){
	Console.WriteLine(name);
}

// Skapa lista.
var numbers = new List<int>{ 4, 7, 10 };

// Kolla om värde finns i listan
if(numbers.Contains(7))
{
	Console.WriteLine("Sju finns i listan!");
}

// Kolla hur många värden som finns i listan.
Console.WriteLine($"Det finns {numbers.Count} värden i listan.");

// Lägg till värde i slutet av listan.
numbers.Add(23); // 4, 7, 10, 23

// Ta bort första i listan med det givna värdet.
numbers.Remove(7); // 4, 10, 23

// Ta bort värdet vid det givna indexet.
numbers.RemoveAt(1); // 4, 23

// Loopa igenom alla värden i en lista.
foreach(var number in numbers){
	Console.WriteLine(number);
}
```

::: exercise 2.1
De här övningarna kommer tillsammans hjälpa dig skapa ett program som i slutändan kan administrera en lista med namn.

Skapa ett program som ber användaren mata in ett kommando. Programmet ska fortsätta be användaren mata in ett kommando så länge användaren inte matar in kommandot `quit`. När användaren matar in kommandot `quit` så ska loopen/programmet avslutas.

Du kommer lägga till fler kommandon för programmet i kommande övningar, men nu är kommandot `quit` det enda kommandot som ska finnas. Om användaren skriver in ett kommando som inte finns så ska ett felmeddelande visas.

Körexempel:

```
Mata in kommando: hallå
Kommandot hallå finns inte.
Mata in kommando: va?
Kommandot va? finns inte.
Mata in kommando: quit
```
:::

::: exercise 2.2
I ditt program, skapa en lista med namnen `Bosse` och `Nisse`. Lägg sedan till kommandot `count`, som visar hur många namn som finns i listan.

Körexempel:

```
Mata in kommando: count
2
Mata in kommando: quit
```
:::

::: exercise 2.3
Lägg till kommandot `show`, som visar alla namnen i listan.

Körexempel:

```
Mata in kommando: show
 - Bosse
 - Nisse
Mata in kommando: quit
```
:::

::: exercise 2.4
Lägg till kommandot `add`. När det kommandot körs så ska du be användaren mata in ett nytt namn, och sedan spara det namnet i slutet på din lista, men bara om namnet inte redan finns i listan. Om namnet redan finns i listan så ska du visa ett felmeddelande.

Körexempel:

```
Mata in kommando: show
 - Bosse
 - Nisse
Mata in kommando: add
Mata in namn: Nisse
Namnet Nisse finns redan i listan.
Mata in kommando: add
Mata in namn: Alice
Mata in kommando: show
 - Bosse
 - Nisse
 - Alice
Mata in kommando: quit
```
:::

::: exercise 2.5
Lägg till kommandot `remove`. När det kommandot körs så ska du be användaren mata in ett namn, och sedan ta bort det namnet från listan, men bara om namnet finns i listan. Om namnet inte finns i listan så ska du visa ett felmeddelande.

Körexempel:

```
Mata in kommando: show
 - Bosse
 - Nisse
Mata in kommando: remove
Mata in namn: Alice
Namnet Alice finns inte i listan.
Mata in kommando: remove
Mata in namn: Bosse
Mata in kommando: show
 - Nisse
Mata in kommando: quit
```
:::

::: exercise 2.6
Ändra ditt program så du inte bara sparar personers namn, utan även sparar ner annan information, så som deras email, telefonnummer, hemort, ålder, etc. Välj själv vad för information du vill att ditt program ska spara.

För detta ändamål behöver du även skapa en struct- eller en klassdefinition som representerar en person (med namn, email, etc.). Instanserna av denna definition är vad du sedan kommer spara i listan.
:::

::: exercise 2.7
Om du lyckas komma ända hit innan lektionens slut så kan läsa på om objektorienterad programmering på [W3Schools C# Pages](https://www.w3schools.com/cs/cs_oop.php).
:::


## Lektion 3. Klasser (variabler & metoder)
Ingen panik om ni inte blir klara med alla övningar den här lektionen. Det viktigaste är att ni lär er grunderna i objektorienterad programmering (klasser, object, attribut och metoder).

---

Många värden kan representeras som en vanlig datatyp. Exempel:

```cs
string cityName = "Jönköping";
int aliceAge = 26;
```

Men en del saker som vi vill representera i datorprogram består av flera olika värden. Ska man t.ex. representera en hel person så består den av flera olika egenskaper, så som:

* Namn
* Ålder
* Hudfärg
* Ögonfärg
* Emailaddress
* Telefonnummer
* Etc.

Då räcker inte en vanlig datatyp till, utan vi behöver samla ihop ett gäng av dem. Och det är just det som en klass i grunden är: en samling variabler och datatyper som hör ihop för att representera någonting större tillsammans:

```cs
class Person{
	public int age;
	public string name;
	// Etc.
}
```

En klass innerhåller bara variabelnamn och dess datatyper; den innehåller inte några värden på variablerna. Klassen är endast en beskrivning av ett objekt som kan innehålla värdena på variablerna. För att skapa sådana nya objekt (även kallade *instanser*) så används `new`-operatorn:

```cs
Person teacher = new Person{age=50, name="Hagrid"};
Person student1 = new Person{age=14, name="Harry"};
Person student2 = new Person{age=14, name="Ron"};
Person student3 = new Person{age=14, name="Hermione"};

// Här har vi alltså skapat 4 olika Person-objekt.

// Exempel på hur man kommer åt värdena i objekten
// genom variabelnamnen vi definierade i klassen.
Console.WriteLine($"Läraren heter {teacher.name}, och han är {teacher.age} år gammal.");
```

::: exercise 3.1

Skapa en klass som representerar en bil. En bil ska ha följande egenskaper:

* `regNumber` (t.ex. `"abc123"`)
* `color` (t.ex. `"röd"`)
* `tankSize` (i liter, t.ex. `60`)
* `currentTank` (i liter, t.ex. `50`)

I ditt huvudprogram, skapa 2 olika bil-instanser. Du får själv välja värde på attributen för dina bilar. Skriv sedan ut namnen på dina bilar.

:::

I en klass kan man även lägga in metoder. Metoderna i klassen kan komma åt variablerna/egenskaperna i klassen genom deras namn.

```cs
class Person{
	
	public int age;
	public string name;
	
	// En metod som kan anropas på objekten.
	public void WriteToConsole(){
		Console.WriteLine($"{name} är {age} år gammal.")
	}
	
}
```

Metoderna kan sedan anropas på objekten.

```cs
Person teacher = new Person{age=50, name="Hagrid"};
Person student1 = new Person{age=14, name="Harry"};
Person student2 = new Person{age=14, name="Ron"};
Person student3 = new Person{age=14, name="Hermione"};

teacher.WriteToConsole();
student2.WriteToConsole();
```

::: exercise 3.2

I din bilklass, lägg till en metod som heter `WriteToConsole()`. I den metoden ska du skriva ut all information om bilen på skärmen.

I ditt huvudprogram, anropa `WriteToConsole()` på dina två bil-objekt.

:::

::: exercise 3.3

I din bilklass, lägg till en metod som heter `IsOutOfGas()`. Den ska returnera:

* `true`, om `currentTank` är `0`
* `false`, annars

I ditt huvudprogram, använd `IsOutOfGas()` på en av dina bil-instanser som villkor i en villkorssats, och skriv antingen ut meddelandet `Vi kan åka!` eller `Soppatorsk!`

:::

::: exercise 3.4

Det kan även vara bra att ha en metod man kan anropa för att tanka bilen full. Lägg därför till en metod som heter `Refuel()`. Den ska göra bilen fulltankad. Efter att den här metoden har körts så ska alltså bilens `currentTank` ha samma värde som bilens `tankSize`.

I ditt huvudprogram, använd `Refuel()` på en av dina bil-instanser för att tanka den full. Anropa sedan `WriteToConsole()` och verifiera att bilen har blivit fulltankad.

:::

Nu har du lärt dig grunderna om:

* Klasser
* Egenskaper/Variabler i klasser
* Metoder i klasser
* Object

Låt oss träna på att använda en klass för att lösa ett lite större och svårare problem.

::: exercise 3.5

Skapa en klass som representerar ett datum. Du behöver alltså hålla koll på datumets:

* År
* Månad
* Dag i månaden

Lägg till metoden `WriteToConsole()`, som skriver ut datumet i formatet `YYYY-MM-DD`.

Skapa sedan ett datum-objekt och anropa `WriteToConsole()`-metoden på det.

:::

::: exercise 3.6
Lägg till metoden `GetDaysInMonth()`, som returnerar antalet dagar som finns i månaden som datumet representerar. För enkelhetens skull, bry dig inte om skottår, utan utgå ifrån att februari alltid har `28` dagar.

I ditt huvudprogram, anropa `GetDaysInMonth()` på ett datum-objekt och skriv ut dess returvärde för att verifiera att den fungerar som den ska.
:::

::: exercise 3.7
Lägg till metoden `AddOneDay()`, som ändrar datumet en dag framåt i tiden. Tänk på att när du gör detta så kanske du behöver byta månad, och sätta dagen i månaden till `1`. Och likaså kanske året behöver öka med `1`. Det kan bli en del villkorssatser!

I ditt huvudprogram, anropa `AddOneDay()` några gånger på ett datum och verifiera att den fungerar som den ska.
:::

::: exercise 3.8
Lägg till metoden `RemoveOneDay()`, som ändrar datumet en dag bakåt i tiden. Tänk på att när du gör detta så kanske du behöver byta månad, och sätta dagen i månaden till slutet på föregående månad. Och likaså kanske året behöver minska med `1`. Det kan bli en del villkorssatser!

I ditt huvudprogram, anropa `RemoveOneDay()` några gånger på ett datum och verifiera att den fungerar som den ska.
:::

::: exercise 3.9
Lägg till metoden `ChangeDays(int amountOfDays)`, som ändrar datumet framåt/bakåt i tiden det givna antalet dagar. Var smart och återanvänd metoder du har implemterat tidigare. I en metod kan du anropa andra metoder i klassen.

I ditt huvudprogram, anropa `ChangeDays(int amountOfDays)` några gånger på ett datum och verifiera att den fungerar som den ska.
:::

::: exercise 3.9
Lägg till metoden `IsSameAs()`, som ska ta emot ett annat datum-objekt som argument/parameter, och returnera `true` om datum-objektet du tar emot representerar samma datum som det metoden anropades på.

I ditt huvudprogram, anropa din `IsSameAs()`-metod verifiera att den fungerar som den ska.
:::

::: exercise 3.10
Lägg till metoden `IsSameAs()`, som ska ta emot ett annat datum-objekt som argument/parameter, och returnera `true` om datum-objektet du tar emot representerar samma datum som det metoden anropades på, annars `false`.

I ditt huvudprogram, anropa din `IsSameAs()`-metod för att verifiera att den fungerar som den ska.
:::

::: exercise 3.11
Lägg till metoden `isBefore()`, som ska ta emot ett annat datum-objekt som argument/parameter, och returnera `true` om datum-objektet som du anropar metoden på är före datum-objektet som du tar emot som argument.

I ditt huvudprogram, anropa din `isBefore()`-metod för att verifiera att den fungerar som den ska.
:::

Låt oss reflektera över vad den här klassen vi har skapat har har gett oss:

* Vi har en väldefinerad och tydligt avgränsad komponent (klass) som löser ett specifikt problem (att arbeta med datum).
* Vi kan lätt använda den här komponenten (klassen) på många andra ställen i ett program för att arbeta med just datum.
* Det är lätt att förstå att allting som har med datumuträkningar att göra hör hemma just i den här klassen.

Vi har kort och gott lyckats skapa en återanvändbar komponent med ett specifikt syfte. Det är just så klasser ska användas. Om ett program enbart består av klasser lika tydlig och elegant som den du just nu skapade så kommer hela ditt program att ha en enkel struktur och vara lättförstålig för andra programmerare.

::: exercise 3.12
Om du lyckas komma ända hit innan lektionens slut så kan läsa på om objektorienterad programmering på [W3Schools C# Pages](https://www.w3schools.com/cs/cs_oop.php).
:::




## Lektion 4. Klasser (komposition)
I den här lektionen kommer vi fortsätta att arbeta med att implementera klasser. Nu kommer vi börja titta på hur en klass kan använda en annan klass i sin beståndsdel.

::: exercise 4.1
Implementera klassen `Room`, som representerar ett fyrkantigt rum. Varje rum ska ha ett namn (t.ex. `Köket`), en bredd i meter, och ett djup i meter.

Lägg sedan till metoden `GetArea()` i klassen, som returnerar rummets area (dess bredd * dess djup).

Skapa sedan några rum i ditt huvudprogram och verifiera att klassen fungerar som den ska, t.ex.:

```cs
Room kitchen = new Room{Name="Köket", Width=6, Depth=5};
Room bathroom = new Room{Name="Badrum", Width=3, Depth=3};

Console.WriteLine($"{kitchen.Name} har ytan {kitchen.GetArea()}.");
```
:::

::: exercise 4.2
Alla rum som finns ligger på ett visst våningsplan. Ett våningsplan innehåller alltså flera rum, och den ska även innehålla sitt namn (t.ex. `entreplanet`, `källaren`, `övervåning`, etc.). Implementera klassen `FloorPlan`. Använd en lista för att komma ihåg alla rummen som finns på våningsplanet. Listan ska vara tom till en början.

Lägg sedan till metoden `AddRoom(Room)` i klassen, som lägger till rummet den tar emot i listan.

Lägg sedan till metoden `GetArea()` i klassen, som beräknar och returnerar summan av arean av alla rum i våningsplanet.

Skapa sedan ett nytt våningsplan i ditt huvudprogram och verifiera att klassen fungerar som den ska, t.ex.:

```cs
FloorPlan groundFloor = new FloorPlan{Name="Entreplan"};

groundFloor.AddRoom(new Room{Name="Köket", Width=6, Depth=5});
groundFloor.AddRoom(new Room{Name="Badrum", Width=3, Depth=3});

Console.WriteLine($"{groundFloor.Name} har ytan {groundFloor.GetArea()}.");
```
:::

::: exercise 4.3
Precis som ett våningsplan består av flera rum, så består ett hus av ett eller flera våningsplan. Skapa klassen `House`, som representerar ett hus med våningsplan (potentiellt flera). Spara ner våningsplanen i en lista i huset som är tom till en början.

Lägg sedan till metoden `AddFloorPlan(FloorPlan)`, som lägger till det mottagna våningsplanet i listan.

Lägg sedan till metoden `GetArea()` i klassen `House`, som beräknar och returnerar summan av alla våningsplans area.
:::

::: exercise 4.4
Nu har vi skapat en bra modell över strukturen på ett hus:

```
Hus --"består av flera"--> Våning --"består av flera"--> Rum
```

Vi har även sett hur vi kan lägga till metoder i klasserna för att göra beräkningar med vår modell. Låt oss nu lägga till några fler metoder för att göra fler beräkningar, och se hur vi bäst kan implementera dem.

Lägg till metoden `House.WriteAllRoomNamesToConsole()`, som ska skriva ut namnet på alla rum i huset i konsollen. MEN, all denna funktionalitet bör inte implementeras direkt i den här metoden. `House`-klassen bör istället be alla sina `FloorPlan` att de i sin tur ska skriva ut namnet på alla deras rum, så du bör lägga till en metod i `FloorPlan`-klassen som gör just det, och som `House`-klassen kan anropa.

På liknande vis kan man tänka sig att `Room`-klassen har en metod som heter `WriteNameToConsole()`, och som anropas av `FloorPlan`-klassen.

Vi vill alltså att varje klass bara arbetar med de objekt den har på sin "egna nivå", och inte går och arbetar med dess objekts sub-objekt.
:::

::: exercise 4.5
Lägg till metoden `House.ContainsRoom(roomName)`, som kollar ifall huset innehåller ett rum med det givna namnet. Metoden ska alltså returnera `true` eller `false`. I denna metod bör du anropa en ny metod du implementerar i `FloorPlan`-klassen och som kollar ifall våningsplanet innehåller ett rum med ett sådant namn. 

På liknande vis kan man även tänka sig att `Room`-klassen har en metod som heter `HasName(name)`, och som returnerar `true` eller `false`.
:::

::: exercise 4.6
Om man ska bjuda hem många gäster så vill man nog sitta och prata med dem i det största rummet i huset. Implementera därförmetoden `House.GetBiggestRoom()`, som returnerar det `Room`-objekt som har störst area, så man lätt kan ta reda på vilket rum det är.

Och, precis som förut, så borde du nog lägga till någon mer lämplig metod i en annan klass för att lägga till denna funktionalitet på bästa sätt.
:::


## Lektion 5. Klasser (konstruktör)
Återigen ska vi öva på att implementera en klass. Men innan dess så ska vi gå igenom vad en konstruktör är.

---

När man skapar en ny instans av en klass så kan man ofta tilldela variablerna i klassen sina värden direkt. Exempel:

```cs
// Person.cs
class Person{
	public string FirstName;
	public int Age;
}
```
```cs
// Program.cs
Person kalle = new Person{FirstName="Kalle", Age=12};
```

Men ibland vill man initiera någon variabel utifrån en beräkning som behöver göras. Man kanske t.ex. vill att användaren ska ange personens för- och efternamn separat, men vi vill även spara ner dem båda tillsammans i en och samma strängvariabel i klassen som vi kallar för `FullName`.

```cs
// Person.cs
class Person{
	public string FirstName;
	public string LastName;
	public string FullName;
}
```
```cs
// Program.cs
Person kalle = new Person{FirstName="Kalle", LastName="Andersson"};
// Vi vill FullName beräknas automatiskt.
```

För att åstadkomma detta så kan vi lägga till en speciell metod i klassen som heter konstruktör (constructor). Det är en metod som har samma namn som klassen (och inget returvärde). Den anropas automatiskt åt oss så snart vi skapar en ny instans av klassen, och då kan vi även lägga till parenteser efter klassnamnet och skicka med argument till konstruktören.

```cs
// Person.cs
class Person{
	
	public string FirstName;
	public string LastName;
	public string FullName;
	
	public Person(string firstName, string lastName){
		FirstName = firstName;
		LastName = lastName;
		FullName = $"{firstName} {lastName}";
	}
	
}
```
```cs
// Program.cs
Person kalle = new Person("Kalle", "Andersson");

Console.WriteLine(kalle.FullName); // Kalle Andersson
```

---

::: exercise 5.1

Klassen ni ska skapa den här lekitonen ska representera ett "Gissa numret"-spel. När man spelar spelet i konsollen så kan det se ut så här:

```
Jag tänker på ett heltal mellan 0 och 100. Gissa vilket!
Ange gissning: 25
Det är för lågt.
Ange gissning: 50
Det är för högt.
Ange gissning: 30
Det är för högt.
Ange gissning: 28
Det är rätt! Du behövde 4 gissningar.
```

Ni kommer inte få några hintar om hur ni implementerar den här klassen, men ni bör implementera den på ett sådant sätt så att den kan användas ihop med koden nedan för att spela spelet. Genom att studera koden nedan så kan ni alltså få hintar om vilka variabler och metoder er klass behöver innehålla, och hur metoderna bör fungera.

```cs

GuessNumberGame game = new GuessNumberGame(0, 100);

Console.WriteLine($"Jag tänker på ett heltal mellan {game.Min} och {game.Max}. Gissa vilket!");

while(!game.HasGuessedCorrect){
	
	Console.Write("Ange gissning: ");
	int guess = Convert.ToInt32(Console.ReadLine());
	
	string result = game.ProcessGuess(guess);
	
	if(result == "correct")
	{
		Console.WriteLine($"Det är rätt! Du behövde {game.NumberOfGuesses} gissningar.");
	}
	else if(result == "too low")
	{
		Console.WriteLine("Det är för lågt.");
	}
	else
	{
		Console.WriteLine("Det är för högt.");
	}
	
}
```

Om du behöver hjälp med hur man genererar ett slumpat heltal inom ett visst intervall, se sidan [Generate a random integer in C#](https://sentry.io/answers/generate-a-random-integer-in-csharp/).

:::

::: exercise 5.2
Ändra koden så att när spelet är slut så får spelaren välja om denne vill spela igen eller ej. Ta även och skapa en ny klass som representerar en highscore-tavla i spelet, och lägg till spelarens resultat (antal gissningar) i den efter varje spelomgång, och visa hela highscore-tavlan i slutet av varje spelomgång.
:::

::: exercise 5.3

Läs på om konstruktörer på [W3Schools](https://www.w3schools.com/cs/cs_constructors.php).

:::



## Lektion 6. Catch-up
Vi repeterar och går igenom några exempellösningar, och eleverna har chans att göra klart övningar de inte är klara med.

::: tip
De elever som är klara med alla övningar hittills får börja jobba på ett eget programmeringsprojekt av vilket slag de vill.
:::




## Lektion 7. Klasser (inkapsling & properties)
För att få så bra kod som möjligt när man använder objektorienterad programmering så vill man att en klass i så stor utsträckning som möjligt inte avslöjar sina implementationsdetaljer. Vi kommer återkomma till detta snart, men först ett litet enklare exempel som visar fördelarna med detta när det kommer till funktioner (enklare att förklara).

Ponera att en programmerare har implementerat följande funktion för att beräkna summan av heltalen mellan 0 och ett annat tal:

```cs
// Beräknar 0 + 1 + 2 + ... + lastInt.
int getSum(int lastInt)
{
	
	int sum = 0;
	
	for(int i=0; i<=lastInt; i++)
	{
		sum += i;
	}
	
	return sum;
	
}
```

Andra programmerare som vill använda den här funktionen behöver inte förstå hur den har blivit implementerad, utan de behöver bara lära sig hur man anropar den, t.ex.:

```cs
Console.WriteLine($"Summan av heltalen mellan 0 och 5 är {getSum(5)}.")
```

Så även om funktionen är svår att implementera (med loop och allt det) så är den väldigt enkelt att använda. Det här är något vi vill ska gälla för våra klasser också; de ska vara enkla att använda även när de är svårare att implementera.

Om vi tar funktionen `getSum()` som exempel igen så vill vi även kunna ändra implementationen av funktionen i framtiden utan att de som nu använder funktionen behöver ändra sitt anrop till den i framtiden. I framtiden kanske vi upptäcker att summan mellan heltalen mellan 0 och ett annat tal kan beräknas på ett mycket effektivare sätt, t.ex.:

```cs
int getSum(int lastInt)
{
	return lastInt * (lastInt + 1) / 2;
}
```

Så länge vi inte ändrar:

* Namnet på funktionen
* Returtypen på funktionen
* Parametrarna (antal och typ)

Så kan vi göra den här typen av optimeringar i funktioner utan att resten av kodbasen påverkas. Perfekt! Och detta är något vi vill eftersträva när det kommer till klasser också.

För att uppnå detta när det kommer till klasser så brukar man tillämpa följande regler:

* Alla instansvariabler i klassen markerar vi som `private` istället för `public`. `private` gör att kompilatorn bara tillåter konstruktören/metoderna i klassen att använda dem; de som använder vår klass kan inte komma åt dem utifrån.
* De som använder klassen kan bara arbeta med klassen genom att anropa de konstruktörer/metoder som är `public`.

Här är ett enkelt exempel:

```cs
// Person.cs
class Person
{
	
	// Dessa variabler är private, så vi kan bara
	// komma åt dem i konstruktören och metoder
	// i den här klassen.
	private string firstName;
	private string lastName;
	
	// Här har vi en public konstruktör som kan
	// användas av andra för att skapa nya
	// instanser av klassen.
	public Person(string fName, string lName)
	{
		firstName = fName;
		lastName = lName;
	}
	
	// Här har vi public metoder som andra kan
	// anropa för att arbeta med instanserna av
	// klassen.
	public string GetFirstName()
	{
		return firstName;
	}
	
	public string GetLastName()
	{
		return lastName;
	}
	
	public string GetFullName()
	{
		return $"{firstName} {lastName}";
	}
	
}
```
```cs
Person kalle = new Person("Kalle", "Andersson");

// Det här skulle kompilatorn klaga på (för firstName är
// private, så vi kan inte komma åt den utifrån klassen):
// kalle.firstName

// Det här är inga problem (för GetFullName() är
// public, så vi kan komma åt den utifrån klassen):
Console.WriteLine($"Hans fullständiga namn är {kalle.GetFullName()}.")
```

::: exercise 7.1
Skapa en klass som representerar en film. Du får själv välja vad för information som ska sparas ner om filmen (titel, längd, category, etc.). Använd `private` variabler i klassen för att representera den här informationen. Lägg sedan till en `public` konstruktör som kan användas för att skapa nya instanser av klassen, och några `public` metoder för att arbeta med instanser av klassen (t.ex. `WriteIntoToConsole()`).

Skapa sedan några nya instanser av klassen och anropa någon `public` metod på dem för att verifiera att klassen fungerar som den ska.
:::

::: exercise 7.2
Nedan är en klass används för att arbeta med en samling heltal. Den innehåller en lista som kommer ihåg alla heltal som har blivit tillagda, och sedan två metoder som beräknar summan av talen i listan respektive hur många talen i listan är.

```cs
// IntGroup.cs
class IntGroup
{
	
	private List<int> ints;
	
	public IntGroup()
	{
		ints = new List<int>();
	}
	
	public void Add(int intToAdd)
	{
		ints.Add(intToAdd);
	}
	
	public int GetSum()
	{
		
		int sum = 0;
		
		foreach(int i in ints)
		{
			sum += i;
		}
		
		return sum;
		
	}
	
	public int GetCount()
	{
		return ints.Count;
	}
	
}
```

<br>

```cs
// Program.cs
IntGroup intGroup = new IntGroup();
intGroup.Add(4);
intGroup.Add(2);
intGroup.Add(6);
Console.WriteLine($"Summan är {intGroup.GetSum()}, antalet är {intGroup.GetCount()}.");
Console.WriteLine($"Summan är {intGroup.GetSum()}, antalet är {intGroup.GetCount()}.");
Console.WriteLine($"Summan är {intGroup.GetSum()}, antalet är {intGroup.GetCount()}.");
```

Ett litet problem är att varje gång `GetSum()` anropas så beräknas hela summan ut på nytt. Innehåller `IntGroup` miljontals tal så blir detta väldigt ineffektivt.

Istället för att använda en `List<int>` i klassen för att hålla kolla på vilka nummer som ingår så kan man istället använda en `sum`- och `count`-variabel som ändras direkt när `Add()` anropas.

Tack vare att de som använder klassen aldrig använder den där `ints`-variabeln i klassen direkt (för den är `private`) så kan vi göra en sån här ändring i klassens implementation nu i efterhand, och den kod som redan finns och som använder sig av klassen kommer fortsätta fungera på samma sätt som förut (men nu lite snabbare efter vår optimering av klassen).

Ändra implementationen av klassen enligt beskrivningen ovan så att den optimeras lite.

:::

I en klass är det alltså väldigt vanligt att man gör något i stil med detta:

```cs
class Person
{
	
	// Private instansvariabel.
	private string firstName;
	
	// Public konstruktör som tilldelar instansvariabeln sitt värde.
	public Person(string fName)
	{
		firstName = fName;
	}
	
	// Public metod som returnerar värdet på instansvariabeln.
	public string GetName()
	{
		return firstName;
	}
	
	// Public metod som tilldelar instansvariabeln ett nytt värde.
	public void setName(fName)
	{
		firstName = fName;
	}
	
}
```

Detta är väldigt mycket kod att skriva bara för att behålla möjligheten att kunna ändra implementationen av klassen i framtiden. För att råda bot på detta så har C# något som de kallar för properties vi kan använda istället, som gör vår kod mycket kortare:

```cs
class Person
{
	
	public string FirstName { get; set; }
	
}
```

Det ser nu ut som att vi har en instansvariabel i klassen som heter `FirstName`, och den kan användas som en vanlig instansvariabel, men internt har C# i bakgrunden faktiskt skapat en `private` instansvariabel med tillhörande `public set()`- och `public get()`-metoder, och dessa metoder anropas varje gång som man försöker komma åt variabeln eller tilldela den ett nytt värde:

```cs
// Vad C# TYP skriver om vår ovanstående klass till.
class Person
{
	
	private string firstName;
	
	// Denna anropas när man skriver aPersonObject.FirstName
	public string GetFirstName()
	{
		return firstName;
	}
	
	// Denna anropas när man skriver aPersonObject.FirstName = "Alice"
	public void SetFirstName(string fName)
	{
		firstName = fName;
	}
	
}
```

Så genom att använda properties så behöver vi inte skriva så mycket kod själva, och vi har fortfarande möjlighet att i framtiden ändra implementationen av de `get()` och `set()`-metoder som kompilatorn generar åt oss om vi vill.

::: exercise 7.3

Läs på om OOP på W3Schools:

* [Access Modifiers](https://www.w3schools.com/cs/cs_access_modifiers.php)
* [Properties](https://www.w3schools.com/cs/cs_properties.php)

:::


::: exercise 7.4
Den här övningen är kanske lite svårare än de andra.

Byt ut implementationen på samma sätt som du gjorde innan för att snabba upp uträkningen av summan och antal nummer som lagts till i klassen nedan, men den här gången används properties istället för metoder för summan och antal.

```cs
// IntGroup.cs
class IntGroup
{
	
	private List<int> ints;
	
	public int Sum
	{
		get {
			
			int sum = 0;
			
			foreach(int i in ints)
			{
				sum += i;
			}
			
			return sum;
			
		}
	}
	
	public int Count
	{
		get {
			return ints.Count;
		}
	}
	
	public IntGroup(){
		ints = new List<int>();
	}
	
	public void Add(int intToAdd)
	{
		ints.Add(intToAdd);
	}
	
}
```

<br>

```cs
// Program.cs
IntGroup intGroup = new IntGroup();
intGroup.Add(4);
intGroup.Add(2);
intGroup.Add(6);
Console.WriteLine($"Summan är {intGroup.Sum}, antalet är {intGroup.Count}.");
Console.WriteLine($"Summan är {intGroup.Sum}, antalet är {intGroup.Count}.");
Console.WriteLine($"Summan är {intGroup.Sum}, antalet är {intGroup.Count}.");
```

:::

::: exercise 7.5

Om du är klar med alla uppgifter och redovisat din lösning på den sista uppgiften för läraren så får du arbeta med vilket programmeringsprojekt du vill.

:::




## Lektion 8. Klasser (tärningsövningar)
* Namnkonvention och kodstil
* Miniprojekt: tärningsspel

```cs
// Exempel på den namnkonvention
// och kodstil som används i C#.
class Person
{
	
	public int Age;
	private string _name;
	
	public Person(int theAge, string theName)
	{
		Age = theAge;
		_name = theName;
	}
	
	private string GetType()
	{
		
		string type;
		
		if(Age < 18)
		{
			type = "Barnet";
		}
		else
		{
			type = "Personen";
		}
		
		return type;
		
	}
	
	public void WriteInfoToConsole()
	{
		Console.WriteLine($"{GetType()} {_name} är {Age} år gammal.");
	}
	
}
```

Den här lektionen introducerar vi inget nytt, utan vi övar på att använda det vi har lärt oss hittils i ett litet projekt (som kommer sträcka sig över flera lektioner) som leder oss till att bygga ett Yatzy-liknande spel (som spelas i konsollen) i slutändan. Nu får du även träna på att både designa och implementera dina klasser helt själv, men fråga gärna om hjälp när du är osäker eller feedback när du är klar.

Om du vill försöka implementera ett Yatzy-liknande spel helt själv så är det OK. Annars kan du göra övningarna nedan för att bli guidad i rätt riktning.

::: exercise 8.1
Skapa en klass som representerar en tärning. Den som skapar tärningen ska få bestämma hur många sidor den ska ha. Med en tärning ska man åtminstone kunna:

* Kasta.
* Ta reda på hur många prickar (vilket värde) tärningen för stunden har.

Använd sedan tärningen i ditt huvudprogram och verifiera att den fungerar som den ska.

Om du behöver hjälp med hur man genererar ett slumpat heltal inom ett visst intervall, se sidan [Generate a random integer in C#](https://sentry.io/answers/generate-a-random-integer-in-csharp/).
:::

::: exercise 8.2
Yatzy är ett roligt spel. Om man ska spela Yatzy så behöver man ha en samling tärningar. Låt oss representera en sådan samling med en klass! Den som skapar en ny instans av klassen ska kunna indikera hur många tärningar som ska finnas i klass-instansen. Man ska även kunna kasta alla tärningar i klassen. Och kanske är det bra om man även kan kasta bara ett urval av tärningar på något vis? Så man kan indikera vilka tärningar man vill kunna kasta om?

Försök att tänka igenom olika sätt man skulle kunna implementera detta på, och försök sedan implementera ett av sätten. När du är klar så bör man "enkelt" kunna skapa en ny samling tärningar och kasta om dem som man vill. Använd klassen lite i ditt huvudprogram för att verifiera att den fungerar som den ska.
:::

::: exercise 8.3
Den här övningen är en väldigt enkel version av ett Yatzy-spel; det är ett steg på vägen dit.

Använd dina klasser för att försöka implementera ett litet spel. Spelet går ut på att användaren ska kunna kasta 5 tärningar, och spelaren ska försöka få alla sexor på så få kast som möjligt. Vid varje kast så ska spelaren själv få välja vilka tärningar den vill behålla. Det behöver även finnas en räknare som håller koll på hur många kast spelaren har gjort. Och någonstans behöver vi ha kod som kollar ifall alla tärningar har värdet 6, så vi vet när spelaren har vunnit.
:::

::: exercise 8.4
Den här övningen är lite svårare än de föregående övningarna.

Ett spel där man bara kan få alla sexor på så få kast som möjligt är lite för enkelt för att vara roligt. Låt oss därför försöka implementera ett riktigt Yatzy-spel istället (för en spelare). I alla fall första halvan av det, där man ska försöka få så många ettor, tvåor, treor, fyror, femmor och sexor som möjligt på 3 kast respektive.

Nu behöver du kanske skapa en ny klass som repsenterar hela Yatzy-spelet, där du håller koll på vilka av ettorna, tvåorna, treorna, fyrorna, femmorna och sexorna spelaren har fått hittills, och hur många av varje, och hur många kast spelaren har gjort, etc.
:::

::: exercise 8.5
Den här övningen är troligtvis rätt så svår.

Att spela Yatzy själv är OK, men det är ännu roligare att spela det ihop med någon annan! Lägg därför till stöd för att spela fler spelare. Antingen hårdkoda in ett visst antal spelare som kan spela spelet, eller var lite mer dynamiskt genom att fråga användaren i början hur många som vill spela spelet (och eventuellt deras namn också).

Du kan behöva introducera en klass för att hålla koll på hur många poäng respektive spelare har. I verkligheten har man vanligtvis en poängtabell/scoreboard när man spelar Yatzy, så det kan vara bra att ha en klass som representerar detta i ditt spel också.
:::

::: exercise 8.6
Den här övningen är troligtvis rätt så svår.

Lägg till "andra halvan" av Yatzy-spelet, där man kan få par, tvåpar, triss, fyrtal, Yatzy, kåk, stege och chans. 
:::

::: exercise 8.7
Den här övningen är mycket svår ^^'

Lägg till en datorspelare som gör sina egna val. I en första implementation så kan datorn göra slumpmässiga val. Om du får det att fungera så kan du sedan försöka få datorn att göra lite smartare val, t.ex. först försöka få så många ettor som möjligt, sedan få så många tvåor som möjligt, etc.

En datorpelare kan man spendera nästan oändligt med tid på att försöka få så bra som möjligt, så om du lyckas nå den här övningen innan vi går vidare i kursen, så se till att du inte lägger ner alltför mycket tid på den ^^
:::




## Lektion 9. Klasser (tärningsövningar)
Först en rättelse angående namnkonvention för `private`, sedan en genomgång med exempellösningar för de som vill. Efter det fortsätter vi att arbeta med övningarna från föregående lektion. De SU-elever som vill får arbeta med sina spelprojekt.




## Lektion 10. Klasser (tärningsövningar)
Först en genomgång med exempellösningar för de som vill. Efter det fortsätter vi att arbeta med tärningsövningarna från föregående lektion. De SU-elever som vill får arbeta med sina spelprojekt.




## Lektion 11. Catch-up
* Bestämma provdatum (OOP, klasser, nästa fredag?)
* Lösa uppgifter tillsammans?
* Övningar från föregående lektioner

<table style="text-align: center;">
<thead>
  <tr>
    <th style="text-align: center;">Vecka</th>
    <th style="text-align: center;">Tvåor</th>
    <th style="text-align: center;">Treor</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>39</td>
    <td colspan="2">Denna veckan</td>
  </tr>
  <tr>
    <td>40</td>
    <td>Eng 6 (Business Report)</td>
    <td></td>
  </tr>
  <tr>
    <td>41</td>
    <td>Fy1: Kinematik och mekanik</td>
    <td>Webb2 AW: deadline miniprojekt</td>
  </tr>
  <tr>
    <td>42</td>
    <td></td>
    <td>MA5: Bevis och talteori</td>
  </tr>
  <tr>
    <td>43</td>
    <td>Ma3c: Algebra och funktioner</td>
    <td>
			Religion: Flervalstest (abrahamitiska religionerna)<br>
			Ma4: Trigonometri (fre)
		</td>
  </tr>
  <tr>
    <td>44</td>
    <td colspan="2">Höstlov</td>
  </tr>
</tbody>
</table>




## Provinformation
På fredag tredje oktober har vi ett prov som täcker in grunderna i objektorienterad programmering (det som övningarna hittills i kursen har handlat om, främst skapandet av klasser och objekt). Listor kan behöva användas för att lösa vissa uppgifter.

Provet kommer ni få skriva i Safe Exam Browser. Provet kommer finnas som en Google Classroom-inlämningsuppgift med ett Google-dokument med frågor, och ni skriver era svar direkt i Google-dokumentet. Ni kommer kunna använda [dotnetfiddle.net](https://dotnetfiddle.net/) för att skriva och köra C#-kod, vilket ni sedan får kopiera till Google-dokumentet som svar.




## Lektion 12. Prov 1
Prov enligt instruktionerna som finns på inlämningsuppgiften [EXAM: Prov Klasser & Objekt](https://classroom.google.com/c/Nzk5Mjk2ODczNjE2/a/MjM1NTk2MDU5Njha/details) på Google Classroom.




## Lektion 13. Prov 1 genomgång
* Genomgång av provet.
	* Vad som testades:
		* Skapa klass med namn.
		* Lägga till instansvariabler i klass.
		* Lägga till och använda konstruktör i klass.
		* Lägga till och använda metoder i klass.
		* Använda synlighet (`public`/`private`) rätt.
		* Använda komposition.
	* Att med oss:
		* 7 av 18 elever kan inte använda konstruktör.
		* 9 av 18 elever använder inte synlighet korrekt.
		* 9 av 18 elever kunde inte lösa uppgift 2.
		* 9 av 18 elever kunde inte lösa uppgift 3.

::: tip Prov 1 Uppgift 1

Skapa en klass som representerar en bok. Klassen ska ha namnet `Book` och ska innehålla följande information:

* Bokens titel
* Bokens utgivningsår
* Bokens författarnamn

Det ska även finnas en metod i klassen en kan anropa för att skriva ut all information om boken. Den metoden ska heta `WriteToConsole()`.

När du skapat klassen så borde den kunna användas på följande vis:

```cs
Book hp1 = new Book(
   "Harry Potter och de vises sten",
   1997,
   "J.K. Rowling"
);
hp1.WriteToConsole();
```

Och den ska producera följande output:

```
Harry Potter och de vises sten skrevs av J.K. Rowling och gavs ut år 1997.
```
Kopiera och klistra in din kod här nedanför som svar:

```cs
class Book
{
	
	private string title;
	private int yearPublished;
	private string authorName;
	
	public Book(string theTitle, int theYearPublished, string theAuthorName)
	{
		title = theTitle;
		yearPublished = theYearPublished;
		authorName = theAuthorName;
	}
	
	public void WriteToConsole()
	{
		Console.WriteLine($"{title} skrevs av {authorName} och gavs ut år {yearPublished}.");
	}
	
}
```
:::

::: tip Prov 1 Uppgift 2

Skapa en klass som representerar en hink med vatten. När man skapar en ny instans av klassen så ska man få bestämma hur många liter vatten hink-instansen ska kunna innehålla som mest. Initialt ska hinken vara tom.

Man ska sedan kunna anropa:

* En metod i klassen för att fylla på hinken med mer vatten. Antal liter man fyller på med ska skickas med som argument. Om hinken skulle bli överfull så ska du inte fylla på med något, utan bara returnera `false`. Annars ska hinken fyllas på med det angivna antalet liter vatten, och metoden ska sedan returnera `true`.
* En metod i klassen för att ta vatten ur hinken. Antal liter man vill ta ur skickar man med som argument. Om hinken inte innehåller så många liter vatten för stunden så tar man ur den mängd vatten som finns kvar, annars tar man ut den mängd vatten som skickas med som argument. Metoden ska returnera den mängd vatten som togs ur hinken.

Kopiera och klistra in din kod här nedanför som svar:

```cs
class Bucket
{
	
	private int maxLitres;
	private int currentLitres;
	
	public Bucket(int theMaxLitres)
	{
		maxLitres = theMaxLitres;
		currentLitres = 0;
	}
	
	public bool Refill(int litresToRefill)
	{
		
		int newCurrentLitres = currentLitres + litresToRefill;
		
		if(maxLitres < newCurrentLitres)
		{
			return false;
		}
		
		currentLitres = newCurrentLitres;
		return true;
		
	}
	
	public int Tap(int litresToTap)
	{
		
		if(currentLitres < litresToTap)
		{
			litresToTap = currentLitres;
		}
		
		currentLitres -= litresToTap;
		return litresToTap;
		
	}
	
}
```
:::

::: tip Prov 1 Uppgift 3

Skapa en klass som representerar en rektangel. Den som skapar en ny instans av klassen ska få bestämma vad bredden och höjden på rektangeln är. Klassen ska även ha en metod man kan anropa för att få tillbaka rektangelns area (produkten av dess bredd och höjd).

Skapa sedan en klass som representerar en samling rektanglar. När man skapar en ny instans av klassen så ska samlingen vara tom. I klassen ska det finnas:

* En metod man kan anropa för att lägga till en rektangelinstans i klassen.
* En metod man kan anropa för att få tillbaka den rektangel som har den största arean i samlingen.

När du skapat klasserna så borde man kunna använda dem på följande vis:

```cs
RectangleCollection collection = new RectangleCollection();
collection.Add(new Rectangle(2, 3));
collection.Add(new Rectangle(5, 2));
collection.Add(new Rectangle(1, 7));

Rectangle biggest = collection.GetBiggest();
```

Hint: `List`-klassen finns i namnrymden `System.Collections.Generic`.

Kopiera och klistra in din kod här nedanför som svar:

```cs
class Rectangle
{
	
	private int width;
	private int height;
	
	public Rectangle(int theWidth, int theHeight)
	{
		width = theWidth;
		height = theHeight;
	}
	
	public int GetArea()
	{
		return width * height;
	}
	
}

class RectangleCollection
{
	
	private List<Rectangle> rectangles;
	
	public RectangleCollection()
	{
		rectangles = new List<Rectangle>();
	}
	
	public void Add(Rectangle rectangle)
	{
		rectangles.Add(rectangle);
	}
	
	public Rectangle GetBiggest()
	{
		
		// Let us assume there's always atlest one rectangle.
		Rectangle biggest = rectangles[0];
		
		foreach(var rectangle in rectangles)
		{
			if(biggest.GetArea() < renctangle.GetArea())
			{
				biggest = rectangle;
			}
		}
		
		return biggest;
		
	}
	
}
```
:::

::: exercise 13.1
Skapa en klass som representerar ett kassaskåp. Den som skapar en ny instans av klassen ska få bestämma vad den rätta koden till kassaskåpet ska vara (ett heltal), och vad för hemligt meddelande den ska innehålla (en sträng). Klassen ska även hålla koll på ifall skåpet är upplåst eller ej, och initialt ska skåpet vara låst.

Det ska finnas:

* En metod man kan anropa för att kolla om kassaskåpet är upplåst eller ej.
* En metod man kan anropa för att hämta ut det hemliga meddelande från kassaskåpet, men om kassaskåpet är stängt så ska den här metoden bara returnera en tom sträng istället för det hemliga meddelandet.
* En metod man kan anropa för att stänga kassaskåpet.
* En metod man kan anropa för att byta kod på kassaskåpet, men det ska bara bytas om kassaskåpet är öppet.

Exempelanvänding:

```cs
Safe mySafe = new Safe(1234, "Mina hemligheter.");

Console.WriteLine(mySafe.GetMessage()); // ""

mySafe.TryToOpen(3333);

if(mySafe.IsOpen())
{
	Console.WriteLine("Det är öppet!");
}
else
{
	Console.WriteLine("3333 är fel kod.");
}

mySafe.TryToOpen(1234);

Console.WriteLine($"Det hemliga meddelandet är ${mySafe.GetMessage()}.");

mySafe.Close();

if(mySafe.IsOpen())
{
	Console.WriteLine("Det är öppet!");
}
else
{
	Console.WriteLine("Det är stängt.");
}

mySafe.TryToOpen(1234);

mySafe.SetCode(789);
mySafe.Close();

mySafe.TryToOpen(1234);

if(mySafe.IsOpen())
{
	Console.WriteLine("Det är öppet!");
}
else
{
	Console.WriteLine("1234 är fel kod.");
}
```

:::



## Lektion 14. Arv
Arv är ett sätt att återanvända kod på. En klass kan ärva från en annan klass, och då får den alla metoder och instansvariabler som föräldraklassen innehåller.

::: example

```cs
EnglishPerson alice = new EnglishPerson("Alice");
SwedishPerson bob = new SwedishPerson("Bob");

alice.SayHello(); // Hello, my name is Alice, nice to meet you!
bob.SayHello(); // Hej, mitt namn är Bob, trevligt att träffas!
```

<br>

```cs
// Klass Person är en vanlig klass.
class Person
{
	
	private string _name;
	
	public Person(string name)
	{
		_name = name;
	}
	
	public string GetName()
	{
		return _name;
	}
	
}
```

<br>

```cs
// Klass EnglishPerson ärver från klass Person.
class EnglishPerson : Person
{
	
	// Och får automatiskt allt som ligger i Person-klassen.
	// I det här fallet både _name and GetName().
	// Dock kan den inte direkt använda de som är private.
	
	// : base() är syntaxen för att anropa konstruktören
	// i klassen som man ärver ifrån (Person i det här fallet).
	public EnglishPerson(string name) : base(name)
	{
		
	}
	
	// Och här lägger vi till en metod.
	public void SayHello()
	{
		Console.WriteLine($"Hello, my name is {GetName()}, nice to meet you!");
	}
	
}
```

<br>

```cs
class SwedishPerson : Person
{
	
	public SwedishPerson(string name) : base(name)
	{
		
	}
	
	public void SayHello()
	{
		Console.WriteLine($"Hej, mitt namn är {GetName()}, trevligt att träffas!");
	}
	
}
```
:::

::: example 
Ett exempel på när arv är lämpligt att använda är t.ex. i ett 2D Mario-spel. Där skulle man typiskt använda:

* En klass för att representera Mario.
* En klass för att representera en Goomba.
* En klass för att representera en Koopa.
* Etc.

Alla dessa behöver innehålla en X- och Y-koordinat för att hålla koll på vart dem befinner sig i 2D-världen. Men istället för att lägga till dessa i varje enskild klass så kan man skapa en generell `Thing`-klass som innehåller X- och Y-koordinaten, och sedan ärver Mario-klassen, Goomba-klassen och Koopa-klassen ifrån `Thing`-klassen, och innehåller alltså därmed automatiskt en X- och Y-koordinat!

![Super Mario Bros.](/super-mario-bros.avif)

![UML-diagram](https://mermaid.ink/img/pako:eNqVU12L2zAQ_Cti4SDHxcGOVTsRfeqlHP0IvbaBg8MvaryxRW3JyPIlqS__vfJH3YSkhPpB7MyuZkZGqmGtYgQGjuNE0giTISORbFEk1xkvy4XgieZ5g29uyJILSe4bvm-TVSpkQupIEvs5QhqyO6r3R_VWxCY9wimKJDUdcfeh_PKCOuNFYeWehElHnbBp1ttIHpoAHfX21XFsEC0UYQR3BmU8pOnoPs3dxyovRrc9WKoX_NY4njCfcXNKLNRWDsRC8-3ogvujKPDcvGX_eK80l-UG9aBlTyhXqhh1EfNmvWbzoFT-g58b9Xx9FPtq5AeNKD8pVVzS-9v7L813mVr_PJfr6PrK5q8VlkYo-Q-R0_YFMRhDjjrnIrb3t-1HYFLMMQJ7hyHGDa8yE4EdtqNVEXOD72NhlAa24VmJY-CVUd_3cj0Q3VR_5QdWqypJB1Rw-Wz_PzCjKwsT3QToam0PgPpeVdIA80IattPAatgB84OJS0PXnb3xKHWpP4Y9sBmdhH4Q-lM6m8491wsOY_jVqruT-dT1qefPg7lHp0FgN2Abf9k92fblHn4DiUM2Mw)
:::

I en klass som ärver ifrån en annan klass kan du använd nyckelordet `base` för att anropa en metod i klassen du ärver ifrån, t.ex. `base.MetodIFöräldraKlassen()`.

::: exercise 14.1
Den här övningen är en fortsättning på Övning 13.1. Gör klart den innan du börjar arbeta med denna.

I Övning 13.1 så skapade du en klass som representerar ett kassaskåp med ett lösenord. I den här klassen ska vi skapa en lite lyxigare version som har samma grundfunktionalitet, men som även innehåller en ytterliggare funktion, mer bestämt:

* Om man försökt öppna kassaskåpet med fel kod X gånger i rad så ska man inte kunna öppna kassaskåpet igen på Y minuter.

Vilket värde X och Y har ska inte hårdkodas, utan den som skapar en ny instans av den lyxigare kassaskåpsklassen ska få bestämma det.

Skapa den nya klassen genom att ärva från klassen du skapade i Övning 13.1. Se även till att ytterliggare lämplig logik implementeras, så som:

* Varje gång man stänger kassaskåpet så ska antal misslyckade öppningsförsök nollställas.

Exempelanvänding:

```cs
int correctCode = 1234;
int maxNumberOfTries = 3;
int lockedOutSeconds = 120;

SecuredSafe mySafe = new SecuredSafe(correctCode, maxNumberOfTries, lockedOutSeconds, "Mina hemligheter.");

mySafe.TryToOpen(3333); // Misslyckas.
mySafe.TryToOpen(3334); // Misslyckas.
mySafe.TryToOpen(3332); // Misslyckas, nu ska man inte kunna öppna på 2 minuter.
mySafe.TryToOpen(1234); // Misslyckas trots rätt kod.

// Om man kör koden nedan 121 sekunder senare så ska man kunna öppna med rätt kod igen.
mySafe.TryToOpen(1234); // Lyckas.

if(mySafe.IsOpen())
{
	Console.WriteLine("Det är öppet!");
}
else
{
	Console.WriteLine("Det är stängt.");
}
```

För att implementera denna klass korrekt så behöver ni även hålla koll på hur lång tid det tar mellan anropen. Ni kan använda `Thread.sleep(numberOfMilliseconds)` för att vänta ett visst antal millisekunder mellan anropen till `.TryToOpen()`, och ni kan använda `DateTimeOffset.UtcNow.ToUnixTimeSeconds()` för att få antal sekunder som gått sedan `970-01-01 00:00:00 UTC` när anropet till `DateTimeOffset.UtcNow.ToUnixTimeSeconds()` sker.

:::