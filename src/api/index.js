export const getHotels= async (searchCity, checkIn, checkOut) => {
  const res = await fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${searchCity}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`);
  return await res.json();
};

// export const getHotels= async (id) => {
//   const res = await fetch(`http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2020-06-30&checkOut=2022-06-25&limit=10`)
//   // const res = await fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=${lat},${lon}&checkIn=${checkIn}&checkOut=${checkOut}&lang=ru&lookFor=hotel`);
//   return await res.json();
// };

// http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2020-12-10&checkOut=2020-12-12&limit=10