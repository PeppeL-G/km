# Programmering 2 - Lektioner



## Snabblänkar




## Lektion 1, Repetition av Programmering 1
```cs
// Två slash för att skriva resten av raden som en kommentar.

/* Eller skriv "slash star" för starta kommentar,
   och "star slash" för att avsluta kommentar. */

// Skriv output.
Console.WriteLine("Denna sträng kommer visas på skärmen.");

// Skapa variabler med "var".
var myString = "Hej där!";

// Eller skapa variabler med explicit datatyp.
int year = 2020;

// Läs input.
Console.Write("Skriv något: ")
var enteredText = Console.ReadLine();

// Konvertera en sträng till ett heltal.
var myInt = Convert.ToInt32("123");

// Villkorligg exekvering.
if(500 < 123){
	Console.WriteLine("500 är mindre än 123.");
}else if(500 == 123){
	Console.WriteLine("500 är lika med 123.");
}else{
	Console.WriteLine("500 är större än 123");
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

// Skapa array.
string[] names = { "Alice", "Bob", "Claire" };

// Hämta värden från array.
var firstName = names[0];
var secondName = names[1];

// Loopa igenom alla värden i en array.
foreach(var name in names){
	Console.WriteLine(name);
}

// Skapa lista.
var numbers = new List<int>{ 4, 7, 10 };

// Skapa funktion.
void WriteName(){
	Console.WriteLine("James");
}

// Anropa funktion.
WriteName();

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
Ändra koden i `Program.cs` så att den skriver ut följande text istället:

```
Hej på dig!
```
:::

::: exercise 1.6
Ändra koden i `Program.cs` så att den skriver ut följande text istället:

```
Howdy!
How are you feeling today?
I hope you are feeling fine.
```
:::




## Kommande