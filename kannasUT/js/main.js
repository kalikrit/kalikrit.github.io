const PARTICIPANTS = document.getElementById("participants");
const GEOGRAPHY = document.getElementById("geography");

Chart.defaults.global.animation.duration = 3000;
Chart.defaults.scale.ticks.beginAtZero = true;


let participants_chart = new Chart(PARTICIPANTS, {
    type: 'bar',
	data: {
		labels: ["15 км", "30 км", "50 км", "100 км"],
		datasets: [
			{
				label: "мужчины",
				fill: true,
				backgroundColor: "rgba(75,192,192,.7)",
				borderColor: "rgba(75,192,192,1)",
				data: [12,11,21,10],
				spanGaps: false,
			},
			{
				label: "женщины",
				fill: true,
				backgroundColor: "rgba(75,75,192,.7)",
				borderColor: "rgba(75,75,192,1)",
				data: [10,4,0,1],
				spanGaps: false,
			}
		]
	}
});

var Colors = [
    "#51574a", "#447c69", "#74c493",
    "#8e8c6d", "#e4bf80", "#e9d78e",
    "#e2975d", "#f19670", "#e16552",
    "#c94a53", "#be5168", "#a34974",
    "#993767", "#65387d", "#4e2472",
    "#9163b6", "#e279a3", "#e0598b",
    "#7c9fb0", "#5698c4", "#9abf88"
];

let geography_chart = new Chart(GEOGRAPHY, {
    type: 'doughnut',
	data: {
		labels: ["Ахтубинск",
				"Благовещенск",
				"Всеволжск",
				"Выборг",
				"Заполярный",
				"Коряжма",
				"Кострома",
				"Красково",
				"Москва",
				"Мурманск",
				"Нелидово",
				"Пермь",
				"Псков",
				"Пушкин",
				"Самара",
				"Санкт-Петербург",
				"Тихвин",
				"Тосно",
				"Чехов",
				"Ярославль"],
        datasets: [{
            data: [1,1,1,2,1,1,1,1,9,1,1,1,1,2,1,39,1,2,1,1],
            backgroundColor: ["#51574a", "#447c69", "#74c493","#8e8c6d", "#e4bf80", "#e9d78e","#e2975d", "#f19670", "#e16552","#c94a53", "#be5168", "#a34974","#993767", "#65387d", "#4e2472","#9163b6","#e279a3", "#e0598b","#7c9fb0", "#5698c4"],
            hoverBackgroundColor: ["#515700", "#447c00", "#74c400","#8e8c00", "#e4bf00", "#e9d700","#e29700", "#f19600", "#e16500","#c94a00", "#be5100", "#a34900","#993700", "#653800", "#4e2400","#916300","#e27900", "#e05900","#7c9f00", "#569800"]
        }]
	}
});