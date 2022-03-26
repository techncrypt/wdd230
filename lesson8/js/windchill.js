


const temp = parseInt(document.querySelector('#temperature').innerHTML);
const windy = parseInt(document.querySelector('#windSpeed').innerHTML);

let windChill = Math.round ((35.74 + (0.6215 * temp)) - (35.75 * (Math.pow(windy, 0.16))) + (0.4275 * (temp * (Math.pow(windy, 0.16)))));


if (temp <= 50 && windy > 3.0) {
 
    document.getElementById('windChill').innerHTML = `Wind Chill: ${windChill}&#176;F`;
} else {

    document.getElementById('windChill').innerHTML = `Wind Chill: N/A`;
};

