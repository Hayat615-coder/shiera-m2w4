# Weather App

A responsive weather dashboard built with HTML, JavaScript, and Tailwind CSS.

## Overview

This project is a weather search app that shows current weather details, a 7-day forecast, and hourly weather updates for a searched location.

The app uses:

- OpenStreetMap Nominatim for location search
- Open-Meteo for weather forecast and current weather data

## Features

- Search weather by city or place name
- Display current weather details:
  - location (city and country)
  - current local date
  - weather icon
  - current temperature
  - feels like temperature
  - humidity
  - wind speed
  - precipitation
- Show a 7-day daily forecast with high/low temperatures and weather icons
- Show hourly forecast entries for the selected day
- Toggle between metric and imperial units
- Responsive UI using Tailwind CSS and Google Fonts
- Loading animation while data is fetched

## Project structure

- `index.html` — page layout, search form, and result sections
- `index.js` — app logic, API calls, rendering, and unit switching
- `style-guide.md` — design reference and styling details
- `assets/` — image assets, icons, and background graphics

## How it works

1. The user enters a location in the search field and clicks **Search**.
2. `index.js` uses OpenStreetMap Nominatim to geocode the location name.
3. The app then calls Open-Meteo to fetch weather data for the chosen coordinates.
4. Current weather and forecast sections are updated with the returned data.
5. The units dropdown allows toggling between metric and imperial measurements.

## Running locally

1. Open `index.html` in your browser.
2. Enter a location and click **Search**.
3. Optionally use the units dropdown to swap metric/imperial data.

> If direct file access blocks API requests, start a local server and open the app from `http://localhost:8000`:
>
> `python -m http.server 8000`

## Notes

- The app fetches the first matching location returned by Nominatim.
- Temperature, wind speed, and precipitation units update when the unit toggle is changed.
- The hourly forecast display is populated from the API response and displayed in the hourly cards.
- Weather icons are selected based on Open-Meteo weather codes.

## Built with

- HTML
- JavaScript
- Tailwind CSS (CDN)
- Google Fonts
- OpenStreetMap Nominatim
- Open-Meteo API
