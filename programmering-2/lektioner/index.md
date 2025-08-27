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

<!--

## Lektion X, OOP-grunder

::: exercise x.1

Skapa en klass som representerar en bil. En bil ska ha följande attribut:

* `regNumber` (t.ex."abc123")
* `color` (t.ex. "röd")
* `tankSize` (i liter, t.ex. 60)
* `currentTankSize` (i liter, t.ex. 50)

I ditt huvudprogram, skapa sedan 2 olika bil-instanser. Du får själv välja värde på attributen för dina bilar. Skriv sedan ut namnet på dina bilar.

:::

::: exercise x.2

I din bilklass, lägg till en metod som heter `WriteInfo()`. I den metoden ska du skriva ut all information om bilen på skärmen.

I ditt huvudprogram, anropa `WriteInfo()` på dina två bil-objekt.

:::

::: exercise x.3

I din bilklass, lägg till en metod som heter `isOutOfGas()`. Den ska returnera:

* `true`, om `currentTankSize` är `0`.
* `false`, annars.

I ditt huvudprogram, använd `isOutOfGas()` på en av dina bil-instanser som villkor i en villkorssats, och skriv antingen ut meddelandet `Vi kan åka!` eller `Soppatorsk!`

:::

::: exercise x.4

Det kan även vara bra att ha en metod man kan anropa för att tanka bilen full. Lägg därför till en metod som heter `refuel()`. Den ska göra bilen fulltankad. Efter att den här metoden har körts så ska alltså bilens `currentTankSize` ha samma värde som bilens `tankSize`.

I ditt huvudprogram, använd `refuel()` på en av dina bil-instanser för att tanka den full. Anropa sedan `WriteInfo()` och verifiera att bilen har blivit fulltankad.

:::

-->