const PARTICIPANTS = document.getElementById("participants");
const GEOGRAPHY = document.getElementById("geography");
const CITIES = document.getElementById("cch");

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
				data: [19,23,36,13],
				spanGaps: false,
			},
			{
				label: "женщины",
				fill: true,
				backgroundColor: "rgba(75,75,192,.7)",
				borderColor: "rgba(75,75,192,1)",
				data: [16,8,1,2],
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
		labels: [
			"Ахтубинск",
			"Благовещенск",
			"Волгоград",
			"Всеволжск",
			"Выборг",
			"Гатчина",
			"Заполярный",
			"Коряжма",
			"Кострома",
			"Красково",
			"Москва",
			"Мурино",
			"Мурманск",
			"Нелидово",
			"Пермь",
			"Псков",
			"Пушкин",
			"Рязань",
			"Самара",
			"Санкт-Петербург",
			"Сыктывкар",
			"Тверь",
			"Тихвин",
			"Тосно",
			"Химки",
			"Чехов",
			"Ярославль"
			],
        datasets: [{
            data: [1,1,1,1,3,1,1,1,1,1,17,1,1,1,1,1,2,2,1,71,1,1,1,2,1,1,1],
			backgroundColor: [
			"#51574a",
			"#447c69",
			"#74c493",
			"#8e8c6d",
			"#e4bf80",
			"#e9d78e",
			"#e2975d",
			"#f19670",
			"#e16552",
			"#c94a53",
			"#be5168",
			"#a34974",
			"#993767",
			"#65387d",
			"#4e2472",
			"#9163b6",
			"#e279a3",
			"#e0598b",
			"#7c9fb0",
			"#5698c4",
			"#f19670",
			"#74c493",
			"#a34974",
			"#51574a",
			"#9abf88",
			"#5698c4",
			"#be5168"
		],
            hoverBackgroundColor: [
				"#515700",
				"#447c00",
				"#74c400",
				"#8e8c00",
				"#e4bf00",
				"#e9d700",
				"#e29700",
				"#f19600",
				"#e16500",
				"#c94a00",
				"#be5100",
				"#a34900",
				"#993700",
				"#653800",
				"#4e2400",
				"#916300",
				"#e27900",
				"#e05900",
				"#7c9f00",
				"#569800",
				"#f19600",
				"#74c400",
				"#a34900",
				"#515700",
				"#9abf00",
				"#569800",
				"#be5100"
			]
        }]
	}
});

let cities_chart = new Chart(CITIES, {
    type: 'bubble',
	data: {
		datasets: [
			{label:['Ярославль: 1'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.891667239442,'y':0.976674991291,'r':5}]
			},
			{label:['Нижний Новгород: 2'],
			backgroundColor:'#65387d',
			data:[{'x':0.897119906078,'y':0.0384529247391,'r':10}]
			},
			{label:['Рыбинск: 1'],
			backgroundColor:'#993767',
			data:[{'x':0.00869305322357,'y':0.732022333699,'r':5}]
			},
			{label:['Щёлково: 3'],
			backgroundColor:'#9abf88',
			data:[{'x':0.990809126678,'y':0.457540338876,'r':15}]
			},
			{label:['Калуга: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.877770975542,'y':0.490001776189,'r':5}]
			},
			{label:['Санкт-Петербург: 39'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.3,'y':0.6,'r':195}]
			},
			{label:['Москва: 580'],
			backgroundColor:'#74c493',
			data:[{'x':0.3,'y':0.3,'r':300}]
			},
			{label:['Тихвин: 2'],
			backgroundColor:'#5698c4',
			data:[{'x':0.414577170802,'y':0.9905850566,'r':10}]
			},
			{label:['Терскол: 2'],
			backgroundColor:'#993767',
			data:[{'x':0.874647105933,'y':0.533591469622,'r':10}]
			},
			{label:['Киев: 1'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.967835901871,'y':0.900396744277,'r':5}]
			},
			{label:['Йошкар-Ола: 3'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.689169329175,'y':0.60404103427,'r':15}]
			},
			{label:['Набережные Челны: 1'],
			backgroundColor:'#4e2472',
			data:[{'x':0.975353045011,'y':0.405512185294,'r':5}]
			},
			{label:['Тверь: 3'],
			backgroundColor:'#e279a3',
			data:[{'x':0.98467409829,'y':0.905420896687,'r':15}]
			},
			{label:['Архангельск: 4'],
			backgroundColor:'#e16552',
			data:[{'x':0.941862914087,'y':0.480135395373,'r':20}]
			},
			{label:['Серов: 1'],
			backgroundColor:'#65387d',
			data:[{'x':0.941637972775,'y':0.358812334695,'r':5}]
			},
			{label:['Сосновый Бор: 2'],
			backgroundColor:'#9abf88',
			data:[{'x':0.318033586664,'y':0.797977723375,'r':10}]
			},
			{label:['Псков: 1'],
			backgroundColor:'#74c493',
			data:[{'x':0.541004777389,'y':0.109873357381,'r':5}]
			},
			{label:['Фрязино: 1'],
			backgroundColor:'#f19670',
			data:[{'x':0.914075842224,'y':0.897026831998,'r':5}]
			},
			{label:['Ялта: 1'],
			backgroundColor:'#65387d',
			data:[{'x':0.833435513932,'y':0.367274380898,'r':5}]
			},
			{label:['Калининград: 1'],
			backgroundColor:'#993767',
			data:[{'x':0.276365390657,'y':0.936636182232,'r':5}]
			},
			{label:['Сланцы: 1'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.276079619002,'y':0.39700478235,'r':5}]
			},
			{label:['Nord: 4'],
			backgroundColor:'#5698c4',
			data:[{'x':0.195028304881,'y':0.743842644284,'r':20}]
			},
			{label:['Пермь: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.551518915702,'y':0.556101052472,'r':5}]
			},
			{label:['Барнаул: 2'],
			backgroundColor:'#9abf88',
			data:[{'x':0.178933179588,'y':0.780066761265,'r':10}]
			},
			{label:['Colonia: 2'],
			backgroundColor:'#e279a3',
			data:[{'x':0.51584567263,'y':0.313854767918,'r':10}]
			},
			{label:['Кострома: 2'],
			backgroundColor:'#9abf88',
			data:[{'x':0.84898145439,'y':0.804238691993,'r':10}]
			},
			{label:['Выборг: 1'],
			backgroundColor:'#a34974',
			data:[{'x':0.182350024291,'y':0.613796827453,'r':5}]
			},
			{label:['Мончегорск: 1'],
			backgroundColor:'#f19670',
			data:[{'x':0.0151102306174,'y':0.212469866528,'r':5}]
			},
			{label:['Норильск: 1'],
			backgroundColor:'#51574a',
			data:[{'x':0.899156443361,'y':0.746324863984,'r':5}]
			},
			{label:['Кировск: 1'],
			backgroundColor:'#4e2472',
			data:[{'x':0.623649362152,'y':0.765724721046,'r':5}]
			}							
		],
		options: {
			title: {
			  display: true,
			  text: 'Города группы VK Kannas Ultra Trail'
			},
			tooltips: {
				cornerRadius: 0,
				caretSize: 0,
				xPadding: 16,
				yPadding: 10,
				backgroundColor: 'rgba(0, 150, 100, 0.9)',
				titleFontStyle: 'normal',
				titleMarginBottom: 15
			  }			
		}		
	}
});