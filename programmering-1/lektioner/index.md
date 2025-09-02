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

Den senare är ett enklare sätt att skriva på och som introducerades i C# version 9, och W3Schools C# Pages skrevs tyvärr för en tidigare C#-version, så deras kod gör på det krångligare sättet.

::::



## Lektion 2. Output, Variabler, Input
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

:::: exercise 2.5
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

Den senare är ett enklare sätt att skriva på och som introducerades i C# version 9, och W3Schools C# Pages skrevs tyvärr för en tidigare C#-version, så deras kod gör på det krångligare sättet.

::::



## Lektion 3. Villkor, Villkorssatser
Dagens lektion handlar om att använda villkorssatser. Gör så gott ni kan, så tittar vi på det lite snabbt igen när jag har tillfrisknat.

---

Läs på om [villkorssatser i C#](https://www.geeksforgeeks.org/c-sharp/c-sharp-decision-making-else-else-ladder-nested-switch-nested-switch/) (till och med kapitlet `1. If Statement`).

Exempel:

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
Console.Write("Skriv ditt namn: ");

string enteredName = Console.ReadLine();

// Ett utropstecken följt av ett likamedtecken betyder
// att vi testar ifall de två har olika värden.
if(enteredName != "Alice")
{
  Consle.WriteLine("Ah, du heter alltså inte Alice. Synd...");
}

Console.WriteLine($"Hej {enteredName}, trevligt att träffas!");
```

::: exercise 3.1
Ändra koden i `Program.cs` så att den först ber användaren mata in ett lösenord. Du (programmeraren) får själv välja vad det korrekta lösenordet ska vara. Om användaren matar in det korrekta lösenordet så ska du visa ett hemligt meddelande för användaren (du får själv komma på ett hemligt meddelande). Om användaren matar in ett felaktigt lösenord så ska du visa ett felmeddelande för användaren. Därefter ska programmet vara slut.
:::

Läs kapitlet [2. If-else Statement](https://www.geeksforgeeks.org/c-sharp/c-sharp-decision-making-else-else-ladder-nested-switch-nested-switch/#:~:text=2.%20If-else%20Statement) och `3. If-else-if ladder Statement`.

```cs
// En villkorssats kan följas upp med en else{ ... }
// som körs ifall villkoret inte är uppfyllt.
Console.Write("Skriv ditt namn: ");

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
Console.Write("Skriv ditt namn: ");

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

::: exercise 3.2
Ändra koden i `Program.cs` så att ditt program innehåller 3 olika hemliga meddelanden, varje skyddat av ett eget lösenord. Om användaren skriver in lösenordet för ett meddelande så ska det meddelandet visas, annars ska du visa ett meddelande som förklarar att ingen hemligt meddelande finns med det lösenordet.
:::

Läs på om [4. Nested - If Statement](https://www.geeksforgeeks.org/c-sharp/c-sharp-decision-making-else-else-ladder-nested-switch-nested-switch/#:~:text=4.%20Nested%20-%20If%20Statement).

```cs
// En kan använda en nästlad villkorssats för att testa två villkor.
Console.Write("Skriv ditt förnamn: ");
string firstName = Console.ReadLine();

Console.Write("Skriv in ditt efternamn: ");
string lastNamn = Console.ReadLine();

if(firstName == "Alice")
{
  if(lastName == "Bengtsson")
  {
    Consle.WriteLine("Hej Alice Bengtsson, trevligt att träffas!");
  }
}
```

```cs
// Eller så använder man &&-operatorn för att testa två villkor.
Console.Write("Skriv ditt förnamn: ");
string firstName = Console.ReadLine();

Console.Write("Skriv in ditt efternamn: ");
string lastNamn = Console.ReadLine();

if(firstName == "Alice" && lastName == "Bengtsson")
{
  Consle.WriteLine("Hej Alice Bengtsson, trevligt att träffas!");
}
```

::: exercise 3.3
Skapa ett nytt program som ber användaren mata in ett användarnamn och lösenord. Om användaren matar in `Alice` och `abc123` så ska ett hemligt meddelande visas för användaren. Annars ska texten `Fel inloggningsuppgifter!` visas för användaren.
:::

::: exercise 3.4
Ändra ditt program så att ett annat hemligt meddelande visas för användaren som loggar in med `Bob` och `pa55word`.
:::

::: exercise 3.5
Skapa ett program som frågar användaren ifall denne föredrar sommar eller vinter.

Ifall användaren skriver att hen föredrar sommar ska programmet fråga ifall användaren gillar att bada. Programmet ska sedan ge olika svar beroende på vad användaren svarar.

Ifall användaren föredrar vinter ska programmet fråga ifall användaren gillar att åka skidor. Programmet ska sedan ge olika svar beroende på vad användaren svarar.
:::

```cs
// Man kan använda || operatorn för att testa ifall
// åtminstone ett av två olika villkor stämmer.
Console.Write("Skriv en bokstav: ");
string letter = Console.ReadLine();

if(letter == "A" || letter == "P")
{
  Consle.WriteLine($"{letter} är en extra fin bokstav!");
}
else
{
  Console.WriteLine($"{letter} är en vanlig bokstav.");
}
```

::: exercise 3.6
Gör ett program där användaren får skriva in sin favoritfärg. Om färgen är antingen `röd` eller `grön` så ska du visa meddelandet `Det är en vacker färg!`. Annars ska du visa meddelandet `Den färgen är OK.`.
:::

::: exercise 3.7
**OBS, Extra svår övning!**

Gör ett sten-sax-påse-spel för två spelare (som ett konsollprogram), där den första spelaren får skriva in sitt val (`sten`, `sax` eller `påse`) först, och den andra spelaren får skriva in sitt svar efter det (ja, det blir lätt att fuska för den andra spelaren).

Efter detta ska det skrivas ut vad de två olika spelarna valde och vem som vann, eller om det blev oavgjort. Alltså något i stil med en av följande texter ska visas:

* sten vinner över sax
* sax vinner över påse
* påse vinner över sten
* Det är oavgjort

Men du får ha vilken output du vill, bara man kan tyda vem som vann.
:::

:::: exercise 3.8
Läs på om C# på [W3Schools C# Pages](https://www.w3schools.com/cs/index.php). Du kan börja med [C# Output](https://www.w3schools.com/cs/cs_output.php) och fortsätta så långt du kommer.

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

Den senare är ett enklare sätt att skriva på och som introducerades i C# version 9, och W3Schools C# Pages skrevs tyvärr för en tidigare C#-version, så deras kod gör på det krångligare sättet.

::::




## Lektion 4. Matematik
Dagens lektion handlar om att lära sig grunderna i hur tal-datatyper fungerar, och vilka operationer vi kan göra med dem.

---

Det finns huvudsakligen fyra olika tal-datatyper:

| Datatyp  | Storlek i datorn | Kommentar |
|----------|------------------|-----------|
| `int`    | 4 bytes          | Heltal. Minsta är -2 147 483 648, högsta är 2 147 483 647. |
| `long`   | 8 bytes          | Heltal. Minsta är -9 223 372 036 854 775 808, högsta är 9 223 372 036 854 775 807. |
| `float`  | 4 bytes          | Decimaltal med ~6 decimaler. |
| `double` | 8 bytes          | Decimaltal med ~15 decimaler. |

I praktiken, använd för det mesta `int` och `double`. Använd `long` om `int` är för liten, och använd `float` istället för `double` om du vill spara minne.

```cs
int myAge = 12;
long yourAge = 45;
float averageSpeed = 15.52f; // Måste skriva f i slutet för att indikera flyttal.
double topSpeed = 425.651;

int myAgeInAYear = myAge + 1;
int sumAge = myAge + yourAge;
int ageDifference = yourAge - myAge;

int aProduct = 3 * 4;

// Notera: division med int ger en int!
int half = 13 / 2; // 6.

// Man kan kasta om en int till en double för att få en double.
double realHalf = (double) 13 / 2; // 6.5
```

::: exercise 4.1
Skriv ett program som beräknar och visar vad summan av `123456` och `9876` är.
:::

::: exercise 4.2
Skriv ett program som beräknar och visar vad produkten av `123456` och `9876` är.
:::

::: exercise 4.3
Skriv ett program som beräknar och visar vad produkten av `123.456` och `9.876` är.
:::

::: exercise 4.4
Skriv ett program som beräknar och visar vad summan av `123` och `9.876` är.
:::

När man använder `Console.ReadLine()` och använder man in `123` så kommer vi få tillbaka strängen `"123"`. En sträng kan vi inte använda amtematiska operationer på, så om vi vill beräkna saker med det inmatade numret så behöver vi omvandla det till en matematisk datatyp först. Det kan vi göra med funktionerna `Convert.ToDouble()`, `Convert.ToInt()`, etc.

```cs
string aNumberAsString = "123";

int anInteger = Convert.ToInt32(aNumberAsString);
double aDouble = Convert.ToDouble("432.532")
```

::: exercise 4.5
Skriv ett program som ber användaren mata in två heltal. Beräkna sedan summan av heltalen, och visa den för användaren.
:::

::: exercise 4.6
Skriv ett program som ber användaren mata in två decimaltal. Beräkna sedan summan av decimaltalen, och visa den för användaren.
:::

Man kan även jämföra tal med varandra som villkor i en villkorssats, och göra olika saker beroende på jämförelsen stämmer eller ej.

| Jämförelseoperator | Testar           | Exempel |
|--------------------|------------------|---------|
| `==` | Ifall två värden är lika.                        | <code style="white-space: nowrap;">123 == 456</code> |
| `!=` | Ifall två värden är olika.                       | `123 != 456` |
| `<`  | Ifall det vänstra värdet är mindre än det högra. | `123 < 456` |
| `>`  | Ifall det vänstra värdet är större än det högra. | `123 > 456` |
| `<=`  | Ifall det vänstra värdet är mindre än eller lika med det högra. | `123 <= 456` |
| `>=`  | Ifall det vänstra värdet är större än eller lika med det högra. | `123 >= 456` |

```cs
int myNumber = 123;

if(myNumber == 123)
{
  Console.WriteLine("Numret är 123!");
}

if(myNumber != 123)
{
  Console.WriteLine("Numret är inte 123!");
}

if(myNumber < 123)
{
  Console.WriteLine("Numret är mindre än 123!");
}

if(myNumber > 123)
{
  Console.WriteLine("Numret är större än 123!");
}
```

::: exercise 4.7
Skapa ett program som skriver ut vilket av `14 * 54` och `37 * 40` som är störst.
:::

::: exercise 4.8
Skapa ett program som ber användaren att mata in hur många år gammal hen är. Ditt program ska sedan skriva ut:

* `Du är ett barn.`, om användaren är under 18 år.
* `Du är vuxen.`, om användaren är mellan 18 och 67 år.
* `Du är en pensionär.`, om användaren är över 67 år.
:::