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
			{label:['Апатиты: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.0311548952972,'y':0.279065285523,'r':5}]
			},
			{label:['Архангельск: 3'],
			backgroundColor:'#e16552',
			data:[{'x':0.359291134088,'y':0.887359984235,'r':15}]
			},
			{label:['Балашиха: 1'],
			backgroundColor:'#51574a',
			data:[{'x':0.580689311124,'y':0.301590224251,'r':5}]
			},
			{label:['Барнаул: 1'],
			backgroundColor:'#c94a53',
			data:[{'x':0.36230696255,'y':0.930401607042,'r':5}]
			},
			{label:['Белгород: 2'],
			backgroundColor:'#e16552',
			data:[{'x':0.837265744458,'y':0.345621695396,'r':10}]
			},
			{label:['Благовещенск: 1'],
			backgroundColor:'#51574a',
			data:[{'x':0.713061111454,'y':0.642724806618,'r':5}]
			},
			{label:['Брянск: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.551226673599,'y':0.651826415281,'r':5}]
			},
			{label:['Великий Новгород: 2'],
			backgroundColor:'#e0598b',
			data:[{'x':0.753741371081,'y':0.828403729563,'r':10}]
			},
			{label:['Великий Устюг: 1'],
			backgroundColor:'#f19670',
			data:[{'x':0.403273546744,'y':0.109232595739,'r':5}]
			},
			{label:['Владивосток: 1'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.3,'y':0.4,'r':5}]
			},
			{label:['Владимир: 1'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.269518697173,'y':0.831968725514,'r':5}]
			},
			{label:['Волгоград: 2'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.915513781097,'y':0.168609568854,'r':10}]
			},
			{label:['Вологда: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.075966711061,'y':0.182410342087,'r':5}]
			},
			{label:['Воронеж: 1'],
			backgroundColor:'#e16552',
			data:[{'x':0.470490141038,'y':0.0920614652386,'r':5}]
			},
			{label:['Всеволожск: 1'],
			backgroundColor:'#447c69',
			data:[{'x':0.209002234989,'y':0.165625436422,'r':5}]
			},
			{label:['Выборг: 3'],
			backgroundColor:'#e2975d',
			data:[{'x':0.365757268088,'y':0.103477948032,'r':15}]
			},
			{label:['Вязники: 1'],
			backgroundColor:'#51574a',
			data:[{'x':0.576153283696,'y':0.475076485584,'r':5}]
			},
			{label:['Гатчина: 3'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.927942681223,'y':0.865732051092,'r':15}]
			},
			{label:['Городовиковск: 1'],
			backgroundColor:'#65387d',
			data:[{'x':0.800473194406,'y':0.165066874468,'r':5}]
			},
			{label:['Екатеринбург: 3'],
			backgroundColor:'#9abf88',
			data:[{'x':0.669419978341,'y':0.83723050782,'r':15}]
			},
			{label:['Ижевск: 1'],
			backgroundColor:'#a34974',
			data:[{'x':0.944660146905,'y':0.0557234128779,'r':5}]
			},
			{label:['Иркутск: 1'],
			backgroundColor:'#993767',
			data:[{'x':0.202041037712,'y':0.240978070782,'r':5}]
			},
			{label:['Йошкар-Ола: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.236854633868,'y':0.96340729858,'r':5}]
			},
			{label:['Казань: 2'],
			backgroundColor:'#74c493',
			data:[{'x':0.533108810615,'y':0.0828374871487,'r':10}]
			},
			{label:['Калининград: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.0377628386761,'y':0.671054195277,'r':5}]
			},
			{label:['Калуга: 1'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.64769040103,'y':0.848316505131,'r':5}]
			},
			{label:['Киев: 1'],
			backgroundColor:'#a34974',
			data:[{'x':0.3,'y':0.3,'r':5}]
			},
			{label:['Кириши: 2'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.0335154459803,'y':0.812913350217,'r':10}]
			},
			{label:['Кировск: 1'],
			backgroundColor:'#65387d',
			data:[{'x':0.686795123231,'y':0.50359952043,'r':5}]
			},
			{label:['Колпино: 1'],
			backgroundColor:'#74c493',
			data:[{'x':0.113084660941,'y':0.0145888119486,'r':5}]
			},
			{label:['Кострома: 2'],
			backgroundColor:'#51574a',
			data:[{'x':0.963461485018,'y':0.264821846214,'r':10}]
			},
			{label:['Красково: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.757991995445,'y':0.416625168161,'r':5}]
			},
			{label:['Краснодар: 1'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.403732537687,'y':0.529673336497,'r':5}]
			},
			{label:['Красноярск: 3'],
			backgroundColor:'#e0598b',
			data:[{'x':0.724670858851,'y':0.837062324691,'r':15}]
			},
			{label:['Лесной: 2'],
			backgroundColor:'#e16552',
			data:[{'x':0.0995332643911,'y':0.250363729982,'r':10}]
			},
			{label:['Липецк: 1'],
			backgroundColor:'#a34974',
			data:[{'x':0.396753054943,'y':0.274600304869,'r':5}]
			},
			{label:['Ломоносов: 1'],
			backgroundColor:'#51574a',
			data:[{'x':0.0342961787203,'y':0.901876532137,'r':5}]
			},
			{label:['Люберцы: 1'],
			backgroundColor:'#e279a3',
			data:[{'x':0.0763372546049,'y':0.199797689484,'r':5}]
			},
			{label:['Медвежий Угол: 1'],
			backgroundColor:'#4e2472',
			data:[{'x':0.990251207723,'y':0.853030886926,'r':5}]
			},
			{label:['Минск: 3'],
			backgroundColor:'#e2975d',
			data:[{'x':0.763955127977,'y':0.092115562742,'r':15}]
			},
			{label:['Можга: 1'],
			backgroundColor:'#c94a53',
			data:[{'x':0.961617783567,'y':0.629655268067,'r':5}]
			},
			{label:['Мозырь: 1'],
			backgroundColor:'#993767',
			data:[{'x':0.305770268447,'y':0.119363401635,'r':5}]
			},
			{label:['Мончегорск: 1'],
			backgroundColor:'#f19670',
			data:[{'x':0.77339311464,'y':0.74896233547,'r':5}]
			},
			{label:['Морозова: 1'],
			backgroundColor:'#9abf88',
			data:[{'x':0.574945995469,'y':0.424932993586,'r':5}]
			},
			{label:['Москва: 40'],
			backgroundColor:'#65387d',
			data:[{'x':0.724481217147,'y':0.756596024058,'r':80}]
			},
			{label:['Мурманск: 2'],
			backgroundColor:'#9163b6',
			data:[{'x':0.181378180145,'y':0.55587763382,'r':10}]
			},
			{label:['Набережные Челны: 2'],
			backgroundColor:'#c94a53',
			data:[{'x':0.88036577289,'y':0.447644882362,'r':10}]
			},
			{label:['Нижний Новгород: 4'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.270242756923,'y':0.0537650284332,'r':20}]
			},
			{label:['Новосибирск: 2'],
			backgroundColor:'#e0598b',
			data:[{'x':0.831602619509,'y':0.52470844108,'r':10}]
			},
			{label:['Ногинск: 1'],
			backgroundColor:'#a34974',
			data:[{'x':0.0295771756919,'y':0.240392780073,'r':5}]
			},
			{label:['Норильск: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.0290937239577,'y':0.54531606393,'r':5}]
			},
			{label:['Одинцово: 1'],
			backgroundColor:'#e279a3',
			data:[{'x':0.509221895963,'y':0.179081039101,'r':5}]
			},
			{label:['Октябрьский: 1'],
			backgroundColor:'#51574a',
			data:[{'x':0.525611251728,'y':0.898883150843,'r':5}]
			},
			{label:['Омск: 2'],
			backgroundColor:'#5698c4',
			data:[{'x':0.218457369224,'y':0.645124261196,'r':10}]
			},
			{label:['Осиповичи: 1'],
			backgroundColor:'#be5168',
			data:[{'x':0.0011193498788,'y':0.125689136289,'r':5}]
			},
			{label:['Отрадное: 1'],
			backgroundColor:'#e2975d',
			data:[{'x':0.786925691286,'y':0.589477501045,'r':5}]
			},
			{label:['Переславль-Залесский: 1'],
			backgroundColor:'#f19670',
			data:[{'x':0.310823330755,'y':0.0580414189686,'r':5}]
			},
			{label:['Пермь: 5'],
			backgroundColor:'#e16552',
			data:[{'x':0.0830073078285,'y':0.917693305914,'r':25}]
			},
			{label:['Петрозаводск: 3'],
			backgroundColor:'#a34974',
			data:[{'x':0.540447418314,'y':0.423369475488,'r':15}]
			},
			{label:['Посудичи: 1'],
			backgroundColor:'#e279a3',
			data:[{'x':0.94765564762,'y':0.340207768194,'r':5}]
			},
			{label:['Похвистнево: 1'],
			backgroundColor:'#993767',
			data:[{'x':0.439978330171,'y':0.048733735187,'r':5}]
			},
			{label:['Псков: 3'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.922164646455,'y':0.493727311107,'r':15}]
			},
			{label:['Пудож: 1'],
			backgroundColor:'#993767',
			data:[{'x':0.768049847429,'y':0.671607383125,'r':5}]
			},
			{label:['Рыбинск: 1'],
			backgroundColor:'#74c493',
			data:[{'x':0.782975114961,'y':0.764983966198,'r':5}]
			},
			{label:['Рязань: 2'],
			backgroundColor:'#c94a53',
			data:[{'x':0.303890410762,'y':0.735232430604,'r':10}]
			},
			{label:['Санкт-Петербург: 491'],
			backgroundColor:'#e2975d',
			data:[{'x':0.0887375038946,'y':0.0598119703895,'r':230}]
			},
			{label:['Сергиев Посад: 1'],
			backgroundColor:'#be5168',
			data:[{'x':0.673272909053,'y':0.233664507478,'r':5}]
			},
			{label:['Серов: 1'],
			backgroundColor:'#4e2472',
			data:[{'x':0.405880414735,'y':0.823458885535,'r':5}]
			},
			{label:['Сибай: 1'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.246568581665,'y':0.911521890459,'r':5}]
			},
			{label:['Сланцы: 1'],
			backgroundColor:'#c94a53',
			data:[{'x':0.195773547885,'y':0.981423914073,'r':5}]
			},
			{label:['Смоленск: 2'],
			backgroundColor:'#9abf88',
			data:[{'x':0.0322658988491,'y':0.454039169629,'r':10}]
			},
			{label:['Сосновый Бор: 1'],
			backgroundColor:'#e279a3',
			data:[{'x':0.992301276249,'y':0.370727631292,'r':5}]
			},
			{label:['Сумы: 1'],
			backgroundColor:'#be5168',
			data:[{'x':0.727001135838,'y':0.375577929365,'r':5}]
			},
			{label:['Сургут: 1'],
			backgroundColor:'#74c493',
			data:[{'x':0.135647621065,'y':0.328587971217,'r':5}]
			},
			{label:['Тверь: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.274022557866,'y':0.522446732987,'r':5}]
			},
			{label:['Терскол: 1'],
			backgroundColor:'#e2975d',
			data:[{'x':0.151839020511,'y':0.455037494889,'r':5}]
			},
			{label:['Тихвин: 1'],
			backgroundColor:'#9abf88',
			data:[{'x':0.26027662469,'y':0.840375667703,'r':5}]
			},
			{label:['Тольятти: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.183099593635,'y':0.491324512369,'r':5}]
			},
			{label:['Томск: 2'],
			backgroundColor:'#5698c4',
			data:[{'x':0.814453060192,'y':0.784400796279,'r':10}]
			},
			{label:['Тюмень: 1'],
			backgroundColor:'#9abf88',
			data:[{'x':0.697846115597,'y':0.608424707404,'r':5}]
			},
			{label:['Улан-Удэ: 1'],
			backgroundColor:'#e16552',
			data:[{'x':0.707641177832,'y':0.302460037776,'r':5}]
			},
			{label:['Ульяновск: 1'],
			backgroundColor:'#f19670',
			data:[{'x':0.784623663493,'y':0.689918590271,'r':5}]
			},
			{label:['Урюпинск: 1'],
			backgroundColor:'#51574a',
			data:[{'x':0.0893614328983,'y':0.55898985666,'r':5}]
			},
			{label:['Уфа: 1'],
			backgroundColor:'#9163b6',
			data:[{'x':0.678763228368,'y':0.180939515311,'r':5}]
			},
			{label:['Фрязино: 1'],
			backgroundColor:'#e2975d',
			data:[{'x':0.791204265379,'y':0.308718610288,'r':5}]
			},
			{label:['Херсон: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.699695482787,'y':0.187537956987,'r':5}]
			},
			{label:['Череповец: 4'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.325346424063,'y':0.664181849974,'r':20}]
			},
			{label:['Чехов: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.146110459443,'y':0.267861186339,'r':5}]
			},
			{label:['Щёлково: 1'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.456714443892,'y':0.785707021931,'r':5}]
			},
			{label:['Ялта: 2'],
			backgroundColor:'#e0598b',
			data:[{'x':0.951154723801,'y':0.0416807560171,'r':10}]
			},
			{label:['Ярославль: 5'],
			backgroundColor:'#65387d',
			data:[{'x':0.56652449793,'y':0.837968371498,'r':25}]
			},
			{label:['Colonia: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.898614991867,'y':0.639878630324,'r':5}]
			},
			{label:['Jakarta: 1'],
			backgroundColor:'#65387d',
			data:[{'x':0.359838163805,'y':0.274333848356,'r':5}]
			},
			{label:['London: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.939591060144,'y':0.191803262657,'r':5}]
			},
			{label:['Melbourne: 1'],
			backgroundColor:'#e2975d',
			data:[{'x':0.96400356392,'y':0.501712408048,'r':5}]
			},
			{label:['Nord: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.0223127723907,'y':0.235480560619,'r':5}]
			},
			{label:['Singapore: 1'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.742986769484,'y':0.787559613245,'r':5}]
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