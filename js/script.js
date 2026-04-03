async function fetchDailyReadings() {
  const res = await fetch('https://lectio-api.org/api/v1/readings/today?tradition=Roman Catholic');
  return await res.json();
  async function fetchDailyReadings() {
  const res = await fetch('https://lectio-api.org/api/v1/readings/today?tradition=Roman Catholic');
  return await res.json();
const enText = await fetchVerseText("John 20:1‑9", "en");
const frText = await fetchVerseText("John 20:1‑9", "fr");
const latText = await fetchVerseText("John 20:1‑9", "la");
}
