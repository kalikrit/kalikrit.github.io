const TB = document.getElementById("team_bar");
const TP = document.getElementById("team_pie");
const total = document.getElementById("total");

Chart.defaults.global.animation.duration = 3000;
Chart.defaults.scale.ticks.beginAtZero = true;

let ch_data = [
	{
		"date":"22 декабря",
		"chm_name":"Татьяна Позднякова",
		"km":10.7
	},
	{
		"date":"22 декабря",
		"chm_name":"Ирина Кашапова",
		"km":10.21
	},
	{
		"date":"22 декабря",
		"chm_name":"Анна Былина",
		"km":11.02
	},
	{
		"date":"22 декабря",
		"chm_name":"Айдар Мугинов",
		"km":13.40
	},	
	{
		"date":"22 декабря",
		"chm_name":"Ренат Садыков",
		"km":6
	},		
	{
		"date":"22 декабря",
		"chm_name":"Регина Волкова",
		"km":10
	},	
	{
		"date":"22 декабря",
		"chm_name":"Роберт Русланович",
		"km":10
	},
	{
		"date":"22 декабря",
		"chm_name":"Феофан Дега",
		"km":20.20
	},
	{
		"date":"22 декабря",
		"chm_name":"Екатерина Хасенова",
		"km":9
	},
	{
		"date":"22 декабря",
		"chm_name":"Дарья Губарева",
		"km":12.50
	},
	{
		"date":"22 декабря",
		"chm_name":"Николай Козлов",
		"km":20.65
	},
	{
		"date":"21 декабря",
		"chm_name":"Женя Кучин",
		"km":5.32
	},
	{
		"date":"21 декабря",
		"chm_name":"Лилия Галочкина",
		"km":9.95
	},	
	{
		"date":"21 декабря",
		"chm_name":"Anna Khizhnyakova",
		"km":10.6
	},
	{
		"date":"21 декабря",
		"chm_name":"Митяй Нехорошев",
		"km":15
	},	
	{
		"date":"21 декабря",
		"chm_name":"Роман Табачков",
		"km":16.2
	},
	{
		"date":"21 декабря",
		"chm_name":"Владимир Будник",
		"km":10
	},
	{
		"date":"21 декабря",
		"chm_name":"Лена Голубева",
		"km":13.6
	},
	{
		"date":"21 декабря",
		"chm_name":"Таня Торубарова",
		"km":23.3
	},	
	{
		"date":"21 декабря",
		"chm_name":"Алексей Исаченко",
		"km":10.2
	},
	{
		"date":"21 декабря",
		"chm_name":"Макс Лапаев",
		"km":22.2
	},
	{
		"date":"21 декабря",
		"chm_name":"Анна Исаченко",
		"km":10
	},
	{
		"date":"21 декабря",
		"chm_name":"Мишка Журавихин",
		"km":1.56
	},
	{
		"date":"21 декабря",
		"chm_name":"Сергей Самойленко",
		"km":2.42
	},
	{
		"date":"21 декабря",
		"chm_name":"Людмила Маракулина",
		"km":3.31
	},
	{
		"date":"21 декабря",
		"chm_name":"Александр Родионов",
		"km":13.51
	},
	{
		"date":"21 декабря",
		"chm_name":"Феофан Дега",
		"km":15
	},
	{
		"date":"21 декабря",
		"chm_name":"Ирина Масанова",
		"km":88.54
	},
	{
		"date":"21 декабря",
		"chm_name":"Татьяна Ермохина",
		"km":43.93
	},
	{
		"date":"21 декабря",
		"chm_name":"Олег Молчанов",
		"km":5
	},
	{
		"date":"21 декабря",
		"chm_name":"Дарья Губарева",
		"km":7.3
	},
	{
		"date":"21 декабря",
		"chm_name":"Brown Eyes (Надия)",
		"km":10
	},
	{
		"date":"21 декабря",
		"chm_name":"Дмитрий Тожокин",
		"km":5
	},
	{
		"date":"21 декабря",
		"chm_name":"Оксана Тихоненков",
		"km":5.6
	},
	{
		"date":"21 декабря",
		"chm_name":"Светлана Слепых",
		"km":4.07
	},
	{
		"date":"21 декабря",
		"chm_name":"Дина Шостак",
		"km":5.66
	},
	{
		"date":"21 декабря",
		"chm_name":"Татьяна Алехина",
		"km":13.47
	},
	{
		"date":"21 декабря",
		"chm_name":"Ольга Сандакова",
		"km":7.72
	},
	{
		"date":"21 декабря",
		"chm_name":"Анна Дмитриева",
		"km":7.02
	},
	{
		"date":"21 декабря",
		"chm_name":"Надежда Зотова",
		"km":7
	},
	{
		"date":"21 декабря",
		"chm_name":"Элла Dontsova",
		"km":3
	},
	{
		"date":"21 декабря",
		"chm_name":"Ирина Кашапова",
		"km":10.6
	},
	{
		"date":"21 декабря",
		"chm_name":"Анна Былина",
		"km":12
	},
	{
		"date":"21 декабря",
		"chm_name":"Айгуль Гиндуллина",
		"km":5.6
	},
	{
		"date":"21 декабря",
		"chm_name":"Регина Волкова",
		"km":6
	},
	{
		"date":"21 декабря",
		"chm_name":"Zhanna Altworld",
		"km":7.8
	},
	{
		"date":"21 декабря",
		"chm_name":"Ренат Садыков",
		"km":10
	},
	{
		"date":"21 декабря",
		"chm_name":"Айдар Мугинов",
		"km":20.5
	},
	{
		"date":"21 декабря",
		"chm_name":"Иван Тюрин",
		"km":18.01
	},
	{
		"date":"21 декабря",
		"chm_name":"Екатерина Хасенова",
		"km":15
	},
	{
		"date":"21 декабря",
		"chm_name":"Павел Дерябов",
		"km":14.3
	},
	{
		"date":"21 декабря",
		"chm_name":"Роберт Русланович",
		"km":10.05
	},
	{
		"date":"21 декабря",
		"chm_name":"Татьяна Позднякова",
		"km":8.4
	},
	{
		"date":"21 декабря",
		"chm_name":"Роберт Русланович",
		"km":10
	},
	{
		"date":"21 декабря",
		"chm_name":"Николай Козлов",
		"km":10
	},
	{
		"date":"21 декабря",
		"chm_name":"Наталья Мишечкина",
		"km":10.2
	},
	{
		"date":"21 декабря",
		"chm_name":"Елизавета Тюрина",
		"km":16
	},
	{
		"date":"21 декабря",
		"chm_name":"Леонид Дмитриев",
		"km":26.03
	}
];

let t = 0;
ch_data.forEach(function(item){
	t+=item.km;
});
total.innerHTML = Math.round(t)+" км";

let teams = [
	{
		"tn":"БаBYки",
		"alias":"bavuki",
		"link": "https://vk.com/wall-128384986_134632"
	},
	{
		"tn":"Беголоси",
		"alias":"begolosi",
		"link": "https://vk.com/wall-128384986_134629"
	},	
	{
		"tn":"StarHamsters",
		"alias":"starhamsters",
		"link": "https://vk.com/wall-128384986_134538"
	},	
	{
		"tn":"Татарская мафия",
		"alias":"tatary",
		"link": "https://vk.com/wall-128384986_134509"
	},
	{
		"tn":"Черепашидзы Girls",
		"alias":"tortugachicas",
		"link": "https://vk.com/wall-128384986_134400"
	},
	{
		"tn":"Козленочек и 5 волчиц",
		"alias":"sincolobas",
		"link": "https://vk.com/wall-128384986_134553"
	},
	{
		"tn":"Ржанкообразные бегунки",
		"alias":"begunki",
		"link": "https://vk.com/begoman?w=wall-128384986_134117"
	},
	{
		"tn":"Просто хорошие люди",
		"alias":"buenagente",
		"link": "https://vk.com/begoman?w=wall-128384986_134063"
	},
	{
		"tn":"Три топора",
		"alias":"treshachas",
		"link": "https://vk.com/begoman?w=wall-128384986_133924"
	},
	{
		"tn":"EasyEasy",
		"alias":"easy",
		"link": "https://vk.com/begoman?w=wall-128384986_134906"
	}
];

let team_members = [
	{
		"name":"Макс Лапаев",
		"team_alias":"bavuki",
		"vk":"Макс Лапаев https://vk.com/weirdo_rex"
	},
	{
		"name":"Анна Исаченко",
		"team_alias":"bavuki",
		"vk":"https://vk.com/anna_isachenk"
	},
	{
		"name":"Алексей Исаченко",
		"team_alias":"bavuki",
		"vk":"https://vk.com/alex.isach"
	},
	{
		"name":"Таня Торубарова",
		"team_alias":"bavuki",
		"vk":"https://vk.com/id135910084"
	},
	{
		"name":"Лена Голубева",
		"team_alias":"bavuki",
		"vk":"https://vk.com/id35788809"
	},
	{
		"name":"Владимир Будник",
		"team_alias":"bavuki",
		"vk":"https://vk.com/febnine"
	},
	{
		"name":"Митяй Нехорошев",
		"team_alias":"begolosi",
		"vk":"https://vk.com/id163804878"
	},	
	{
		"name":"Наталья Нещерет",
		"team_alias":"begolosi",
		"vk":"https://vk.com/id1827143"
	},
	{
		"name":"Роман Табачков",
		"team_alias":"begolosi",
		"vk":"https://vk.com/id318744872"
	},
	{
		"name":"Лилия Галочкина",
		"team_alias":"begolosi",
		"vk":"https://vk.com/id148228234"
	},
	{
		"name":"Женя Кучин",
		"team_alias":"begolosi",
		"vk":"https://vk.com/id28541386"
	},
	{
		"name":"Anna Khizhnyakova",
		"team_alias":"begolosi",
		"vk":"https://vk.com/id270210670"
	},
	{
		"name":"Кристина Васильева",
		"team_alias":"starhamsters",
		"vk":"https://vk.com/vsem_po_bulke"
	},
	{
		"name":"Noice Home (Игорь)",
		"team_alias":"starhamsters",
		"vk":"https://vk.com/id121827693"
	},
	{
		"name":"Татьяна Ермохина",
		"team_alias":"starhamsters",
		"vk":"https://vk.com/id17957592"
	},
	{
		"name":"Максимильян Сергеевич",
		"team_alias":"starhamsters",
		"vk":"https://vk.com/hip_da_hop"
	},
	{
		"name":"Вячеслав Филиппов",
		"team_alias":"starhamsters",
		"vk":"https://vk.com/id130126835"
	},
	{
		"name":"Валерий Крылов",
		"team_alias":"starhamsters",
		"vk":"https://vk.com/id51441011"
	},
	{
		"name":"Айгуль Гиндуллина",
		"team_alias":"tatary",
		"vk":"https://vk.com/id775736"
	},
	{
		"name":"Регина Волкова",
		"team_alias":"tatary",
		"vk":"https://vk.com/id1731840"
	},
	{
		"name":"Zhanna Altworld",
		"team_alias":"tatary",
		"vk":"https://vk.com/altworldniff"
	},
	{
		"name":"Айдар Мугинов",
		"team_alias":"tatary",
		"vk":"https://vk.com/m.aidar"
	},
	{
		"name":"Ренат Садыков",
		"team_alias":"tatary",
		"vk":"https://vk.com/cadykov"
	},
	{
		"name":"Роберт Русланович",
		"team_alias":"tatary",
		"vk":"https://vk.com/id406791440"
	},
	{
		"name":"Оксана Тихоненкова",
		"team_alias":"tortugachicas",
		"vk":"https://vk.com/id35319141"
	},
	{
		"name":"Ольга Сандакова",
		"team_alias":"tortugachicas",
		"vk":"https://vk.com/id3342746"
	},
	{
		"name":"Анна Дмитриева",
		"team_alias":"tortugachicas",
		"vk":"https://vk.com/ann_e_t"
	},
	{
		"name":"Дина Шостак",
		"team_alias":"tortugachicas",
		"vk":"https://vk.com/dshostak"
	},
	{
		"name":"Татьяна Алехина",
		"team_alias":"tortugachicas",
		"vk":"https://vk.com/id163068357"
	},
	{
		"name":"Светлана Слепых",
		"team_alias":"tortugachicas",
		"vk":"https://vk.com/kabuki00"
	},
	{
		"name":"Катя Бонни",
		"team_alias":"tortugachicas",
		"vk":"https://vk.com/id74509332"
	},
	{
		"name":"Ирина Кашапова",
		"team_alias":"sincolobas",
		"vk":"https://vk.com/milka101"
	},
	{
		"name":"Анна Былина",
		"team_alias":"sincolobas",
		"vk":"https://vk.com/id283310529"
	},
	{
		"name":"Элла Dontsova",
		"team_alias":"sincolobas",
		"vk":"https://vk.com/id80027768"
	},
	{
		"name":"Марина Силаева",
		"team_alias":"sincolobas",
		"vk":"https://vk.com/marikarun"
	},
	{
		"name":"Надежда Зотова",
		"team_alias":"sincolobas",
		"vk":"https://vk.com/nadezdazoloto"
	},
	{
		"name":"Николай Козлов",
		"team_alias":"sincolobas",
		"vk":"https://vk.com/kozlov_kolya"
	},
	{
		"name":"Екатерина Хасенова",
		"team_alias":"begunki",
		"vk":"https://vk.com/e_khassenova"
	},
	{
		"name":"Дарья Губарева",
		"team_alias":"begunki",
		"vk":"https://vk.com/id151366904"
	},
	{
		"name":"Олег Молчанов",
		"team_alias":"begunki",
		"vk":"https://vk.com/alickaps"
	},
	{
		"name":"Елизавета Тюрина",
		"team_alias":"begunki",
		"vk":"https://vk.com/burzuka"
	},
	{
		"name":"Иван Тюрин",
		"team_alias":"begunki",
		"vk":"https://vk.com/id25146989"
	},
	{
		"name":"Леонид Дмитриев",
		"team_alias":"buenagente",
		"vk":"https://vk.com/dmitriev_leonid"
	},
	{
		"name":"Brown Eyes (Надия)",
		"team_alias":"buenagente",
		"vk":"https://vk.com/id359229790"
	},
	{
		"name":"Наталья Мишечкина",
		"team_alias":"buenagente",
		"vk":"https://vk.com/id10087393"
	},
	{
		"name":"Дмитрий Тожокин",
		"team_alias":"buenagente",
		"vk":"https://vk.com/tokingd"
	},
	{
		"name":"Татьяна Позднякова",
		"team_alias":"buenagente",
		"vk":"https://vk.com/id107443730"
	},
	{
		"name":"Павел Дерябов",
		"team_alias":"buenagente",
		"vk":"https://vk.com/deryabov"
	},
	{
		"name":"Владимир Масеев",
		"team_alias":"treshachas",
		"vk":"https://vk.com/subsank"
	},
	{
		"name":"Анастасия Рязанова",
		"team_alias":"treshachas",
		"vk":"https://vk.com/anastasia.riazanova"
	},
	{
		"name":"Михаил Полибин",
		"team_alias":"treshachas",
		"vk":"https://vk.com/polibinm"
	},
	{
		"name":"Сергей Лебовский",
		"team_alias":"treshachas",
		"vk":"https://vk.com/id366111070"
	},
	{
		"name":"Ольга Zenkowa",
		"team_alias":"treshachas",
		"vk":"https://vk.com/id173093972"
	},
	{
		"name":"Ирина Масанова",
		"team_alias":"treshachas",
		"vk":"https://vk.com/nezwanka"
	},
	{
		"name":"Александр Родионов",
		"team_alias":"easy",
		"vk":"https://vk.com/id223318742"
	},
	{
		"name":"Сергей Самойленко",
		"team_alias":"easy",
		"vk":"https://vk.com/samoylenko1981"
	},
	{
		"name":"Людмила Маракулина",
		"team_alias":"easy",
		"vk":"https://vk.com/id298550915"
	},
	{
		"name":"Мишка Журавихин",
		"team_alias":"easy",
		"vk":"https://vk.com/my_surprise"
	},
	{
		"name":"Феофан Дега",
		"team_alias":"easy",
		"vk":"https://vk.com/degaf"
	}	
];

let colors = ["#51574a", "#447c69", "#74c493","#8e8c6d", "#e4bf80", "#e9d78e", "#e2975d", "#f19670", "#e16552","#c94a53", "#be5168", "#a34974","#993767", "#65387d", "#4e2472", "#9163b6", "#e279a3", "#e0598b","#7c9fb0", "#5698c4", "#9abf88"];
let labels = ["21 декабря","22 декабря","23 декабря","24 декабря","25 декабря","26 декабря","27 декабря"];

function makeBarData(){
	let bardata = [];
	let i = 0;
	teams.forEach(function(team){
		td = {};
		td.label = team.tn;
		td.fill = true;
		td.backgroundColor = colors[i];
		td.borderColor = "#74c400";
		i++;
		td.data = [0,0,0,0,0,0,0,0,0,0];
		ch_data.forEach(function(cd){
			if(is_inteam(cd.chm_name, team.alias)){
				didx = labels.indexOf(cd.date);
				td.data[didx] += cd.km;
			}
		});
		td.data[didx] = Math.round(td.data[didx]);
		bardata.push(td);
	});
	return bardata;
};

function is_inteam(name, team_alias){
	let found = false;
	team_members.forEach(function(tm){
		if(tm.name.includes(name) && tm.team_alias.includes(team_alias))
			found = true;
	});
	return found;
}

let teambar_chart = new Chart(TB, {
    type: 'bar',
	data: {
		labels: labels,
		datasets: makeBarData(),
		options: {
			title: {
			  display: true,
			  text: 'Челлендж группы VK Бег 2.0'
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

let pielabels = [];
teams.forEach(function(team){
	pielabels.push(team.tn);
});

function makePieData(){
	let piedata = [0,0,0,0,0,0,0,0,0,0];
	let i = 0;
	teams.forEach(function(team){
		ch_data.forEach(function(cd){
			if(is_inteam(cd.chm_name, team.alias))
				piedata[i] += cd.km;
		});
		piedata[i] = Math.round(piedata[i]);
		i++;
	});
	return piedata;
};

let teampie_chart = new Chart(TP, {
	type: 'doughnut',
	data: {
		labels: pielabels,
		datasets: [
			{
				data: makePieData(),
				backgroundColor: ["#51574a", "#447c69", "#74c493", "#8e8c6d", "#e4bf80", "#e9d78e", "#e2975d", "#f19670", "#e16552", "#c94a53"],
                hoverBackgroundColor: ["#515700", "#447c00", "#74c400", "#8e8c00", "#e4bf00", "#e9d700", "#e29700", "#f19600", "#e16500", "#c94a00"]
			}
				],
		options: {}
	}	
});