async function loadLiturgy() {
  try {
    const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
    // Fetch daily readings from the free Catholic Readings API
    const apiURL = `https://cpbjr.github.io/catholic-readings-api/readings/${today.slice(0,4)}/${today.slice(5) }.json`;
    const response = await fetch(apiURL);
    const data = await response.json();

    // Liturgical color from season info
    const colorSpan = document.getElementById("liturgicalColor");
    // Example: choose a color based on season (green for ordinary time, etc.)
    const season = data.season || "Ordinary Time";
    let bgColor = "green"; // default
    if (season.toLowerCase().includes("lent")) bgColor = "purple";
    if (season.toLowerCase().includes("easter") || season.toLowerCase().includes("christmas")) bgColor = "white";
    if (season.toLowerCase().includes("pentecost") || season.toLowerCase().includes("martyr")) bgColor = "red";

    colorSpan.textContent = season;
    colorSpan.style.backgroundColor = bgColor;

    // Display readings
    const readingsList = document.getElementById("readingsList");
    readingsList.innerHTML = ""; // clear old data
    if (data.readings) {
      Object.entries(data.readings).forEach(([key, text]) => {
        const li = document.createElement("li");
        li.textContent = `${key}: ${text}`;
        readingsList.appendChild(li);
      });
    }
  } catch (err) {
    console.error("Error loading liturgy data:", err);
    document.getElementById("readingsList").textContent = "Could not load today’s readings.";
  }
}

loadLiturgy();
