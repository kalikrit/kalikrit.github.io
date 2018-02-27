const RASH = document.getElementById("rash");
const RP = document.getElementById("rash_pie");
const SRM = document.getElementById("sum_rash_month");

Chart.defaults.global.animation.duration = 3000;
Chart.defaults.scale.ticks.beginAtZero = true;

let RI = [
{
	'ilabel': 'Internet/телефон',
	'ipm':[2100.00,	1100.00],
	'ibgc':"#51574a"
},
{
	'ilabel': "авто",
	'ipm':[1150,3393],
	'ibgc':"#999999"
},
{
	'ilabel': "аптека",
	'ipm':[760.99,1080],
	'ibgc':"#CCCC33"
},
{
	'ilabel': "вино",
	'ipm':[1306,339],	
	'ibgc':"#74c493"
},
{
	'ilabel': "еда на вынос",
	'ipm':[988.20,658.80],	
	'ibgc':"#8e8c6d"
},
{
	'ilabel': "квартплата",
	'ipm':[33312.49,184.12],	
	'ibgc':"#74c493"
},
{
	'ilabel': "обеды",
	'ipm':[926.13,670.60],	
	'ibgc':"#FFCC00"
},
{
	'ilabel': "овощи-фрукты",
	'ipm':[3742.15,3267.38],	
	'ibgc':"#6699FF"
},
{
	'ilabel': "отпуск",
	'ipm':[0,113942.10],	
	'ibgc':"#FF66FF"
},
{
	'ilabel': "подарки",
	'ipm':[5739.36,1065.00],	
	'ibgc':"#c94a53"
},
{
	'ilabel': "поликлиника",
	'ipm':[0,33700],	
	'ibgc':"#993300"
},
{
	'ilabel': "продукты",
	'ipm':[10233.16,10357.81],	
	'ibgc':"#339999"
},
{
	'ilabel': "проезд",
	'ipm':[2347.00,1765.00],	
	'ibgc':"#e2975d"
},
{
	'ilabel': "сладости",
	'ipm':[2560.25,1824.58],	
	'ibgc':"#447c69"
},
{
	'ilabel': "спорт",
	'ipm':[8019.28,0],	
	'ibgc':"#e4bf80"
},
{
	'ilabel': "учеба",
	'ipm':[5346.90,0],	
	'ibgc':"#f19670"
},
{
	'ilabel': "хозяйственное",
	'ipm':[826.66,1009.53],	
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
		labels: ["Январь","Февраль","Март"],//, "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		datasets: DS
	}
});

let data = [];
labels = ["Январь","Февраль", "Март", "Апрель", "Май"];//, "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
for(var i=0; i < labels.length; i++){
	let sum = 0;
	RI.forEach(function(o){
		sum += o.ipm[i];
	});
	data.push(Math.round(sum));
}

let sum_rashody_month = new Chart(SRM, {
	type: 'bar',
	data: {
		labels: labels,
		datasets: [{
			label: '2018 год',
			data: data,
			backgroundColor: ["#6633FF","#f19670"]
		}]
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