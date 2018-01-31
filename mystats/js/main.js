const RASH = document.getElementById("rash");
const RP = document.getElementById("rash_pie");

Chart.defaults.global.animation.duration = 3000;
Chart.defaults.scale.ticks.beginAtZero = true;

let RI = [
{
	'ilabel': 'Internet/телефон',
	'ivalue': 2100,
	'ipm':[2100],
	'ibgc':"#51574a"
},
{
	'ilabel': "авто",
	'ivalue': 1150,
	'ipm':[1150],
	'ibgc':"#999999"
},
{
	'ilabel': "аптека",
	'ivalue': 760.99,
	'ipm':[760.99],
	'ibgc':"#CCCC33"
},
{
	'ilabel': "вино",
	'ivalue': 1306,
	'ipm':[1306],	
	'ibgc':"#74c493"
},
{
	'ilabel': "еда на вынос",
	'ivalue': 988.20,
	'ipm':[988.20],	
	'ibgc':"#8e8c6d"
},
{
	'ilabel': "квартплата",
	'ivalue': 33312.49,
	'ipm':[33312.49],	
	'ibgc':"#74c493"
},
{
	'ilabel': "обеды",
	'ivalue': 877.99,
	'ipm':[877.99],	
	'ibgc':"#FFCC00"
},
{
	'ilabel': "отпуск",
	'ivalue': 0,
	'ipm':[0],	
	'ibgc':"#FF66FF"
},
{
	'ilabel': "овощи-фрукты",
	'ivalue': 3742.15,
	'ipm':[3742.15],	
	'ibgc':"#6699FF"
},
{
	'ilabel': "подарки",
	'ivalue': 5739.36,
	'ipm':[5739.36],	
	'ibgc':"#c94a53"
},
{
	'ilabel': "продукты",
	'ivalue': 9964.09,
	'ipm':[9964.09],	
	'ibgc':"#339999"
},
{
	'ilabel': "проезд",
	'ivalue': 2347,
	'ipm':[2347],	
	'ibgc':"#e2975d"
},
{
	'ilabel': "сладости",
	'ivalue': 2560.25,
	'ipm':[2560.25],	
	'ibgc':"#447c69"
},
{
	'ilabel': "спорт",
	'ivalue': 8019.28,
	'ipm':[8019.28],	
	'ibgc':"#e4bf80"
},
{
	'ilabel': "учеба",
	'ivalue': 5346.90,
	'ipm':[5346.90],	
	'ibgc':"#f19670"
},
{
	'ilabel': "хозяйственное",
	'ivalue': 826.66,
	'ipm':[826.66],	
	'ibgc':"#6633FF"
}];

let need_show = ["квартплата","продукты","овощи-фрукты","сладости","еда на вынос","обеды","подарки"];

let DS = [];
need_show.forEach(function(item){
	RI.forEach(function(o){
		if (o.ilabel == item) {
				let d = {};
				d.label = item;
				d.backgroundColor = o.ibgc;
				d.data = o.ipm;
				d.fill = true;
				d.spanGaps = false;
				DS.push(d);
		}
	});
});

let rashody_chart = new Chart(RASH, {
	type: 'bar',
	data: {
		labels: ["Январь"],//"Февраль","Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		datasets: DS
	}
});

let pielabels = [];
let piedata = [];
let bgcl = [];

RI.forEach(function(obj){
	pielabels.push(obj.ilabel);
	piedata.push(obj.ivalue);
	bgcl.push(obj.ibgc);
});

let rashody_pie_chart = new Chart(RP, {
	type: 'doughnut',
	data: {
		labels: pielabels,
		datasets: [
			{
				data: piedata,
				backgroundColor: bgcl
			}
				],
		options: {}
	}	
});