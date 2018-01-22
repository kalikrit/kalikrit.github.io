const RASH = document.getElementById("rash");

Chart.defaults.global.animation.duration = 3000;
Chart.defaults.scale.ticks.beginAtZero = true;


let rashody_chart = new Chart(RASH, {
	type: 'bar',
	data: {
	labels: ["Январь"],// "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		datasets: [
			{
				label: "отпуск",
				fill: true,
				backgroundColor: "#FF66FF",
				borderColor: "#FF6600",
				data: [0]
			},
			{
				label: "квартплата",
				fill: true,
				backgroundColor: "#74c493",
				borderColor: "#74c400",
				data: [0]
			},			
			{
				label: "продукты",
				fill: true,
				backgroundColor: "#339999",
				borderColor: "#339900",
				data: [7716]
			},
			{
				label: "овощи-фрукты",
				fill: true,
				backgroundColor: "#6699FF",
				borderColor: "#669900",
				data: [2687]
			},
			{
				label: "спорт",
				fill: true,
				backgroundColor: "#e4bf80",
				borderColor: "#e4bf00",
				data: [0]
			},
			{
				label: "авто",
				fill: true,
				backgroundColor: "#996666",
				borderColor: "#996600",
				data: [0]
			},
			{
				label: "подарки",
				fill: true,
				backgroundColor: "#c94a53",
				borderColor: "#c94a00",
				data: [5579]
			},
			{
				label: "сладости",
				fill: true,
				backgroundColor: "#447c69",
				borderColor: "#447c00",
				data: [1983]
			}
		]
	}
});