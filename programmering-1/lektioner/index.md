# Programmering 1 - Lektioner



## Snabblänkar




## Lektion 1
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




## Kommande