export const getHotels= async (searchCity) => {
  const res = await fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=${searchCity}&lang=ru&lookFor=both&limit=10`);
  return await res.json();
};
