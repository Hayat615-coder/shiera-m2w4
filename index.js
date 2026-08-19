const state = {
  location: null,
  units: {
    temp: "celsius",
    wind: "kmh",
    precip: "mm",
  },
  weatherData: null,
  selectedDayIndex: 0,
};
const units = document.getElementById("unit-measure");
const searchBtn = document.getElementById("search-btn");
const daySelector = document.getElementById("day-selector");
const container = document.getElementById("hourly-container");
const content = document.getElementById("content");

if (daySelector) {
  daySelector.addEventListener("change", () => {
    if (state.weatherData) {
      hourlyForecastDaySelector(state.weatherData);
    }
  });
}
const loader = document.getElementById("loader");
const main = document.getElementById("main");
const currentCity = document.getElementById("currentCity");
const currentDate = document.getElementById("currentDate");
const currentIcon = document.getElementById("currentIcon");
const currentTemp = document.getElementById("currentTemp");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const precip = document.getElementById("precip");
const tueUp = document.getElementById("tueUp");
const tueL = document.getElementById("tueL");
const wedUp = document.getElementById("wedUp");
const wedL = document.getElementById("wedL");
const thuUp = document.getElementById("thuUp");
const thuL = document.getElementById("thuL");
const friUp = document.getElementById("friUp");
const friL = document.getElementById("friL");
const satUp = document.getElementById("satUp");
const satL = document.getElementById("satL");
const sunUp = document.getElementById("sunUp");
const sunL = document.getElementById("sunL");
const monUp = document.getElementById("monUp");
const monL = document.getElementById("monL");

units.classList.add("relative");

const unitDiv = document.createElement("div");
unitDiv.className =
  "absolute top-full right-0 mt-1 z-10 w-60 bg-gray-800 text-white rounded-lg border border-gray-700 cursor-pointer list-none select-none hover:border-white p-3 shadow-lg hidden";

const switchBtn = document.createElement("button");
switchBtn.className =
  "bg-[hsl(231,7%,20%)] hover:border hover:border-white text-white font-semibold py-2 px-4 rounded-lg border border-gray-700 focus:outline-none hover:cursor-pointer w-full text-center mb-2";
switchBtn.innerText = `Switch to imperial`;

const par = document.createElement("p");
par.className = "text-gray-400 text-sm mb-2";
par.innerText = `Temperature`;

const button1 = document.createElement("button");
button1.className =
  "bg-[hsl(231,7%,20%)] flex items-center justify-between w-full text-white font-semibold py-2 px-4 rounded-lg border border-gray-700 focus:outline-none hover:cursor-pointer mb-1";
button1.innerText = `Celsius`;
const chaker1 = document.createElement("input");
chaker1.type = "checkbox";
chaker1.checked = true;
chaker1.className = "ml-2 pointer-events-none";
button1.appendChild(chaker1);

const button2 = document.createElement("button");
button2.className =
  "bg-[hsl(231,7%,20%)] text-white flex items-center justify-between w-full font-semibold py-2 px-4 rounded-lg border border-gray-700 focus:outline-none hover:cursor-pointer";
button2.innerText = `Fahrenheit`;
const chaker2 = document.createElement("input");
chaker2.type = "checkbox";
chaker2.className = "ml-2 pointer-events-none";
button2.appendChild(chaker2);

const par2 = document.createElement("p");
par2.className = "text-gray-400 text-sm mt-2 mb-2";
par2.innerText = `Wind Speed`;

const button3 = document.createElement("button");
button3.className =
  "bg-[hsl(231,7%,20%)] text-white flex items-center justify-between w-full font-semibold py-2 px-4 rounded-lg border border-gray-700 focus:outline-none hover:cursor-pointer mb-1";
button3.innerText = `km/h`;
const chaker3 = document.createElement("input");
chaker3.type = "checkbox";
chaker3.checked = true;
chaker3.className = "ml-2 pointer-events-none";
button3.appendChild(chaker3);

const button4 = document.createElement("button");
button4.className =
  "bg-[hsl(231,7%,20%)] text-white flex items-center justify-between w-full font-semibold py-2 px-4 rounded-lg border border-gray-700 focus:outline-none hover:cursor-pointer";
button4.innerText = `mph`;
const chaker4 = document.createElement("input");
chaker4.type = "checkbox";
chaker4.className = "ml-2 pointer-events-none";
button4.appendChild(chaker4);

const par3 = document.createElement("p");
par3.className = "text-gray-400 text-sm mt-2 mb-2";
par3.innerText = `Precipitation`;

const button5 = document.createElement("button");
button5.className =
  "bg-[hsl(231,7%,20%)] text-white flex items-center justify-between w-full font-semibold py-2 px-4 rounded-lg border border-gray-700 focus:outline-none hover:cursor-pointer mb-1";
button5.innerText = `millimeters (mm)`;
const chaker5 = document.createElement("input");
chaker5.type = "checkbox";
chaker5.checked = true;
chaker5.className = "ml-2 pointer-events-none";
button5.appendChild(chaker5);

const button6 = document.createElement("button");
button6.className =
  "bg-[hsl(231,7%,20%)] text-white flex items-center justify-between w-full font-semibold py-2 px-4 rounded-lg border border-gray-700 focus:outline-none hover:cursor-pointer";
button6.innerText = `inches (in)`;
const chaker6 = document.createElement("input");
chaker6.type = "checkbox";
chaker6.className = "ml-2 pointer-events-none";
button6.appendChild(chaker6);

unitDiv.append(
  switchBtn,
  par,
  button1,
  button2,
  par2,
  button3,
  button4,
  par3,
  button5,
  button6,
);
units.appendChild(unitDiv);

units.addEventListener("click", (e) => {
  e.stopPropagation();
  unitDiv.classList.toggle("hidden");
});

unitDiv.addEventListener("click", (e) => e.stopPropagation());
document.addEventListener("click", () => unitDiv.classList.add("hidden"));

const updateCheckboxUI = () => {
  chaker1.checked = state.units.temp === "celsius";
  chaker2.checked = state.units.temp === "fahrenheit";
  chaker3.checked = state.units.wind === "kmh";
  chaker4.checked = state.units.wind === "mph";
  chaker5.checked = state.units.precip === "mm";
  chaker6.checked = state.units.precip === "inch";
  const isMetric = state.units.temp === "celsius";
  switchBtn.innerText = isMetric ? "Switch to imperial" : "Switch to metric";
};
switchBtn.addEventListener("click", () => {
  const isMetric = state.units.temp === "celsius";
  state.units = isMetric
    ? { temp: "fahrenheit", wind: "mph", precip: "inch" }
    : { temp: "celsius", wind: "kmh", precip: "mm" };
  updateCheckboxUI();
  if (state.location) {
    getWeatherData(state.location.lat, state.location.lon, {
      state: state.location.name,
      country: state.location.country,
    });
  }
});

async function getGeoData() {
  showLoading();
  const defaultLocation = "Berlin, Germany";
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(defaultLocation)}&format=jsonv2&addressdetails=1`;
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "WeatherApp/1.0" },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    if (!result || result.length === 0) {
      throw new Error("Default location not found");
    }

    const locationAddress = result[0].address;
    const lat = result[0].lat;
    const lon = result[0].lon;

    state.location = {
      name:
        locationAddress.city ||
        locationAddress.town ||
        locationAddress.village ||
        locationAddress.state ||
        defaultLocation,
      country: locationAddress.country || "",
      lat,
      lon,
    };

    await getWeatherData(lat, lon, locationAddress);
  } catch (error) {
    console.error(error.message);
    hideLoading();
  } finally {
    hideLoading();
  }
}

function showLoading() {
  if (loader) {
    loader.classList.remove("hidden");
  }
  if (main) {
    main.classList.add("hidden");
  }
}

function hideLoading() {
  if (loader) {
    loader.classList.add("hidden");
  }
  if (main) {
    main.classList.remove("hidden");
  }
}

function loadLocationData(locationName, timezone = "UTC") {
  const cityName =
    locationName.city ||
    locationName.town ||
    locationName.village ||
    locationName.state ||
    locationName.county ||
    "Unknown Location";
  const countryName = locationName.country || "";

  let dateOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: timezone,
  };
  let date = new Intl.DateTimeFormat("en-US", dateOptions).format(new Date());
  currentCity.innerText = `${cityName}, ${countryName}`;
  currentDate.innerText = date;

  console.log(cityName, countryName);
  console.log(`${cityName}, ${countryName} (${timezone}):`, date);
}

async function getWeatherData(lat, lon, locationName) {
  let tempUnit = "celsius";
  let windUnit = "kmh";
  let precipUnit = "mm";

  if (state.units.temp === "fahrenheit") {
    tempUnit = "fahrenheit";
    windUnit = "mph";
    precipUnit = "inch";
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m&hourly=weather_code&current=temperature_2m,precipitation,wind_speed_10m,relative_humidity_2m,apparent_temperature,weather_code&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}&timezone=auto`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    state.weatherData = result;
    // update location display using timezone returned by API (fallback to UTC)
    loadLocationData(locationName, result.timezone);
    hourlyForecastDaySelector(result);

    loadHourlyForecast(result);
    loadDailyForecast(result);
    loadWeatherData(result);
    loadCurrentWeather(result);
    loadHourlyTemp(result);
    loadHourlyIcon(result);
    currentIcon.src = `./assets/images/${getWeatherFileName(result.current.weather_code)}`;
  } catch (error) {
    console.error(error.message);
  }
}

function loadWeatherData(weather) {
  console.log(weather);

  tueUp.textContent = Math.round(weather.daily.temperature_2m_max[0]) + "°";
  tueL.textContent = Math.round(weather.daily.temperature_2m_min[0]) + "°";
  wedUp.textContent = Math.round(weather.daily.temperature_2m_max[1]) + "°";
  wedL.textContent = Math.round(weather.daily.temperature_2m_min[1]) + "°";
  thuUp.textContent = Math.round(weather.daily.temperature_2m_max[2]) + "°";
  thuL.textContent = Math.round(weather.daily.temperature_2m_min[2]) + "°";
  friUp.textContent = Math.round(weather.daily.temperature_2m_max[3]) + "°";
  friL.textContent = Math.round(weather.daily.temperature_2m_min[3]) + "°";
  satUp.textContent = Math.round(weather.daily.temperature_2m_max[4]) + "°";
  satL.textContent = Math.round(weather.daily.temperature_2m_min[4]) + "°";
  sunUp.textContent = Math.round(weather.daily.temperature_2m_max[5]) + "°";
  sunL.textContent = Math.round(weather.daily.temperature_2m_min[5]) + "°";
  monUp.textContent = Math.round(weather.daily.temperature_2m_max[6]) + "°";
  monL.textContent = Math.round(weather.daily.temperature_2m_min[6]) + "°";
}
function loadCurrentWeather(weather) {
  currentTemp.innerText =
    Math.round(weather.current.apparent_temperature) + "°";
  feelsLike.textContent = Math.round(weather.current.temperature_2m);
  humidity.textContent = `${weather.current.relative_humidity_2m}%`;
  wind.textContent = `${Math.round(weather.current.wind_speed_10m)} ${state.units.wind === "mph" ? "mph" : "km/h"}`;
  precip.textContent = `${Math.round(weather.current.precipitation)} ${state.units.precip === "inch" ? "inch" : "mm"}`;
}
function loadDailyForecast(weather) {
  const dailyForecast = weather.daily;
  const days = document.querySelectorAll(".day");

  days.forEach((day, index) => {
    if (index >= dailyForecast.time.length) return;
    const date = new Date(dailyForecast.time[index]);
    const dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
    day.textContent = dayOfWeek;
  });

  const dailyIcons = document.querySelectorAll(
    "#main .grid.grid-cols-3 img.image",
  );
  dailyForecast.weather_code.forEach((weatherCode, index) => {
    if (dailyIcons[index]) {
      dailyIcons[index].src =
        `./assets/images/${getWeatherFileName(weatherCode)}`;
    }
  });

  const day1 = document.getElementById("day1");
  if (dailyForecast.time.length > 0 && day1) {
    const firstDay = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(new Date(dailyForecast.time[0]));
    day1.textContent = firstDay;
  }
}
function getWeatherFileName(code) {
  if (code === 0) {
    return "icon-0.webp";
  }
  if ([1, 2].includes(code)) {
    return "icon-2.webp";
  }
  if (code === 3) {
    return "icon-3.webp";
  }
  if ([45, 48].includes(code)) {
    return "icon-45.webp";
  }
  if ([51, 53, 55, 56, 57].includes(code)) {
    return "icon-53.webp";
  }
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return "icon-81.webp";
  }
  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return "icon-73.webp";
  }
  if ([95, 96, 99].includes(code)) {
    return "icon-95.webp";
  }

  return "icon-0.webp";
}
function loadHourlyIcon(weather, startIndex = 0) {
  const hourlyIcons = (weather.hourly && weather.hourly.weather_code) || [];
  const imgs = document.querySelectorAll("#hourly-container ul li img");
  const count = Math.min(imgs.length, hourlyIcons.length, 8);
  for (let i = 0; i < count; i++) {
    const dataIndex = startIndex + i * 3;
    if (imgs[i])
      imgs[i].src =
        `./assets/images/${getWeatherFileName(hourlyIcons[dataIndex])}`;
  }
}
function loadHourlyTemp(weather, startIndex = 0) {
  console.log(weather);

  let hourlyTemp = weather.hourly.temperature_2m;
  for (let i = 0; i < 7; i++) {
    const dataIndex = startIndex + i * 3;
    const tempObj = Math.round(hourlyTemp[dataIndex]);
    const temp = document.getElementById(`temp_${i + 1}`);
    if (temp) {
      temp.textContent = tempObj;
    }
  }
  console.log(hourlyTemp);
}
function loadHourlyForecast(weather, startIndex = 0) {
  console.log(weather);
  let hours = weather.hourly.time;
  for (let i = 0; i < 7; i++) {
    const dataIndex = startIndex + i * 3;
    const dateObj = new Date(hours[dataIndex]);
    const hr = dateObj.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    const times = document.getElementById(`time_${i + 1}`);
    if (times) {
      times.innerText = hr;
    }
  }
}

function hourlyForecastDaySelector(weather, day) {
  console.log(weather);
  const selectedDay = (
    day ||
    document.getElementById("day-selector")?.value ||
    ""
  ).toLowerCase();
  let dayIndex = 0;
  switch (selectedDay) {
    case "monday":
      dayIndex = 0;
      break;
    case "tuesday":
      dayIndex = 1;
      break;
    case "wednesday":
      dayIndex = 2;
      break;
    case "thursday":
      dayIndex = 3;
      break;
    case "friday":
      dayIndex = 4;
      break;
    case "saturday":
      dayIndex = 5;
      break;
    case "sunday":
      dayIndex = 6;
      break;
    default:
      dayIndex = 0;
      break;
  }
  const startIndex = dayIndex * 24;
  loadHourlyIcon(weather, startIndex);
  loadHourlyForecast(weather, startIndex);
  loadHourlyTemp(weather, startIndex);
}

searchBtn.addEventListener("click", (e) => {
  showLoading();
  e.preventDefault();
  const searchInput = document.getElementById("search-input");
  const query = searchInput.value.trim();

  if (query) {
    searchLocation(query);
    searchInput.value = "";
  }
});

async function searchLocation(query) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=jsonv2&addressdetails=1`,
      {
        headers: { "User-Agent": "WeatherApp/1.0" },
      },
    );

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    if (!data || data.length === 0) {
      throw new Error("Location not found");
    }

    console.log("Geo Result:", data[0]);

    const { lat, lon, address } = data[0];
    const cityName =
      address.city || address.town || address.village || address.state || query;
    const countryName = address.country || "";
    const locationName = address;

    if (typeof state !== "undefined") {
      state.location = { name: cityName, country: countryName, lat, lon };
    }

    await getWeatherData(lat, lon, locationName);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    main.innerText = "No Search Result Found!!";
    main.className = "text-white mt-14";
  } finally {
    hideLoading();
  }
}
getGeoData();
