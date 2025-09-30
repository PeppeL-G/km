# Årskurs 2-elever
De elever som läser den här kursen och som går i årskurs 2 och som redan kan grunderna i programmering kan arbeta på ett eget (individuellt) litet programmeringsprojekt istället för att göra övningarna på lektionerna. Projektet får ni komma på själva, men det skulle t.ex. kunna vara:

* Ett "hänga gubbe"-spel (konsollprogram).
* Ett Ping Pong-spel.
* Ett breakout-spel.
* Ett program som kommer ihåg och visar information om de personer man känner och ger till programmet.
* Etc.

## Raylib
Vill ni använda er av enkel 2D-grafik så kan ni använda biblioteket som heter `raylib`. För att använda raylib i ett C#-projekt:

1. Öppna din projektmapp i Visual Studio Code.
2. I `EXPLORER`-panelen, högerklicka på mappen som innehåller `Program.cs`-filen, och välj `Open in Integrated Terminal`.
3. I terminalen, skriv in följande kommando och tryck enter:
	```
	dotnet add package Raylib-cs
	```
4. Vänta på att paketet ska laddas ner klart. Det kan ta några minuter.
5. I `Program.cs`-filen, använd följande kod (för att testa ifall det fungerar):
```cs
using Raylib_cs;

Raylib.InitWindow(800, 600, "Min Raylib App!");
Raylib.SetTargetFPS(30);

while (!Raylib.WindowShouldClose())
{
	
	Raylib.BeginDrawing();
	Raylib.ClearBackground(Color.DarkBlue);
	
	Raylib.DrawText("Hello, raylib-cs!", 300, 280, 20, Color.White);
	
	Raylib.EndDrawing();
	
}

Raylib.CloseWindow();
```
6. Kör `Program.cs`-filen, och du borde se ett litet fönster med texten `Hello, raylib-cs!` utmålad.
7. Lär dig raylib genom att läsa deras [hemsida](https://www.raylib.com/index.html). I ditt spel, försökt att främst använda cirklar (`DrawCircle()`), rektanglar `DrawRectangle()`, och sånt, så att grafikdelen inte blir för komplicerad.


## Raylib-övningar
::: exercise 1
Studera koden nedan för att lära dig grunderna i Raylib. Om du vill använda Raylib för att bygga ett spel så är det enklast att hålla sig till cirklar och rektanglar (blir enklast att implementera spellogiken då).

```cs
using Raylib_cs;

// Skapa ett fönster som är 800px bred, 600px hög
// och som har titeln "Min Raylib App!".
Raylib.InitWindow(800, 600, "Min Raylib App!");

// Tala om hur ofta vi ska måla om fönstret
// (hur många gånger per sekund loopen nedan
// ska köras).
Raylib.SetTargetFPS(30);

while (!Raylib.WindowShouldClose())
{
	
	// Innan man påbörjar en ny utmålning så
	// anropar man alltid BeginDrawing().
	Raylib.BeginDrawing();
	
	// Ofta will man anropa ClearBackground() med
	// en gång för att måla över allt det gamla
	// utmålade (i förra iterationen i loopen).
	Raylib.ClearBackground(Color.DarkBlue);

	// Här är exempel på anrop för att måla ut olika figurer.

	// DrawLine(int startPosX, int startPosY, int endPosX, int endPosY, Color color)
	Raylib.DrawLine(25, 25, 75, 75, Color.White);

	// DrawCircle(int centerX, int centerY, float radius, Color color)
	Raylib.DrawCircle(100, 100, 25, Color.Black);

	// DrawEllipse(int centerX, int centerY, float radiusH, float radiusV, Color color)
	Raylib.DrawEllipse(150, 150, 40, 20, Color.Red);

	// DrawRectangle(int leftX, int topY, int width, int height, Color color)
	Raylib.DrawRectangle(200, 200, 25, 35, Color.Yellow);
	
	// DrawText(string text, int leftX, int topY, int fontSize, Color color)
	Raylib.DrawText("Lite text...!", 250, 250, 20, Color.Lime);

	// EndDrawing() måste anropas i slutet för
	// att fönstret ska börja visa det nyutmålade.
	Raylib.EndDrawing();
	
}

// När programmet avslutas så avbryts loopen ovan,
// och då ska vi se till att fönstret försvinner
// genom att anropa CloseWindow().
Raylib.CloseWindow();
```
:::

::: exercise 2
Om du vill ha en figur som flyttar på sig så behöver du ändra dess X- eller Y- koordinat varje gång i loopen. Det kan du göra genom att spara ner figurens X- och Y-koordinater i variabler.

Studera koden nedan för att se ett exempel. 

```cs
using Raylib_cs;

Raylib.InitWindow(800, 600, "Min Raylib App!");
Raylib.SetTargetFPS(30);

double circleX = 50;
double circleY = 50;

while (!Raylib.WindowShouldClose())
{

	// Flytta cirkeln lite.
	circleX += 0.5;
	circleY += 1.5;
	
	Raylib.BeginDrawing();

	Raylib.ClearBackground(Color.DarkBlue);
	
	// Vi använder (int) för att konvertera double till int.
	Raylib.DrawCircle((int) circleX, (int) circleY, 25, Color.Black);

	Raylib.EndDrawing();

}

Raylib.CloseWindow();
```
:::

::: exercise 3
När figuren kommer till fönstrets kant så vill vi kanske att den ska "studsa" och byta håll. Då kan vi inte hårddkoda in att den ska röra sig `0.5` i X-led hela tiden, för efter studesen ska den röra sig `-0.5` i X-led!

Så istället för att hårdekoda X- och Y-hastigheten så lägger vi dem i variabler som vi kan ändra. Se koden nedan, och gör klart `TODO`-kommentaren som finns. När du är klar så bör cirkeln aldrig lämna fönstret! :D

```cs
using Raylib_cs;

Raylib.InitWindow(800, 600, "Min Raylib App!");
Raylib.SetTargetFPS(30);

double circleX = 50;
double circleY = 50;
double circleXSpeed = 0.5;
double circleYSpeed = 1.5;

while (!Raylib.WindowShouldClose())
{

	// Flytta cirkeln lite.
	circleX += circleXSpeed;
	circleY += circleYSpeed;
	
	// TODO: Här ska du skriva villkorssatser som kollar ifall
	// cirkeln har nått något av fönstrets kanter. När den gör
	// det så ska du flippa tecken på circleXSpeed/circleYSpeed.
	
	Raylib.BeginDrawing();

	Raylib.ClearBackground(Color.DarkBlue);
	
	Raylib.DrawCircle((int) circleX, (int) circleY, 25, Color.Black);

	Raylib.EndDrawing();

}

Raylib.CloseWindow();
```
:::

::: exercise 4
Kanske vill vi istället flytta figuren baserat på användarens input, så som beroende på vilka tangenter användaren trycker ner. Det är sådant vi sköter i loopen också. För ett exempel, se nedan. 

```cs
using Raylib_cs;

Raylib.InitWindow(800, 600, "Min Raylib App!");
Raylib.SetTargetFPS(30);

double circleX = 50;
double circleY = 50;
double circleXSpeed = 0.5;
double circleYSpeed = 1.5;

while (!Raylib.WindowShouldClose())
{

	// Flytta cirkeln lite endast om
	// piltangenterna är nedtryckta.
	if (Raylib.IsKeyDown(KeyboardKey.Right))
	{
		circleX += circleXSpeed;
	}
	if (Raylib.IsKeyDown(KeyboardKey.Left))
	{
		circleX -= circleXSpeed;
	}
	if (Raylib.IsKeyDown(KeyboardKey.Down))
	{
		circleY += circleYSpeed;
	}
	if (Raylib.IsKeyDown(KeyboardKey.Up))
	{
		circleY -= circleYSpeed;
	}

	Raylib.BeginDrawing();

	Raylib.ClearBackground(Color.DarkBlue);

	Raylib.DrawCircle((int)circleX, (int)circleY, 25, Color.Black);

	Raylib.EndDrawing();

}

Raylib.CloseWindow();
```

Men, ve och fasa, nu kan spelaren flytta cirkeln utanför fönstret! Ändra koden så att detta inte är möjligt (om cirkeln hamnar lite utanför, ändra dess X- och Y-koordinater så att den hamnar innanför med en gång igen).
:::

::: exercise 5
Eller varför inte flytta cirkeln dit användarens musposition är?

```cs
using System.Numerics;
using Raylib_cs;

Raylib.InitWindow(800, 600, "Min Raylib App!");
Raylib.SetTargetFPS(30);

double circleX = 50;
double circleY = 50;

while (!Raylib.WindowShouldClose())
{
	
	Vector2 mousePosition = Raylib.GetMousePosition();

	circleX = mousePosition.X;
	circleY = mousePosition.Y;

	Raylib.BeginDrawing();

	Raylib.ClearBackground(Color.DarkBlue);

	Raylib.DrawCircle((int)circleX, (int)circleY, 25, Color.Black);

	Raylib.EndDrawing();

}

Raylib.CloseWindow();
```
:::


::: exercise 6
Eller varför inte måla cirkeln där användaren klickar med musen?

```cs
using System.Numerics;
using Raylib_cs;

Raylib.InitWindow(800, 600, "Min Raylib App!");
Raylib.SetTargetFPS(30);

double circleX = 50;
double circleY = 50;

while (!Raylib.WindowShouldClose())
{

	if (Raylib.IsMouseButtonPressed(MouseButton.Left))
	{

		Vector2 mousePosition = Raylib.GetMousePosition();

		circleX = mousePosition.X;
		circleY = mousePosition.Y;
		
	}
	
	Raylib.BeginDrawing();

	Raylib.ClearBackground(Color.DarkBlue);

	Raylib.DrawCircle((int)circleX, (int)circleY, 25, Color.Black);

	Raylib.EndDrawing();

}

Raylib.CloseWindow();
```
:::

::: exercise 7
Skapa ett litet spel med en cirkel eller en fyrkant som studsar runt i fönstret. Spelet går ut på att användaren ska försöka klicka på figuren så många gånger som möjligt. Längst ner till höger ska det skrivas ut hur många gånger användaren har lyckats klicka på figuren hittills.

För att göra det lite svårare så ska figuren få en ny slumpad position varje gång användaren har lyckats klicka på den, och figuren ska också förflytta sig lite snabbare varje gång användaren lyckats klicka på den.
:::



## JSON REST API
Om du vill så kan ditt projekt använda sig av ett REST API på nätet som returnerar data i JSON-format. Om du vill göra detta så får själv hitta ett lämpligt REST API att använda. På detta vis kan du bygga en app som visar aktuell väderinformation, aktuella valutakurser, etc.

Som exempel här används ett REST API som heter [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Det är ett REST API som innehåller dummy-data och används endast till exempel/testing.

1. Hitta lämplig REST API att använda. I detta exempel JSONPlaceholder.
2. Hitta hur data-objekten REST API:t skickar tillbaka ser ut. I detta exempel kan man klicka på [Resources-länkarna](https://jsonplaceholder.typicode.com/#:~:text=Resources) för att se det.
3. Skapa C#-klasser för respektive data-objekt. Med Post-objekt som exempel:
	```cs
	public class Post
	{
		public int UserId { get; set; }
		public int Id { get; set; }
		public string Title { get; set; }
		public string Body { get; set; }
	}
	```
	Lägg dessa klasser i slutet i din C#-fil, alternativt i egna filer med samma filnamn som klassen (med `.cs` i slutet).
4. Hitta vilka requests du kan skicka tillREST API:t för att hämta data. I detta exempel alla GET requests på [Routes-länkarna](https://jsonplaceholder.typicode.com/#:~:text=Routes).
5. I toppen av din C#-fil, importera namnrymden `System.Net.Http.Json` med `using System.Net.Http.Json;`, och använd sedan `HttpClient` för att hämta data, t.ex.:
	```cs
	HttpClient http = new HttpClient();
	Post post = await http.GetFromJsonAsync<Post>("https://jsonplaceholder.typicode.com/posts/1");
	Console.WriteLine($"{post.Id}: {post.Title}");
	```

::: example
```cs
using System.Net.Http.Json;

HttpClient http = new HttpClient();

// Hämta posten med id 1.
Post post = await http.GetFromJsonAsync<Post>("https://jsonplaceholder.typicode.com/posts/1");
Console.WriteLine($"{post.Id}: {post.Title}");

// Hämta alla poster.
List<Post> posts = await http.GetFromJsonAsync<List<Post>>("https://jsonplaceholder.typicode.com/posts");

foreach (Post p in posts)
{
	Console.WriteLine($"{p.Id}: {p.Title}");
}

public class Post
{
	public int UserId { get; set; }
	public int Id { get; set; }
	public string Title { get; set; }
	public string Body { get; set; }
}
```
:::