// REQUEST THE DATA
const url5 = "http://127.0.0.1:5000/viral_viz";
d3.json(url5).then(function(data) {
  console.log(data)
  // var stackedData = d3.stack(data)
  // console.log(stackedData)
  var days = Object.values(data['Days'])
  // console.log(days)
  var streams = Object.values(data['Streams'])
  var artist = Object.values(data['Artist and Title'])
  var postion = Object.values(data['Pos'])

  var trace1 = {
    x: artist,
    y: streams,
    mode: 'markers',
    opacity : .7,
    type: 'scatter',
    name: 'streams',
    text: artist,
    marker: { color : 'Blue',
      size: 12,
      line: {
        color: 'MediumPurple',
        width: 1
    }
   }
  };

  var trace2 = {
    x: artist,
    y: days,
    yaxis: 'y2',
    opacity : .4,
    type: 'bar',
    name: 'days on charts',
    marker: { color : 'green',
      size: 2,
      line: {
        color: 'MediumPurple',
        width: 2
      }
      }
  };
  
  var data = [ trace1,trace2 ];
  
  var layout = {
    title: 'Viral new Tracks',
    xaxis: {
      tickmode: 'auto',
      showticksuffix: 'first',
      ticksuffix: 'string',

    },
    yaxis: {
      title: 'Streams'
    },
    yaxis2:{
      title: 'Days on Chart',
      titlefont: {color: 'rgb(148, 103, 189)'},
      tickfont: {color: 'rgb(148, 103, 189)'},
      overlaying: 'y',
      side: 'right'
    }
  };
  

Plotly.newPlot('my_dataviz', data, layout);
});

const url9 = "http://127.0.0.1:5000/category";
d3.json(url9).then(function(data) {
  //  console.log(data)
  var category = Object.values(data['category'])
  // console.log(category)
  var streams = Object.values(data['streams'])
  // console.log(streams)
  var artist = Object.values(data['artist'])
  // console.log(artist)
  var valence = Object.values(data['valence'])
  var acousticness = Object.values(data['acousticness'])

  var trace1 = {
    x: category,
    y: acousticness,
    mode: 'markers',
    type: 'scatter',
    fill: 'tozeroy',
    opacity : .4,
    width: .25,
    name: 'valence',
    marker: { color : 'Blue',
      size: 12,
      line: {
        color: 'MediumPurple'
        
    }
   }
  };

  var trace2 = {
    x: category,
    y: streams,
    yaxis: 'y2',
    opacity : .4,
    type: 'bar',
    width: .7,
    name: 'streams',
    marker: { color : 'green',
      size: 2,
      line: {
        color: 'MediumPurple',
        width: 2
      }
      }
  };
  
  var data = [ trace1,trace2 ];
  
  var layout = {
    title: 'Category of Streams and Valence',
    xaxis: {
      tickmode: 'auto',
      showticksuffix: 'first',
      ticksuffix: 'string',

    },
    yaxis: {
      title: 'Valence'
    },
    yaxis2:{
      title: 'Streams',
      titlefont: {color: 'rgb(148, 103, 189)'},
      tickfont: {color: 'rgb(148, 103, 189)'},
      overlaying: 'y',
      side: 'right'
    }
  };
  
  Plotly.newPlot('categories', data, layout);
});

const url3 = "http://127.0.0.1:5000/bday_group1";
d3.json(url3).then(function(data) {
  //  console.log(data)
  var category = Object.values(data['category'])
  console.log(category)
  var streams = Object.values(data['streams'])
  // console.log(streams)
  var artist = Object.values(data['artist'])
  // console.log(artist)
  var weeks = Object.values(data['weeks'])
  var key = Object.values(data['key'])
  var dance = Object.values(data['dance'])
  var energy = Object.values(data['energy'])
  var acoustic = Object.values(data['acousticness'])
  var loudness = Object.values(data['loudness'])
  var live = Object.values(data['liveness'])
  var valence = Object.values(data['valence'])

  // var mode = Object.values(data['id'])
  // var goals = Object.values(data['goals'])
  // console.log(goals)
  // var assists = Object.values(data['assists'])
  // console.log(assists)
  // var points = Object.values(data['points'])
  // var firstname = Object.values(data['first_name'])
  // var lastname = Object.values(data['last_name'])
  // var games_played = Object.values(data['games'])
  // var nationality = Object.values(data['nation'])
 
  
  var trace1 = {
    x: artist,
    y: dance,
    mode: 'line',
    opacity : .5,
    name: 'danceability',
    type: 'scatter',
    fill: 'tozeroy'
  };
  
  var trace2 = {
    x: artist,
    y: live,
    mode: 'line',
    opacity : .9,
    name: 'liveness',
    type: 'scatter',
    fill: 'tonezoy',
    width: 9
  };
  
  var trace3 = {
    x: artist,
    y: energy,
    mode: 'line',
    opacity : .9,
    name: 'energy',
    type: 'scatter',
    fill: 'tonezoy',
    width: 9
  };
  
  var trace4 = {
    x: artist,
    y: acoustic,
    mode: 'line',
    opacity : .8,
    name: 'acousticness',
    type: 'scatter',
    fill: 'tozeroy'
  };
  
  var stuff = [trace1, trace2, trace3, trace4];
  
  var layout = {
    title: 'Top Charts and Features',
    yaxis: {
      title: 'Measure of Audio Feature',
      titlefont: {color: '#1f77b4'},
      tickfont: {color: '#1f77b4'}
    },
    yaxis2: {
      title: 'yaxis2 title',
      titlefont: {color: '#ff7f0e'},
      tickfont: {color: '#ff7f0e'},
    },
    yaxis3: {
      title: 'yaxis4 title',
      titlefont: {color: '#d62728'},
      tickfont: {color: '#d62728'},
    },
    yaxis4: {
      title: 'yaxis5 title',
      titlefont: {color: '#9467bd'},
      tickfont: {color: '#9467bd'},
    }
  };
  

Plotly.newPlot("histogram", stuff, layout);
});


const url7 = "http://127.0.0.1:5000/one_song";
d3.json(url7).then(function(data) {
   console.log(data)
  
  var streams = Object.values(data['streams'])
  // console.log(streams)
  var artist = Object.values(data['artist'])
  // console.log(artist)
  var weeks = Object.values(data['weeks'])
  var key = Object.values(data['key'])
  var dance = Object.values(data['dance'])
  var energy = Object.values(data['energy'])
  var acoustic = Object.values(data['acousticness'])
  var loudness = Object.values(data['loudness'])
  var live = Object.values(data['liveness'])
  var valence = Object.values(data['valence'])

  // var mode = Object.values(data['id'])
  // var goals = Object.values(data['goals'])
  // console.log(goals)
  // var assists = Object.values(data['assists'])
  // console.log(assists)
  // var points = Object.values(data['points'])
  // var firstname = Object.values(data['first_name'])
  // var lastname = Object.values(data['last_name'])
  // var games_played = Object.values(data['games'])
  // var nationality = Object.values(data['nation'])
 
  
//   var trace1 = {
//     x: artist,
//     y: dance,
//     mode: 'line',
//     opacity : .5,
//     name: 'danceability',
//     type: 'scatter',
//     fill: 'tozeroy'
//   };
  
//   var trace2 = {
//     x: artist,
//     y: live,
//     mode: 'line',
//     opacity : .9,
//     name: 'liveness',
//     type: 'scatter',
//     fill: 'tonezoy',
//     width: 9
//   };
  
//   var trace3 = {
//     x: artist,
//     y: energy,
//     mode: 'line',
//     opacity : .9,
//     name: 'energy',
//     type: 'scatter',
//     fill: 'tonezoy',
//     width: 9
//   };
  
//   var trace4 = {
//     x: artist,
//     y: acoustic,
//     mode: 'line',
//     opacity : .8,
//     name: 'acousticness',
//     type: 'scatter',
//     fill: 'tozeroy'
//   };
  
//   var stuff = [trace1, trace2, trace3, trace4];
  
//   var layout = {
//     title: 'Bottom of the Charts',
//     yaxis: {
//       title: 'Measure of Audio Feature',
//       titlefont: {color: '#1f77b4'},
//       tickfont: {color: '#1f77b4'}
//     },
//     yaxis2: {
//       title: 'yaxis2 title',
//       titlefont: {color: '#ff7f0e'},
//       tickfont: {color: '#ff7f0e'},
//     },
//     yaxis3: {
//       title: 'yaxis4 title',
//       titlefont: {color: '#d62728'},
//       tickfont: {color: '#d62728'},
//     },
//     yaxis4: {
//       title: 'yaxis5 title',
//       titlefont: {color: '#9467bd'},
//       tickfont: {color: '#9467bd'},
//     }
//   };
  

// Plotly.newPlot('one_song', stuff, layout);
// });

const url11 = "http://127.0.0.1:5000/average_by_category";
d3.json(url11).then(function(data) {
   console.log(data)
  
  var category = Object.values(data['stream_category'])
  // console.log(streams)
  var energy = Object.values(data['energy'])
  // console.log(artist)
  var dance = Object.values(data['dance'])
  var key = Object.values(data['key'])
  var speech = Object.values(data['speech'])
  var acoustic = Object.values(data['acoustic'])
  var valence = Object.values(data['valence'])
  var tempo = Object.values(data['tempo'])
  var streams = Object.values(data['streams'])
  var cat_count = Object.values(data['category_count'])

  var trace1 = {
    x: category,
    y: dance,
    opacity : .9,
    name: 'danceability',
    type: 'bar',
  };
  
  var trace2 = {
    x: category,
    y: speech,
    opacity : .9,
    name: 'speech',
    type: 'bar'
  };
  
  var trace3 = {
    x: category,
    y: valence,
    opacity : .9,
    name: 'valence',
    type: 'bar',
  };
  
  var trace4 = {
    x: category,
    y: acoustic,
    mode: 'line',
    opacity : .8,
    name: 'acousticness',
    type: 'bar',
  };

  var trace5 = {
    x: category,
    y: cat_count,
    width: .125,
    mode: 'scatter',
    yaxis: 'y2',
    opacity : .6,
    name: 'count in category',
    type: 'bar',
    fill: 'tozeroy'
  };
  
  var stuff = [trace1, trace2, trace3, trace4, trace5];
  
  var layout = {
    title: 'Stream Category and Feature',
    yaxis: {
      title: 'Measure of Audio Feature',
      titlefont: {color: '#1f77b4'},
      tickfont: {color: '#1f77b4'}
    },
      xaxis: {
        tickmode: "array",
        tickvals: cat_count,
        ticktext: ""'less 1 million', '1-40', '40-80','80-120', '120-160','200'"
      },
    yaxis2:{
      title: 'Streams in Category',
      position: .975,
      size: 2,
      titlefont: {color: 'rgb(148, 103, 189)'},
      tickfont: {color: 'rgb(148, 103, 189)'},
      overlaying: 'y',
      side: 'right',


  }
};

Plotly.newPlot('one_song', stuff, layout);
});
});

//####################################################################### 
//GRAPH THAT UPDATES ON SELECTION: 
    // var trace1 = {
    //   type: "scatter",
    //   mode: "dots",
    //   x: [artist],
    //   y: [streams]
    // };

    // var graph = [trace1];

    //  var layout = {
    //    title: `Toggle`,
    //    xaxis: {
    //      autorange: true,
    //      type: "artist"
        
    //    },
    //    yaxis: {
    //      autorange: true,
    //      type: "linear",
    //      title: "total streams"
    //    }
    //  };

    // Plotly.newPlot("plot", graph, layout);
    

//   var defaultURL = "http://127.0.0.1:5000/";
//  d3.json(defaultURL).then(function(data) {
//   var data = [data];
//   var layout = { margin: { t: 30, b: 100 } };
//   Plotly.plot("scatter", data, layout);
// });

// function updatePlotly(newdata) {
//   Plotly.restyle("plot", "x", [newdata.x]);
//   Plotly.restyle("plot", "y", [newdata.y]);
// }
  
//   // Get new data whenever the dropdown selection changes
// function getData(route) {
//   console.log(route);
//   d3.json(`/${route}`).then(function(data) {
//   console.log("newdata", data);
//   updatePlotly(data);
  
//  });
// }



