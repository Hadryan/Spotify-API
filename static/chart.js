function BuildCharts() {
	const url6 = "http://127.0.0.1:5000/CHE"
	const url5 = "http://127.0.0.1:5000/bday_group1";
	d3.json(url5).then(function(data) {
		// console.log(data)
		var b_months = Object.values(data['birth_month'])
		var id = Object.values(data['id'])
		var goals = Object.values(data['goals'])
		console.log(goals)
		var assists = Object.values(data['assists'])
		var points = Object.values(data['points'])
		var firstname = Object.values(data['first_name'])
		var lastname = Object.values(data['last_name'])
		var games_played = Object.values(data['games'])
		var nationality = Object.values(data['nation'])

	d3.json(url6).then(function(data2) {
		var eur_goals = Object.values(data2['europe_goals'])
		console.log(eur_goals)
	
	
		
		
	
			// console.log(data.income)
		  
		var barChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'],
			datasets: [{
				label: 'goals',
				// backgroundColor: window.chartColors.red,
				stack: 'Stack 0',
				data: [
                   [goals]
                ],
                backgroundColor: [
                    'rgba(155, 199, 32, 0.2)'
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                    
                ],
                borderWidth: 1
            
			}, {
				label: 'assists',
				// backgroundColor: window.chartColors.blue,
				stack: 'Stack 1',
				data: [
					[assists]
                ],
                backgroundColor: [
                    'rgba(105, 69, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
                     
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'                    
                ],
                borderWidth: 1
			}, {
                label: 'games',
				// backgroundColor: window.chartColors.green,
				stack: 'Stack 2',
				data: [
					[games_played]
                ],
                backgroundColor: [
                    'rgba(225, 125, 115, 0.2)'
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                    
                ],
                borderWidth: 1
			}]
		}
        
		window.onload = function() {
			var ctx = document.getElementById('myChart').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					title: {
						display: true,
						text: 'Points by Birthmonth group'
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
				}
			});
		};

		document.getElementById('country_data').addEventListener('click', function() {
			barChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return data();
				});
			});
			window.myBar.update();
		});
	});
   });
};

BuildCharts() ;