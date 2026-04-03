// Sample daily readings
const dailyReadings = [
  {
    name: "First Reading",
    eng: "Acts 2:14a,36-41 - Peter's sermon at Pentecost...",
    fr: "Actes 2:14a,36-41 - Le sermon de Pierre à la Pentecôte...",
    lat: "Actus Apostolorum 2:14a,36-41 - Praedicatio Petri in Pentecoste..."
  },
  {
    name: "Psalm",
    eng: "Psalm 118:1-2,16-17,22-23 - Give thanks to the Lord...",
    fr: "Psaume 118:1-2,16-17,22-23 - Rends grâce au Seigneur...",
    lat: "Psalmus 118:1-2,16-17,22-23 - Confitemini Domino..."
  },
  {
    name: "Gospel",
    eng: "John 20:1-9 - The empty tomb...",
    fr: "Jean 20:1-9 - Le tombeau vide...",
    lat: "Ioannes 20:1-9 - Sepulchrum vacuum..."
  }
];

// Sample liturgical color
const liturgicalColor = "Purple"; // Change based on season

document.getElementById("liturgicalColor").textContent = liturgicalColor;
document.getElementById("liturgicalColor").style.backgroundColor = liturgicalColor.toLowerCase();

const readingsContainer = document.getElementById("readingsList");

dailyReadings.forEach(reading => {
  const block = document.createElement("div");
  block.classList.add("reading-block");

  block.innerHTML = `
    <h3>${reading.name}</h3>
    <div class="bilingual">
      <div class="english"><h4>English</h4><p>${reading.eng}</p></div>
      <div class="latin"><h4>Latin</h4><p>${reading.lat}</p></div>
    </div>
    <div class="bilingual">
      <div class="french"><h4>Français</h4><p>${reading.fr}</p></div>
      <div class="latin2"><h4>Latin</h4><p>${reading.lat}</p></div>
    </div>
  `;

  readingsContainer.appendChild(block);
});
