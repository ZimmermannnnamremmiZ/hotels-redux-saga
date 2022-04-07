export const getHotels= async () => {
  const res = await fetch('http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=10');
  return await res.json();
};
