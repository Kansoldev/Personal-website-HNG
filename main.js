// This array gets the actual day name, as getDay() only returns the day number
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date();

document.querySelector("[data-testid='currentDay']").textContent =
  days[currentDate.getDay()];

document.querySelector(
  "[data-testid='currentTimeUTC']"
).textContent = `${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()} (UTC)`;
