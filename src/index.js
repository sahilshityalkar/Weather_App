const hello = function () {
    return console.log("hello world!");
  };

  const API_KEY = '42f96067a47f4375aed34430231907';

  const locationInput = document.getElementById('location');
  const getWeatherBtn = document.getElementById('getWeatherBtn');


  function getWeatherData(location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}`;

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data.');
            }
            return response.json();
        });
}