export const getHotels= async (searchCity, checkIn, checkOut) => {
  const res = await fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=${searchCity}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`);
  return await res.json();
};
