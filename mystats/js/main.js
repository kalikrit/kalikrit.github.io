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
	'ilabel': "аптека",
	'ivalue': 20,
	'ipm':[20],
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
	'ivalue': 0,
	'ipm':[0],	
	'ibgc':"#74c493"
},
{
	'ilabel': "обеды",
	'ivalue': 735.75,
	'ipm':[735.75],	
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
	'ivalue': 2910.78,
	'ipm':[2910.78],	
	'ibgc':"#6699FF"
},
{
	'ilabel': "подарки",
	'ivalue': 5579.37,
	'ipm':[5579.37],	
	'ibgc':"#c94a53"
},
{
	'ilabel': "продукты",
	'ivalue': 8604.32,
	'ipm':[8604.32],	
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
	'ivalue': 1982.69,
	'ipm':[1982.69],	
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
	'ivalue': 786.67,
	'ipm':[786.67],	
	'ibgc':"#6633FF"
}];

let need_show = ["продукты","овощи-фрукты","сладости","еда на вынос","обеды","Internet/телефон","проезд","хозяйственное","спорт","подарки"];

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