# Programmering 1 - Lektioner



## Snabblänkar
* [W3Schools C# Pages](https://www.w3schools.com/cs/index.php)



## Lektion 1. Installera program
* Kursintroduktion
* Installera nödvändiga program
* Hello, World!
* Övningar


::: exercise 1.1
Ladda ner och installera [.NET 9.0 SDK](https://dotnet.microsoft.com/en-us/download). Det innehåller dels:

* En kompilator som kan kompilera C#-kod vi kommer skriva till instruktioner datorn kan exekvera
* En miljö som våra program kan köras i, där de har tillgång till bland annat ett standardbibliotek, input-/output-hantering, filåtkomst, etc.
:::

::: exercise 1.2
Ladda ner och installera [Visual Studio Code](https://code.visualstudio.com/) (VS Code). Det är en texteditor som är designad för att skriva, köra och debugga kod.

**TIPS**\
Under installationsprocessen, bocka för följande två alternativ:

* `Add "Open with Code" action to Windows Explorer file context menu`
* `Add "Open with Code" action to Windows Explorer directory context menu`

Genom att göra detta så kan du högerklicka på filer och mappar och sedan välja att öppna dem i Visual Studio Code.

:::

::: exercise 1.3
Ladda ner och installera `C# Dev Kit`-tillägget i VS Code:

1. Starta Visual Studio Code
2. Öppna `Extensions`-panelen
3. Sök efter `C#` i `Extensions`-panelen
4. Installera det extension som heter `C# Dev Kit` (`Official C# extension from Microsoft`).

Om du får ett felmeddelande efter att du har installerat tillägget, testa att stänga/avsluta Visual Studio Code och starta det sedan igen.

:::

::: exercise 1.4
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

::: exercise 1.5
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

::: exercise 1.7
Skapa ett nytt C#-program i samma mapp som du har öppet i Visual Studio Code. Upprepa helt enkelt stegen i Övning 1.4, men ge ditt program ett annat namn.

Ändra sedan koden i din nya `Program.cs`-fil så att den skriver ut följande när den kör (notera den blanka raden (rad 3), den ska finnas där):

```
Hejsan!
Hur mår du idag?

Jag hoppas du mår bra.
```

Träna på att hoppa mellan att köra ditt nya program och ditt gamla program (det är filen som för stunden är öppen i VS Code som körs när du trycker på `▷`-knappen).
:::

:::: exercise 1.8
Börja läs på om C# på [W3Schools C# Pages](https://www.w3schools.com/cs/index.php).

::: tip
Följande kod på W3Schools C# Pages:

```cs
using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
    }
  }
}
```

Är samma som:

```cs
Console.WriteLine("Hello World!");
```

Den senare är ett enklare sätt att skriva på och som introducerades i C# version 9, och W3Schools C# Pages skrevs tyvärr för en tidigare C#-version, så deras kod gör på det krånlgligare sättet.

::::



## Lektion 2. Output, Variabler, Input, Villkorssatser
```cs
// Två slash-tecken gör allt till höger
// om det på samma rad en kommentar.

// Använd Console.Write() för att skriva ut strängar
// i konsollen.
Console.Write("Hej");
Console.Write("På");
Console.Write("Dig!");

// Ofta använder man Console.WriteLine() istället,
// vilket även skriver ut ett radbyte i slutet.
Console.WriteLine("Hej");
Console.WriteLine("På");
Console.WriteLine("Dig!");

// Använd Console.WriteLine() utan någon
// sträng om du bara vill ha ett radbyte.
Console.WriteLine();
```

::: exercise 2.1
Ändra koden i `Program.cs` så att den skriver ut följande text istället:

```
Hej på dig!

Jag hoppas du är sugen på att lära dig mer programmering nu!
```
:::

```cs
// En variabel som innehåller en sträng skapas på detta vis.
string myName = "Alice";

// I strängar med $-tecknet framför så kan du använda
// {variabelnamn} för att sätta in värdet från en
// variabel i strängen.
Console.WriteLine($"Jag heter {myName}, och jag tycker att {myName} är ett vacker namn.");

// Du kan också skicka variabler direkt till funktioner
// så som Console.WriteLine().
Console.WriteLine(myName);
```

::: exercise 2.2
Ändra koden i `Program.cs` så att den skriver ut följande text istället:

```
A
A A
A A A
A A A A
```

Använd en variabel på ett smart sätt. Genom att ändra värdet i variabeln till något annat så ska man enkelt kunna få t.ex. följande utskrift istället:

```
B
B B
B B B
B B B B
```
:::

```cs
// Funktionen Console.ReadLine() kan användas för
// att be användaren mata in en text. Returvärdet
// blir den inmatade texten som en sträng.
Console.Write("Skriv ditt namn: ");

string enteredName = Console.ReadLine();

Console.WriteLine($"Hej {enteredName}, trevligt att träffas!");
```

::: exercise 2.3
Ändra koden i `Program.cs` så att den först ber användaren skriva in sin favoritfärg, och sedan skriver den ut den inmatade färgen på följande sätt (med `röd` som exempel):

```
Skriv in din favorifärg: röd

röd röd-röd röd-röd-röd
```
:::

::: exercise 2.4
Ändra koden i `Program.cs` så att den först ber användaren mata in sitt förnamn, och sedan ber användaren mata in sitt efternamn, och slutligen tar programmet och skriver ut följande (med `Axel` `Axelsson` som exempel):

```
Ditt förnamn: Axel
Ditt efternamn: Axelsson

Hej Axel, vilket fint förnamn du har!

Du är den ende Axel Axelsson jag känner.
```
:::

```cs
// En villkorssats kan användas för att köra kod
// endast när ett visst villkor är uppfyllt.
Console.Write("Skriv ditt namn: ");

string enteredName = Console.ReadLine();

// Två likamedtecken betyder att vi testar
// ifall de två har samma värde.
if(enteredName == "Alice")
{
  Consle.WriteLine("Alice är ett mycket fint namn!");
}

Console.WriteLine($"Hej {enteredName}, trevligt att träffas!");
```

```cs
Console.Write("Skriv ditt namn: ")

string enteredName = Console.ReadLine();

// Ett utropstecken följt av ett likamedtecken betyder
// att vi testar ifall de två har olika värden.
if(enteredName != "Alice")
{
  Consle.WriteLine("Ah, du heter inte Alice? Synd...");
}

Console.WriteLine($"Hej {enteredName}, trevligt att träffas!");
```

```cs
// En villkorssats kan följas upp med en else{ ... }
// som körs ifall villkoret inte är uppfyllt.
Console.Write("Skriv ditt namn: ")

string enteredName = Console.ReadLine();

if(enteredName == "Bob")
{
  Consle.WriteLine("Bob är ett mycket fint namn!");
}
else
{
  Console.WriteLine("Bob är alltså inte ditt namn. Stackare...");
}

Console.WriteLine($"Hej {enteredName}, trevligt att träffas!");
```

```cs
// En villkorssats kan följas upp med en eller flera
// else if(VILLKOR){ ... }
// Man kan alltid avsluta med en else{ ... } om man vill.
Console.Write("Skriv ditt namn: ")

string enteredName = Console.ReadLine();

if(enteredName == "Alice")
{
  Consle.WriteLine("Alice är ett mycket fint namn!");
}
else if(enteredName == "Bob")
{
  Console.WriteLine("Bob är ett vacker namn.");
}
else if(enteredName == "Claire")
{
  Console.WriteLine("Claire är ett snyggt namn.");
}
else
{
  Console.WriteLine("Du har ett normalt namn.");
}
```

::: exercise 2.5
Ändra koden i `Program.cs` så att den först ber användaren mata in ett lösenord. Du (programmeraren) får själv välja vad det korrekta lösenordet ska vara. Om användaren matar in det korrekta lösenordet så ska du visa ett hemligt meddelande för användaren (du får själv välja vilket). Om användaren matar in ett inkorrekta lösenord så ska du visa ett felmeddelande för användaren. Därefter ska programmet vara slut.
:::

::: exercise 2.6
Ändra koden i `Program.cs` så att ditt program innehåller 3 olika hemliga meddelanden, varje skyddat av ett eget lösenord. Om användaren skriver in lösenordet ett meddelande så ska det meddelandet visas, annars ska du visa ett meddelande som förklarar att ingen hemligt meddelande finns med det lösenordet.
:::

:::: exercise 2.7
Börja läs på om C# på [W3Schools C# Pages](https://www.w3schools.com/cs/index.php). Du kan läsa på till och med `C# Variables`.

::: tip
Följande kod på W3Schools C# Pages:

```cs
using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
    }
  }
}
```

Är samma som:

```cs
Console.WriteLine("Hello World!");
```

Den senare är ett enklare sätt att skriva på och som introducerades i C# version 9, och W3Schools C# Pages skrevs tyvärr för en tidigare C#-version, så deras kod gör på det krånlgligare sättet.

::::