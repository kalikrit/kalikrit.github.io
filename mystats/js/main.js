const RASH = document.getElementById("rash");

Chart.defaults.global.animation.duration = 3000;
Chart.defaults.scale.ticks.beginAtZero = true;


let cities_chart = new Chart(RASH, {
	type: 'bar',
	data: {
		labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		datasets: [
			{
				label: "отпуск",
				fill: true,
				backgroundColor: "#8e8c6d",
				borderColor: "#8e8c00",
				data: [0,50028,23421,42788,7159,6310,59384,8642,61301]
			},
			{
				label: "квартплата",
				fill: true,
				backgroundColor: "#74c493",
				borderColor: "#74c400",
				data: [32794, 33326, 32277, 27773, 33010, 34330, 28129, 28129, 38942]
			},			
			{
				label: "продукты",
				fill: true,
				backgroundColor: "#51574a",
				borderColor: "#515700",
				data: [1235, 19386, 18472, 11562, 18064, 15973, 11431, 10466, 5798]
			},
			{
				label: "спорт",
				fill: true,
				backgroundColor: "#e4bf80",
				borderColor: "#e4bf00",
				data: [0,2600,3400,26904,5545,4040,3327,12154,12680]
			},
			{
				label: "авто",
				fill: true,
				backgroundColor: "#993767",
				borderColor: "#993700",
				data: [1000,0,15829,8690,0,29460,5000,2501,1000]
			},
			{
				label: "подарки",
				fill: true,
				backgroundColor: "#c94a53",
				borderColor: "#c94a00",
				data: [0,670,12028,2409,2159,11110,10959,3686,4639]
			},
			{
				label: "сладости",
				fill: true,
				backgroundColor: "#447c69",
				borderColor: "#447c00",
				data: [1931, 4784, 3612, 1471, 2717, 2793, 3391, 3041, 1226]
			}
		]
	}
});