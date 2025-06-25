<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Wrestler Spinner Wheel</title>
  <style>
    body { font-family: sans-serif; text-align: center; margin: 20px; }
    #wheelCanvas { border: 2px solid #333; border-radius: 50%; }
    button { padding: 10px 20px; font-size: 16px; margin-top: 20px; }
  </style>
</head>
<body>
  <h1>Wrestler Spinner Wheel</h1>
  <canvas id="wheelCanvas" width="600" height="600"></canvas>
  <div>
    <button onclick="spinWheel()">Spin</button>
    <h2 id="result"></h2>
  </div>

  <script>
    const canvas = document.getElementById("wheelCanvas");
    const ctx = canvas.getContext("2d");
    const resultDisplay = document.getElementById("result");

    const wrestlers = [
      // WWE Main Roster (weight 1.0)
      "Roman Reigns", "Seth Rollins", "Cody Rhodes", "LA Knight", "Logan Paul", "Finn Bálor", "Damian Priest", "Gunther",
      "Kevin Owens", "Sami Zayn", "Jey Uso", "Jimmy Uso", "Solo Sikoa", "Randy Orton", "AJ Styles", "Austin Theory",
      "Grayson Waller", "Tommaso Ciampa", "Johnny Gargano", "Shinsuke Nakamura", "The Miz", "Bobby Lashley",
      "Bronson Reed", "Dominik Mysterio", "Rey Mysterio", "Santos Escobar", "Angel", "Humberto Carrillo",
      "Karrion Kross", "Sheamus", "Drew McIntyre", "Butch", "Tyler Bate", "Pete Dunne", "Ricochet",
      "Baron Corbin", "Omos", "Chad Gable", "Otis", "Apollo Crews", "Cedric Alexander",
      "Shelton Benjamin", "Edge", "John Cena",

      // NXT (weight 0.5)
      "Wes Lee", "Yoshiki Inamura", "Jasper Troy", "Oba Femi", "Noam Dar", "Ashante “Thee” Adonis",
      "Shawn Spears", "Tank Ledger", "Lexis King", "Tony D’Angelo", "Ricky Saints", "Je’Von Evans",
      "Hank Walker", "Trick Williams", "Tyriek Igwe", "Charlie Dempsey", "Channing “Stacks” Lorenzo", "Ridge Holland",

      // TNA, AAA, and Indie 0.25
      "Joe Hendry", "Adam Cole", "MJF", "Chris Jericho", "Hikuleo", "Mistico", "Nic Nemeth", "Matt Cardona",
      "Jay White", "Buddy Matthews", "Eddie Edwards", "Steve Maclin", "Frankie Kazarian", "Mike Bailey",
      "Josh Alexander", "Ace Austin", "Chris Bey", "Moose", "PCO", "Eric Young", "Trey Miguel", "Zachary Wentz",
      "Deaner", "Rhino", "Jake Something", "Crazzy Steve", "Black Taurus", "Laredo Kid", "Drago", "Pagano",
      "Mecha Wolf", "Bestia 666", "Rey Horus", "Murder Clown", "La Parka Negra", "Texano Jr.", "Psycho Clown",
      "El Cuatrero", "Sansón", "Forastero", "Villano III Jr.", "Dave the Clown", "Noisy Boy", "Jack Cartwheel",
      "Daga", "Arez", "Nicho el Millionario", "Aramis", "Gringo Loco",

      // Indie 0.3
      "Bryan Danielson", "Billy Gunn", "Judas Icarus", "Jimmy Lloyd", "Travis Williams", "El Hijo del Vikingo",
      "Komander", "Dragon Lee", "Andrade", "Rush", "Dralistico", "Bandido", "Angelico", "Jack Evans",
      "Delirious", "Cheeseburger",

      // Indie 0.125
      "John Skyler", "Hijo del Dr. Wagner Jr.", "Cuervo de Puerto Rico", "Mister Iguana", "El Zorro",
      "Super Crazy", "Seuxis", "Taurus", "Estrella Divina", "Vampiro", "Aerostar", "Látigo", "Heavy Metal",
      "Dr. Wagner Jr.", "Kaoz", "Texano", "Maximo", "Mr. Iguana", "Mascarita Dorada", "El Hijo del Vikingo Jr.",
      "El Mesías"
    ];

    const weights = [
      ...Array(44).fill(1.0),
      ...Array(18).fill(0.5),
      ...Array(49).fill(0.25),
      ...Array(16).fill(0.3),
      ...Array(21).fill(0.125)
    ];

    const weightedList = [];
    for (let i = 0; i < wrestlers.length; i++) {
      const count = Math.round(weights[i] * 100);
      for (let j = 0; j < count; j++) {
        weightedList.push(wrestlers[i]);
      }
    }

    const uniqueWrestlers = [...new Set(weightedList)];
    const sectionCount = uniqueWrestlers.length;
    const anglePerSection = (2 * Math.PI) / sectionCount;

    function drawWheel() {
      for (let i = 0; i < sectionCount; i++) {
        const angle = i * anglePerSection;
        ctx.beginPath();
        ctx.moveTo(300, 300);
        ctx.arc(300, 300, 300, angle, angle + anglePerSection);
        ctx.fillStyle = i % 2 === 0 ? "#fbb" : "#bdf";
        ctx.fill();
        ctx.save();
        ctx.translate(300, 300);
        ctx.rotate(angle + anglePerSection / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#000";
        ctx.font = "12px sans-serif";
        ctx.fillText(uniqueWrestlers[i], 290, 5);
        ctx.restore();
      }
    }

    let angle = 0;
    let spinning = false;

    function spinWheel() {
      if (spinning) return;
      spinning = true;
      const spinTime = 4000;
      const start = Date.now();
      const spin = () => {
        const elapsed = Date.now() - start;
        angle += 0.05 + (Math.max(0, spinTime - elapsed) / spinTime) * 0.3;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(300, 300);
        ctx.rotate(angle);
        ctx.translate(-300, -300);
        drawWheel();
        ctx.restore();

        if (elapsed < spinTime) {
          requestAnimationFrame(spin);
        } else {
          spinning = false;
          const selected = Math.floor((sectionCount - ((angle % (2 * Math.PI)) / anglePerSection)) % sectionCount);
          resultDisplay.textContent = `Selected: ${uniqueWrestlers[selected]}`;
        }
      };
      spin();
    }

    drawWheel();
  </script>
</body>
</html>
