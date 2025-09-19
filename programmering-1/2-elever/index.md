# Årskurs 2-elever
De elever som läser den här kursen och som går i årskurs 2 och som redan kan grunderna i programmering kan arbeta på ett eget (individuellt) litet programmeringsprojekt istället för att göra övningarna på lektionerna. Projektet får ni komma på själva, men det skulle t.ex. kunna vara:

* Ett "hänga gubbe"-spel (konsollprogram).
* Ett Ping Pong-spel.
* Ett breakout-spel.
* Ett program som kommer ihåg och visar information om de personer man känner och ger till programmet.
* Etc.

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