global.fetch = require('node-fetch');

const url = "http://weather.livedoor.com/forecast/webservice/json/v1?city=400040";

// fetch も Promise のように扱える
fetch(url)
.then(response => {
    console.log(response.status);
    // console.log(response);
    return response.json();
})
.catch(err => {
    console.log('request rejected:', err); // rejected: TypeError: Failed to fetch
})
.then(jsonData => {
    const pinpointLocations = jsonData['pinpointLocations'];
    const firstPinpointLocation = pinpointLocations[0];
    const firstPinpointLocationName = firstPinpointLocation['name'];
    console.log(firstPinpointLocationName);
});
