async function fetchDailyReadings() {
  const res = await fetch('https://lectio-api.org/api/v1/readings/today?tradition=Roman Catholic');
  return await res.json();
}
