const RASH = document.getElementById("rash");
const RP = document.getElementById("rash_pie");
const SRM = document.getElementById("sum_rash_month");

Chart.defaults.global.animation.duration = 3000;
Chart.defaults.scale.ticks.beginAtZero = true;

let RI = [
{
	'ilabel': 'Internet/телефон',
	'ipm':[2100.00,1100.00,1110.00,950.00,1840.00,1384.00,790.00,890.00,750.00],
	'ibgc':"#51574a"
},
{
	'ilabel': "авто",
	'ipm':[1150,3393,8580,1840,3298.15,4956.59,4732.19,4603.32,2132.54],
	'ibgc':"#999999"
},
{
	'ilabel': "аптека",
	'ipm':[291,1080,452,648,994,963,2005,1065.20,1245],
	'ibgc':"#CCCC33"
},
{
	'ilabel': "вино",
	'ipm':[1306,339,1720.74,1047,0,410.08,337.40,129.80,383.00],	
	'ibgc':"#74c493"
},
{
	'ilabel': "еда на вынос",
	'ipm':[988.20,658.80,1317.60,0,940,1042,0,0,510],	
	'ibgc':"#8e8c6d"
},
{
	'ilabel': "кафе",
	'ipm':[0,0,0,0,425,5270,1128,1769,1829],	
	'ibgc':"#FFCCCC"
},
{
	'ilabel': "квартплата",
	'ipm':[33312.49,32242.71,32232,33465.31,39615.27,41750,29800,29950,29900],	
	'ibgc':"#74c493"
},
{
	'ilabel': "косметика",
	'ipm':[0,0,0,0,458,57.90,374.90,160.90,0],	
	'ibgc':"#663300"
},
{
	'ilabel': "налоги",
	'ipm':[0,0,0,0,0,245,245,0,0],
	'ibgc':"#330033"
},
{
	'ilabel': "обеды",
	'ipm':[926.13,932.89,217,589,616,1151.18,1447.83,1697.00,1213],	
	'ibgc':"#FFCC00"
},
{
	'ilabel': "овощи-фрукты",
	'ipm':[3742.15,3728.20,5073.48,1705.81,1507.01,3492.84,1793.80,1783.03,5435.79],	
	'ibgc':"#6699FF"
},
{
	'ilabel': "одежда",
	'ipm':[0,0,0,0,4893,0,0,3479,5916.60],	
	'ibgc':"#FF9999"
},
{
	'ilabel': "отпуск",
	'ipm':[0,85435.45,41131.36,126967.05,7345,0,25832.83,20809.97,4400],	
	'ibgc':"#FF66FF"
},
{
	'ilabel': "подарки",
	'ipm':[5739.36,1065,7206.19,198.99,3635.02,787.57,18036.18,39710.10,8858.70],	
	'ibgc':"#c94a53"
},
{
	'ilabel': "поликлиника",
	'ipm':[0,33700,0,0,1872,0,0,1300,0],	
	'ibgc':"#993300"
},
{
	'ilabel': "продукты",
	'ipm':[10233.16,10992.41,9945.06,5505.66,9354.34,9523.43,9535.44,13750.42,8292.92],	
	'ibgc':"#339999"
},
{
	'ilabel': "проезд",
	'ipm':[2347,1765,110,330,2231,3115,1865,2490,2420],	
	'ibgc':"#e2975d"
},
{
	'ilabel': "развлечения",
	'ipm':[0,0,0,0,0,720,0,0,0],	
	'ibgc':"#FF0000"
},
{
	'ilabel': "сладости",
	'ipm':[2560.25,1824.58,1787.90,1742.98,2603.41,2180.89,2018.17,4000.73,1472.47],	
	'ibgc':"#447c69"
},
{
	'ilabel': "спорт",
	'ipm':[8019.28,0,536.70,0,20088,5000,1991.42,500.50,336],	
	'ibgc':"#e4bf80"
},
{
	'ilabel': "стрижка",
	'ipm':[0,0,0,450,0,0,450,1450,0],	
	'ibgc':"#eeeee"
},
{
	'ilabel': "такси",
	'ipm':[0,0,0,0,2321,0,0,2201,841],	
	'ibgc':"#FFFF33"
},
{
	'ilabel': "техника",
	'ipm':[0,0,5326,0,5659,0,0,18088,300],	
	'ibgc':"#666633"
},
{
	'ilabel': "учеба",
	'ipm':[5346.90,0,0,0,0,0,0,0,0],	
	'ibgc':"#f19670"
},
{
	'ilabel': "хозяйственное",
	'ipm':[1296.65,1051.43,1852.50,1810.87,1928.39,2719.66,215.50,1824.50,811.60],	
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
		labels: ["Январь","Февраль","Март","Апрель","Май","Июнь", "Июль", "Август","Сентябрь"],// "Октябрь", "Ноябрь", "Декабрь"],
		datasets: DS
	},
	options:{
		onClick: function(c,i) {
			e = i[0];
			console.log(e._view.label); // month.label e._index month number
			console.log(this.getElementsAtEvent(c));
			//console.log(this.data.labels[e._index]);
			//console.log(this.data.datasets);
			/* console.log(e._index)
			var x_value = this.data.labels[e._index];
			var y_value = this.data.datasets[0].data[e._index];
			console.log(x_value);
			console.log(y_value); */
		}
	}	
});

let data = [];
labels = ["Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август","Сентябрь"];//"Октябрь", "Ноябрь", "Декабрь"],
for(var i=0; i < labels.length; i++){
	let sum = 0;
	RI.forEach(function(o){
		//console.log(o.ilabel+' : '+o.ipm[i]);
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
			backgroundColor: ["#6633FF","#f19670","#339999","#666633","#447c69","#FFCC33","#993300","#f19670","#666633"]
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