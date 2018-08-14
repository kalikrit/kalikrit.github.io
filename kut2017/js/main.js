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
				data: [25,27,42,14],
				spanGaps: false,
			},
			{
				label: "женщины",
				fill: true,
				backgroundColor: "rgba(75,75,192,.7)",
				borderColor: "rgba(75,75,192,1)",
				data: [21,10,3,2],
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
			"Апатиты",
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
            data: [1,1,1,1,2,4,1,1,1,1,1,18,1,2,1,1,1,2,2,1,92,1,1,1,2,1,1,1],
			backgroundColor: [
			"#4e2472",	
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
				"#4e2400",
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
			backgroundColor:'#447c69',
			data:[{'x':0.160716764672,'y':0.524804602033,'r':5}]
			},
			{label:['Архангельск: 3'],
			backgroundColor:'#be5168',
			data:[{'x':0.411743208809,'y':0.453418930313,'r':15}]
			},
			{label:['Балашиха: 1'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.839333502246,'y':0.697179600457,'r':5}]
			},
			{label:['Барнаул: 1'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.331550636849,'y':0.356861780628,'r':5}]
			},
			{label:['Белгород: 2'],
			backgroundColor:'#4e2472',
			data:[{'x':0.394342471983,'y':0.348785652723,'r':10}]
			},
			{label:['Благовещенск: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.951646196081,'y':0.837372499573,'r':5}]
			},
			{label:['Брянск: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.608192795431,'y':0.181056870008,'r':5}]
			},
			{label:['Великий Новгород: 2'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.00217816797869,'y':0.470469174564,'r':10}]
			},
			{label:['Великий Устюг: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.077265668309,'y':0.286259420228,'r':5}]
			},
			{label:['Владивосток: 1'],
			backgroundColor:'#e16552',
			data:[{'x':0.668394027702,'y':0.820718119109,'r':5}]
			},
			{label:['Владимир: 1'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.105483640501,'y':0.51407562367,'r':5}]
			},
			{label:['Волгоград: 2'],
			backgroundColor:'#e16552',
			data:[{'x':0.430558550329,'y':0.545746581012,'r':10}]
			},
			{label:['Вологда: 1'],
			backgroundColor:'#9163b6',
			data:[{'x':0.00155804529858,'y':0.0659967299686,'r':5}]
			},
			{label:['Воронеж: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.0383854785323,'y':0.627353975135,'r':5}]
			},
			{label:['Всеволожск: 1'],
			backgroundColor:'#74c493',
			data:[{'x':0.734934673695,'y':0.399855129316,'r':5}]
			},
			{label:['Выборг: 3'],
			backgroundColor:'#c94a53',
			data:[{'x':0.229687288585,'y':0.0436980606373,'r':15}]
			},
			{label:['Вязники: 1'],
			backgroundColor:'#e16552',
			data:[{'x':0.690724572376,'y':0.765081950579,'r':5}]
			},
			{label:['Гатчина: 3'],
			backgroundColor:'#51574a',
			data:[{'x':0.7,'y':0.0692435912402,'r':15}]
			},
			{label:['Городовиковск: 1'],
			backgroundColor:'#4e2472',
			data:[{'x':0.6512652642,'y':0.0771771058236,'r':5}]
			},
			{label:['Екатеринбург: 3'],
			backgroundColor:'#c94a53',
			data:[{'x':0.279725470717,'y':0.807007166298,'r':15}]
			},
			{label:['Ижевск: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.987303251955,'y':0.905246027324,'r':5}]
			},
			{label:['Иркутск: 1'],
			backgroundColor:'#f19670',
			data:[{'x':0.314838576517,'y':0.17921871839,'r':5}]
			},
			{label:['Йошкар-Ола: 1'],
			backgroundColor:'#e279a3',
			data:[{'x':0.376235560639,'y':0.1257617697,'r':5}]
			},
			{label:['Казань: 2'],
			backgroundColor:'#74c493',
			data:[{'x':0.15400957705,'y':0.438038389634,'r':10}]
			},
			{label:['Калининград: 1'],
			backgroundColor:'#be5168',
			data:[{'x':0.278420787778,'y':0.212222782276,'r':5}]
			},
			{label:['Калуга: 1'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.530891836193,'y':0.970029674424,'r':5}]
			},
			{label:['Киев: 1'],
			backgroundColor:'#65387d',
			data:[{'x':0.155594766338,'y':0.518668897641,'r':5}]
			},
			{label:['Кириши: 2'],
			backgroundColor:'#c94a53',
			data:[{'x':0.464500012727,'y':0.0697503435485,'r':10}]
			},
			{label:['Кировск: 1'],
			backgroundColor:'#c94a53',
			data:[{'x':0.367984317915,'y':0.819569224636,'r':5}]
			},
			{label:['Колпино: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.070748077892,'y':0.355755844794,'r':5}]
			},
			{label:['Кострома: 2'],
			backgroundColor:'#9163b6',
			data:[{'x':0.384137844851,'y':0.800648982169,'r':10}]
			},
			{label:['Красково: 1'],
			backgroundColor:'#9163b6',
			data:[{'x':0.496236351662,'y':0.595896242877,'r':5}]
			},
			{label:['Краснодар: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.275175575324,'y':0.669577055828,'r':5}]
			},
			{label:['Красноярск: 3'],
			backgroundColor:'#74c493',
			data:[{'x':0.218790189778,'y':0.525347936777,'r':15}]
			},
			{label:['Лесной: 2'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.970341271494,'y':0.31048563639,'r':10}]
			},
			{label:['Липецк: 1'],
			backgroundColor:'#be5168',
			data:[{'x':0.89779779991,'y':0.509836803564,'r':5}]
			},
			{label:['Ломоносов: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.492680711402,'y':0.88629209743,'r':5}]
			},
			{label:['Люберцы: 1'],
			backgroundColor:'#e16552',
			data:[{'x':0.659322967468,'y':0.517133505435,'r':5}]
			},
			{label:['Медвежий Угол: 1'],
			backgroundColor:'#9163b6',
			data:[{'x':0.688443300796,'y':0.844987429542,'r':5}]
			},
			{label:['Минск: 3'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.742788550516,'y':0.475306052123,'r':15}]
			},
			{label:['Можга: 1'],
			backgroundColor:'#f19670',
			data:[{'x':0.549669777128,'y':0.785013453929,'r':5}]
			},
			{label:['Мозырь: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.255996927758,'y':0.876336257589,'r':5}]
			},
			{label:['Мончегорск: 1'],
			backgroundColor:'#51574a',
			data:[{'x':0.223957585214,'y':0.552312734096,'r':5}]
			},
			{label:['Морозова: 1'],
			backgroundColor:'#e16552',
			data:[{'x':0.0804597567335,'y':0.025884776161,'r':5}]
			},
			{label:['Москва: 39'],
			backgroundColor:'#74c493',
			data:[{'x':0.8,'y':0.3,'r':80}]
			},
			{label:['Мурманск: 2'],
			backgroundColor:'#c94a53',
			data:[{'x':0.545369159712,'y':0.0970355086772,'r':10}]
			},
			{label:['Набережные Челны: 2'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.491930038336,'y':0.935039330947,'r':10}]
			},
			{label:['Нижний Новгород: 4'],
			backgroundColor:'#e0598b',
			data:[{'x':0.138035859741,'y':0.919101969093,'r':20}]
			},
			{label:['Новосибирск: 2'],
			backgroundColor:'#74c493',
			data:[{'x':0.367710654859,'y':0.681920099141,'r':10}]
			},
			{label:['Ногинск: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.432366531792,'y':0.211335114889,'r':5}]
			},
			{label:['Норильск: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.951838472662,'y':0.474208428361,'r':5}]
			},
			{label:['Одинцово: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.854286116906,'y':0.94101763766,'r':5}]
			},
			{label:['Октябрьский: 1'],
			backgroundColor:'#c94a53',
			data:[{'x':0.178729167004,'y':0.742513706524,'r':5}]
			},
			{label:['Омск: 2'],
			backgroundColor:'#51574a',
			data:[{'x':0.142017222274,'y':0.342611339716,'r':10}]
			},
			{label:['Осиповичи: 1'],
			backgroundColor:'#9163b6',
			data:[{'x':0.68250457812,'y':0.0069650635621,'r':5}]
			},
			{label:['Отрадное: 2'],
			backgroundColor:'#9abf88',
			data:[{'x':0.00605825065619,'y':0.231514066101,'r':10}]
			},
			{label:['Переславль-Залесский: 1'],
			backgroundColor:'#e279a3',
			data:[{'x':0.117780554345,'y':0.600472981963,'r':5}]
			},
			{label:['Пермь: 5'],
			backgroundColor:'#f19670',
			data:[{'x':0.503228588726,'y':0.225236219984,'r':25}]
			},
			{label:['Петрозаводск: 3'],
			backgroundColor:'#51574a',
			data:[{'x':0.117875940607,'y':0.386057273768,'r':15}]
			},
			{label:['Посудичи: 1'],
			backgroundColor:'#9abf88',
			data:[{'x':0.347616289915,'y':0.308161555542,'r':5}]
			},
			{label:['Похвистнево: 1'],
			backgroundColor:'#74c493',
			data:[{'x':0.840696886859,'y':0.638420875544,'r':5}]
			},
			{label:['Псков: 4'],
			backgroundColor:'#f19670',
			data:[{'x':0.270125364289,'y':0.580557876177,'r':20}]
			},
			{label:['Пудож: 1'],
			backgroundColor:'#4e2472',
			data:[{'x':0.043112452097,'y':0.252665277436,'r':5}]
			},
			{label:['Рыбинск: 1'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.397854723284,'y':0.66073446909,'r':5}]
			},
			{label:['Рязань: 2'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.618617562796,'y':0.311193307232,'r':10}]
			},
			{label:['Санкт-Петербург: 489'],
			backgroundColor:'#e0598b',
			data:[{'x':0.0508747474541,'y':0.551799387284,'r':230}]
			},
			{label:['Сергиев Посад: 1'],
			backgroundColor:'#74c493',
			data:[{'x':0.101615823966,'y':0.904712586826,'r':5}]
			},
			{label:['Серов: 1'],
			backgroundColor:'#993767',
			data:[{'x':0.159937871211,'y':0.824875100372,'r':5}]
			},
			{label:['Сибай: 1'],
			backgroundColor:'#a34974',
			data:[{'x':0.323386537177,'y':0.71720461984,'r':5}]
			},
			{label:['Сланцы: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.669459973737,'y':0.299941816318,'r':5}]
			},
			{label:['Смоленск: 2'],
			backgroundColor:'#f19670',
			data:[{'x':0.0147831544262,'y':0.612912060211,'r':10}]
			},
			{label:['Сосновый Бор: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.475687922294,'y':0.498055989765,'r':5}]
			},
			{label:['Сумы: 1'],
			backgroundColor:'#9abf88',
			data:[{'x':0.565706825124,'y':0.345425662871,'r':5}]
			},
			{label:['Сургут: 1'],
			backgroundColor:'#e16552',
			data:[{'x':0.078946177298,'y':0.160997239008,'r':5}]
			},
			{label:['Тверь: 1'],
			backgroundColor:'#447c69',
			data:[{'x':0.369872316229,'y':0.767639013729,'r':5}]
			},
			{label:['Терскол: 1'],
			backgroundColor:'#a34974',
			data:[{'x':0.604427606722,'y':0.902027962442,'r':5}]
			},
			{label:['Тихвин: 1'],
			backgroundColor:'#447c69',
			data:[{'x':0.898026746747,'y':0.530800593837,'r':5}]
			},
			{label:['Тольятти: 1'],
			backgroundColor:'#e16552',
			data:[{'x':0.288121230646,'y':0.576587086906,'r':5}]
			},
			{label:['Томск: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.777507662296,'y':0.287108374121,'r':5}]
			},
			{label:['Тюмень: 1'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.277435209867,'y':0.367145501411,'r':5}]
			},
			{label:['Улан-Удэ: 1'],
			backgroundColor:'#c94a53',
			data:[{'x':0.533688785969,'y':0.0709522988022,'r':5}]
			},
			{label:['Ульяновск: 1'],
			backgroundColor:'#c94a53',
			data:[{'x':0.865937189362,'y':0.770804279053,'r':5}]
			},
			{label:['Урюпинск: 1'],
			backgroundColor:'#9abf88',
			data:[{'x':0.194755693625,'y':0.186735609438,'r':5}]
			},
			{label:['Уфа: 1'],
			backgroundColor:'#e279a3',
			data:[{'x':0.924825130564,'y':0.979511795247,'r':5}]
			},
			{label:['Фрязино: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.499915897681,'y':0.807995169371,'r':5}]
			},
			{label:['Херсон: 1'],
			backgroundColor:'#e279a3',
			data:[{'x':0.670312511744,'y':0.716078367458,'r':5}]
			},
			{label:['Череповец: 4'],
			backgroundColor:'#9163b6',
			data:[{'x':0.0685438072234,'y':0.0742207476503,'r':20}]
			},
			{label:['Чехов: 1'],
			backgroundColor:'#993767',
			data:[{'x':0.566108373431,'y':0.475408347397,'r':5}]
			},
			{label:['Щёлково: 1'],
			backgroundColor:'#74c493',
			data:[{'x':0.505213391359,'y':0.0202026083591,'r':5}]
			},
			{label:['Ялта: 2'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.717845432281,'y':0.534011209477,'r':10}]
			},
			{label:['Ярославль: 5'],
			backgroundColor:'#993767',
			data:[{'x':0.182105925243,'y':0.447864260596,'r':25}]
			},
			{label:['Colonia: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.949344888452,'y':0.791515467516,'r':5}]
			},
			{label:['Jakarta: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.87600012274,'y':0.0839406581613,'r':5}]
			},
			{label:['London: 1'],
			backgroundColor:'#9abf88',
			data:[{'x':0.296530254774,'y':0.134893963912,'r':5}]
			},
			{label:['Melbourne: 1'],
			backgroundColor:'#447c69',
			data:[{'x':0.78455670044,'y':0.385924330732,'r':5}]
			},
			{label:['Nord: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.655034043616,'y':0.496898929618,'r':5}]
			},
			{label:['Singapore: 1'],
			backgroundColor:'#e16552',
			data:[{'x':0.665572750234,'y':0.983388549135,'r':5}]
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