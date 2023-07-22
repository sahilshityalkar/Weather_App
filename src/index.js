const hello = function () {
    return console.log("hello world!");
  };

console.log(hello);

const API_KEY = '42f96067a47f4375aed34430231907';

function getWeaterData(location){
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  fetch(apiUrl)
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to fetch weather data.');
      }
      return response.json();
  })
  .then(data => {
      // Display the weather data in the console
      console.log(`Weather Data for ${location}:`);
      console.log(data);
  })
  .catch(error => {
      console.error(error.message);
  });
}

// Call the function with a location (e.g., 'New York')
const location = 'New York';
getWeatherData(location);