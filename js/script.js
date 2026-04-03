// Example: liturgical colors and sample readings
const liturgyData = {
  "2026-04-03": { color: "Purple", readings: ["Isaiah 50:4-7", "Philippians 2:6-11", "Mark 14:1-15:47"] },
  "2026-04-04": { color: "White", readings: ["Acts 10:34a, 37-43", "Colossians 3:1-4", "John 20:1-9"] },
  // Add more dates or later fetch from API
};

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

if (liturgyData[today]) {
  const liturgy = liturgyData[today];
  const colorSpan = document.querySelector("#liturgyColor span");
  const readingsList = document.getElementById("readingsList");

  // Set color
  colorSpan.textContent = liturgy.color;
  colorSpan.style.backgroundColor = liturgy.color.toLowerCase();

  // Add readings
  liturgy.readings.forEach(reading => {
    const li = document.createElement("li");
    li.textContent = reading;
    readingsList.appendChild(li);
  });
} else {
  document.getElementById("readingsList").innerHTML = "<li>No readings for today.</li>";
  document.querySelector("#liturgyColor span").textContent = "Unknown";
}
