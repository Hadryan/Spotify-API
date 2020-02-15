// Create a map object
var myMap = L.map("map", {
  center: [40.5994, -45.6731],
  zoom: 3.4
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// NHL Birth City Data
var NHL_birthcity = [
    {
    location:  [ 49.0504,-122.3 ],player_cnt:7,
    nationality:"CAN",
    birthcity:"Abbotsford"
    },
{
    location:  [ 44.1667,-77.3833 ],
    player_cnt:8,
    nationality:"CAN",
    birthcity:"Belleville"
    },
{
    location:  [ 49.8333,-99.95 ],
    player_cnt:9,
    nationality:"CAN",
    birthcity:"Brandon"
    },
{
    location:  [ 51.083,-114.08 ],
    player_cnt:37,
    nationality:"CAN",
    birthcity:"Calgary"
    },
{
    location:  [ 53.55,-113.5 ],
    player_cnt:50,
    nationality:"CAN",
    birthcity:"Edmonton"
    },
{
    location:  [ 44.65,-63.6 ],
    player_cnt:8,
    nationality:"CAN",
    birthcity:"Halifax"
    },
{
    location:  [ 43.25,-79.83 ],
    player_cnt:18,
    nationality:"CAN",
    birthcity:"Hamilton"
    },
{
    location:  [ 44.2337,-76.4833 ],
    player_cnt:9,
    nationality:"CAN",
    birthcity:"Kingston"
    },
{
    location:  [ 43.45,-80.5 ],
    player_cnt:11,
    nationality:"CAN",
    birthcity:"Kitchener"
    },
{
    location:  [ 42.97,-81.25 ],
    player_cnt:20,
    nationality:"CAN",
    birthcity:"London"
    },
{
    location:  [ 45.5,-73.5833 ],
    player_cnt:31,
    nationality:"CAN",
    birthcity:"Montreal"
    },
{
    location:  [ 46.20006,-83.03317 ],
    player_cnt:24,
    nationality:"CAN",
    birthcity:"Mississauga"
    },
{
    location:  [ 43.5031,-79.6696 ],
    player_cnt:13,
    nationality:"CAN",
    birthcity:"Oakville"
    },
{
    location:  [ 45.56995,-73.692 ],
    player_cnt:12,
    nationality:"CAN",
    birthcity:"Laval"
    },
{
    location:  [ 43.87111,-79.43725 ],
    player_cnt:12,
    nationality:"CAN",
    birthcity:"Richmond Hill"
    },
{
    location:  [ 43.68341,-79.76633 ],
    player_cnt:10,
    nationality:"CAN",
    birthcity:"Brampton"
    },
{
    location:  [ 46.93342,-79.39965 ],
    player_cnt:8,
    nationality:"CAN",
    birthcity:"Burnaby"
    },
{
    location:  [ 46.51677,-84.33325 ],
    player_cnt:8,
    nationality:"CAN",
    birthcity:"Sault Ste. Marie"
    },
{
    location:  [ 42.98342,-79.24958 ],
    player_cnt:7,
    nationality:"CAN",
    birthcity:"Welland"
    },
{
    location:  [ 46.50014,-63.98203 ],
    player_cnt:6,
    nationality:"CAN",
    birthcity:"Richmond"
    },
{
    location:  [ 53.63344,-113.63533 ],
    player_cnt:6,
    nationality:"CAN",
    birthcity:"St. Albert"
    },
{
    location:  [ 43.77223,-79.25666 ],
    player_cnt:6,
    nationality:"CAN",
    birthcity:"Scarborough"
    },
{
    location:  [ 49.32018,-123.06995 ],
    player_cnt:6,
    nationality:"CAN",
    birthcity:"North Vancouver"
    },
{
    location:  [ 53.27237,-110.02256 ],
    player_cnt:6,
    nationality:"CAN",
    birthcity:"Lloydminster"
    },
{
    location:  [ 46.81334,-71.21451 ],
    player_cnt:5,
    nationality:"CAN",
    birthcity:"Quebec City"
    },
{
    location:  [ 45.11292,-64.81924 ],
    player_cnt:5,
    nationality:"CAN",
    birthcity:"Burlington"
    },
{
    location:  [ 45.82499,-66.91905 ],
    player_cnt:5,
    nationality:"CAN",
    birthcity:"Newmarket"
    },
{
    location:  [ 45.05725,-64.63478 ],
    player_cnt:5,
    nationality:"CAN",
    birthcity:"Cambridge"
    },
{
    location:  [ 43.17126,-79.24267 ],
    player_cnt:5,
    nationality:"CAN",
    birthcity:"St. Catharines"
    },
{
    location:  [ 45.4167,-75.7 ],
    player_cnt:26,
    nationality:"CAN",
    birthcity:"Ottawa"
    },
{
    location:  [ 44.3,-78.3333 ],
    player_cnt:5,
    nationality:"CAN",
    birthcity:"Peterborough"
    },
{
    location:  [ 52.2666,-113.8 ],
    player_cnt:5,
    nationality:"CAN",
    birthcity:"Red Deer"
    },
{
    location:  [ 50.45,-104.617 ],
    player_cnt:23,
    nationality:"CAN",
    birthcity:"Regina"
    },
{
    location:  [ 52.17,-106.67 ],
    player_cnt:20,
    nationality:"CAN",
    birthcity:"Saskatoon"
    },
{
    location:  [ 45.4,-71.9 ],
    player_cnt:5,
    nationality:"CAN",
    birthcity:"Sherbrooke"
    },
{
    location:  [ 46.5,-80.9666 ],
    player_cnt:7,
    nationality:"CAN",
    birthcity:"Sudbury"
    },
{
    location:  [ 48.4462,-89.275 ],
    player_cnt:13,
    nationality:"CAN",
    birthcity:"Thunder Bay"
    },
{
    location:  [ 43.7,-79.42 ],
    player_cnt:67,
    nationality:"CAN",
    birthcity:"Toronto"
    },
{
    location:  [ 49.2734,-123.1216 ],
    player_cnt:15,
    nationality:"CAN",
    birthcity:"Vancouver"
    },
{
    location:  [ 48.4333,-123.35 ],
    player_cnt:6,
    nationality:"CAN",
    birthcity:"Victoria"
    },
{
    location:  [ 42.3333,-83.0333 ],
    player_cnt:12,
    nationality:"CAN",
    birthcity:"Windsor"
    },
{
    location:  [ 44.9806,-64.1291 ],
    player_cnt:12,
    nationality:"CAN",
    birthcity:"Windsor"
    },
{
    location:  [ 49.883,-97.166 ],
    player_cnt:27,
    nationality:"CAN",
    birthcity:"Winnipeg"
    },
{
    location:  [ 46.9167,7.467 ],
    player_cnt:5,
    nationality:"CHE",
    birthcity:"Bern"
    },
{
    location:  [ 50.14734,14.10285 ],
    player_cnt:6,
    nationality:"CZE",
    birthcity:"Kladno"
    },
{
    location:  [ 49.7404,13.36 ],
    player_cnt:5,
    nationality:"CZE",
    birthcity:"Plzen"
    },
{
    location:  [ 50.0833,14.466 ],
    player_cnt:10,
    nationality:"CZE",
    birthcity:"Prague"
    },
{
    location:  [ 56.13615,8.97662 ],
    player_cnt:5,
    nationality:"DNK",
    birthcity:"Herning"
    },
{
    location:  [ 60.1756,24.9341 ],
    player_cnt:13,
    nationality:"FIN",
    birthcity:"Helsinki"
    },
{
    location:  [ 62.8943,27.6949 ],
    player_cnt:5,
    nationality:"FIN",
    birthcity:"Kuopio"
    },
{
    location:  [ 60.29414,25.04099 ],
    player_cnt:7,
    nationality:"FIN",
    birthcity:"Vantaa"
    },
{
    location:  [ 61.4789,21.7749 ],
    player_cnt:5,
    nationality:"FIN",
    birthcity:"Pori"
    },
{
    location:  [ 61.5,23.75 ],
    player_cnt:5,
    nationality:"FIN",
    birthcity:"Tampere"
    },
{
    location:  [ 60.4539,22.255 ],
    player_cnt:8,
    nationality:"FIN",
    birthcity:"Turku"
    },
{
    location:  [ 56.95,24.1 ],
    player_cnt:7,
    nationality:"LVA",
    birthcity:"Riga"
    },
{
    location:  [ 43.86682,-79.2663 ],
    player_cnt:7,
    nationality:"CAN",
    birthcity:"Markham"
    },
{
    location:  [ 55.155,61.4387 ],
    player_cnt:8,
    nationality:"RUS",
    birthcity:"Chelyabinsk"
    },
{
    location:  [ 55.7522,37.6155 ],
    player_cnt:21,
    nationality:"RUS",
    birthcity:"Moscow"
    },
{
    location:  [ 57.62987,39.87368 ],
    player_cnt:5,
    nationality:"RUS",
    birthcity:"Yaroslavl"
    },
{
    location:  [ 48.7304,21.25 ],
    player_cnt:5,
    nationality:"SVK",
    birthcity:"Kosice"
    },
{
    location:  [ 57.77758,11.86747 ],
    player_cnt:12,
    nationality:"SWE",
    birthcity:"Gothenburg"
    },
{
    location:  [ 58.73333,16.68333 ],
    player_cnt:8,
    nationality:"SWE",
    birthcity:"Gävle"
    },
{
    location:  [ 64.75067,20.95279 ],
    player_cnt:8,
    nationality:"SWE",
    birthcity:"Skellefteå"
    },
{
    location:  [ 59.19554,17.62525 ],
    player_cnt:5,
    nationality:"SWE",
    birthcity:"Sodertalje"
    },
{
    location:  [ 59.3508,18.0973 ],
    player_cnt:30,
    nationality:"SWE",
    birthcity:"Stockholm"
    },
{
    location:  [ 61.1508,-149.1091 ],
    player_cnt:10,
    nationality:"USA",
    birthcity:"Anchorage"
    },
{
    location:  [ 42.2755,-83.7312 ],
    player_cnt:7,
    nationality:"USA",
    birthcity:"Ann Arbor"
    },
{
    location:  [ 44.8306,-93.3151 ],
    player_cnt:7,
    nationality:"USA",
    birthcity:"Bloomington"
    },
{
    location:  [ 42.9017,-78.8487 ],
    player_cnt:9,
    nationality:"USA",
    birthcity:"Buffalo"
    },
{
    location:  [ 44.7648,-93.2795 ],
    player_cnt:5,
    nationality:"USA",
    birthcity:"Burnsville"
    },
{
    location:  [ 41.8373,-87.6862 ],
    player_cnt:10,
    nationality:"USA",
    birthcity:"Chicago"
    },
{
    location:  [ 39.7621,-104.8759 ],
    player_cnt:7,
    nationality:"USA",
    birthcity:"Denver"
    },
{
    location:  [ 42.3834,-83.1024 ],
    player_cnt:9,
    nationality:"USA",
    birthcity:"Detroit"
    },
{
    location:  [ 46.7757,-92.1392 ],
    player_cnt:5,
    nationality:"USA",
    birthcity:"Duluth"
    },
{
    location:  [ 44.8488,-93.4595 ],
    player_cnt:5,
    nationality:"USA",
    birthcity:"Eden Prairie"
    },
{
    location:  [ 44.8914,-93.3602 ],
    player_cnt:7,
    nationality:"USA",
    birthcity:"Edina"
    },
{
    location:  [ 42.9615,-85.6557 ],
    player_cnt:5,
    nationality:"USA",
    birthcity:"Grand Rapids"
    },
{
    location:  [ 42.3972,-83.3733 ],
    player_cnt:6,
    nationality:"USA",
    birthcity:"Livonia"
    },
{
    location:  [ 33.798,-118.1675 ],
    player_cnt:5,
    nationality:"USA",
    birthcity:"Long Beach"
    },
{
    location:  [ 34.1139,-118.4068 ],
    player_cnt:5,
    nationality:"USA",
    birthcity:"Los Angeles"
    },
{
    location:  [ 43.0827,-89.3923 ],
    player_cnt:8,
    nationality:"USA",
    birthcity:"Madison"
    },
{
    location:  [ 44.9635,-93.2678 ],
    player_cnt:13,
    nationality:"USA",
    birthcity:"Minneapolis"
    },
{
    location:  [ 40.4396,-79.9763 ],
    player_cnt:12,
    nationality:"USA",
    birthcity:"Pittsburgh"
    },
{
    location:  [ 43.168,-77.6162 ],
    player_cnt:11,
    nationality:"USA",
    birthcity:"Rochester"
    },
{
    location:  [ 38.6358,-90.2451 ],
    player_cnt:11,
    nationality:"USA",
    birthcity:"St. Louis"
    },
{
    location:  [ 44.9477,-93.104 ],
    player_cnt:5,
    nationality:"USA",
    birthcity:"St. Paul"
    },
{
    location:  [ 43.0409,-76.1438 ],
    player_cnt:5,
    nationality:"USA",
    birthcity:"Syracuse"
        }
];



// Loop through the cities array and create one marker for each city object
for (var i = 0; i < NHL_birthcity.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (NHL_birthcity[i].player_cnt > 30) {
    color = "yellow";
  }
  else if (NHL_birthcity[i].player_cnt > 20) {
    color = "blue";
  }
  else if (NHL_birthcity[i].player_cnt > 10) {
    color = "green";
  }
  else {
    color = "red";
  }

  // Add circles to map
  L.circle(NHL_birthcity[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: NHL_birthcity[i].player_cnt * 4500
  }).bindPopup("<h2>Birth City: " + NHL_birthcity[i].birthcity + "</h2> <hr> <h3>Players: " + NHL_birthcity[i].player_cnt + "</h3>").addTo(myMap);
}
