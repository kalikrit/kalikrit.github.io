const CITIES = document.getElementById("cch");

Chart.defaults.global.animation.duration = 3000;
Chart.defaults.scale.ticks.beginAtZero = true;


let cities_chart = new Chart(CITIES, {
    type: 'bubble',
	data: {
		datasets: [
			{label:['Верхнедвинск: 143'],
			backgroundColor:'#e2975d',
			data:[{'x':0.0361771108116,'y':0.263520338626,'r':143}]
			},
			{label:['Иваново: 4'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.365943008094,'y':0.819686645622,'r':20}]
			},
			{label:['Новокузнецк: 1'],
			backgroundColor:'#993767',
			data:[{'x':0.941766283603,'y':0.562309541581,'r':5}]
			},
			{label:['Саки: 1'],
			backgroundColor:'#5698c4',
			data:[{'x':0.458259044869,'y':0.956907630896,'r':5}]
			},
			{label:['Магадан: 2'],
			backgroundColor:'#447c69',
			data:[{'x':0.243698124592,'y':0.90634405058,'r':10}]
			},
			{label:['Донецк: 1'],
			backgroundColor:'#a34974',
			data:[{'x':0.775894945094,'y':0.515878374868,'r':5}]
			},
			{label:['Альметьевск: 2'],
			backgroundColor:'#9163b6',
			data:[{'x':0.88444027701,'y':0.967992325603,'r':10}]
			},
			{label:['Ришон ЛеЦион: 3'],
			backgroundColor:'#51574a',
			data:[{'x':0.031729897799,'y':0.570559720648,'r':15}]
			},
			{label:['Ульяновск: 8'],
			backgroundColor:'#993767',
			data:[{'x':0.471588454548,'y':0.77,'r':40}]
			},
			{label:['Нововоронеж: 3'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.0547800271038,'y':0.135971717356,'r':15}]
			},
			{label:['Агинское: 11'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.335451334578,'y':0.600712622876,'r':55}]
			},
			{label:['Пинск: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.939403777746,'y':0.480357801086,'r':5}]
			},
			{label:['Абакан: 4'],
			backgroundColor:'#74c493',
			data:[{'x':0.189778416347,'y':0.356412812991,'r':20}]
			},
			{label:['Нижний Новгород: 2'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.543788635553,'y':0.100717411206,'r':10}]
			},
			{label:['Новосибирск: 8'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.910352455315,'y':0.13286122028,'r':40}]
			},
			{label:['Селятино: 6'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.553782902002,'y':0.229283802593,'r':30}]
			},
			{label:['Тосно: 13'],
			backgroundColor:'#f19670',
			data:[{'x':0.241477287936,'y':0.345543812584,'r':65}]
			},
			{label:['Орехово-Зуево: 1'],
			backgroundColor:'#e279a3',
			data:[{'x':0.124107113427,'y':0.436324872839,'r':5}]
			},
			{label:['Солнечногорск: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.298278698738,'y':0.644973371064,'r':5}]
			},
			{label:['Георгиевск: 1'],
			backgroundColor:'#9163b6',
			data:[{'x':0.983767413305,'y':0.762850785486,'r':5}]
			},
			{label:['Октябрьский: 2'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.621052556258,'y':0.125577076175,'r':10}]
			},
			{label:['Навашино: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.385904278098,'y':0.57363976043,'r':5}]
			},
			{label:['Омск: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.450035284702,'y':0.698046349485,'r':5}]
			},
			{label:['Шексна: 1'],
			backgroundColor:'#e2975d',
			data:[{'x':0.616889258173,'y':0.53815832388,'r':5}]
			},
			{label:['Тамбов: 2'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.263121002417,'y':0.363248842904,'r':10}]
			},
			{label:['Кириши: 7'],
			backgroundColor:'#65387d',
			data:[{'x':0.0305819616664,'y':0.182133192661,'r':35}]
			},
			{label:['Luanda: 3'],
			backgroundColor:'#e0598b',
			data:[{'x':0.337449713213,'y':0.399378422388,'r':15}]
			},
			{label:['Кагул: 7'],
			backgroundColor:'#be5168',
			data:[{'x':0.614564044088,'y':0.129652153183,'r':35}]
			},
			{label:['Челябинск: 10'],
			backgroundColor:'#447c69',
			data:[{'x':0.570459241913,'y':0.653631215226,'r':50}]
			},
			{label:['Чебоксары: 5'],
			backgroundColor:'#9163b6',
			data:[{'x':0.355628155183,'y':0.270527656345,'r':25}]
			},
			{label:['Рязань: 1'],
			backgroundColor:'#a34974',
			data:[{'x':0.98879745703,'y':0.947374637456,'r':5}]
			},
			{label:['Лобня: 3'],
			backgroundColor:'#5698c4',
			data:[{'x':0.0775475405417,'y':0.401742726992,'r':15}]
			},
			{label:['Ковдор: 3'],
			backgroundColor:'#447c69',
			data:[{'x':0.762117597669,'y':0.812774872394,'r':15}]
			},
			{label:['Лангепас: 21'],
			backgroundColor:'#74c493',
			data:[{'x':0.604836279339,'y':0.694623709918,'r':21}]
			},
			{label:['Пудож: 1'],
			backgroundColor:'#e16552',
			data:[{'x':0.0248478597067,'y':0.493784742548,'r':5}]
			},
			{label:['London: 1'],
			backgroundColor:'#9abf88',
			data:[{'x':0.768243653151,'y':0.463387340414,'r':5}]
			},
			{label:['Сланцы: 3'],
			backgroundColor:'#447c69',
			data:[{'x':0.859562918152,'y':0.768254575047,'r':15}]
			},
			{label:['Владивосток: 2'],
			backgroundColor:'#f19670',
			data:[{'x':0.182395480083,'y':0.621663359867,'r':10}]
			},
			{label:['Смоленск: 13'],
			backgroundColor:'#74c493',
			data:[{'x':0.507732760716,'y':0.349822637392,'r':13}]
			},
			{label:['Дзержинск: 1'],
			backgroundColor:'#4e2472',
			data:[{'x':0.70277860481,'y':0.864675999018,'r':5}]
			},
			{label:['Кумертау: 2'],
			backgroundColor:'#c94a53',
			data:[{'x':0.347712931474,'y':0.902180092237,'r':10}]
			},
			{label:['Пенза: 1'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.833137642082,'y':0.101142174821,'r':5}]
			},
			{label:['Ливны: 3'],
			backgroundColor:'#e279a3',
			data:[{'x':0.918730108522,'y':0.750350495217,'r':15}]
			},
			{label:['Петрозаводск: 8'],
			backgroundColor:'#e0598b',
			data:[{'x':0.00248581697965,'y':0.761005209465,'r':40}]
			},
			{label:['Сибай: 3'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.963585052975,'y':0.984754402865,'r':15}]
			},
			{label:['Воркута: 4'],
			backgroundColor:'#4e2472',
			data:[{'x':0.432005356451,'y':0.774973446895,'r':20}]
			},
			{label:['Питер: 4'],
			backgroundColor:'#f19670',
			data:[{'x':0.310676169363,'y':0.00993226291684,'r':20}]
			},
			{label:['Дубна: 2'],
			backgroundColor:'#e279a3',
			data:[{'x':0.137975437433,'y':0.368638890994,'r':10}]
			},
			{label:['Иркутск: 3'],
			backgroundColor:'#74c493',
			data:[{'x':0.334869125461,'y':0.621218786804,'r':15}]
			},
			{label:['Тверь: 1'],
			backgroundColor:'#4e2472',
			data:[{'x':0.331702680926,'y':0.525313583455,'r':5}]
			},
			{label:['Краснодар: 1'],
			backgroundColor:'#f19670',
			data:[{'x':0.148090191048,'y':0.8593525874,'r':5}]
			},
			{label:['Бердск: 2'],
			backgroundColor:'#993767',
			data:[{'x':0.572835403268,'y':0.412201369948,'r':10}]
			},
			{label:['Тихвин: 1'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.965533171052,'y':0.891483120187,'r':5}]
			},
			{label:['Заречное: 4'],
			backgroundColor:'#5698c4',
			data:[{'x':0.144083200331,'y':0.846792618026,'r':20}]
			},
			{label:['Спасское: 2'],
			backgroundColor:'#447c69',
			data:[{'x':0.227722702704,'y':0.307164643679,'r':10}]
			},
			{label:['Улан-Удэ: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.969002041602,'y':0.289472794192,'r':5}]
			},
			{label:['Томск: 1'],
			backgroundColor:'#c94a53',
			data:[{'x':0.118212530341,'y':0.105970408511,'r':5}]
			},
			{label:['Набережные Челны: 2'],
			backgroundColor:'#65387d',
			data:[{'x':0.529673492147,'y':0.142164119137,'r':10}]
			},
			{label:['Крестцы: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.925251973288,'y':0.638987040361,'r':5}]
			},
			{label:['Раменское: 4'],
			backgroundColor:'#447c69',
			data:[{'x':0.436216103983,'y':0.75,'r':20}]
			},
			{label:['Boston: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.246667828832,'y':0.112286521297,'r':5}]
			},
			{label:['Волосово: 5'],
			backgroundColor:'#5698c4',
			data:[{'x':0.116627149999,'y':0.795411868836,'r':25}]
			},
			{label:['Одесса: 1'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.708944787173,'y':0.354147769892,'r':5}]
			},
			{label:['Шелехов: 1'],
			backgroundColor:'#f19670',
			data:[{'x':0.545251744747,'y':0.0235476740432,'r':5}]
			},
			{label:['Домодедово: 6'],
			backgroundColor:'#5698c4',
			data:[{'x':0.0363286593342,'y':0.497731107474,'r':30}]
			},
			{label:['Среднеуральск: 2'],
			backgroundColor:'#e16552',
			data:[{'x':0.836749156597,'y':0.319900868375,'r':10}]
			},
			{label:['Медвежий Угол: 4'],
			backgroundColor:'#f19670',
			data:[{'x':0.806156571405,'y':0.907287374063,'r':20}]
			},
			{label:['Калининград: 6'],
			backgroundColor:'#c94a53',
			data:[{'x':0.489263293102,'y':0.315700223833,'r':30}]
			},
			{label:['Шатура: 5'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.887586032681,'y':0.895136247197,'r':25}]
			},
			{label:['Уральск: 2'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.287791358333,'y':0.186225372185,'r':10}]
			},
			{label:['Павловский Посад: 4'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.389653984499,'y':0.0652513416515,'r':20}]
			},
			{label:['Йошкар-Ола: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.315010338365,'y':0.100628294067,'r':5}]
			},
			{label:['Апатиты: 2'],
			backgroundColor:'#e2975d',
			data:[{'x':0.181986327115,'y':0.408066087997,'r':10}]
			},
			{label:['Саранск: 1'],
			backgroundColor:'#e0598b',
			data:[{'x':0.658884265833,'y':0.178709385543,'r':5}]
			},
			{label:['Нижневартовск: 5'],
			backgroundColor:'#7c9fb0',
			data:[{'x':0.131991892247,'y':0.844131034978,'r':25}]
			},
			{label:['Магнитогорск: 3'],
			backgroundColor:'#e2975d',
			data:[{'x':0.602360498933,'y':0.6367574746,'r':15}]
			},
			{label:['Самара: 1'],
			backgroundColor:'#a34974',
			data:[{'x':0.0669471554773,'y':0.996817699018,'r':5}]
			},
			{label:['Кострома: 22'],
			backgroundColor:'#e9d78e',
			data:[{'x':0.353540407144,'y':0.551021433522,'r':22}]
			},
			{label:['Санкт-Петербург: 174'],
			backgroundColor:'#e2975d',
			data:[{'x':0.804604607707,'y':0.492388751169,'r':174}]
			},
			{label:['Сыктывкар: 3'],
			backgroundColor:'#e2975d',
			data:[{'x':0.784227871563,'y':0.522006482807,'r':15}]
			},
			{label:['Химки: 11'],
			backgroundColor:'#5698c4',
			data:[{'x':0.328965474994,'y':0.403198265876,'r':55}]
			},
			{label:['Мирный: 2'],
			backgroundColor:'#447c69',
			data:[{'x':0.613678506834,'y':0.813764456365,'r':10}]
			},
			{label:['Щёлково: 1'],
			backgroundColor:'#e4bf80',
			data:[{'x':0.719305038879,'y':0.742437776856,'r':5}]
			},
			{label:['Москва: 130'],
			backgroundColor:'#51574a',
			data:[{'x':0.442003978411,'y':0.36239130077,'r':130}]
			},
			{label:['Владимир: 8'],
			backgroundColor:'#e16552',
			data:[{'x':0.294686476021,'y':0.8,'r':40}]
			},
			{label:['Казань: 4'],
			backgroundColor:'#e2975d',
			data:[{'x':0.531062905995,'y':0.198005259221,'r':20}]
			},
			{label:['Знаменск: 1'],
			backgroundColor:'#c94a53',
			data:[{'x':0.55543951321,'y':0.0112560479904,'r':5}]
			},
			{label:['Курган: 1'],
			backgroundColor:'#447c69',
			data:[{'x':0.994835641142,'y':0.0618692031395,'r':5}]
			},
			{label:['Чайковский: 1'],
			backgroundColor:'#51574a',
			data:[{'x':0.266859717583,'y':0.932531703521,'r':5}]
			},
			{label:['Уварово: 5'],
			backgroundColor:'#f19670',
			data:[{'x':0.371944169764,'y':0.0994222859245,'r':25}]
			},
			{label:['Рыбинск: 19'],
			backgroundColor:'#9abf88',
			data:[{'x':0.421938150094,'y':0.19635316347,'r':19}]
			},
			{label:['Белгород: 2'],
			backgroundColor:'#8e8c6d',
			data:[{'x':0.655114564708,'y':0.450521462338,'r':10}]
			},
			{label:['Саратов: 2'],
			backgroundColor:'#e2975d',
			data:[{'x':0.981855957326,'y':0.58732034553,'r':10}]
			},
			{label:['Липецк: 6'],
			backgroundColor:'#993767',
			data:[{'x':0.253319243731,'y':0.8,'r':30}]
			},
			{label:['Кстово: 1'],
			backgroundColor:'#51574a',
			data:[{'x':0.00902075950226,'y':0.144847932845,'r':5}]
			}							
		],
		options: {
			title: {
			  display: true,
			  text: 'Города группы VK Бег 2.0'
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