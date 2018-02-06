const RASH = document.getElementById("rash");
const RP = document.getElementById("rash_pie");

Chart.defaults.global.animation.duration = 3000;
Chart.defaults.scale.ticks.beginAtZero = true;

let RI = [
{
	'ilabel': 'Internet/телефон',
	'ipm':[2100,500],
	'ibgc':"#51574a"
},
{
	'ilabel': "авто",
	'ipm':[1150],
	'ibgc':"#999999"
},
{
	'ilabel': "аптека",
	'ipm':[760.99],
	'ibgc':"#CCCC33"
},
{
	'ilabel': "вино",
	'ipm':[1306,339],	
	'ibgc':"#74c493"
},
{
	'ilabel': "еда на вынос",
	'ipm':[988.20],	
	'ibgc':"#8e8c6d"
},
{
	'ilabel': "квартплата",
	'ipm':[33312.49],	
	'ibgc':"#74c493"
},
{
	'ilabel': "обеды",
	'ipm':[877.99,88.59],	
	'ibgc':"#FFCC00"
},
{
	'ilabel': "отпуск",
	'ipm':[0],	
	'ibgc':"#FF66FF"
},
{
	'ilabel': "овощи-фрукты",
	'ipm':[3742.15,602.84],	
	'ibgc':"#6699FF"
},
{
	'ilabel': "подарки",
	'ipm':[5739.36],	
	'ibgc':"#c94a53"
},
{
	'ilabel': "продукты",
	'ipm':[9964.09,2601.83],	
	'ibgc':"#339999"
},
{
	'ilabel': "проезд",
	'ipm':[2347],	
	'ibgc':"#e2975d"
},
{
	'ilabel': "сладости",
	'ipm':[2560.25,528.14],	
	'ibgc':"#447c69"
},
{
	'ilabel': "спорт",
	'ipm':[8019.28],	
	'ibgc':"#e4bf80"
},
{
	'ilabel': "учеба",
	'ipm':[5346.90],	
	'ibgc':"#f19670"
},
{
	'ilabel': "хозяйственное",
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
		labels: ["Январь","Февраль"],//"Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		datasets: DS
	}
});

let pielabels = [];
let piedata = [];
let bgcl = [];

RI.forEach(function(obj){
	pielabels.push(obj.ilabel);
	let sum = 0;
	obj.ipm.forEach(function(item){sum = sum+item});
	piedata.push(sum);
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