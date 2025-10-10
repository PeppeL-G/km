# Programmering 1 - Lektioner



## Snabblänkar
* [W3Schools C# Pages](https://www.w3schools.com/cs/index.php)
* [Projekt för årskurs 2-elever](../2-elever/)



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
float averageSpeed = 15.52f; // Måste skriva f i slutet för att indikera ett float-tal, annars blir det ett double-tal!
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

När man använder `Console.ReadLine()` och använder man in `123` så kommer vi få tillbaka strängen `"123"`. En sträng kan vi inte använda matematiska operationer på, så om vi vill beräkna saker med det inmatade numret så behöver vi omvandla det till en matematisk datatyp först. Det kan vi göra med funktionerna `Convert.ToDouble()`, `Convert.ToInt32()`, etc.

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
Skapa ett program som ber användaren att mata in två tal. Ditt program ska sedan tala om för användaren vilket av talen som är lägst.
:::

::: exercise 4.9
Skapa ett program som ber användaren att mata in hur många år gammal hen är. Ditt program ska sedan skriva ut:

* `Du är ett barn.`, om användaren är under 18 år.
* `Du är vuxen.`, om användaren är mellan 18 och 67 år.
* `Du är en pensionär.`, om användaren är över 67 år.
:::




## Lektion 5. Beräkningar
Nu ska vi repetera och öva på att använda det vi har lärt oss hittills för att försöka beräkna lite mer riktiga saker.

---

::: exercise 5.1
Skapa ett program som ber användaren mata in 2 tal. Ditt program ska sedan skriva ut vilket av talen som är störst respektive minst.
:::



::: exercise 5.2
Skapa ett program som ber användaren mata in 4 tal. Ditt program ska sedan skriva ut vad summan och medelvärdet av talen är. Medelvärdet är summan delat med antal nummer (4 i detta fallet).
:::



::: exercise 5.3
Skapa ett program som ber användaren mata in två sidlängder på en fyrkant. Ditt program ska sedan fråga om användaren vill se fyrkantens omkrets eller area. När användaren har gjort sitt val så ska du beräkna och visa det som användaren valde.

En fyrkants omkrets är `kortsida + kortsida + långsida + långsida`.

En fyrkants area är `kortsida * långsida`.
:::



::: exercise 5.4
Skapa ett program som ber användaren att mata in ett antal minuter, och sedan ett antal sekunder. Ditt program ska sedan beräkna och tala om för användaren hur många sekunder det är totalt.

Kom ihåg: 1 minut = 60 sekunder

Ändra sedan programmet så att användaren även får mata in ett antal timmar, och du ska sedan lägga sekunderna i timmarna till din uträkning också.

Kom ihåg: 1 timme = 60 minuter
:::



::: exercise 5.5
Skapa ett program som ber användaren mata in två tal, och sedan en matematisk operatorsymbol (`+`, `-`, `*` eller `/`). Utför sedan den matematiska operationen på talen och visa resultatet för användaren.
:::



::: exercise 5.6
Amerikanerna är konstiga: de mäter temperaturer i Fahrenheit, och inte Celcius! Skriv ett program som hjälper dem att konvertera en temperatur i Fahrenheit till en temperatur i Celcius.

Här är en formel för att konvertera en given Fahrenheit temperatur (`°F`) till en Celcius temperatur (`°C`): `°C = (°F - 32) * 5/9`.
:::



::: exercise 5.7
BMI är en formel som försöker uppskatta ifall en person är underviktig, normalviktig eller överviktig. Den beräknar ett BMI-värde utifrån en persons vikt (mäts i kg) och längd (mäts i m): `BMI = vikt / (längden * längden)`.

BMI-värdet ska sedan tolkas på följande sätt:

* Under 18,5: Underviktig
* Mellan 18,5 och 24,9: Normalviktig
* Över 25: Överviktig

Skapa ett program som ber användaren att mata in sin vikt och längd, och som sedan beräknar personens BMI-värde och talar om ifall personen är underviktig, normalviktig eller överviktig.

**Notera**\
BMI är inte ett tillförligt sätt att avögra ifall en person faktiskt är underviktig, normalviktig eller överviktig. Använd det aldrig i praktiken.
:::



## Lektion 6. Catch-up
Vi repeterar det vi har gått igenom hittills och gör de övningar vi inte är klara med.

::: tip
De som har lätt för det som vi har gått igenom hittills och som vill lära sig något nytt/svårare kan läsa på om [Booleans](https://www.w3schools.com/cs/cs_booleans.php) och [`while`-loopen](https://www.w3schools.com/cs/cs_while_loop.php) på W3Schools.

Skapa sedan ett program som slumpar fram ett nummer mellan 0 och 100 ([läs hur](https://sentry.io/answers/generate-a-random-integer-in-csharp/)). Användaren ska sedan få skriva in och gissa vilket detta nummer är om och om igen tills användaren gissat rätt nummer. Varje gång användaren gissar fel nummer så ska programmet tala om ifall gisningen var för låg eller för hög.

Blir du klar med detta program innan lektionens slut så får du börja arbeta på ett eget C#-projekt som gör vad du vill :)
:::




## Lektion 7. Bool, While-loopen
Den här lektionen kommer vi titta närmare på boolska värden och hur while-loopen fungerar, och se exempel på vad vi kan använda dem till.

---

Datatypen `bool` kan bara spara ner två olika värden: `true` och `false`. Den används för att representera ifall något är korrekt eller ej:

```cs
bool isSwedenACountry = true;
bool isFireCold = false;
```

Alla matematiska jämförelseoperatorer kommer evalueras till antingen `true` eller `false`:

```cs
bool isFiveLowerThanThree = 5 < 3; // false
bool isFourEqualToEight = 4 == 8; // false
bool isOneLowerThanSix = 1 < 6; // true
```

Och varje villkor som vi använder i en villkorssats (`if(...){...}`) måste evalueras till `true` eller `false`.

```cs
bool amIRich = false;

if(amIRich)
{
  Console.WriteLine("Jag är rik! :D");
}
else
{
  Console.WriteLine("Jag är inte rik :(");
}
```

Det finns inte mycket mer än så att säga om `bool`-datatypen, så låt oss fortsätta med loopar.

---

Ibland vill vi att datorn ska utföra samma sak om och om igen ett visst antal gånger. För att få det att hända så kan vi använda oss av en loop. Den enklaste typen av loop i C# är `while(...){...}`-loopen. Den är liknande `if(...){...}` i sin struktur, men `while`-loopen kommer köras om igen så länge villkoret i den är sann.

::: example

Exempel på en loop som aldrig kommer köras.

```cs
Console.WriteLine("Före loopen.");

while(false)
{
  
  Console.WriteLine("Inne i loopen.");
  
}

Console.WriteLine("Efter loopen.");
```

Output:

```
Före loopen.
Efter loopen.
```

:::

::: example

Exempel på en loop som alltid kommer köras.

```cs
Console.WriteLine("Före loopen.");

while(true)
{
  
  Console.WriteLine("Inne i loopen.");
  
}

// Eftersom loopen aldrig slutar loopa så kommer
// "Efter loopen" aldrig att skrivas ut, för
// datorn kommer aldrig komma hit ner och
// köra koden här nere.
Console.WriteLine("Efter loopen.");
```

Output:

```
Före loopen.
Inne i loopen.
Inne i loopen.
Inne i loopen.
Inne i loopen.
Inne i loopen.
...
```
:::

Att hårdkoda in `true`/`false` som villkor i loopen är sällan vettigt. Vanligtvis har man en variabel som används i villkoret, och när den variabeln ändrar värde inne i loopen så kommer loopen avbrytas förr eller senare (när villkoret blir `false`).

::: example
Exempel på en loop som kommer köras 1 gång.

```cs
Console.WriteLine("Före loopen.");

bool shouldRunLoop = true;

while(shouldRunLoop)
{
  
  Console.WriteLine("Inne i loopen.");
  
  shouldRunLoop = false;
  
}

Console.WriteLine("Efter loopen.");
```

Output:

```
Före loopen.
Inne i loopen.
Efter loopen.
```
:::

Vill man köra loopen flera gånger så får man använda en `int`-variabel som räknar (vi ökar variabeln med 1 varje gång loopen körs).

::: example

Exempel på en loop som kommer köras 3 gånger.

```cs
Console.WriteLine("Före loopen.");

int i = 1;

while(i <= 3)
{
  
  Console.WriteLine($"Inne i loopen (i={i}).");
  
  i = i + 1;
  
}

Console.WriteLine("Efter loopen.");
```

Outout:

```
Före loopen.
Inne i loopen (i=1).
Inne i loopen (i=2).
Inne i loopen (i=3).
Efter loopen.
```
:::

::: exercise 7.1
Skapa ett program som skriver ut följande på skärmen:

```
Rad 1.
Rad 2.
Rad 3.
Rad 4.
```

Använd en `while`-loop.
:::

::: exercise 7.2
Skapa ett program som skriver ut följande på skärmen:

```
Rad 7.
Rad 8.
Rad 9.
Rad 10.
```

Använd en `while`-loop.
:::

::: exercise 7.3
Skapa ett program som skriver ut följande på skärmen:

```
5
4
3
2
1
Takeoff!
```

Använd en `while`-loop.
:::

::: exercise 7.4
Skapa ett program som ber användaren skriva in ett positivt heltal. Ditt program ska sedan skriva ut heltalen mellan 0 och det heltal som användaren skrev in.

Exempel:

```
Skriv in ett positivt heltal: 4
0 1 2 3 4
```
:::

::: exercise 7.5
Ändra ditt föregående program så att om användaren skriver in ett negativt heltal så visas ett felmeddelande.

Exempel:

```
Skriv in ett positivt heltal: -5
FEL: Det är inte ett positivt heltal.
```
:::

Om vi ber användaren mata in ett värde, låt oss säga ett positivt heltal, men användaren matar in något annat, låt oss säga ett negativt heltal, då kan det vara bra att be användaren att mata in värdet en gång till, om och om igen, ända tills användaren har matat in ett korrekt värde. För att uppnå detta kan man använda en `while`-loop.

::: example

Exempel på hur man kan be användaren mata in ett namn igen ifall användaren matat in en tom sträng (bara tryckt på enter).

```cs
bool hasEnteredNameCorrect = false;
string enteredName = "";

while(hasEnteredNameCorrect == false)
{
  
  Console.Write("Skriv in ditt namn: ");
  enteredName = Console.ReadLine();
  
  if(enteredName == "")
  {
    Console.WriteLine("Du måste ange ditt namn!");
  }
  else
  {
    hasEnteredNameCorrect = true;
  }
  
}

Console.WriteLine($"Hej {enteredName}, trevligt att träffas!");

```
:::

::: exercise 7.6

Skapa ett program där användaren ska mata in ett visst lösenord (du får bestämma vilket det rätta lösenordet ska vara). Om användaren matar in fel lösenord så ska du be användaren mata in lösenordet igen, ända tills det rätta lösenordet är inmatat. Efter det så ska ett hemligt meddelande visas för användaren (du får bestämma vad det hemliga meddelandet ska vara).

:::

::: exercise 7.7

Skapa ett program där användaren ska mata in ett positivt heltal. Om användaren matar in ett negativt heltal så ska du be användaren mata in ett positivt heltal igen, ända tills användaren har gjort detta. Därefter ska du skriva ut meddelandet `Hej på dig!` så många gånger som det positiva heltalet indikerar (skriver användaren t.ex. in `3`, så ska meddelandet visas tre gånger).

:::




## Lektion 8. Mer `while`!
Att använda loopar är knepigt. Därför ska vi träna lite mer på att använda dem.

::: exercise 8.1
Skapa ett program som skriver ut följande på skärmen:

```
1
3
5
7
9
```

Använd en `while`-loop.
:::


::: exercise 8.2
Skapa ett program som ber användaren mata in två positiva heltal. Det första mindre än det andra. Ditt program ska sedan skriva ut var tredje tal från det första talet till det andra talet.

Körexempel:

```
Mata in ett positivt heltal: 5
Mata in ett större positivt heltal: 16
5
8
11
14
```

Använd en `while`-loop.
:::

::: exercise 8.3
Skapa ett program som ber användaren mata in ett användarnamn och lösenord. Det korrekta användarnamnet och lösenordet ska vara `Alice` och `abc123`. Så länge användaren inte matar in det korrekta användarnamnet och lösenordet så ska ditt program fortsätta att be om det korrekta användamnet och lösenordet. När de väl har matats in så ska användaren få se ett hemligt meddelande.

Körexempel:

```
Mata in användarnamn: Bengt
Mata in lösenord: lossen
Fel användarnamn/lösenord, försök igen.

Mata in användarnamn: Alice
Mata in lösenord: pa55w0rd
Fel användarnamn/lösenord, försök igen.

Mata in användarnamn: Alice
Mata in lösenord: abc123
Välkommen, Alice! Här är ditt hemliga meddelande: ...
```
:::

::: exercise 8.4
Den här övningen är nog ganska svår.

Skapa ett program som ber användaren mata in ett positivt heltal. Ditt program ska sedan skriva ut en fyrkant med den sidlängden med hjälp av `*`-symbolen.

Körexempel:

```
Mata in ett positivt heltal: 5
*****
*****
*****
*****
*****
```

<br>

```
Mata in ett positivt heltal: 7
*******
*******
*******
*******
*******
*******
*******
```

Hint: Om inte en loop räcker så kanske två gör det? ^^

:::

::: exercise 8.5
Den här övningen är nog ännu svåre.

Skapa samma program som innan, men skriv endast ut kanten på fyrkanten.

Körexempel:

```
Mata in ett positivt heltal: 5
*****
*   *
*   *
*   *
*****
```

<br>

```
Mata in ett positivt heltal: 7
*******
*     *
*     *
*     *
*     *
*     *
*******
```

:::




## Lektion 9. Multiplikationsprogram
Först skapar vi ett litet exempelprogram tillsammans. Sedan får ni träna på att använda det vi har lärt oss hittills i kursen för att försöka bygga ett lite mer meningsfullt program.

::: exercise 9.1
Programmet du ska skapa ska användaren kunna använda för att träna på multiplikation. När programmet startar ska användaren få ange vilken multiplikationstabell hen vill träna på. Ditt program ska sedan ställa 10 multiplikationsfrågor till användaren på den multiplikationstabellen i ording (t.ex. för femmans multiplikationstabell: först `5 * 1`, sedan `5 * 2`, och så vidare). För varje fråga ska användaren få skriva in ett svar, och ditt program ska skriva ut ifall svaret är rätt eller fel.
:::

::: exercise 9.2
Ifall användaren skriver in fel svar på en multiplikationsfråga, visa då vad det rätta svaret är för användaren.
:::

::: exercise 9.3
När programmet är slut, visa då användaren hur många rätt respektive fel användaren hade.
:::

::: exercise 9.4
Ändra ditt program så att användaren även kan öva på att beräkna addition och subtraktion. Användaren ska t.ex. kunna välja beräkningssätt när programmet startar genom att skriva in `+`, `-` eller `*` (välj själv hur det ska fungera, men skriv tydliga instruktioner till användaren så att hen förstår hur det fungerar).
:::

::: exercise 9.5
När du har skrivit ut användarens antal rätt/fel, fråga då om användaren vill köra en gång till. Om användaren vill det så ska användaren få mata in beräkningssätt och tabellnummer igen.
:::

::: exercise 9.6
Det är lite tråkigt att frågorna alltid kommer i ordning, t.ex. `5 * 1`, `5 * 2`, `5 * 3`, etc. Ändra programmet så att det varje gång slumpar fram ett tal mellan 1 och 10 som används (samma tal kan alltså komma flera gånger).

[Läs dig till hur man slumpar fram ett tal i C#.](https://sentry.io/answers/generate-a-random-integer-in-csharp/)
:::

::: exercise 9.7
Den här övningen är lite överkurs.

[Läs om hur Stopwatch fungerar i C#.](https://www.dotnetperls.com/stopwatch) Använd sedan den för att mäta hur lång tid det tar för användaren att besvara alla frågor. Visa sedan den tiden för användaren. Sedan är det dags att tävla! :D
:::




## Lektion 10. Catch-up
Vi fortsätter att arbeta med övningarna ifrån föregående lektioner. Om någon mot all förmodan lyckats göra alla övningar hittills så kommer här nedan ett par nya ^^

::: info Bestämma provtillfällen
Jag vill gärna ha ett litet prov för att se hur många elever som har lärt sig vad av grunderna i programmering hittills i kursen. Det som ni har lärt er hittills är:

* Output: `Console.Write()`, `Console.WriteLine()`
* Input: `Console.ReadLine()`
* Variabler: `int myAge = 12;`, `myAge = 234;`
* Datatyper: `string` (`"..."`), `int`, `long`, `double`, `floot`, `bool` (`true`/`false`)
* Skapa sträng med värden från uttryck: `$"Jag är {myAge} år gammal."`
* Konvertera från `string`-värde till `int`-värde: `Convert.ToInt32()`
* Jämförelseoperatorer: `<`, `<=`, `==`, `!=`, `>`, `>=`
* Villkorssatser:
  ```cs
  if(myAge < 18)
  {
    // ...
  }
  else if(myAge < 67)
  {
    // ...
  }
  else
  {
    // ...
  }
  ```
* While-loopen:
  ```cs
  while(0 < myAge)
  {
    // ...
    myAge = myAge - 1;
  }
  ```

Det som återstår att lära sig av grunderna är:

* `for`-loopen
* Arrayer & Listor
* Funktioner

Så vi behöver bestämma:

* Ska vi ha två små prov eller ett stort?
* När ska provet/proven äga rum?

<table style="text-align: center;">
<thead>
  <tr>
    <th style="text-align: center;">Vecka</th>
    <th style="text-align: center;">Ettor</th>
    <th style="text-align: center;">Tvåor</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>39</td>
    <td colspan="2">Denna veckan</td>
  </tr>
  <tr>
    <td>40</td>
    <td></td>
    <td>Eng 6 (Business Report)</td>
  </tr>
  <tr>
    <td>41</td>
    <td></td>
    <td>Fy1: Kinematik och mekanik</td>
  </tr>
  <tr>
    <td>42</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>43</td>
    <td>Prov i Sam1</td>
    <td>Ma3c: Algebra och funktioner</td>
  </tr>
  <tr>
    <td>44</td>
    <td colspan="2">Höstlov</td>
  </tr>
</tbody>
</table>

:::

::: exercise 10.1
Den här övningen är kopplad till multiplikationsprogrammet i övningarna från föregående lektion.

Ändra ditt multiplikationsprogram så att det fungerar lite annorlunda:

* Om användaren svarar fel på en fråga så ska användaren få chans att svara på den frågan om igen, ända tills användaren lyckas svara rätt.
* I slutet av programmet så ska du visa hur många gånger användaren svarade fel, och hur lång tid det tog för användaren att svara på alla frågor.
:::



::: exercise 10.2
Lägg till så att ditt multiplikationsprogram kommer ihåg användarens bästa resultat. Som en första version av denna funktionalitet så kan du använda tiden det tog att besvara alla frågor, men i en lite mer avancerad version så kan du först titta på antal fel användaren har gjort (i bästa fall 0), och i andra hand hur lång tid det tog.

Efter varje avslutad omgång, visa det bästa resultatet för användaren, och om användaren precis fick det bästa resultatet, skriv ett litet grattismeddelande till användaren.
:::




## Lektion 11. Repetition
* Provet kommer genomföras i Safe Exam Browser
  * Ni kommer få skriva och testköra kod på [.NET Fiddle](https://dotnetfiddle.net/IrwB9w) \
  **Notera**\
  På .NET Fiddle så måste man ha raden `using System;` allra först i sitt program
  * På Google Classroom finns det ett [Testprov](https://classroom.google.com/c/Nzk5Mjk2NzUxMjc1/a/ODA5MzY2MDQzNzAw/details) ni kan göra nu om ni vill se hur det blir på provdagen
* Övningar


::: danger Notera!
De program du skapar i övningarna nedan ska producera exakt samma output som de tillhörande körexemplen, inklusive white space-tecken som mellanslag och radbyten.
:::

:::: exercise 11.1
Skapa ett program som ber användaren skriva in sitt namn, och som sedan skriver ut en liten hälsning till användaren som innehåller det namnet.

Körexempel:

```
Mata in ditt namn: Alice

Hej Alice, vilket fint namn du har!
```
::::

:::: exercise 11.2
Skapa ett program som ber användaren skriva in namnet på staden de bor i. Om användaren skriver in `Jönköping` så ska du visa texten `En mycket fin stad!`, annars ska du visa texten `En okänd stad.`.

Körexempel:

```
Skriv namnet på staden du bor i: Jönköping
En mycket fin stad!
```

<br>

```
Skriv namnet på staden du bor i: Borås
En okänd stad.
```
::::

:::: exercise 11.3
Skapa ett program som använder en `while`-loop för att skriva ut texten `Programmering är kul!` 5 gånger.

Körexempel:

```
Programmering är kul!
Programmering är kul!
Programmering är kul!
Programmering är kul!
Programmering är kul!
```
::::

:::: exercise 11.4
Skapa ett program som ber användaren skriva in ett positivt heltal. Ditt program ska sedan skriva ut heltalen mellan 0 och det inmatade heltalet (varje på en egen rad).

Körexempel:

```
Mata in ett positivt heltal: 3
0
1
2
3
```
::::

:::: exercise 11.5
Skapa ett program som ber användaren skriva in ett positivt heltal. Ditt program ska sedan skriva ut heltalen mellan 0 och det inmatade heltalet, varje med ett bindesstreck (`-`) emellan.

Körexempel:

```
Mata in ett positivt heltal: 4
0-1-2-3-4
```
::::

:::: exercise 11.6
**Den här övningen är nog jättesvår.**

Skapa ett program som ber användaren skriva in ett positivt heltal. Ditt program ska sedan skriva ut heltalen mellan 0 och det inmatade heltalet i en kvadrat likt körexemplet nedan.

Körexempel:

```
Mata in ett positivt heltal: 4
01234
1   3
2   2
3   1
43210
```
::::




## Lektion 12. Prov 1
Prov enligt instruktionerna som finns på inlämningsuppgiften [EXAM: Prov Programmeringsgrunder Del 1](https://classroom.google.com/c/Nzk5Mjk2NzUxMjc1/a/MjM1NjA0MjY5Nzla/details) på Google Classroom.




## Lektion 13. Prov 1 genomgång, For-loopen
* Genomgång av rätt svar på provet.
  * Vad som testades:
    * Output: `Console.Write()`, `Console.WriteLine()`
    * Input: `Console.ReadLine()`
    * Variabler
    * Strängkonkatenering (`"..." + "..."`, `$"...{}..."`)
    * `Convert.ToInt32()`
    * Villkorssatser
    * While-loopar
  * Att ta med oss:
    * 7 av 19 ettor kan inte använda `Convert.ToInt32()`.
    * 5 av 19 ettor kan inte använda villkorssatser.
    * 8 av 19 ettor kan inte använda while-loopar.
* `for()`-loopen

::: tip Prov 1 Uppgift 1

Skapa ett program som skriver ut följande på skärmen när en kör det:

```
Hej!

Jag heter Alice.

Vad heter du?
```

Kopiera och klistra in din kod här nedanför som svar:

```cs
Console.WriteLine("Hej!");
Console.WriteLine();
Console.WriteLine("Jag heter Alice.");
Console.WriteLine();
Console.WriteLine("Vad heter du?");
```
:::

::: tip Prov 1 Uppgift 2

Skapa ett program som ber användaren skriva in sitt namn. Programmet ska sedan skriva ut en hälsning till användaren.

Körexempel (fet text är input från användaren):

```
Skriv in ditt namn: Bob
Hej Bob, trevligt att träffas!
```

Kopiera och klistra in din kod här nedanför som svar:

```cs
Console.Write("Skriv in ditt namn: ");
string name = Console.ReadLine();
Console.WriteLine($"Hej {name}, trevligt att träffas!");
```
:::

::: tip Prov 1 Uppgift 3

Skapa ett program som ber användaren mata in ett heltal. Om heltalet är negativt (mindre än 0) så ska texten `Det är negativt!` visas. Annars ska texten `Det är inte negativt!` visas.

Körexempel 1 (fet text är input från användaren):

```
Skriv in ett heltal: -5
Det är negativt!
```

Körexempel 2 (fet text är input från användaren):

```
Skriv in ett heltal: 7
Det är inte negativt!
```

Kopiera och klistra in din kod här nedanför som svar:

```cs
Console.Write("Skriv in ett heltal: ");
int integer = Convert.ToInt32(Console.ReadLine());

if(integer < 0)
{
  Console.WriteLine("Det är negativt!");
}
else
{
  Console.WriteLine("Det är inte negativt!");
}
```
:::

::: tip Prov 1 Uppgift 4

Skapa ett program som ber användaren mata in två heltal. Programmet ska sedan skriva ut det tal som är störst.

Körexempel 1 (fet text är input från användaren):

```
Skriv in ett heltal: 3
Skriv in ett heltal: 12
12 är det största talet.
```

Körexempel 2 (fet text är input från användaren):

```
Skriv in ett heltal: 3
Skriv in ett heltal: -6
3 är det största talet.
```

Kopiera och klistra in din kod här nedanför som svar:

```cs
Console.Write("Skriv in ett heltal: ");
int integer1 = Convert.ToInt32(Console.ReadLine());

Console.Write("Skriv in ett heltal: ");
int integer2 = Convert.ToInt32(Console.ReadLine());

int biggest = integer1;

if(biggest < integer2)
{
  biggest = integer2;
}

Console.WriteLine($"{biggest} är det största talet.");
```
:::

::: tip Prov 1 Uppgift 5

Skapa ett program som ber användaren mata in ett positivt heltal. Ditt program ska sedan skriva ut det numret och numren ner till 1, och sedan texten `Go!`

Körexempel 1 (fet text är input från användaren):

```
Skriv in ett positivt heltal: 3
3
2
1
Go!
```

Körexempel 2 (fet text är input från användaren):

```
Skriv in ett positivt heltal: 5
5
4
3
2
1
Go!
```

Kopiera och klistra in din kod här nedanför som svar:

```cs
Console.Write("Skriv in ett heltal: ");
int integer = Convert.ToInt32(Console.ReadLine());

int i = integer;

while(0 < i)
{
  Console.WriteLine($"{i}");
  i = i - 1;
}

Console.WriteLine("Go!");
```
:::

::: tip Prov 1 Uppgift 6

Skapa ett program som ber användaren mata in ett positivt heltal. Du ska sedan be användaren att mata in lika många nya positiva heltal som det första. Ditt program ska sedan skriva ut vilket det lägsta respektive högsta inmatade heltalet var.

Körexempel (fet text är input från användaren):

Skriv in ett positivt heltal: 3
Mata in ett positivt heltal: 5
Mata in ett positivt heltal: 10
Mata in ett positivt heltal: 7

Det lägsta talet är 5.
Det högsta talet är 10.


```cs
Console.Write("Skriv in ett positivt heltal: ");
int numberOfIntegers = Convert.ToInt32(Console.ReadLine());

int smallest = 999999999;
int biggest = 0;

int i = 1;

while(i <= numberOfIntegers)
{
  
  Console.Write("Mata in ett positivt heltal: ");
  int number = Convert.ToInt32(Console.ReadLine());
  
  if(number < smallest)
  {
    smallest = number;
  }
  
  if(biggest < number)
  {
    biggest = number;
  }
  
  i = i + 1;
  
}

Console.WriteLine();
Console.WriteLine($"Det lägsta talet är {smallest}.");
Console.WriteLine($"Det högsta talet är {biggest}.");
```
:::

::: example
```cs
int i = 0;

while(i < 10)
{
  Console.WriteLine($"i = {i}");
  i = i + 1;
}

// Det ovan är samma som det nedan.

for(int i=0; i<10; i++)
{
  Console.WriteLine($"i = {i}");
}
```
:::

När ska man använda vilken av looparna?

> Om du kan räkna ut hur många iterationer loopen ska göra innan den börjar, använd `for()`-loopen, annars `while()`-loopen.

::: exercise 13.1
För vart och ett av följande program, tänk igenom om du bör använda en `while()`-loop eller en `for()`-loop. Om du är osäker, testa ifall du kan implementera programmet med en `for()`-loop. Går inte det så ska du använda en `while()`-loop istället.

* Ett program som skriver ut heltalen mellan 1 och 10.
* Ett program som ber användaren skriva in ett namn om och om igen ända tills användaren skriver in namnet `Claire`.
* Ett program som ber användaren skriva in ett positivt heltal, och som sedan skriver ut heltalen mellan 0 och det som användaren skrev in.
* Ett program som ber användaren skriva in ett positivt heltal, och så länge användaren skriver in ett negativt heltal så ska detta upprepas (ända tills ett positivt heltal skrivs in).
:::

::: exercise 13.1
Skapa ett program som ber användaren mata in ett heltal. Ditt program ska sedan visa multiplikationstabellen för det heltalet. Använd en `for()`-loop i din lösning.
:::

::: exercise 13.2
Skapa ett program som ber användaren mata in ett lösenord. Så länge fel lösenord matas in så ska du fortsätta att be användaren mata in lösenordet. Du får själv välja vad det rätta lösenordet ska vara. När rätt lösenord har matats in så ska du visa ett hemligt meddelande för användaren.
:::

::: exercise 13.3
Det här är en fortsättning på föregående övning.

Ändra koden så att användaren kan skriva in fel lösenord max 3 gånger. Om användaren skriver in fel lösenord 3 gånger så ska ett felmeddelande visas, och sedan ska programmet avslutas.

Tänk noga igenom vad för loop du borde använda.
:::




## Lektion 14. Arrayer
En array är ett värde som kan spara ner flera andra värden av samma typ. Vi kan t.ex. skapa en array som innehåller 3 heltal, eller en array som innehåller 10 strängar, etc.

::: example
Olika sätt att skapa nya arrayer.

```cs
// Skapa en ny array med 3 specifika heltal.
int[] myNumbers = {4, 2, 7};

// Skapa en ny array med 4 specifika strängar.
string[] names = {"Alice", "Bob", "Claire", "David"};

// Skapa en ny array med 8 tal, alla sätts till 0 i början.
int[] scores = new int[8];

// Skapa en ny array som kan innehålla 5 strängar,
// men alla sätts till null i början.
string[] titles = new string[5];
```
:::

Arrayer kan t.ex. användas till att:

* Spara de 10 högsta poängen (highscores) i ett spel.
* Spara 3 "sparfiler" i ett spel.
* Ha 20 fiender inladdade och synliga på skärmen samtidigt.
* Etc.

Varje värde i arrayen får ett eget index:

* Det första värdet får index 0.
* Det andra värdet får index 1.
* Etc.

Med `variabelNamn[INDEX]`-syntaxen så kan vi ta fram värdet för ett visst index i arrayen.

::: example
Ta fram värde vid ett visst index i arrayen.

```cs
//       Index:      0       1       2         3
string[] names = {"Alice", "Bob", "Claire", "David"};

Console.WriteLine($"Värdet på index 1 är {names[1]}."); // Bob
Console.WriteLine($"Värdet på index 2 är {names[2]}."); // Claire"
```
:::

`variabelNamn[INDEX]`-syntaxen kan också användas för att spara ner ett nytt värde på ett visst index i arrayen.

::: example
Spara ner nya värden i en array.

```cs
string[] names = {"Alice", "Bob", "Claire", "David"};

Console.WriteLine($"Värdet på index 0 är {names[0]}."); // Alice

names[0] = "Abba";

Console.WriteLine($"Värdet på index 0 är {names[0]}."); // Abba
```
:::

Man kan använda `namnetPåArrayen.Length` för att få tillbaka ett heltal som indikerar hur många värden arrayen innehåller.

::: example
Ta reda på hur många värden en array innehåller.

```cs
string[] names = {"Alice", "Bob", "Claire", "David"};

Console.WriteLine($"Det finns {names.Length} namn totalt."); // 4
```
:::

::: exercise 14.1
Skapa ett program som innehåller en array med några olika värden. Ta sedan och skriv ut hur många värden arrayen innehåller (använd `.Length`).
:::

::: exercise 14.2
Skapa ett program som innehåller en array med namnet på alla veckodagar. Be sedan användaren att mata in ett nummer för en veckodag (1-7) för vars namn sedan ska skrivas ut. Om användaren matar in ett nummer som inte motsvarar en veckodag så ska ett felmeddelande skrivas ut.

Körexempel:

```
Mata in numret för en veckodag (1-7): 1
Måndag
```

<br>

```
Mata in numret för en veckodag (1-7): 3
Onsdag
```

<br>

```
Mata in numret för en veckodag (1-7): 9
Ogiltigt veckodagsnummer.
```
:::

::: exercise 14.3
Skapa ett program som innehåller en array med namnet på alla veckodagar. Använd sedan en `for()`-loop för att iterera över indexena i arrayen, och för varje index skriv ut namnet på veckodagen med det indexet.

Körexempel:

```
Veckans alla dagar är:
 - Måndag
 - Tisdag
 - Onsdag
 - Torsdag
 - Fredag
 - Lördag
 - Söndag
```
:::

::: exercise 14.4
Skapa ett program som innehåller en array med namnet på årets alla månader. Be sedan användaren att skriva in numret på en första månad (mellan 1 och 12), och sedan numret på en andra månad (mellan 1 och 12). Ditt program ska sedan skriva ut namnen på månaderna där emellan.

Körexempel:

```
Skriv in första månadsnumret: 3
Skriv in sista månadsnumret: 6

 - 3: Mars
 - 4: April
 - 5: Maj
 - 6: Juni
```
:::

::: exercise 14.5
Skapa ett program som innehåller två arrayer:

* En med namnet på årets alla månader.
* En med antal dagar i årets alla månader (använd 28 för februari).

Be sedan användaren mata in numret för en månad (1-12), och visa sedan namnet på månaden och antal dagar i den.

Körexempel:

```
Skriv in ett månadsnumret: 3
Mars har 31 dagar.
```
:::

::: exercise 14.6
Skapa ett program som innehåller två arrayer:

* En med namnet på årets alla månader.
* En med antal dagar i årets alla månader (använd 28 för februari).

Be sedan användaren mata in namnet på en månad, och ditt program ska sedan visa hur många dagar det finns i den månaden.

Tips: Loopa igenom alla index och leta efter månaden med det givna namnet.

Körexempel:

```
Skriv in namnet på en månad: April
April har 30 dagar.
```
:::

::: exercise 14.7
Skapa ett program som innehåller en array med 5 namn som du gillar. Använd sedan en loop för att om och om igen be användaren mata in ett kommando. Ditt program ska stödja följande kommandon:

* `Räkna`: Ska visa hur många namn du gillar.
* `Avsluta`: Ska avsluta loopen och programmet.
* `Visa alla`: Ska visa namnet på alla som du gillar.
* `Visa en`: Ska be användaren att mata in ett nummer mellan 1 och 5, och sedan ska namnet för det numret visas.
* `Ändra`: Ska be användaren att mata in numret på den som ska ändras, och sedan be användaren att mata in det nya namnet som ska sparas istället.

Om användaren skriver in ett kommando som inte finns så ska du visa ett felmeddelande.

Körexempel:

```
Skriv kommando: Räkna
Det finns 5 namn du gillar.

Skriv kommando: Visa alla
 - Alice
 - Bob
 - Claire
 - David
 - Elif

Skriv kommando: Visa en
Skriv nummer (1-5): 2
Bob

Skriv kommando: Ändra
Skriv nummer (1-5): 3
Skriv namn: Ceasar

Skriv kommando: Visa alla
 - Alice
 - Bob
 - Ceasar
 - David
 - Elif

Skriv kommando: Avsluta
```
:::